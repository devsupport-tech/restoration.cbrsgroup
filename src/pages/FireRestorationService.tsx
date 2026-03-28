import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/service-restoration.jpg";
import { Flame, Wind, Home, Wrench, ShieldCheck, ClipboardCheck } from "lucide-react";

const fireDamageFAQs = [
  {
    question: "How quickly can you respond to a fire damage emergency?",
    answer: "We provide 24/7 emergency response and can typically arrive within 60-90 minutes in the Houston metro area. Immediate response is critical to prevent secondary damage from smoke, soot, and water used in firefighting.",
  },
  {
    question: "Does homeowners insurance cover fire damage restoration?",
    answer: "Yes, most homeowners insurance policies cover fire damage, including structural repairs, smoke damage, and personal property. We work directly with your insurance company to document all damage and ensure you receive fair compensation.",
  },
  {
    question: "How long does fire damage restoration take?",
    answer: "The timeline varies based on damage severity. Minor fire damage may take 1-2 weeks, while major structural damage can take several months. After our initial assessment, we provide a detailed timeline and keep you informed throughout the process.",
  },
  {
    question: "Can smoke damage be completely removed?",
    answer: "Yes, with professional restoration. We use specialized equipment and techniques to remove smoke residue from all surfaces, including walls, ceilings, HVAC systems, and personal belongings. We also eliminate smoke odors using thermal fogging and ozone treatments.",
  },
  {
    question: "What should I do immediately after a fire?",
    answer: "First, ensure everyone is safe and don't re-enter the building until cleared by the fire department. Contact your insurance company and then call us at (832) 608-0535. Don't attempt to clean soot yourself as improper cleaning can cause permanent damage.",
  },
  {
    question: "Do you handle both fire and water damage from firefighting?",
    answer: "Yes, we handle complete fire restoration including water damage caused by firefighting efforts. Our team addresses fire damage, smoke damage, soot removal, odor elimination, and water extraction and drying — all with one dedicated project manager.",
  },
];

const FireRestorationService = () => (
  <>
    <Helmet>
      <title>Fire Damage Contractor Houston TX | 24/7 Smoke & Fire Restoration | CBRS Group</title>
      <meta name="description" content="Houston's trusted fire damage contractor. 24/7 emergency fire restoration, smoke damage cleanup, soot removal, odor elimination & complete rebuilds. Licensed & insured. Free estimates. Call (832) 608-0535." />
      <link rel="canonical" href="https://restoration.cbrsgroup.com/services/fire-restoration" />
      <meta property="og:title" content="Fire Damage Contractor Houston TX | 24/7 Smoke & Fire Restoration" />
      <meta property="og:description" content="Houston's trusted fire damage contractor. 24/7 fire restoration, smoke cleanup, soot removal & complete rebuilds. Call (832) 608-0535." />
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
    >
      <FAQSection faqs={fireDamageFAQs} title="Fire Damage Restoration FAQs" />
    </ServicePageLayout>
  </>
);

export default FireRestorationService;
