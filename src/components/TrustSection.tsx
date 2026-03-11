import { ShieldCheck, Star, Award, FileText, Phone, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed general contractor with comprehensive insurance coverage for your protection." },
  { icon: Star, title: "Concierge Service", desc: "White-glove restoration experience. We handle every detail so you can focus on what matters most." },
  { icon: FileText, title: "Insurance Coordination", desc: "We work directly with your insurance company, handling documentation and claims to ease your burden." },
  { icon: Award, title: "Full-Service Contractor", desc: "From initial assessment to complete rebuilds, we manage your entire restoration project." },
  { icon: Phone, title: "One Point of Contact", desc: "No juggling multiple contractors. One dedicated team handles restoration, roofing, HVAC, and electrical." },
  { icon: MapPin, title: "Houston Based", desc: "Local experts proudly serving the Greater Houston area and surrounding communities." },
];

const TrustSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Clients Trust<br />CBRS Group
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl bg-secondary p-6">
              <reason.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-1">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
