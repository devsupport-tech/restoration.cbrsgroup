import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/service-hvac.jpg";
import { Zap, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const electricalFAQs = [
  {
    question: "How do electrical issues cause water damage?",
    answer: "Electrical failures can cause water heater malfunctions leading to leaks or flooding, sump pump failures during storms, and problems with moisture detection systems. Proper electrical installation and maintenance prevents these water damage scenarios.",
  },
  {
    question: "Can you install a backup power system for my sump pump?",
    answer: "Yes, we install battery backup systems and generator connections for sump pumps. This ensures your basement stays protected during power outages when flooding risk is often highest.",
  },
  {
    question: "My water heater is leaking — is it electrical or plumbing?",
    answer: "It could be either. Electric water heaters can leak from failed heating elements, faulty thermostats, or corroded tanks. We diagnose the root cause and either repair the electrical components or coordinate with plumbers if needed.",
  },
  {
    question: "Do you install water leak detection systems?",
    answer: "Yes, we install and wire water leak detection systems that alert you to leaks before they cause major damage. These systems can be placed near water heaters, under sinks, near washing machines, and in basements.",
  },
  {
    question: "How quickly can you respond to an electrical emergency related to water damage?",
    answer: "We offer 24/7 emergency response. If you have standing water near electrical systems or a water heater emergency, call us immediately at (832) 608-0535. Safety is the priority — never enter standing water if electrical systems may be affected.",
  },
  {
    question: "Do you handle both the electrical repair and water damage restoration?",
    answer: "Yes, we provide complete service. We fix the electrical issue, address any water damage to your home, and ensure everything is safe and up to code. One company handles your entire restoration project.",
  },
];

const ElectricalService = () => (
  <>
    <Helmet>
      <title>Electrician Houston TX | Sump Pump & Water Heater Repair | CBRS Group</title>
      <meta name="description" content="Houston electrician specializing in water damage prevention. Sump pump installation, water heater repair, panel upgrades & leak detection systems. Licensed & insured. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/electrical" />
      <meta property="og:title" content="Electrician Houston TX | Sump Pump & Water Heater Repair" />
      <meta property="og:description" content="Houston electrician. Sump pump installation, water heater repair, panel upgrades & leak detection systems. Call (832) 608-0535." />
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
    >
      <FAQSection faqs={electricalFAQs} title="Electrical & Water Damage Prevention FAQs" />
    </ServicePageLayout>
  </>
);

export default ElectricalService;
