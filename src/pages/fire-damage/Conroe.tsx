import FireDamageLocationPage from "@/components/FireDamageLocationPage";

const ConroeFireDamage = () => (
  <FireDamageLocationPage
    city="Conroe"
    county="Montgomery County"
    metaTitle="Fire Damage Restoration Conroe TX | 24/7 Emergency Fire Repair | CBRS Group"
    metaDescription="Conroe TX fire damage restoration. 24/7 emergency fire & smoke cleanup, soot removal, odor elimination & full restoration. Serving Lake Conroe area. Call (832) 608-0535."
    heroTitle="Fire Damage Restoration in Conroe, TX"
    heroSubtitle="Conroe and Montgomery County fire damage experts. Available 24/7 for emergencies."
    introParagraph="Conroe and Montgomery County homeowners rely on CBRS Group for professional fire damage restoration. Our team provides rapid 24/7 emergency response throughout Conroe, Willis, and the Lake Conroe area. We handle everything from emergency board-up to complete structural repairs with one dedicated point of contact."
    areaDescription="Conroe's lakefront properties and wooded lots present unique fire restoration challenges. Our team understands the specific needs of Lake Conroe area homes, from addressing smoke damage in waterfront properties to restoring fire-damaged homes in wooded settings. We provide comprehensive restoration tailored to your property."
    commonCauses={[
      "Fireplace and wood stove fires in Lake Conroe cabins and homes",
      "Lightning strikes during Montgomery County thunderstorms",
      "Brush fires from wooded lots spreading to home structures",
      "Boat and dock fires spreading to lakefront properties",
      "Outdoor fire pit and burn pile accidents",
      "Electrical fires in vacation homes from infrequent use",
    ]}
    neighborhoods={[
      "Lake Conroe",
      "Grand Central Park",
      "April Sound",
      "Walden",
      "River Plantation",
      "Bentwater",
      "Panorama Village",
      "Cut and Shoot",
      "Willis",
      "Montgomery",
      "Woodforest",
      "Harper's Preserve",
    ]}
    nearbyAreas={[
      { name: "The Woodlands", slug: "the-woodlands" },
      { name: "Spring", slug: "spring" },
      { name: "Tomball", slug: "tomball" },
      { name: "Houston", slug: "houston" },
    ]}
  />
);

export default ConroeFireDamage;
