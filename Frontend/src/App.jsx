function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://static.wixstatic.com/media/3e3f07_9d3c6586d31c490c951abec8090b1088~mv2.jpg/v1/crop/x_0,y_4,w_587,h_128/fill/w_558,h_122,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LOGO%203.jpg"
          alt="Logo"
          style={{ width: '250px'}}
        />
      </header>
      <nav>
        <span>Buscar Guía:</span>
        <input type="text" />
        <button>Buscar</button>
      </nav>

      
      <section className="customer-data">
        <div className="customer-header">
          <h3>Datos del cliente</h3>
        </div>
        <div className="customer-info">
          <div className="data-entry">
            <label>Nit:</label>
            <span>123456789</span>
          </div>
          <div className="data-entry">
            <label>Razon Social:</label>
            <span>Mi Empresa S.A.</span>
          </div>
        </div>
      </section>

      <section className="customer-data">
        <div className="customer-header">
          <h3>Datos del Remitente</h3>
        </div>
        <div className="data-info">
          <div className="data-entry">
            <label>Nit:</label>
            <span>987654321</span>
          </div>
          <div className="data-entry">
            <label>Nombre:</label>
            <span>Remitente Nombre</span>
          </div>
          <div className="data-entry">
            <label>Teléfono:</label>
            <span>555-1234</span>
          </div>
          <div className="data-entry">
            <label>Dirección:</label>
            <span>Dirección del Remitente</span>
          </div>
          <div className="data-entry">
            <label>Ciudad:</label>
            <span>Ciudad del Remitente</span>
          </div>
          <div className="info-box">
            <h4>Equipo de Recogida</h4>
            <span>Número: 30</span>
          </div>
          <div className="map-box">
            <h4>Ubicar Dirección en el Mapa</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
