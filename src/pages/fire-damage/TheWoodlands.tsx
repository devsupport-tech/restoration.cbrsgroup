import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const TheWoodlandsFireDamage = () => (
  <FireDamageLocationPage
    city="The Woodlands"
    county="Montgomery County"
    metaTitle="Fire Damage Restoration The Woodlands TX | 24/7 Emergency | CBRS Group"
    metaDescription="The Woodlands TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving all Woodlands villages. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in The Woodlands, TX"
    heroSubtitle="Premium fire damage restoration for The Woodlands. Fast response, expert service, complete restoration."
    introParagraph="The Woodlands deserves premium fire damage restoration services. CBRS Group provides The Woodlands homeowners with fast 24/7 emergency response, certified technicians, and complete restoration services from emergency board-up to full reconstruction. We treat your home with the care it deserves while working efficiently to restore your property."
    areaDescription="The Woodlands' beautiful custom homes and wooded lots require specialized fire restoration expertise. Our team understands the unique challenges of restoring fire-damaged homes in The Woodlands, from dealing with smoke damage in high ceilings to addressing fire damage in multi-story custom homes. We provide comprehensive restoration tailored to your home's specific needs."
    commonCauses={[
      "Fireplace and chimney fires in The Woodlands' luxury homes",
      "Lightning strikes during severe thunderstorms igniting wooded lots",
      "Outdoor fire pit accidents spreading to landscaping and structures",
      "Electrical fires in custom home additions and renovations",
      "Kitchen fires in gourmet kitchens with commercial-grade appliances",
      "Holiday lighting electrical fires in heavily decorated homes",
    ]}
    neighborhoods={[
      "Grogan's Mill",
      "Panther Creek",
      "Cochran's Crossing",
      "Indian Springs",
      "Alden Bridge",
      "Sterling Ridge",
      "College Park",
      "Creekside Park",
      "Carlton Woods",
      "Town Center",
      "East Shore",
      "Harper's Landing",
    ]}
    nearbyAreas={[
      { name: "Spring", slug: "spring" },
      { name: "Conroe", slug: "conroe" },
      { name: "Tomball", slug: "tomball" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default TheWoodlandsFireDamage;
