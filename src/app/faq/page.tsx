import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/seo.config";

import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FAQAccordion, { type FAQItem } from "@/components/shared/FAQAccordion";
import AreaPills from "@/components/shared/AreaPills";
import CTASection from "@/components/shared/CTASection";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import type { BreadcrumbItem } from "@/types/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Moving FAQ Dubai | 50+ Questions Answered | WeMoveStuff",
  description:
    "Comprehensive moving FAQs for Dubai residents and businesses — apartment moving, villa moving, packing, building permits, costs, commercial moves and more.",
  path: "/faq",
});

// ─── Data ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

const GENERAL_FAQS: FAQItem[] = [
  {
    question: "What moving services do you offer?",
    answer:
      "WeMoveStuff provides apartment moving, villa moving, commercial office moving, packing services, furniture dismantling and assembly, and TV mounting and installation services across Dubai. Services can be booked individually or combined as part of a full moving package.",
  },
  {
    question: "Do you operate across Dubai?",
    answer:
      "Yes. We provide moving services throughout Dubai including all major communities and districts — from Dubai Marina and Downtown to JVC, JLT, Dubai Hills, Arabian Ranches, Palm Jumeirah, DIFC, Al Barsha, Mirdif, Damac Hills and more. Contact us to confirm availability for your specific area.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible to secure your preferred moving date, particularly during busy periods such as the end of tenancy months or school holiday windows. That said, we will always do our best to accommodate shorter-notice moves when our schedule allows. Contact us to check availability for your preferred date.",
  },
  {
    question: "Do you provide weekend moves?",
    answer:
      "Yes. We offer moving services seven days a week including weekends, subject to availability. Weekend slots can be in high demand, so we recommend booking early if your move date falls on a Friday, Saturday or Sunday.",
  },
  {
    question: "Can I get a quote before booking?",
    answer:
      "Yes. We provide a free, no-obligation quotation before any booking is confirmed. Simply submit your move details through our quote form, send them via WhatsApp, or call us directly and we will come back to you with a personalised quote.",
  },
  {
    question: "Can I request a specific moving date and time?",
    answer:
      "Yes. When submitting your quote request, let us know your preferred date and an ideal start time — morning or afternoon. We will do our best to accommodate your preference and confirm the exact timeslot when booking is finalised. During busy periods such as month-end, popular slots fill quickly, so early booking is recommended.",
  },
  {
    question: "Do you move furniture only, or do you move everything including boxes?",
    answer:
      "We move everything — furniture, boxes, appliances, loose items and personal belongings. Whether you have packed everything yourself or need us to pack for you, our team loads and transports all items safely. If you only need furniture moved and are handling boxes separately, we can accommodate that too.",
  },
  {
    question: "Can I be present during the move?",
    answer:
      "Yes, and many customers prefer to be on-site to direct the team and answer questions as they arise. You are also welcome to leave once the team is underway if you need to attend to other things — our crew will work independently and contact you if anything needs clarification. For building access reasons, it is helpful to have someone reachable by phone throughout the move.",
  },
];

const PRICING_FAQS: FAQItem[] = [
  {
    question: "How much does moving cost in Dubai?",
    answer:
      "Moving costs in Dubai vary depending on the size of your property, the volume of items, the distance between locations, access conditions such as lift availability and floor levels, and any additional services required such as packing or furniture assembly. We provide personalised quotes tailored to your specific move rather than a fixed rate, ensuring you only pay for what you actually need.",
  },
  {
    question: "What affects the cost of a move?",
    answer:
      "The main factors that affect moving costs are: property size and the volume of belongings; the distance between origin and destination; access conditions at both properties such as floor level, lift access, and parking; whether packing, furniture assembly or TV installation services are included; and the preferred moving date and time. We account for all of these when preparing your quotation.",
  },
  {
    question: "Are quotes free?",
    answer:
      "Yes. All quotes from WeMoveStuff are completely free and carry no obligation. We will provide a personalised quotation based on your specific requirements and you can decide whether to proceed at your own pace without any pressure.",
  },
  {
    question: "Can I get a quote through WhatsApp?",
    answer:
      "Yes. You can send your move details — property type, size, current location, destination, preferred date and any additional services — directly via WhatsApp and we'll provide a quote in the conversation. Many of our customers find this the quickest and most convenient option.",
  },
  {
    question: "Do you provide commercial moving quotes?",
    answer:
      "Yes. We provide detailed quotes for all types of commercial moves including offices, retail units, warehouses and other commercial premises. For larger commercial relocations we may request additional information such as floor plans, IT equipment inventories or preferred moving windows to provide the most accurate quotation.",
  },
  {
    question: "Do you charge for parking, tolls or Salik during the move?",
    answer:
      "Salik toll charges incurred on the route between your properties are not separately itemised — these are factored into our overall pricing. Parking at both properties is something we plan in advance; where paid or metered parking is the only option, any associated costs may be discussed when confirming your quote. We will always be transparent about what is included before you confirm your booking.",
  },
  {
    question: "Is there a minimum charge for small moves?",
    answer:
      "Yes, we apply a minimum service charge to ensure we can deploy the right team and vehicle even for smaller moves. The minimum varies depending on the type of service booked. Single-item or very small moves may still qualify — contact us with your requirements and we will confirm the applicable rate.",
  },
  {
    question: "Do you offer storage as an add-on to a move?",
    answer:
      "Yes. If you need short-term storage between move-out and move-in dates, we can arrange secure storage as part of your overall moving plan. This is a common requirement when there is a gap between handing over keys at the old property and collecting keys at the new one. Contact us to discuss availability and pricing for your required storage period.",
  },
  {
    question: "Are your prices higher at weekends or month-end?",
    answer:
      "Demand is higher at weekends and at the end of each month — particularly in Dubai where many tenancy agreements end on the last day. While we aim to keep pricing consistent, availability can be tighter during these windows. We recommend booking early for month-end or Friday moves to secure your preferred slot and the best available rate.",
  },
];

const PACKING_FAQS: FAQItem[] = [
  {
    question: "Do you provide packing services?",
    answer:
      "Yes. We offer professional packing services for apartments, villas and commercial properties. Our team packs all items systematically using appropriate materials, labels boxes by room and contents, and has everything ready for moving day. Packing can be booked as a standalone service or as part of your full moving package.",
  },
  {
    question: "Do you supply packing materials?",
    answer:
      "Yes. All necessary packing materials are included in our packing service. We supply cardboard boxes in various sizes, bubble wrap, packing paper, furniture blankets and tape. There is no need to source materials separately — everything is brought to your property by our team.",
  },
  {
    question: "Can you pack fragile items?",
    answer:
      "Yes. We specialise in packing fragile items including glassware, mirrors, artwork, electronics, decorative items and collectibles. Fragile items receive appropriate protective wrapping, cushioning and box packing to ensure they travel safely. Let us know in advance about any particularly delicate or valuable items so we can prepare accordingly.",
  },
  {
    question: "Can I book packing without moving services?",
    answer:
      "Yes. Our packing service is available as a completely standalone booking, separate from any moving service. We will come to your property, pack your belongings, and you can arrange transport independently — or return later to book the moving service when you are ready.",
  },
  {
    question: "Do you offer professional packing services?",
    answer:
      "Yes. Our professional packing team uses industry-standard techniques and materials to pack your belongings efficiently and safely. We pack by room, wrap fragile and breakable items individually, and ensure boxes are correctly weighted so they are safe to stack and carry. This is one of the most popular add-ons for both apartment and villa moves.",
  },
  {
    question: "Do you supply packing materials or do I need to provide them?",
    answer:
      "When you book our packing service, all materials are supplied by us and included in the service cost. This covers cardboard boxes in a range of sizes, double-wall boxes for heavier items, bubble wrap, foam padding, tissue paper, packing tape and furniture blankets. You do not need to source or purchase anything separately.",
  },
  {
    question: "Can I pack some items myself and have you pack the rest?",
    answer:
      "Yes. Partial packing is a common arrangement. You might choose to pack personal items, documents and small valuables yourself while our team handles the larger, more time-consuming or fragile categories such as kitchen crockery, glassware, artwork and clothing. Let us know which areas or item types you want us to cover when requesting your quote.",
  },
  {
    question: "How do you pack fragile items like glassware and crockery?",
    answer:
      "Each glass, cup and fragile piece is individually wrapped in packing paper or bubble wrap, then packed in dedicated dish-pack or cell-divider boxes designed specifically for glassware and crockery. Boxes are clearly labelled as fragile and positioned on the vehicle to minimise movement in transit. For particularly valuable or irreplaceable pieces, additional padding is added.",
  },
  {
    question: "Do you pack artwork and mirrors?",
    answer:
      "Yes. Artwork and mirrors are packed using specialist materials including mirror boxes, foam corner protectors and heavy-duty wrapping. Large canvases are wrapped and protected with cardboard edges. We treat artwork and mirrors with extra care throughout the loading and transport process. For very large or valuable pieces, please mention them when booking so we can plan the right approach.",
  },
  {
    question: "How do you label boxes during a packing service?",
    answer:
      "Every box is labelled with the room it belongs to and a brief description of its contents. This system makes unloading and unpacking significantly faster at the new property, as boxes go directly to the correct room. If you have specific labelling preferences or want a numbered inventory, let us know and we will accommodate this.",
  },
  {
    question: "Do you unpack at the new property as well?",
    answer:
      "Yes. Our unpacking service at the new property is available as an add-on to any move with packing. Our team will open boxes, remove all packaging materials, place items in the locations you direct, and take away all used packing materials when finished. This leaves your new home clean and usable from day one rather than filled with empty boxes.",
  },
  {
    question: "What should I NOT pack in moving boxes?",
    answer:
      "You should not pack hazardous or flammable materials, including aerosol cans, paint, cleaning chemicals, gas canisters and similar substances — these cannot be transported by our vehicles. Irreplaceable documents, passports, jewellery and high-value cash items are better kept with you personally during the move rather than packed in boxes. If you are unsure about a specific item, ask us and we will advise.",
  },
];

const APARTMENT_FAQS: FAQItem[] = [
  {
    question: "Do you move studio apartments?",
    answer:
      "Yes. We move all apartment types including studios, as well as 1, 2, 3 and 4-bedroom apartments. Studio moves are typically straightforward and can often be completed within a few hours, depending on the volume of belongings and access conditions.",
  },
  {
    question: "Do you move apartments in high-rise buildings?",
    answer:
      "Yes. We regularly manage moves in high-rise residential towers across Dubai. We account for lift access, service lift booking requirements, loading bay access and building management rules when planning the move to ensure a smooth experience.",
  },
  {
    question: "Can you coordinate with building management?",
    answer:
      "Yes. We are experienced in coordinating with building management offices where required — including service lift bookings, moving hour restrictions and any permits needed for loading bay use. Let us know the building's specific requirements when confirming your move and we will plan accordingly.",
  },
  {
    question: "How long does an apartment move take?",
    answer:
      "The time required depends on the size of the apartment, the volume of belongings, whether packing is included, and access conditions at both properties. A furnished studio or one-bedroom apartment may take half a day, while a larger three or four-bedroom apartment with full packing could take a full day. We will give you a realistic time estimate when confirming your quote.",
  },
  {
    question: "Do you provide packing for apartment moves?",
    answer:
      "Yes. Full packing, partial packing and fragile-item packing services are all available alongside apartment moves. Packing can be arranged on the same day as the move or on the day before, depending on your preference and our availability.",
  },
  {
    question: "How do you book a service lift for an apartment move?",
    answer:
      "Service lift booking is typically handled directly with the building management office or through the Mollak-registered building coordinator for RERA-regulated buildings in Dubai. We advise our customers on this process and can coordinate directly with building management on your behalf where the building permits this. It is best to confirm the service lift at least a week before your planned moving date to avoid scheduling conflicts.",
  },
  {
    question: "Do you handle the building move permit application?",
    answer:
      "Many Dubai residential buildings require a move permit — sometimes called a fit-out or move-in/move-out permit — issued by building management before any removal can take place. We are familiar with this process and can advise you on the required documentation. In some buildings we can coordinate directly on your behalf; in others, the permit application must come from the tenant or owner. We will confirm the process for your building when planning your move.",
  },
  {
    question: "What if the service lift is unavailable on my moving date?",
    answer:
      "If the service lift is booked out on your preferred moving date, we can discuss rescheduling or, where the building permits it, using the passenger lift with protective padding during lower-traffic periods. In some buildings, early morning slots on the same day may still be available. We work with you to find the most practical solution given the building's specific access rules.",
  },
  {
    question: "Can you move between two high-rise apartments on the same day?",
    answer:
      "Yes. Moving between two high-rise buildings on the same day is common in Dubai and something we manage regularly. We plan the service lift time at the origin building, load the vehicle, then coordinate arrival at the destination building within their service lift window. Having both lift slots confirmed before moving day is important, and we recommend booking both buildings as early as possible.",
  },
  {
    question: "What happens if building security refuses entry on moving day?",
    answer:
      "Building security refusals are rare when the proper permits and service lift bookings are in place, but they can occur if paperwork is not in order. We recommend confirming your move permit and service lift booking with building management a day before the move. If an issue arises on the day, our team will work with you and building security to resolve it — and we always carry contact numbers for the on-site management office as a backup.",
  },
  {
    question: "Do you dismantle and reassemble apartment furniture?",
    answer:
      "Yes. Furniture dismantling and reassembly is included or available as an add-on for apartment moves. Large beds, wardrobes, dining tables and shelving units are dismantled at the origin apartment, wrapped for protection, transported and reassembled at the new apartment. Our team brings all necessary tools and keeps all fixings together and labelled.",
  },
  {
    question: "Can you accommodate a move on a building's restricted access day?",
    answer:
      "Some Dubai buildings restrict moving activity on certain days — typically Friday or public holidays. If your preferred moving date falls on a restricted day, we can help you explore alternatives. In some cases, early morning slots or exceptions may be available through negotiation with building management. We will advise you on the options for your specific building once we know its restrictions.",
  },
];

const VILLA_FAQS: FAQItem[] = [
  {
    question: "Do you move large villas?",
    answer:
      "Yes. We move villas of all sizes across Dubai including 2, 3, 4, 5 and 6-bedroom properties in communities such as Arabian Ranches, Dubai Hills, Palm Jumeirah, The Springs, Damac Hills and more. Larger villas are planned in advance with a full team and the appropriate number of vehicles for the volume of belongings.",
  },
  {
    question: "Can you move luxury villas?",
    answer:
      "Yes. We handle villa moves with care and professionalism, applying appropriate protection for furniture, artwork, fragile items and high-value belongings. If you have specific items requiring extra care — antiques, artwork, oversized furniture — let us know when requesting your quote and we will plan accordingly.",
  },
  {
    question: "Do you handle fragile furniture?",
    answer:
      "Yes. Fragile and valuable furniture receives additional protection during a villa move. We use furniture blankets, wrapping materials and appropriate packing to protect items during loading, transport and unloading. Particularly delicate or high-value pieces can be flagged in advance for specialist handling.",
  },
  {
    question: "How long does a villa move take?",
    answer:
      "Villa move durations vary considerably depending on the size of the property, the volume of furniture and belongings, whether packing is included, and access conditions. A smaller villa may be completed in one day, while a large fully-furnished villa with packing may take two or more days. We will provide a realistic timeframe when reviewing your requirements.",
  },
  {
    question: "Can packing be included in a villa move?",
    answer:
      "Yes. Full packing services — including all materials — can be included as part of your villa move. For larger villas, packing is often scheduled across one or more days before the moving day itself to ensure everything is ready and the move day runs smoothly.",
  },
  {
    question: "Do you move garden furniture and outdoor equipment?",
    answer:
      "Yes. Garden furniture, sun loungers, parasols, outdoor dining sets and garden equipment such as lawnmowers and barbecues are all items we can include in a villa move. Large or heavy outdoor items are assessed when planning your move so we ensure the right equipment and team size are available on the day.",
  },
  {
    question: "Can you move a piano or other large instruments?",
    answer:
      "Upright pianos and certain other large instruments can be moved as part of a villa relocation, but require specific handling and additional team members. Grand pianos are specialist items that may require a dedicated specialist piano mover. Please mention any musical instruments when requesting your quote so we can confirm the appropriate approach and ensure your instrument is moved safely.",
  },
  {
    question: "How do you handle large wardrobes and built-in furniture?",
    answer:
      "Large freestanding wardrobes are dismantled, wrapped and reassembled at the new property. Genuinely built-in or fitted wardrobes that are fixed to the walls are a different matter — these are typically considered part of the property and cannot normally be removed without causing damage. If you have a bespoke freestanding wardrobe that resembles a built-in, our team will assess it on the day and advise.",
  },
  {
    question: "Do you move to and from gated communities like Arabian Ranches?",
    answer:
      "Yes. We move to and from all major gated communities in Dubai including Arabian Ranches, Arabian Ranches 2 and 3, Damac Hills, Dubai Hills Estate, The Springs, The Meadows, The Lakes, Mudon and others. Access to gated communities may require pre-registration of the moving vehicle at the security gate, which we plan for in advance of your moving day.",
  },
  {
    question: "How long does a villa move typically take?",
    answer:
      "A smaller two or three-bedroom villa with pre-packed contents can typically be completed in one day. A larger four or five-bedroom villa with full packing may require a packing day followed by the move day, or two full days depending on the volume. We give a realistic timeline when confirming your quote so you can plan accordingly.",
  },
  {
    question: "Can you help with packing a full villa's contents?",
    answer:
      "Yes. Full villa packing is one of our most popular services. Our team will arrive with all necessary materials and pack every room systematically — kitchen, living areas, bedrooms, home office, storage rooms and outdoor areas. For larger villas, packing is scheduled over one or two days before moving day to ensure nothing is rushed and all items are properly protected.",
  },
];

const COMMERCIAL_FAQS: FAQItem[] = [
  {
    question: "Do you move offices?",
    answer:
      "Yes. We provide commercial office moving services across Dubai for businesses of all sizes. We manage the full relocation including workstations, equipment, furniture, storage and IT hardware. Each commercial move is planned in detail to ensure everything arrives correctly and the team can get back to work as quickly as possible.",
  },
  {
    question: "Can you minimise business downtime?",
    answer:
      "Yes. Minimising disruption to your business operations is a priority in how we plan commercial moves. We work with you to schedule the move at the least disruptive time, create a detailed move plan by department or zone, and ensure workstations are set up and operational at the new premises as quickly as possible.",
  },
  {
    question: "Do you move outside office hours?",
    answer:
      "Yes. For commercial clients where daytime moves would significantly disrupt operations, we can accommodate early morning, evening or weekend moves subject to availability. Out-of-hours scheduling is commonly used for retail, hospitality and business-critical office environments.",
  },
  {
    question: "Can you move retail stores?",
    answer:
      "Yes. We move retail units, showrooms and commercial spaces in addition to offices. Retail relocations often involve fixtures, display units, stock and specialist equipment that require careful handling. Let us know the specifics of your retail space when requesting a quote.",
  },
  {
    question: "Do you provide office furniture setup?",
    answer:
      "Yes. Office furniture assembly and setup is available as part of a commercial move. Our team can assemble workstations, desks, meeting tables and storage units at the new premises so the space is ready for use when your team arrives. Office screen and monitor installation is also available.",
  },
  {
    question: "Do you offer out-of-hours and weekend office moves?",
    answer:
      "Yes. Out-of-hours commercial moves — including evenings, early mornings and weekends — are available and commonly used by businesses that cannot afford to lose working hours during the relocation. We plan the schedule in detail so the team arrives, loads, transports and sets up the new office within the agreed out-of-hours window. Let us know your operational constraints and we will build a plan around them.",
  },
  {
    question: "Can you move IT equipment like servers and computers?",
    answer:
      "Yes. We move desktop computers, monitors, laptops, printers and standard office IT equipment as part of a commercial move. Server hardware and rack-mounted equipment require careful handling and we recommend your IT team disconnects and documents all cabling before our crew loads the equipment. For sensitive server infrastructure, please discuss your requirements with us in advance so we can plan the safest approach.",
  },
  {
    question: "Do you provide a dedicated coordinator for commercial moves?",
    answer:
      "Yes. For commercial relocations, a dedicated move coordinator is assigned to your project. They will be your single point of contact for planning, scheduling and on-the-day management. This ensures clear communication between your team and ours throughout the process and avoids the confusion that can arise when multiple people are managing different parts of the move.",
  },
  {
    question: "How do you ensure minimal downtime during an office move?",
    answer:
      "We work with you to create a zone-by-zone or department-by-department move plan that keeps disruption contained. In some cases, non-critical areas can be moved first while the rest of the office continues operating. We also ensure that the most business-critical workstations and equipment are the last to leave and the first to be set up at the new premises, so the team can resume work as quickly as possible after arrival.",
  },
  {
    question: "Can you move a large office over multiple trips?",
    answer:
      "Yes. Larger office relocations that cannot be completed in a single vehicle load or single day are managed across multiple trips or over multiple days. We plan the sequence carefully so that essential items and equipment arrive first and the new office can begin partial operations before the full move is complete. Multi-day commercial moves are common for larger organisations.",
  },
  {
    question: "Do you supply floor plans or moving plans for office relocations?",
    answer:
      "We do not create architectural floor plans, but we do develop a detailed operational move plan that maps out which items go where in the new office, the sequence of loading and unloading, and the responsibilities of each team member. If you provide us with the new office layout, we will cross-reference it when labelling furniture and equipment so everything lands in the right position on moving day.",
  },
  {
    question: "What types of businesses have you relocated in Dubai?",
    answer:
      "We have moved a wide range of businesses across Dubai including professional services firms, technology companies, creative agencies, retail outlets, medical clinics, hospitality businesses and educational institutions. Whether you are a five-person startup or an organisation with dozens of workstations, we have the experience and capacity to manage your relocation professionally.",
  },
];

const BUILDING_ACCESS_FAQS: FAQItem[] = [
  {
    question: "What is a building move permit and do I need one?",
    answer:
      "A building move permit — sometimes called a move-in/move-out permit or removal permit — is an authorisation issued by your building management office that allows a removal crew to operate in the building on a specified date. Most residential towers in Dubai require one, and it typically needs to be obtained by the resident or owner before moving day. We advise all apartment customers to check this requirement with their building management as early as possible.",
  },
  {
    question: "How much notice do I need to book a service lift?",
    answer:
      "Most Dubai residential buildings require between three and seven days' notice to book the service lift, though popular buildings may need longer notice at busy periods such as month-end. We recommend confirming your moving date with us and then immediately contacting your building management to reserve the service lift slot. We will advise you on timing based on what we know of your building.",
  },
  {
    question: "What if the building doesn't allow moves on my preferred day?",
    answer:
      "Some buildings prohibit moves on Fridays, public holidays or during certain hours of the day. If your preferred moving date is not permitted by your building, we will work with you to identify an alternative date that suits both your schedule and the building's restrictions. In some cases, buildings may grant exceptions with advance notice — your building management office is the best point of contact to explore this.",
  },
  {
    question: "Do you handle parking arrangements at the building?",
    answer:
      "We factor parking requirements into our planning for every move. For most jobs, we use the building's designated loading bay or visitor parking area for the moving vehicle. If your building has specific parking restrictions or requires a vehicle registration to be pre-registered with security, let us know the details and we will coordinate this in advance. Any paid parking costs are discussed transparently before your move is confirmed.",
  },
  {
    question: "What happens if building management won't let the truck park?",
    answer:
      "Parking issues at the building are rare when planned properly, but they can occur. If building management cannot accommodate our vehicle in the loading bay, we will work with your building security to find an approved alternative. In some cases, this means parking nearby and using trolleys and lifts to carry items to the vehicle. We always aim to find a practical solution on the day without leaving you stuck.",
  },
  {
    question: "Can you coordinate with two different buildings on the same day?",
    answer:
      "Yes. Moving from one apartment building to another on the same day requires coordination with both building management offices — one for the move-out, and one for the move-in. We account for service lift booking windows at both buildings when planning the day and ensure there is enough time allocated for transit between them. We recommend that both service lifts are booked as early as possible and that the timeslots are confirmed to us before the move date.",
  },
];

const SERVICES_FAQS: FAQItem[] = [
  {
    question: "Do you offer TV removal and reinstallation?",
    answer:
      "Yes. TV removal and reinstallation is one of our most popular standalone services in Dubai. We remove your TV from the wall at the old property, transport it safely as part of your move, and mount it in the new location at the correct height and viewing angle. This can be booked as part of a full move or as a standalone service.",
  },
  {
    question: "Can you install a TV on a different wall type at the new property?",
    answer:
      "Yes. We install TVs on concrete walls (the most common wall type in Dubai apartments), plasterboard walls and stud walls. The installation method and fixings used differ by wall type. When booking, let us know what you know about the walls at the new property and our team will bring the appropriate fixings and drill bits for the job.",
  },
  {
    question: "Do you offer furniture assembly as a standalone service?",
    answer:
      "Yes. Furniture assembly is available as a standalone service, separate from any moving work. If you have moved into a new property and need furniture assembled, have purchased new flat-pack furniture, or need existing furniture dismantled and moved to a different room, we can arrange a dedicated assembly visit.",
  },
  {
    question: "Can you help set up IKEA or flat-pack furniture?",
    answer:
      "Yes. Flat-pack and IKEA furniture assembly is a common standalone booking for us across Dubai. Our team is experienced with IKEA flat-pack products including PAX wardrobes, HEMNES and MALM beds, KALLAX shelving, BILLY bookcases and similar items. We assemble everything correctly and dispose of any packaging once the job is complete.",
  },
  {
    question: "Do you offer a storage service during a move?",
    answer:
      "Yes. Short-term storage can be arranged when there is a gap between your move-out and move-in dates. We can collect your belongings on move-out day, store them securely, and deliver them to your new property when it is ready. This is a practical solution when keys are delayed, a renovation is ongoing, or lease dates do not align.",
  },
  {
    question: "Can you help with cleaning after a move-out?",
    answer:
      "Move-out cleaning is not a service we provide directly, but we can recommend trusted cleaning partners in Dubai. Many of our customers pair our moving services with an end-of-tenancy clean arranged through a separate provider. Ask us when booking if you need a cleaning referral and we will point you in the right direction.",
  },
  {
    question: "Do you offer same-day moving in Dubai?",
    answer:
      "We do our best to accommodate same-day moves when our schedule allows, but availability cannot be guaranteed. If you have an urgent or same-day move requirement, contact us as early in the day as possible via phone or WhatsApp and we will let you know immediately whether we can accommodate it. For planned moves, booking in advance is always recommended.",
  },
];

const FAQ_AREAS = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JVC",
  "JLT",
  "Palm Jumeirah",
  "Dubai Hills",
  "Arabian Ranches",
  "DIFC",
  "Al Barsha",
  "Mirdif",
  "Damac Hills",
];

// Combined for schema — all 50+ questions
const ALL_FAQ_ITEMS: FAQItem[] = [
  ...GENERAL_FAQS,
  ...PRICING_FAQS,
  ...PACKING_FAQS,
  ...APARTMENT_FAQS,
  ...VILLA_FAQS,
  ...COMMERCIAL_FAQS,
  ...BUILDING_ACCESS_FAQS,
  ...SERVICES_FAQS,
];

const FAQ_CATEGORIES = [
  {
    id: "general",
    heading: "General Moving Questions",
    description: "Common questions about how we work, what we move and how to get started.",
    items: GENERAL_FAQS,
    bg: "bg-[#F7F9FC]",
  },
  {
    id: "pricing",
    heading: "Pricing & Quotes",
    description: "What determines the cost of a move and how to get your personalised quote.",
    items: PRICING_FAQS,
    bg: "bg-white",
  },
  {
    id: "packing",
    heading: "Packing Services",
    description: "Everything you need to know about our professional packing and unpacking services.",
    items: PACKING_FAQS,
    bg: "bg-[#F7F9FC]",
  },
  {
    id: "apartment",
    heading: "Apartment Moving",
    description: "Specific questions about moving to or from apartments and high-rise buildings in Dubai.",
    items: APARTMENT_FAQS,
    bg: "bg-white",
  },
  {
    id: "villa",
    heading: "Villa Moving",
    description: "Questions about moving villas, gated communities and large residential properties.",
    items: VILLA_FAQS,
    bg: "bg-[#F7F9FC]",
  },
  {
    id: "commercial",
    heading: "Commercial Relocations",
    description: "Office moves, retail relocations and commercial relocation planning in Dubai.",
    items: COMMERCIAL_FAQS,
    bg: "bg-white",
  },
  {
    id: "building-access",
    heading: "Building Access & Permits",
    description: "Service lifts, move permits and building logistics — what you need to know before moving day.",
    items: BUILDING_ACCESS_FAQS,
    bg: "bg-[#F7F9FC]",
  },
  {
    id: "services",
    heading: "Additional Services",
    description: "TV installation, furniture assembly, storage and other services we offer alongside moving.",
    items: SERVICES_FAQS,
    bg: "bg-white",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      <StructuredData data={faqPageSchema(ALL_FAQ_ITEMS)} />

      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <PageHero
        headline="Frequently Asked Questions"
        subheadline="Answers to common questions about moving services, packing, pricing and relocations across Dubai."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        breadcrumbs={BREADCRUMBS}
        image={{
          src: "/images/faq/faq-hero.jpg",
          alt: "Customer asking moving questions.",
          priority: true,
        }}
        variant="split"
      />

      {/* ── Sections 2–9: FAQ Categories ─────────────────────────────── */}
      {FAQ_CATEGORIES.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`${category.bg} section-padding`}
          aria-labelledby={`${category.id}-heading`}
        >
          <div className="max-container container-padding flex flex-col gap-8 max-w-3xl mx-auto">
            <FadeUp>
              <SectionHeader
                id={`${category.id}-heading`}
                headline={category.heading}
                subheadline={category.description}
              />
            </FadeUp>

            <FadeUp delay={0.08}>
              <FAQAccordion items={category.items} />
            </FadeUp>
          </div>
        </section>
      ))}

      {/* ── Section 10: Service Areas ─────────────────────────────────── */}
      <section className="bg-[#F7F9FC] section-padding" aria-labelledby="areas-heading">
        <div className="max-container container-padding flex flex-col gap-8">
          <FadeUp>
            <SectionHeader
              id="areas-heading"
              headline="Areas We Serve"
              subheadline="Moving services available across all major Dubai communities."
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <AreaPills
              areas={FAQ_AREAS}
              cta={{ label: "Check Availability", href: "/contact" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: Still Have Questions? ────────────────────────── */}
      <section className="bg-navy section-padding" aria-labelledby="contact-cta-heading">
        <div className="max-container container-padding">
          <div className="flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
            <FadeUp>
              <div className="flex size-14 items-center justify-center rounded-[16px] bg-white/10">
                <MessageCircle className="size-7 text-white" aria-hidden />
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <h2
                id="contact-cta-heading"
                className="text-[26px] md:text-[34px] font-extrabold text-white leading-tight tracking-tight"
              >
                Can&apos;t find the answer?
              </h2>
              <p className="text-base text-white/75 leading-relaxed mt-3">
                Our team is happy to answer questions about your move, provide advice and help you plan the next steps.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  render={<Link href="/contact" />}
                  variant="primary"
                  size="lg"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
                  }
                  variant="whatsapp"
                  size="lg"
                >
                  WhatsApp Us
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 12: Final CTA ─────────────────────────────────────── */}
      <CTASection
        headline="Ready to plan your move?"
        body="Get a personalised quote and let WeMoveStuff help make your move easier."
        primaryCTA={{ label: "Get Free Quote", href: "/quote", variant: "primary" }}
        secondaryCTA={{ label: "WhatsApp Us", href: whatsappUrl, variant: "whatsapp", external: true }}
        backgroundImage="/images/faq/faq-final-cta.jpg"
      />
    </>
  );
}
