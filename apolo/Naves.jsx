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
          §03 — LAS DOS NAVES
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
        DOS NAVES, UNA<br />
        <span style={{
          WebkitTextStroke:'2px var(--ink)', color:'transparent',
        }}>SOLA DISCIPLINA.</span>
      </h2>

      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24,
        marginTop: 80,
      }}>
        <NaveCard
          tag="NAVE I"
          year="1984"
          title="FUERZA & MÁQUINAS"
          area="900 M²"
          img="apolo/img/naves-rojo.jpg?v=2"
          features={[
            'Maquinaria selectorizada · roja · 80+ unidades',
            'Press banca · inclinado · declinado · 12 estaciones',
            'Jaulas olímpicas y power racks',
            'Mancuernas hexagonales hasta 70 kg',
            'Sala de pilates con reformer y trapecio',
          ]}
        />
        <NaveCard
          tag="NAVE II"
          year="2008"
          title="POWER & CARDIO"
          area="900 M²"
          img="apolo/img/zona-pierna.jpg?v=2"
          features={[
            'Zona específica de pierna · 20+ máquinas',
            'Cardio · cintas · elípticas · remos · stair · 30 unidades',
            'Plataformas de tiro y zona de strongman',
            'Vestuarios + duchas + servicios completos',
            'Tienda de suplementación en recepción',
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

function NaveCard({ tag, year, title, area, img, features }) {
  return (
    <article style={{
      background:'var(--bg)', border:'1px solid var(--rule)',
    }}>
      <div style={{
        aspectRatio: '16/10',
        backgroundImage:`url(${img})`,
        backgroundSize:'cover', backgroundPosition:'center',
        position:'relative',
      }}>
        <span style={{
          position:'absolute', top: 18, left: 18,
          padding:'6px 10px', background:'var(--orange)', color:'var(--bg)',
          fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
        }}>{tag} · {year}</span>
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
