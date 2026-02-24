import { motion } from "framer-motion";
import { Heart, Users, PenTool, BookOpen } from "lucide-react";

const MotivationSection = () => {
  return (
    <section id="motivacao" className="py-24 bg-gradient-to-b from-[hsl(var(--dark-bg))] to-[hsl(222,47%,15%)]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-6"
        >
          A Motivação
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-primary-foreground/60 mb-16 max-w-2xl mx-auto text-lg"
        >
          Por que escrever um livro sobre Go?
        </motion.p>

        <div className="space-y-8">
          {[
            {
              icon: Heart,
              title: "Paixão por programar e ensinar",
              text: "Programar é mais do que uma profissão — é o que me move. E ensinar é a forma mais gratificante de consolidar o conhecimento. Unir as duas paixões sempre foi um objetivo pessoal.",
            },
            {
              icon: Users,
              title: "Ajudando pares e equipes",
              text: "Ao longo da carreira, sempre fui a pessoa que sentava ao lado do colega para explicar um conceito difícil, fazer pair programming e descomplicar o que parecia impossível. Ensinar no dia a dia se tornou parte de quem eu sou.",
            },
            {
              icon: PenTool,
              title: "Compartilhando com a comunidade",
              text: "Os artigos técnicos no LinkedIn foram o próximo passo natural. Escrever sobre tecnologia para a comunidade me mostrou o impacto que um bom conteúdo em português pode ter na vida de outros desenvolvedores.",
            },
            {
              icon: BookOpen,
              title: "Um livro sobre Go",
              text: "Depois de ajudar equipes e escrever artigos, nada mais natural do que dar o próximo passo: escrever um livro completo sobre Go. Um material que reúne tudo o que aprendi ensinando, com analogias do mundo real e muita prática.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl gradient-go flex items-center justify-center shrink-0 shadow-lg">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
