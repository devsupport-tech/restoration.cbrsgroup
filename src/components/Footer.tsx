import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Veterans Elite Contractors LLC" className="h-12" />
            </div>
            <p className="text-sm text-primary-foreground/50">
              Veteran-owned commercial construction delivering excellence with discipline and precision.
            </p>
          </div>

          {[
            { title: "Services", links: ["Office Build", "Industrial", "Retail", "Hospitality"] },
            { title: "Company", links: ["About", "Careers", "News", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Insurance"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Veterans Elite Contractors LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
