import { ShieldCheck, Clock, Award, Droplets, Phone, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed and insured for your protection and peace of mind." },
  { icon: Clock, title: "24/7 Emergency Response", desc: "Available around the clock for urgent water and fire damage needs." },
  { icon: Award, title: "Industry Expertise", desc: "Years of restoration experience with proven systems and processes." },
  { icon: Droplets, title: "Water Damage Specialists", desc: "From burst pipes to floods — fast extraction, drying, and rebuild." },
  { icon: Phone, title: "One Call Does It All", desc: "Restoration, roofing, HVAC, and electrical — all under one roof." },
  { icon: MapPin, title: "Houston Based", desc: "Proudly serving the Greater Houston area and surrounding communities." },
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
