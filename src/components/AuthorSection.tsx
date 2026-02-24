import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const AuthorSection = () => {
  return (
    <section id="autor" className="section-light py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-16"
        >
          Sobre o Autor
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full gradient-go flex items-center justify-center text-primary-foreground text-4xl font-bold shrink-0 shadow-lg">
            CM
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Cesar Henrique Menegatti de Oliveira
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desenvolvedor de software com experiência em diversas linguagens e
              tecnologias. Apaixonado por ensino e por tornar conceitos complexos
              acessíveis, decidiu escrever este livro ao perceber a escassez de
              material de qualidade sobre Go em português. Acredita que a melhor
              forma de aprender é através de analogias com o mundo real e prática
              constante.
            </p>
            <p className="text-muted-foreground italic mb-6">
              "Quando não está programando, está provavelmente tomando café e
              pensando em como explicar concorrência usando analogias de cozinha. ☕"
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/chmenegatti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/cesar-menegatti-54630b125"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:cesar.menegatti@outlook.com.br"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="E-mail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
