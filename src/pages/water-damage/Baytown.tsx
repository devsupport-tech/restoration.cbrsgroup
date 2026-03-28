import LocationServicePage from "@/components/LocationServicePage";

const BaytownWaterDamage = () => (
  <LocationServicePage
    city="Baytown"
    county="Harris County"
    metaTitle="Water Damage Restoration Baytown TX | 24/7 Emergency Flood Repair | CBRS Group"
    metaDescription="Baytown TX water damage restoration. 24/7 emergency water extraction, hurricane damage repair, flood cleanup & mold remediation. Serving all Baytown. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Baytown, TX"
    heroSubtitle="Baytown's trusted water damage restoration company. Fast 24/7 emergency response."
    introParagraph="Baytown homeowners rely on CBRS Group for professional water damage restoration services. Our certified technicians provide rapid 24/7 emergency response throughout Baytown and the surrounding areas. From hurricane damage to burst pipes, we handle every type of water emergency with professional equipment and expertise."
    areaDescription="Baytown's location on Galveston Bay and along the Houston Ship Channel creates significant storm surge risk during hurricanes. The San Jacinto River borders the city, and Cedar Bayou and Goose Creek add to flood concerns during heavy rains. Baytown experienced major flooding during Hurricane Harvey and remains at risk during storm events. Our team provides rapid response to protect your property."
    commonProblems={[
      "Hurricane storm surge from Galveston Bay causing widespread flooding",
      "San Jacinto River and Cedar Bayou flooding during major rain events",
      "Aging refinement and petrochemical infrastructure affecting neighborhood drainage",
      "Salt air corrosion leading to premature plumbing and water heater failures",
      "Older Baytown homes with outdated plumbing prone to sudden failures",
      "Storm water backup in neighborhoods with aging drainage systems",
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
      { name: "Deer Park", slug: "deer-park" },
      { name: "La Porte", slug: "la-porte" },
      { name: "Humble", slug: "humble" },
    ]}
  />
);

export default BaytownWaterDamage;
