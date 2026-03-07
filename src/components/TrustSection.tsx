import { ShieldCheck, Clock, Award, Users, Phone, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "CA Lic. #1140407 — fully licensed and insured for your protection." },
  { icon: Clock, title: "24/7 Emergency Response", desc: "Available around the clock for urgent restoration needs." },
  { icon: Award, title: "Veteran-Owned & Operated", desc: "Military discipline and precision in every project we undertake." },
  { icon: Users, title: "Supporting Fellow Veterans", desc: "Helping veterans build rewarding careers in the construction trades." },
  { icon: Phone, title: "One-Stop-Shop", desc: "Multiple services under one roof — no need to hire multiple contractors." },
  { icon: MapPin, title: "Local Del Mar Presence", desc: "Proudly serving Del Mar, San Diego County, and Southern California." },
];

const TrustSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Clients Trust<br />Veterans Elite Contractors
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
