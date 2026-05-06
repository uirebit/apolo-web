// Marquee — orange ticker bar between sections

function Marquee() {
  const items = [
    'FUERZA','◉','HIPERTROFIA','◉','POWERLIFTING','◉','STRONGMAN','◉','CULTURISMO','◉','CARDIO','◉','ROCOSO',
    '◉','41 AÑOS','◉','180+ MÁQUINAS','◉','90% NAUTILUS','◉','TRES NAVES','◉','SUR DE MADRID',
  ];
  const row = [...items, ...items];
  return (
    <div style={{
      background:'var(--orange)', color:'var(--bg)',
      borderTop:'1px solid var(--bg)', borderBottom:'1px solid var(--bg)',
      padding:'18px 0', overflow:'hidden',
    }}>
      <div className="marquee-track">
        {row.map((t,i) => (
          <span key={i} className="anton" style={{
            fontSize: 28, letterSpacing: '0.1em', textTransform:'uppercase',
            display:'inline-block',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
