import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../constants";
import { ExternalLink, X } from "lucide-react";

const Work: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const handleProjectClick = (
    e: React.MouseEvent,
    project: (typeof PROJECTS)[0]
  ) => {
    if (project.downloadUrl) {
      e.preventDefault();
      setSelectedPdf({ title: project.title, url: project.downloadUrl });
    }
  };

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-xs uppercase tracking-[0.5em] mb-4 text-white/40">
            Selected Works
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-xl">
            Impact over <span className="italic text-white/20">Noise</span>
          </h3>
        </div>
        <div className="text-white/40 text-sm max-w-[240px] leading-relaxed mb-4">
          Curated collection of projects bridging the gap between Computer
          Science and real-world utility.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 lg:gap-x-24">
        {PROJECTS.map((project, index) => {
          const isPdf = Boolean(project.downloadUrl);
          const targetUrl = project.downloadUrl || project.link;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer"
              data-cursor="pointer"
            >
              {/* Image Container */}
              <a
                href={targetUrl}
                target={isPdf ? undefined : "_blank"}
                rel={isPdf ? undefined : "noopener noreferrer"}
                onClick={(e) => handleProjectClick(e, project)}
                className="block"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-10 border border-white/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2"
                    >
                      {isPdf ? (
                        <>
                          View Case Study <ExternalLink className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          View Project <ExternalLink className="w-3 h-3" />
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">
                    {project.category}
                  </p>
                  <span className="text-[10px] text-white/20 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <a
                  href={targetUrl}
                  target={isPdf ? undefined : "_blank"}
                  rel={isPdf ? undefined : "noopener noreferrer"}
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <h4 className="text-3xl font-bold tracking-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h4>
                </a>

                <p className="text-white/50 text-base leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* In-App PDF Viewer Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl h-[90vh] bg-zinc-900 border border-white/10 rounded-md overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex items-center justify-between px-6 py-2 border-b border-white/10 bg-black/40">
                <h3 className="text-sm font-semibold text-white tracking-wide truncate max-w-md">
                  {selectedPdf.title}
                </h3>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  aria-label="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 w-full bg-zinc-950 relative">
                <iframe
                  src={`${selectedPdf.url}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={selectedPdf.title}
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;