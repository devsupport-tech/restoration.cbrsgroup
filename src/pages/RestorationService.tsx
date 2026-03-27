import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-restoration.jpg";
import { Droplets, Home, Wind, Wrench, ShieldCheck, ClipboardCheck } from "lucide-react";

const RestorationService = () => (
  <>
    <Helmet>
      <title>Water Damage Restoration Houston TX | CBRS Group</title>
      <meta name="description" content="Professional water damage restoration in Houston, TX. 24/7 emergency water extraction, structural drying, mold remediation & full rebuild services. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/restoration" />
      <meta property="og:title" content="Water Damage Restoration Houston TX | CBRS Group" />
      <meta property="og:description" content="Professional water damage restoration in Houston, TX. 24/7 emergency water extraction, structural drying, mold remediation & full rebuild services." />
      <meta property="og:url" content="https://restoration.cbrsgroup.com/services/restoration" />
    </Helmet>
    <ServicePageLayout
    title="Water Damage Restoration"
    subtitle="Concierge Water Damage Services"
    description="From burst pipes and flooding to storm damage — professional water extraction, structural drying, mold remediation, and complete rebuild services with one dedicated team."
    heroImage={heroImg}
    features={[
      "Professional water extraction and removal",
      "Structural drying and dehumidification",
      "Mold inspection and remediation",
      "Storm and flood damage restoration",
      "Burst pipe and plumbing leak repair",
      "Content pack-out and restoration",
      "Insurance claims assistance",
      "Full reconstruction and rebuild",
    ]}
    details={[
      { title: "Water Extraction", description: "Professional water extraction using industrial equipment to minimize damage and begin the restoration process.", icon: Droplets },
      { title: "Structural Drying", description: "Industrial-grade dehumidification and air movement to fully dry your property and prevent mold growth.", icon: Wind },
      { title: "Mold Remediation", description: "Professional mold inspection, containment, removal, and prevention to protect your health and property.", icon: ShieldCheck },
      { title: "Full Rebuild", description: "Complete structural repair and reconstruction — from drywall and flooring to full room rebuilds.", icon: Home },
      { title: "Insurance Support", description: "We work directly with your insurance company to document damage and streamline the claims process.", icon: ClipboardCheck },
      { title: "Content Restoration", description: "Professional pack-out, cleaning, and restoration of personal belongings and furniture.", icon: Wrench },
    ]}
    />
  </>
);

export default RestorationService;
