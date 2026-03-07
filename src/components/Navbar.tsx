import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Restoration", href: "/services/restoration" },
  { label: "Roofing", href: "/services/roofing" },
  { label: "Epoxy Flooring", href: "/services/epoxy-flooring" },
  { label: "HVAC & Electrical", href: "/services/hvac" },
  { label: "Custom Glass", href: "/services/glass" },
  { label: "Asphalt", href: "/services/asphalt" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top bar — white background with logo, tagline, phone */}
      <div className="bg-background">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Veterans Elite Contractors LLC" className="h-14" />
          </Link>

          <div className="hidden lg:flex flex-col items-center text-center">
            <span className="text-foreground font-heading text-lg font-semibold tracking-wide">
              Veteran-Owned Restoration &amp; Construction
            </span>
            <span className="text-accent text-sm font-semibold">
              Serving Del Mar &amp; San Diego County
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <span className="block text-muted-foreground text-xs">
                Call Now for a Free Estimate
              </span>
              <a
                href="tel:3109906999"
                className="flex items-center gap-2 text-accent font-heading text-xl font-bold hover:text-accent/80 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (310) 990-6999
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Bottom bar — red navigation links */}
      <div className="hidden md:block bg-accent border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-2">
            <p className="text-accent text-xs font-semibold mb-2">
              Serving Del Mar &amp; San Diego County
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-2.5 text-sm text-foreground/70 hover:text-foreground border-b border-border/50"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:3109906999"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-accent px-5 py-3 text-accent font-heading font-bold"
            >
              <Phone className="h-4 w-4" /> (310) 990-6999
            </a>
            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="mt-2 mb-3 block rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
