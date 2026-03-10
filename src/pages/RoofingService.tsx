import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-roofing.jpg";
import { Home, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const RoofingService = () => (
  <ServicePageLayout
    title="Roofing Services"
    subtitle="Protecting Your Property from Water Intrusion"
    description="Your roof is your first line of defense against water damage. Expert roofing repairs, storm damage restoration, leak detection, and full replacements."
    heroImage={heroImg}
    features={[
      "Emergency storm damage repair",
      "Roof leak detection and repair",
      "Full roof replacement",
      "Shingle, tile, and flat roof systems",
      "Gutter and drainage solutions",
      "Roof inspection and maintenance",
      "Insurance claims assistance",
      "Preventative maintenance programs",
    ]}
    details={[
      { title: "Storm Damage Repair", description: "Fast response to storm, wind, and hail damage — emergency tarping and permanent repairs.", icon: AlertTriangle },
      { title: "Leak Detection", description: "Advanced leak detection to find and fix water intrusion before it causes interior damage.", icon: Droplets },
      { title: "Full Replacement", description: "Complete roof replacement with quality materials and expert installation for long-term protection.", icon: Home },
      { title: "Preventative Care", description: "Regular inspection and maintenance programs to catch small issues before they become water damage emergencies.", icon: Wrench },
      { title: "Insurance Support", description: "We work with your insurance to document storm damage and streamline your roofing claim.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed and insured roofing professionals you can trust.", icon: ShieldCheck },
    ]}
  />
);

export default RoofingService;
