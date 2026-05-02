// Nosotros — Chule y Fátima, dirección y entrenamiento personal

function Nosotros() {
  return (
    <section id="nosotros" style={{
      position:'relative', padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)',
    }}>
      {/* Section header */}
      <div style={{
        display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64,
      }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §02 — NOSOTROS
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          CHULE & FÁTIMA · DIRECCIÓN
        </span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'520px 1fr', gap: 80, alignItems:'start' }}>
        {/* Photo */}
        <div style={{ position:'relative' }}>
          <div style={{
            aspectRatio: '4/5',
            backgroundImage:'url(apolo/img/recepcion-nueva.jpg)',
            backgroundSize:'cover', backgroundPosition:'center 30%',
            filter:'grayscale(20%) contrast(1.1) brightness(0.95)',
            border:'1px solid var(--rule)',
          }} />
          {/* Plaque */}
          <div style={{
            position:'absolute', bottom: -28, left: 24, right: 24,
            background:'var(--bg)', border:'1px solid var(--orange)',
            padding:'18px 22px',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 9, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700 }}>
                FIG. 02 — RECEPCIÓN · NAVES POLÍGONO
              </div>
              <div className="anton" style={{ fontSize: 22, marginTop: 4, letterSpacing:'0.02em' }}>
                APOLO GIMNASIO
              </div>
            </div>
            <div className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.22em', textAlign:'right' }}>
              SAN ANTONIO → POLÍGONO<br />1985—2026
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="anton" style={{
            margin: 0, fontSize: 'clamp(40px, 10vw, 92px)', lineHeight: 0.92, letterSpacing:'-0.015em',
            textTransform:'uppercase',
          }}>
            CUARENTA Y UN AÑOS<br />
            <span style={{ color:'var(--orange)' }}>BAJO LA BARRA.</span>
          </h2>

          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap: 36, marginTop: 56,
          }}>
            <p style={{ fontSize: 15, lineHeight: 1.65, color:'var(--ink-mute)', margin: 0 }}>
              Chule abrió el primer Apolo en 1985, en la calle San Antonio
              de Aranjuez. Tres bancos olímpicos, una jaula de sentadillas
              hecha por un soldador de Ocaña y la persiana subida cada
              mañana. Cuarenta y un años después, sigue subiéndola.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color:'var(--ink-mute)', margin: 0 }}>
              En 2016 cruzó al polígono y abrió las tres naves que hay
              hoy: una entera para pierna, las otras dos para fuerza,
              cardio y máquinas. Lleva el gimnasio junto a su hija
              Fátima. Los dos entrenan, los dos compiten, y los dos
              cogen entrenamiento personalizado a quien lo pide.
            </p>
          </div>

          {/* Achievements grid */}
          <div style={{
            display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 0,
            marginTop: 64,
            border:'1px solid var(--rule)',
          }}>
            {[
              ['1985','SAN ANTONIO · ARANJUEZ'],
              ['2016','NAVES POLÍGONO'],
              ['41','AÑOS EN ARANJUEZ'],
              ['2','ENTRENADORES PERSONALES'],
            ].map(([n,l], i) => (
              <div key={i} style={{
                padding:'28px 24px',
                borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
              }}>
                <div className="anton" style={{ fontSize: 44, lineHeight: 1, color:'var(--ink)' }}>{n}</div>
                <div className="mono" style={{ fontSize: 9, color:'var(--ink-dim)', letterSpacing:'0.22em', marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote style={{
            margin:'56px 0 0', padding:'0 0 0 28px',
            borderLeft:'2px solid var(--orange)',
          }}>
            <p className="cormorant" style={{
              margin: 0, fontSize: 32, lineHeight: 1.25, fontStyle:'italic',
              color:'var(--ink)', fontWeight: 400,
            }}>
              «Aquí no hay milagros. Hay barras, hay tiempo, y hay alguien
              que te corrige cuando te equivocas. Eso es todo.»
            </p>
            <footer className="mono" style={{
              fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', marginTop: 18, fontWeight: 700,
            }}>— CHULE, DIRECCIÓN</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
window.Nosotros = Nosotros;
