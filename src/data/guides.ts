import type { ContentBlock } from "@/types/blog";

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: "moving" | "packing" | "checklists" | "dubai" | "setup" | "relocation";
  readingTime: number;
  publishedDate: string;
  content: ContentBlock[];
  seo: {
    title: string;
    description: string;
  };
  relatedService?: string;
}

export const GUIDES: Guide[] = [
  // ─── Guide 1 ───────────────────────────────────────────────────────────────
  {
    slug: "dubai-moving-cost-guide",
    title: "Dubai Moving Cost Guide 2026",
    excerpt:
      "A complete breakdown of moving costs in Dubai for apartments, villas and offices — including what factors affect pricing and how to get accurate quotes.",
    category: "moving",
    readingTime: 10,
    publishedDate: "2026-01-15",
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Dubai Moving Cost Guide 2026 | What Does It Cost To Move? | WeMoveStuff",
      description:
        "Complete guide to Dubai moving costs — apartment, villa and office pricing, what affects your quote and how to get value for money.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving costs in Dubai vary widely depending on your property size, location, floor level, access, and the services you need. This guide gives you a realistic, transparent picture of what to expect — so you can budget accurately and avoid surprises.",
      },
      { type: "h2", text: "What Determines Your Moving Cost?" },
      {
        type: "paragraph",
        text: "Every move is different. A studio on the ground floor of a low-rise building is a fundamentally different job from a 3-bedroom apartment on the 40th floor of a tower in Business Bay. Here are the main factors movers use to calculate your quote.",
      },
      {
        type: "ul",
        items: [
          "Property size — number of rooms and volume of furniture",
          "Floor level and lift access — higher floors and no service lifts add time",
          "Building permit requirements — some towers require a Mollak permit to move",
          "Packing — whether you pack yourself or use professional packing services",
          "Furniture dismantling and reassembly — wardrobes, beds, large desks",
          "Distance — within the same community vs. across Dubai",
          "Time of month — month-end dates (25th–5th) carry a 10–20% surcharge due to high demand",
          "Time of year — September–November and March–April are peak periods",
        ],
      },
      { type: "h2", text: "Indicative Price Ranges for Dubai Apartments" },
      {
        type: "callout",
        variant: "info",
        title: "These are market estimates",
        text: "Prices below reflect standard moves without packing. Your actual quote may differ based on access, volume of items, and timing.",
      },
      {
        type: "ul",
        items: [
          "Studio apartment: AED 500 – 900",
          "1-bedroom apartment: AED 700 – 1,400",
          "2-bedroom apartment: AED 1,000 – 2,000",
          "3-bedroom apartment: AED 1,500 – 3,000",
          "4-bedroom apartment or penthouse: AED 2,500 – 5,000+",
          "Villa (varies widely by size): AED 2,000 – 8,000+",
          "Small office (up to 20 desks): AED 2,000 – 5,000",
          "Large office relocation: AED 5,000 – 20,000+",
        ],
      },
      { type: "h2", text: "What's Typically Included in a Moving Quote" },
      {
        type: "ul",
        items: [
          "Trained moving crew (2–4 people depending on property size)",
          "Covered moving truck(s)",
          "Furniture wrapping in protective blankets",
          "Basic furniture dismantling and reassembly (bed frames, wardrobes)",
          "Loading and unloading",
        ],
      },
      { type: "h3", text: "What Usually Costs Extra" },
      {
        type: "ul",
        items: [
          "Professional packing of all items (typically AED 200–600 extra)",
          "Packing materials (boxes, tape, bubble wrap)",
          "Building move permits (usually AED 200–500 depending on building)",
          "Piano or safe moving (specialised equipment required)",
          "TV dismounting and remounting",
          "Long-distance or inter-emirate moves",
          "Weekend or late-evening slots",
        ],
      },
      { type: "h2", text: "How to Get an Accurate Quote" },
      {
        type: "ol",
        items: [
          "Request an on-site or video survey — photos are helpful but a survey is most accurate",
          "List all large items that need dismantling (wardrobes, beds, gym equipment)",
          "Confirm your floor level and whether a service lift is available",
          "Check whether your building requires a move permit",
          "Tell the mover your preferred moving date (and any flexibility)",
          "Ask whether packing is included or quoted separately",
        ],
      },
      { type: "h2", text: "5 Ways to Reduce Your Moving Cost" },
      {
        type: "ol",
        items: [
          "Avoid month-end dates — the 10th–20th of the month is significantly cheaper",
          "Declutter before the move — fewer items means a smaller truck and less time",
          "Pack non-fragile items yourself — movers charge for time, so pre-packed boxes save labour",
          "Book at least 2 weeks in advance — last-minute bookings cost more",
          "Be flexible with your moving date — midweek moves are often cheaper than weekends",
        ],
      },
      { type: "h2", text: "Frequently Asked Questions About Moving Costs in Dubai" },
      {
        type: "callout",
        variant: "tip",
        title: "Do movers charge by hour or by job?",
        text: "Most Dubai movers quote a fixed price for the whole job, not an hourly rate. This protects you from unexpected cost overruns. Always confirm this before booking.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Is VAT included in moving quotes?",
        text: "VAT (5%) is sometimes included in quoted prices and sometimes added on top. Ask your mover to confirm whether their quote is inclusive of VAT.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Do I pay a deposit?",
        text: "Most movers in Dubai ask for a deposit of 20–30% to secure your booking date. The remainder is paid on completion of the move.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 2 ───────────────────────────────────────────────────────────────
  {
    slug: "apartment-moving-checklist",
    title: "Apartment Moving Checklist Dubai",
    excerpt:
      "The complete apartment moving checklist for Dubai residents — from 4 weeks before to settling in at your new home.",
    category: "checklists",
    readingTime: 8,
    publishedDate: "2026-01-20",
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Apartment Moving Checklist Dubai | Step-by-Step | WeMoveStuff",
      description:
        "Complete Dubai apartment moving checklist. 4 weeks before, 2 weeks before, 1 week before, moving day and after move tasks.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving apartments in Dubai involves more steps than most people expect — building permits, DEWA transfers, Ejari registration, service lift bookings and more. This checklist covers everything, in the right order.",
      },
      {
        type: "checklist",
        title: "4 Weeks Before Your Move",
        items: [
          "Book your moving company and confirm the date",
          "Notify your landlord in writing (check your notice period — usually 60–90 days)",
          "Check whether your building requires a move permit (most high-rise towers do)",
          "Start decluttering — sell, donate or dispose of items you won't take",
          "Begin sourcing packing materials (boxes, tape, bubble wrap)",
          "Notify your employer of your new address",
          "Research DEWA setup for the new property",
        ],
      },
      {
        type: "checklist",
        title: "2 Weeks Before Your Move",
        items: [
          "Apply for the building move permit at your current building",
          "Book the service lift at your current building for moving day",
          "Apply for the service lift at your new building",
          "Begin packing non-essential items (books, off-season clothes, décor)",
          "Label every box with contents and destination room",
          "Notify utility providers: DEWA, internet, district cooling",
          "Inform your bank, insurance provider and any subscriptions of your new address",
          "Arrange childcare or pet care for moving day",
        ],
      },
      {
        type: "checklist",
        title: "1 Week Before Your Move",
        items: [
          "Pack most rooms, leaving out only daily essentials",
          "Dismantle large furniture that can be packed flat",
          "Defrost and clean the fridge and freezer (24 hours before move)",
          "Prepare an essentials bag: phone chargers, toiletries, a change of clothes, important documents",
          "Confirm your moving date and arrival time with your mover",
          "Confirm building permit and service lift bookings",
          "Notify your new building management of your move-in date",
        ],
      },
      { type: "h2", text: "Moving Day" },
      {
        type: "checklist",
        title: "Moving Day Morning",
        items: [
          "Strip beds and pack bedding",
          "Disconnect and pack all electronics",
          "Ensure all boxes are sealed and labelled",
          "Have keys and building access cards ready",
          "Protect the service lift with provided blankets or padding",
          "Do a final check of all cupboards and storage areas",
        ],
      },
      {
        type: "checklist",
        title: "During the Move",
        items: [
          "Stay available to answer the moving team's questions",
          "Direct movers to place boxes in the correct rooms at the new property",
          "Check all fragile items as they are unloaded",
          "Do not leave valuables on the moving truck — keep them with you",
        ],
      },
      {
        type: "checklist",
        title: "End of Moving Day",
        items: [
          "Do a full walkthrough of the old apartment before handing over keys",
          "Check every room, cupboard, bathroom, balcony and storage area",
          "Take timestamped photos of the condition of the old property",
          "Hand keys and access cards to the landlord or building management",
          "Confirm DEWA final reading has been requested",
        ],
      },
      { type: "h2", text: "After Your Move" },
      {
        type: "checklist",
        title: "First Week After Moving",
        items: [
          "Activate DEWA at new property (via DEWA app — usually same day)",
          "Set up internet at new property (allow 5–10 business days)",
          "Register with new building management",
          "Update your Emirates ID address (via ICA smart services app)",
          "Update your driving licence address if required",
          "Register your new tenancy contract with Ejari",
          "Update your bank account address",
          "Settle children into their new school arrangements",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Dubai-specific tip: DEWA transfer timing",
        text: "You can request a DEWA final reading at your old property and activate a new account at the new property on the same day via the DEWA app. Try to coordinate so there is no overlap of billing between the two accounts.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 3 ───────────────────────────────────────────────────────────────
  {
    slug: "villa-moving-checklist",
    title: "Villa Moving Checklist Dubai",
    excerpt:
      "A complete villa moving checklist for Dubai residents — covering packing, garden items, furniture dismantling and the full moving day process.",
    category: "checklists",
    readingTime: 9,
    publishedDate: "2026-01-22",
    relatedService: "/services/villa-moving",
    seo: {
      title: "Villa Moving Checklist Dubai | Complete Guide | WeMoveStuff",
      description:
        "Complete villa moving checklist for Dubai. Garden furniture, large rooms, gated community access and what to do before, during and after the move.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving a villa in Dubai is a significantly larger undertaking than moving an apartment. More rooms, garden furniture, larger wardrobes, gated community access requirements and greater volumes all need careful planning. This checklist keeps everything on track.",
      },
      {
        type: "checklist",
        title: "4 Weeks Before Your Villa Move",
        items: [
          "Book a reputable moving company with villa experience — confirm they have enough crew and truck capacity",
          "Serve notice to your landlord in writing (villas typically require 90 days notice)",
          "Contact your gated community or HOA about move-out procedures — many require advance notice",
          "Begin a room-by-room declutter: storage rooms, garages and lofts first",
          "Decide what to do with garden furniture (take it, sell it or leave it)",
          "Book packing services if you don't plan to pack yourself",
          "Arrange storage if there is a gap between move-out and move-in dates",
        ],
      },
      { type: "h2", text: "Garden Furniture and Outdoor Items" },
      {
        type: "paragraph",
        text: "Garden furniture often gets overlooked until the last minute. Decide early what you are taking, as large outdoor furniture may require a separate vehicle or special wrapping.",
      },
      {
        type: "checklist",
        title: "Outdoor Items to Plan For",
        items: [
          "Garden table and chairs — dismantle or wrap for transport",
          "BBQ grills — empty of gas, clean thoroughly before moving",
          "Parasols and shade sails — dismantle and pack flat",
          "Plant pots — plants can be transported but may need special handling in Dubai heat",
          "Children's outdoor play equipment — swing sets may need full dismantling",
          "Outdoor lighting and extension cables",
          "Storage sheds (check if fixtures, not fittings, per your tenancy agreement)",
        ],
      },
      {
        type: "checklist",
        title: "Large Furniture Dismantling Checklist",
        items: [
          "Master bedroom wardrobe (built-in wardrobes stay; freestanding ones move)",
          "All bed frames — king and super-king need full dismantling",
          "Large dining tables (glass tops packaged separately)",
          "Study and home office desks — especially L-shaped configurations",
          "Gym equipment (treadmills, weight racks)",
          "Large display units or wall units in living room",
          "Children's cabin beds or bunk beds",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Built-in vs freestanding",
        text: "In Dubai villas, many wardrobes and shelving units are fixtures provided by the landlord. Check your tenancy agreement — you must leave fixtures in place. Only freestanding furniture moves with you.",
      },
      {
        type: "checklist",
        title: "Gated Community Access Arrangements",
        items: [
          "Contact community management at least 2 weeks before to arrange a moving day access pass",
          "Some communities (Arabian Ranches, The Springs, Damac Hills) require a deposit for gate access during moves",
          "Get written confirmation of your move-out appointment",
          "Confirm whether the community has restrictions on move times (some restrict to weekday mornings)",
          "Ensure the moving truck's dimensions are within the community's access restrictions",
        ],
      },
      { type: "h2", text: "Moving Day: Villa" },
      {
        type: "checklist",
        title: "Moving Day Villa Checklist",
        items: [
          "Crew arrives — brief them on which rooms are packing first",
          "Protect hard flooring with cardboard or blankets in high-traffic areas",
          "Remove pictures and mirrors from walls and pack them separately",
          "Oversee loading: heaviest items first, fragile items last and on top",
          "Check all rooms, loft, garage, garden store and utility areas before departure",
          "Take meter readings and timestamped photos of all rooms",
          "Handover keys, remote controls and access cards to landlord/agent",
        ],
      },
      { type: "h2", text: "After Your Villa Move" },
      {
        type: "checklist",
        title: "Settling Into Your New Villa",
        items: [
          "Check all rooms and confirm no damage was caused in transit",
          "Activate DEWA for the new property before or on move day",
          "Register with gated community management for access passes and parking permits",
          "Register children for school if changing community",
          "Update Emirates ID address",
          "Explore the community — locate the nearest supermarket, pharmacy and community pool",
          "Check garden/outdoor irrigation systems and pool equipment are functioning",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 4 ───────────────────────────────────────────────────────────────
  {
    slug: "office-relocation-checklist",
    title: "Office Relocation Checklist Dubai",
    excerpt:
      "A complete office relocation checklist for Dubai businesses — IT, staff, logistics and the day of the move.",
    category: "checklists",
    readingTime: 10,
    publishedDate: "2026-02-01",
    relatedService: "/services/commercial-moving",
    seo: {
      title: "Office Relocation Checklist Dubai | Business Move Guide | WeMoveStuff",
      description:
        "Complete office relocation checklist for Dubai businesses — IT equipment, staff communication, logistics and moving day.",
    },
    content: [
      {
        type: "paragraph",
        text: "An office move in Dubai is a complex logistical project with compliance implications — trade licence updates, client notifications, IT migration and staff communication all need careful co-ordination. This checklist is designed to help you run the move without disrupting business operations.",
      },
      {
        type: "checklist",
        title: "8 Weeks Before: Business Planning",
        items: [
          "Appoint an internal move coordinator",
          "Finalise new office lease and confirm move-in date with the building",
          "Notify your IT team to begin planning the server and network migration",
          "Assess whether current furniture moves with you or new furniture is needed",
          "Get quotes from at least two commercial moving companies",
          "Confirm the new office's freight lift access and loading bay",
          "Review your current lease notice period and comply with it in writing",
          "Check new building permit requirements for move-in",
        ],
      },
      { type: "h2", text: "Staff Communication Plan" },
      {
        type: "ol",
        items: [
          "Announce the move to all staff at least 6 weeks in advance",
          "Share the new office address, parking information and public transport options",
          "Assign department move coordinators to manage desk and equipment packing",
          "Confirm moving day schedule: when each department will vacate their current space",
          "Arrange for staff to pack personal items in the week before the move",
          "Confirm remote working arrangements for moving day if the new office won't be operational immediately",
        ],
      },
      {
        type: "checklist",
        title: "IT Equipment Checklist",
        items: [
          "Backup all servers and critical data before the move",
          "Photograph all cable setups and server rack configurations before disconnection",
          "Label all cables, network switches and hardware clearly",
          "Confirm internet connectivity at new office is active before move day",
          "Pack all IT equipment in original packaging where possible, or in padded boxes",
          "Arrange for IT team to be on-site at the new office to reconnect and test systems",
          "Update your IP addresses and DNS records if applicable",
          "Test all VOIP and telephone systems at new premises before staff arrive",
        ],
      },
      {
        type: "checklist",
        title: "Client and Supplier Notifications",
        items: [
          "Update your company address on your website",
          "Send email notification to all active clients 2 weeks before the move",
          "Update Google Business Profile address",
          "Notify all suppliers, banks and service providers in writing",
          "Update your letterheads, email signatures and business cards",
          "Notify Empost or courier services of the new delivery address",
        ],
      },
      { type: "h2", text: "Trade Licence Address Update (DED / Free Zone)" },
      {
        type: "paragraph",
        text: "In Dubai, your business address is a registered part of your trade licence. You must update it with the relevant authority after the move.",
      },
      {
        type: "ul",
        items: [
          "DED-licensed businesses: Apply to update the registered address via the DED Trader platform or a registered typing centre",
          "Free zone businesses: Contact your free zone authority (DIFC, DMCC, DAFZA etc.) for their specific process — timelines and fees vary",
          "Ensure your new lease is in the name of the company for address update purposes",
          "Update your Ejari (if applicable) for the new commercial premises",
          "Allow 5–15 working days for trade licence address updates",
        ],
      },
      { type: "h2", text: "Moving Day: Office" },
      {
        type: "checklist",
        title: "Moving Day Checklist",
        items: [
          "Confirm moving team arrival time and brief the team lead on the floor plan of the new office",
          "Ensure IT equipment is the last to be loaded and first to be set up",
          "Label all furniture with its destination desk or room in the new office",
          "Have a manager present at the old office throughout the move",
          "Have a manager present at the new office to direct placement of furniture and equipment",
          "Confirm all meeting rooms, storage areas and kitchens are cleared at old office",
          "Take meter readings and photo evidence at the old premises",
          "Return all keys and access cards to the old building management",
        ],
      },
      {
        type: "checklist",
        title: "First Day in the New Office",
        items: [
          "Confirm all workstations are set up and internet is active",
          "Test all phones and VOIP lines",
          "Orient staff with the building: fire exits, toilets, kitchen, parking",
          "Register all staff with new building management for access passes",
          "Confirm mail redirection is active",
          "Celebrate — office moves are hard work and the team deserves acknowledgement",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 5 ───────────────────────────────────────────────────────────────
  {
    slug: "packing-guide",
    title: "Packing Guide: How to Pack For a Move in Dubai",
    excerpt:
      "A complete guide to packing your home for a move in Dubai — from choosing the right materials to packing fragile items and labelling correctly.",
    category: "packing",
    readingTime: 9,
    publishedDate: "2026-02-05",
    relatedService: "/services/packing-services",
    seo: {
      title: "Packing Guide Dubai | How to Pack For a Move | WeMoveStuff",
      description:
        "Complete Dubai packing guide — materials, how to pack a kitchen, bedroom, fragile items and the right labelling system.",
    },
    content: [
      {
        type: "paragraph",
        text: "Packing is the most time-consuming part of any move, and the part where most damage happens. Done well, it protects your belongings and makes unpacking at your new home much faster. This guide covers everything you need to know.",
      },
      { type: "h2", text: "Packing Materials You Will Need" },
      {
        type: "ul",
        items: [
          "Double-walled cardboard boxes in several sizes (small, medium, large)",
          "Packing tape and dispenser",
          "Bubble wrap for fragile items",
          "Packing paper (unprinted newsprint) for wrapping",
          "Foam packing peanuts for filling voids in boxes",
          "Wardrobe boxes (tall boxes with a hanging rail for clothes)",
          "Stretch wrap for protecting furniture",
          "Marker pens for labelling",
          "Colour-coded stickers or tape (one colour per room)",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Where to get packing materials in Dubai",
        text: "Boxes are available from supermarkets, moving companies (WeMoveStuff can supply them) and online via Noon or Amazon.ae. Avoid using boxes that have held food — they attract insects during Dubai's humid summers.",
      },
      { type: "h2", text: "The Right Packing Order" },
      {
        type: "paragraph",
        text: "Pack in reverse order of priority. Items you use least go into boxes first. Items you need daily come last.",
      },
      {
        type: "ol",
        items: [
          "Books, decorative items, off-season clothes",
          "Guest room items",
          "Garage, storage room, loft",
          "Living room décor and entertainment equipment",
          "Bedroom (leave bedding until moving day morning)",
          "Kitchen (leave essentials until moving day morning)",
        ],
      },
      { type: "h2", text: "How to Pack a Kitchen" },
      {
        type: "paragraph",
        text: "Kitchens take the most time to pack. Start a week before moving day.",
      },
      {
        type: "ul",
        items: [
          "Wrap plates individually in packing paper and stack them on their edge (not flat) in boxes",
          "Wrap glasses in bubble wrap individually and pack upright",
          "Nest pots and pans without packing material — just wrap lids separately",
          "Pack sharp knives in a bundle wrapped in newspaper, taped securely",
          "Pack spices in a sealed bag inside a box — they leak in Dubai heat",
          "Use small boxes for kitchen items — full-size boxes of crockery are too heavy to carry safely",
          "Label all kitchen boxes as 'FRAGILE — KITCHEN'",
        ],
      },
      { type: "h2", text: "How to Pack a Bedroom" },
      {
        type: "ul",
        items: [
          "Use wardrobe boxes for hanging clothes — saves folding and reduces creasing",
          "Pack folded clothes in suitcases (you're moving them anyway)",
          "Wrap mirrors and pictures in packing paper, then bubble wrap; stand upright in boxes",
          "Bedding: pack into bin bags or bedding bags — soft items can fill voids in boxes",
          "Pack jewellery and valuables in a bag you carry with you, not on the truck",
        ],
      },
      { type: "h2", text: "How to Pack Fragile Items" },
      {
        type: "ol",
        items: [
          "Wrap each item individually in at least one layer of packing paper",
          "Add bubble wrap around items at high risk of chipping or cracking",
          "Fill all empty space in boxes with packing paper or foam peanuts",
          "Never overfill a box — it will burst",
          "Mark all fragile boxes on multiple sides with 'FRAGILE' and arrows indicating 'THIS SIDE UP'",
          "Pack fragile boxes together and tell your moving team which ones to handle with extra care",
        ],
      },
      { type: "h2", text: "The Right Labelling System" },
      {
        type: "paragraph",
        text: "Good labelling speeds up the unpacking process dramatically. A box labelled 'Kitchen — Everyday crockery' is infinitely more useful than 'Kitchen'.",
      },
      {
        type: "ul",
        items: [
          "Use one colour of tape or sticker per room (e.g. blue for kitchen, yellow for master bedroom)",
          "Write the room name and a brief content description on at least two sides of every box",
          "Add 'FRAGILE', 'THIS SIDE UP' or 'OPEN FIRST' where appropriate",
          "Number your boxes and keep a simple inventory list for peace of mind",
        ],
      },
      { type: "h2", text: "What NOT to Pack Yourself" },
      {
        type: "ul",
        items: [
          "Passports, Emirates IDs, tenancy contracts and important documents — carry these with you",
          "Laptops, tablets and phones — keep with you",
          "Medications — in your bag, not on the truck",
          "Cash and jewellery",
          "Flammable or hazardous materials — paint, cleaning chemicals, aerosols",
        ],
      },
      { type: "h2", text: "Professional Packing Services" },
      {
        type: "paragraph",
        text: "If you don't want to pack yourself, WeMoveStuff offers full professional packing services. Our team handles everything — from wrapping breakables to dismantling furniture — so you can focus on the rest of your move.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 6 ───────────────────────────────────────────────────────────────
  {
    slug: "moving-day-guide",
    title: "Moving Day Guide: How to Have a Stress-Free Moving Day",
    excerpt:
      "What to do on moving day in Dubai — how to prepare, work with your team and ensure nothing is left behind.",
    category: "moving",
    readingTime: 8,
    publishedDate: "2026-02-10",
    seo: {
      title: "Moving Day Guide Dubai | What to Do on Moving Day | WeMoveStuff",
      description:
        "Complete moving day guide for Dubai residents — night before prep, morning tasks, how to work with movers and final walkthrough.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving day is the culmination of weeks of planning — and it goes much more smoothly when you know what to expect and have prepared well the night before. Here's your complete moving day playbook.",
      },
      { type: "h2", text: "The Night Before: What to Prepare" },
      {
        type: "checklist",
        title: "Night Before Checklist",
        items: [
          "Defrost and clean the fridge and freezer (ideally started 24 hours before)",
          "Pack your 'day-of' essentials bag: phone charger, change of clothes, toiletries, important documents, children's items",
          "Ensure all boxes are sealed, taped and labelled",
          "Lay out your keys, building access cards and service lift access in one place",
          "Confirm arrival time with your moving company",
          "Eat a proper meal and get an early night — it will be a long day",
        ],
      },
      { type: "h2", text: "Morning of Moving Day" },
      {
        type: "checklist",
        title: "Morning Tasks",
        items: [
          "Strip beds and pack bedding into bags",
          "Disconnect all electronics (TV, sound system, gaming consoles)",
          "Take apart any remaining furniture that hasn't been dismantled",
          "Do a final sweep of all cupboards, drawers and storage",
          "Check the balcony, garden, garage and roof terrace",
          "Clear the hallway and access routes so the team can move freely",
          "Put children and pets in a safe, separate room or arrange care elsewhere",
        ],
      },
      { type: "h2", text: "Access Preparation" },
      {
        type: "paragraph",
        text: "Good access preparation can save hours on moving day. The more smoothly the team can move between your property and the truck, the faster and cheaper the job.",
      },
      {
        type: "ul",
        items: [
          "Book the service lift in advance and confirm your slot on the morning",
          "Alert the building security/reception that the movers are arriving",
          "Ensure the parking area or loading bay is clear for the moving truck",
          "Protect high-traffic areas: lay down cardboard on hard floors to prevent scratches",
          "Remove pictures from walls in corridors and hallways",
        ],
      },
      { type: "h2", text: "How to Work With Your Moving Team" },
      {
        type: "paragraph",
        text: "Professional movers work best when they have clear direction and minimal obstacles. Here's how to get the best from your team.",
      },
      {
        type: "ul",
        items: [
          "Brief the team lead on priorities and any items that need special care",
          "Point out fragile boxes and any items that must not be stacked on",
          "Share the floor plan or room layout of the new property if you have one",
          "Stay available but don't micromanage — trust the team to do their job",
          "Have water and refreshments available — moving is hot, physical work in Dubai",
          "Keep communication clear: if something isn't where you want it, say so on the day",
        ],
      },
      { type: "h2", text: "Final Walkthrough at Old Property" },
      {
        type: "callout",
        variant: "warning",
        title: "Do not leave until you have done this",
        text: "A thorough final walkthrough before handing over keys is your only chance to retrieve forgotten items and document the property condition. Take your time.",
      },
      {
        type: "checklist",
        title: "Final Walkthrough Checklist",
        items: [
          "Every room: open all cupboards and drawers",
          "Bathrooms: medicine cabinet, under sinks, bathroom cabinet shelves",
          "Kitchen: fridge, freezer, oven, under sink, all cupboards",
          "Balcony and/or garden: every corner",
          "Utility room and storage areas",
          "Roof terrace, garage, maid's room",
          "Take timestamped photos of every room for your records",
          "Hand over keys, access cards, parking remotes and post box keys",
        ],
      },
      { type: "h2", text: "Arrival at New Property" },
      {
        type: "ul",
        items: [
          "Be at the new property before the truck arrives if possible",
          "Book the service lift and confirm your slot with building management",
          "Direct movers to the correct rooms as each load comes in",
          "Check all items for damage as they are brought in",
          "Set up your bed and the kitchen first — you'll need both on your first night",
        ],
      },
      { type: "h2", text: "End of Day Checks" },
      {
        type: "checklist",
        title: "End of Moving Day",
        items: [
          "Confirm DEWA is active at the new property",
          "Test that water, air conditioning and electricity are working",
          "Check that all furniture assembled correctly and securely",
          "Sign off on the move completion with your mover and pay the balance",
          "Order food — you've earned it",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 7 ───────────────────────────────────────────────────────────────
  {
    slug: "furniture-assembly-guide",
    title: "Furniture Assembly Guide for Dubai Moves",
    excerpt:
      "How to plan furniture dismantling and reassembly for your Dubai move — what needs to come apart and how professionals handle it.",
    category: "setup",
    readingTime: 7,
    publishedDate: "2026-02-15",
    relatedService: "/services/furniture-assembly",
    seo: {
      title: "Furniture Assembly Guide Dubai | Dismantling & Reassembly | WeMoveStuff",
      description:
        "Furniture assembly guide for Dubai moves — what to dismantle, how wardrobes and beds are handled, and when to use professionals.",
    },
    content: [
      {
        type: "paragraph",
        text: "Most furniture in Dubai homes cannot be moved whole — it was assembled in place and must be dismantled to get through doors, around corners and into lifts. Getting this right avoids damage and saves time.",
      },
      { type: "h2", text: "Why Furniture Dismantling Matters" },
      {
        type: "paragraph",
        text: "Dubai apartments have standard door widths that mean most large wardrobes, beds and dining tables cannot be moved in one piece. Attempting to force them through causes damage to the furniture and to door frames, walls and lifts. Professional dismantling is the right approach.",
      },
      { type: "h2", text: "What Always Needs Dismantling" },
      {
        type: "ul",
        items: [
          "Full-height wardrobes — almost universally too tall for standard door heights",
          "King and super-king bed frames — too wide for doors and service lifts",
          "Large dining tables — especially extendable or glass-topped tables",
          "Large desks — especially L-shaped or corner desks",
          "Display cabinets and bookcases taller than 180cm",
          "Gym equipment — treadmills, weight benches, rowing machines",
          "Children's bunk beds and cabin beds",
        ],
      },
      { type: "h2", text: "What Can Usually Move Whole" },
      {
        type: "ul",
        items: [
          "Sofas (though very large L-shaped sofas may need cushions removed)",
          "Coffee tables and side tables",
          "Small to medium bookcases",
          "TV units and sideboards (if they fit through doorways upright)",
          "Dining chairs",
          "Bedside tables",
        ],
      },
      { type: "h2", text: "Wardrobe Dismantling: Step by Step" },
      {
        type: "ol",
        items: [
          "Empty the wardrobe completely — remove all clothes, shelves and drawers",
          "Remove all doors and set aside (wrap hinges to prevent scratching)",
          "Remove internal shelves and drawer units",
          "Identify whether the main carcass separates — most flat-pack wardrobes do, most built-ins do not",
          "Unscrew the top panel first, then the side panels",
          "Label all screws and fittings — use a labelled zip-lock bag per piece of furniture",
          "Take a photo of the wardrobe before dismantling so reassembly is easier",
        ],
      },
      { type: "h2", text: "Bed Frame Guide" },
      {
        type: "ol",
        items: [
          "Remove mattress and pack upright wrapped in stretch film",
          "Remove bed slats",
          "Separate the headboard (usually bolts directly to the side rails)",
          "Unscrew the side rails from the footboard",
          "Label all bolts and keep with the relevant piece",
        ],
      },
      { type: "h2", text: "Keeping Hardware Organised" },
      {
        type: "callout",
        variant: "tip",
        title: "The zip-lock bag method",
        text: "For every piece of furniture you dismantle, put all its screws, bolts and fittings into a clearly labelled zip-lock bag. Tape the bag directly to one of the furniture panels. This is the single biggest thing you can do to make reassembly smooth.",
      },
      { type: "h2", text: "Reassembly at the New Property" },
      {
        type: "paragraph",
        text: "Reassembly is typically done on the same day, once all items are in the new property. Make sure to tell your moving team which rooms furniture is going into before they start reassembling — it is much harder to move a fully assembled wardrobe once it is in the wrong room.",
      },
      { type: "h2", text: "Tools You Will Need" },
      {
        type: "ul",
        items: [
          "Phillips and flat-head screwdrivers",
          "Allen keys (hex keys) in multiple sizes",
          "Power drill with screwdriver bits (speeds up reassembly significantly)",
          "Rubber mallet (for gently tapping dowel joints)",
          "Spirit level",
        ],
      },
      { type: "h2", text: "Professional vs DIY Assembly" },
      {
        type: "paragraph",
        text: "WeMoveStuff includes basic furniture dismantling and reassembly as part of every move. If you have complex furniture — modular wardrobes, large IKEA systems, bespoke joinery — our dedicated furniture assembly team can handle it as a standalone service.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 8 ───────────────────────────────────────────────────────────────
  {
    slug: "tv-installation-guide",
    title: "TV Installation Guide: Moving and Reinstalling Your TV",
    excerpt:
      "How to safely remove, transport and reinstall a wall-mounted TV during a move — wall types, brackets and professional installation in Dubai.",
    category: "setup",
    readingTime: 6,
    publishedDate: "2026-02-18",
    relatedService: "/services/tv-installation",
    seo: {
      title: "TV Installation Guide Dubai | Moving Wall-Mounted TVs | WeMoveStuff",
      description:
        "How to move and reinstall a wall-mounted TV in Dubai — wall types, safe removal, transport and professional installation.",
    },
    content: [
      {
        type: "paragraph",
        text: "Wall-mounted TVs are one of the trickiest items in a Dubai move. The dismounting process requires the right tools and knowledge of wall types, and reinstallation at the new property depends on what your walls are made of — something that varies significantly across Dubai's building stock.",
      },
      { type: "h2", text: "Why Wall-Mounted TVs Are a Moving Challenge" },
      {
        type: "ul",
        items: [
          "Removing a TV from the wall requires lifting and supporting the TV while unbolting the bracket",
          "Modern large TVs (65 inches+) are awkward to carry — two people are always needed",
          "The original box is the safest way to transport a TV, but most people no longer have it",
          "Flat screens are fragile — screen damage in transit is common without proper packaging",
          "Reinstallation depends on the wall type at the new property",
        ],
      },
      { type: "h2", text: "How to Safely Dismount Your TV" },
      {
        type: "ol",
        items: [
          "Unplug all cables and photograph how they were connected before removing",
          "Have one person support the TV weight while the second person unbolts it from the wall plate",
          "Most brackets have a release mechanism — slide the TV upward to unhook from the wall mount",
          "Remove the wall plate (the part that stays on the wall) — fill the holes if required by your lease",
          "Place the TV face-down on a soft surface to remove the bracket arms from the back of the TV",
        ],
      },
      { type: "h2", text: "Packaging Your TV for Transport" },
      {
        type: "ul",
        items: [
          "If you have the original box and foam inserts, use them",
          "Without original packaging: wrap the screen in a blanket, then stretch film to hold it in place",
          "TV transit bags are available from electronics shops in Dubai as an alternative",
          "Always transport a TV standing upright — never lay it flat on the screen",
          "If transporting multiple TVs, keep them separated so they cannot knock against each other",
        ],
      },
      { type: "h2", text: "Wall Types in Dubai" },
      {
        type: "paragraph",
        text: "Dubai properties have two main wall types, and they require completely different approaches for TV mounting.",
      },
      {
        type: "ul",
        items: [
          "Concrete walls — found in most towers and apartments. Require a hammer drill and masonry anchors (rawl bolts). Very secure. This is the most common wall type in Dubai.",
          "Gypsum / drywalls — increasingly common in newer buildings and villa interiors. Require specialist hollow-wall anchors or mounting into the metal studs behind the board. Standard screws into gypsum alone will not hold a TV bracket.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Test before you drill",
        text: "Always identify your wall type before drilling. A simple knock test (a solid sound = concrete, a hollow sound = gypsum) is a starting point, but if you are not sure, call a professional. Drilling into gypsum with the wrong fixings is a common cause of TV bracket failure.",
      },
      { type: "h2", text: "Bracket Types" },
      {
        type: "ul",
        items: [
          "Fixed bracket — TV sits flat against the wall. Most secure, minimal depth.",
          "Tilting bracket — allows the TV to tilt downward for better viewing angles. Good for high wall positions.",
          "Full-motion (articulating) bracket — TV can swing out, rotate and tilt. Best flexibility, but requires the most robust wall fixing.",
        ],
      },
      { type: "h2", text: "Cable Management at the New Property" },
      {
        type: "ul",
        items: [
          "Use the photos you took before dismounting to reconnect cables correctly",
          "Cable trunking channels are available from Ace Hardware or IKEA and create a clean finish",
          "In-wall cable routing is possible in concrete walls with a channel router — a professional job",
          "Consider a short extension block mounted behind the TV to reduce cable lengths needed",
        ],
      },
      { type: "h2", text: "Professional TV Installation in Dubai" },
      {
        type: "paragraph",
        text: "WeMoveStuff offers professional TV installation as part of our moving and setup services. Our team handles dismounting, safe transport, wall assessment and reinstallation at your new property — including all cable management.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 9 ───────────────────────────────────────────────────────────────
  {
    slug: "moving-with-children-guide",
    title: "Moving With Children in Dubai: A Family Guide",
    excerpt:
      "Practical advice for families moving with children in Dubai — school timing, choosing a family community and keeping kids settled.",
    category: "relocation",
    readingTime: 8,
    publishedDate: "2026-02-20",
    seo: {
      title: "Moving With Children Dubai | Family Relocation Guide | WeMoveStuff",
      description:
        "Guide to moving with children in Dubai — best timing, school registration, involving kids in the process and settling in quickly.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving is stressful for adults — but for children, it means leaving friends, changing schools and adapting to a new home. With the right planning, you can make the transition positive and even exciting for the whole family.",
      },
      { type: "h2", text: "Best Time to Move With Children" },
      {
        type: "paragraph",
        text: "Dubai's school year follows a British-style academic calendar, running from September to June. The least disruptive time to move is during the summer break (June–August), which allows children to start the new school year in their new community.",
      },
      {
        type: "ul",
        items: [
          "Summer (June–August): ideal for school transitions, though this is peak moving season",
          "Winter break (December–January): manageable for mid-year school transfers",
          "Mid-term moves: possible but harder — children miss weeks of school during the transition",
          "Avoid moving during KHDA exam periods (March–May) where possible",
        ],
      },
      { type: "h2", text: "Family-Friendly Dubai Communities" },
      {
        type: "ul",
        items: [
          "Arabian Ranches — large villas, community parks, Ranches Primary and Secondary nearby",
          "Dubai Hills Estate — modern community, parks, cycling tracks, community schools",
          "Damac Hills — family community, parks, Trump International School nearby",
          "The Springs and The Meadows — established communities with community pools and parks",
          "JVC (Jumeirah Village Circle) — more affordable, increasingly family-friendly",
          "Mirdif — popular with families, near Mirdif City Centre and several KHDA schools",
          "Al Barsha — central location, near Al Barsha Park and GEMS schools",
        ],
      },
      { type: "h2", text: "School Registration in Dubai (KHDA)" },
      {
        type: "paragraph",
        text: "Dubai's private schools are regulated by the Knowledge and Human Development Authority (KHDA). Most families choose a British, American or IB curriculum school.",
      },
      {
        type: "ol",
        items: [
          "Research schools near your new community well in advance — waiting lists are common for popular schools",
          "Contact schools directly to confirm availability in the relevant year group",
          "Prepare documents: previous school reports, vaccination records, passport copies, Emirates ID",
          "Complete the KHDA transfer process if moving between KHDA-regulated schools",
          "Private schools typically charge registration fees (AED 500–2,000) before a place is confirmed",
          "Allow 4–6 weeks for the registration process",
        ],
      },
      { type: "h2", text: "Involving Children by Age" },
      {
        type: "ul",
        items: [
          "Under 5: Keep routines consistent. Let them help pack their toy box. Focus on excitement about a new bedroom.",
          "Ages 5–10: Explain the move positively. Let them choose something for their new room. Visit the new community together before moving.",
          "Ages 11–15: Harder age group — losing friends matters more. Acknowledge their feelings, involve them in choosing their bedroom layout, arrange social meetups before the school year starts.",
          "Ages 16+: Discuss the move openly. The change may affect exam years — factor this into school transition timing.",
        ],
      },
      {
        type: "checklist",
        title: "Packing Children's Rooms",
        items: [
          "Involve children in packing their own rooms — it gives them a sense of control",
          "Let them keep a favourite toy or comforter accessible (not in the moving truck)",
          "Label their boxes clearly so their room is set up first at the new home",
          "Pack their bedding separately so the bed can be made immediately on moving day",
        ],
      },
      { type: "h2", text: "Moving Day Childcare" },
      {
        type: "callout",
        variant: "tip",
        title: "Arrange care for younger children on moving day",
        text: "Moving day is not a good environment for young children. Consider arranging for them to spend the day with family, friends or a trusted babysitter. For older children, involving them in helping carry lighter items can work well.",
      },
      { type: "h2", text: "Settling In: Community Activities for Children" },
      {
        type: "ul",
        items: [
          "Most Dubai communities have WhatsApp parent groups — join them through your building or school",
          "Community pools and parks are great for meeting other families",
          "Dubai has excellent children's sports clubs: football, swimming, gymnastics, tennis",
          "Dubai Public Library has children's activities and is free to join",
          "Visit Dubai Frame, Dubai Museum of the Future and other landmarks together — make the city feel like home",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 10 ──────────────────────────────────────────────────────────────
  {
    slug: "moving-with-pets-guide",
    title: "Moving With Pets in Dubai",
    excerpt:
      "How to move with pets in Dubai — transportation, community rules, heat safety and settling animals into a new home.",
    category: "relocation",
    readingTime: 7,
    publishedDate: "2026-02-25",
    seo: {
      title: "Moving With Pets Dubai | Pet Relocation Guide | WeMoveStuff",
      description:
        "Complete guide to moving with pets in Dubai — community pet policies, safe transportation, heat safety and settling in.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving with pets in Dubai requires extra planning around community rules, heat safety and helping animals adjust to a new environment. Here's everything you need to know to move your pet safely and smoothly.",
      },
      { type: "h2", text: "Dubai Pet Rules and Registration" },
      {
        type: "ul",
        items: [
          "Pets must be microchipped and registered with Dubai Municipality",
          "Dogs and cats must have up-to-date vaccinations (rabies is mandatory)",
          "Dogs require an annual licence from Dubai Municipality (fees apply by breed and size)",
          "Certain dog breeds are restricted in Dubai — check the prohibited breeds list with Dubai Municipality before your move",
          "Exotic pets require separate permits",
        ],
      },
      { type: "h2", text: "Community Pet Policies" },
      {
        type: "callout",
        variant: "warning",
        title: "Check before you sign your lease",
        text: "Not all Dubai communities or buildings allow pets. Many apartment buildings prohibit pets in common areas. Some villa communities have restrictions on breed size. Always confirm the pet policy with the landlord and building management before signing a tenancy agreement.",
      },
      {
        type: "ul",
        items: [
          "Pet-friendly communities include: JVC, Dubai Hills Estate, The Springs and Meadows, Arabian Ranches, Al Barsha",
          "Many high-rise apartment towers in Downtown, Business Bay and Dubai Marina prohibit pets or have strict rules",
          "Some communities require pets to be carried (not walked) in common areas and lifts",
          "Confirm whether the building lift size can accommodate your pet in a carrier",
        ],
      },
      { type: "h2", text: "Pre-Move Preparation for Pets" },
      {
        type: "ul",
        items: [
          "Visit your vet before the move — stress can affect animals; ensure they are healthy",
          "Update your pet's microchip details with your new address post-move",
          "Ensure you have enough food and medication to cover the moving period",
          "Bring familiar items: their bed, blanket and favourite toys to the new home immediately",
        ],
      },
      { type: "h2", text: "Moving Day for Pets" },
      {
        type: "ul",
        items: [
          "Keep pets in a quiet, secure room on moving day — the activity and open doors are a risk",
          "Consider asking a friend to look after pets during the actual move",
          "If transporting pets by car, use an approved carrier or harness",
          "Do not put pets in the moving truck",
          "Label their carrier with your phone number in case of accidental separation",
        ],
      },
      { type: "h2", text: "Heat Safety During Transit" },
      {
        type: "callout",
        variant: "warning",
        title: "Never leave pets in a parked car in Dubai",
        text: "A car in Dubai summer sun can reach 70°C+ within minutes. This is fatal for pets. Always ensure your vehicle is air-conditioned when pets are inside, and never leave them unattended in a vehicle.",
      },
      {
        type: "ul",
        items: [
          "Move pets in an air-conditioned vehicle — not in the back of an open truck",
          "Travel with pets in the early morning before temperatures peak",
          "Offer water frequently during transit",
          "In summer (June–September), minimise the time pets spend outside between the buildings",
        ],
      },
      { type: "h2", text: "Setting Up the New Home for Pets First" },
      {
        type: "paragraph",
        text: "Animals settle more quickly when they have a familiar, safe space set up in the new home before the chaos of unpacking begins. Create a pet zone first — their bed, water, food and a few familiar toys — before you start arranging the rest of the home.",
      },
      { type: "h2", text: "Registering with a New Vet" },
      {
        type: "ul",
        items: [
          "Dubai has excellent veterinary practices across all major areas",
          "Register with a local vet within the first week in your new home",
          "Bring your pet's vaccination records and medical history",
          "Update your contact details with Dubai Municipality pet registration",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 11 ──────────────────────────────────────────────────────────────
  {
    slug: "moving-to-dubai-guide",
    title: "Moving to Dubai: A Complete Relocation Guide for New Residents",
    excerpt:
      "Everything new residents need to know about relocating to Dubai — from choosing a community to utilities, visas and settling in.",
    category: "dubai",
    readingTime: 12,
    publishedDate: "2026-03-01",
    seo: {
      title: "Moving to Dubai Guide | Complete Expat Relocation Guide | WeMoveStuff",
      description:
        "Complete guide to moving to Dubai — choosing an area, rental contracts, DEWA, Emirates ID, driving licence and settling in.",
    },
    content: [
      {
        type: "paragraph",
        text: "Relocating to Dubai is an exciting and well-trodden path — over 90% of Dubai's population are expatriates. But the admin, practicalities and local knowledge needed to get settled quickly can feel overwhelming. This guide covers the essentials.",
      },
      { type: "h2", text: "Choosing Where to Live in Dubai" },
      {
        type: "paragraph",
        text: "Dubai is a large city — around 35km from north to south. Where you live significantly affects your commute, lifestyle and community feel.",
      },
      {
        type: "ul",
        items: [
          "Dubai Marina / JLT / JVC: popular with young professionals and families; good amenities",
          "Downtown Dubai / Business Bay / DIFC: central, close to business hubs, higher rents",
          "Palm Jumeirah / Bluewaters: prestigious beachfront living at premium prices",
          "Arabian Ranches / Dubai Hills / Damac Hills: suburban villa communities; popular with families",
          "Al Barsha / Mirdif / Jumeirah: more established areas, diverse housing options",
          "Dubai South / Town Square: newer, more affordable, further from the centre",
        ],
      },
      { type: "h2", text: "Rental Contracts in Dubai" },
      {
        type: "paragraph",
        text: "Dubai's rental market has specific conventions that differ from most Western countries.",
      },
      {
        type: "ul",
        items: [
          "Rents are typically quoted annually — you'll see prices per year, not per month",
          "Payment is usually by post-dated cheques (4, 2 or 1 cheque per year) — fewer cheques often means a lower rent",
          "Ejari is the official online tenancy registration system — your contract must be registered with Ejari",
          "RERA index: Dubai's Real Estate Regulatory Agency publishes a rental index that limits how much landlords can increase your rent",
          "The standard notice period for tenants is 90 days",
        ],
      },
      { type: "h2", text: "DEWA Setup (Electricity and Water)" },
      {
        type: "ol",
        items: [
          "Download the DEWA app or visit dewa.gov.ae",
          "Create an account and apply to move in",
          "Pay the security deposit: AED 2,000 for apartments; AED 4,000 for villas",
          "DEWA activation is usually completed within a few hours on the same day online",
          "Your tenancy contract and Emirates ID are required for the application",
        ],
      },
      { type: "h2", text: "Internet Providers in Dubai" },
      {
        type: "ul",
        items: [
          "Dubai has two main internet providers: e& (formerly Etisalat) and du",
          "Both offer home fibre broadband plans — speeds up to 1Gbps are widely available",
          "Allow 5–10 business days for installation",
          "Some buildings are wired for one provider only — confirm with building management before choosing",
        ],
      },
      { type: "h2", text: "Emirates ID" },
      {
        type: "paragraph",
        text: "Emirates ID is the foundational ID document in the UAE — you need it for almost everything, from opening a bank account to registering a car.",
      },
      {
        type: "ol",
        items: [
          "Your employer will typically sponsor your visa and Emirates ID application",
          "You'll be required to complete a medical fitness test (chest X-ray and blood test) at a registered centre",
          "Biometrics (fingerprints and photo) are taken at an ICA-approved typing centre or ICA service centre",
          "Emirates ID is typically issued within 5–7 working days",
          "Carry your Emirates ID at all times once issued",
        ],
      },
      { type: "h2", text: "Driving Licence in Dubai" },
      {
        type: "ul",
        items: [
          "Licence transfer: residents from many countries (UK, US, Australia, EU etc.) can directly exchange their home licence for a UAE licence with no tests required",
          "Visit a Dubai RTA-approved typing centre with your home country licence, Emirates ID, passport and eye test certificate",
          "Residents from countries not on the exempt list must complete a full driving course at an RTA-approved driving school",
        ],
      },
      { type: "h2", text: "Banking in Dubai" },
      {
        type: "ul",
        items: [
          "Major banks include Emirates NBD, ADCB, Mashreq, FAB and HSBC UAE",
          "You'll typically need your Emirates ID, salary certificate, passport and a proof of address to open an account",
          "Allow 5–10 working days for account opening",
          "Many banks offer international transfers with competitive rates — useful for sending money home",
        ],
      },
      { type: "h2", text: "Healthcare" },
      {
        type: "ul",
        items: [
          "Health insurance is mandatory for all Dubai residents",
          "Most employers provide health insurance as part of the package",
          "Dubai has excellent private healthcare: Cleveland Clinic Abu Dhabi, Mediclinic, American Hospital, Emirates Hospital and many more",
          "Dubai Health Authority (DHA) regulates all healthcare providers",
        ],
      },
      { type: "h2", text: "First Month Priorities" },
      {
        type: "checklist",
        title: "Your First Month in Dubai",
        items: [
          "Complete Emirates ID registration",
          "Activate DEWA and internet",
          "Open a UAE bank account",
          "Exchange driving licence or begin driving school",
          "Register children for school",
          "Get health insurance in place (if not via employer)",
          "Register your vehicle (if bringing a car from another emirate)",
          "Explore your community and find your nearest supermarket, pharmacy and healthcare centre",
        ],
      },
      { type: "h2", text: "Common Mistakes New Residents Make" },
      {
        type: "ul",
        items: [
          "Choosing an area without visiting it first — communities have very different feels",
          "Signing a lease without checking the Ejari and RERA rental index",
          "Not registering Ejari promptly — it's a legal requirement and you need it for utilities",
          "Forgetting that cheque payments are the norm — budget for this upfront",
          "Underestimating the cost of setting up a new home (deposit, utility deposits, furnishings)",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 12 ──────────────────────────────────────────────────────────────
  {
    slug: "leaving-dubai-guide",
    title: "Leaving Dubai: What to Do Before You Move Out",
    excerpt:
      "A complete checklist for leaving Dubai — notice to landlord, utility cancellations, Emirates ID, final bills and what to do with your belongings.",
    category: "dubai",
    readingTime: 9,
    publishedDate: "2026-03-05",
    seo: {
      title: "Leaving Dubai Guide | What to Do Before Moving Out | WeMoveStuff",
      description:
        "Complete leaving Dubai checklist — notice periods, DEWA cancellation, Emirates ID, visa, final bills and moving your belongings.",
    },
    content: [
      {
        type: "paragraph",
        text: "Leaving Dubai involves more admin than most people expect. Start planning at least 3 months in advance, especially if you are shipping belongings internationally or need to manage your visa cancellation carefully.",
      },
      { type: "h2", text: "Notice Period to Your Landlord" },
      {
        type: "ul",
        items: [
          "Standard tenant notice period in Dubai is 90 days — check your tenancy contract",
          "Give notice in writing — email is acceptable but keep a paper trail",
          "If you break the lease early, you may owe penalty rent — check your contract",
          "Agree a move-out date and inspection time with your landlord in advance",
          "Leave the property in the condition it was when you moved in (fair wear and tear excepted)",
        ],
      },
      { type: "h2", text: "Ejari Cancellation" },
      {
        type: "paragraph",
        text: "When leaving a property, the Ejari registration must be cancelled. This is typically done by the landlord or property management company, but confirm this is being handled to avoid any ongoing liability.",
      },
      { type: "h2", text: "DEWA: Final Bill and Account Closure" },
      {
        type: "ol",
        items: [
          "Log in to the DEWA app and submit a 'Move Out' request at least 10 days before your departure",
          "DEWA will send a technician to take a final meter reading",
          "Your final bill will be calculated and your security deposit (AED 2,000 for apartments) refunded, minus any outstanding amount",
          "Ensure there are no outstanding bills before leaving",
          "Refund processing typically takes 14–21 working days",
        ],
      },
      { type: "h2", text: "Internet Cancellation" },
      {
        type: "ul",
        items: [
          "e&: call 800 101 or visit a store — allow 14 days notice",
          "du: call 155 or visit a store — allow 14 days notice",
          "Return any router or equipment provided by the provider to avoid equipment charges",
          "Some providers can transfer service to a new address if you are moving within Dubai",
        ],
      },
      { type: "h2", text: "Bank Accounts" },
      {
        type: "callout",
        variant: "tip",
        title: "Keep one account open after you leave",
        text: "Keep a UAE bank account active for at least 3–6 months after leaving Dubai. Refunds (DEWA deposit, utility deposits, any cooling deposits) take time to process and will be paid to a UAE account. International transfers may cost you more in fees.",
      },
      { type: "h2", text: "Emirates ID and Visa Cancellation" },
      {
        type: "ul",
        items: [
          "Your residence visa and Emirates ID must be cancelled before or on departure",
          "If your visa was sponsored by an employer, HR will handle the cancellation — confirm this",
          "Self-sponsored or investor visa holders apply for cancellation through ICA",
          "Visa cancellation typically takes 2–5 working days",
          "Keep a copy of your visa cancellation certificate — you may need it for final settlement with your employer",
          "You can technically exit the UAE before visa cancellation, but this triggers a grace period",
        ],
      },
      { type: "h2", text: "What to Do With Your Belongings" },
      {
        type: "ul",
        items: [
          "Ship internationally: sea freight is cheapest (6–12 week transit); air freight is fastest but significantly more expensive",
          "Sell locally: Dubai Classifieds, Facebook Marketplace Dubai groups and Dubizzle are active markets — start selling 8 weeks before you leave",
          "Donate: The Sharing Place, Goodwill charity shop and community WhatsApp groups all accept furniture and household items",
          "Storage: if your plans are uncertain, WeMoveStuff can arrange secure storage in Dubai while you decide",
          "Dispose: Emirates Environmental Group accepts electronics; building communal areas often have furniture deposit points",
        ],
      },
      { type: "h2", text: "International Shipping vs Air Freight" },
      {
        type: "ul",
        items: [
          "Sea freight: a 20-foot container costs AED 8,000–20,000+ depending on destination. Transit is 3–8 weeks to Europe; 5–12 weeks to Australia/US",
          "Air freight: fast (3–7 days) but very expensive — typically AED 50–100 per kg. Best for essentials only.",
          "Many movers in Dubai offer packing and international shipping as a combined service",
          "Get quotes from at least 3 shipping companies and confirm what is included (customs clearance, delivery to door etc.)",
        ],
      },
      {
        type: "checklist",
        title: "Exit From UAE Checklist",
        items: [
          "Notice given to landlord in writing",
          "DEWA move-out request submitted",
          "Internet cancellation arranged",
          "All utilities final bills settled",
          "Bank account managed for final refunds",
          "Visa and Emirates ID cancellation in progress",
          "Belongings sold, donated, shipped or in storage",
          "School deregistration completed for children",
          "Pet export documentation arranged if taking pets",
          "Vehicle sold or exported (contact RTA for deregistration)",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 13 ──────────────────────────────────────────────────────────────
  {
    slug: "utility-transfer-guide",
    title: "How to Transfer Utilities When Moving in Dubai",
    excerpt:
      "Step-by-step guide to transferring DEWA, internet and other utilities when moving within Dubai.",
    category: "dubai",
    readingTime: 6,
    publishedDate: "2026-03-10",
    seo: {
      title: "Utility Transfer Guide Dubai | DEWA, Internet & More | WeMoveStuff",
      description:
        "How to transfer DEWA, internet and district cooling when moving in Dubai — step-by-step process and how long each takes.",
    },
    content: [
      {
        type: "paragraph",
        text: "Transferring utilities when moving within Dubai is more straightforward than most people expect — but timing matters. Here's exactly what to do and when.",
      },
      { type: "h2", text: "DEWA (Electricity and Water)" },
      {
        type: "paragraph",
        text: "DEWA is the Dubai Electricity and Water Authority. For a move within Dubai, you need to close the account at your old property and open a new one at the new property.",
      },
      { type: "h3", text: "Moving Out: Closing Your DEWA Account" },
      {
        type: "ol",
        items: [
          "Log into the DEWA app (or dewa.gov.ae) at least 10 days before your move",
          "Go to 'Move Out' and select your property",
          "Select your preferred final reading date (must be a working day)",
          "A DEWA technician will visit to take the final meter reading on your chosen date",
          "Your security deposit (AED 2,000 for apartments / AED 4,000 for villas) will be refunded minus any outstanding balance",
          "Refunds are processed within 14–21 working days to your registered bank account",
        ],
      },
      { type: "h3", text: "Moving In: Activating DEWA at Your New Property" },
      {
        type: "ol",
        items: [
          "Open the DEWA app and select 'Move In'",
          "Enter the new property's premise number (found on the building documents or from your landlord)",
          "Upload your tenancy contract (Ejari-registered) and Emirates ID",
          "Pay the security deposit: AED 2,000 (apartment) or AED 4,000 (villa)",
          "DEWA activation is typically same-day for online applications submitted on working days",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Coordinate move-out and move-in dates carefully",
        text: "You can request your DEWA move-out final reading on the same day as your move-in activation at the new property. Aim to have DEWA active at the new property before you arrive — especially important in summer when air conditioning is essential.",
      },
      { type: "h2", text: "Internet (e& and du)" },
      { type: "h3", text: "e& (formerly Etisalat)" },
      {
        type: "ol",
        items: [
          "Call 800 101 or visit the e& app at least 14 days before your move date",
          "Request a 'service transfer' to your new address",
          "Confirm whether the new building is on the e& network (most are; some buildings are du-only)",
          "An engineer will visit the new property to connect the service — allow 5–10 working days",
        ],
      },
      { type: "h3", text: "du" },
      {
        type: "ol",
        items: [
          "Call 155 or use the du app at least 14 days before your move",
          "Request a service transfer to the new address",
          "du will confirm whether the new building is on their network",
          "Installation typically takes 5–10 working days",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Building exclusivity",
        text: "Some Dubai buildings have an exclusive agreement with one internet provider. If your current provider is not available at your new building, you'll need to cancel your current contract (check your notice period — typically 30 days) and subscribe to the available provider.",
      },
      { type: "h2", text: "District Cooling (Empower and Others)" },
      {
        type: "paragraph",
        text: "Many apartment towers and villa communities in Dubai use district cooling (chilled water for air conditioning) rather than individual chillers. The main provider is Empower.",
      },
      {
        type: "ol",
        items: [
          "Contact Empower (or your building's cooling provider) at least 2 weeks before moving out",
          "Request a final meter reading and account closure",
          "Your cooling deposit will be refunded once all bills are settled",
          "At your new property, check whether district cooling applies — ask building management",
          "If district cooling is provided, open an Empower account for the new property",
        ],
      },
      { type: "h2", text: "Tips to Avoid Service Gaps" },
      {
        type: "ul",
        items: [
          "Start DEWA applications at least 10 days before moving day",
          "Start internet transfer at least 14 days before moving day",
          "If you have school-age children or work from home, prioritise getting internet connected quickly",
          "Ask your new building management whether any utilities are pre-arranged or included in service charges",
          "Keep all DEWA, internet and cooling reference numbers safely — you'll need them for billing queries",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 14 ──────────────────────────────────────────────────────────────
  {
    slug: "building-permit-guide",
    title: "Dubai Building Move Permits: A Resident's Guide",
    excerpt:
      "Everything you need to know about building move permits in Dubai — which buildings need them, how to apply and what happens without one.",
    category: "dubai",
    readingTime: 6,
    publishedDate: "2026-03-15",
    seo: {
      title: "Dubai Building Move Permits Guide | How to Apply | WeMoveStuff",
      description:
        "Guide to building move permits in Dubai — which buildings require them, the Mollak system, how to apply and service lift booking.",
    },
    content: [
      {
        type: "paragraph",
        text: "If you live in a high-rise apartment building in Dubai, there is a good chance your building requires a formal move permit before your moving company can access the building. Here's exactly what that means and how to handle it.",
      },
      { type: "h2", text: "What Is a Building Move Permit?" },
      {
        type: "paragraph",
        text: "A building move permit (sometimes called a move-in or move-out permit) is written authorisation from your building management allowing a moving company to use the service lift and loading bay on a specific date.",
      },
      { type: "h2", text: "Why Do Buildings Require Them?" },
      {
        type: "ul",
        items: [
          "To protect building infrastructure — service lifts, corridors and floors from damage caused by moving",
          "To manage the flow of moving activity (buildings typically allow only one move per floor per day)",
          "Insurance requirements — building management companies require proof of mover insurance",
          "To ensure security by registering who is entering and leaving the building",
        ],
      },
      { type: "h2", text: "Which Buildings Require a Move Permit?" },
      {
        type: "paragraph",
        text: "Most high-rise residential towers in Dubai require move permits. This includes the majority of buildings in:",
      },
      {
        type: "ul",
        items: [
          "Dubai Marina",
          "Downtown Dubai",
          "Business Bay",
          "JVC (Jumeirah Village Circle)",
          "JLT (Jumeirah Lake Towers)",
          "Palm Jumeirah",
          "DIFC",
          "Dubai Creek Harbour",
          "Jumeirah Beach Residence (JBR)",
        ],
      },
      {
        type: "paragraph",
        text: "Low-rise buildings, gated villa communities and some older apartment complexes typically do not require a formal permit — but always confirm with your building management.",
      },
      { type: "h2", text: "The Mollak Platform" },
      {
        type: "paragraph",
        text: "Mollak is Dubai's online owners and tenants management platform, operated under RERA. Many buildings use Mollak to manage move permit applications and service lift bookings.",
      },
      {
        type: "ol",
        items: [
          "Register or log in at mollak.ae",
          "Search for your building and submit a move-in or move-out application",
          "Upload required documents (typically: your tenancy contract, moving company details and mover's insurance certificate)",
          "Pay any applicable permit fee (typically AED 200–500 depending on the building)",
          "Receive approval and confirmation of your service lift booking slot",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Not all buildings use Mollak",
        text: "Many buildings manage permits directly through their building management office or a third-party facilities management company. If Mollak doesn't have your building listed, contact your building management directly.",
      },
      { type: "h2", text: "Typical Timelines — Plan Ahead" },
      {
        type: "ul",
        items: [
          "Apply for move permits at least 5–10 working days before your moving date",
          "Service lift slots are often limited — popular move dates (month-end weekends) can book up fast",
          "Allow extra time for popular buildings during peak moving periods (September, March)",
          "Your building may require the moving company to submit their own insurance documents — WeMoveStuff can provide these",
        ],
      },
      { type: "h2", text: "What Happens Without a Permit?" },
      {
        type: "callout",
        variant: "warning",
        title: "Movers may be turned away without a valid permit",
        text: "If you show up on moving day without a valid permit, building security will typically not allow the moving team to use the service lift or loading bay. This can cause significant delays and in some buildings, the move cannot proceed at all until a permit is in place.",
      },
      { type: "h2", text: "How WeMoveStuff Helps With Permit Coordination" },
      {
        type: "paragraph",
        text: "WeMoveStuff handles the permit coordination process for you as part of every move. We liaise directly with your building management at both properties, submit our insurance documentation and confirm service lift slots — so you don't have to navigate the process yourself.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 15 ──────────────────────────────────────────────────────────────
  {
    slug: "how-to-prepare-for-movers-guide",
    title: "How to Prepare Your Home Before Movers Arrive",
    excerpt:
      "What to do before your moving team arrives — packing, labelling, clearing access routes and protecting floors and walls.",
    category: "moving",
    readingTime: 7,
    publishedDate: "2026-03-20",
    seo: {
      title: "How to Prepare For Movers Dubai | What to Do Before Moving Day | WeMoveStuff",
      description:
        "How to prepare for your movers in Dubai — pre-pack tasks, access route clearing, protecting floors and walls, and what to have ready on the day.",
    },
    content: [
      {
        type: "paragraph",
        text: "The better prepared your home is when the moving team arrives, the faster, cheaper and smoother your move will be. Every hour saved on site is money saved on the job. Here is exactly how to prepare.",
      },
      { type: "h2", text: "Pack Before the Team Arrives" },
      {
        type: "paragraph",
        text: "Unless you have booked a full packing service, all your belongings should be in sealed, labelled boxes before the moving team arrives. Movers can pack — but it takes significantly longer and costs more. Loose items left unpacked on the day slow everything down.",
      },
      {
        type: "ul",
        items: [
          "All boxes sealed and taped shut",
          "All labels written clearly on at least two sides of each box",
          "Fragile boxes marked clearly",
          "Loose items (not in boxes) consolidated into bags or containers",
        ],
      },
      { type: "h2", text: "The Labelling System" },
      {
        type: "ul",
        items: [
          "Label with room name + brief content description ('Master bedroom — winter clothes')",
          "Use one colour per room if possible — colour-coded tape or stickers make it instantly clear",
          "Mark boxes that need to come off the truck first ('OPEN FIRST — Kitchen essentials')",
          "Write 'FRAGILE' and 'THIS SIDE UP' on all relevant boxes",
        ],
      },
      { type: "h2", text: "Disassemble What You Can" },
      {
        type: "paragraph",
        text: "If you are able to safely dismantle furniture before the team arrives, do it. Pre-dismantled furniture takes much less time to move and reduces the risk of damage during dismantling under time pressure.",
      },
      {
        type: "ul",
        items: [
          "Dismantle all bed frames if you can — keep hardware in labelled bags",
          "Remove wardrobe doors and internal shelves if accessible",
          "Disconnect and coil cables on all electronics",
          "Remove legs from sofas if they detach easily",
        ],
      },
      { type: "h2", text: "Clear Hallways and Access Routes" },
      {
        type: "callout",
        variant: "tip",
        title: "The most overlooked preparation step",
        text: "Cluttered hallways slow the entire move down. Movers need to carry large items through your front door, down corridors and into lifts. Every obstacle in the route costs time.",
      },
      {
        type: "ul",
        items: [
          "Clear the main hallway and entrance area completely",
          "Remove shoes, coats and bags from entrance areas",
          "Take down pictures and mirrors from narrow corridor walls",
          "Move any décor or small items from corridor windowsills or ledges",
          "At the new property, ensure corridors and the room where furniture is going are clear before the team arrives",
        ],
      },
      { type: "h2", text: "Protecting Floors and Walls" },
      {
        type: "ul",
        items: [
          "Lay cardboard sheets or furniture blankets on hard floors in high-traffic areas",
          "Pay special attention to the path from the entrance to the service lift",
          "Use corner guards or cardboard on wall corners in narrow hallways",
          "Some buildings require floor and lift protection — WeMoveStuff brings protective blankets for lifts",
        ],
      },
      { type: "h2", text: "Handling Valuables" },
      {
        type: "callout",
        variant: "warning",
        title: "Keep valuables with you",
        text: "Passports, Emirates IDs, jewellery, cash, laptops and important documents should not travel on the moving truck. Pack them in a bag you keep with you throughout the move.",
      },
      { type: "h2", text: "Children and Pets on Moving Day" },
      {
        type: "paragraph",
        text: "Moving day with young children or pets underfoot is difficult and potentially hazardous. Ideally, arrange for children and pets to be with a friend, family member or babysitter on moving day. If this isn't possible, designate one room as a safe zone for them that the movers are not using.",
      },
      { type: "h2", text: "What to Have Ready on the Day" },
      {
        type: "checklist",
        title: "Have These Ready When the Team Arrives",
        items: [
          "Building access cards or fob for current property",
          "Service lift access code or arrangement confirmation",
          "Keys to the new property and new building access",
          "Your phone number given to the team lead",
          "Your floor plan or a rough sketch of the new property's room layout",
          "Payment method for the balance due on completion",
          "Water or refreshments for the team (appreciated, not required)",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 16 ──────────────────────────────────────────────────────────────
  {
    slug: "storage-guide",
    title: "Storage in Dubai: When to Use It and How to Choose",
    excerpt:
      "A guide to storage options in Dubai — when storage makes sense during a move, what to store, and how to choose a provider.",
    category: "moving",
    readingTime: 6,
    publishedDate: "2026-03-25",
    relatedService: "/services/storage-services",
    seo: {
      title: "Storage Guide Dubai | When and How to Use Storage | WeMoveStuff",
      description:
        "Guide to using storage during a Dubai move — when you need it, types of storage, climate considerations and what to look for in a provider.",
    },
    content: [
      {
        type: "paragraph",
        text: "Storage is a practical solution for a growing number of Dubai residents — whether you're between moves, downsizing or temporarily relocating. Here's when it makes sense and how to find the right provider.",
      },
      { type: "h2", text: "When Storage Is Useful During a Move" },
      {
        type: "ul",
        items: [
          "Gap between move-out and move-in dates — you need to leave your current property before your new one is ready",
          "Renovation at the new property — you want to move in after works are complete",
          "Downsizing — you're moving to a smaller space and need time to decide what to keep",
          "Temporary relocation — leaving Dubai for a period but planning to return",
          "Bringing furniture from overseas that arrives ahead of your move-in date",
        ],
      },
      { type: "h2", text: "Types of Storage in Dubai" },
      { type: "h3", text: "Self-Storage Warehouses" },
      {
        type: "paragraph",
        text: "You access your storage unit yourself, typically 24 hours a day. Units range from locker-size to large room-size. Examples include Storage Mart, Safe Keep and Yellow Box Storage.",
      },
      { type: "h3", text: "Managed / Door-to-Door Storage" },
      {
        type: "paragraph",
        text: "A team collects your items, stores them in a managed warehouse and returns them when you need them. You don't need to visit the storage facility yourself. WeMoveStuff offers this as part of our moving service.",
      },
      { type: "h2", text: "Climate Considerations in Dubai" },
      {
        type: "callout",
        variant: "warning",
        title: "Not all storage in Dubai is climate-controlled",
        text: "Dubai temperatures regularly exceed 45°C in summer, and humidity can be very high. Standard storage units without climate control can cause significant damage to electronics, artwork, leather furniture, books and wooden furniture. Always confirm that your chosen storage facility is temperature and humidity controlled.",
      },
      { type: "h2", text: "What to Store (and What Not To)" },
      { type: "h3", text: "Items That Need Climate-Controlled Storage" },
      {
        type: "ul",
        items: [
          "Electronics (TVs, computers, audio equipment)",
          "Artwork and photography",
          "Leather furniture and upholstered sofas",
          "Musical instruments",
          "Important documents and books",
          "Wine and spirits",
        ],
      },
      { type: "h3", text: "Items That Should Not Go Into Storage" },
      {
        type: "ul",
        items: [
          "Food and perishables of any kind",
          "Hazardous materials (paint, cleaning chemicals, gas canisters)",
          "Live plants",
          "Irreplaceable documents — keep these with you",
        ],
      },
      { type: "h2", text: "Packing for Long-Term Storage" },
      {
        type: "ul",
        items: [
          "Use double-walled cardboard boxes for long-term storage",
          "Avoid plastic bags for clothing — they trap moisture",
          "Wrap furniture in breathable fabric covers, not plastic stretch film (which traps moisture)",
          "Dismantle large furniture to save space",
          "Create a detailed inventory of everything in storage — photograph the contents of every box",
          "Label clearly — you'll be grateful 6 months later",
        ],
      },
      { type: "h2", text: "How to Choose a Storage Provider in Dubai" },
      {
        type: "ul",
        items: [
          "Confirm the facility is climate-controlled (temperature and humidity)",
          "Check the security: CCTV, access control, staff presence",
          "Confirm insurance options — many providers offer insurance at an additional cost",
          "Check access hours if you need to retrieve items",
          "Compare pricing: most charge per square foot per month",
          "Ask about minimum rental periods and flexible month-to-month options",
        ],
      },
      { type: "h2", text: "How WeMoveStuff Can Help" },
      {
        type: "paragraph",
        text: "WeMoveStuff can move your belongings directly into storage and then deliver them to your new property when you're ready. We can also arrange secure, climate-controlled storage through our partner facilities. Ask us about combined move-and-store packages.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 17 ──────────────────────────────────────────────────────────────
  {
    slug: "decluttering-guide",
    title: "How to Declutter Before a Move in Dubai",
    excerpt:
      "How to declutter before moving in Dubai — deciding what to keep, what to sell and what to donate to reduce moving costs.",
    category: "moving",
    readingTime: 7,
    publishedDate: "2026-04-01",
    seo: {
      title: "Decluttering Before a Move Dubai | How to Declutter Guide | WeMoveStuff",
      description:
        "How to declutter before your Dubai move — room-by-room approach, where to sell, where to donate and how it reduces your moving costs.",
    },
    content: [
      {
        type: "paragraph",
        text: "Every item you move costs money — in packing materials, space on the truck and time. Moving is the perfect prompt to declutter, and in Dubai there are excellent channels for selling, donating and disposing of items you no longer need.",
      },
      { type: "h2", text: "Why Decluttering Before a Move Saves Money" },
      {
        type: "ul",
        items: [
          "Fewer boxes means less packing materials and time",
          "Less volume can mean a smaller truck — a significant cost saving",
          "Less furniture means faster loading and unloading",
          "Items you sell offset your moving costs",
          "A decluttered home is easier to pack, clean and hand back to the landlord",
        ],
      },
      { type: "h2", text: "How Early to Start" },
      {
        type: "paragraph",
        text: "Start decluttering 6–8 weeks before your moving date. This gives you enough time to list items for sale, wait for buyers and dispose of what doesn't sell — without the pressure of moving day approaching.",
      },
      { type: "h2", text: "The Room-by-Room Approach" },
      {
        type: "paragraph",
        text: "Tackle one room at a time. Start with the rooms that tend to accumulate the most clutter first.",
      },
      {
        type: "ol",
        items: [
          "Storage rooms, utility cupboards and lofts first",
          "Wardrobes and clothing (the average household has far more than they wear)",
          "Kitchen (gadgets, duplicate items, expired pantry items)",
          "Children's rooms (toys, clothes and books accumulate fast)",
          "Living room and study",
          "Bathrooms last — quickly and easy to sort",
        ],
      },
      { type: "h2", text: "The Decision Framework: Keep / Sell / Donate / Dispose" },
      {
        type: "ul",
        items: [
          "Keep: items you use regularly, that fit your new space and that you love",
          "Sell: items in good condition with resale value",
          "Donate: items in good condition that are harder to sell quickly",
          "Dispose: items that are damaged, broken or too worn to donate",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "The one-year rule",
        text: "If you haven't used something in the past year and it doesn't have significant sentimental or financial value, it's a strong candidate for selling, donating or disposing of. Dubai's storage solutions are expensive — don't pay to store things you won't use.",
      },
      { type: "h2", text: "Where to Sell in Dubai" },
      {
        type: "ul",
        items: [
          "Dubizzle — Dubai's largest classifieds platform, particularly good for furniture and electronics",
          "Facebook Marketplace Dubai groups — very active, especially for household items",
          "Dubai Classifieds WhatsApp groups — many communities have active buy/sell groups",
          "Instagram — for higher-value furniture, homeware and fashion",
          "Garage sales are less common in Dubai but not unheard of in villa communities",
        ],
      },
      { type: "h2", text: "Where to Donate in Dubai" },
      {
        type: "ul",
        items: [
          "The Sharing Place (multiple locations) — accepts furniture, clothes, books and household goods",
          "Goodwill charity shop — accepts clothes and household items",
          "Community WhatsApp groups — post free items, usually collected same day",
          "Local mosques often have collection points for clothing and household goods",
          "International Humanitarian City accepts clothing and household donations for redistribution globally",
        ],
      },
      { type: "h2", text: "Bulky Item Disposal in Dubai" },
      {
        type: "ul",
        items: [
          "Emirates Environmental Group (EEG) — free collection of electronics and electrical items",
          "Building communal areas and disposal zones — many buildings have a designated area for large items the building cleaners collect",
          "Dubai Municipality bulk collection — call Dubai Municipality to arrange bulky item collection for large amounts",
        ],
      },
      { type: "h2", text: "Furniture Too Large for the New Property" },
      {
        type: "paragraph",
        text: "If you're moving to a smaller property, identify early which large pieces won't fit. Large sofas, dining tables and bedroom furniture should be listed for sale as soon as you know you won't need them — they take time to sell.",
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 18 ──────────────────────────────────────────────────────────────
  {
    slug: "moving-timeline-guide",
    title: "Moving Timeline: How Far Ahead to Plan Your Dubai Move",
    excerpt:
      "A complete moving timeline for Dubai residents — from 8 weeks before to moving day and the first week in your new home.",
    category: "moving",
    readingTime: 7,
    publishedDate: "2026-04-05",
    seo: {
      title: "Dubai Moving Timeline Guide | How Far Ahead to Plan | WeMoveStuff",
      description:
        "Complete moving timeline for Dubai — when to book movers, service lifts, utilities and what to do each week leading up to your move.",
    },
    content: [
      {
        type: "paragraph",
        text: "Leaving things to the last minute in Dubai is expensive. Movers book up fast at month-end. Building permits take up to 10 working days. DEWA and internet need at least 10 days. Here is your week-by-week plan.",
      },
      {
        type: "checklist",
        title: "8 Weeks Before Moving Day",
        items: [
          "Confirm your moving date with your landlord or new property agent",
          "Start researching and getting quotes from moving companies",
          "Begin decluttering — start selling large furniture you won't need",
          "Notify your landlord of your intention to vacate (if you haven't already)",
          "Research DEWA setup, internet providers and any district cooling at the new property",
        ],
      },
      {
        type: "checklist",
        title: "6 Weeks Before Moving Day",
        items: [
          "Book your chosen moving company and pay deposit",
          "Confirm building permit requirements at both properties",
          "Check service lift availability at both buildings on your preferred date",
          "Continue decluttering and selling items",
          "Order packing materials if packing yourself",
        ],
      },
      {
        type: "checklist",
        title: "4 Weeks Before Moving Day",
        items: [
          "Apply for building move permits at both buildings (allow 5–10 working days)",
          "Book service lift slots at both buildings",
          "Begin packing non-essential items (books, off-season clothes, décor, guest room)",
          "Notify your employer, bank and key accounts of your new address",
          "Submit DEWA move-out request for current property",
          "Apply for DEWA activation at new property",
          "Contact internet provider to arrange transfer or new connection",
        ],
      },
      {
        type: "checklist",
        title: "2 Weeks Before Moving Day",
        items: [
          "Continue packing all rooms except daily essentials",
          "Label all boxes clearly",
          "Confirm your move permit approvals have been received",
          "Defrost and empty freezer (if moving a large fridge-freezer)",
          "Confirm moving date, time and address with your mover",
          "Confirm DEWA will be active at new property before moving day",
          "Arrange childcare and pet care for moving day",
        ],
      },
      {
        type: "checklist",
        title: "1 Week Before Moving Day",
        items: [
          "Pack everything except: bed, daily clothes, essential kitchen items, toiletries",
          "Dismantle furniture you can safely take apart",
          "Clean the fridge and freezer",
          "Prepare your essentials bag (documents, chargers, change of clothes)",
          "Confirm mover arrival time",
          "Confirm service lift booking times at both buildings",
        ],
      },
      {
        type: "checklist",
        title: "2 Days Before Moving Day",
        items: [
          "Strip beds and pack bedding (sleep on camping or air mattress if needed)",
          "Pack remaining kitchen items except the bare minimum",
          "Do a final check of all storage areas: under stairs, loft, garage, balcony",
          "Charge all power banks and devices",
          "Confirm tomorrow's plans with everyone involved",
        ],
      },
      {
        type: "checklist",
        title: "Moving Day",
        items: [
          "Team arrives — brief the lead on priorities",
          "Protect access routes (cardboard on floors, wrap lift)",
          "Be available but out of the team's way",
          "Do the final walkthrough before leaving — check every room and cupboard",
          "Hand over keys and access cards",
          "Arrive at new property to direct unloading",
          "Confirm all items arrived and sign off on the move",
        ],
      },
      {
        type: "checklist",
        title: "Week 1 in New Home",
        items: [
          "Confirm DEWA is active and test utilities",
          "Unpack kitchen and bedrooms first",
          "Register with building management",
          "Update Emirates ID address",
          "Update bank and employer records",
          "Confirm internet installation date",
          "Register children with new school if applicable",
          "Explore the community",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 19 ──────────────────────────────────────────────────────────────
  {
    slug: "moving-budget-guide",
    title: "How to Budget For a Move in Dubai",
    excerpt:
      "A complete guide to budgeting for a move in Dubai — moving company costs, deposits, utility fees and unexpected expenses.",
    category: "moving",
    readingTime: 7,
    publishedDate: "2026-04-10",
    seo: {
      title: "Dubai Moving Budget Guide | What Does a Move Cost? | WeMoveStuff",
      description:
        "How to budget for a Dubai move — moving company fees, security deposits, utility costs, packing materials and unexpected expenses.",
    },
    content: [
      {
        type: "paragraph",
        text: "Most people budget for the moving company and forget everything else. A Dubai move has several other significant costs — deposits, fees and setup expenses — that can add up to thousands of dirhams. Here's the full picture.",
      },
      { type: "h2", text: "Full Moving Budget Breakdown" },
      {
        type: "ul",
        items: [
          "Moving company: AED 700 – 5,000+ depending on property size",
          "Packing materials (if packing yourself): AED 200 – 600",
          "Professional packing service: AED 200 – 600 extra (in addition to move cost)",
          "Furniture assembly service: AED 200 – 500",
          "Professional cleaning of old property: AED 300 – 800",
          "Building move permits (both buildings): AED 400 – 1,000",
          "DEWA security deposit at new property: AED 2,000 (apartment) / AED 4,000 (villa)",
          "Internet setup fee: AED 0 – 200 (sometimes waived)",
          "District cooling deposit (if applicable): AED 1,000 – 3,000",
          "Ejari registration fee for new tenancy: AED 220",
          "New tenancy deposit (typically 5% of annual rent): varies widely",
        ],
      },
      { type: "h2", text: "Moving Company Costs by Property Type" },
      {
        type: "ul",
        items: [
          "Studio: AED 500 – 900",
          "1-bedroom apartment: AED 700 – 1,400",
          "2-bedroom apartment: AED 1,000 – 2,000",
          "3-bedroom apartment: AED 1,500 – 3,000",
          "Villa (3–4 beds): AED 2,000 – 5,000",
          "Large villa or penthouse: AED 4,000 – 8,000+",
        ],
      },
      { type: "h2", text: "The New Property Security Deposit" },
      {
        type: "paragraph",
        text: "Dubai rental deposits are typically 5% of the annual rent. For a property renting at AED 120,000 per year, that is a AED 6,000 deposit payable when signing the tenancy contract. This is in addition to your first cheque payment.",
      },
      { type: "h2", text: "DEWA Deposit" },
      {
        type: "paragraph",
        text: "DEWA requires a security deposit when you open a new account. AED 2,000 for apartments and AED 4,000 for villas. This is refundable when you close the account on moving out, minus any outstanding bills.",
      },
      { type: "h2", text: "How to Create a Simple Moving Budget" },
      {
        type: "ol",
        items: [
          "Get your moving company quote first — this is typically the largest controllable cost",
          "Add fixed fees: DEWA deposit + Ejari + permits",
          "Add your tenancy deposit for the new property",
          "Add packing materials or packing service costs",
          "Add cleaning costs for the old property if you won't do it yourself",
          "Add a 10–15% contingency for unexpected costs",
        ],
      },
      { type: "h2", text: "Where Costs Surprise People Most" },
      {
        type: "callout",
        variant: "warning",
        title: "Month-end surcharges",
        text: "Moving companies in Dubai charge a premium for month-end dates (approximately the 25th of one month to the 5th of the next). If your lease end date falls in this window, budget for 10–20% more on the move cost, or try to negotiate a slightly different date.",
      },
      {
        type: "ul",
        items: [
          "Storage costs if there's a gap between move-out and move-in dates",
          "Cleaning costs for the old property — landlords in Dubai often deduct cleaning from the deposit if the property isn't professionally cleaned",
          "Replacing damaged fixtures or fittings in the old property",
          "Internet setup if your provider isn't available at the new building",
          "School registration fees if moving with children",
        ],
      },
      { type: "h2", text: "Tips to Save Money on Your Dubai Move" },
      {
        type: "ul",
        items: [
          "Move mid-month rather than month-end (saves 10–20% on the moving company)",
          "Declutter before moving — fewer items means a smaller truck",
          "Pack everything yourself if you have the time",
          "Get quotes from at least 3 moving companies",
          "Book at least 2 weeks in advance — last-minute moves cost more",
          "Negotiate with your landlord if you can be slightly flexible on move-out date",
        ],
      },
      { type: "cta" },
    ],
  },

  // ─── Guide 20 ──────────────────────────────────────────────────────────────
  {
    slug: "first-week-in-new-home-guide",
    title: "Your First Week in a New Home in Dubai",
    excerpt:
      "A practical guide to the first week after moving into a new home in Dubai — what to prioritise and how to feel settled quickly.",
    category: "relocation",
    readingTime: 6,
    publishedDate: "2026-04-15",
    seo: {
      title: "First Week in New Home Dubai | Moving In Guide | WeMoveStuff",
      description:
        "What to do in your first week in a new Dubai home — utilities, building registration, admin tasks and community setup.",
    },
    content: [
      {
        type: "paragraph",
        text: "The boxes are in. The movers have left. Now what? The first week in a new home in Dubai has a surprising amount of admin — but if you prioritise correctly, you'll feel settled within days.",
      },
      { type: "h2", text: "Hours 1–24: The Essentials" },
      {
        type: "checklist",
        title: "Your First 24 Hours",
        items: [
          "Check all utilities are working: electricity, water, air conditioning",
          "Test all appliances: fridge, washing machine, oven",
          "Locate the mains electricity switch (fuse board / breaker box) — you'll need this reference",
          "Locate the water stopcock in case of a leak",
          "Document the property condition with timestamped photos of every room",
          "Note any existing damage: scratches, marks, broken fixtures — report to your landlord in writing immediately",
          "Set up your bed — you need to sleep well on night one",
          "Set up the kitchen enough to make meals",
        ],
      },
      { type: "h2", text: "Days 2–3: Unpack the Essentials" },
      {
        type: "ul",
        items: [
          "Unpack kitchen first — being able to cook properly makes everything feel more normal",
          "Unpack all bedrooms and bathrooms",
          "Set up your home office if you work from home",
          "Unpack children's rooms and set up their familiar items to help them settle",
          "Living room and décor can wait — focus on functional rooms first",
        ],
      },
      { type: "h2", text: "Days 4–5: Explore and Connect" },
      {
        type: "ul",
        items: [
          "Walk around your community — find the nearest supermarket, pharmacy and petrol station",
          "If your community has a pool or park, visit it",
          "Confirm your internet installation date — chase the provider if not confirmed",
          "Order anything you're missing for the new home (curtains, lightbulbs, cleaning supplies)",
          "Find a nearby café or restaurant — treating yourself on day 4 is allowed",
        ],
      },
      { type: "h2", text: "Days 6–7: Building and Community Setup" },
      {
        type: "checklist",
        title: "Building Administration",
        items: [
          "Visit building management to register as a new resident",
          "Collect your access cards and parking passes",
          "Register your vehicle with building management if required",
          "Confirm rubbish collection points and recycling facilities",
          "Ask building management about any community rules (quiet hours, pet policies, delivery areas)",
        ],
      },
      { type: "h2", text: "Week 1 Admin: What to Update" },
      {
        type: "checklist",
        title: "Address Updates in Week 1",
        items: [
          "Emirates ID address — via the ICA Smart Services app or website",
          "Bank accounts — update in-app or at the branch",
          "Employer HR records — update your contact details",
          "Vehicle registration address — via RTA",
          "Health insurance provider",
          "Any subscriptions: Amazon, Careem, Deliveroo, Netflix etc.",
          "Register Ejari for your new tenancy contract if not already done",
        ],
      },
      { type: "h2", text: "What Can Wait Until Week 2" },
      {
        type: "ul",
        items: [
          "Hanging pictures and decorating",
          "Getting every room perfectly organised",
          "Non-urgent subscriptions and accounts",
          "Deep cleaning (the new property should already be clean; a thorough clean can happen once you're settled)",
        ],
      },
      { type: "h2", text: "Meeting Neighbours and Connecting With the Community" },
      {
        type: "ul",
        items: [
          "Ask building management or a neighbour if there is a community WhatsApp group — join it",
          "Introduce yourself to immediate neighbours — Dubai communities are generally friendly",
          "Check Dubai Facebook community groups for your area",
          "If you have children, the school community is often the fastest way to meet people",
          "Community pools, parks and gyms are great for meeting residents organically",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Give yourself grace",
        text: "It takes most people 2–4 weeks to feel fully settled after a move in Dubai. Prioritise sleep, routine and the essentials in week one. The full unpacking and perfect home setup can happen gradually over the first month.",
      },
      { type: "cta" },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return GUIDES.filter((g) => g.category === category);
}
