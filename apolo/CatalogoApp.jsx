// CatalogoApp — root composition for maquinas.html

function CatalogoPage() {
  return (
    <div className="page">
      <Nav linkPrefix="index.html" activeHash="#maquinas" />
      <BackButton />
      <Catalogo />
      <Footer linkPrefix="index.html" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<CatalogoPage />);
