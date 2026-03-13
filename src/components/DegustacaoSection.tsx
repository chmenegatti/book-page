import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText } from "lucide-react";

const pdfUrl = `${import.meta.env.BASE_URL}livro.Cap.1.pdf`;

const DegustacaoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="degustacao" className="section-light py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-light p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                <FileText size={16} />
                Degustacao
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                Leia um trecho antes de comprar
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Abra o primeiro capitulo e baixe o PDF para conhecer o estilo e a proposta do livro.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Capitulo 1
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
                  <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                    Segue uma degustacao do livro, fiel ao "manuscrito" enviado para a UICLAP. Aproveite.
                  </p>

                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-destructive px-8 py-4 text-base font-bold text-destructive-foreground transition-opacity hover:opacity-90"
                  >
                    <Download size={18} />
                    Baixar PDF
                  </a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DegustacaoSection;