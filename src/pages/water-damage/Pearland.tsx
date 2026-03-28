import LocationServicePage from "@/components/LocationServicePage";

const PearlandWaterDamage = () => (
  <LocationServicePage
    city="Pearland"
    county="Brazoria County"
    metaTitle="Water Damage Restoration Pearland TX | 24/7 Flood & Water Cleanup | CBRS Group"
    metaDescription="Pearland TX water damage restoration company. 24/7 emergency flood cleanup, water extraction, sewage backup & mold remediation. Serving Shadow Creek Ranch & all Pearland. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Pearland, TX"
    heroSubtitle="Pearland's trusted water damage restoration experts. Fast emergency response, complete restoration services."
    introParagraph="Pearland residents count on CBRS Group for fast, professional water damage restoration. Whether you're dealing with flooding in Shadow Creek Ranch, a burst pipe in Silverlake, or storm damage anywhere in Pearland, our certified technicians respond 24/7 with the equipment and expertise to restore your property quickly."
    areaDescription="Pearland has experienced rapid growth, with many new developments built in areas that can be prone to flooding during heavy rain events. Clear Creek and Mary's Creek run through the city, and drainage infrastructure sometimes struggles to keep up with intense Houston-area storms. Our team understands Pearland's flood risks and provides rapid response to minimize water damage."
    commonProblems={[
      "Clear Creek and Mary's Creek flooding affecting homes during heavy rain and hurricane events",
      "New construction settling issues leading to foundation cracks and water intrusion",
      "Storm drain backups during intense rainfall overwhelming Pearland drainage systems",
      "Sewage backups in older Pearland neighborhoods with aging infrastructure",
      "Water heater failures in garages causing damage to stored belongings and interior walls",
      "Irrigation system malfunctions leading to foundation saturation and water intrusion",
    ]}
    neighborhoods={[
      "Shadow Creek Ranch",
      "Silverlake",
      "Lakes of Highland Glen",
      "Southdown",
      "Pearland Town Center",
      "Sunset Meadows",
      "Southern Trails",
      "Hickory Slough",
      "Brazoria Bend",
      "Old Pearland",
      "Westwood",
      "Countrywood",
    ]}
    nearbyAreas={[
      { name: "Houston", slug: "houston" },
      { name: "Friendswood", slug: "friendswood" },
      { name: "League City", slug: "league-city" },
      { name: "Manvel", slug: "manvel" },
      { name: "Alvin", slug: "alvin" },
    ]}
  />
);

export default PearlandWaterDamage;
