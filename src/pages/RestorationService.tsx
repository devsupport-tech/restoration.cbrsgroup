import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-restoration.jpg";
import { Flame, Droplets, Wind, ShieldCheck, Clock, FileText } from "lucide-react";

const RestorationService = () => (
  <ServicePageLayout
    title="Emergency Restoration Services"
    subtitle="24/7 Emergency Response"
    description="When disaster strikes, Veterans Elite Contractors responds fast with professional fire, smoke, water, and flood damage restoration across San Diego County."
    heroImage={heroImg}
    emergency
    features={[
      "Fire damage restoration and cleanup",
      "Smoke and soot damage remediation",
      "Water damage extraction and drying",
      "Flood damage restoration",
      "Mold remediation and prevention",
      "Structural damage assessment and repair",
      "Content cleaning and restoration",
      "Direct insurance billing and claims assistance",
      "24/7 emergency response availability",
    ]}
    details={[
      { title: "Fire & Smoke Damage", description: "Complete fire restoration including structural repair, smoke and soot removal, and odor elimination.", icon: Flame },
      { title: "Water & Flood Damage", description: "Rapid water extraction, professional drying, dehumidification, and full structural restoration.", icon: Droplets },
      { title: "Storm Damage", description: "Emergency response for wind, rain, and storm damage to your home or commercial property.", icon: Wind },
      { title: "Insurance Claims", description: "We work directly with your insurance company to streamline the claims process and reduce your stress.", icon: FileText },
      { title: "24/7 Emergency Response", description: "Our team is available around the clock — call anytime for immediate disaster response.", icon: Clock },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Fully licensed, bonded, and insured for your complete protection.", icon: ShieldCheck },
    ]}
  />
);

export default RestorationService;
