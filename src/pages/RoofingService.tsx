import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-roofing.jpg";
import { Home, Hammer, CloudRain, ShieldCheck, Ruler, Award } from "lucide-react";

const RoofingService = () => (
  <ServicePageLayout
    title="Professional Roofing Services"
    subtitle="Roofing Solutions"
    description="Expert roofing installations, repairs, and storm damage restoration — built to withstand Southern California's toughest conditions."
    heroImage={heroImg}
    features={[
      "Complete roof installations (shingle, tile, flat)",
      "Roof repair and leak detection",
      "Storm and wind damage repair",
      "Roof inspections and assessments",
      "Gutter installation and repair",
      "Commercial and residential roofing",
      "Energy-efficient roofing options",
      "Insurance claim assistance for storm damage",
    ]}
    details={[
      { title: "New Installations", description: "Full roof installations using premium materials — shingle, tile, metal, or flat roofing systems.", icon: Home },
      { title: "Repairs & Maintenance", description: "Fast, reliable roof repairs that fix leaks and prevent future damage to your property.", icon: Hammer },
      { title: "Storm Damage", description: "Rapid response to storm, wind, and hail damage with insurance claim support.", icon: CloudRain },
      { title: "Inspections", description: "Thorough roof inspections to identify issues before they become costly problems.", icon: Ruler },
      { title: "Quality Materials", description: "We use only premium, durable materials that stand the test of time.", icon: Award },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Every job backed by our license, bond, and full insurance.", icon: ShieldCheck },
    ]}
  />
);

export default RoofingService;
