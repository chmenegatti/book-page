import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import bookMockup from "@/assets/book-mockup.png";

const AMAZON_LINK =
  "https://www.amazon.com.br/Go-Pr%C3%A1tica-Cap%C3%ADtulos-Dominar-Linguagem-ebook/dp/B0GQDC58N9/ref=sr_1_1?crid=363BEXSOAQRWU&dib=eyJ2IjoiMSJ9.H8NR6SKxnFk4cUAoh3Qt6di7HZQ6FPCSEWiCNYRDZn_GjHj071QN20LucGBJIEps.H1PeFbD6xXe1tb_oc_ZVKKYk9aLUQ-aZB9CauaQvWHU&dib_tag=se&keywords=go+na+pratica&qid=1773256378&sprefix=%2Caps%2C200&sr=8-1";

const HeroSection = () => {
  return (
    <section className="section-dark relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(193 100% 42% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(193 100% 42% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-pulse-glow"
            >
              🔥 PROMOÇÃO DE LANÇAMENTO
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-4">
              <span className="text-gradient-go">Go</span> na Prática
            </h1>

            <p className="text-xl md:text-2xl text-primary/80 font-semibold mb-4">
              30 Capítulos para Dominar a Linguagem
            </p>

            <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Aprenda Go do zero ao projeto final com analogias do mundo real,
              +100 exercícios práticos e 5 apêndices — tudo em português.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-primary-foreground/40 line-through text-lg">
                R$ 92,84
              </span>
              <span className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
                R$ 73,50
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://loja.uiclap.com/titulo/ua160621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-accent/30 text-center"
                >
                  COMPRAR AGORA NA UICLAP
                </a>
                <a
                  href={AMAZON_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all text-center"
                >
                  COMPRAR NA AMAZON (KINDLE)
                </a>
              </div>
              <a
                href="#sumario"
                className="border border-primary/30 text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/10 transition-all text-center flex items-center justify-center gap-2"
              >
                Ver sumário completo <ArrowDown size={18} />
              </a>
            </div>
          </motion.div>

          {/* Book mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 glow-go rounded-2xl blur-2xl opacity-30" />
              <img
                src={bookMockup}
                alt="Livro Go na Prática — 30 Capítulos para Dominar a Linguagem"
                className="relative w-72 md:w-96 animate-float drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
