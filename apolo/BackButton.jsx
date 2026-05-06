// BackButton — yellow link back to the landing page, used on subpages.

function BackButton({ href = 'index.html', label = 'VOLVER A LA PORTADA' }) {
  return (
    <div style={{ padding:'32px 56px 0' }}>
      <a href={href} className="mono" style={{
        display:'inline-flex', alignItems:'center', gap: 10,
        background:'var(--orange)', color:'var(--bg)',
        padding:'12px 20px',
        fontSize: 11, fontWeight: 900, letterSpacing:'0.22em',
        textDecoration:'none', whiteSpace:'nowrap',
      }}>
        ← {label}
      </a>
    </div>
  );
}

window.BackButton = BackButton;
