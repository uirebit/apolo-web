// Landing — root composition

function ApoloLanding() {
  return (
    <div className="page">
      <Nav />
      <Hero headline="HIERRO. SUDOR. GLORIA." />
      <Marquee />
      <Maestro />
      <Naves />
      <Maquinas />
      <Pilates />
      <Planes />
      <Horario />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<ApoloLanding />);
