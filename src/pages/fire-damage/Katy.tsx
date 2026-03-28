import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const KatyFireDamage = () => (
  <FireDamageLocationPage
    city="Katy"
    county="Harris County"
    metaTitle="Fire Damage Restoration Katy TX | 24/7 Emergency Fire & Smoke Repair | CBRS Group"
    metaDescription="Katy TX fire damage restoration experts. 24/7 emergency smoke cleanup, soot removal, odor elimination & complete rebuilds. Serving Cinco Ranch & all Katy. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Katy, TX"
    heroSubtitle="Fast 24/7 emergency fire damage response for Katy homeowners. From smoke cleanup to complete restoration."
    introParagraph="When fire strikes your Katy home, you need a restoration company that responds fast and handles everything from start to finish. CBRS Group provides comprehensive fire damage restoration services throughout Katy, with 24/7 emergency response and a single point of contact for your entire project. We work directly with your insurance company to maximize your claim."
    areaDescription="Katy's master-planned communities feature beautiful homes that deserve expert restoration after fire damage. Whether you're dealing with a kitchen fire in Cinco Ranch, electrical fire in Green Trails, or smoke damage anywhere in Katy, our certified technicians respond immediately with professional equipment to begin the restoration process."
    commonCauses={[
      "Kitchen fires in Katy homes from cooking accidents and grease fires",
      "Electrical fires from overloaded circuits in older Katy neighborhoods",
      "Garage fires from stored flammables, water heaters, and electrical issues",
      "Grill and outdoor kitchen fires spreading to home structures",
      "Dryer fires from lint accumulation in laundry vents",
      "Holiday decoration electrical fires during peak seasons",
    ]}
    neighborhoods={[
      "Cinco Ranch",
      "Green Trails",
      "Nottingham Country",
      "Pine Mill Ranch",
      "Firethorne",
      "Cane Island",
      "Elyson",
      "Tamarron",
      "Grand Lakes",
      "Kelliwood",
      "Memorial Parkway",
      "Old Katy",
    ]}
    nearbyAreas={[
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "Cypress", slug: "cypress" },
      { name: "Richmond", slug: "richmond" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default KatyFireDamage;
