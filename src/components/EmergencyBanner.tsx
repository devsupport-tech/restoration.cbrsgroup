import { Phone } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="bg-accent py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-accent-foreground font-semibold text-sm">
          🚨 24/7 Emergency Restoration Services Available
        </p>
        <a
          href="tel:8326080535"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Phone className="h-3.5 w-3.5" /> Call Now: (832) 608-0535
        </a>
      </div>
    </section>
  );
};

export default EmergencyBanner;
