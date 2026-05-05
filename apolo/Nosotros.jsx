// Nosotros — Chule y Fátima, dirección y entrenamiento personal

function Nosotros() {
  // ─────────────────────────────────────────────────────────
  // PENDIENTES DE CONFIRMAR CON FÁTIMA — actualizar copy:
  //
  //  · Apellido de Apolonio (¿se puede publicar?)
  //  · Salvador Ruiz, competidor internacional amigo de Apolonio:
  //    ¿se menciona en la web?
  //  · Federación y categoría de las competiciones de Chule
  //    (39/40/41 años · 3º y 4º Madrid-Castilla · finalista nacional)
  //  · Lugar exacto del campeonato nacional (sonó "nanuncia" en audio)
  //  · Federación de powerlifting de Fátima
  //  · Categoría oficial exacta (¿-44 kg? ¿-47 kg pesando 44?)
  //  · ¿"Top 3" del récord se refiere a nacional? Aclarar
  //  · ¿El récord sigue vigente o lo han batido?
  //  · Año exacto de la competición de Fátima (~2019, antes COVID)
  //  · Año de fundación del Club de Piragüismo de Aranjuez
  //  · Alcance del "primer gimnasio con maquinaria específica":
  //    ¿Aranjuez, sur de Madrid, España? Por ahora omitido del copy.
  //  · Nombres concretos o cifra de competidores formados en Apolo
  //  · Socios históricos disponibles para testimonio (nombre/foto)
  //  · ¿Confirmar el detalle de "tres bancos olímpicos" del primer
  //    local? El brief lo decía pero Fátima no lo ha confirmado.
  // ─────────────────────────────────────────────────────────
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
              Chule abrió el primer Apolo en mayo de 1985, en la calle
              San Antonio 120 de Aranjuez. Tenía 27 años y llevaba
              entrenando desde los doce. Antes había sido cofundador del
              Club de Piragüismo de Aranjuez. La maquinaria de
              musculación de aquella primera sala la hizo a mano un
              herrero del pueblo. El nombre lo eligió en honor a
              Apolonio, federativo del fisicoculturismo español con
              quien tramitó la primera licencia del gimnasio.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color:'var(--ink-mute)', margin: 0 }}>
              En agosto de 2015 cerró San Antonio y cruzó al polígono.
              Las tres naves abrieron a la vez: una entera para pierna,
              las otras dos para fuerza, cardio y máquinas. Lo lleva
              junto a su hija Fátima, que entró a trabajar hace quince
              años y se crió dentro. Los dos compitieron — culturismo
              él, powerlifting ella — y los dos cogen entrenamiento
              personalizado a quien lo pide. De las naves han salido
              competidores propios y por aquí han pasado a entrenar
              otros tantos.
            </p>
          </div>

          {/* Achievements grid */}
          <div style={{
            display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 0,
            marginTop: 64,
            border:'1px solid var(--rule)',
          }}>
            {[
              ['1985','SAN ANTONIO · 120'],
              ['2015','TRES NAVES POLÍGONO'],
              ['41','AÑOS EN ARANJUEZ'],
              ['130/44','PESO MUERTO · BW · KG'],
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

          {/* Récord destacado · Fátima */}
          <div style={{
            marginTop: 40, padding:'24px 28px',
            background:'var(--bg-2)',
            borderTop:'2px solid var(--orange)',
            display:'grid', gridTemplateColumns:'auto 1fr', gap: 32, alignItems:'center',
          }}>
            <div className="anton" style={{ fontSize: 56, lineHeight: 1, color:'var(--orange)' }}>
              130 / 44
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color:'var(--orange)', letterSpacing:'0.28em', fontWeight: 700 }}>
                RÉCORD POWERLIFTING
              </div>
              <div style={{ fontSize: 14, color:'var(--ink-mute)', marginTop: 8 }}>
                Fátima — 2ª de Madrid, peso muerto 130 kg en categoría
                44 kg de peso corporal. Récord federativo. Las copas de
                la recepción son suyas.
              </div>
            </div>
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
