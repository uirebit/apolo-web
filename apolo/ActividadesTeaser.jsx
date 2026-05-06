// ActividadesTeaser — sección reducida en landing con CTA → actividades.html
// La versión completa con tarjetas vive en apolo/Actividades.jsx (cargado en actividades.html).

function ActividadesTeaser() {
  return (
    <section id="actividades" style={{
      background:'var(--bg-2)', padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §05 — ACTIVIDADES
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          MÁS ALLÁ DEL HIERRO
        </span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', gap: 48, marginBottom: 56 }}>
        <h2 className="anton" style={{
          margin: 0, fontSize: 'clamp(42px, 10vw, 116px)', lineHeight: 0.9, letterSpacing:'-0.015em', textTransform:'uppercase',
        }}>
          EL OTRO LADO<br />
          <span style={{ color:'var(--orange)' }}>DE LA FUERZA.</span>
        </h2>
        <p style={{
          fontSize: 14.5, lineHeight: 1.65, color:'var(--ink-mute)',
          maxWidth: 360, margin: 0,
        }}>
          Movilidad, ritmo y comunidad. Las actividades dirigidas
          complementan la sala de fuerza con horarios cerrados y
          plazas limitadas.
        </p>
      </div>

      {/* Lista compacta de actividades disponibles */}
      <div className="mono" style={{
        display:'flex', gap: 'clamp(20px, 3vw, 40px)', flexWrap:'wrap',
        fontSize: 12, letterSpacing:'0.24em', color:'var(--ink)', fontWeight: 700,
        marginBottom: 32, paddingBottom: 28,
        borderBottom:'1px solid var(--rule)',
      }}>
        <span><span style={{ color:'var(--orange)' }}>01</span> · PILATES</span>
        <span><span style={{ color:'var(--orange)' }}>02</span> · SALSA</span>
        <span><span style={{ color:'var(--orange)' }}>03</span> · POLE DANCE</span>
      </div>

      {/* CTA → página dedicada */}
      <a href="actividades.html" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'var(--orange)', color:'var(--bg)',
        padding:'clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px)',
        textDecoration:'none', cursor:'pointer',
        gap: 24, flexWrap:'wrap',
      }}>
        <span className="anton" style={{
          fontSize: 'clamp(36px, 7vw, 80px)', lineHeight: 0.92,
          letterSpacing:'-0.01em', textTransform:'uppercase',
        }}>
          VER ACTIVIDADES →
        </span>
        <span className="mono" style={{
          fontSize: 12, letterSpacing:'0.24em', fontWeight: 700, opacity: 0.85,
          textAlign:'right',
        }}>
          HORARIOS · INSTRUCTORES<br />
          RESERVA POR TELÉFONO
        </span>
      </a>
    </section>
  );
}

window.ActividadesTeaser = ActividadesTeaser;
