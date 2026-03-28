import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/service-roofing.jpg";
import { Home, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

const roofingFAQs = [
  {
    question: "How do I know if my roof has storm damage?",
    answer: "Signs of storm damage include missing or damaged shingles, dents in metal flashing or gutters, granules in gutters or downspouts, water stains on ceilings, and visible leaks. After a major storm, we recommend a professional inspection even if you don't see obvious damage.",
  },
  {
    question: "Does homeowners insurance cover roof damage?",
    answer: "Most policies cover roof damage from storms, hail, wind, and fallen trees. Coverage depends on your policy and the cause of damage. We work directly with insurance companies to document damage and help you get fair compensation for repairs or replacement.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements take 1-3 days depending on roof size, complexity, and weather conditions. We provide a detailed timeline before starting work and keep you informed throughout the project.",
  },
  {
    question: "Should I repair or replace my roof?",
    answer: "It depends on the extent of damage and roof age. Minor damage on a newer roof typically warrants repair. If your roof is 15-20+ years old or has significant damage, replacement may be more cost-effective. We provide honest assessments and help you make the best decision.",
  },
  {
    question: "How quickly can you respond to an emergency roof leak?",
    answer: "We offer 24/7 emergency response for roof leaks and storm damage. We can typically arrive within hours to install emergency tarping and prevent further water damage to your home's interior.",
  },
  {
    question: "What roofing materials do you work with?",
    answer: "We work with all residential roofing materials including asphalt shingles, metal roofing, tile, flat roof systems (TPO, EPDM, modified bitumen), and wood shakes. We help you choose the best material for your home and budget.",
  },
];

const RoofingService = () => (
  <>
    <Helmet>
      <title>Roofing Contractor Houston TX | Storm Damage & Roof Leak Repair | CBRS Group</title>
      <meta name="description" content="Houston roofing contractor specializing in storm damage repair. Emergency roof tarping, hail damage repair, leak detection, roof replacement. Insurance claims assistance. Free estimates. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/roofing" />
      <meta property="og:title" content="Roofing Contractor Houston TX | Storm Damage & Roof Leak Repair" />
      <meta property="og:description" content="Houston roofing contractor. Storm damage repair, hail damage, leak detection & roof replacement. Insurance claims help. Call (832) 608-0535." />
      <meta property="og:url" content="https://restoration.cbrsgroup.com/services/roofing" />
    </Helmet>
    <ServicePageLayout
    title="Roofing Services"
    subtitle="Protecting Your Property from Water Intrusion"
    description="Your roof is your first line of defense against water damage. Expert roofing repairs, storm damage restoration, leak detection, and full replacements."
    heroImage={heroImg}
    features={[
      "Storm damage repair",
      "Roof leak detection and repair",
      "Full roof replacement",
      "Shingle, tile, and flat roof systems",
      "Gutter and drainage solutions",
      "Roof inspection and maintenance",
      "Insurance claims assistance",
      "Preventative maintenance programs",
    ]}
    details={[
      { title: "Storm Damage Repair", description: "Professional storm, wind, and hail damage repair — tarping and permanent repairs with dedicated project management.", icon: AlertTriangle },
      { title: "Leak Detection", description: "Advanced leak detection to find and fix water intrusion before it causes interior damage.", icon: Droplets },
      { title: "Full Replacement", description: "Complete roof replacement with quality materials and expert installation for long-term protection.", icon: Home },
      { title: "Preventative Care", description: "Regular inspection and maintenance programs to catch small issues before they become water damage emergencies.", icon: Wrench },
      { title: "Insurance Support", description: "We work with your insurance to document storm damage and streamline your roofing claim.", icon: ClipboardCheck },
      { title: "Licensed & Insured", description: "Fully licensed and insured roofing professionals you can trust.", icon: ShieldCheck },
    ]}
    >
      <FAQSection faqs={roofingFAQs} title="Roofing FAQs" />
    </ServicePageLayout>
  </>
);

export default RoofingService;
