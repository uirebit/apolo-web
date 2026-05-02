// Manifiesto — pleno de transición con la frase pintada en el pasillo

function Manifiesto() {
  return (
    <section id="manifiesto" style={{
      position:'relative',
      borderTop:'1px solid var(--rule)',
      borderBottom:'1px solid var(--rule)',
      minHeight: 520,
      display:'flex', alignItems:'center', justifyContent:'center',
      overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset: 0,
        backgroundImage:'url(apolo/img/mural-mortal-apolo.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        filter:'brightness(0.45) contrast(1.05)',
      }} />
      <div style={{
        position:'absolute', inset: 0,
        background:'linear-gradient(180deg, rgba(20,18,16,0.55) 0%, rgba(20,18,16,0.25) 50%, rgba(20,18,16,0.7) 100%)',
      }} />

      <div style={{
        position:'relative', zIndex: 2, textAlign:'center',
        padding:'96px 32px', maxWidth: 1100,
      }}>
        <span className="mono" style={{
          fontSize: 11, color:'var(--orange)', letterSpacing:'0.32em', fontWeight: 700,
        }}>
          MANIFIESTO · DESDE 1985
        </span>
        <h2 className="anton" style={{
          margin:'24px 0 0', fontSize: 'clamp(40px, 9vw, 116px)', lineHeight: 0.95, letterSpacing:'-0.015em',
          textTransform:'uppercase', color:'var(--ink)',
        }}>
          ENTRA COMO UN MORTAL,<br />
          <span style={{ color:'var(--orange)' }}>SAL COMO APOLO.</span>
        </h2>
        <div className="cormorant" style={{
          marginTop: 28, fontSize: 18, fontStyle:'italic', color:'var(--ink-mute)', letterSpacing:'0.02em',
        }}>
          — pintado en el pasillo de la Nave I
        </div>
      </div>
    </section>
  );
}
window.Manifiesto = Manifiesto;
