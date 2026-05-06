// ActividadesApp — root composition for actividades.html

function ActividadesPage() {
  return (
    <div className="page">
      <Nav linkPrefix="index.html" activeHash="#actividades" />
      <BackButton />
      <Actividades />
      <Footer linkPrefix="index.html" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('apolo-root')).render(<ActividadesPage />);
