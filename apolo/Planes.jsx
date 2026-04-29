// Planes — pricing

function Planes() {
  const plans = [
    {
      tag:'01',
      name:'BASE',
      price:'50',
      period:'/MES',
      desc:'Acceso completo a las dos naves. Sin permanencia.',
      features:['Acceso 06—24h, 365 días','Las dos naves','Vestuarios + sauna','Sin matrícula'],
    },
    {
      tag:'02',
      name:'TEMPLO',
      price:'69',
      period:'/MES',
      desc:'Para quien viene a por algo concreto. Con seguimiento.',
      features:['Todo lo de BASE','Plan personalizado mensual','Revisión técnica con Marcos · 1×mes','Reserva de jaula olímpica','Análisis de composición corporal'],
      hi: true,
    },
    {
      tag:'03',
      name:'COMPETICIÓN',
      price:'129',
      period:'/MES',
      desc:'Preparación para competir. Powerlifting, culturismo o strongman.',
      features:['Todo lo de TEMPLO','Coaching semanal 1:1','Programación de competición','Pruebas técnicas · vídeo','Soporte nutricional'],
    },
  ];

  return (
    <section id="planes" style={{
      background:'var(--bg-2)', padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §05 — PLANES
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          SIN MATRÍCULA · SIN PERMANENCIA
        </span>
      </div>

      <h2 className="anton" style={{
        margin: 0, fontSize: 'clamp(44px, 11vw, 128px)', lineHeight: 0.9, letterSpacing:'-0.015em', textTransform:'uppercase',
        marginBottom: 80,
      }}>
        ELIGE TU<br />
        <span style={{ color:'var(--orange)' }}>NIVEL DE FUEGO.</span>
      </h2>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 18 }}>
        {plans.map(p => (
          <article key={p.tag} style={{
            background: p.hi ? 'var(--orange)' : 'var(--bg)',
            color: p.hi ? 'var(--bg)' : 'var(--ink)',
            border: p.hi ? 'none' : '1px solid var(--rule)',
            padding:'40px 36px 36px',
            position:'relative',
          }}>
            <div style={{
              display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 28,
            }}>
              <span className="mono" style={{
                fontSize: 10, letterSpacing:'0.28em', fontWeight: 700,
                color: p.hi ? 'var(--bg)' : 'var(--orange)',
              }}>PLAN {p.tag}</span>
              {p.hi && (
                <span className="mono" style={{
                  fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
                  background:'var(--bg)', color:'var(--orange)',
                  padding:'5px 9px',
                }}>★ ELEGIDO</span>
              )}
            </div>
            <div className="anton" style={{
              fontSize: 'clamp(40px, 10vw, 64px)', lineHeight: 1, letterSpacing:'-0.01em', textTransform:'uppercase',
            }}>{p.name}</div>

            <div style={{ display:'flex', alignItems:'baseline', gap: 6, marginTop: 22 }}>
              <span className="mono" style={{ fontSize: 16, fontWeight: 700, opacity: 0.7 }}>€</span>
              <span className="anton" style={{ fontSize: 'clamp(56px, 16vw, 96px)', lineHeight: 1, letterSpacing:'-0.02em' }}>{p.price}</span>
              <span className="mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing:'0.2em', opacity: 0.7 }}>{p.period}</span>
            </div>

            <p style={{
              fontSize: 13.5, lineHeight: 1.55, marginTop: 18,
              color: p.hi ? 'rgba(10,10,10,0.75)' : 'var(--ink-mute)',
            }}>{p.desc}</p>

            <ul style={{
              margin:'28px 0 0', padding:'24px 0 0', listStyle:'none',
              borderTop: p.hi ? '1px solid rgba(10,10,10,0.25)' : '1px solid var(--rule)',
              display:'flex', flexDirection:'column', gap: 12,
            }}>
              {p.features.map((f,i) => (
                <li key={i} style={{
                  display:'flex', alignItems:'flex-start', gap: 12,
                  fontSize: 13, lineHeight: 1.5,
                }}>
                  <span style={{
                    flexShrink: 0, marginTop: 6,
                    width: 6, height: 6,
                    background: p.hi ? 'var(--bg)' : 'var(--orange)',
                  }} />
                  {f}
                </li>
              ))}
            </ul>

            <button style={{
              marginTop: 36, width:'100%',
              background: p.hi ? 'var(--bg)' : 'transparent',
              color: p.hi ? 'var(--orange)' : 'var(--ink)',
              border: p.hi ? 'none' : '1px solid rgba(245,241,234,0.35)',
              padding:'18px 0',
              fontFamily:"'Archivo'", fontWeight: 900, fontSize: 12, letterSpacing:'0.22em',
              cursor:'pointer',
            }}>EMPEZAR →</button>
          </article>
        ))}
      </div>

      <div style={{
        marginTop: 32,
        textAlign:'center',
        fontSize: 12, color:'var(--ink-dim)', letterSpacing:'0.18em',
      }} className="mono">
        ¿DUDAS? · LLAMA AL +34 91 814 00 00 · O PÁSATE POR LA NAVE I, MARCOS RESUELVE
      </div>
    </section>
  );
}
window.Planes = Planes;
