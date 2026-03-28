import LocationServicePage from "@/components/LocationServicePage";

const PasadenaWaterDamage = () => (
  <LocationServicePage
    city="Pasadena"
    county="Harris County"
    metaTitle="Water Damage Restoration Pasadena TX | 24/7 Flood & Water Cleanup | CBRS Group"
    metaDescription="Pasadena TX water damage restoration. 24/7 emergency water extraction, flood cleanup, storm damage repair & mold remediation. Fast response in Pasadena. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Pasadena, TX"
    heroSubtitle="Pasadena water damage restoration experts. Available 24/7 for emergency response."
    introParagraph="Pasadena residents trust CBRS Group for professional water damage restoration. Whether you're dealing with flooding from a storm, a burst pipe, or an appliance failure, our team responds 24/7 with the equipment and expertise to restore your home quickly. We handle everything from water extraction to complete reconstruction."
    areaDescription="Pasadena's location along the Houston Ship Channel and near Galveston Bay makes it vulnerable to hurricane storm surge and tidal flooding. Armand Bayou and other waterways wind through the city, and many neighborhoods are at risk during heavy rain events. Our team knows Pasadena's flood risks and responds rapidly to protect your home and minimize damage."
    commonProblems={[
      "Hurricane storm surge from Galveston Bay affecting low-lying areas",
      "Armand Bayou and Little Vince Bayou flooding during heavy rain events",
      "Aging infrastructure in established Pasadena neighborhoods causing pipe failures",
      "Industrial area runoff overwhelming residential storm drainage",
      "Slab foundation cracks from soil movement causing water intrusion",
      "Roof damage from severe thunderstorms leading to attic water damage",
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
      { name: "La Porte", slug: "la-porte" },
      { name: "Baytown", slug: "baytown" },
      { name: "Pearland", slug: "pearland" },
    ]}
  />
);

export default PasadenaWaterDamage;
