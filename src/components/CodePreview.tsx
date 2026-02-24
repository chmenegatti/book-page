import { motion } from "framer-motion";

const codeSnippet = `package main

import "fmt"

func main() {
    linguagens := []string{"Python", "JavaScript", "Java"}

    for _, lang := range linguagens {
        fmt.Printf("Já sei %s, agora vou dominar Go! 🚀\\n", lang)
    }
}`;

const CodePreview = () => {
  return (
    <section className="section-dark py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-primary-foreground mb-12"
        >
          Amostra do Livro
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-1 rounded-2xl overflow-hidden"
        >
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-bg-secondary/50">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-primary-foreground/40 text-xs font-mono-code">
              main.go
            </span>
          </div>

          <pre className="p-6 overflow-x-auto">
            <code className="font-mono-code text-sm md:text-base leading-relaxed">
              {codeSnippet.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-primary-foreground/20 select-none w-8 text-right mr-4 shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-primary-foreground/80">
                    {colorLine(line)}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-primary-foreground/50 mt-8 text-lg"
        >
          Este é só o começo. São 30 capítulos de código prático esperando por você.
        </motion.p>
      </div>
    </section>
  );
};

function colorLine(line: string): React.ReactNode {
  // Simple syntax highlighting
  if (line.startsWith("package") || line.startsWith("import") || line.startsWith("func")) {
    const keyword = line.split(" ")[0];
    const rest = line.slice(keyword.length);
    return (
      <>
        <span className="text-cta-pink font-semibold">{keyword}</span>
        {colorStrings(rest)}
      </>
    );
  }
  if (line.includes("for") && line.includes("range")) {
    return (
      <>
        <span className="text-cta-pink font-semibold">{"    for"}</span>
        {colorStrings(line.slice(7))}
      </>
    );
  }
  return colorStrings(line);
}

function colorStrings(text: string): React.ReactNode {
  const parts = text.split(/(\"[^\"]*\")/g);
  return parts.map((part, i) =>
    part.startsWith('"') ? (
      <span key={i} className="text-green-400">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default CodePreview;
