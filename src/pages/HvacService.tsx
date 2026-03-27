import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-hvac.jpg";
import { Thermometer, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const HvacService = () => (
  <>
    <Helmet>
      <title>HVAC Services Houston TX | Water Damage Prevention | CBRS Group</title>
      <meta name="description" content="HVAC services in Houston, TX. Condensate line repair, drain pan replacement, preventative maintenance to prevent water damage. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/hvac" />
      <meta property="og:title" content="HVAC Services Houston TX | CBRS Group" />
      <meta property="og:description" content="HVAC services in Houston, TX. Condensate line repair, drain pan replacement, preventative maintenance to prevent water damage." />
      <meta property="og:url" content="https://restoration.cbrsgroup.com/services/hvac" />
    </Helmet>
    <ServicePageLayout
    title="HVAC Services"
    subtitle="Preventing Water Damage at the Source"
    description="HVAC system failures are one of the leading causes of water damage in homes and businesses. From condensate line clogs to frozen coils and drain pan overflow — we fix and prevent HVAC-related water damage."
    heroImage={heroImg}
    features={[
      "HVAC condensate line clearing and repair",
      "Drain pan inspection and replacement",
      "Frozen coil diagnosis and repair",
      "HVAC system installation and replacement",
      "Preventative maintenance programs",
      "HVAC repair services",
      "Water damage prevention inspections",
      "All work meets current building codes",
    ]}
    details={[
      { title: "Condensate Line Issues", description: "Clogged condensate lines are a top cause of indoor water damage. We clear, repair, and install safety switches.", icon: Droplets },
      { title: "Drain Pan Overflow", description: "Cracked or overflowing drain pans can cause significant ceiling and wall damage. We inspect, repair, and replace.", icon: AlertTriangle },
      { title: "Frozen Coil Damage", description: "Frozen evaporator coils lead to excess water when they thaw. We diagnose the root cause and prevent future leaks.", icon: Thermometer },
      { title: "Preventative Maintenance", description: "Regular HVAC maintenance prevents costly water damage before it starts — saving you thousands in restoration costs.", icon: Wrench },
      { title: "Code Compliant", description: "Every project meets or exceeds current building codes and safety standards.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed professionals you can trust with your property.", icon: ShieldCheck },
    ]}
    />
  </>
);

export default HvacService;
