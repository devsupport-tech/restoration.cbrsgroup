import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-restoration.jpg";
import { Flame, Wind, Home, Wrench, ShieldCheck, ClipboardCheck } from "lucide-react";

const FireRestorationService = () => (
  <ServicePageLayout
    title="Fire Restoration Services"
    subtitle="Fire & Smoke Damage Experts"
    description="Complete fire and smoke damage restoration — from emergency board-up and debris removal to full structural repair, content cleaning, and rebuild."
    heroImage={heroImg}
    emergency
    features={[
      "Emergency board-up and securing",
      "Fire damage assessment and documentation",
      "Structural repair and rebuild",
      "Smoke and soot damage cleaning",
      "Odor removal and air quality restoration",
      "Content cleaning and restoration",
      "Insurance claims assistance",
      "Full reconstruction services",
    ]}
    details={[
      { title: "Emergency Response", description: "24/7 emergency response to secure your property and begin the restoration process immediately.", icon: Flame },
      { title: "Smoke & Soot Removal", description: "Professional smoke and soot cleaning from all surfaces, including specialized treatments for different materials.", icon: Wind },
      { title: "Structural Repair", description: "Complete structural assessment and repair — from framing and drywall to full rebuilds.", icon: Home },
      { title: "Content Restoration", description: "Professional cleaning and restoration of personal belongings, furniture, and electronics affected by fire and smoke.", icon: Wrench },
      { title: "Insurance Support", description: "We work directly with your insurance company to document damage and streamline the claims process.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed and insured professionals you can trust with your property restoration.", icon: ShieldCheck },
    ]}
  />
);

export default FireRestorationService;
