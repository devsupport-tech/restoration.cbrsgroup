import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Your Trusted Restoration<br />Contractor
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              <span className="font-semibold text-foreground">CBRS Group</span> is your full-service restoration contractor serving the Greater Houston area. When disaster strikes — whether it's a burst pipe flooding your home, a fire damaging your business, or storm damage compromising your roof — we're here to guide you through every step of the restoration process.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Property damage can happen in an instant: a frozen pipe bursts overnight, an electrical fault sparks a fire, an HVAC failure leads to water damage, or severe weather tears through your roof. These events are stressful and overwhelming, but you don't have to face them alone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As your general contractor, we manage the entire restoration from start to finish. We handle the emergency response, work directly with your insurance company, coordinate all repairs and rebuilding, and don't stop until your property is fully restored. One contractor. One point of contact. Complete restoration.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
              How We Help You Through the Process
            </h3>
            <ul className="space-y-4">
              {[
                "24/7 emergency response when disaster strikes",
                "Thorough damage assessment and documentation",
                "Direct insurance claim assistance and coordination",
                "Professional water extraction and structural drying",
                "Fire, smoke, and odor remediation",
                "Complete structural repairs and rebuilding",
                "Roofing, HVAC, and electrical restoration",
                "Final walkthrough and quality assurance",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
