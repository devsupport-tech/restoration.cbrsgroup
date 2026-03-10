import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-restoration.jpg";
import { Droplets, Home, Wind, Wrench, ShieldCheck, ClipboardCheck } from "lucide-react";

const RestorationService = () => (
  <ServicePageLayout
    title="Water Damage Restoration"
    subtitle="24/7 Emergency Water Damage Services"
    description="From burst pipes and flooding to storm damage — fast emergency water extraction, structural drying, mold remediation, and complete rebuild services."
    heroImage={heroImg}
    emergency
    features={[
      "Emergency water extraction and removal",
      "Structural drying and dehumidification",
      "Mold inspection and remediation",
      "Storm and flood damage restoration",
      "Burst pipe and plumbing leak repair",
      "Content pack-out and restoration",
      "Insurance claims assistance",
      "Full reconstruction and rebuild",
    ]}
    details={[
      { title: "Emergency Extraction", description: "24/7 rapid response water extraction to minimize damage and begin the restoration process immediately.", icon: Droplets },
      { title: "Structural Drying", description: "Industrial-grade dehumidification and air movement to fully dry your property and prevent mold growth.", icon: Wind },
      { title: "Mold Remediation", description: "Professional mold inspection, containment, removal, and prevention to protect your health and property.", icon: ShieldCheck },
      { title: "Full Rebuild", description: "Complete structural repair and reconstruction — from drywall and flooring to full room rebuilds.", icon: Home },
      { title: "Insurance Support", description: "We work directly with your insurance company to document damage and streamline the claims process.", icon: ClipboardCheck },
      { title: "Content Restoration", description: "Professional pack-out, cleaning, and restoration of personal belongings and furniture.", icon: Wrench },
    ]}
  />
);

export default RestorationService;
