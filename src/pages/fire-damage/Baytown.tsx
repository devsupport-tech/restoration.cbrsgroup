import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const BaytownFireDamage = () => (
  <FireDamageLocationPage
    city="Baytown"
    county="Harris County"
    metaTitle="Fire Damage Restoration Baytown TX | 24/7 Emergency Fire Repair | CBRS Group"
    metaDescription="Baytown TX fire damage restoration. 24/7 emergency fire cleanup, smoke damage repair, soot removal & full restoration. Fast response in Baytown. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Baytown, TX"
    heroSubtitle="Baytown's trusted fire damage restoration company. Fast 24/7 emergency response."
    introParagraph="Baytown homeowners rely on CBRS Group for professional fire damage restoration services. Our certified technicians provide rapid 24/7 emergency response throughout Baytown and the surrounding areas. From smoke cleanup to complete structural reconstruction, we handle every type of fire emergency with professional expertise."
    areaDescription="Baytown's industrial character and established residential neighborhoods require fire restoration experts who understand the area's unique challenges. Our team provides comprehensive fire damage restoration services, addressing smoke damage, soot cleanup, and structural repairs while working with your insurance company."
    commonCauses={[
      "Kitchen fires in Baytown family homes",
      "Electrical fires in older Baytown neighborhoods with aging infrastructure",
      "Industrial equipment and chemical fires affecting nearby residential areas",
      "Garage fires from stored flammables and welding equipment",
      "Lightning strikes during Gulf Coast thunderstorms",
      "HVAC system failures causing fires in hot summer months",
    ]}
    neighborhoods={[
      "West Baytown",
      "East Baytown",
      "Lakewood",
      "Brownwood",
      "Cedar Bayou",
      "Highlands",
      "Crosby",
      "Barrett",
      "Chambers County",
      "Wooster",
      "Roseland",
      "Sterling",
    ]}
    nearbyAreas={[
      { name: "Houston", slug: "houston" },
      { name: "Pasadena", slug: "pasadena" },
      { name: "Humble", slug: "humble" },
      { name: "La Porte", slug: "la-porte" },
    ]}
  />
);

export default BaytownFireDamage;
