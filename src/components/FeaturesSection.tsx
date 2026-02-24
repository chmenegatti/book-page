import { motion } from "framer-motion";
import { BookOpen, Target, Code2, Building2, Zap, Globe } from "lucide-react";

const features = [
  { icon: BookOpen, title: "100% em Português", description: "Material de qualidade na sua língua nativa, sem barreiras" },
  { icon: Target, title: "Analogias do mundo real", description: "Cada conceito vira algo familiar antes de virar código: cozinhas, guardas de trânsito, fichas de paciente" },
  { icon: Code2, title: "+100 exercícios práticos", description: "3 exercícios por capítulo: 🟢 Fácil, 🟡 Médio, 🔴 Desafio — com gabarito completo" },
  { icon: Building2, title: "Projeto final completo", description: "Construa um Encurtador de URL do zero no Capítulo 25" },
  { icon: Zap, title: "Concorrência de verdade", description: "Goroutines, Channels, Select, WaitGroups e Mutex explicados com clareza" },
  { icon: Globe, title: "Do zero ao servidor web", description: "Do 'Hello World' a APIs REST com net/http" },
];

const FeaturesSection = () => {
  return (
    <section id="diferenciais" className="section-dark py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-16"
        >
          O que torna este livro diferente?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feat.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{feat.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
