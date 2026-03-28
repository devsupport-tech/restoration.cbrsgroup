import LocationServicePage from "@/components/LocationServicePage";

const HoustonWaterDamage = () => (
  <LocationServicePage
    city="Houston"
    county="Harris County"
    metaTitle="Water Damage Restoration Houston TX | 24/7 Emergency Flood Repair | CBRS Group"
    metaDescription="Houston TX water damage restoration experts. 24/7 emergency water extraction, flood cleanup, burst pipe repair, mold remediation & complete rebuilds. Licensed & insured. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in Houston, TX"
    heroSubtitle="Houston's trusted water damage restoration company. Fast 24/7 emergency response across the Greater Houston area."
    introParagraph="Houston homeowners and businesses trust CBRS Group for professional water damage restoration. As Houston's premier restoration contractor, we provide rapid 24/7 emergency response throughout the Greater Houston area. Our certified technicians handle every aspect of water damage restoration, from emergency water extraction to complete structural reconstruction."
    areaDescription="Houston's subtropical climate, flat terrain, and extensive bayou system make it one of the most flood-prone major cities in America. From Hurricane Harvey to routine afternoon thunderstorms, Houston faces constant water damage threats. Buffalo Bayou, White Oak Bayou, Brays Bayou, and dozens of other waterways crisscross the city, and drainage infrastructure often struggles during major rain events. Our team knows Houston and responds fast when water threatens your property."
    commonProblems={[
      "Bayou flooding from Buffalo Bayou, Brays Bayou, White Oak Bayou, and other waterways",
      "Flash flooding from intense Houston thunderstorms overwhelming storm drains",
      "Hurricane and tropical storm damage causing widespread water intrusion",
      "Aging plumbing in Houston's older neighborhoods causing burst pipes and leaks",
      "Foundation slab leaks common in Houston homes built on expansive clay soil",
      "HVAC condensate line failures during Houston's hot, humid summers",
    ]}
    neighborhoods={[
      "Heights",
      "Montrose",
      "River Oaks",
      "Memorial",
      "Galleria",
      "Midtown",
      "Downtown",
      "West University",
      "Bellaire",
      "Meyerland",
      "Medical Center",
      "Tanglewood",
      "Garden Oaks",
      "Oak Forest",
      "Spring Branch",
      "Energy Corridor",
    ]}
    nearbyAreas={[
      { name: "Katy", slug: "katy" },
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "The Woodlands", slug: "the-woodlands" },
      { name: "Pearland", slug: "pearland" },
      { name: "Cypress", slug: "cypress" },
    ]}
  />
);

export default HoustonWaterDamage;
