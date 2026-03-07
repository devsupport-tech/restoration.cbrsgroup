import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-glass.jpg";
import { GlassWater, Maximize, Wrench, ShieldCheck, Sparkles, Home } from "lucide-react";

const GlassService = () => (
  <ServicePageLayout
    title="Custom Glass Solutions"
    subtitle="Professional Glass Services"
    description="From custom shower enclosures to storefront glass and specialty installations — precision glass work for residential and commercial properties."
    heroImage={heroImg}
    features={[
      "Custom shower enclosures and doors",
      "Storefront and commercial glass",
      "Window glass replacement",
      "Glass railing and partition systems",
      "Mirror installation",
      "Specialty and decorative glass",
      "Emergency glass repair",
      "Custom measurements and fabrication",
    ]}
    details={[
      { title: "Shower Enclosures", description: "Custom frameless and semi-frameless shower doors and enclosures tailored to your space.", icon: GlassWater },
      { title: "Commercial Glass", description: "Storefront glass, office partitions, and commercial glass installations built to spec.", icon: Maximize },
      { title: "Window Replacement", description: "Single and double-pane window glass replacement for improved efficiency and appearance.", icon: Home },
      { title: "Glass Repairs", description: "Fast, professional glass repair for windows, doors, and commercial storefronts.", icon: Wrench },
      { title: "Custom Work", description: "Specialty glass including decorative, frosted, tinted, and patterned options.", icon: Sparkles },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Professional installation backed by quality assurance.", icon: ShieldCheck },
    ]}
  />
);

export default GlassService;
