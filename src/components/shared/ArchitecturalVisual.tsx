import { cn } from "@/lib/utils";

export type ArchitecturalVariant =
  | "commercial-transformation"
  | "investor-property"
  | "occupier-workplace"
  | "design-space-planning"
  | "fit-out-renovation"
  | "mep-hvac"
  | "furniture-equipment"
  | "project-management"
  | "process"
  | "capabilities"
  | "about";

interface ArchitecturalVisualProps {
  variant: ArchitecturalVariant;
  className?: string;
  /** Compact crop for tight positions such as the mobile hero */
  compact?: boolean;
}

/*
 * Decorative architectural line work used wherever approved imagery does not
 * yet exist. Each variant is drawn from fit-out documentation language —
 * floor plans, partition build-ups, ceiling services, programme lines —
 * rather than charts or dashboards. Static by design (no animation), ivory
 * hairlines on Engage Black with Architectural Gold reserved for a single
 * accent layer per drawing.
 */

// Shared stroke tokens
const INK_LINE = "rgba(246,243,237,0.30)";
const INK_FAINT = "rgba(246,243,237,0.14)";
const GOLD = "#B79A62";
const GOLD_SOFT = "rgba(183,154,98,0.16)";

const thin = { stroke: INK_LINE, strokeWidth: 1.5, fill: "none" } as const;
const faint = { stroke: INK_FAINT, strokeWidth: 1, fill: "none" } as const;
const dash = { ...thin, strokeDasharray: "6 6" } as const;
const gold = { stroke: GOLD, strokeWidth: 1.5, fill: "none" } as const;
const goldDash = { ...gold, strokeDasharray: "5 5" } as const;

/** Dimension marker: line with end ticks */
function Dim({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const vertical = x1 === x2;
  const t = 5;
  return (
    <g stroke={GOLD} strokeWidth={1.2}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {vertical ? (
        <>
          <line x1={x1 - t} y1={y1} x2={x1 + t} y2={y1} />
          <line x1={x2 - t} y1={y2} x2={x2 + t} y2={y2} />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - t} x2={x1} y2={y1 + t} />
          <line x1={x2} y1={y2 - t} x2={x2} y2={y2 + t} />
        </>
      )}
    </g>
  );
}

/** Workstation cluster: desk rectangles with chair ticks */
function Desks({ x, y, cols = 2, rows = 2 }: { x: number; y: number; cols?: number; rows?: number }) {
  const items = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = x + c * 62;
      const dy = y + r * 44;
      items.push(
        <g key={`${r}-${c}`}>
          <rect x={dx} y={dy} width={48} height={22} {...thin} />
          <line x1={dx + 14} y1={dy + 30} x2={dx + 34} y2={dy + 30} {...thin} />
        </g>
      );
    }
  }
  return <>{items}</>;
}

function Variant({ variant }: { variant: ArchitecturalVariant }) {
  switch (variant) {
    // Shell outline on the left resolving into a fitted, organised plan
    case "commercial-transformation":
      return (
        <>
          {/* shell condition — dashed empty plate */}
          <rect x={60} y={90} width={280} height={330} {...dash} />
          <line x1={60} y1={200} x2={130} y2={200} {...faint} />
          <line x1={250} y1={420} x2={250} y2={350} {...faint} />
          {/* transition marks */}
          <line x1={370} y1={250} x2={420} y2={250} {...gold} />
          <path d="M410 242 L424 250 L410 258" {...gold} />
          {/* fitted plan */}
          <rect x={450} y={90} width={290} height={330} {...thin} />
          <line x1={450} y1={200} x2={620} y2={200} {...thin} />
          <line x1={620} y1={90} x2={620} y2={260} {...thin} />
          <rect x={640} y={110} width={80} height={70} {...gold} />
          <Desks x={470} y={230} cols={2} rows={2} />
          <Desks x={470} y={110} cols={2} rows={1} />
          {/* circulation */}
          <path d="M450 340 H600 V420" {...goldDash} />
          <Dim x1={450} y1={450} x2={740} y2={450} />
        </>
      );

    // Empty floor plate with zoning overlay prepared for market
    case "investor-property":
      return (
        <>
          <rect x={90} y={80} width={620} height={340} {...thin} />
          {/* existing condition: faint abandoned partitions */}
          <line x1={240} y1={80} x2={240} y2={190} {...faint} />
          <line x1={90} y1={190} x2={240} y2={190} {...faint} />
          {/* proposed zoning */}
          <rect x={120} y={110} width={200} height={130} {...dash} />
          <rect x={360} y={110} width={160} height={130} {...dash} />
          <rect x={120} y={280} width={250} height={110} {...dash} />
          {/* market-ready core zone in gold */}
          <rect x={560} y={110} width={120} height={280} {...gold} />
          <rect x={560} y={110} width={120} height={280} fill={GOLD_SOFT} stroke="none" />
          <line x1={560} y1={205} x2={680} y2={205} {...gold} />
          <line x1={560} y1={300} x2={680} y2={300} {...gold} />
          <Dim x1={90} y1={450} x2={710} y2={450} />
          <Dim x1={60} y1={80} x2={60} y2={420} />
        </>
      );

    // Team zones, meeting spaces, collaboration areas
    case "occupier-workplace":
      return (
        <>
          <rect x={80} y={80} width={640} height={340} {...thin} />
          <Desks x={110} y={110} cols={3} rows={2} />
          <Desks x={110} y={300} cols={2} rows={2} />
          {/* meeting room */}
          <rect x={480} y={100} width={210} height={140} {...thin} />
          <ellipse cx={585} cy={170} rx={62} ry={28} {...gold} />
          {/* collaboration zone */}
          <rect x={480} y={280} width={210} height={110} {...dash} />
          <circle cx={530} cy={335} r={16} {...thin} />
          <circle cx={585} cy={335} r={16} {...thin} />
          <circle cx={640} cy={335} r={16} {...thin} />
          {/* door opening */}
          <path d="M80 250 A46 46 0 0 1 126 296" {...goldDash} />
          <line x1={80} y1={250} x2={80} y2={296} stroke="#050505" strokeWidth={3} />
        </>
      );

    // Floor-plan grid, dimension markers, circulation
    case "design-space-planning":
      return (
        <>
          {/* planning grid */}
          {[160, 260, 360, 460, 560, 660].map((x) => (
            <line key={x} x1={x} y1={70} x2={x} y2={430} {...faint} />
          ))}
          {[130, 210, 290, 370].map((y) => (
            <line key={y} x1={90} y1={y} x2={710} y2={y} {...faint} />
          ))}
          <rect x={90} y={70} width={620} height={360} {...thin} />
          {/* workstation zone */}
          <Desks x={130} y={140} cols={3} rows={2} />
          {/* meeting-room block */}
          <rect x={470} y={110} width={190} height={130} {...gold} />
          <ellipse cx={565} cy={175} rx={55} ry={24} {...gold} />
          {/* circulation path */}
          <path d="M110 400 H540 V280" {...goldDash} />
          <Dim x1={90} y1={455} x2={710} y2={455} />
          <Dim x1={745} y1={70} x2={745} y2={430} />
        </>
      );

    // Section build-up: floor, partitions, ceiling, door opening
    case "fit-out-renovation":
      return (
        <>
          {/* floor slab */}
          <line x1={60} y1={400} x2={740} y2={400} {...thin} />
          <line x1={60} y1={412} x2={740} y2={412} {...faint} />
          {/* ceiling line + grid */}
          <line x1={60} y1={120} x2={740} y2={120} {...thin} />
          {[140, 220, 300, 380, 460, 540, 620, 700].map((x) => (
            <line key={x} x1={x} y1={120} x2={x} y2={132} {...faint} />
          ))}
          {/* stud partition build-up */}
          {[150, 190, 230, 270, 310].map((x) => (
            <line key={x} x1={x} y1={140} x2={x} y2={400} {...faint} />
          ))}
          <rect x={140} y={140} width={180} height={260} {...thin} />
          {/* finished wall segment in gold */}
          <rect x={330} y={140} width={16} height={260} {...gold} />
          <rect x={330} y={140} width={16} height={260} fill={GOLD_SOFT} stroke="none" />
          {/* door + glazing opening */}
          <path d="M480 400 A70 70 0 0 0 410 330" {...goldDash} />
          <line x1={410} y1={330} x2={410} y2={400} {...thin} />
          <rect x={540} y={160} width={150} height={240} {...thin} />
          <line x1={615} y1={160} x2={615} y2={400} {...faint} />
          <Dim x1={140} y1={440} x2={480} y2={440} />
        </>
      );

    // Ceiling services: duct run, airflow, lighting and data points
    case "mep-hvac":
      return (
        <>
          <rect x={80} y={80} width={640} height={340} {...faint} />
          {/* main duct route */}
          <path d="M110 250 H420 V140 H690" {...thin} strokeWidth={4} />
          {[180, 260, 340].map((x) => (
            <path key={x} d={`M${x} 250 V330`} {...thin} />
          ))}
          {/* airflow arrows */}
          {[180, 260, 340].map((x) => (
            <path key={x} d={`M${x - 7} 322 L${x} 336 L${x + 7} 322`} {...thin} />
          ))}
          {/* lighting points */}
          {[490, 560, 630].map((x) => (
            <g key={x}>
              <circle cx={x} cy={200} r={11} {...thin} />
              <line x1={x - 7} y1={200 - 7} x2={x + 7} y2={200 + 7} {...faint} />
              <line x1={x - 7} y1={200 + 7} x2={x + 7} y2={200 - 7} {...faint} />
            </g>
          ))}
          {/* data route in gold */}
          <path d="M110 380 H560 V300" {...goldDash} />
          {[210, 330, 450].map((x) => (
            <rect key={x} x={x - 5} y={375} width={10} height={10} {...gold} />
          ))}
          <circle cx={560} cy={300} r={6} {...gold} />
        </>
      );

    // Furniture plan: desks, meeting table, storage, reception
    case "furniture-equipment":
      return (
        <>
          <rect x={80} y={80} width={640} height={340} {...faint} />
          <Desks x={110} y={120} cols={2} rows={3} />
          {/* meeting table with chairs */}
          <rect x={430} y={110} width={170} height={90} rx={8} {...thin} />
          {[455, 495, 535, 575].map((x) => (
            <line key={`t${x}`} x1={x} y1={96} x2={x + 20} y2={96} {...thin} />
          ))}
          {[455, 495, 535, 575].map((x) => (
            <line key={`b${x}`} x1={x} y1={214} x2={x + 20} y2={214} {...thin} />
          ))}
          {/* storage modules */}
          {[430, 490, 550, 610].map((x) => (
            <rect key={x} x={x} y={260} width={50} height={26} {...thin} />
          ))}
          {/* reception in gold */}
          <path d="M430 400 Q520 340 660 372" {...gold} />
          <path d="M430 412 Q520 352 660 384" {...gold} />
          <Dim x1={80} y1={450} x2={720} y2={450} />
        </>
      );

    // Delivery programme line over a plan outline
    case "project-management":
      return (
        <>
          <rect x={90} y={90} width={620} height={220} {...faint} />
          <line x1={90} y1={170} x2={430} y2={170} {...faint} />
          <line x1={430} y1={90} x2={430} y2={310} {...faint} />
          {/* programme line */}
          <line x1={110} y1={400} x2={690} y2={400} {...thin} />
          {[110, 210, 310, 410, 510, 610].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={400} r={7} {...thin} />
              <line x1={x} y1={393} x2={x} y2={360} {...faint} />
              {i < 5 && <line x1={x + 7} y1={400} x2={x + 93} y2={400} {...thin} />}
            </g>
          ))}
          {/* coordination nodes tying programme to the plan */}
          <line x1={210} y1={360} x2={210} y2={310} {...goldDash} />
          <line x1={510} y1={360} x2={510} y2={310} {...goldDash} />
          {/* handover checkpoint */}
          <rect x={676} y={386} width={28} height={28} {...gold} transform="rotate(45 690 400)" />
          <circle cx={690} cy={400} r={3.5} fill={GOLD} stroke="none" />
        </>
      );

    // Route path with checkpoints across a plan
    case "process":
      return (
        <>
          <rect x={80} y={80} width={640} height={340} {...faint} />
          <path d="M110 380 H300 V180 H520 V320 H690" {...thin} />
          {[
            [110, 380], [300, 380], [300, 180], [520, 180], [520, 320], [690, 320],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={9} {...(i === 5 ? gold : thin)} />
              {i === 5 && <circle cx={x} cy={y} r={3.5} fill={GOLD} stroke="none" />}
            </g>
          ))}
          <rect x={150} y={110} width={110} height={90} {...dash} />
          <rect x={560} y={110} width={130} height={90} {...dash} />
        </>
      );

    // Grid of small plan tiles, one resolved in gold
    case "capabilities":
      return (
        <>
          {[
            [90, 90], [330, 90], [570, 90], [90, 280], [330, 280],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width={180} height={140} {...(i === 4 ? faint : dash)} />
              <line x1={x + 60} y1={y} x2={x + 60} y2={y + 70} {...faint} />
              <line x1={x} y1={y + 70} x2={x + 60} y2={y + 70} {...faint} />
            </g>
          ))}
          <rect x={570} y={280} width={180} height={140} {...gold} />
          <line x1={570} y1={350} x2={680} y2={350} {...gold} />
          <line x1={680} y1={280} x2={680} y2={350} {...gold} />
          <rect x={695} y={295} width={40} height={40} fill={GOLD_SOFT} stroke={GOLD} strokeWidth={1.5} />
        </>
      );

    // Coordination: one delivery structure around the floor plate
    case "about":
      return (
        <>
          <rect x={250} y={160} width={300} height={180} {...thin} />
          <line x1={250} y1={250} x2={400} y2={250} {...faint} />
          <line x1={400} y1={160} x2={400} y2={340} {...faint} />
          {/* discipline nodes coordinated through one structure */}
          {[
            [140, 110], [660, 110], [140, 390], [660, 390],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x - 34} y={y - 22} width={68} height={44} {...dash} />
              <line
                x1={x < 400 ? x + 34 : x - 34}
                y1={y < 250 ? y + 10 : y - 10}
                x2={x < 400 ? 250 : 550}
                y2={y < 250 ? 190 : 310}
                {...faint}
              />
            </g>
          ))}
          {/* single accountable point */}
          <circle cx={400} cy={250} r={12} {...gold} />
          <circle cx={400} cy={250} r={4} fill={GOLD} stroke="none" />
        </>
      );
  }
}

export default function ArchitecturalVisual({
  variant,
  className,
  compact = false,
}: ArchitecturalVisualProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[6px] bg-ink-raised border border-line",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox={compact ? "40 60 720 400" : "0 0 800 520"}
        className="w-full h-auto block"
        role="presentation"
        focusable="false"
      >
        <Variant variant={variant} />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/40" />
    </div>
  );
}
