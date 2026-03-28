import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const PasadenaFireDamage = () => (
  <FireDamageLocationPage
    city="Pasadena"
    county="Harris County"
    metaTitle="Fire Damage Restoration Pasadena TX | 24/7 Smoke & Fire Cleanup | CBRS Group"
    metaDescription="Pasadena TX fire damage restoration. 24/7 emergency fire cleanup, smoke damage repair, soot removal & full restoration. Fast response in Pasadena. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Pasadena, TX"
    heroSubtitle="Pasadena fire damage restoration experts. Available 24/7 for emergency response."
    introParagraph="Pasadena residents trust CBRS Group for professional fire damage restoration. Whether you're dealing with a kitchen fire, electrical fire, or extensive structural damage, our team responds 24/7 with the equipment and expertise to restore your home quickly. We handle everything from smoke cleanup to complete reconstruction."
    areaDescription="Pasadena's established neighborhoods feature homes that require specialized fire restoration expertise. Our team understands the unique challenges of restoring older homes while meeting modern building codes. We work with your insurance company throughout the process to ensure efficient claims handling and complete restoration."
    commonCauses={[
      "Kitchen fires in established Pasadena family homes",
      "Electrical fires from aging wiring in older neighborhoods",
      "Industrial area proximity contributing to air quality challenges post-fire",
      "Space heater accidents during rare winter cold snaps",
      "Garage workshop fires from welding and power tools",
      "Dryer vent fires from inadequate maintenance",
    ]}
    neighborhoods={[
      "Pasadena Gardens",
      "South Houston",
      "Strawberry",
      "Glenbrook Valley",
      "Park Place",
      "Southmore",
      "Deepwater",
      "Burke",
      "Red Bluff",
      "Golden Acres",
      "Vista",
      "Richey",
    ]}
    nearbyAreas={[
      { name: "Houston", slug: "houston" },
      { name: "Deer Park", slug: "deer-park" },
      { name: "Baytown", slug: "baytown" },
      { name: "Pearland", slug: "pearland" },
    ]}
  />
);

export default PasadenaFireDamage;
