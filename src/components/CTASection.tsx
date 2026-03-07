import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Let's build something<br />great together.
        </h2>
        <p className="text-accent-foreground/80 mb-8 max-w-md mx-auto">
          Ready to start your next commercial project? Get in touch with our team for a free consultation.
        </p>
        <a
          href="mailto:info@elitebuilders.com"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
