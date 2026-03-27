import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-hvac.jpg";
import { Zap, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const ElectricalService = () => (
  <>
    <Helmet>
      <title>Electrical Services Houston TX | Water Damage Prevention | CBRS Group</title>
      <meta name="description" content="Electrical services in Houston, TX. Water heater connections, sump pump installation, panel upgrades & leak detection systems. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/electrical" />
      <meta property="og:title" content="Electrical Services Houston TX | CBRS Group" />
      <meta property="og:description" content="Electrical services in Houston, TX. Water heater connections, sump pump installation, panel upgrades & leak detection systems." />
      <meta property="og:url" content="https://restoration.cbrsgroup.com/services/electrical" />
    </Helmet>
    <ServicePageLayout
    title="Electrical Services"
    subtitle="Preventing Water Damage Through Electrical Safety"
    description="Faulty electrical systems cause water heater failures, sump pump breakdowns, and flooding. Our electrical services address the hidden causes of water damage in your home or business."
    heroImage={heroImg}
    features={[
      "Water heater electrical connections and repair",
      "Sump pump electrical installation and repair",
      "Circuit breaker and panel upgrades",
      "Electrical inspections for water damage risk",
      "Generator installation for flood pump backup",
      "Moisture detection system wiring",
      "Electrical services and repairs",
      "All work meets current building codes",
    ]}
    details={[
      { title: "Water Heater Failures", description: "Electrical failures in water heaters cause leaks and flooding. We repair and install reliable electrical connections.", icon: Droplets },
      { title: "Sump Pump Systems", description: "When sump pumps lose power, basements flood. We install backup power and ensure reliable electrical supply.", icon: AlertTriangle },
      { title: "Panel Upgrades", description: "Outdated electrical panels can't handle modern loads, leading to equipment failures and water damage.", icon: Zap },
      { title: "Detection Systems", description: "We wire and install water detection and leak alert systems to catch problems before they become disasters.", icon: Wrench },
      { title: "Code Compliant", description: "Every project meets or exceeds current building codes and safety standards.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed professionals you can trust with your property.", icon: ShieldCheck },
    ]}
    />
  </>
);

export default ElectricalService;
