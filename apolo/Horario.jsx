// Horario — real schedule from Instagram

function Horario() {
  const dias = [
    ['LUNES',     '06:00 — 22:30', 'NAVE I + II'],
    ['MARTES',    '06:00 — 22:30', 'NAVE I + II'],
    ['MIÉRCOLES', '06:00 — 22:30', 'NAVE I + II'],
    ['JUEVES',    '06:00 — 22:30', 'NAVE I + II'],
    ['VIERNES',   '06:00 — 22:30', 'NAVE I + II'],
    ['SÁBADO',    '10:00 — 13:00', 'NAVE I'],
    ['DOMINGO',   '10:00 — 13:00', 'NAVE I'],
  ];

  return (
    <section style={{ padding:'140px 56px 140px', borderTop:'1px solid var(--rule)' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §07 — HORARIO
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          @THEAPOLOGYM
        </span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80, alignItems:'start' }}>
        <div>
          <h2 className="anton" style={{
            margin: 0, fontSize: 80, lineHeight: 0.95, letterSpacing:'-0.015em', textTransform:'uppercase',
          }}>
            HORARIOS<br />
            <span style={{ color:'var(--orange)' }}>DEL TEMPLO.</span>
          </h2>
          <p style={{
            marginTop: 40, fontSize: 15, lineHeight: 1.65, color:'var(--ink-mute)', maxWidth: 480,
          }}>
            Dieciséis horas y media de lunes a viernes. Ideal para quien madruga
            antes del trabajo o entrena al cerrar el día. Fines de semana abrimos
            la mañana del sábado y el domingo.
          </p>

          <div style={{
            marginTop: 40, display:'inline-flex', alignItems:'center', gap: 12,
            padding:'14px 18px', border:'1px solid var(--orange)',
          }}>
            <span style={{
              width: 10, height: 10, background:'var(--orange)', borderRadius:'50%',
              boxShadow:'0 0 0 4px rgba(255,200,30,0.2)',
            }} />
            <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.22em', fontWeight: 700 }}>
              ABIERTO AHORA · CIERRA A LAS 22:30
            </span>
          </div>

          {/* Pilates note */}
          <div style={{
            marginTop: 28, padding:'18px 20px',
            background:'var(--bg-2)', border:'1px solid var(--rule)',
            maxWidth: 480,
          }}>
            <div className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700, marginBottom: 8 }}>
              CLASES DE PILATES
            </div>
            <div style={{ fontSize: 13.5, color:'var(--ink-mute)', lineHeight: 1.55 }}>
              Lunes, miércoles, viernes 10:00 / 11:00 / 12:00 H · martes y jueves 09:00—21:00 H ·
              clase de embarazadas martes/jueves a las 12:00 H. Imparte
              <span style={{ color:'var(--ink)', fontWeight: 700 }}> Laura Díaz</span>.
            </div>
          </div>
        </div>

        <div style={{ border:'1px solid var(--rule)' }}>
          {dias.map(([d, h, n], i) => {
            const isToday = i === 2;
            return (
              <div key={d} style={{
                display:'grid', gridTemplateColumns:'1fr 1fr 1fr',
                padding:'22px 26px',
                borderBottom: i < dias.length-1 ? '1px solid var(--rule)' : 'none',
                background: isToday ? 'rgba(255,200,30,0.06)' : 'transparent',
              }}>
                <span className="anton" style={{
                  fontSize: 22, letterSpacing:'0.02em',
                  color: isToday ? 'var(--orange)' : 'var(--ink)',
                }}>{d}</span>
                <span className="mono" style={{
                  fontSize: 13, letterSpacing:'0.18em', fontWeight: 700,
                  color: isToday ? 'var(--orange)' : 'var(--ink)',
                }}>{h}</span>
                <span className="mono" style={{
                  fontSize: 11, letterSpacing:'0.22em', color:'var(--ink-dim)',
                  textAlign:'right', alignSelf:'center',
                }}>{n}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Horario = Horario;
