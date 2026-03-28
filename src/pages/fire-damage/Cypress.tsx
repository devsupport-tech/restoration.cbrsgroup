import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const CypressFireDamage = () => (
  <FireDamageLocationPage
    city="Cypress"
    county="Harris County"
    metaTitle="Fire Damage Restoration Cypress TX | 24/7 Emergency Fire & Smoke Repair | CBRS Group"
    metaDescription="Cypress TX fire damage restoration experts. 24/7 emergency smoke cleanup, soot removal, odor elimination & complete rebuilds. Serving Bridgeland, Towne Lake & all Cypress. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Cypress, TX"
    heroSubtitle="Cypress fire damage experts. Fast 24/7 emergency response with complete restoration services."
    introParagraph="Cypress homeowners trust CBRS Group for professional fire damage restoration. Our team provides rapid 24/7 emergency response throughout Cypress, from Bridgeland to Towne Lake and everywhere in between. We handle everything from smoke damage cleanup and odor removal to complete structural reconstruction."
    areaDescription="Cypress's growing community of new homes and established neighborhoods requires fire restoration experts who understand modern construction. Our team provides comprehensive fire damage restoration services, working with your insurance company to handle claims and restore your home efficiently. We specialize in both newer construction and established homes."
    commonCauses={[
      "Kitchen fires in Cypress family homes during meal preparation",
      "New construction electrical fires from installation issues",
      "Garage fires from stored flammables and power equipment",
      "Outdoor kitchen and grill fires spreading to structures",
      "Space heater accidents during rare Texas winter freezes",
      "Dryer vent fires from lint buildup in busy family homes",
    ]}
    neighborhoods={[
      "Bridgeland",
      "Towne Lake",
      "Cypress Creek Lakes",
      "Fairfield",
      "Lakeland Heights",
      "Black Horse Ranch",
      "Cypress Mill",
      "Barker Cypress",
      "Longwood",
      "Riata West",
      "Stone Gate",
      "Cypress Top",
    ]}
    nearbyAreas={[
      { name: "Houston", slug: "houston" },
      { name: "Tomball", slug: "tomball" },
      { name: "Katy", slug: "katy" },
      { name: "Spring", slug: "spring" },
    ]}
  />
);

export default CypressFireDamage;
