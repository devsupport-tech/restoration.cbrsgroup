import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const LeagueCityFireDamage = () => (
  <FireDamageLocationPage
    city="League City"
    county="Galveston County"
    metaTitle="Fire Damage Restoration League City TX | 24/7 Emergency | CBRS Group"
    metaDescription="League City TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving Clear Lake & Bay Area. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in League City, TX"
    heroSubtitle="League City and Clear Lake area fire damage experts. 24/7 emergency response."
    introParagraph="League City and the Clear Lake area demand responsive, professional fire damage restoration. CBRS Group provides 24/7 emergency service throughout League City, Kemah, and the surrounding Bay Area communities. Our certified technicians handle everything from smoke cleanup to complete structural reconstruction."
    areaDescription="League City's coastal location and diverse neighborhoods require fire restoration experts who understand the unique challenges of the Bay Area. Salt air can accelerate damage from smoke and soot, making rapid response critical. Our team provides comprehensive fire damage restoration tailored to League City's specific needs."
    commonCauses={[
      "Kitchen fires in League City family homes",
      "Electrical fires from salt air corrosion affecting wiring",
      "Boat and watercraft fires spreading to waterfront properties",
      "Lightning strikes during Gulf Coast thunderstorms",
      "Garage fires from marine equipment and fuel storage",
      "HVAC fires from systems working overtime in humid conditions",
    ]}
    neighborhoods={[
      "South Shore Harbour",
      "Tuscan Lakes",
      "Victory Lakes",
      "Clear Creek",
      "Magnolia Creek",
      "Heritage Park",
      "Countryside",
      "Westover Park",
      "Bay Colony",
      "Brittany Lakes",
      "League City Parkway",
      "Marina Bay",
    ]}
    nearbyAreas={[
      { name: "Clear Lake", slug: "clear-lake" },
      { name: "Friendswood", slug: "friendswood" },
      { name: "Pearland", slug: "pearland" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default LeagueCityFireDamage;
