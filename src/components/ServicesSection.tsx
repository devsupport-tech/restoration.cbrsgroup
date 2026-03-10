import { Droplets, Flame, Home, Thermometer, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    desc: "Complete water damage restoration — from emergency water extraction to full structural drying, mold remediation, and rebuild.",
    href: "/services/restoration",
  },
  {
    icon: Flame,
    title: "Fire Restoration",
    desc: "Expert fire and smoke damage restoration — structural repair, smoke odor removal, content cleaning, and full rebuild services.",
    href: "/services/fire-restoration",
  },
  {
    icon: Home,
    title: "Roofing Services",
    desc: "Storm damage repair, leak detection, and full roof replacements — protecting your property from water intrusion at its source.",
    href: "/services/roofing",
  },
  {
    icon: Thermometer,
    title: "HVAC Services",
    desc: "HVAC failures are a leading cause of water damage. We handle repairs, replacements, and preventative maintenance to protect your property.",
    href: "/services/hvac",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Faulty electrical systems can cause water heater failures, sump pump issues, and flooding. Expert electrical services to prevent water damage.",
    href: "/services/electrical",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Restoration<br />& Prevention Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              to={service.href}
              key={service.title}
              className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-shadow group block"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
