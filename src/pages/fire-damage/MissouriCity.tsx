import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const MissouriCityFireDamage = () => (
  <FireDamageLocationPage
    city="Missouri City"
    county="Fort Bend County"
    metaTitle="Fire Damage Restoration Missouri City TX | 24/7 Emergency | CBRS Group"
    metaDescription="Missouri City TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving Sienna & all Missouri City. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Missouri City, TX"
    heroSubtitle="Missouri City fire damage experts. Fast 24/7 emergency response with complete restoration."
    introParagraph="Missouri City homeowners count on CBRS Group for professional fire damage restoration. Our team provides 24/7 emergency response throughout Missouri City and the Fort Bend County area. From smoke damage cleanup to complete structural repairs, we handle every aspect of your restoration with one dedicated point of contact."
    areaDescription="Missouri City's established neighborhoods and newer developments require fire restoration experts who understand diverse construction styles. Our team provides comprehensive fire damage restoration services, working with your insurance company to handle claims efficiently while restoring your home to pre-loss condition."
    commonCauses={[
      "Kitchen fires in Missouri City family homes",
      "Electrical panel fires in older Missouri City neighborhoods",
      "Garage fires from stored flammables and power equipment",
      "Outdoor kitchen and grill fires in backyard entertaining areas",
      "Pool equipment electrical fires near pool houses",
      "Lightning strikes during severe Fort Bend County storms",
    ]}
    neighborhoods={[
      "Sienna",
      "Lake Olympia",
      "Quail Valley",
      "Fondren Park",
      "Hunter's Glen",
      "Riverstone",
      "Colony Lakes",
      "Lexington Country",
      "Palmer Plantation",
      "Barrington",
      "Stafford Run",
      "First Colony",
    ]}
    nearbyAreas={[
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "Houston", slug: "houston" },
      { name: "Pearland", slug: "pearland" },
      { name: "Richmond", slug: "richmond" },
    ]}
  />
);

export default MissouriCityFireDamage;
