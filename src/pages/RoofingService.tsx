import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-roofing.jpg";
import { Home, Droplets, ShieldCheck, Wrench, ClipboardCheck, AlertTriangle } from "lucide-react";

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
    />
  </>
);

export default RoofingService;
