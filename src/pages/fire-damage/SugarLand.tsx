import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const SugarLandFireDamage = () => (
  <FireDamageLocationPage
    city="Sugar Land"
    county="Fort Bend County"
    metaTitle="Fire Damage Restoration Sugar Land TX | 24/7 Emergency Service | CBRS Group"
    metaDescription="Sugar Land TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving First Colony & all Sugar Land. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Sugar Land, TX"
    heroSubtitle="Trusted by Sugar Land homeowners for professional fire damage restoration. Available 24/7."
    introParagraph="Sugar Land homeowners trust CBRS Group for professional fire damage restoration services. When fire or smoke damage threatens your property, our team responds quickly with certified technicians and industrial-grade equipment. We handle everything from emergency board-up to complete reconstruction, working with your insurance company throughout the process."
    areaDescription="Sugar Land's beautiful homes and master-planned communities deserve expert care after fire damage. Our team understands the unique construction styles in Sugar Land neighborhoods and provides customized restoration solutions. Whether you're dealing with a small kitchen fire or extensive structural damage, we restore your home to its pre-loss condition."
    commonCauses={[
      "Kitchen fires from cooking accidents in Sugar Land's gourmet kitchens",
      "Electrical panel failures in older Sugar Land neighborhoods",
      "Outdoor kitchen and grill fires spreading to main structures",
      "Pool equipment electrical fires near pool houses and patios",
      "Garage fires from stored chemicals and power equipment",
      "HVAC electrical fires in attics during extreme summer heat",
    ]}
    neighborhoods={[
      "First Colony",
      "New Territory",
      "Sweetwater",
      "Riverstone",
      "Telfair",
      "Commonwealth",
      "Sugar Creek",
      "Avalon",
      "Sugar Mill",
      "Greatwood",
      "Lake Pointe",
      "Colony Meadows",
    ]}
    nearbyAreas={[
      { name: "Missouri City", slug: "missouri-city" },
      { name: "Richmond", slug: "richmond" },
      { name: "Katy", slug: "katy" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default SugarLandFireDamage;
