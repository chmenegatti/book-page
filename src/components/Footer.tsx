const Footer = () => {
  const amazonLink =
    "https://www.amazon.com.br/Go-Pr%C3%A1tica-Cap%C3%ADtulos-Dominar-Linguagem-ebook/dp/B0GQDC58N9/ref=sr_1_1?crid=363BEXSOAQRWU&dib=eyJ2IjoiMSJ9.H8NR6SKxnFk4cUAoh3Qt6di7HZQ6FPCSEWiCNYRDZn_GjHj071QN20LucGBJIEps.H1PeFbD6xXe1tb_oc_ZVKKYk9aLUQ-aZB9CauaQvWHU&dib_tag=se&keywords=go+na+pratica&qid=1773256378&sprefix=%2Caps%2C200&sr=8-1";

  return (
    <footer className="section-dark py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-primary font-bold text-lg">Go</span>
            <span className="text-primary-foreground/60"> na Prática</span>
          </div>

          <nav className="flex gap-6 text-sm">
            <a href="#sumario" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Sumário
            </a>
            <a href="#autor" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Sobre o Autor
            </a>
            <a
              href="https://loja.uiclap.com/titulo/ua154446/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Comprar na UICLAP
            </a>
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Comprar na Amazon
            </a>
          </nav>

          <div className="text-primary-foreground/30 text-xs text-center md:text-right">
            <p>© 2026 Cesar Henrique Menegatti de Oliveira.</p>
            <p>Todos os direitos reservados. Publicação independente via UICLAP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
