import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const SpringFireDamage = () => (
  <FireDamageLocationPage
    city="Spring"
    county="Harris County"
    metaTitle="Fire Damage Restoration Spring TX | 24/7 Emergency Service | CBRS Group"
    metaDescription="Spring TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving Klein, Champions & all Spring. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Spring, TX"
    heroSubtitle="Spring's trusted fire damage restoration company. Available 24/7 for emergencies."
    introParagraph="When fire damage strikes your Spring home, CBRS Group responds fast. Our certified technicians provide 24/7 emergency fire damage restoration throughout Spring and the surrounding areas. From smoke damage cleanup and odor removal to complete structural reconstruction, we're your single point of contact for full restoration."
    areaDescription="Spring's diverse neighborhoods, from newer developments to established communities, require fire restoration experts who understand various construction styles. Our team provides comprehensive fire damage restoration services tailored to your home's specific needs, working with your insurance company throughout the process."
    commonCauses={[
      "Kitchen fires in busy Spring family homes",
      "Electrical fires in older Spring neighborhoods with aging wiring",
      "Lightning strikes during severe Houston-area thunderstorms",
      "Garage fires from stored chemicals and power equipment",
      "HVAC system fires during extreme summer heat",
      "Candle and space heater accidents during power outages",
    ]}
    neighborhoods={[
      "Klein",
      "Champions",
      "Northgate Forest",
      "Spring Trails",
      "Auburn Lakes",
      "Windrose",
      "Gleannloch Farms",
      "Spring Creek Oaks",
      "Louetta",
      "Champions Forest",
      "Westfield",
      "Old Town Spring",
    ]}
    nearbyAreas={[
      { name: "The Woodlands", slug: "the-woodlands" },
      { name: "Tomball", slug: "tomball" },
      { name: "Cypress", slug: "cypress" },
      { name: "Humble", slug: "humble" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default SpringFireDamage;
