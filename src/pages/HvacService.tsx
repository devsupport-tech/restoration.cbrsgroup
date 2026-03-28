import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/service-hvac.jpg";
import { Thermometer, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const hvacFAQs = [
  {
    question: "How does my HVAC system cause water damage?",
    answer: "HVAC systems produce condensation that drains through condensate lines. When these lines clog, or drain pans crack or overflow, water can leak into ceilings, walls, and floors. Frozen evaporator coils can also cause significant water damage when they thaw.",
  },
  {
    question: "How often should I have my HVAC system maintained?",
    answer: "We recommend professional HVAC maintenance twice a year — once before cooling season and once before heating season. Regular maintenance prevents condensate line clogs, drain pan issues, and other problems that lead to water damage.",
  },
  {
    question: "What are signs my HVAC is about to cause water damage?",
    answer: "Warning signs include water stains near vents or air handlers, musty odors from vents, reduced cooling efficiency, ice on refrigerant lines, and visible water around your indoor unit. If you notice any of these, call us immediately.",
  },
  {
    question: "Can you install a safety switch to prevent HVAC water damage?",
    answer: "Yes, we install float switches (also called overflow switches) that automatically shut off your AC when the drain pan fills up. This prevents overflow and protects your home from water damage when you're away.",
  },
  {
    question: "My AC is leaking water — how quickly can you respond?",
    answer: "We offer same-day service for HVAC water leak emergencies. A leaking AC can cause significant damage quickly, so we prioritize these calls. Call us at (832) 608-0535 and turn off your system to prevent further damage.",
  },
  {
    question: "Do you handle both the HVAC repair and water damage restoration?",
    answer: "Yes, we provide complete service — fixing the HVAC issue that caused the leak AND restoring any water damage to your home. One company, one point of contact, complete resolution.",
  },
];

const HvacService = () => (
  <>
    <Helmet>
      <title>HVAC Contractor Houston TX | AC Repair & Water Damage Prevention | CBRS Group</title>
      <meta name="description" content="Houston HVAC contractor preventing water damage. AC condensate line repair, drain pan replacement, frozen coil repair & preventative maintenance. Licensed & insured. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/hvac" />
      <meta property="og:title" content="HVAC Contractor Houston TX | AC Repair & Water Damage Prevention" />
      <meta property="og:description" content="Houston HVAC contractor. AC condensate line repair, drain pan replacement & preventative maintenance. Call (832) 608-0535." />
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
    >
      <FAQSection faqs={hvacFAQs} title="HVAC & Water Damage Prevention FAQs" />
    </ServicePageLayout>
  </>
);

export default HvacService;
