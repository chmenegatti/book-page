import { motion } from "framer-motion";
import { Rocket, RefreshCw, Brain } from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Iniciantes",
    description: "Nunca programou em Go? Sem problema. Este livro te leva do zero.",
  },
  {
    icon: RefreshCw,
    title: "Migração de linguagem",
    description: "Vem de Python, JavaScript ou Java? Migre para Go com fluidez.",
  },
  {
    icon: Brain,
    title: "Curiosos",
    description: "Ouviu falar que Go é rápido e simples? Descubra por quê.",
  },
];

const AudienceSection = () => {
  return (
    <section id="audiencia" className="section-light py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-16"
        >
          Para quem é este livro?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card-light p-8 text-center group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl gradient-go flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <card.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
