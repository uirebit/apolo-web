// Landing — root composition

function ApoloLanding() {
  return (
    <div className="page">
      <Nav />
      <Hero headline="HIERRO. SUDOR. GLORIA." />
      <Marquee />
      <Manifiesto />
      <Nosotros />
      <Naves />
      <Maquinas />
      <ActividadesTeaser />
      <Planes />
      <Horario />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<ApoloLanding />);
