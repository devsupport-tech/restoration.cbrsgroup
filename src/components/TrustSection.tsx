import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed & fully insured", desc: "Complete coverage for every project." },
  { icon: Clock, title: "On-time, on-budget delivery", desc: "We respect your timeline and finances." },
  { icon: Award, title: "20+ years of construction expertise", desc: "Decades of proven excellence." },
  { icon: Users, title: "Trusted by event industry pros", desc: "Preferred by leading businesses." },
];

const TrustSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why businesses trust elite builders inc.
            </h2>
            <p className="text-muted-foreground">
              97% of our clients recommend us — here's why we're the trusted choice for commercial construction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <reason.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
