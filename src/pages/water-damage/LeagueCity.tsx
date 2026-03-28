import LocationServicePage from "@/components/LocationServicePage";

const LeagueCityWaterDamage = () => (
  <LocationServicePage
    city="League City"
    county="Galveston County"
    metaTitle="Water Damage Restoration League City TX | 24/7 Emergency | CBRS Group"
    metaDescription="League City TX water damage restoration. 24/7 emergency water extraction, flood cleanup, hurricane damage repair & mold remediation. Serving Clear Lake & Bay Area. Call (832) 608-0535."
    heroTitle="Water Damage Restoration in League City, TX"
    heroSubtitle="League City and Clear Lake area water damage experts. 24/7 emergency response."
    introParagraph="League City and the Clear Lake area demand responsive, professional water damage restoration. CBRS Group provides 24/7 emergency service throughout League City, Kemah, and the surrounding Bay Area communities. Our certified technicians handle everything from water extraction and drying to mold remediation and complete reconstruction."
    areaDescription="League City's coastal location in Galveston County creates unique water damage challenges. The city is vulnerable to hurricane storm surge, tidal flooding, and heavy rain events. Clear Creek and Dickinson Bayou run through the area, and many neighborhoods were impacted by Hurricane Harvey and other major storms. Our team provides rapid response to protect your home from water damage."
    commonProblems={[
      "Hurricane storm surge and coastal flooding in Bay Area communities",
      "Clear Creek and Dickinson Bayou flooding during heavy rain events",
      "Salt air corrosion causing plumbing and water heater failures",
      "High humidity leading to persistent moisture issues and mold growth",
      "Tidal flooding in low-lying neighborhoods near Galveston Bay",
      "Boat and marina water damage extending to waterfront properties",
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
      { name: "Kemah", slug: "kemah" },
      { name: "Dickinson", slug: "dickinson" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default LeagueCityWaterDamage;
