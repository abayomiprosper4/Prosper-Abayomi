import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Why should I hire Prosper?",
  "What has he built?",
  "How can I get in touch?",
];

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (message = input) => {
    const question = message.trim();
    if (!question || isSending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const data = (await response.json().catch(() => null)) as {
        reply?: string;
        error?: string;
      } | null;

      if (!response.ok || !data?.reply) {
        throw new Error(
          data?.error ||
            `The chat service returned an unexpected response (${response.status}).`,
        );
      }

      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to reach the chat service. Please try again later.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 z-[10000] sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="Chat with Prosper's portfolio assistant"
            className="mb-3 flex h-[min(620px,calc(100dvh-112px))] w-[min(390px,calc(100vw-40px))] flex-col overflow-hidden rounded-xl border border-white/15 bg-[#101112] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Ask about Prosper
                  </p>
                  <p className="mt-0.5 text-xs text-white/45">
                    Portfolio AI assistant
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-md p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
              aria-live="polite"
            >
              {messages.length === 0 && (
                <div className="pt-2">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-blue-300">
                    <Bot className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-sm font-medium text-white">
                    What would you like to know?
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    Ask about Prosper&apos;s work, skills, services, or how to
                    get in touch.
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => void sendMessage(question)}
                        className="rounded-full border border-white/10 px-3 py-2 text-left text-xs text-white/70 transition hover:border-blue-400/50 hover:text-white"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[88%] whitespace-pre-wrap rounded-xl px-3.5 py-3 text-sm leading-relaxed ${message.role === "user" ? "bg-blue-500 text-white" : "border border-white/10 bg-white/[0.04] text-white/80"}`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}

              {isSending && (
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Thinking
                </div>
              )}
              {error && (
                <p
                  role="alert"
                  className="text-xs leading-relaxed text-rose-300"
                >
                  {error}
                </p>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 p-3"
            >
              <div className="flex items-end gap-2 rounded-lg border border-white/10 bg-black/30 p-2 focus-within:border-blue-400/50">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage();
                    }
                  }}
                  aria-label="Your question"
                  placeholder="Ask a question..."
                  rows={1}
                  maxLength={1200}
                  className="max-h-24 min-h-9 flex-1 resize-none bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isSending}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-500 text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-950/40 transition hover:scale-105 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
