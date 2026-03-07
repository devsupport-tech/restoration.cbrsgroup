import logo from "@/assets/logo.png";
import { Facebook, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Veterans Elite Contractors LLC" className="h-12" />
            </div>
            <p className="text-sm text-primary-foreground/50 mb-3">
              Veteran-owned restoration & construction serving Del Mar and Southern California.
            </p>
            <p className="text-xs text-primary-foreground/40">CA Lic. #1140407</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Services</h4>
            <ul className="space-y-2">
              {["Restoration", "Roofing", "Epoxy Flooring", "HVAC & Electrical", "Custom Glass", "Asphalt"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <a href="tel:3109906999" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  (310) 990-6999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  122 15th Street<br />Del Mar, CA 92014
                </span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/61582371644562/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Veterans Elite Contractors LLC. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Serving Del Mar, San Diego County & Southern California
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
