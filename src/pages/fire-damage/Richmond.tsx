import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const RichmondFireDamage = () => (
  <FireDamageLocationPage
    city="Richmond"
    county="Fort Bend County"
    metaTitle="Fire Damage Restoration Richmond TX | 24/7 Emergency Service | CBRS Group"
    metaDescription="Richmond TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving Pecan Grove & all Richmond. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Richmond, TX"
    heroSubtitle="Richmond and Rosenberg area fire damage experts. 24/7 emergency response."
    introParagraph="Richmond and Fort Bend County homeowners trust CBRS Group for professional fire damage restoration. Our team provides rapid 24/7 emergency response throughout Richmond, Rosenberg, and the surrounding communities. We handle everything from smoke cleanup to complete reconstruction with one dedicated team."
    areaDescription="Richmond's historic homes and newer developments require fire restoration experts who understand diverse construction styles and local building requirements. Our team provides comprehensive fire damage restoration, working with your insurance company to handle claims efficiently while restoring your home."
    commonCauses={[
      "Kitchen fires in Richmond family homes",
      "Electrical fires in historic Richmond homes with older wiring",
      "Agricultural equipment fires on rural Richmond properties",
      "Garage fires from stored equipment and flammables",
      "Lightning strikes during Fort Bend County thunderstorms",
      "Space heater accidents during winter cold fronts",
    ]}
    neighborhoods={[
      "Pecan Grove",
      "Long Meadow Farms",
      "Greatwood",
      "Brazos Town Center",
      "Weston Lakes",
      "Historic Richmond",
      "Foster Creek",
      "Booth",
      "Plantation",
      "Orchard",
      "Fulshear",
      "Simonton",
    ]}
    nearbyAreas={[
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "Katy", slug: "katy" },
      { name: "Missouri City", slug: "missouri-city" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default RichmondFireDamage;
