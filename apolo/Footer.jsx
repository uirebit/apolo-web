// Footer — real contact info + Apolo logo
// linkPrefix: prepended to internal anchor hrefs ('#…') so the footer also
// works on subpages ('' on home, 'index.html' elsewhere).

function Footer({ linkPrefix = '' }) {
  const blocks = [
    ['VISITAR', [
      ['Inicio',      '#inicio'],
      ['Nosotros',    '#nosotros'],
      ['Las naves',   '#naves'],
      ['Inventario',  '#maquinas'],
      ['Actividades', '#actividades'],
      ['Planes',      '#planes'],
      ['Horario',     '#horario'],
    ]],
    ['LEGAL', [
      ['Aviso legal', 'aviso-legal.html'],
      ['Privacidad',  'privacidad.html'],
      ['Cookies',     'cookies.html'],
    ]],
    ['SOCIAL', [
      ['@theapologym', 'https://instagram.com/theapologym'],
    ]],
  ];

  const resolveHref = href => {
    if (!href) return null;
    if (href.startsWith('#')) return `${linkPrefix}${href}`;
    return href;
  };

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
            <a href="tel:+34910945909" style={{ color:'var(--orange)', fontWeight: 700, letterSpacing:'0.06em' }}>910 945 909</a>
          </div>
          <div style={{ marginTop: 8, fontSize: 13.5, color:'var(--ink-mute)' }}>
            <a href="mailto:Apoloaranjuez@gmail.com" style={{ color:'var(--ink-mute)' }}>Apoloaranjuez@gmail.com</a>
          </div>
        </div>

        {blocks.map(([title, items]) => (
          <div key={title}>
            <div className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700, marginBottom: 16 }}>
              {title}
            </div>
            <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 10 }}>
              {items.map(([label, rawHref]) => {
                const href = resolveHref(rawHref);
                const external = href && href.startsWith('http');
                return (
                  <li key={label} style={{ fontSize: 13.5, color:'var(--ink-mute)' }}>
                    <a href={href}
                       {...(external ? { target: '_blank', rel: 'noopener' } : {})}
                       style={{ color:'inherit' }}>
                      {label}
                    </a>
                  </li>
                );
              })}
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

      {/* Credit */}
      <div style={{
        marginTop: 16, textAlign:'right',
      }}>
        <a href="https://ribersistemas.es/" target="_blank" rel="noopener" className="mono" style={{
          fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.22em',
        }}>
          DESARROLLADO POR <span style={{ color:'var(--orange)', fontWeight: 700 }}>RIBER SISTEMAS</span> →
        </a>
      </div>
    </footer>
  );
}
window.Footer = Footer;
