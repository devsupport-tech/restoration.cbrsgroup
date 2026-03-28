import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const HoustonFireDamage = () => (
  <FireDamageLocationPage
    city="Houston"
    county="Harris County"
    metaTitle="Fire Damage Restoration Houston TX | 24/7 Smoke & Fire Repair | CBRS Group"
    metaDescription="Houston TX fire damage restoration experts. 24/7 emergency fire & smoke damage cleanup, soot removal, odor elimination & complete rebuilds. Licensed & insured. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Houston, TX"
    heroSubtitle="Houston's trusted fire damage restoration company. Fast 24/7 emergency response across the Greater Houston area."
    introParagraph="When fire devastates your Houston home or business, CBRS Group responds immediately with professional fire damage restoration services. Our certified technicians handle everything from emergency board-up and smoke damage cleanup to complete structural reconstruction. We work with your insurance company to streamline the claims process and restore your property to pre-loss condition."
    areaDescription="Houston's dense urban environment and aging infrastructure create unique fire risks for homeowners and businesses. From electrical fires in older homes to kitchen fires and lightning strikes during summer storms, fire damage can strike anywhere in the Greater Houston area. Our team responds 24/7 to minimize damage and begin the restoration process immediately."
    commonCauses={[
      "Electrical fires from overloaded circuits and outdated wiring in older Houston homes",
      "Kitchen fires from cooking accidents, grease fires, and unattended stovetops",
      "HVAC system malfunctions causing fires in attics and mechanical rooms",
      "Lightning strikes during Houston's frequent summer thunderstorms",
      "Space heater accidents during rare winter cold snaps",
      "Dryer vent fires from lint buildup in residential laundry rooms",
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

export default HoustonFireDamage;
