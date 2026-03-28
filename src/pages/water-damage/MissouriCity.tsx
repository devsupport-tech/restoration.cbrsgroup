import LocationServicePage from "@/components/LocationServicePage";

const MissouriCityWaterDamage = () => (
  <LocationServicePage
    city="Missouri City"
    county="Fort Bend County"
    metaTitle="Water Damage Restoration Missouri City TX | 24/7 Emergency | CBRS Group"
    metaDescription="Missouri City TX water damage restoration. 24/7 emergency water extraction, flood cleanup, mold remediation & complete restoration. Serving Sienna & all Missouri City. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Missouri City, TX"
    heroSubtitle="Missouri City water damage experts. Fast 24/7 emergency response with complete restoration."
    introParagraph="Missouri City homeowners count on CBRS Group for professional water damage restoration. Our team provides 24/7 emergency response throughout Missouri City and the Fort Bend County area. From initial water extraction to complete structural repairs, we handle every aspect of your restoration with one dedicated point of contact."
    areaDescription="Missouri City's location in Fort Bend County places it in an area susceptible to flooding from Oyster Creek and the Brazos River. Many Missouri City neighborhoods experienced flooding during Hurricane Harvey, and the area remains at risk during major storm events. Our team responds quickly to minimize water damage and restore your home to pre-loss condition."
    commonProblems={[
      "Oyster Creek flooding during heavy rains and tropical storms",
      "Foundation drainage issues in homes built on Fort Bend County clay soil",
      "Storm water backup affecting neighborhoods with older drainage systems",
      "Swimming pool equipment failures causing water damage to homes",
      "Sewer line backups during flooding events requiring professional cleanup",
      "Water heater failures in garages leading to interior water damage",
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
      { name: "Stafford", slug: "stafford" },
      { name: "Pearland", slug: "pearland" },
      { name: "Richmond", slug: "richmond" },
    ]}
  />
);

export default MissouriCityWaterDamage;
