// Apolo logo — recreated from the real brand mark
// Dual-bicep bodybuilder silhouette with skull head + barbell underneath
// Original is yellow on black/dark grey

function ApoloLogo({ size = 64, color = 'currentColor', bg = 'transparent', ring = true, label = true }) {
  const s = size;
  return (
    <svg viewBox="0 0 200 200" width={s} height={s} style={{ display:'block', flexShrink: 0 }}>
      {bg !== 'transparent' && <circle cx="100" cy="100" r="100" fill={bg} />}
      {ring && <circle cx="100" cy="100" r="92" fill="none" stroke={color} strokeWidth="3" />}
      {ring && <circle cx="100" cy="100" r="86" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />}

      {/* Skull head */}
      <g fill={color}>
        <ellipse cx="100" cy="48" rx="11" ry="13" />
        {/* small drip / mouth */}
        <path d="M97 56 L100 64 L103 56 Z" />
        {/* eye sockets cut */}
        <circle cx="96.5" cy="46" r="2" fill={bg === 'transparent' ? '#0a0a0a' : bg} />
        <circle cx="103.5" cy="46" r="2" fill={bg === 'transparent' ? '#0a0a0a' : bg} />

        {/* Body — flexed dual-bicep silhouette, stylized */}
        {/* Left arm raised (flex) */}
        <path d="
          M 100 68
          C 92 68 86 72 80 78
          C 70 84 56 86 48 80
          C 42 76 36 78 36 84
          C 36 92 44 96 54 96
          C 64 96 72 92 78 86
          C 78 92 76 100 72 108
          C 68 116 64 122 60 126
          C 56 130 56 134 62 134
          C 70 134 78 128 84 118
          C 88 112 92 108 96 106
          L 100 106 Z
        " />
        {/* Right arm raised (mirror) */}
        <path d="
          M 100 68
          C 108 68 114 72 120 78
          C 130 84 144 86 152 80
          C 158 76 164 78 164 84
          C 164 92 156 96 146 96
          C 136 96 128 92 122 86
          C 122 92 124 100 128 108
          C 132 116 136 122 140 126
          C 144 130 144 134 138 134
          C 130 134 122 128 116 118
          C 112 112 108 108 104 106
          L 100 106 Z
        " />
      </g>

      {/* Barbell + APOLO mark band */}
      <g>
        {/* Barbell left */}
        <rect x="34" y="146" width="6" height="14" fill={color} />
        <rect x="42" y="150" width="3" height="6" fill={color} />
        <line x1="46" y1="153" x2="74" y2="153" stroke={color} strokeWidth="2" />
        {/* Barbell right */}
        <rect x="160" y="146" width="6" height="14" fill={color} />
        <rect x="155" y="150" width="3" height="6" fill={color} />
        <line x1="126" y1="153" x2="154" y2="153" stroke={color} strokeWidth="2" />
        {/* APOLO label */}
        {label && (
          <g>
            <text x="100" y="158" textAnchor="middle"
              fontFamily="Anton, Archivo, sans-serif"
              fontSize="22" fill={color} letterSpacing="2">APOLO</text>
            <line x1="76" y1="162" x2="124" y2="162" stroke={color} strokeWidth="1.5" />
            <text x="100" y="176" textAnchor="middle"
              fontFamily="Archivo, sans-serif"
              fontSize="9" fill={color} letterSpacing="3" fontWeight="600">GIMNASIO</text>
          </g>
        )}
      </g>
    </svg>
  );
}
window.ApoloLogo = ApoloLogo;
