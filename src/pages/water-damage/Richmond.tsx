import LocationServicePage from "@/components/LocationServicePage";

const RichmondWaterDamage = () => (
  <LocationServicePage
    city="Richmond"
    county="Fort Bend County"
    metaTitle="Water Damage Restoration Richmond TX | 24/7 Emergency Service | CBRS Group"
    metaDescription="Richmond TX water damage restoration. 24/7 emergency water extraction, flood cleanup, mold remediation & full restoration. Serving Pecan Grove & all Richmond. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Richmond, TX"
    heroSubtitle="Richmond and Rosenberg area water damage experts. 24/7 emergency response."
    introParagraph="Richmond and Fort Bend County homeowners trust CBRS Group for professional water damage restoration. Our team provides rapid 24/7 emergency response throughout Richmond, Rosenberg, and the surrounding communities. We handle everything from water extraction to complete reconstruction with one dedicated team."
    areaDescription="Richmond's location along the Brazos River creates significant flood risk during major storm events. The historic downtown area and many established neighborhoods are in the floodplain, and Hurricane Harvey caused devastating flooding throughout the community. Our team knows Richmond's flood risks and responds quickly to protect your home and minimize damage."
    commonProblems={[
      "Brazos River flooding affecting homes in low-lying Richmond neighborhoods",
      "Historic district homes with aging plumbing prone to failures and leaks",
      "Poor drainage in older neighborhoods during heavy rain events",
      "Foundation issues from Fort Bend County clay soil causing water intrusion",
      "Agricultural runoff overwhelming residential drainage systems",
      "Water well contamination during flooding requiring remediation",
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
      { name: "Rosenberg", slug: "rosenberg" },
      { name: "Fulshear", slug: "fulshear" },
      { name: "Missouri City", slug: "missouri-city" },
    ]}
  />
);

export default RichmondWaterDamage;
