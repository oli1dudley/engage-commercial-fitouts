import type { BlogPost, BlogAuthor } from "@/types/blog";

// ─── Default Author ────────────────────────────────────────────────────────
const WMS_TEAM: BlogAuthor = {
  name: "WeMoveStuff Team",
  bio: "Moving and relocation specialists based in Dubai, UAE. We share practical advice to help residents and businesses move with less stress.",
  avatar: "/images/blog/authors/wms-team.jpg",
};

// ─── Blog Posts ────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [

  // ── 1: Apartment Moving Checklist Dubai (FLAGSHIP, FEATURED) ────────────
  {
    slug: "apartment-moving-checklist-dubai",
    title: "Apartment Moving Checklist Dubai: Everything You Need Before Moving Day",
    excerpt:
      "A complete step-by-step apartment moving checklist for Dubai residents — covering everything from booking movers and notifying utilities to moving day logistics and settling in.",
    category: "checklists",
    tags: ["apartment-moving", "moving-checklist", "dubai-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-05-01",
    readingTime: 8,
    featuredImage: "/images/blog/apartment-moving-checklist-dubai.jpg",
    featured: true,
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Apartment Moving Checklist Dubai | Complete Guide | WeMoveStuff",
      description:
        "Complete apartment moving checklist for Dubai. Everything to do 4 weeks, 1 week and on moving day — from booking movers to notifying utilities.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving apartments in Dubai involves more coordination than most people expect. Between booking movers, coordinating building management, arranging utility transfers and organising your belongings, the list of tasks grows quickly. This checklist covers everything you need to do — broken down by timeframe — so nothing gets missed.",
      },
      { type: "h2", text: "4 Weeks Before Moving Day" },
      {
        type: "ul",
        items: [
          "Confirm your move-out date with your landlord and get it in writing",
          "Book your moving company — reputable slots fill up quickly, especially at month-end",
          "Request a quote and confirm what is and isn't included in the service",
          "Notify your employer, bank and DEWA of your upcoming address change",
          "Start decluttering — donate, sell or dispose of items you won't be moving",
          "Order packing supplies if you're packing yourself (boxes, tape, bubble wrap)",
          "Research your new community — parking, building access, supermarkets nearby",
        ],
      },
      { type: "h2", text: "2 Weeks Before Moving Day" },
      {
        type: "ul",
        items: [
          "Contact your new building's management to arrange the service lift",
          "Check if your current building has moving-out restrictions or hours",
          "Confirm your moving company booking and provide access instructions for both buildings",
          "Start packing non-essential items — books, decorative items, off-season clothing",
          "Label all boxes clearly by room and contents",
          "Arrange transfer of DEWA account to new address",
          "Notify your internet provider of the move and arrange new connection",
          "Update your address with key contacts — gym, school, subscriptions",
        ],
      },
      { type: "cta" },
      { type: "h2", text: "Moving Day" },
      {
        type: "checklist",
        title: "Moving day checklist",
        items: [
          "Confirm arrival time with your moving team the evening before",
          "Clear access routes in both the current and new apartment",
          "Keep valuables, documents and essentials with you — not on the truck",
          "Take photos of walls and fittings before the movers start",
          "Stay available to answer questions and direct the team",
          "Do a final walkthrough of every room, cupboard and storage space",
          "Return keys, access cards and parking tags to building management",
          "Check the truck is fully loaded before it leaves",
          "Be present at the new apartment to direct furniture placement",
        ],
      },
      { type: "h2", text: "After Moving In" },
      {
        type: "ul",
        items: [
          "Check all furniture and belongings for damage before signing off",
          "Photograph the new apartment's condition on arrival",
          "Test all appliances, taps, ACs and lights",
          "Locate the mains switch, water valve and fuse box",
          "Register with the new building management",
          "Update your Emirates ID address at the nearest GDRFA service centre",
          "Update vehicle registration address if required",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Pro tip: service lift booking",
        text: "Most high-rise buildings in Dubai require advance booking of the service lift for moves. Contact building management at least 7–10 days ahead to secure your slot. Moving without a booked lift causes delays and can cost you extra hours with your moving team.",
      },
      { type: "h2", text: "High-Rise Building Considerations" },
      {
        type: "paragraph",
        text: "Moving in a high-rise building in Dubai requires additional coordination. Parking for the moving truck, service lift bookings and building security clearance all need to be arranged in advance. Let your moving company know the building name, floor and any access restrictions as early as possible so they can plan accordingly.",
      },
      {
        type: "paragraph",
        text: "Most reputable moving companies in Dubai are familiar with the process for major residential towers and can handle the coordination on your behalf. Ask about this when requesting your quote.",
      },
    ],
  },

  // ── 2: How Much Do Movers Cost In Dubai (FLAGSHIP) ──────────────────────
  {
    slug: "how-much-do-movers-cost-in-dubai",
    title: "How Much Do Movers Cost In Dubai? (2026 Pricing Guide)",
    excerpt:
      "A transparent breakdown of moving costs in Dubai — for apartments, villas and offices — including what factors affect your quote and how to get value for money.",
    category: "moving-costs",
    tags: ["moving-costs", "apartment-moving", "villa-moving", "commercial-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-05-10",
    readingTime: 7,
    featuredImage: "/images/blog/how-much-do-movers-cost-dubai.jpg",
    relatedService: "/quote",
    seo: {
      title: "How Much Do Movers Cost In Dubai? 2026 Price Guide | WeMoveStuff",
      description:
        "Transparent breakdown of moving costs in Dubai for apartments, villas and offices. What affects your quote and how to get accurate pricing.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving costs in Dubai vary widely depending on the size of your property, the distance involved, access conditions, and whether you need additional services like packing or furniture assembly. This guide breaks down typical price ranges and explains exactly what affects your final quote.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Note on pricing",
        text: "Moving prices in Dubai are not regulated and vary between companies. The ranges below reflect typical market pricing. Always request a detailed written quote before confirming any booking.",
      },
      { type: "h2", text: "What Affects The Cost Of A Move In Dubai?" },
      {
        type: "ul",
        items: [
          "Property size — number of bedrooms, overall volume of belongings",
          "Distance between origin and destination",
          "Floor level and lift access at both properties",
          "Whether packing services are included",
          "Whether furniture dismantling and assembly is required",
          "Moving date — weekend and end-of-month dates can cost more",
          "Access conditions — parking, building restrictions, service lift availability",
          "Number of movers required and duration of the job",
        ],
      },
      { type: "h2", text: "Apartment Moving Costs Dubai" },
      {
        type: "paragraph",
        text: "Apartment moves are the most common type of residential move in Dubai. Costs generally depend on apartment size and the services included.",
      },
      {
        type: "ul",
        items: [
          "Studio apartment: typically the most affordable, completed in a few hours",
          "1–2 bedroom apartment: mid-range, usually a half to full day",
          "3–4 bedroom apartment: larger volume, often requires a full day",
          "Packing services add to the total but reduce stress and protect belongings",
        ],
      },
      { type: "h2", text: "Villa Moving Costs Dubai" },
      {
        type: "paragraph",
        text: "Villa moves involve larger volumes of furniture and belongings, often across multiple floors. Costs reflect the additional time, team size and equipment required.",
      },
      {
        type: "ul",
        items: [
          "Smaller villas (2–3 bedrooms): significantly more than an apartment of equivalent size due to floor area",
          "Larger villas (4–6 bedrooms): typically require a larger team and multiple vehicles",
          "Packing and furniture assembly often represent a significant proportion of the total cost for large villas",
        ],
      },
      { type: "cta" },
      { type: "h2", text: "Commercial Moving Costs Dubai" },
      {
        type: "paragraph",
        text: "Commercial moves vary enormously in scope. A small office with 5 workstations is a very different job from a 100-person company relocating across the city. Costs are typically based on volume, timing and the services required.",
      },
      {
        type: "ul",
        items: [
          "Small offices (5–15 workstations): can often be completed in one day",
          "Medium offices (15–50 workstations): typically 1–2 days depending on IT complexity",
          "Large commercial relocations: multi-day projects, often outside business hours",
          "Out-of-hours moves (evenings, weekends) may cost more but reduce business downtime",
        ],
      },
      { type: "h2", text: "How To Get An Accurate Quote" },
      {
        type: "paragraph",
        text: "The most reliable way to get an accurate price is to provide as much detail as possible when requesting a quote. Include: property type and size, both locations, preferred moving date, whether you need packing, and any large or unusual items. The more detail you provide, the more accurate the quote will be.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Send photos for a faster, more accurate quote",
        text: "Sending photos of your main furniture items — particularly large wardrobes, sofas, beds and any specialist pieces — helps moving companies give you an accurate quote without a site visit. WhatsApp is the fastest way to share these.",
      },
    ],
  },

  // ── 3: Moving House In Dubai: Complete Guide (FLAGSHIP) ─────────────────
  {
    slug: "moving-house-dubai-complete-guide",
    title: "Moving House In Dubai: A Complete Guide For Residents",
    excerpt:
      "Everything you need to know about moving home in Dubai — from choosing a moving company and understanding building requirements to setting up utilities at your new property.",
    category: "moving-guides",
    tags: ["moving-guides", "apartment-moving", "dubai-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-05-15",
    readingTime: 10,
    featuredImage: "/images/blog/moving-house-dubai-complete-guide.jpg",
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Moving House In Dubai: Complete Guide 2026 | WeMoveStuff",
      description:
        "Complete guide to moving home in Dubai. Choosing movers, building requirements, utility transfers and settling into your new property.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving home in Dubai has its own specific requirements. Unlike many other cities, high-rise buildings, strict building management rules and the intense summer heat all shape how a Dubai move needs to be planned. This guide covers the full process — from deciding on a moving company to settling in at your new property.",
      },
      { type: "h2", text: "Planning Your Dubai Move" },
      {
        type: "paragraph",
        text: "Start planning as early as possible — ideally 4–6 weeks before your intended moving date. End-of-month dates are the busiest in Dubai as most tenancy agreements end on the 1st, so moving teams and service lifts are in high demand. Booking early secures your preferred slot and gives you time to handle administrative tasks without rushing.",
      },
      { type: "h2", text: "Choosing A Moving Company In Dubai" },
      {
        type: "ul",
        items: [
          "Request quotes from multiple companies — compare what is included, not just the price",
          "Check that the company has experience with your building type (high-rise, villa, compound)",
          "Ask whether packing materials, furniture dismantling and TV installation are included or additional",
          "Confirm the number of movers and vehicles for your job",
          "Ask how they handle building management coordination and service lift booking",
          "Check reviews and ask for references if you're moving a large or valuable property",
        ],
      },
      { type: "h2", text: "Building Management Requirements" },
      {
        type: "paragraph",
        text: "Most apartment buildings and many villa communities in Dubai have specific rules for moving. These typically include: mandatory use of the service lift (not the passenger lift), designated moving hours, parking permits for moving trucks, and sometimes a deposit or moving-out fee. Your moving company should be familiar with these requirements, but always confirm directly with your building management office as well.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Service lift booking is essential",
        text: "Attempting to move without a booked service lift in a high-rise building can result in your move being stopped by building security. Book your service lift slot at least 7–10 days in advance. Your moving company can often handle this on your behalf.",
      },
      { type: "cta" },
      { type: "h2", text: "Utility Transfers And Administration" },
      {
        type: "checklist",
        title: "Admin tasks to complete before moving",
        items: [
          "Transfer your DEWA account to the new address (or set up a new account)",
          "Notify your internet/TV provider and arrange service at the new address",
          "Update your Emirates ID address at a GDRFA centre after moving",
          "Update your vehicle registration address",
          "Notify your bank of the new address",
          "Update your employer's records",
          "Notify subscription services, delivery addresses and contacts",
        ],
      },
      { type: "h2", text: "Moving In Summer" },
      {
        type: "paragraph",
        text: "Moving in Dubai during summer (June–September) means working in extreme heat. Most professional moving teams work early in the morning to avoid peak temperatures. If you're moving in summer, discuss timing with your moving company and ensure you have water available. The physical conditions make professional help even more valuable during these months.",
      },
      { type: "h2", text: "After The Move" },
      {
        type: "paragraph",
        text: "Once you've moved in, take time to document the condition of the new property with photos before unpacking. Test all appliances, taps, air conditioning units and light fittings. Report any existing damage to the landlord or property manager in writing as soon as possible.",
      },
    ],
  },

  // ── 4: Villa Moving Checklist ────────────────────────────────────────────
  {
    slug: "villa-moving-checklist-dubai",
    title: "Villa Moving Checklist Dubai: How To Plan A Successful Villa Move",
    excerpt:
      "A complete checklist for moving a villa in Dubai, covering advance planning, packing large furniture, community-specific requirements and moving day coordination.",
    category: "checklists",
    tags: ["villa-moving", "moving-checklist"],
    author: WMS_TEAM,
    publishedDate: "2026-05-20",
    readingTime: 7,
    featuredImage: "/images/blog/villa-moving-checklist-dubai.jpg",
    relatedService: "/services/villa-moving",
    content: [
      {
        type: "paragraph",
        text: "Moving a villa in Dubai is a more complex operation than moving an apartment. Larger furniture, multiple floors, community access rules and significantly more volume all require extra planning. This checklist covers everything you need to coordinate for a smooth villa move.",
      },
      { type: "h2", text: "6 Weeks Before Your Villa Move" },
      {
        type: "ul",
        items: [
          "Book your moving company early — villa moves require larger teams and vehicles",
          "Walk through the villa and list all large furniture items that need dismantling",
          "Check community rules for moving trucks — many gated communities have restrictions",
          "Arrange a removal date with your landlord or developer",
          "Begin sorting and decluttering — villa moves accumulate a lot over time",
        ],
      },
      { type: "h2", text: "Packing A Villa" },
      {
        type: "paragraph",
        text: "Packing a large villa yourself can take several days. Many residents choose to have professional packers handle either the full property or specific areas such as the kitchen and fragile items. If you're packing yourself, work room-by-room and start with the rooms you use least.",
      },
      { type: "cta" },
      { type: "h2", text: "Large Furniture Considerations" },
      {
        type: "paragraph",
        text: "Villas typically contain large furniture — king-size beds, wardrobes, dining tables, sofas and outdoor furniture — that needs to be dismantled before it can be moved safely. Confirm with your moving company which items will need to be taken apart and whether this service is included in the quote.",
      },
    ],
  },

  // ── 5: Office Relocation Checklist ──────────────────────────────────────
  {
    slug: "office-relocation-checklist-dubai",
    title: "Office Relocation Checklist Dubai: A Step-By-Step Guide",
    excerpt:
      "A practical office relocation checklist for Dubai businesses — covering planning, IT, staff communication, moving day logistics and setup at the new premises.",
    category: "checklists",
    tags: ["commercial-moving", "moving-checklist", "office-relocation"],
    author: WMS_TEAM,
    publishedDate: "2026-05-25",
    readingTime: 6,
    featuredImage: "/images/blog/office-relocation-checklist-dubai.jpg",
    relatedService: "/services/commercial-moving",
    content: [
      {
        type: "paragraph",
        text: "An office relocation in Dubai requires coordination across multiple teams — management, IT, facilities and staff. Without a clear plan, even a small office move can cause significant downtime. This checklist helps you manage the process and keep disruption to a minimum.",
      },
      { type: "h2", text: "8 Weeks Before The Office Move" },
      {
        type: "ul",
        items: [
          "Form a move committee or assign a project manager for the relocation",
          "Create an inventory of all furniture, IT equipment and office contents",
          "Request quotes from commercial moving companies with Dubai office experience",
          "Plan the new office layout in advance — know where each team sits",
          "Identify IT infrastructure requirements at the new location",
        ],
      },
      { type: "h2", text: "Communicating The Move To Staff" },
      {
        type: "paragraph",
        text: "Staff communication is one of the most important parts of an office relocation. Give teams as much notice as possible, explain the timeline, and make clear what each person is responsible for on moving day. Uncertainty leads to delays.",
      },
      { type: "cta" },
      { type: "h2", text: "Moving Day Coordination" },
      {
        type: "paragraph",
        text: "Assign a coordinator to be present throughout the move. They should manage the moving team, direct furniture placement at the new office and handle any issues that arise. Having a floor plan printed and shared with the moving crew significantly speeds up setup at the new premises.",
      },
    ],
  },

  // ── 6: Apartment Packing Tips ────────────────────────────────────────────
  {
    slug: "apartment-packing-tips",
    title: "Apartment Packing Tips: How To Pack An Apartment Efficiently",
    excerpt:
      "Practical packing tips for apartment moves in Dubai — from packing order and materials to protecting fragile items and making unpacking faster.",
    category: "packing-tips",
    tags: ["packing", "apartment-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-06-01",
    readingTime: 5,
    featuredImage: "/images/blog/apartment-packing-tips.jpg",
    relatedService: "/services/packing-services",
    content: [
      {
        type: "paragraph",
        text: "Packing an apartment is time-consuming even when you have the right approach. The difference between a chaotic move and a smooth one often comes down to how well you've packed. These tips will help you pack faster, protect your belongings and make unpacking at the other end much easier.",
      },
      { type: "h2", text: "Start With The Right Materials" },
      {
        type: "ul",
        items: [
          "Use proper removal boxes — not supermarket cardboard — for heavier items",
          "Keep a range of box sizes: small for books and heavy items, large for soft furnishings",
          "Stock up on bubble wrap, packing paper and quality tape before you start",
          "Wardrobe boxes let you move hanging clothes without folding them",
        ],
      },
      { type: "h2", text: "Pack Room By Room" },
      {
        type: "paragraph",
        text: "Packing room by room keeps things organised and makes unpacking faster. Label every box with the room it belongs to and a brief description of the contents. Stack boxes so labels are always visible.",
      },
      { type: "cta" },
      { type: "h2", text: "Protect Fragile Items" },
      {
        type: "callout",
        variant: "tip",
        title: "Wrap each fragile item individually",
        text: "Each glass, plate or ornament should be individually wrapped in packing paper or bubble wrap. Pack plates vertically (like records) rather than flat — they're significantly more resistant to breakage this way.",
      },
    ],
  },

  // ── 7: How To Prepare For A Villa Move ──────────────────────────────────
  {
    slug: "how-to-prepare-for-a-villa-move",
    title: "How To Prepare For A Villa Move In Dubai",
    excerpt:
      "Everything you need to do before, during and after a villa move in Dubai — from choosing the right moving team to settling into your new community.",
    category: "villa-moving",
    tags: ["villa-moving", "dubai-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-06-02",
    readingTime: 6,
    featuredImage: "/images/blog/how-to-prepare-villa-move.jpg",
    relatedService: "/services/villa-moving",
    content: [
      {
        type: "paragraph",
        text: "Preparing for a villa move in Dubai is significantly different from moving an apartment. The volume of furniture, the need to coordinate with gated community management, and the complexity of packing a multi-floor property all require more lead time and planning.",
      },
      { type: "h2", text: "Choose Movers With Villa Experience" },
      {
        type: "paragraph",
        text: "Not all moving companies in Dubai have experience with large villa moves. Ask specifically about their experience with your community and confirm they have the right equipment — larger trucks, furniture straps, protective covers — for a villa-scale move.",
      },
      { type: "h2", text: "Community Access Requirements" },
      {
        type: "paragraph",
        text: "Gated communities in Dubai — such as Arabian Ranches, Dubai Hills, The Springs and Damac Hills — typically require moving trucks to register at the gate. Your moving company should handle this but confirm the process with your community management in advance.",
      },
      { type: "cta" },
    ],
  },

  // ── 8: Office Relocation Planning Guide ─────────────────────────────────
  {
    slug: "office-relocation-planning-guide",
    title: "Office Relocation Planning Guide For Dubai Businesses",
    excerpt:
      "A comprehensive planning guide for office relocations in Dubai — from selecting a new premises and planning the layout to coordinating the move and minimising downtime.",
    category: "commercial-moving",
    tags: ["commercial-moving", "office-relocation"],
    author: WMS_TEAM,
    publishedDate: "2026-06-03",
    readingTime: 7,
    featuredImage: "/images/blog/office-relocation-planning-guide.jpg",
    relatedService: "/services/commercial-moving",
    content: [
      {
        type: "paragraph",
        text: "A well-planned office relocation minimises disruption and gives your team a strong start in the new space. A poorly planned one can cost days of productivity. This guide covers the key decisions and timelines for relocating a Dubai office.",
      },
      { type: "h2", text: "Define Your Relocation Requirements" },
      {
        type: "ul",
        items: [
          "How many staff need to be accommodated at the new location?",
          "What IT infrastructure is required — server room, cabling, internet capacity?",
          "Do you need specialist areas — meeting rooms, reception, storage?",
          "What is your preferred moving timeline and target date?",
        ],
      },
      { type: "h2", text: "Minimising Business Downtime" },
      {
        type: "paragraph",
        text: "The most effective way to minimise downtime is to move outside business hours. Evening and weekend moves allow your team to arrive at the new office on Monday morning with workstations set up and the business operational.",
      },
      { type: "cta" },
    ],
  },

  // ── 9: Packing Fragile Items Safely ─────────────────────────────────────
  {
    slug: "packing-fragile-items-safely",
    title: "Packing Fragile Items Safely: A Guide For Dubai Movers",
    excerpt:
      "How to pack glassware, artwork, electronics and other fragile belongings for a move — with practical techniques that reduce the risk of damage.",
    category: "packing-tips",
    tags: ["packing", "fragile-items"],
    author: WMS_TEAM,
    publishedDate: "2026-06-04",
    readingTime: 5,
    featuredImage: "/images/blog/packing-fragile-items-safely.jpg",
    relatedService: "/services/packing-services",
    content: [
      {
        type: "paragraph",
        text: "Fragile items are the most common source of damage during a move. With the right materials and technique, the risk can be reduced significantly. This guide covers how to pack the most commonly damaged items.",
      },
      { type: "h2", text: "Glassware And Kitchenware" },
      {
        type: "paragraph",
        text: "Glasses and ceramics should be individually wrapped in packing paper and placed upright in small boxes with plenty of cushioning. Fill any empty space with crumpled paper — boxes that rattle during transport are more likely to produce breakages.",
      },
      { type: "h2", text: "Electronics And Screens" },
      {
        type: "paragraph",
        text: "Use original packaging wherever possible for electronics. If original boxes are unavailable, wrap screens in anti-static bubble wrap and pack in an appropriately sized box with corner protection. TVs should be transported vertically, not flat.",
      },
      { type: "cta" },
    ],
  },

  // ── 10: Furniture Moving Tips ────────────────────────────────────────────
  {
    slug: "furniture-moving-tips",
    title: "Furniture Moving Tips: How To Move Large Furniture Without Damage",
    excerpt:
      "Practical tips for moving large furniture safely — including when to dismantle, how to protect surfaces and what to ask your moving company.",
    category: "furniture-setup",
    tags: ["furniture", "apartment-moving", "villa-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-06-05",
    readingTime: 5,
    featuredImage: "/images/blog/furniture-moving-tips.jpg",
    relatedService: "/services/furniture-assembly",
    content: [
      {
        type: "paragraph",
        text: "Moving large furniture is one of the highest-risk parts of any home move. Scratched floors, damaged doorframes and broken furniture are all preventable with the right approach. Here are the most important tips for moving furniture safely.",
      },
      { type: "h2", text: "When To Dismantle Furniture" },
      {
        type: "paragraph",
        text: "Any furniture that cannot pass through doorways or stairwells without risk of damage to itself or the building should be dismantled before moving. This typically includes large wardrobes, king-size beds, corner sofas and dining tables. Attempting to force large items through narrow spaces is the most common cause of damage.",
      },
      { type: "h2", text: "Protecting Furniture During A Move" },
      {
        type: "ul",
        items: [
          "Use furniture blankets to protect surfaces during transport",
          "Wrap legs and protruding elements in bubble wrap",
          "Protect door frames and corners with cardboard padding",
          "Use furniture sliders on smooth floors to avoid scratching",
        ],
      },
      { type: "cta" },
    ],
  },

  // ── 11: TV Installation After Moving ────────────────────────────────────
  {
    slug: "tv-installation-after-moving",
    title: "TV Installation After Moving: How To Set Up Your TV In A New Home",
    excerpt:
      "A practical guide to removing, transporting and reinstalling your TV when moving home in Dubai — including wall mounting tips and when to call a professional.",
    category: "furniture-setup",
    tags: ["tv-installation", "apartment-moving"],
    author: WMS_TEAM,
    publishedDate: "2026-06-06",
    readingTime: 4,
    featuredImage: "/images/blog/tv-installation-after-moving.jpg",
    relatedService: "/services/tv-installation",
    content: [
      {
        type: "paragraph",
        text: "Moving a wall-mounted TV is a job many people underestimate. Done incorrectly, it can result in a cracked screen, a damaged wall or an unsafe mount at the new property. This guide explains how to handle a TV move properly.",
      },
      { type: "h2", text: "Removing A Wall-Mounted TV" },
      {
        type: "paragraph",
        text: "Before removing a wall-mounted TV, disconnect all cables and take a photo of the back of the TV to remember which ports correspond to which cables. Have a second person hold the TV while you loosen the bracket — large screens are heavier than they look.",
      },
      { type: "h2", text: "Transporting Your TV Safely" },
      {
        type: "callout",
        variant: "warning",
        title: "Never transport a TV flat",
        text: "LCD and OLED screens should always be transported vertically. Laying a screen flat places stress on the panel and significantly increases the risk of damage. If you don't have the original box, ask your moving company about screen transport solutions.",
      },
      { type: "cta" },
    ],
  },

  // ── 12: Moving To Dubai Marina Guide ────────────────────────────────────
  {
    slug: "moving-to-dubai-marina",
    title: "Moving To Dubai Marina: Everything You Need To Know",
    excerpt:
      "A practical guide to moving into Dubai Marina — covering building access, parking, service lifts and what to expect when moving into one of Dubai's most popular waterfront communities.",
    category: "dubai-living",
    tags: ["dubai-marina", "apartment-moving", "dubai-living"],
    author: WMS_TEAM,
    publishedDate: "2026-06-07",
    readingTime: 5,
    featuredImage: "/images/blog/moving-to-dubai-marina.jpg",
    relatedService: "/services/apartment-moving",
    content: [
      {
        type: "paragraph",
        text: "Dubai Marina is one of the most popular residential areas in Dubai, home to a large number of high-rise residential towers. Moving into Dubai Marina has specific requirements that anyone planning a move should be aware of.",
      },
      { type: "h2", text: "Service Lift Requirements In Dubai Marina" },
      {
        type: "paragraph",
        text: "Almost all buildings in Dubai Marina require the use of the service lift for moves. Service lifts must be booked through building management, usually 5–10 days in advance. Moving without a booked service lift will be stopped by building security. Your moving company can handle the booking on your behalf.",
      },
      { type: "h2", text: "Parking For Moving Trucks" },
      {
        type: "paragraph",
        text: "Parking a large moving truck in Dubai Marina can be challenging. Most buildings have a designated loading area or parking bay for moves. Confirm this with building management before moving day and provide the details to your moving company.",
      },
      { type: "cta" },
    ],
  },

  // ── 13: Moving To Dubai Hills Guide ─────────────────────────────────────
  {
    slug: "moving-to-dubai-hills",
    title: "Moving To Dubai Hills Estate: A Guide For New Residents",
    excerpt:
      "What to expect when moving to Dubai Hills Estate — community access rules, moving truck requirements and tips for settling into this popular family community.",
    category: "dubai-living",
    tags: ["dubai-hills", "villa-moving", "dubai-living"],
    author: WMS_TEAM,
    publishedDate: "2026-06-08",
    readingTime: 4,
    featuredImage: "/images/blog/moving-to-dubai-hills.jpg",
    relatedService: "/services/villa-moving",
    content: [
      {
        type: "paragraph",
        text: "Dubai Hills Estate is a popular choice for families moving to Dubai, offering a mix of villas, townhouses and apartments. Moving into a gated community like Dubai Hills has specific access requirements that need to be arranged in advance.",
      },
      { type: "h2", text: "Community Access Requirements" },
      {
        type: "paragraph",
        text: "Moving trucks entering Dubai Hills must register at the community gate. Your moving company will typically need to provide vehicle details and a contact number in advance. Contact Emaar community management to confirm the current requirements before your move.",
      },
      { type: "cta" },
    ],
  },

  // ── 14: Moving To JVC Guide ──────────────────────────────────────────────
  {
    slug: "moving-to-jvc-dubai",
    title: "Moving To JVC (Jumeirah Village Circle): What You Need To Know",
    excerpt:
      "A practical guide to moving into JVC — one of Dubai's most affordable and popular communities — covering access, parking and what to expect.",
    category: "dubai-living",
    tags: ["jvc", "apartment-moving", "dubai-living"],
    author: WMS_TEAM,
    publishedDate: "2026-06-09",
    readingTime: 4,
    featuredImage: "/images/blog/moving-to-jvc-dubai.jpg",
    relatedService: "/services/apartment-moving",
    content: [
      {
        type: "paragraph",
        text: "Jumeirah Village Circle (JVC) is one of the most popular and affordable residential communities in Dubai. It's home to a large mix of apartments, townhouses and villas across numerous sub-communities and buildings.",
      },
      { type: "h2", text: "Parking And Access In JVC" },
      {
        type: "paragraph",
        text: "JVC has generally good parking availability for moving trucks compared to more densely built areas like Dubai Marina. Most buildings have a loading bay or at minimum street-level access. Confirm parking arrangements with your building management before moving day.",
      },
      { type: "cta" },
    ],
  },

  // ── 15: Commercial Moving Mistakes To Avoid ──────────────────────────────
  {
    slug: "commercial-moving-mistakes-to-avoid",
    title: "Commercial Moving Mistakes To Avoid In Dubai",
    excerpt:
      "The most common mistakes businesses make when planning an office or commercial relocation in Dubai — and how to avoid them.",
    category: "commercial-moving",
    tags: ["commercial-moving", "office-relocation"],
    author: WMS_TEAM,
    publishedDate: "2026-06-10",
    readingTime: 5,
    featuredImage: "/images/blog/commercial-moving-mistakes.jpg",
    relatedService: "/services/commercial-moving",
    content: [
      {
        type: "paragraph",
        text: "Commercial moves that go wrong tend to fail for the same predictable reasons. Understanding these common mistakes before you plan your office relocation is the best way to avoid them.",
      },
      { type: "h2", text: "Mistake 1: Booking Too Late" },
      {
        type: "paragraph",
        text: "Commercial moving teams have limited availability, particularly for large jobs or out-of-hours moves. Booking 4–8 weeks in advance is standard for medium to large office relocations. Leaving it to the last minute limits your options and can significantly increase cost.",
      },
      { type: "h2", text: "Mistake 2: Underestimating The Volume" },
      {
        type: "paragraph",
        text: "Businesses consistently underestimate how much there is to move. Filing cabinets, server equipment, kitchen supplies, storage rooms and reception furniture all add up. A thorough inventory before requesting quotes ensures you receive accurate pricing.",
      },
      { type: "cta" },
      { type: "h2", text: "Mistake 3: No IT Coordination" },
      {
        type: "paragraph",
        text: "IT equipment — servers, networking hardware, specialist workstations — requires careful handling and proper reconnection planning. Coordinate with your IT team or provider well in advance of the move.",
      },
    ],
  },

  // ── 16: Weekend Office Relocation Guide ──────────────────────────────────
  {
    slug: "weekend-office-relocation-guide",
    title: "Weekend Office Relocation Guide: How To Move An Office Over A Weekend",
    excerpt:
      "How to plan and execute a weekend office relocation in Dubai — keeping your business fully operational by Monday morning.",
    category: "commercial-moving",
    tags: ["commercial-moving", "office-relocation"],
    author: WMS_TEAM,
    publishedDate: "2026-06-11",
    readingTime: 5,
    featuredImage: "/images/blog/weekend-office-relocation.jpg",
    relatedService: "/services/commercial-moving",
    content: [
      {
        type: "paragraph",
        text: "A well-executed weekend office relocation allows your business to be fully operational at the new premises on Monday morning with minimal disruption to staff or clients. Here's how to make it work.",
      },
      { type: "h2", text: "The Weekend Relocation Timeline" },
      {
        type: "ul",
        items: [
          "Friday after close of business: packing begins or moving team arrives",
          "Saturday: main move — furniture, equipment, boxes",
          "Saturday evening / Sunday: IT reconnection and setup",
          "Sunday: final setup, check everything is working",
          "Monday: business as usual at new premises",
        ],
      },
      { type: "h2", text: "What Makes A Weekend Move Work" },
      {
        type: "paragraph",
        text: "The key is preparation. Every workstation should be labelled, all equipment should be disconnected and packed before the moving team arrives, and the new office layout should be planned and shared with the crew in advance. The less decision-making happens on the day, the faster the move.",
      },
      { type: "cta" },
    ],
  },
];

export const FEATURED_POST = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
