import { Flame, Droplets, Home, Zap, GlassWater, Construction, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Flame,
    title: "Restoration Services",
    desc: "Fire, smoke, water, and flood damage restoration with 24/7 emergency response and disaster claims assistance.",
    href: "/services/restoration",
  },
  {
    icon: Home,
    title: "Roofing Services",
    desc: "Expert roofing installations, repairs, and storm damage repair — durable solutions that stand the test of time.",
    href: "/services/roofing",
  },
  {
    icon: Construction,
    title: "Epoxy Flooring",
    desc: "High-quality garage, warehouse, and commercial epoxy flooring combining strength, safety, and style.",
    href: "/services/epoxy-flooring",
  },
  {
    icon: Zap,
    title: "HVAC, Electrical & Plumbing",
    desc: "Complete building systems — installation and repair to keep your property running smoothly, safely, and up to code.",
    href: "/services/hvac-electrical-plumbing",
  },
  {
    icon: GlassWater,
    title: "Custom Glass Solutions",
    desc: "Professional custom glass installations, repairs, and specialty glass work for residential and commercial properties.",
    href: "/services/custom-glass",
  },
  {
    icon: Droplets,
    title: "Asphalt Solutions",
    desc: "Professional paving for driveways, parking lots, and roadways — built to last with quality materials.",
    href: "/services/asphalt",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Services<br />Under One Roof
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
