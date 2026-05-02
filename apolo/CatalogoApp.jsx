// CatalogoApp — root composition for maquinas.html

function CatalogoPage() {
  return (
    <div className="page">
      <Nav linkPrefix="index.html" activeHash="#maquinas" />
      <Catalogo />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<CatalogoPage />);
