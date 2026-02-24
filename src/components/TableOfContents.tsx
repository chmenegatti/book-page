import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const parts = [
  {
    title: "Parte I — Fundamentos",
    subtitle: "Capítulos 1-10",
    chapters: [
      "Cap. 1: Por que Go?",
      "Cap. 2: Variáveis e Constantes",
      "Cap. 3: Tipos Básicos — A Química dos Materiais",
      "Cap. 4: Controle de Fluxo — O Guarda de Trânsito",
      "Cap. 5: Laços de Repetição (For) — A Pista de Corrida",
      "Cap. 6: Funções — As Mini-Fábricas Especializadas",
      "Cap. 7: Arrays e Slices — A Lista Fixa e a Lista Mágica",
      "Cap. 8: Maps — O Guarda-Volumes Inteligente",
      "Cap. 9: Ponteiros — O Endereço da Casa",
      "Cap. 10: Structs — A Ficha do Paciente",
    ],
  },
  {
    title: "Parte II — Orientação a Objetos ao Estilo Go",
    subtitle: "Capítulos 11-14",
    chapters: [
      "Cap. 11: Métodos — Dando Vida aos Dados",
      "Cap. 12: Interfaces — O Plugue Universal",
      "Cap. 13: Tratamento de Erros — Sem Pânico!",
      "Cap. 14: Pacotes e Módulos — Sua Caixa de Ferramentas",
    ],
  },
  {
    title: "Parte III — Concorrência",
    subtitle: "Capítulos 15-18",
    chapters: [
      "Cap. 15: Goroutines — A Cozinha Frenética e o Mágico Invisível",
      "Cap. 16: Channels — O Mensageiro Confiável",
      "Cap. 17: Buffered Channels e Select — O Malabarista de Dados",
      "Cap. 18: WaitGroups e Mutex — A Ordem no Caos",
    ],
  },
  {
    title: "Parte IV — O Mundo Real",
    subtitle: "Capítulos 19-25",
    chapters: [
      "Cap. 19: Manipulação de Arquivos e I/O — O Arquivista Digital",
      "Cap. 20: JSON — A Língua Franca da Web",
      "Cap. 21: Testes Automatizados — O Inspetor de Qualidade",
      "Cap. 22: Context — O Fio de Desarmar a Bomba",
      "Cap. 23: Generics — A Chave de Fenda Universal",
      "Cap. 24: Construindo um Servidor Web — A Janela para o Mundo",
      "Cap. 25: Projeto Final — O Encurtador de URL",
    ],
  },
  {
    title: "Parte V — Tópicos Complementares",
    subtitle: "Capítulos 26-30",
    chapters: [
      "Cap. 26: O Pacote strings — O Canivete Suíço do Texto",
      "Cap. 27: O Pacote time — O Relojoeiro de Precisão",
      "Cap. 28: A Função init() — O Bastidor Antes do Show",
      "Cap. 29: O Pacote flag e Ferramentas CLI — O Artesão de Linha de Comando",
      "Cap. 30: database/sql — O Tradutor Universal de Bancos de Dados",
    ],
  },
  {
    title: "Apêndices",
    subtitle: "A-E + Gabarito",
    chapters: [
      "A: Cliente HTTP — Consumindo APIs como um Profissional",
      "B: Error Wrapping — Rastreando Erros como um Detetive",
      "C: Logging Estruturado com log/slog — O Diário de Bordo Profissional",
      "D: Organização de Projetos Go — A Planta Baixa do Prédio",
      "E: fmt.Sprintf, Verbos de Formatação e strconv — A Tipografia Precisa",
      "Gabarito completo com resolução de todos os exercícios",
    ],
  },
];

const TableOfContents = () => {
  return (
    <section id="sumario" className="section-light py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-16"
        >
          Sumário Completo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {parts.map((part, i) => (
              <AccordionItem
                key={i}
                value={`part-${i}`}
                className="glass-card-light px-6 border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="text-left">
                    <div className="font-bold text-foreground text-lg">{part.title}</div>
                    <div className="text-sm text-muted-foreground">{part.subtitle}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-4">
                    {part.chapters.map((ch, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground pl-4 border-l-2 border-primary/30 py-1 text-sm"
                      >
                        {ch}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default TableOfContents;
