import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const TomballFireDamage = () => (
  <FireDamageLocationPage
    city="Tomball"
    county="Harris County"
    metaTitle="Fire Damage Restoration Tomball TX | 24/7 Smoke & Fire Cleanup | CBRS Group"
    metaDescription="Tomball TX fire damage restoration. 24/7 emergency fire cleanup, smoke damage repair, soot removal & full restoration. Serving all Tomball. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Tomball, TX"
    heroSubtitle="Tomball fire damage restoration experts. Fast 24/7 emergency response."
    introParagraph="Tomball homeowners trust CBRS Group for professional fire damage restoration services. Our certified technicians provide rapid 24/7 emergency response throughout Tomball and the surrounding areas. From emergency board-up to complete reconstruction, we handle every aspect of your fire restoration project."
    areaDescription="Tomball's mix of established neighborhoods and new developments requires fire restoration experts who understand diverse construction styles. Our team provides comprehensive fire damage restoration services, addressing smoke damage, soot cleanup, and structural repairs while working efficiently to restore your home."
    commonCauses={[
      "Kitchen fires in Tomball family homes",
      "Electrical fires in newer construction from installation issues",
      "Brush fires from rural Tomball properties spreading to structures",
      "Garage workshop fires from power tools and stored materials",
      "Lightning strikes during northwest Harris County storms",
      "Outdoor fire pit accidents in wooded backyard areas",
    ]}
    neighborhoods={[
      "Northpointe",
      "Lakewood Forest",
      "Rosehill",
      "Pinehurst",
      "Willow Creek Estates",
      "Tomball Town Center",
      "Decker Prairie",
      "Hufsmith",
      "Spring Creek Oaks",
      "Creekside",
      "Woodson's Reserve",
      "Augusta Pines",
    ]}
    nearbyAreas={[
      { name: "Spring", slug: "spring" },
      { name: "The Woodlands", slug: "the-woodlands" },
      { name: "Cypress", slug: "cypress" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default TomballFireDamage;
