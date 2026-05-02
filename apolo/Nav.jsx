// Nav — sticky top bar (with real Apolo logo)
// linkPrefix: prepended to anchor links so the nav also works on subpages
//   ('' on home, 'index.html' on /maquinas.html etc.)
// activeHash: which section hash to highlight ('#inicio' by default)

function Nav({ linkPrefix = '', activeHash = '#inicio' }) {
  const links = [
    ['INICIO','#inicio'],
    ['NOSOTROS','#nosotros'],
    ['NAVES','#naves'],
    ['MÁQUINAS','#maquinas'],
    ['ACTIVIDADES','#actividades'],
    ['PLANES','#planes'],
    ['HORARIO','#horario'],
    ['CONTACTO','#contacto'],
  ];
  const mapsUrl = 'https://maps.google.com/?q=Calle+Gonzalo+Chac%C3%B3n+31+28300+Aranjuez';
  const homeHref = linkPrefix ? linkPrefix : '#inicio';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 56px',
      background: 'rgba(20,18,16,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--rule)',
    }}>
      <a href={homeHref} style={{ display:'flex', alignItems:'center', gap: 14, textDecoration:'none' }}>
        <img src="apolo/img/logo-real-clean.webp" width={48} height={48} alt="Apolo Gimnasio" style={{ display:'block', flexShrink: 0 }} />
        <div style={{ display:'flex', flexDirection:'column', lineHeight: 1 }}>
          <span className="anton" style={{ fontSize: 22, letterSpacing:'0.04em', color:'var(--ink)' }}>APOLO</span>
          <span className="mono nav-logo-sub" style={{ fontSize: 9, letterSpacing:'0.28em', color:'var(--ink-dim)', marginTop: 4 }}>
            GIMNASIO · POWERLIFTING
          </span>
        </div>
      </a>

      <nav className="nav-menu-desktop" style={{ display:'flex', gap: 28, fontSize: 11, fontWeight: 700, letterSpacing:'0.18em' }}>
        {links.map(([n,h]) => {
          const isActive = h === activeHash;
          return (
            <a key={n} href={`${linkPrefix}${h}`} style={{ color: isActive ? 'var(--orange)' : 'var(--ink)', position:'relative' }}>
              {n}
              {isActive && <span style={{ position:'absolute', left:0, bottom:-6, width:'100%', height:2, background:'var(--orange)' }} />}
            </a>
          );
        })}
      </nav>

      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <a href="tel:+34910945909" className="mono nav-tel" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.18em' }}>910 945 909</a>
        <a href={mapsUrl} target="_blank" rel="noopener" className="nav-cta" style={{
          background:'var(--orange)', color:'var(--bg)',
          padding:'12px 22px', fontWeight: 900, fontSize: 11, letterSpacing:'0.2em',
          cursor:'pointer', display:'inline-block', whiteSpace:'nowrap',
        }}>VEN A ENTRENAR →</a>
      </div>
    </header>
  );
}
window.Nav = Nav;
