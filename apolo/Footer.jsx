// Footer — real contact info + Apolo logo

function Footer() {
  return (
    <footer id="contacto" style={{
      background:'var(--bg)',
      borderTop:'1px solid var(--rule)',
      padding:'80px 56px 32px',
    }}>
      {/* Massive wordmark with logo */}
      <div style={{ display:'flex', alignItems:'center', gap: 24, marginBottom: 56 }}>
        <img src="apolo/img/logo-real-clean.webp" width={140} height={140} alt="Apolo Gimnasio" style={{ display:'block', flexShrink: 0 }} />
        <div className="anton" style={{
          fontSize: 'clamp(72px, 22vw, 240px)', lineHeight: 0.85, letterSpacing:'-0.025em',
          color:'var(--orange)', textTransform:'uppercase',
        }}>
          APOLO.
        </div>
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap: 56,
        paddingTop: 48, borderTop:'1px solid var(--rule)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700, marginBottom: 16 }}>
            DIRECCIÓN
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.55, color:'var(--ink)' }}>
            C/ Gonzalo Chacón, 31<br />
            28300 · Aranjuez · Madrid
          </div>
          <div style={{ marginTop: 20, fontSize: 13.5, color:'var(--ink-mute)' }}>
            <a style={{ color:'var(--orange)', fontWeight: 700, letterSpacing:'0.06em' }}>910 945 909</a><br />
            hola@apolostrength.es
          </div>
        </div>

        {[
          ['VISITAR',['Inicio','Nosotros','Las naves','Inventario','Actividades','Planes','Horario']],
          ['LEGAL',['Aviso legal','Privacidad','Cookies','Reglamento']],
          ['SOCIAL',['@theapologym']],
        ].map(([title, items]) => (
          <div key={title}>
            <div className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700, marginBottom: 16 }}>
              {title}
            </div>
            <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 10 }}>
              {items.map(it => (
                <li key={it} style={{ fontSize: 13.5, color:'var(--ink-mute)' }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        marginTop: 64, paddingTop: 24,
        borderTop:'1px solid var(--rule)',
      }}>
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.22em' }}>
          © 1985—2026 · GIMNASIO APOLO · ARANJUEZ
        </span>
        <span className="cormorant" style={{
          fontStyle:'italic', fontSize: 16, color:'var(--ink-dim)',
        }}>
          mens sana in corpore sano —
        </span>
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.22em' }}>
          ΑΠΟΛΛΩΝ · APOLLON · APOLO
        </span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
