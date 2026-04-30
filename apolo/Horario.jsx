// Horario — real schedule from Instagram
// L–V 06:00–22:30 · S–D 10:00–13:00

const DIA_NAMES = ['LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO','DOMINGO'];
// JS getDay(): 0=Sun..6=Sat → reindex to 0=Mon..6=Sun
const apoloDay = d => (d.getDay() + 6) % 7;
const dayWindow = i => i < 5 ? [360, 1350] : [600, 780]; // [openMin, closeMin]
const fmtMin = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;

function getStatus(now) {
  const day = apoloDay(now);
  const mins = now.getHours()*60 + now.getMinutes();
  const [open, close] = dayWindow(day);
  if (mins >= open && mins < close) {
    return { open: true, label: `ABIERTO AHORA · CIERRA A LAS ${fmtMin(close)}` };
  }
  // Closed: search up to 7 days for next opening
  let nDay = (mins < open) ? day : (day + 1) % 7;
  for (let step = 0; step < 7; step++) {
    const idx = (nDay + step) % 7;
    const [nOpen] = dayWindow(idx);
    if (idx === day && step === 0 && mins < open) {
      return { open: false, label: `CERRADO · ABRE HOY A LAS ${fmtMin(nOpen)}` };
    }
    if (step >= 0 && (idx !== day || step > 0)) {
      const when = (step === 0 && idx === (day + 1) % 7) ? 'MAÑANA' : DIA_NAMES[idx];
      return { open: false, label: `CERRADO · ABRE ${when} A LAS ${fmtMin(nOpen)}` };
    }
  }
  return { open: false, label: 'CERRADO' };
}

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

  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const todayIdx = apoloDay(now);
  const status = getStatus(now);

  return (
    <section id="horario" style={{ padding:'140px 56px 140px', borderTop:'1px solid var(--rule)' }}>
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
            margin: 0, fontSize: 'clamp(40px, 9vw, 80px)', lineHeight: 0.95, letterSpacing:'-0.015em', textTransform:'uppercase',
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
            padding:'14px 18px',
            border: status.open ? '1px solid var(--orange)' : '1px solid var(--rule)',
          }}>
            <span style={{
              width: 10, height: 10, borderRadius:'50%',
              background: status.open ? 'var(--orange)' : 'var(--ink-dim)',
              boxShadow: status.open ? '0 0 0 4px rgba(255,200,30,0.2)' : 'none',
            }} />
            <span className="mono" style={{
              fontSize: 11, letterSpacing:'0.22em', fontWeight: 700,
              color: status.open ? 'var(--orange)' : 'var(--ink-mute)',
            }}>
              {status.label}
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
            const isToday = i === todayIdx;
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
