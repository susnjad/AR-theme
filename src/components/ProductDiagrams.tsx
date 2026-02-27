// Architectural line illustration diagrams for Aurum Rest products

export function MattressLayerDiagram() {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[480px] mx-auto"
      aria-label="Noira mattress layer construction diagram"
    >
      {/* IceSense Fabric top layer */}
      <rect x="40" y="30" width="400" height="28" stroke="#414141" strokeWidth="0.75" fill="none" />
      <line x1="40" y1="44" x2="440" y2="44" stroke="#414141" strokeWidth="0.4" strokeDasharray="4 4" />
      <text x="460" y="49" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="1.5">IceSense Fabric</text>

      {/* Memory foam layer */}
      <rect x="40" y="62" width="400" height="38" stroke="#414141" strokeWidth="0.75" fill="none" />
      {/* Wavy pattern for memory foam */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <path
          key={i}
          d={`M${48 + i * 40} 80 Q${60 + i * 40} 72 ${68 + i * 40} 80 Q${76 + i * 40} 88 ${88 + i * 40} 80`}
          stroke="#a09285"
          strokeWidth="0.6"
          fill="none"
        />
      ))}
      <text x="460" y="86" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="1.5">Memory Foam</text>

      {/* Transition layer */}
      <rect x="40" y="104" width="400" height="22" stroke="#414141" strokeWidth="0.75" fill="none" />
      <line x1="40" y1="115" x2="440" y2="115" stroke="#414141" strokeWidth="0.4" strokeDasharray="2 6" />
      <text x="460" y="120" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="1.5">Transition Layer</text>

      {/* Pocketed coils */}
      <rect x="40" y="130" width="400" height="90" stroke="#414141" strokeWidth="0.75" fill="none" />
      {/* Coil illustrations */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <g key={i} transform={`translate(${48 + i * 36}, 135)`}>
          <path
            d={`M4 0 C4 0, 8 4, 8 8 C8 12, 0 12, 0 16 C0 20, 8 20, 8 24 C8 28, 0 28, 0 32 C0 36, 8 36, 8 40 C8 44, 4 48, 4 80`}
            stroke="#414141"
            strokeWidth="0.75"
            fill="none"
          />
          <line x1="0" y1="80" x2="8" y2="80" stroke="#414141" strokeWidth="0.75" />
          <line x1="0" y1="0" x2="8" y2="0" stroke="#414141" strokeWidth="0.75" />
        </g>
      ))}
      <text x="460" y="180" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="1.5">1,200 Pocketed Coils</text>

      {/* Base layer */}
      <rect x="40" y="224" width="400" height="22" stroke="#414141" strokeWidth="0.75" fill="none" />
      {/* Cross-hatch */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
        <line key={i} x1={40 + i * 21} y1="224" x2={40 + i * 21} y2="246" stroke="#c8c1ae" strokeWidth="0.5" />
      ))}
      <text x="460" y="240" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="1.5">Base Foundation</text>

      {/* Side measurement */}
      <line x1="20" y1="30" x2="20" y2="246" stroke="#c8c1ae" strokeWidth="0.5" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="#c8c1ae" strokeWidth="0.5" />
      <line x1="16" y1="246" x2="24" y2="246" stroke="#c8c1ae" strokeWidth="0.5" />
      <text x="5" y="142" fill="#a09285" fontSize="8" fontFamily="Jost, sans-serif" letterSpacing="1" transform="rotate(-90, 12, 140)">30cm</text>
    </svg>
  );
}

export function WeightedBlanketDiagram() {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[480px] mx-auto"
      aria-label="Weighted blanket weight distribution diagram"
    >
      {/* Blanket outline */}
      <rect x="60" y="20" width="340" height="220" stroke="#414141" strokeWidth="0.75" rx="1" />

      {/* Weight distribution grid — glass bead pockets */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 12 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={65 + col * 27.5}
            y={25 + row * 26}
            width="23"
            height="22"
            stroke="#c8c1ae"
            strokeWidth="0.5"
            fill="none"
            rx="0.5"
          />
        ))
      )}

      {/* Weight dots — glass beads */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 12 }, (_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={76.5 + col * 27.5}
            cy={36 + row * 26}
            r="2.5"
            fill="#a09285"
            opacity="0.7"
          />
        ))
      )}

      {/* Center label */}
      <text x="240" y="262" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="2" textAnchor="middle">
        Uniform Distribution — 6.8kg
      </text>

      {/* Arrows showing uniform weight */}
      {[80, 160, 240, 320, 400].map((x) => (
        <g key={x}>
          <line x1={x} y1="0" x2={x} y2="15" stroke="#c8c1ae" strokeWidth="0.5" />
          <path d={`M${x - 3} 12 L${x} 18 L${x + 3} 12`} stroke="#c8c1ae" strokeWidth="0.5" fill="none" />
        </g>
      ))}
    </svg>
  );
}

export function KapokFiberDiagram() {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[480px] mx-auto"
      aria-label="Kapok fiber structure diagram"
    >
      {/* Central fiber bundle */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          {/* Main fiber strand */}
          <path
            d={`M${100 + i * 60} 220 C${90 + i * 60} 160, ${120 + i * 60} 120, ${100 + i * 60} 60 C${85 + i * 60} 20, ${115 + i * 60} 0, ${100 + i * 60} 40`}
            stroke="#414141"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Fine filament branches */}
          <path
            d={`M${100 + i * 60} 140 Q${78 + i * 60} 128, ${65 + i * 60} 130`}
            stroke="#c8c1ae"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d={`M${100 + i * 60} 110 Q${122 + i * 60} 100, ${135 + i * 60} 105`}
            stroke="#c8c1ae"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d={`M${100 + i * 60} 80 Q${82 + i * 60} 65, ${72 + i * 60} 70`}
            stroke="#c8c1ae"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Air pocket circles */}
          <circle cx={100 + i * 60} cy={130} r="14" stroke="#a09285" strokeWidth="0.4" fill="none" strokeDasharray="2 3" />
          <circle cx={100 + i * 60} cy={90} r="10" stroke="#a09285" strokeWidth="0.4" fill="none" strokeDasharray="2 3" />
        </g>
      ))}

      {/* Label annotations */}
      <text x="240" y="252" fill="#6b6b6b" fontSize="9" fontFamily="Jost, sans-serif" letterSpacing="2" textAnchor="middle">
        Hollow Fiber — 8× Lighter Than Cotton
      </text>

      {/* Air pocket callout */}
      <line x1="360" y1="130" x2="395" y2="120" stroke="#c8c1ae" strokeWidth="0.5" />
      <text x="398" y="118" fill="#a09285" fontSize="8" fontFamily="Jost, sans-serif" letterSpacing="1">Air pocket</text>

      {/* Hollow core callout */}
      <line x1="115" y1="90" x2="148" y2="72" stroke="#c8c1ae" strokeWidth="0.5" />
      <text x="150" y="70" fill="#a09285" fontSize="8" fontFamily="Jost, sans-serif" letterSpacing="1">Hollow core</text>
    </svg>
  );
}
