import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-restoration.jpg";
import { Flame, Wind, Home, Wrench, ShieldCheck, ClipboardCheck } from "lucide-react";

const FireRestorationService = () => (
  <>
    <Helmet>
      <title>Fire Damage Restoration Houston TX | CBRS Group</title>
      <meta name="description" content="Expert fire and smoke damage restoration in Houston, TX. Board-up, debris removal, structural repair, odor removal & full rebuild services. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/fire-restoration" />
      <meta property="og:title" content="Fire Damage Restoration Houston TX | CBRS Group" />
      <meta property="og:description" content="Expert fire and smoke damage restoration in Houston, TX. Board-up, debris removal, structural repair, odor removal & full rebuild services." />
      <meta property="og:url" content="https://restoration.cbrsgroup.com/services/fire-restoration" />
    </Helmet>
    <ServicePageLayout
    title="Fire Restoration Services"
    subtitle="Fire & Smoke Damage Experts"
    description="Complete fire and smoke damage restoration — from board-up and debris removal to full structural repair, content cleaning, and rebuild. One team managing your entire project."
    heroImage={heroImg}
    features={[
      "Property board-up and securing",
      "Fire damage assessment and documentation",
      "Structural repair and rebuild",
      "Smoke and soot damage cleaning",
      "Odor removal and air quality restoration",
      "Content cleaning and restoration",
      "Insurance claims assistance",
      "Full reconstruction services",
    ]}
    details={[
      { title: "Dedicated Project Manager", description: "Your single point of contact who coordinates every aspect of your fire restoration from start to finish.", icon: Flame },
      { title: "Smoke & Soot Removal", description: "Professional smoke and soot cleaning from all surfaces, including specialized treatments for different materials.", icon: Wind },
      { title: "Structural Repair", description: "Complete structural assessment and repair — from framing and drywall to full rebuilds.", icon: Home },
      { title: "Content Restoration", description: "Professional cleaning and restoration of personal belongings, furniture, and electronics affected by fire and smoke.", icon: Wrench },
      { title: "Insurance Support", description: "We work directly with your insurance company to document damage and streamline the claims process.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed and insured professionals you can trust with your property restoration.", icon: ShieldCheck },
    ]}
    />
  </>
);

export default FireRestorationService;
