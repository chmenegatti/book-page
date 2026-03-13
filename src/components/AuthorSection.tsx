import { motion } from "framer-motion";
import { BookOpenText, Github, Linkedin, Mail } from "lucide-react";

const AuthorSection = () => {
  return (
    <section id="autor" className="section-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl shadow-black/20"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary-foreground mb-5">
                <BookOpenText size={16} />
                Sobre o Autor
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="w-28 h-28 rounded-[1.75rem] gradient-go flex items-center justify-center text-primary-foreground text-4xl font-bold shrink-0 shadow-lg shadow-primary/20">
                  CM
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-2">
                    Cesar Henrique Menegatti de Oliveira
                  </h2>
                  <p className="text-primary-foreground/70 text-lg">
                    Desenvolvedor de software, autor e entusiasta de ensino pratico.
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed mb-4 text-lg">
                Desenvolvedor de software com experiencia em diversas linguagens e
                tecnologias. Apaixonado por ensino e por tornar conceitos complexos
                acessiveis, decidiu escrever este livro ao perceber a escassez de
                material de qualidade sobre Go em portugues.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 text-lg">
                Acredita que a melhor forma de aprender e atraves de analogias com o
                mundo real, pratica constante e exemplos que aproximam teoria e uso
                profissional.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/chmenegatti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/cesar-menegatti-54630b125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="mailto:cesar.menegatti@outlook.com.br"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  aria-label="E-mail"
                >
                  <Mail size={18} />
                  E-mail
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-7 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/50 mb-4">
                Visao do Livro
              </p>
              <p className="text-2xl font-semibold leading-snug text-primary-foreground mb-6">
                "Explicar Go com clareza, contexto e exemplos que facam sentido fora da tela."
              </p>
              <div className="space-y-4 text-primary-foreground/75">
                <p>
                  O foco do autor e ensinar fundamentos com linguagem direta, sem jargao
                  desnecessario e com ligacao constante com problemas reais de software.
                </p>
                <p>
                  O resultado e um livro pensado para quem quer sair da curiosidade e chegar
                  a aplicacao pratica da linguagem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
