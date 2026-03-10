import { Droplets, Flame, Home, Thermometer, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    desc: "Burst pipes, flooding, and leaks cause immediate damage to your property. As your contractor, we provide emergency water extraction, structural drying, mold remediation, and complete rebuild — restoring your property to pre-loss condition.",
    href: "/services/restoration",
  },
  {
    icon: Flame,
    title: "Fire Restoration",
    desc: "Fire and smoke damage requires specialized restoration. We handle everything from emergency board-up to structural repairs, smoke odor elimination, content cleaning, and full rebuilding — managing your entire restoration as your general contractor.",
    href: "/services/fire-restoration",
  },
  {
    icon: Home,
    title: "Roofing Services",
    desc: "Storm damage, missing shingles, and roof leaks lead directly to water intrusion and interior damage. We repair and replace roofs to protect your property and prevent costly water damage restoration needs.",
    href: "/services/roofing",
  },
  {
    icon: Thermometer,
    title: "HVAC Services",
    desc: "Failed AC units cause condensation and water damage. Heating failures lead to frozen, burst pipes. Our HVAC services repair damage and prevent future disasters that lead to major restoration projects.",
    href: "/services/hvac",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "Electrical faults cause fires. Failed sump pumps cause flooding. Water heater failures cause sudden water damage. We restore and repair electrical systems to prevent the disasters that require restoration.",
    href: "/services/electrical",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Full-Service Restoration<br />& Prevention
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From emergency response to complete rebuilds, we serve as your single contractor for all restoration needs. Each service connects to help you recover fully — and prevent future damage.
          </p>
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
