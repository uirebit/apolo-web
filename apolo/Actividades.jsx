// Actividades — categoría paraguas: Pilates + Body Combat + Salsa + …

function Actividades() {
  const actividades = [
    {
      tag: '01',
      name: 'PILATES',
      instructor: 'LAURA DÍAZ',
      handle: '@PILATES_LAURADIAZ',
      img: 'apolo/img/pilates.jpg',
      desc: 'Sala dedicada con reformer y trapecio. Grupos reducidos para movilidad, control y prevención de lesiones. Sesión específica para embarazadas martes y jueves a las 12:00 H.',
      horario: [
        'L Y X · 17—21 H',
        'M Y J · 09—13 / 17—21 H',
        'PLAZAS EXTRA L Y V · 10—13 H',
      ],
    },
    {
      tag: '02',
      name: 'BODY COMBAT',
      instructor: 'POR CONFIRMAR',
      handle: null,
      img: null,
      desc: 'Entrenamiento de alta intensidad inspirado en artes marciales. Cardio, fuerza y técnica en una sola sesión.',
      horario: ['HORARIOS EN RECEPCIÓN'],
    },
    {
      tag: '03',
      name: 'SALSA',
      instructor: 'POR CONFIRMAR',
      handle: null,
      img: null,
      desc: 'Clases para todos los niveles. Ritmo, coordinación y comunidad sin necesidad de pareja.',
      horario: ['HORARIOS EN RECEPCIÓN'],
    },
  ];

  return (
    <section id="actividades" style={{
      background:'var(--bg-2)', padding:'140px 56px 140px',
      borderTop:'1px solid var(--rule)', position:'relative',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 64 }}>
        <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
          §05 — ACTIVIDADES
        </span>
        <span style={{ flex: 1, height: 1, background:'var(--rule)' }} />
        <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
          MÁS ALLÁ DEL HIERRO
        </span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'end', gap: 48, marginBottom: 80 }}>
        <h2 className="anton" style={{
          margin: 0, fontSize: 'clamp(42px, 10vw, 116px)', lineHeight: 0.9, letterSpacing:'-0.015em', textTransform:'uppercase',
        }}>
          EL OTRO LADO<br />
          <span style={{ color:'var(--orange)' }}>DE LA FUERZA.</span>
        </h2>
        <p style={{
          fontSize: 14.5, lineHeight: 1.65, color:'var(--ink-mute)',
          maxWidth: 360, margin: 0,
        }}>
          Movilidad, ritmo y comunidad. Las actividades dirigidas
          complementan la sala de fuerza con horarios cerrados y
          plazas limitadas.
        </p>
      </div>

      <div style={{
        display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 18,
      }}>
        {actividades.map(a => <ActividadCard key={a.tag} {...a} />)}
      </div>

      <div style={{
        marginTop: 48,
        textAlign:'center',
        fontSize: 12, color:'var(--ink-dim)', letterSpacing:'0.22em',
      }} className="mono">
        RESERVA DE PLAZA POR TELÉFONO · <a href="tel:+34910945909" style={{ color:'var(--orange)', fontWeight: 700, textDecoration:'none' }}>910 945 909</a>
      </div>
    </section>
  );
}

function ActividadCard({ tag, name, instructor, handle, img, desc, horario }) {
  return (
    <article style={{
      background:'var(--bg)', border:'1px solid var(--rule)',
      display:'flex', flexDirection:'column',
    }}>
      {/* Imagen o bloque amarillo si no hay foto aún */}
      <div style={{
        aspectRatio: '4/3',
        position:'relative',
        background: img ? 'var(--bg-2)' : 'var(--orange)',
        backgroundImage: img ? `url(${img})` : 'none',
        backgroundSize:'cover', backgroundPosition:'center',
      }}>
        {!img && (
          <div className="anton" style={{
            position:'absolute', inset: 0,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--bg)', fontSize: 'clamp(48px, 8vw, 88px)', letterSpacing:'-0.015em',
            textTransform:'uppercase', textAlign:'center', padding:'0 16px',
          }}>{name}</div>
        )}
        <span style={{
          position:'absolute', top: 16, left: 16,
          padding:'5px 9px',
          background: img ? 'var(--orange)' : 'var(--bg)',
          color: img ? 'var(--bg)' : 'var(--orange)',
          fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
        }}>{tag}</span>
      </div>

      <div style={{ padding:'28px 28px 28px', display:'flex', flexDirection:'column', flex: 1 }}>
        <h3 className="anton" style={{
          margin: 0, fontSize: 28, letterSpacing:'-0.005em', textTransform:'uppercase',
        }}>{name}</h3>

        <div className="mono" style={{
          fontSize: 10, color: instructor === 'POR CONFIRMAR' ? 'var(--ink-dim)' : 'var(--orange)',
          letterSpacing:'0.22em', fontWeight: 700, marginTop: 8,
        }}>
          {instructor}{handle && ` · ${handle}`}
        </div>

        <p style={{
          fontSize: 13.5, lineHeight: 1.55, color:'var(--ink-mute)', margin:'18px 0 0',
        }}>{desc}</p>

        <ul style={{
          listStyle:'none', padding: 0, margin:'24px 0 0',
          display:'flex', flexDirection:'column', gap: 8,
          borderTop:'1px solid var(--rule)', paddingTop: 18,
        }}>
          {horario.map((h, i) => (
            <li key={i} className="mono" style={{
              fontSize: 11.5, letterSpacing:'0.16em', fontWeight: 600,
              color: h === 'HORARIOS EN RECEPCIÓN' ? 'var(--ink-dim)' : 'var(--ink)',
            }}>
              {h === 'HORARIOS EN RECEPCIÓN' ? (
                <span style={{ fontStyle:'italic', fontWeight: 400 }}>{h}</span>
              ) : h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

window.Actividades = Actividades;
