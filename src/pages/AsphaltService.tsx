import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-asphalt.jpg";
import { Construction, Car, MapPin, ShieldCheck, Ruler, Award } from "lucide-react";

const AsphaltService = () => (
  <ServicePageLayout
    title="Asphalt Paving Solutions"
    subtitle="Paving & Surfacing"
    description="Professional asphalt installation for driveways, parking lots, and roadways — built with quality materials for long-lasting results."
    heroImage={heroImg}
    features={[
      "Residential driveway paving",
      "Commercial parking lot installation",
      "Asphalt repair and patching",
      "Sealcoating and surface protection",
      "Striping and marking",
      "Grading and drainage solutions",
      "ADA-compliant installations",
      "Resurfacing and overlay",
    ]}
    details={[
      { title: "Driveways", description: "Smooth, durable residential driveways that enhance curb appeal and last for years.", icon: Car },
      { title: "Parking Lots", description: "Commercial parking lot installation with proper grading, drainage, and striping.", icon: MapPin },
      { title: "Repairs & Patching", description: "Professional repair of potholes, cracks, and surface damage to extend pavement life.", icon: Construction },
      { title: "Sealcoating", description: "Protective sealcoating to prevent water damage, UV deterioration, and extend surface life.", icon: Ruler },
      { title: "Quality Materials", description: "Premium asphalt mix and professional equipment for a smooth, lasting finish.", icon: Award },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Every project meets professional standards and specifications.", icon: ShieldCheck },
    ]}
  />
);

export default AsphaltService;
