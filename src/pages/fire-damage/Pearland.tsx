import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const PearlandFireDamage = () => (
  <FireDamageLocationPage
    city="Pearland"
    county="Brazoria County"
    metaTitle="Fire Damage Restoration Pearland TX | 24/7 Smoke & Fire Cleanup | CBRS Group"
    metaDescription="Pearland TX fire damage restoration company. 24/7 emergency fire cleanup, smoke damage repair, soot removal & full restoration. Serving Shadow Creek Ranch & all Pearland. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Pearland, TX"
    heroSubtitle="Pearland's trusted fire damage restoration experts. Fast emergency response, complete restoration."
    introParagraph="Pearland residents count on CBRS Group for fast, professional fire damage restoration. Whether you're dealing with a kitchen fire in Shadow Creek Ranch, smoke damage in Silverlake, or fire damage anywhere in Pearland, our certified technicians respond 24/7 with the equipment and expertise to restore your home quickly and completely."
    areaDescription="Pearland's rapid growth has brought thousands of new homes to the area, each requiring specialized fire restoration expertise. Our team knows Pearland's neighborhoods and construction styles, allowing us to provide efficient restoration services tailored to your specific situation. We work with your insurance company to handle claims and maximize your coverage."
    commonCauses={[
      "Kitchen grease fires in busy Pearland family homes",
      "New construction electrical issues causing fires during the first few years",
      "Lightning strikes during severe Houston-area thunderstorms",
      "Space heater accidents during winter cold fronts",
      "Garage workshop fires from power tools and stored materials",
      "Dryer vent fires from inadequate maintenance",
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
      { name: "Pasadena", slug: "pasadena" },
    ]}
  />
);

export default PearlandFireDamage;
