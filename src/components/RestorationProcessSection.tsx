import { Droplets, Flame, CloudRain, Thermometer, Zap, ArrowRight } from "lucide-react";

const causes = [
  {
    icon: Droplets,
    title: "Burst Pipes & Plumbing Failures",
    description: "Frozen pipes, corroded lines, or sudden plumbing failures can release thousands of gallons of water into your property in minutes, damaging floors, walls, and belongings.",
  },
  {
    icon: Flame,
    title: "Fire & Smoke Damage",
    description: "Kitchen fires, electrical faults, or accidents can cause devastating fire and smoke damage. Even small fires leave behind soot, odors, and structural concerns that require professional restoration.",
  },
  {
    icon: CloudRain,
    title: "Storm & Flood Damage",
    description: "Houston's severe weather brings heavy rains, flooding, and high winds. Storm damage can compromise your roof, allowing water intrusion that leads to extensive interior damage.",
  },
  {
    icon: Thermometer,
    title: "HVAC System Failures",
    description: "A failed AC unit can cause condensation buildup and water damage. Heating system malfunctions can lead to frozen pipes. Regular maintenance prevents these costly disasters.",
  },
  {
    icon: Zap,
    title: "Electrical Issues",
    description: "Faulty wiring can spark fires. Failed sump pumps lead to basement flooding. Water heater failures cause sudden flooding. Electrical problems are often hidden until disaster strikes.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Emergency Response",
    description: "Call us 24/7. We respond immediately to assess the damage and begin emergency mitigation to prevent further loss.",
  },
  {
    step: "02",
    title: "Assessment & Documentation",
    description: "We thoroughly document all damage for insurance purposes and create a comprehensive restoration plan tailored to your property.",
  },
  {
    step: "03",
    title: "Insurance Coordination",
    description: "We work directly with your insurance company, handling claims paperwork and ensuring you receive fair coverage for your restoration.",
  },
  {
    step: "04",
    title: "Mitigation & Cleanup",
    description: "Our team extracts water, removes debris, cleans smoke damage, and takes all necessary steps to stabilize your property.",
  },
  {
    step: "05",
    title: "Restoration & Rebuild",
    description: "As your general contractor, we handle all repairs — structural, electrical, HVAC, roofing, and finishing work to restore your property.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    description: "We conduct a detailed final inspection with you to ensure every aspect of the restoration meets our high standards and your expectations.",
  },
];

const RestorationProcessSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* What Leads to Restoration */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Understanding Property Damage</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Leads to Restoration Needs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Property damage can strike without warning. Understanding common causes helps you respond quickly — and knowing CBRS Group is here gives you peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="rounded-2xl bg-card p-6 border border-border/50"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <cause.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{cause.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cause.description}</p>
            </div>
          ))}
        </div>

        {/* Our Restoration Process */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            How We Restore Your Property
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From the moment you call to the final walkthrough, we manage every step of your restoration. One contractor, one point of contact, complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="rounded-2xl bg-card p-6 relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-heading font-bold text-accent/20">{item.step}</span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-accent/30 hidden lg:block absolute right-4 top-8" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to start your restoration? We're available 24/7 to help.
          </p>
          <a
            href="tel:8326080535"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Call (832) 608-0535
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestorationProcessSection;
