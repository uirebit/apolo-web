// Legal — aviso legal · privacidad · cookies
// Una sola plantilla; el contenido se elige por la URL.
//
// Marcadores [PENDIENTE — ...] señalan datos que deben rellenarse antes de
// publicar (razón social, NIF, email de contacto, etc.). Buscar con:
//   grep -R "\[PENDIENTE" apolo/

const LEGAL_PAGES = {
  aviso: {
    kicker: '§10 — AVISO LEGAL',
    title: 'AVISO LEGAL.',
    intro: 'En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos identificativos del titular de esta web.',
    sections: [
      {
        h: '1. Titular del sitio web',
        body: (
          <React.Fragment>
            <ul className="legal-list">
              <li><strong>Razón social / Titular:</strong> [PENDIENTE — completar con razón social o nombre del autónomo]</li>
              <li><strong>NIF / CIF:</strong> [PENDIENTE]</li>
              <li><strong>Domicilio:</strong> C/ Gonzalo Chacón, 31 — 28300 Aranjuez (Madrid)</li>
              <li><strong>Teléfono:</strong> 910 945 909</li>
              <li><strong>Email:</strong> <a href="mailto:Apoloaranjuez@gmail.com">Apoloaranjuez@gmail.com</a></li>
              <li><strong>Datos registrales:</strong> [PENDIENTE — si la titularidad es una sociedad inscrita en el Registro Mercantil]</li>
              <li><strong>Actividad:</strong> explotación de gimnasio y centro de entrenamiento físico.</li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        h: '2. Objeto',
        body: <p>Esta web tiene carácter exclusivamente informativo. Su finalidad es presentar las instalaciones, horarios, tarifas y datos de contacto del gimnasio. No se realiza ninguna venta, contratación de servicios ni alta de socios a través del sitio.</p>,
      },
      {
        h: '3. Condiciones de uso',
        body: <p>El acceso a la web es libre y gratuito. El usuario se compromete a hacer un uso adecuado de los contenidos, no empleándolos para incurrir en actividades ilícitas, lesivas de derechos de terceros, o que de cualquier forma puedan dañar, inutilizar o sobrecargar el sitio.</p>,
      },
      {
        h: '4. Propiedad intelectual e industrial',
        body: <p>Todos los contenidos del sitio (textos, imágenes, fotografías, marcas, logotipos, diseño y código fuente) son propiedad del titular o se utilizan con la correspondiente autorización. Queda prohibida su reproducción total o parcial, distribución, comunicación pública o transformación sin consentimiento expreso por escrito.</p>,
      },
      {
        h: '5. Exclusión de responsabilidad',
        body: <p>El titular se reserva el derecho a modificar los contenidos y la estructura de la web sin previo aviso. No se responsabiliza de los daños y perjuicios que pudieran derivarse del uso de la información publicada, ni de los contenidos de los enlaces externos a sitios de terceros.</p>,
      },
      {
        h: '6. Legislación aplicable y jurisdicción',
        body: <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de esta web, las partes se someten a los Juzgados y Tribunales del domicilio del titular.</p>,
      },
    ],
  },

  privacidad: {
    kicker: '§11 — PRIVACIDAD',
    title: 'POLÍTICA DE PRIVACIDAD.',
    intro: 'En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa al usuario del tratamiento que se hace de los datos personales facilitados a través de esta web.',
    sections: [
      {
        h: '1. Responsable del tratamiento',
        body: (
          <React.Fragment>
            <ul className="legal-list">
              <li><strong>Razón social / Titular:</strong> [PENDIENTE]</li>
              <li><strong>NIF / CIF:</strong> [PENDIENTE]</li>
              <li><strong>Domicilio:</strong> C/ Gonzalo Chacón, 31 — 28300 Aranjuez (Madrid)</li>
              <li><strong>Email:</strong> <a href="mailto:Apoloaranjuez@gmail.com">Apoloaranjuez@gmail.com</a></li>
            </ul>
          </React.Fragment>
        ),
      },
      {
        h: '2. Datos que se recogen a través de esta web',
        body: <p>Esta web es informativa y no dispone actualmente de formularios, sistemas de registro, área privada ni envío de boletines. <strong>No se recogen datos personales a través del sitio</strong>. Los enlaces de teléfono, WhatsApp y correo electrónico abren las aplicaciones del propio dispositivo del usuario y no transmiten información a este servidor.</p>,
      },
      {
        h: '3. Tratamiento de las consultas',
        body: <p>Si el usuario contacta con el gimnasio mediante teléfono, WhatsApp o correo electrónico, los datos que facilite voluntariamente se utilizarán únicamente para atender su consulta. No se incorporarán a ningún fichero automatizado salvo que el usuario solicite expresamente recibir información comercial.</p>,
      },
      {
        h: '4. Base legal',
        body: <p>El tratamiento, en su caso, se basa en el consentimiento del usuario al iniciar el contacto (artículo 6.1.a RGPD) y en el interés legítimo del responsable para responder a la consulta planteada (artículo 6.1.f RGPD).</p>,
      },
      {
        h: '5. Plazo de conservación',
        body: <p>Los datos se conservarán el tiempo estrictamente necesario para atender la consulta. Una vez resuelta, se eliminarán salvo obligación legal de conservarlos durante un periodo superior.</p>,
      },
      {
        h: '6. Destinatarios',
        body: <p>No se ceden datos a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos.</p>,
      },
      {
        h: '7. Derechos del usuario',
        body: (
          <React.Fragment>
            <p>El usuario puede ejercer en cualquier momento los siguientes derechos enviando un correo a <strong><a href="mailto:Apoloaranjuez@gmail.com">Apoloaranjuez@gmail.com</a></strong> o por escrito a la dirección postal indicada, acompañando copia de un documento identificativo:</p>
            <ul className="legal-list">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión cuando ya no sean necesarios.</li>
              <li>Limitación del tratamiento.</li>
              <li>Oposición al tratamiento.</li>
              <li>Portabilidad de los datos.</li>
            </ul>
            <p>Si el usuario considera que el tratamiento de sus datos no se ajusta a la normativa, puede presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
          </React.Fragment>
        ),
      },
      {
        h: '8. Cambios en esta política',
        body: <p>Esta política podrá actualizarse para adaptarse a cambios normativos o a nuevas funcionalidades del sitio (formularios de contacto, mapas embebidos, herramientas de analítica). La fecha de última actualización aparece al inicio de esta página.</p>,
      },
    ],
  },

  cookies: {
    kicker: '§12 — COOKIES',
    title: 'POLÍTICA DE COOKIES.',
    intro: 'Se informa al usuario sobre el uso de cookies en esta web, en cumplimiento del artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE) y de las directrices de la Agencia Española de Protección de Datos.',
    sections: [
      {
        h: '1. Qué son las cookies',
        body: <p>Las cookies son pequeños archivos de texto que un sitio web guarda en el dispositivo del usuario cuando lo visita. Se utilizan para hacer funcionar la web, recordar preferencias o medir el uso del sitio.</p>,
      },
      {
        h: '2. Cookies que utiliza esta web',
        body: <p><strong>Esta web es estática e informativa y no instala cookies propias ni de terceros con finalidades analíticas, publicitarias o de seguimiento.</strong> Las únicas peticiones a servicios externos que se realizan son la carga de tipografías desde Google Fonts (<em>fonts.googleapis.com</em> / <em>fonts.gstatic.com</em>), que sirven los archivos de fuente sin instalar cookies en el navegador.</p>,
      },
      {
        h: '3. Cambios futuros',
        body: <p>Si en el futuro se incorporan servicios que sí instalen cookies — por ejemplo, un mapa de Google Maps embebido, una herramienta de analítica web (Google Analytics, Plausible, etc.) o un feed de redes sociales —, se actualizará esta página y se mostrará un banner de consentimiento la primera vez que el usuario acceda al sitio. No se instalarán cookies no estrictamente necesarias hasta que el usuario las acepte.</p>,
      },
      {
        h: '4. Cómo gestionar las cookies en tu navegador',
        body: (
          <React.Fragment>
            <p>El usuario puede configurar su navegador para bloquear o eliminar cookies de cualquier sitio web:</p>
            <ul className="legal-list">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
              <li><strong>Firefox:</strong> Ajustes → Privacidad y seguridad → Cookies y datos del sitio.</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio.</li>
            </ul>
          </React.Fragment>
        ),
      },
    ],
  },
};

function pickLegalKey() {
  const path = (window.location.pathname || '').toLowerCase();
  if (path.endsWith('privacidad.html')) return 'privacidad';
  if (path.endsWith('cookies.html'))    return 'cookies';
  return 'aviso';
}

function LegalPage() {
  const key  = pickLegalKey();
  const page = LEGAL_PAGES[key];

  return (
    <div className="page">
      <Nav linkPrefix="index.html" activeHash={null} />

      {/* Header */}
      <section style={{ padding:'120px 56px 56px', borderTop:'1px solid var(--rule)' }}>
        <div style={{ display:'flex', alignItems:'baseline', gap: 18, marginBottom: 40, flexWrap:'wrap' }}>
          <span className="mono" style={{ fontSize: 11, color:'var(--orange)', letterSpacing:'0.3em', fontWeight: 700 }}>
            {page.kicker}
          </span>
          <span style={{ flex: 1, height: 1, background:'var(--rule)', minWidth: 40 }} />
          <span className="mono" style={{ fontSize: 10, color:'var(--ink-dim)', letterSpacing:'0.25em' }}>
            ÚLTIMA ACTUALIZACIÓN · ABRIL 2026
          </span>
        </div>

        <h1 className="anton" style={{
          margin: 0, fontSize:'clamp(48px, 11vw, 128px)', lineHeight: 0.9,
          letterSpacing:'-0.015em', textTransform:'uppercase',
        }}>
          {page.title}
        </h1>

        <p style={{
          marginTop: 32, maxWidth: 760,
          fontSize: 15.5, lineHeight: 1.65, color:'var(--ink-mute)',
        }}>
          {page.intro}
        </p>
      </section>

      {/* Body */}
      <section style={{ padding:'0 56px 140px' }}>
        <div style={{ maxWidth: 760 }}>
          {page.sections.map((s, i) => (
            <div key={i} style={{ marginTop: i === 0 ? 24 : 56 }}>
              <h2 className="anton" style={{
                margin: 0, fontSize: 26, letterSpacing:'-0.005em', textTransform:'uppercase',
                color:'var(--ink)',
              }}>
                {s.h}
              </h2>
              <div className="legal-body" style={{
                marginTop: 16, fontSize: 15, lineHeight: 1.7, color:'var(--ink-mute)',
              }}>
                {s.body}
              </div>
            </div>
          ))}

          {/* Tail link back home */}
          <div style={{ marginTop: 80, paddingTop: 32, borderTop:'1px solid var(--rule)' }}>
            <a href="index.html" className="mono" style={{
              fontSize: 11, color:'var(--orange)', letterSpacing:'0.25em', fontWeight: 700,
            }}>
              ← VOLVER A INICIO
            </a>
          </div>
        </div>
      </section>

      <Footer linkPrefix="index.html" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<LegalPage />);
