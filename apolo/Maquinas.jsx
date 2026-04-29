// Maquinas — equipment grid

function Maquinas() {
  const cats = [
    { tag:'A', name:'BARRAS LIBRES', count: 24, items:'Olímpicas · powerlifting · safety squat · trap bar · log · axle' },
    { tag:'B', name:'JAULAS & PLATAFORMAS', count: 16, items:'Jaulas olímpicas · half racks · plataformas de tiro · monolift' },
    { tag:'C', name:'MANCUERNAS', count: 40, items:'Hexagonales 2.5 → 70 kg · pares dobles en pesos clave' },
    { tag:'D', name:'MÁQUINAS DE FUERZA', count: 32, items:'Hammer Strength · Atlantis · Cybex · placa cargada selectorizada' },
    { tag:'E', name:'POLEAS & CABLES', count: 18, items:'Polea alta · baja · cruzada · pull-down · doble torre' },
    { tag:'F', name:'CARDIO', count: 30, items:'Cintas · elípticas · remos · bicicletas · stair · assault' },
    { tag:'G', name:'STRONGMAN', count: 12, items:'Yugo · atlas stones · farmer walk · prowler · sled · neumáticos' },
    { tag:'H', name:'ESTIRAMIENTO', count: 8, items:'Esterillas · foam rollers · bandas · TRX · sala calefactada' },
  ];
  const total = cats.reduce((s,c) => s + c.count, 0);

  return (
    <section id="maquinas" style={{ padding:'140px 56px 140px', borderTop:'1px solid var(--rule)' }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §04 — INVENTARIO
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          ACTUALIZADO 04·26
        </span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', gap: 48, marginBottom: 80 }}>
        <h2 className="anton" style={{
          margin: 0, fontSize: 128, lineHeight: 0.9, letterSpacing:'-0.015em', textTransform:'uppercase',
        }}>
          {total}<span style={{ color:'var(--orange)' }}>+</span> MÁQUINAS,<br />
          CERO EXCUSAS.
        </h2>
        <p style={{
          fontSize: 14.5, lineHeight: 1.65, color:'var(--ink-mute)',
          maxWidth: 360, margin: 0,
        }}>
          Inventario completo a fecha de hoy. Cada máquina tiene mantenimiento
          mensual y se sustituye cuando deja de cumplir.
        </p>
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
        border:'1px solid var(--rule)',
      }}>
        {cats.map((c, i) => (
          <div key={c.tag} style={{
            padding:'32px 28px',
            borderRight: (i+1) % 4 === 0 ? 'none' : '1px solid var(--rule)',
            borderTop: i >= 4 ? '1px solid var(--rule)' : 'none',
            position:'relative',
            transition:'background .2s',
          }}>
            <div style={{
              display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 18,
            }}>
              <span className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700 }}>
                CAT. {c.tag}
              </span>
              <span className="anton" style={{ fontSize: 28, color:'var(--ink)', lineHeight: 1 }}>
                {String(c.count).padStart(2,'0')}
              </span>
            </div>
            <div className="anton" style={{ fontSize: 22, letterSpacing:'-0.005em', textTransform:'uppercase', marginBottom: 12 }}>
              {c.name}
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.55, color:'var(--ink-dim)' }}>
              {c.items}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Maquinas = Maquinas;
