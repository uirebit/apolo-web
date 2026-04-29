// Hero — using the real instructor photo

function Hero({ headline = 'HIERRO. SUDOR. GLORIA.' }) {
  // Split headline by ". " into 3 segments — fallback to 1 line otherwise
  const parts = headline.split(/\.\s*/).filter(Boolean);
  const [a, b, c] = [parts[0] || '', parts[1] || '', parts[2] || ''];

  return (
    <section style={{
      position:'relative', overflow:'hidden',
      background:'var(--bg)',
      paddingBottom: 0,
    }}>
      {/* Background — instructor on battle ropes */}
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage:'url(apolo/img/instructora.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center 25%',
        filter:'contrast(1.1) brightness(0.7)',
      }} />
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(90deg, rgba(20,18,16,0.95) 0%, rgba(20,18,16,0.65) 45%, rgba(20,18,16,0.2) 70%, rgba(20,18,16,0) 100%)',
      }} />
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(0deg, rgba(20,18,16,0.85) 0%, transparent 25%)',
      }} />
      {/* Yellow accent stripe — references the gym wall */}
      <div style={{
        position:'absolute', left: 0, right: 0, top: 360, height: 90,
        background:'var(--orange)', opacity: 0.92,
        clipPath: 'polygon(0 0, 65% 0, 60% 100%, 0 100%)',
        mixBlendMode: 'multiply',
      }} />

      <div style={{
        position:'relative', zIndex: 5,
        display:'grid', gridTemplateColumns:'1fr 380px',
        padding:'72px 56px 0', gap: 56,
        minHeight: 760,
      }}>
        {/* LEFT */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap: 14, marginBottom: 36 }}>
            <span style={{ width: 48, height: 1, background:'var(--orange)' }} />
            <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
              EST. 1984 — ARANJUEZ · POWERLIFTING
            </span>
          </div>

          <h1 className="anton" style={{
            margin: 0, fontSize: 184, lineHeight: 0.86, letterSpacing:'-0.015em',
            textTransform:'uppercase',
          }}>
            {a && <div>{a}.</div>}
            {b && <div style={{ WebkitTextStroke: '2px var(--ink)', color:'transparent' }}>{b}.</div>}
            {c && (
              <div style={{ color:'var(--orange)', position:'relative' }}>
                {c}.
                <span style={{
                  position:'absolute', right: -86, top: 18,
                  fontFamily:"'JetBrains Mono', monospace", fontSize: 11,
                  color:'var(--ink-dim)', letterSpacing:'0.18em', fontWeight: 400,
                  writingMode:'vertical-rl', textOrientation:'mixed',
                }}>/ APOLLON · ΑΠΟΛΛΩΝ</span>
              </div>
            )}
          </h1>

          <p style={{
            marginTop: 40, maxWidth: 560,
            fontSize: 15.5, lineHeight: 1.55, color:'var(--ink-mute)',
          }}>
            El gimnasio más completo del sur de Madrid. Dos naves industriales en
            Aranjuez con más de 180 máquinas: barras libres, máquinas selectorizadas,
            cardio y zona de pilates. Dirigido por un culturista profesional con
            cuarenta años en activo.
          </p>

          <div style={{ marginTop: 44, display:'flex', alignItems:'center', gap: 16 }}>
            <button style={{
              background:'var(--orange)', border:'none', color:'var(--bg)',
              padding:'18px 30px', fontWeight: 900, fontSize: 12, letterSpacing:'0.22em',
              cursor:'pointer',
            }}>RESERVA TU PRIMERA SESIÓN →</button>
            <button style={{
              background:'transparent', border:'1px solid rgba(245,241,234,0.35)',
              color:'var(--ink)', padding:'18px 26px',
              fontSize: 12, letterSpacing:'0.22em', fontWeight: 600, cursor:'pointer',
            }}>VER LAS NAVES</button>
          </div>
        </div>

        {/* RIGHT */}
        <aside style={{
          borderLeft:'1px solid var(--rule)', paddingLeft: 32, paddingTop: 4,
          display:'flex', flexDirection:'column', gap: 24,
        }}>
          <DataRow k="01" label="MÁQUINAS" value="180+" sub="DOS NAVES · 1.800 M²" />
          <DataRow k="02" label="DIRECTOR" value="40 AÑOS" sub="MARCOS APOLO · CULTURISMO" />
          <DataRow k="03" label="ABIERTO" value="06—22:30" sub="L A V · S/D 10—13" />
          <DataRow k="04" label="DESDE" value="€39/MES" sub="SIN MATRÍCULA · SIN PERMANENCIA" hi />

          {/* Tag */}
          <div style={{
            marginTop: 8,
            padding:'14px 16px',
            background:'rgba(20,18,16,0.85)',
            border:'1px solid var(--rule)',
            display:'flex', alignItems:'center', gap: 12,
          }}>
            <span style={{
              width: 8, height: 8, background:'var(--orange)', borderRadius:'50%',
              boxShadow:'0 0 0 3px rgba(255,200,30,0.2)',
            }} />
            <div className="mono" style={{ fontSize: 10, color:'var(--ink-mute)', letterSpacing:'0.2em', lineHeight: 1.5 }}>
              GONZALO CHACÓN 31<br />
              <span style={{ color:'var(--orange)' }}>ARANJUEZ · MADRID</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function DataRow({ k, label, value, sub, hi }) {
  return (
    <div>
      <div style={{ display:'flex', alignItems:'baseline', gap: 10, marginBottom: 6 }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.2em', fontWeight: 700 }}>{k}</span>
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.2em' }}>{label}</span>
      </div>
      <div className="anton" style={{
        fontSize: 38, lineHeight: 1, letterSpacing:'-0.01em',
        color: hi ? 'var(--orange)' : 'var(--ink)',
      }}>{value}</div>
      <div className="mono" style={{ fontSize: 9, color:'var(--ink-dim)', letterSpacing:'0.2em', marginTop: 6 }}>{sub}</div>
    </div>
  );
}
window.Hero = Hero;
