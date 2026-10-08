import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import chatHandler from "./api/chat";

export default defineConfig(({ mode }) => {
  const localEnv = loadEnv(mode, process.cwd(), "");
  process.env.OPENAI_API_KEY ||= localEnv.OPENAI_API_KEY;
  process.env.OPENAI_MODEL ||= localEnv.OPENAI_MODEL;

  return {
    plugins: [
      {
        name: "portfolio-chat-api",
        configureServer(server) {
          server.middlewares.use("/api/chat", async (request, response) => {
            const apiResponse: Parameters<typeof chatHandler>[1] = {
              status(statusCode) {
                response.statusCode = statusCode;
                return apiResponse;
              },
              json(body) {
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(body));
              },
            };

            if (request.method !== "POST") {
              await chatHandler({ method: request.method }, apiResponse);
              return;
            }

            try {
              const chunks: Buffer[] = [];
              let size = 0;
              for await (const chunk of request) {
                const buffer = Buffer.isBuffer(chunk)
                  ? chunk
                  : Buffer.from(chunk);
                size += buffer.length;
                if (size > 16_384) {
                  response.statusCode = 413;
                  response.setHeader("Content-Type", "application/json");
                  response.end(
                    JSON.stringify({ error: "Request is too large." }),
                  );
                  return;
                }
                chunks.push(buffer);
              }

              const body = JSON.parse(
                Buffer.concat(chunks).toString("utf8"),
              ) as unknown;
              await chatHandler({ method: request.method, body }, apiResponse);
            } catch {
              response.statusCode = 400;
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify({ error: "Invalid chat request." }));
            }
          });
        },
      },
      react(),
      svgr(),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
