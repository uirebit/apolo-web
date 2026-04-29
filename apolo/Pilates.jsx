// Pilates — clases con Laura Díaz

function Pilates() {
  const horarios = [
    { dias: 'LUNES Y MIÉRCOLES', horas: ['17:00 — 18:00','18:00 — 19:00','19:00 — 20:00','20:00 — 21:00'] },
    { dias: 'MARTES Y JUEVES',   horas: ['09:00 — 10:00','10:00 — 11:00','11:00 — 12:00','12:00 — 13:00','17:00 — 18:00','18:00 — 19:00','19:00 — 20:00','20:00 — 21:00'], note: 'Sesión 12:00 H reservada para *embarazadas' },
  ];

  return (
    <section id="pilates" style={{
      background:'var(--bg-2)', padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)', position:'relative',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §05 — PILATES
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          IMPARTE LAURA DÍAZ — @PILATES_LAURADIAZ
        </span>
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 64, alignItems:'start',
      }}>
        {/* Left — heading + image */}
        <div>
          <h2 className="anton" style={{
            margin: 0, fontSize: 116, lineHeight: 0.9, letterSpacing:'-0.015em', textTransform:'uppercase',
          }}>
            EL OTRO<br />
            <span style={{ color:'var(--orange)' }}>LADO DE LA FUERZA.</span>
          </h2>
          <p style={{
            marginTop: 36, fontSize: 15.5, lineHeight: 1.65, color:'var(--ink-mute)', maxWidth: 540,
          }}>
            Sala dedicada de pilates con máquinas reformer y trapecio. Clases en
            grupos reducidos para movilidad, control y prevención de lesiones.
            Sesión específica para embarazadas los martes y jueves a las 12:00 H.
          </p>

          <div style={{
            marginTop: 40, position:'relative',
          }}>
            <img src="apolo/img/pilates.jpg" alt="Sala de Pilates Apolo"
              style={{
                width:'100%', aspectRatio:'4/3', objectFit:'cover',
                border:'1px solid var(--rule)',
              }} />
            <div style={{
              position:'absolute', bottom: 16, left: 16,
              padding:'8px 12px',
              background:'var(--orange)', color:'var(--bg)',
              fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
            }}>SALA PILATES · NAVE I</div>
          </div>

          {/* Instructor card */}
          <div style={{
            marginTop: 24,
            display:'flex', alignItems:'center', gap: 16,
            padding:'18px 20px',
            background:'var(--bg)', border:'1px solid var(--rule)',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius:'50%', flexShrink: 0,
              background:'var(--orange)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Anton'", fontSize: 26, color:'var(--bg)',
            }}>LD</div>
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ fontSize: 9, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700 }}>
                INSTRUCTORA TITULAR
              </div>
              <div className="anton" style={{ fontSize: 22, marginTop: 4, color:'var(--ink)' }}>
                LAURA DÍAZ
              </div>
              <div className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.18em', marginTop: 4 }}>
                @PILATES_LAURADIAZ · MÁQUINA · SUELO · EMBARAZADAS
              </div>
            </div>
          </div>
        </div>

        {/* Right — schedule */}
        <div style={{
          background:'var(--bg)', border:'1px solid var(--rule)',
          padding:'36px 36px 28px',
        }}>
          <div className="mono" style={{
            fontSize: 10, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700, marginBottom: 8,
          }}>
            CLASES DE PILATES · HORARIOS
          </div>
          <div className="cormorant" style={{ fontSize: 22, fontStyle:'italic', color:'var(--ink-dim)', marginBottom: 24 }}>
            Plazas limitadas. Reserva por teléfono.
          </div>

          {horarios.map((bloque, idx) => (
            <div key={idx} style={{ marginBottom: idx === 0 ? 32 : 0 }}>
              <div style={{
                background:'var(--orange)', color:'var(--bg)',
                padding:'10px 14px',
                fontFamily:"'Archivo'", fontWeight: 800, fontSize: 12, letterSpacing:'0.2em',
                marginBottom: 14,
              }}>{bloque.dias}</div>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 0 }}>
                {bloque.horas.map((h,i) => (
                  <div key={i} style={{
                    padding:'12px 14px',
                    fontSize: 13, fontWeight: 600, color:'var(--ink)',
                    fontFamily:"'JetBrains Mono', monospace",
                    letterSpacing:'0.1em',
                    borderBottom: i < bloque.horas.length - (bloque.horas.length % 2 === 0 ? 2 : 1) ? '1px solid var(--rule)' : 'none',
                    borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                  }}>{h} H</div>
                ))}
              </div>

              {bloque.note && (
                <div style={{
                  marginTop: 12, padding:'10px 14px',
                  background:'rgba(255,200,30,0.1)',
                  borderLeft:'2px solid var(--orange)',
                  fontSize: 12, color:'var(--ink-mute)',
                }}>
                  <span className="mono" style={{ color:'var(--orange)', fontWeight: 700, letterSpacing:'0.18em', marginRight: 6 }}>NOTA</span>
                  {bloque.note}
                </div>
              )}
            </div>
          ))}

          <button style={{
            marginTop: 32, width:'100%',
            background:'var(--orange)', border:'none', color:'var(--bg)',
            padding:'18px 0', fontFamily:"'Archivo'", fontWeight: 900,
            fontSize: 12, letterSpacing:'0.22em', cursor:'pointer',
          }}>RESERVAR PLAZA · 910 945 909 →</button>
        </div>
      </div>
    </section>
  );
}
window.Pilates = Pilates;
