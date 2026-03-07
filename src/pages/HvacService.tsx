import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-hvac.jpg";
import { Thermometer, Zap, Droplets, ShieldCheck, Wrench, ClipboardCheck } from "lucide-react";

const HvacService = () => (
  <ServicePageLayout
    title="HVAC, Electrical & Plumbing"
    subtitle="Complete Building Systems"
    description="Keep your property comfortable, efficient, and safe with our comprehensive HVAC, electrical, and plumbing services — all up to code."
    heroImage={heroImg}
    features={[
      "HVAC installation and replacement",
      "Heating and cooling system repair",
      "Electrical panel upgrades and wiring",
      "Lighting installation and repair",
      "Plumbing installation and repair",
      "Water heater services",
      "Preventative maintenance programs",
      "Emergency service available",
      "All work meets current building codes",
    ]}
    details={[
      { title: "HVAC Systems", description: "Expert installation, repair, and maintenance of heating and cooling systems for maximum comfort.", icon: Thermometer },
      { title: "Electrical Services", description: "Safe, code-compliant electrical work — from panel upgrades to full rewiring and lighting.", icon: Zap },
      { title: "Plumbing Services", description: "Professional plumbing installation, repair, and maintenance for residential and commercial properties.", icon: Droplets },
      { title: "Maintenance Plans", description: "Preventative maintenance programs to keep your building systems running efficiently year-round.", icon: Wrench },
      { title: "Code Compliant", description: "Every project meets or exceeds current California building codes and safety standards.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Fully licensed professionals you can trust with your property.", icon: ShieldCheck },
    ]}
  />
);

export default HvacService;
