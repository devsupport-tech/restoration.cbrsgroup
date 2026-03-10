import { ArrowRight, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Your Restoration Contractor<br />From Start to Finish
        </h2>
        <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
          Whether you're facing an emergency or planning restoration work, CBRS Group is your single point of contact. We handle everything — from insurance coordination to complete rebuilds. Let us guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="tel:8326080535"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" /> (832) 608-0535
          </a>
          <a
            href="mailto:info@cbrsgroup.com"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-foreground px-8 py-3.5 text-sm font-semibold text-accent hover:bg-accent-foreground/90 transition-colors"
          >
            Get Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-accent-foreground/70 text-sm">
          <MapPin className="h-4 w-4" />
          Houston, TX
        </div>
      </div>
    </section>
  );
};

export default CTASection;
