// Actividades — categoría paraguas: Pilates + Body Combat + Salsa + …

function Actividades() {
  const actividades = [
    {
      tag: '01',
      name: 'PILATES',
      instructor: 'LAURA DÍAZ',
      handle: '@PILATES_LAURADIAZ',
      imgs: [
        'apolo/img/pilates/sala-pilates-1.webp',
        'apolo/img/pilates/sala-pilates-2.webp',
        'apolo/img/pilates/sala-pilates-3.webp',
      ],
      desc: 'Sala dedicada con reformer y trapecio. Grupos reducidos para movilidad, control y prevención de lesiones. Sesión específica para embarazadas martes y jueves a las 12:00 H.',
      horario: [
        'L Y X · 17—21 H',
        'M Y J · 09—13 / 17—21 H',
        'PLAZAS EXTRA L Y V · 10—13 H',
      ],
    },
    {
      tag: '02',
      name: 'SALSA',
      instructor: 'POR CONFIRMAR',
      handle: null,
      imgs: [],
      desc: 'Clases para todos los niveles. Ritmo, coordinación y comunidad sin necesidad de pareja.',
      horario: ['HORARIOS EN RECEPCIÓN'],
    },
    {
      tag: '03',
      name: 'POLE DANCE',
      instructor: 'NATALIA GÁRATE',
      handle: '@COCOSTUDIODANCE',
      handleUrl: 'https://www.instagram.com/cocostudiodance/',
      web: 'https://cocodance.es/',
      imgs: [
        'apolo/img/poledance/pole_dance_card.webp',
      ],
      desc: 'Pole dance, exotic y acrobático en colaboración con el estudio Coco Dance. Fuerza, flexibilidad y creatividad sobre la barra.',
      horario: ['HORARIOS EN COCODANCE.ES'],
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

      <div className="actividades-grid" style={{
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

function ActividadCard({ tag, name, instructor, handle, handleUrl, web, imgs, desc, horario }) {
  const total = (imgs && imgs.length) || 0;
  const hasImg = total > 0;
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
    width: 36, height: 36,
    border:'1px solid rgba(245,241,234,0.45)',
    background:'rgba(20,18,16,0.55)', color:'var(--ink)',
    fontFamily:"'Anton', sans-serif", fontSize: 20, lineHeight: 1, cursor:'pointer',
    display:'flex', alignItems:'center', justifyContent:'center',
    backdropFilter:'blur(4px)',
  };

  return (
    <article style={{
      background:'var(--bg)', border:'1px solid var(--rule)',
      display:'flex', flexDirection:'column',
    }}>
      {/* Imagen / carrusel o bloque amarillo si no hay fotos aún */}
      <div onTouchStart={hasImg ? onTouchStart : undefined} onTouchEnd={hasImg ? onTouchEnd : undefined} style={{
        aspectRatio: '4/3',
        position:'relative',
        overflow:'hidden',
        background: hasImg ? 'var(--bg-2)' : 'var(--orange)',
      }}>
        {hasImg && imgs.map((src, i) => (
          <div key={src} style={{
            position:'absolute', inset: 0,
            backgroundImage:`url(${src})`,
            backgroundSize:'cover', backgroundPosition:'center',
            opacity: i === idx ? 1 : 0,
            transition:'opacity 0.5s ease',
          }} />
        ))}
        {!hasImg && (
          <div className="anton" style={{
            position:'absolute', inset: 0,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--bg)', fontSize: 'clamp(48px, 8vw, 88px)', letterSpacing:'-0.015em',
            textTransform:'uppercase', textAlign:'center', padding:'0 16px',
          }}>{name}</div>
        )}
        <span style={{
          position:'absolute', top: 16, left: 16, zIndex: 2,
          padding:'5px 9px',
          background: hasImg ? 'var(--orange)' : 'var(--bg)',
          color: hasImg ? 'var(--bg)' : 'var(--orange)',
          fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
        }}>{tag}</span>

        {total > 1 && (
          <React.Fragment>
            <span style={{
              position:'absolute', top: 16, right: 16, zIndex: 2,
              padding:'5px 9px', background:'rgba(20,18,16,0.55)', color:'var(--ink)',
              fontFamily:"'JetBrains Mono', monospace", fontSize: 10, letterSpacing:'0.22em', fontWeight: 700,
              backdropFilter:'blur(4px)',
            }}>{String(idx+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
            <button onClick={prev} aria-label="Foto anterior" style={{ ...arrowStyle, left: 12 }}>‹</button>
            <button onClick={next} aria-label="Foto siguiente" style={{ ...arrowStyle, right: 12 }}>›</button>
            <div style={{
              position:'absolute', bottom: 12, left: 0, right: 0, zIndex: 3,
              display:'flex', justifyContent:'center', gap: 6,
            }}>
              {imgs.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Foto ${i+1}`} style={{
                  width: i === idx ? 24 : 8, height: 4, padding: 0, border:'none',
                  background: i === idx ? 'var(--orange)' : 'rgba(245,241,234,0.45)',
                  cursor:'pointer', transition:'all 0.3s ease',
                }} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>

      <div style={{ padding:'28px 28px 28px', display:'flex', flexDirection:'column', flex: 1 }}>
        <h3 className="anton" style={{
          margin: 0, fontSize: 28, letterSpacing:'-0.005em', textTransform:'uppercase',
        }}>{name}</h3>

        <div className="mono" style={{
          fontSize: 10, color: instructor === 'POR CONFIRMAR' ? 'var(--ink-dim)' : 'var(--orange)',
          letterSpacing:'0.22em', fontWeight: 700, marginTop: 8,
        }}>
          {instructor}
          {handle && ' · '}
          {handle && (handleUrl ? (
            <a href={handleUrl} target="_blank" rel="noopener noreferrer" style={{ color:'inherit', textDecoration:'underline' }}>{handle}</a>
          ) : handle)}
        </div>

        <p style={{
          fontSize: 13.5, lineHeight: 1.55, color:'var(--ink-mute)', margin:'18px 0 0',
        }}>{desc}</p>

        <ul style={{
          listStyle:'none', padding: 0, margin:'24px 0 0',
          display:'flex', flexDirection:'column', gap: 8,
          borderTop:'1px solid var(--rule)', paddingTop: 18,
        }}>
          {horario.map((h, i) => {
            const isPlaceholder = h === 'HORARIOS EN RECEPCIÓN';
            const isWebLink = web && h.startsWith('HORARIOS EN ') && !isPlaceholder;
            return (
              <li key={i} className="mono" style={{
                fontSize: 11.5, letterSpacing:'0.16em', fontWeight: 600,
                color: isPlaceholder ? 'var(--ink-dim)' : 'var(--ink)',
              }}>
                {isPlaceholder ? (
                  <span style={{ fontStyle:'italic', fontWeight: 400 }}>{h}</span>
                ) : isWebLink ? (
                  <a href={web} target="_blank" rel="noopener noreferrer" style={{ color:'var(--orange)', textDecoration:'underline' }}>{h} ↗</a>
                ) : h}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

window.Actividades = Actividades;
