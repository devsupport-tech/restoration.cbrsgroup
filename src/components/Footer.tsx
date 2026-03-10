import logo from "@/assets/cbrs-logo.png";
import { Facebook, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="CBRS Group Restorations" className="h-12" />
            </div>
            <p className="text-sm text-primary-foreground/50 mb-3">
              Professional restoration services serving the Greater Houston area.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Water Damage", href: "/services/restoration" },
                { label: "Fire Restoration", href: "/services/fire-restoration" },
                { label: "Roofing", href: "/services/roofing" },
                { label: "HVAC", href: "/services/hvac" },
                { label: "Electrical", href: "/services/electrical" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Contact"].map((link) => (
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
                <a href="tel:8326080535" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  (832) 608-0535
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  Houston, TX
                </span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/"
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
            © 2026 CBRS Group. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Serving the Greater Houston Area
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
