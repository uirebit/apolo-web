// Catalogo — full machine catalog page (one photo per machine)
// Cards default to a yellow tile with the machine name when img is null;
// drop a photo path on `img` and the card becomes the photo automatically.

function Catalogo() {
  // Seed catalog. Replace `img: null` with a path under apolo/img/ when the
  // photo is available (e.g. img: 'apolo/img/maquinas/press-banca.jpg').
  const items = [
    // FUERZA — Nave I
    { cat:'FUERZA',     name:'Press banca olímpico',      img:null },
    { cat:'FUERZA',     name:'Press banca inclinado',     img:null },
    { cat:'FUERZA',     name:'Press banca declinado',     img:null },
    { cat:'FUERZA',     name:'Power rack olímpico',       img:null },
    { cat:'FUERZA',     name:'Jaula de sentadilla',       img:null },
    { cat:'FUERZA',     name:'Half rack',                 img:null },
    { cat:'FUERZA',     name:'Banco Scott',               img:null },
    { cat:'FUERZA',     name:'Banco plano libre',         img:null },

    // PIERNA — Nave II
    { cat:'PIERNA',     name:'Hack squat',                img:null },
    { cat:'PIERNA',     name:'Prensa 45º',                img:null },
    { cat:'PIERNA',     name:'Prensa horizontal',         img:null },
    { cat:'PIERNA',     name:'Leg curl tumbado',          img:null },
    { cat:'PIERNA',     name:'Leg curl sentado',          img:null },
    { cat:'PIERNA',     name:'Leg extension',             img:null },
    { cat:'PIERNA',     name:'Aductor / abductor',        img:null },
    { cat:'PIERNA',     name:'Gemelo de pie',             img:null },
    { cat:'PIERNA',     name:'Gemelo sentado',            img:null },
    { cat:'PIERNA',     name:'Plataforma de sentadilla',  img:null },

    // PECHO
    { cat:'PECHO',      name:'Pec deck',                  img:null },
    { cat:'PECHO',      name:'Press pecho selectorizado', img:null },
    { cat:'PECHO',      name:'Press inclinado convergente', img:null },

    // ESPALDA
    { cat:'ESPALDA',    name:'Pull-down vertical',        img:null },
    { cat:'ESPALDA',    name:'Remo en T',                 img:null },
    { cat:'ESPALDA',    name:'Remo selectorizado',        img:null },
    { cat:'ESPALDA',    name:'Pull-over selectorizado',   img:null },

    // HOMBRO & BRAZO
    { cat:'HOMBRO',     name:'Press hombro selectorizado', img:null },
    { cat:'HOMBRO',     name:'Elevación lateral máquina', img:null },
    { cat:'BRAZO',      name:'Curl bíceps Scott',         img:null },
    { cat:'BRAZO',      name:'Press francés máquina',     img:null },

    // POLEAS
    { cat:'POLEAS',     name:'Polea alta',                img:null },
    { cat:'POLEAS',     name:'Polea baja',                img:null },
    { cat:'POLEAS',     name:'Polea cruzada',             img:null },
    { cat:'POLEAS',     name:'Doble torre',               img:null },

    // CARDIO — Nave III
    { cat:'CARDIO',     name:'Cinta de correr',           img:null },
    { cat:'CARDIO',     name:'Elíptica Fittech',          img:null },
    { cat:'CARDIO',     name:'Bicicleta estática',        img:null },
    { cat:'CARDIO',     name:'Bicicleta de spinning',     img:null },
    { cat:'CARDIO',     name:'Stair climber',             img:null },
    { cat:'CARDIO',     name:'Remo Concept2',             img:null },
    { cat:'CARDIO',     name:'Assault bike',              img:null },

    // STRONGMAN
    { cat:'STRONGMAN',  name:'Atlas stones',              img:null },
    { cat:'STRONGMAN',  name:'Yugo de tronco',            img:null },
    { cat:'STRONGMAN',  name:'Trineo / prowler',          img:null },
    { cat:'STRONGMAN',  name:'Farmer walk',               img:null },
    { cat:'STRONGMAN',  name:'Neumáticos',                img:null },
  ];

  // Group by category preserving insertion order
  const byCategory = items.reduce((acc, it) => {
    if (!acc[it.cat]) acc[it.cat] = [];
    acc[it.cat].push(it);
    return acc;
  }, {});
  const categories = Object.keys(byCategory);

  return (
    <React.Fragment>
      {/* Header */}
      <section style={{ padding:'120px 56px 64px', borderTop:'1px solid var(--rule)' }}>
        <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 40, flexWrap:'wrap' }}>
          <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
            §09 — CATÁLOGO
          </span>
          <span style={{ flex: 1, height: 1, background:'var(--rule)', minWidth: 40 }} />
          <a href="index.html#maquinas" className="mono" style={{
            fontSize: 11, color:'var(--orange)', letterSpacing:'0.25em', fontWeight: 700,
          }}>
            ← VOLVER A MÁQUINAS
          </a>
        </div>

        <h1 className="anton" style={{
          margin: 0, fontSize:'clamp(48px, 12vw, 144px)', lineHeight: 0.9,
          letterSpacing:'-0.015em', textTransform:'uppercase',
        }}>
          CADA MÁQUINA,<br />
          <span style={{ color:'var(--orange)' }}>UNA POR UNA.</span>
        </h1>

        <p style={{
          marginTop: 32, maxWidth: 720,
          fontSize: 15.5, lineHeight: 1.6, color:'var(--ink-mute)',
        }}>
          El inventario completo del gimnasio, fotografiado pieza a pieza.
          Si no encuentras la máquina que buscas, pregunta en recepción
          —probablemente la tengamos.
        </p>

        {/* Quick category jump */}
        <div style={{
          marginTop: 40, display:'flex', flexWrap:'wrap', gap: 10,
        }}>
          {categories.map(cat => (
            <a key={cat} href={`#cat-${cat}`} className="mono" style={{
              padding:'10px 16px', border:'1px solid var(--rule)',
              fontSize: 11, letterSpacing:'0.22em', fontWeight: 700,
              color:'var(--ink-mute)',
            }}>
              {cat} · {String(byCategory[cat].length).padStart(2,'0')}
            </a>
          ))}
        </div>
      </section>

      {/* Grid by category */}
      <section style={{ padding:'0 56px 140px' }}>
        {categories.map(cat => (
          <div key={cat} id={`cat-${cat}`} style={{
            paddingTop: 80, scrollMarginTop: 88,
          }}>
            <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 28 }}>
              <h2 className="anton" style={{
                margin: 0, fontSize:'clamp(32px, 6vw, 64px)', letterSpacing:'-0.01em', textTransform:'uppercase',
              }}>
                {cat}
              </h2>
              <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
              <span className="mono" style={{
                fontSize: 11, color:'var(--ink-dim)', letterSpacing:'0.22em',
              }}>
                {String(byCategory[cat].length).padStart(2,'0')} REFERENCIAS
              </span>
            </div>
            <div className="catalog-grid">
              {byCategory[cat].map((it, i) => <MachineCard key={`${cat}-${i}`} {...it} />)}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

function MachineCard({ name, cat, img }) {
  return (
    <article style={{
      background:'var(--bg-2)', border:'1px solid var(--rule)',
      display:'flex', flexDirection:'column',
    }}>
      <div style={{
        aspectRatio: '3/4', position:'relative', overflow:'hidden',
        background: img ? 'var(--bg)' : 'var(--orange)',
        backgroundImage: img ? `url(${img})` : 'none',
        backgroundSize:'cover', backgroundPosition:'center',
      }}>
        {!img && (
          <div className="anton" style={{
            position:'absolute', inset: 0,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--bg)', fontSize:'clamp(18px, 2.4vw, 28px)', lineHeight: 1.05,
            textAlign:'center', padding:'0 14px', textTransform:'uppercase',
            letterSpacing:'-0.005em',
          }}>
            {name}
          </div>
        )}
        <span className="mono" style={{
          position:'absolute', top: 12, left: 12,
          padding:'5px 8px',
          background: img ? 'var(--orange)' : 'var(--bg)',
          color: img ? 'var(--bg)' : 'var(--orange)',
          fontSize: 9, letterSpacing:'0.22em', fontWeight: 700,
        }}>{cat}</span>
      </div>
      <div style={{ padding:'14px 16px 16px' }}>
        <div className="anton" style={{ fontSize: 17, letterSpacing:'-0.005em', textTransform:'uppercase' }}>
          {name}
        </div>
        <div className="mono" style={{
          fontSize: 9, color:'var(--ink-dim)', letterSpacing:'0.22em', marginTop: 4,
        }}>
          {cat}
        </div>
      </div>
    </article>
  );
}
window.Catalogo = Catalogo;
