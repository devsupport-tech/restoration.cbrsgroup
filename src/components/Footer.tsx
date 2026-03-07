import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground mb-4">
              <Building2 className="h-5 w-5 text-accent" />
              <span className="font-heading font-bold">EliteBuilders</span>
            </div>
            <p className="text-sm text-primary-foreground/50">
              Premier commercial construction delivering excellence since 2001.
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
            © 2026 Elite Builders Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
