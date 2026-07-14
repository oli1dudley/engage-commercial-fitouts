import type { ContentBlock } from "@/types/blog";

// ─── Type ──────────────────────────────────────────────────────────────────
export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  propertyType: "apartment" | "villa" | "office";
  outcome: string;
  publishedDate: string;
  featuredImage: string;
  tags: string[];
  content: ContentBlock[];
  seo: {
    title: string;
    description: string;
  };
  relatedService: string;
}

// ─── Case Studies ──────────────────────────────────────────────────────────
export const CASE_STUDIES: CaseStudy[] = [

  // ── 1: Downtown Dubai Apartment ────────────────────────────────────────
  {
    slug: "downtown-dubai-apartment-move",
    title: "Downtown Dubai High-Rise Apartment Move: 3-Bedroom in 7 Hours",
    excerpt:
      "An expat family needed to move their entire 3-bedroom apartment from a Downtown Dubai tower to Dubai Marina — including an art collection — with a single service lift window available.",
    location: "Downtown Dubai",
    propertyType: "apartment",
    outcome:
      "Complete 3-bedroom apartment move from Downtown to Dubai Marina completed in 7 hours with zero damage.",
    publishedDate: "2026-04-12",
    featuredImage: "/images/case-studies/downtown-dubai-apartment-move.jpg",
    tags: ["apartment-moving", "downtown-dubai", "high-rise"],
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Downtown Dubai Apartment Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff completed a 3-bedroom apartment move from Downtown Dubai in 7 hours — service lift coordination, packing and full setup.",
    },
    content: [
      {
        type: "paragraph",
        text: "When a British expat family contacted us about their upcoming move from a 32nd-floor apartment in Downtown Dubai to a new property in Dubai Marina, they had one major concern: their building only permitted service lift use between 8am and 3pm — and they were moving on a Friday.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "The family of four had lived in their 3-bedroom apartment in a well-known Downtown tower for three years. They had accumulated a substantial household — fully fitted bedrooms, a large living and dining area, a kitchen equipped with appliances, and a personal art collection including several large canvases and two framed limited-edition prints.",
      },
      {
        type: "paragraph",
        text: "Their lease end date gave them one moving day. The new apartment in Dubai Marina was available from the morning of that same day, so they needed a single-day complete move. Missing the service lift window would mean extending into Saturday and incurring a second day of costs.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "ul",
        items: [
          "Service lift access restricted to 8am–3pm on Fridays — a hard deadline imposed by building management",
          "32nd-floor location with a single service lift shared with other residents",
          "Extensive art collection requiring specialist wrapping and careful transportation",
          "Large sectional sofa and king-size bed frame requiring full dismantling",
          "Receiving building in Dubai Marina also had service lift booking requirements",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Downtown Dubai high-rise logistics",
        text: "Many Downtown towers enforce strict service lift schedules and require move permits applied for 48–72 hours in advance. We handle permit applications on behalf of our clients as part of our pre-move planning process.",
      },
      { type: "h2", text: "Planning Phase" },
      {
        type: "paragraph",
        text: "Seven days before the move, our operations coordinator conducted a site visit at the Downtown apartment. We walked through every room, noted which furniture needed dismantling, assessed the art collection, and confirmed lift dimensions to ensure the sectional sofa components would fit.",
      },
      {
        type: "checklist",
        title: "Pre-move actions completed",
        items: [
          "Move permit applied for with Downtown building management (3 days before move)",
          "Service lift booked: 8am–3pm slot confirmed",
          "Dubai Marina receiving building contacted — service lift booked for 11am–5pm",
          "4-person moving team allocated (2 packers day before, full team on move day)",
          "Specialist art packing materials ordered: corner guards, acid-free paper, picture boxes",
          "Wardrobe dismantling confirmed: 3 sliding wardrobes, 2 standard",
          "Truck size confirmed: 5-tonne vehicle sufficient for single load",
        ],
      },
      { type: "h2", text: "Packing Day (Day Before)" },
      {
        type: "paragraph",
        text: "Two of our team arrived the day before the move to complete the packing. The priority was fragile items, the art collection, and kitchen contents. The family was still using the kitchen until the evening, so we packed systematically around them.",
      },
      {
        type: "ul",
        items: [
          "All artwork individually wrapped in acid-free tissue and secured in picture boxes or custom cardboard frames",
          "Kitchen — all crockery, glassware and small appliances packed using cell-pack boxes",
          "Bedrooms — clothing packed into wardrobe boxes to avoid refolding at destination",
          "Books, ornaments and electronics boxed and labelled by room",
          "Furniture dismantling began end-of-day: wardrobes taken apart, bed frames broken down",
        ],
      },
      { type: "h2", text: "Moving Day" },
      {
        type: "paragraph",
        text: "The full team of four arrived at 7:30am to begin final preparations before the 8am service lift window opened. Our loading sequence was planned the previous evening to maximise efficiency: heaviest furniture out first, followed by bedroom boxes, kitchen boxes, and finally the artwork — loaded last so it would be unloaded first at destination.",
      },
      {
        type: "ol",
        items: [
          "7:30am — Team arrives, elevator protection fitted, trolleys positioned",
          "8:00am — Service lift opens; furniture removal begins with dismantled bed frames and wardrobes",
          "8:45am — Sectional sofa components loaded; large appliances removed",
          "9:30am — Box loads begin; systematic clearance of all rooms",
          "10:15am — Artwork loaded with dedicated padding between pieces",
          "10:45am — Apartment cleared and final check completed",
          "11:00am — Truck departs for Dubai Marina",
          "11:30am — Arrival at Dubai Marina; service lift access confirmed",
          "11:45am — Unloading begins; artwork unloaded first and moved directly to designated wall positions",
          "1:30pm — All furniture and boxes in position",
          "1:30pm–3:00pm — Furniture reassembly: beds, wardrobes, sofa reassembled",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Why loading sequence matters",
        text: "Planning the load order the night before saves 30–45 minutes on moving day. By knowing exactly what goes on the truck first and last, we eliminate the back-and-forth that costs time and increases the risk of damage.",
      },
      { type: "h2", text: "Setup and Final Touches" },
      {
        type: "paragraph",
        text: "With all furniture reassembled by 3pm, the team spent the final hour on setup. Beds were made up, the TV was reinstalled and cable-managed on the wall, and the family indicated where they wanted each piece of artwork placed. We positioned each piece and confirmed placement before leaving.",
      },
      {
        type: "paragraph",
        text: "The family's children had school the following day, so having beds fully assembled and the apartment functional by evening was the single most important outcome for them.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: 7-hour complete move, zero damage",
        text: "The move from Downtown Dubai to Dubai Marina was completed door-to-door in 7 hours. All items arrived without damage, including the entire art collection. The family was fully settled in their new apartment before dinner.",
      },
      {
        type: "paragraph",
        text: "\"We were nervous about the art — some of the pieces are quite valuable and we'd had a bad experience with a previous mover years ago. The WeMoveStuff team took more care than we expected. Everything arrived perfectly, and they even helped us decide where to hang the larger pieces. We'd definitely use them again.\" — Client, Downtown Dubai to Dubai Marina",
      },
      {
        type: "ul",
        items: [
          "Move completed in 7 hours from first lift call to team departure",
          "Zero damage to any items, including fragile artwork",
          "Both service lift windows met without overrun",
          "All furniture reassembled and TV installed on same day",
          "Family settled and operational the same evening",
        ],
      },
    ],
  },

  // ── 2: Business Bay Office Relocation ──────────────────────────────────
  {
    slug: "business-bay-office-relocation",
    title: "Business Bay Office Relocation: 25-Person Office Moved Over a Weekend",
    excerpt:
      "A Dubai digital agency needed to relocate from Business Bay to DIFC without disrupting a single working day. We moved 25 workstations, meeting rooms and a server room across one weekend.",
    location: "Business Bay",
    propertyType: "office",
    outcome:
      "25-person office relocated over a single weekend with operations fully resumed Monday morning.",
    publishedDate: "2026-03-28",
    featuredImage: "/images/case-studies/business-bay-office-relocation.jpg",
    tags: ["commercial-moving", "office-relocation", "business-bay"],
    relatedService: "/services/commercial-moving",
    seo: {
      title: "Business Bay Office Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff relocated a 25-person Business Bay office over one weekend with zero operational downtime.",
    },
    content: [
      {
        type: "paragraph",
        text: "For a growing digital agency, an office move is never just about shifting furniture. Every hour of downtime has a direct cost. When this Business Bay agency signed a lease on a larger DIFC space and set a Friday handover date, they had one requirement: the team needed to be operational in the new office by Monday morning, 8am.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "The agency employed 25 people across creative, account management, development and operations teams. Their Business Bay office occupied a full floor with a central open-plan area, three glass-walled meeting rooms, a server room, and a breakout kitchen. Two years of growth had left them short on desk space, and the new DIFC premises offered 40% more floor area.",
      },
      {
        type: "paragraph",
        text: "The IT infrastructure was the team's primary concern. They ran their own on-premise servers and had a structured cabling setup across the existing space. Their internal IT manager would handle the server migration — our job was everything else.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "ul",
        items: [
          "25 workstations, each with monitors, docking stations, peripherals and cables",
          "Three meeting rooms with presentation screens, conference phones and cable management",
          "60+ chairs, multiple standing desks and large collaborative tables",
          "Breakout furniture, kitchen appliances and storage units",
          "All moves to be completed Friday evening through Sunday without weekday impact",
          "DIFC freight access restrictions — building management required advance scheduling",
          "New office layout needed to be operational for client presentations Monday afternoon",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Commercial move planning starts with the floor plan",
        text: "Before we move a single chair, we work with the client to produce a labelled floor plan of the new space. Every desk, meeting room and storage unit gets a position number. On moving day, each item is delivered directly to its position — not stacked in a corridor.",
      },
      { type: "h2", text: "Planning and Preparation" },
      {
        type: "paragraph",
        text: "Our commercial team met with the agency's operations manager two weeks before the move. We toured both the existing Business Bay office and the new DIFC space, measuring desk groupings, corridor widths and lift dimensions at both buildings.",
      },
      {
        type: "checklist",
        title: "Pre-move planning completed",
        items: [
          "Detailed floor plan produced for new DIFC space — all 25 desks numbered and positioned",
          "Desk stickers printed: each workstation labelled with its destination position number",
          "Cable labels distributed to the IT manager for pre-labelling all cabling",
          "DIFC freight lift booked: Friday 8pm–11pm, Saturday 7am–6pm, Sunday 7am–2pm",
          "Business Bay service lift booked: Friday 6pm–11pm",
          "6-person moving team confirmed for weekend",
          "Specialist monitor boxes sourced for 25 screens",
          "Meeting room AV equipment inventoried and boxed separately",
        ],
      },
      {
        type: "paragraph",
        text: "The agency's staff were briefed to pack their personal desk items into provided boxes on Thursday afternoon. Each box was labelled with the staff member's desk number so it could be delivered directly to the correct position in the new office.",
      },
      { type: "h2", text: "Friday Evening: The Start" },
      {
        type: "paragraph",
        text: "The team arrived at 5:30pm Friday, as the last employees were leaving for the weekend. The IT manager and a colleague were already shutting down servers and packing the server room equipment — that task was theirs. Our team took over the floor.",
      },
      {
        type: "ol",
        items: [
          "5:30pm — Team arrives; building protection fitted (lift pads, door jamb guards, floor coverings)",
          "6:00pm — Service lift access opens; meeting room dismantling begins (screens, cable trays, tables)",
          "7:00pm — Open-plan desk disassembly starts; each standing desk broken down to panels",
          "8:00pm — First truck loaded and dispatched to DIFC; second team continues packing",
          "9:30pm — First truck unloaded at DIFC, furniture placed per floor plan",
          "10:00pm — Second truck loaded and dispatched",
          "11:00pm — Business Bay lift access ends; remaining boxes staged for Saturday",
        ],
      },
      { type: "h2", text: "Saturday: Full Transfer" },
      {
        type: "paragraph",
        text: "The Saturday operation ran from 7am. With no lift time pressure at the DIFC end and a full-day booking secured, the team worked steadily through the remaining office contents.",
      },
      {
        type: "ul",
        items: [
          "Remaining Business Bay furniture loaded and transferred in two further trips",
          "All 25 workstations delivered to their designated DIFC desk positions",
          "Monitor boxes unpacked and screens placed on desks — cabling left for IT",
          "Meeting room furniture and AV equipment delivered to correct rooms",
          "Kitchen appliances and breakout furniture positioned",
          "All boxes delivered to correct desk positions based on labelling system",
          "Business Bay office checked and cleared by 4pm",
        ],
      },
      { type: "h2", text: "Sunday: Reassembly and Setup" },
      {
        type: "paragraph",
        text: "Sunday was dedicated to making the new office fully operational. Four team members returned to complete standing desk reassembly, meeting room setup and final placement adjustments guided by the operations manager.",
      },
      {
        type: "ul",
        items: [
          "All 25 standing desks reassembled to height-adjusted positions noted from old office",
          "Chair positions and monitor arms fitted",
          "Meeting room presentation screens wall-mounted and cable-managed",
          "Storage units and shelving assembled and positioned",
          "Kitchen connected and tested",
          "Operations manager walk-through completed — minor adjustments made",
          "Team out by 2pm Sunday",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "The desk labelling system",
        text: "Numbering every desk in the new floor plan and applying matching stickers to equipment and personal boxes is the single change that has the biggest impact on commercial moves. It eliminates the 'where does this go?' question completely and means every item is in position without a second move.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: Fully operational Monday 8am",
        text: "The agency's 25-person team walked into a fully set-up DIFC office on Monday morning. Every workstation was in position, meeting rooms were ready, and the IT manager had connected all systems by Sunday evening. Zero working days lost.",
      },
      {
        type: "paragraph",
        text: "\"The labelling system was the thing that surprised us most. We expected some chaos on Monday morning — things in the wrong place, people hunting for their equipment. Instead everyone sat down at their own desk in the new office as if they'd always been there. The WeMoveStuff team were professional, fast and genuinely knew what they were doing.\" — Operations Manager, DIFC",
      },
      {
        type: "ul",
        items: [
          "All 25 workstations in position and ready for IT connection by Sunday afternoon",
          "Zero operational downtime — full working week resumed Monday",
          "Business Bay office cleared and handed back Friday to Sunday",
          "No items misplaced or missing across the full transfer",
          "Meeting rooms operational and ready for client presentations Monday",
        ],
      },
    ],
  },

  // ── 3: Palm Jumeirah Villa ──────────────────────────────────────────────
  {
    slug: "palm-jumeirah-villa-relocation",
    title: "Palm Jumeirah Villa Relocation: 5-Bedroom Frond Villa Move",
    excerpt:
      "A premium two-day move for a 5-bedroom villa on The Palm, involving specialist packing for antiques, custom furniture and an extensive art collection — with frond road access to plan around.",
    location: "Palm Jumeirah",
    propertyType: "villa",
    outcome:
      "5-bedroom Palm Jumeirah villa fully relocated over two days with specialist handling for antiques and premium furniture.",
    publishedDate: "2026-02-14",
    featuredImage: "/images/case-studies/palm-jumeirah-villa-relocation.jpg",
    tags: ["villa-moving", "palm-jumeirah", "premium"],
    relatedService: "/services/villa-moving",
    seo: {
      title: "Palm Jumeirah Villa Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff handled a large 5-bedroom Palm Jumeirah villa relocation with specialist packing for antiques and premium furniture.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving a fully-furnished villa on The Palm Jumeirah requires a different level of planning to a standard Dubai move. The frond road access limits vehicle size, parking is restricted, and the properties themselves are typically furnished to a high specification — with everything that implies for packing and handling.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "Our clients had lived in their 5-bedroom frond villa for six years. Over that time they had furnished it with a mix of custom-made pieces, antiques sourced on travels, and contemporary artwork. They were upgrading to a larger villa on a different frond and wanted the move completed over two days — ideally without their household being disrupted over a third day.",
      },
      {
        type: "paragraph",
        text: "The property included: five bedrooms each with custom-fitted wardrobes, a large formal dining room with an antique table and set of eight chairs, a living area with two large custom sofas, an extensive art collection including oil paintings and bronze sculptures, a home study with a full wall of shelving and a large desk, garden furniture across the rear terrace and pool area, and a fully-fitted kitchen.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "ul",
        items: [
          "Frond road width limits vehicle access — only 3.5-tonne trucks can use frond roads",
          "Two-truck relay system required due to vehicle size restrictions",
          "Antiques require specialist wrapping: blanket pads, custom crating for fragile pieces",
          "Bronze sculptures required bespoke wooden crating built on-site",
          "Oil paintings need acid-free interleaving and rigid face protection",
          "Custom sofas too large for standard removal blankets — specialist covers required",
          "Garden furniture including heavy stone planters and hardwood sun loungers",
          "Two-day window with full operational use of new villa by end of day two",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Palm Jumeirah vehicle access",
        text: "The Palm Jumeirah frond roads are private and managed by Nakheel. Vehicles over a certain width and weight are restricted. We use 3.5-tonne Mitsubishi Canters for frond access — they make more trips but protect the road covenant and avoid permit complications.",
      },
      { type: "h2", text: "Pre-Move Site Visit and Specialist Assessment" },
      {
        type: "paragraph",
        text: "Ten days before the move, our senior operations manager and a specialist packing consultant visited the villa together. We inventoried every room, assessed every piece of furniture for packing requirements, and identified the four bronze sculptures and twelve oil paintings that would need the most attention.",
      },
      {
        type: "checklist",
        title: "Specialist packing materials sourced",
        items: [
          "Acid-free tissue paper and interleaving for oil paintings",
          "Custom-sized picture boxes for each canvas (14 pieces, various sizes)",
          "Rigid foam sheeting for sculpture faces and protruding elements",
          "Timber for on-site crating of three bronze sculptures",
          "Premium moving blankets (60 units) for furniture wrap",
          "Specialist sofa covers — custom-fitted for two oversized pieces",
          "Wardrobe boxes (30 units) for clothing transfer without refolding",
          "Heavy-duty strap trolleys for stone planters",
        ],
      },
      { type: "h2", text: "Day One: Packing and First Transfer" },
      {
        type: "paragraph",
        text: "The packing team of four arrived at 8am on day one. The primary focus was the art collection, antiques, home study, and kitchen — the categories with the highest packing time and the most risk. Furniture removal would begin once the fragile packing was complete.",
      },
      {
        type: "ol",
        items: [
          "8:00am — Packing team begins art collection: each painting photographed, wrapped and boxed",
          "9:30am — Bronze sculptures: timber crating built around three pieces on-site",
          "11:00am — Antique dining table wrapped and dismantled where possible; chairs individually wrapped",
          "12:00pm — Kitchen fully packed; appliances secured",
          "1:00pm — Home study: shelving contents boxed by category; desk dismantled",
          "2:00pm — Furniture removal begins: wardrobes dismantled, beds broken down",
          "3:30pm — First truck loaded with art, sculptures and fragile categories — dispatched to new villa",
          "4:30pm — First truck unloaded at new villa; fragile items placed in secure room",
          "5:30pm — Second load of furniture dispatched",
          "7:00pm — End of day one; master bedroom and one guest room cleared",
        ],
      },
      { type: "h2", text: "Day Two: Completion and Setup" },
      {
        type: "paragraph",
        text: "Day two focused on completing the remaining bedroom contents, the living area furniture, garden furniture and kitchen appliances — then full setup at the new villa.",
      },
      {
        type: "ul",
        items: [
          "Three further truck runs to complete all remaining furniture and boxes",
          "Garden furniture loaded last: sun loungers, stone planters (two-person lift with strap trolleys), outdoor dining set",
          "New villa: all furniture placed per client's room-by-room guidance",
          "Wardrobes reassembled and fitted with internal organisation restored",
          "Beds reassembled in all five bedrooms",
          "Artwork hung — client directed placement, we positioned and levelled each piece",
          "Bronze sculptures uncrated and positioned",
          "Kitchen unpacked and organised to client's specification",
          "Old villa final walk-through completed; no items missed",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Artwork placement service",
        text: "For clients with significant art collections, we include artwork positioning as part of the service. We hang and level each piece before leaving — so the house feels like home immediately rather than having pictures stacked against walls for weeks.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: Two-day complete move, full setup, zero damage",
        text: "All contents of the 5-bedroom villa — including antiques, sculptures, oil paintings and garden furniture — were moved, set up and in place by end of day two. Zero damage to any item.",
      },
      {
        type: "paragraph",
        text: "\"We were most worried about the bronzes and the paintings. We've moved before with other companies and always had something come back damaged. The WeMoveStuff team built wooden crates around the sculptures on-site — we hadn't expected that level of care. Everything arrived perfectly, the art is all hanging, and the house felt like home by the second evening.\" — Client, Palm Jumeirah",
      },
      {
        type: "ul",
        items: [
          "5-bedroom villa fully moved and set up across two days",
          "Zero damage to antiques, sculptures or oil paintings",
          "All artwork hung and levelled before team departure",
          "Frond road access managed without permit issues",
          "Clients in fully operational new home by end of day two",
        ],
      },
    ],
  },

  // ── 4: Dubai Marina Studio to 2-Bed ────────────────────────────────────
  {
    slug: "dubai-marina-apartment-move",
    title: "Dubai Marina Apartment Move: Studio to 2-Bedroom Upgrade",
    excerpt:
      "A single professional needed to vacate a Marina studio and move into a new 2-bedroom apartment — on the same day, with the new tenancy starting at midnight. A tight timeline in one of Dubai's most congested towers.",
    location: "Dubai Marina",
    propertyType: "apartment",
    outcome:
      "Same-day move from a studio apartment to a 2-bedroom in Dubai Marina, completed before the new tenancy started at midnight.",
    publishedDate: "2026-01-20",
    featuredImage: "/images/case-studies/dubai-marina-apartment-move.jpg",
    tags: ["apartment-moving", "dubai-marina", "studio"],
    relatedService: "/services/apartment-moving",
    seo: {
      title: "Dubai Marina Apartment Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff completed a same-day Dubai Marina studio to 2-bedroom apartment move before the new tenancy start time.",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving out of a studio in Dubai Marina sounds simple. In practice, it involves one of the most competitive service lift environments in Dubai — where dozens of buildings share restricted access windows, and tower management offices close at 5pm. When our client's new tenancy started at midnight and his existing lease ended at the same time, there was no margin for delay.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "Our client was a finance professional who had been living in a studio in one of the larger Marina Walk towers for two years. He was upgrading to a 2-bedroom apartment in a different Marina tower about 400 metres away — close enough that a second trip was feasible if needed, but not ideal given the time constraints.",
      },
      {
        type: "paragraph",
        text: "The studio was compact but fully furnished — a king-size bed, a working desk and chair setup, a small sofa, a dining table, full kitchen appliances, and the usual accumulation of two years of personal belongings. The new apartment was larger and had some existing furniture already in place, so placement planning was important.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "ul",
        items: [
          "Both buildings require service lift bookings — coordination across two tower management offices",
          "Marina towers frequently overbook service lifts, especially on month-end dates",
          "Client's lease end and new tenancy start were simultaneous — midnight deadline",
          "New apartment had an existing sofa — client's sofa needed to go to storage",
          "Building management offices close at 5pm — no permit amendments possible after that",
          "Parking in Dubai Marina is extremely restricted for large vehicles",
          "Friday move — higher residential activity in the towers",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Month-end Marina moves",
        text: "The last few days of any month in Dubai Marina see the highest volume of concurrent moves. Service lifts can have 4–5 bookings per day. If your slot is missed, the next available window may be hours away. We always build buffer time into Marina move schedules.",
      },
      { type: "h2", text: "Planning and Booking" },
      {
        type: "paragraph",
        text: "We contacted both building management offices five days before the move date. The outgoing building had a 9am–1pm service lift slot available. The incoming building had an 11am–3pm window. With a 400-metre drive, a 90-minute loading window, and 30 minutes transport, the timeline was achievable but tight.",
      },
      {
        type: "checklist",
        title: "Pre-move bookings confirmed",
        items: [
          "Outgoing tower service lift: 9am–1pm Friday",
          "Incoming tower service lift: 11am–3pm Friday",
          "Move permits applied for at both buildings (3 days in advance)",
          "Parking bay reserved via building management at outgoing tower (8:30am)",
          "Storage unit confirmed for client's studio sofa (delivered end of move day)",
          "3-person team allocated — sufficient for studio volume with efficient loading",
        ],
      },
      { type: "h2", text: "Moving Day" },
      {
        type: "paragraph",
        text: "The team arrived at 8:30am to secure the parking bay before the 9am service lift window opened. The client had pre-packed all personal belongings into boxes — we were handling furniture, appliances and boxes. The studio was compact, so loading was completed efficiently.",
      },
      {
        type: "ol",
        items: [
          "8:30am — Team arrives; parking bay secured, truck positioned",
          "8:45am — Lift protection fitted, trolleys ready",
          "9:00am — Service lift opens; bed frame dismantled and taken down first",
          "9:30am — Furniture and appliances loaded; boxes loaded in parallel",
          "10:30am — Studio fully cleared and walk-through completed",
          "10:45am — Keys returned to building management; client checks out",
          "11:00am — Truck departs for incoming building",
          "11:10am — Arrival; parking secured, incoming service lift opens on schedule",
          "11:15am — Unloading begins; team follows client's placement instructions",
          "12:30pm — All items in position; bed reassembled",
          "1:00pm — Studio sofa loaded separately and taken to storage facility",
          "1:30pm — Team departs; client fully in new apartment",
        ],
      },
      { type: "h2", text: "Managing the Unexpected" },
      {
        type: "paragraph",
        text: "At 11:05am, another resident at the incoming building contested our service lift slot, claiming it had been double-booked. Our team lead contacted the building management directly while two team members held the lift position. Management confirmed our booking within six minutes, and the other resident was rescheduled. We lost nine minutes — recoverable time given our buffer.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Always carry your booking confirmation",
        text: "We bring printed and digital copies of every service lift booking to every move. In contested situations — which happen more often than you'd expect in high-traffic Marina towers — having the booking reference immediately available resolves disputes in minutes rather than losing the slot.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: Fully moved by 1:30pm, 10.5 hours before midnight deadline",
        text: "The client was fully installed in his new 2-bedroom apartment by 1:30pm — with the studio sofa delivered to storage and the new apartment set up to his specification. The midnight deadline was met with hours to spare.",
      },
      {
        type: "paragraph",
        text: "\"I was stressed about this move for weeks — everyone I spoke to warned me about Marina service lifts. The WeMoveStuff team made it completely painless. They handled all the building admin, sorted the double-booking issue without any drama, and I was having lunch in my new place by 2pm. Unreal.\" — Client, Dubai Marina",
      },
      {
        type: "ul",
        items: [
          "Move completed in 5 hours start to finish",
          "Both service lift windows met and maintained",
          "Double-booking dispute resolved on-site in under 10 minutes",
          "Client fully settled 10.5 hours before midnight tenancy deadline",
          "Studio sofa delivered to storage on the same day as planned",
        ],
      },
    ],
  },

  // ── 5: JVC to Arabian Ranches Family Move ──────────────────────────────
  {
    slug: "jvc-family-move",
    title: "JVC Family Move: 3-Bedroom to Arabian Ranches Villa",
    excerpt:
      "A family of four relocating from a Jumeirah Village Circle apartment to a new Arabian Ranches villa — two communities, a gated access challenge, and two young children who needed their bedrooms ready by bedtime.",
    location: "Jumeirah Village Circle",
    propertyType: "apartment",
    outcome:
      "Family of 4 relocated from JVC apartment to Arabian Ranches villa — all furniture assembled and beds ready by bedtime.",
    publishedDate: "2025-12-05",
    featuredImage: "/images/case-studies/jvc-family-move.jpg",
    tags: ["apartment-moving", "villa-moving", "jvc", "arabian-ranches", "family-moving"],
    relatedService: "/services/villa-moving",
    seo: {
      title: "JVC to Arabian Ranches Family Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff moved a family of 4 from their JVC apartment to a new Arabian Ranches villa with full assembly and same-day completion.",
    },
    content: [
      {
        type: "paragraph",
        text: "Family moves come with a complexity that single-person and couple moves rarely match. When you have two children aged four and seven, the order in which you do things matters as much as the speed. Arriving at a new house at 8pm to find the children's beds still in boxes is a bad night for everyone.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "The family — parents and two young children — had lived in a 3-bedroom apartment in JVC for four years. The apartment was comprehensively furnished: three full bedroom sets, a large family living area, a dining room, a study, a utility room with appliances, and the inevitable mountain of children's toys, books and equipment that accumulates over four years with young children.",
      },
      {
        type: "paragraph",
        text: "They had signed a lease on a 4-bedroom villa in Arabian Ranches and were excited to give the children their own garden for the first time. The move date was set for a Saturday, with the family planning to return from their parents' home on Sunday morning to a new house that felt like home.",
      },
      { type: "h2", text: "The Challenge" },
      {
        type: "ul",
        items: [
          "Large volume for a cross-community move: full apartment contents plus children's equipment",
          "Arabian Ranches is a gated community — visitor access passes required in advance",
          "The villa had no furniture — everything in the new home was coming from the apartment",
          "Children's bedrooms were the client's number one priority for same-day setup",
          "Large trampoline in JVC apartment courtyard needing disassembly and transport",
          "Children's wardrobes were IKEA-built with custom internal fitting — needed careful disassembly",
          "Distance between JVC and Arabian Ranches: approximately 25 minutes drive each way",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Priority sequencing for family moves",
        text: "When families with children tell us their priority, we build the move schedule around it. For this family, children's bedrooms first — that meant planning the truck loading so beds and bedroom furniture came off first at the destination, not buried under boxes at the back of the truck.",
      },
      { type: "h2", text: "Planning Phase" },
      {
        type: "paragraph",
        text: "We visited the JVC apartment 10 days before the move. The volume assessment confirmed two truck trips would be needed — possibly three given the volume of children's equipment and the trampoline. We confirmed gated community vehicle access requirements with Arabian Ranches management and applied for contractor access passes three days before the move.",
      },
      {
        type: "checklist",
        title: "Pre-move logistics",
        items: [
          "Arabian Ranches gate contractor passes applied for (3 passes for truck and team)",
          "Two 5-tonne trucks confirmed for Saturday",
          "5-person team: 3 movers, 1 dedicated packer, 1 assembly specialist",
          "Children's bedroom items flagged on inventory as priority-first for unloading",
          "Trampoline disassembly assessed: 2-person job, tools required, 45 minutes estimated",
          "IKEA wardrobes assessed: photographed with internal fitting layouts for accurate reassembly",
          "Children's boxes labelled with their names for direct placement in correct room",
        ],
      },
      { type: "h2", text: "Moving Day" },
      {
        type: "paragraph",
        text: "The team arrived at 8am Saturday. The family was at the apartment but leaving by 9am to give the team space to work. We had agreed that the first truck would be loaded specifically with the children's bedrooms, the master bedroom, and the sofa — the items the clients most needed in place first.",
      },
      {
        type: "ol",
        items: [
          "8:00am — Team arrives; family departs for grandparents' home",
          "8:15am — Priority loading begins: children's beds, wardrobes and toy storage",
          "9:00am — Master bedroom loaded; sofa disassembled and loaded",
          "9:30am — First truck departs for Arabian Ranches (full priority load)",
          "10:00am — Second team begins general loading: dining room, study, kitchen, utility",
          "10:30am — First truck arrives at Arabian Ranches; assembly specialist begins children's rooms immediately",
          "10:30am — Trampoline disassembly begins in JVC courtyard",
          "12:00pm — Both children's bedrooms fully assembled and arranged; master bed assembled",
          "12:30pm — Second truck arrives at Arabian Ranches with remaining contents",
          "1:30pm — Trampoline arrives (transported in third trip); reassembly begins in garden",
          "3:00pm — All furniture assembled, all rooms in position",
          "4:00pm — Trampoline complete; garden furniture positioned",
          "5:00pm — Team departs; house fully set up",
        ],
      },
      { type: "h2", text: "The Bedtime Test" },
      {
        type: "paragraph",
        text: "The clients arrived at the new villa at 6pm with their children. Both children's bedrooms were fully assembled — beds made up with bedding the family had left out specifically for this, wardrobes in place with interiors set up, and a selection of favourite toys placed on the shelves by our team based on the photographs we had taken in the old apartment.",
      },
      {
        type: "paragraph",
        text: "The seven-year-old's comment: \"It already looks like my room.\" That is the standard we aim for.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Photographing children's rooms",
        text: "Before disassembling a child's bedroom, photograph the shelves, toy arrangements and wall decorations. Recreating even a rough approximation of a familiar setup in a new room makes a significant difference to how quickly young children settle. It takes two minutes and it matters.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: Full family move completed, children's rooms ready by noon",
        text: "The entire JVC apartment was cleared and the Arabian Ranches villa was fully set up in a single Saturday. Both children's bedrooms were assembled and arranged by 12pm — six hours before the family arrived. The trampoline was built in the garden the same day.",
      },
      {
        type: "paragraph",
        text: "\"We were worried about the children — moving is stressful enough for adults. But when we arrived and saw their rooms set up, our daughter immediately ran to her bed and announced she wanted to sleep there that night. That was the best possible result.\" — Client, Arabian Ranches",
      },
      {
        type: "ul",
        items: [
          "Full 3-bedroom apartment cleared and 4-bedroom villa set up in one day",
          "Children's bedrooms fully assembled by midday — 6 hours before family arrived",
          "Trampoline disassembled, transported and rebuilt in garden on same day",
          "Gated community access managed without any arrival delays",
          "Family slept in their new home on the first night without disruption",
        ],
      },
    ],
  },

  // ── 6: Dubai Hills Villa Move ──────────────────────────────────────────
  {
    slug: "dubai-hills-villa-move",
    title: "Dubai Hills Villa Move: 4-Bedroom Unfurnished to Fully Fitted",
    excerpt:
      "A couple moving into their first owned property in Dubai Hills Estate — combining the move with full furniture assembly and TV installation to transform an empty villa into a finished home in a single day.",
    location: "Dubai Hills Estate",
    propertyType: "villa",
    outcome:
      "4-bedroom Dubai Hills villa fully moved in and set up in a single day, including full furniture assembly and TV installation.",
    publishedDate: "2025-11-18",
    featuredImage: "/images/case-studies/dubai-hills-villa-move.jpg",
    tags: ["villa-moving", "dubai-hills", "furniture-assembly", "tv-installation"],
    relatedService: "/services/villa-moving",
    seo: {
      title: "Dubai Hills Villa Move Case Study | WeMoveStuff",
      description:
        "How WeMoveStuff moved and fully assembled a 4-bedroom Dubai Hills villa in one day, including furniture assembly and TV wall mounting.",
    },
    content: [
      {
        type: "paragraph",
        text: "Buying your first home in Dubai is an exciting milestone — and for most people, the purchase comes with a mountain of flat-pack furniture, appliances still in boxes, and the challenge of turning an empty villa into somewhere that actually feels like a home, as fast as possible.",
      },
      { type: "h2", text: "Client Background" },
      {
        type: "paragraph",
        text: "Our clients had purchased a 4-bedroom off-plan villa in Dubai Hills Estate that had just completed. They were moving from a rented 2-bedroom apartment in Barsha Heights, but the move was only part of the project. Over the preceding three months they had ordered and taken delivery of a substantial amount of new furniture — most of it in flat-pack format, stored in the apartment's spare room and in a storage unit nearby.",
      },
      {
        type: "paragraph",
        text: "The villa was completely empty — not even light fittings were included. The clients had arranged separately for electricians and a fit-out team to handle the technical work over the preceding week. Our job was the move, the assembly and the TV installations.",
      },
      { type: "h2", text: "Scope of Work" },
      {
        type: "ul",
        items: [
          "Move all existing furniture and belongings from Barsha Heights apartment",
          "Collect flat-pack orders from storage unit (second location)",
          "Assemble all flat-pack furniture: 4 bedroom sets, dining table, kitchen island unit, TV units, bathroom shelving, office desk and bookcase",
          "Wall-mount 4 TVs across villa (living room 75\", main bedroom 55\", two guest bedrooms 43\")",
          "Position and install outdoor garden furniture (dining set, sun loungers, parasol base)",
          "All completed within a single day",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Combining a move with full assembly",
        text: "When clients are moving into a new property and have significant furniture to assemble, we schedule two parallel workstreams: a moving team handling transport while a dedicated assembly team works inside the villa. This way, assembly begins before the last truck arrives.",
      },
      { type: "h2", text: "Planning and Team Allocation" },
      {
        type: "paragraph",
        text: "We conducted a planning meeting two weeks before the move date. The clients shared their floor plan with furniture positions marked, and a full inventory of flat-pack items with assembly complexity rated by our team. The 75\" TV installation required wall type confirmation — the villa had a concrete rear wall, which required specialist fixings.",
      },
      {
        type: "checklist",
        title: "Pre-move preparation",
        items: [
          "Full inventory of flat-pack items: 47 boxes across bedroom sets, dining, living room and office",
          "TV wall types confirmed: concrete in living room (specialist fixings), plasterboard in bedrooms",
          "Wall bracket specifications confirmed for all four TV sizes",
          "Floor plan annotated with furniture positions and assembly sequence",
          "6-person team allocated: 3 movers/loaders, 2 assembly specialists, 1 TV installer",
          "Two 5-tonne trucks confirmed: one for apartment move, one for storage unit collection",
          "Dubai Hills Estate access confirmed — developer permit applied for",
          "Assembly tools confirmed: power drivers, spirit levels, wall anchors, cable management kits",
        ],
      },
      { type: "h2", text: "Moving Day: Two Parallel Operations" },
      {
        type: "paragraph",
        text: "The key decision in planning this move was running two simultaneous operations: the moving team collecting and delivering from both locations, while the assembly team worked inside the villa from first delivery onwards.",
      },
      {
        type: "ol",
        items: [
          "7:30am — Full team arrives at Barsha Heights apartment",
          "7:45am — Assembly team takes first batch of flat-pack boxes to Dubai Hills via smaller van",
          "8:00am — Assembly team begins bedroom furniture at Dubai Hills villa",
          "8:00am — Moving team loads apartment contents onto 5-tonne truck",
          "9:30am — Moving team departs for storage unit to collect remaining flat-packs",
          "10:00am — First master bedroom furniture assembly complete; team moves to second bedroom",
          "11:00am — Moving team arrives at Dubai Hills with apartment contents; unloading begins",
          "11:00am — TV installer arrives; 75\" TV mounted in living room",
          "12:30pm — All apartment contents unloaded and positioned in rooms",
          "12:30pm — All three remaining TVs mounted (55\" and two 43\")",
          "1:00pm — Assembly complete: 4 bedrooms, dining table, kitchen island, TV units",
          "2:00pm — Office desk and bookcase assembled",
          "3:00pm — Garden furniture assembled and positioned on terrace",
          "4:00pm — Cable management completed for all four TVs",
          "5:00pm — Client walk-through; minor adjustments made",
          "5:30pm — Team departs",
        ],
      },
      { type: "h2", text: "TV Installation Detail" },
      {
        type: "paragraph",
        text: "The 75\" TV in the living room was the most involved installation. The concrete wall required a hammer drill and sleeve anchors — a step up from the standard bracket fixings used in plasterboard. Our installer confirmed stud positions and load capacity before committing, and the bracket was tested at 3x the TV weight before mounting.",
      },
      {
        type: "ul",
        items: [
          "Living room 75\": hammer-drill installation into concrete, full cable concealment behind media unit",
          "Main bedroom 55\": plasterboard installation with cable drop behind bedside unit",
          "Guest bedroom 1 — 43\": plasterboard, cable trunking used for clean finish",
          "Guest bedroom 2 — 43\": plasterboard, cable trunking matched to room colour scheme",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Cable management matters",
        text: "The visual quality of a TV installation depends almost entirely on cable management. We never leave exposed cables — every installation includes either in-wall cable routing (where possible) or matching cable trunking. The difference between a professional-looking result and an amateur one is purely cable discipline.",
      },
      { type: "h2", text: "Outcome" },
      {
        type: "callout",
        variant: "tip",
        title: "Result: Empty villa to fully fitted home in under 10 hours",
        text: "The 4-bedroom Dubai Hills villa went from empty to fully furnished, assembled and operational in a single day. All 47 flat-pack items assembled, all 4 TVs mounted, garden furniture in place — the clients were watching TV in their new living room the same evening.",
      },
      {
        type: "paragraph",
        text: "\"We honestly didn't think it was possible to do everything in one day. We'd planned to spend the next two weekends assembling furniture. Instead we sat down for dinner in our new dining room on day one and watched a film in our new bedroom that night. The team were efficient, tidy and completely stress-free to work with.\" — Client, Dubai Hills Estate",
      },
      {
        type: "ul",
        items: [
          "4-bedroom villa moved in and fully furnished in a single 10-hour day",
          "47 flat-pack items assembled across all rooms",
          "4 TVs wall-mounted with full cable management",
          "Garden furniture assembled and positioned on terrace",
          "Clients watching TV in their new home the same evening",
        ],
      },
    ],
  },

];

// ─── Helpers ───────────────────────────────────────────────────────────────
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
