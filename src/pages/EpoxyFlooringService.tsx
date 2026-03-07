import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-epoxy.jpg";
import { Layers, Warehouse, Car, Paintbrush, ShieldCheck, Award } from "lucide-react";

const EpoxyFlooringService = () => (
  <ServicePageLayout
    title="Epoxy Flooring Solutions"
    subtitle="High-Performance Flooring"
    description="Transform your garage, warehouse, or commercial space with durable, stunning epoxy flooring that combines strength, safety, and style."
    heroImage={heroImg}
    features={[
      "Garage floor epoxy coating",
      "Warehouse and industrial flooring",
      "Commercial floor installations",
      "Metallic and decorative epoxy finishes",
      "Anti-slip and safety coatings",
      "Concrete preparation and repair",
      "Chemical-resistant coatings",
      "Custom colors and flake designs",
    ]}
    details={[
      { title: "Garage Floors", description: "Beautiful, durable garage epoxy floors that resist stains, chemicals, and heavy use.", icon: Car },
      { title: "Commercial Flooring", description: "High-traffic commercial floors built for durability, safety, and a professional appearance.", icon: Layers },
      { title: "Warehouse Flooring", description: "Industrial-strength epoxy coatings designed to withstand heavy equipment and constant use.", icon: Warehouse },
      { title: "Custom Finishes", description: "Metallic, flake, and decorative epoxy designs to match your style and branding.", icon: Paintbrush },
      { title: "Built to Last", description: "Professional surface preparation ensures a bond that won't peel, chip, or fade.", icon: Award },
      { title: "Licensed & Insured", description: "CA Lic. #1140407. Quality craftsmanship backed by our professional guarantee.", icon: ShieldCheck },
    ]}
  />
);

export default EpoxyFlooringService;
