// Naves — using real gym photos

function Naves() {
  return (
    <section id="naves" style={{
      background:'var(--bg-2)',
      padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)',
      position:'relative',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §03 — LAS TRES NAVES
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          GONZALO CHACÓN 31 · ARANJUEZ
        </span>
      </div>

      <h2 className="anton" style={{
        margin: 0, fontSize: 'clamp(44px, 11vw, 128px)', lineHeight: 0.9, letterSpacing:'-0.015em',
        textTransform:'uppercase', maxWidth: 1100,
      }}>
        TRES NAVES, UNA<br />
        <span style={{
          WebkitTextStroke:'2px var(--ink)', color:'transparent',
        }}>SOLA DISCIPLINA.</span>
      </h2>

      <div style={{
        display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24,
        marginTop: 80,
      }}>
        <NaveCard
          tag="NAVE I"
          year="FUERZA"
          title="FUERZA & MÁQUINAS"
          area="700 M²"
          imgs={[
            'apolo/img/nave-mancuernas.jpg',
            'apolo/img/naves-rojo.jpg',
          ]}
          features={[
            'Barras olímpicas y power racks',
            'Mancuernas hexagonales hasta 70 kg',
            'Press banca · inclinado · declinado',
            'Maquinaria selectorizada · 80+ unidades',
            'Recepción y tienda de suplementación',
          ]}
        />
        <NaveCard
          tag="NAVE II"
          year="PIERNA"
          title="100% PIERNA"
          area="500 M²"
          imgs={[
            'apolo/img/zona-pierna.jpg',
          ]}
          features={[
            'Nave entera dedicada al tren inferior',
            'Hack squat · prensa · leg press 45º',
            'Leg curl · leg extension · aductor / abductor',
            'Sentadilla búlgara y trabajo unilateral',
            'Plataformas para sentadilla libre',
          ]}
        />
        <NaveCard
          tag="NAVE III"
          year="CARDIO"
          title="CARDIO & DEFINICIÓN"
          area="600 M²"
          imgs={[
            'apolo/img/cardio.jpg',
            'apolo/img/nave-panoramica.jpg',
          ]}
          features={[
            'Cintas · elípticas · remos · stair · bicicletas',
            'Máquinas de aislamiento y cable',
            'Zona de strongman y plataformas de tiro',
            'Sala de pilates con reformer y trapecio',
            'Vestuarios + duchas + servicios completos',
          ]}
        />
      </div>

      {/* Address strip */}
      <div style={{
        marginTop: 56,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'24px 28px',
        background:'var(--bg)',
        border:'1px solid var(--rule)',
      }}>
        <div className="mono" style={{ fontSize: 11, color:'var(--ink-mute)', letterSpacing:'0.25em' }}>
          C/ GONZALO CHACÓN, 31 · 28300 — ARANJUEZ · MADRID
        </div>
        <a className="mono"
          href="https://maps.google.com/?q=Calle+Gonzalo+Chac%C3%B3n+31+28300+Aranjuez"
          target="_blank" rel="noopener"
          style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.25em', fontWeight: 700 }}>
          ABRIR EN GOOGLE MAPS →
        </a>
      </div>
    </section>
  );
}

function NaveCard({ tag, year, title, area, imgs, features }) {
  const total = imgs.length;
  const [idx, setIdx] = React.useState(0);
  const startX = React.useRef(0);
  const next = () => setIdx(i => (i + 1) % total);
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const onTouchStart = e => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  const arrowStyle = {
    position:'absolute', top:'50%', transform:'translateY(-50%)', zIndex: 3,
    width: 40, height: 40,
    border:'1px solid rgba(245,241,234,0.45)',
    background:'rgba(20,18,16,0.55)', color:'var(--ink)',
    fontFamily:"'Anton', sans-serif", fontSize: 22, lineHeight: 1, cursor:'pointer',
    display:'flex', alignItems:'center', justifyContent:'center',
    backdropFilter:'blur(4px)',
  };

  return (
    <article style={{
      background:'var(--bg)', border:'1px solid var(--rule)',
    }}>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{
        aspectRatio: '16/10',
        position:'relative',
        overflow:'hidden',
        background:'var(--bg-2)',
      }}>
        {imgs.map((img, i) => (
          <div key={img} style={{
            position:'absolute', inset: 0,
            backgroundImage:`url(${img})`,
            backgroundSize:'cover', backgroundPosition:'center',
            opacity: i === idx ? 1 : 0,
            transition:'opacity 0.5s ease',
          }} />
        ))}

        <span style={{
          position:'absolute', top: 18, left: 18, zIndex: 2,
          padding:'6px 10px', background:'var(--orange)', color:'var(--bg)',
          fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
        }}>{tag} · {year}</span>

        <span style={{
          position:'absolute', top: 18, right: 18, zIndex: 2,
          padding:'6px 10px', background:'rgba(20,18,16,0.55)', color:'var(--ink)',
          fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
          backdropFilter:'blur(4px)',
        }}>{String(idx+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>

        {total > 1 && (
          <React.Fragment>
            <button onClick={prev} aria-label="Foto anterior" style={{ ...arrowStyle, left: 14 }}>‹</button>
            <button onClick={next} aria-label="Foto siguiente" style={{ ...arrowStyle, right: 14 }}>›</button>
            <div style={{
              position:'absolute', bottom: 14, left: 0, right: 0, zIndex: 3,
              display:'flex', justifyContent:'center', gap: 6,
            }}>
              {imgs.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Foto ${i+1}`} style={{
                  width: i === idx ? 28 : 8, height: 4, padding: 0, border:'none',
                  background: i === idx ? 'var(--orange)' : 'rgba(245,241,234,0.45)',
                  cursor:'pointer', transition:'all 0.3s ease',
                }} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
      <div style={{ padding:'30px 32px 32px' }}>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
          <h3 className="anton" style={{
            margin: 0, fontSize: 36, letterSpacing:'-0.005em', textTransform:'uppercase',
          }}>{title}</h3>
          <span className="mono" style={{ fontSize: 11, color:'var(--ink-dim)', letterSpacing:'0.22em' }}>{area}</span>
        </div>
        <ul style={{
          margin:'24px 0 0', padding: 0, listStyle:'none',
          display:'flex', flexDirection:'column', gap: 10,
        }}>
          {features.map((f,i) => (
            <li key={i} style={{
              display:'flex', alignItems:'center', gap: 12,
              fontSize: 13.5, color:'var(--ink-mute)',
              padding:'10px 0', borderBottom:'1px solid var(--rule)',
            }}>
              <span style={{ width: 6, height: 6, background:'var(--orange)' }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
window.Naves = Naves;
