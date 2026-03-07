import { ArrowRight, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Let's build something<br />great together.
        </h2>
        <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
          Ready to start your next project? Need emergency restoration? Contact Veterans Elite Contractors for a free consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="tel:3109906999"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" /> (310) 990-6999
          </a>
          <a
            href="mailto:info@veteranselitecontractors.com"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-foreground px-8 py-3.5 text-sm font-semibold text-accent hover:bg-accent-foreground/90 transition-colors"
          >
            Get Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-accent-foreground/70 text-sm">
          <MapPin className="h-4 w-4" />
          122 15th Street, Del Mar, CA 92014
        </div>
      </div>
    </section>
  );
};

export default CTASection;
