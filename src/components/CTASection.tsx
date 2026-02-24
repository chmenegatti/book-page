import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="gradient-cta py-24 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Pronto para dominar Go?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">
            Garanta seu exemplar com desconto de lançamento
          </p>

          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span className="text-primary-foreground/50 line-through text-lg">
              R$ 116,00
            </span>
            <span className="text-5xl md:text-6xl font-extrabold text-primary-foreground">
              R$ 92,00
            </span>
          </div>

          <div className="inline-flex bg-primary-foreground/20 text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
            Economize R$ 24,00
          </div>

          <div>
            <a
              href="https://www.uiclap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-accent/40 animate-pulse-glow"
            >
              COMPRAR AGORA NA UICLAP
            </a>
          </div>

          <p className="text-primary-foreground/50 text-sm mt-6">
            Livro impresso · Entrega para todo o Brasil · Publicado pela UICLAP
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
