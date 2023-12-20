import { useState } from 'react';
import oopsImage from './assets/oops.jpg';

function App() {
  const [guiaEncontrada, setGuiaEncontrada] = useState(null);
  const [datosGuia, setDatosGuia] = useState();

  const handleSearch = async () => {
    const guiaInput = document.getElementById('guiaInput');
    const guiaValue = guiaInput.value.trim();

    if (guiaValue === '') {
      alert('Por favor, ingrese una guía compuesta por 11 caracteres.');
    } else {
      console.log('Realizando búsqueda para la guía:', guiaValue);
      try {
        const response = await fetch(`http://localhost:3000/api/v1/guia/${guiaValue}`);

        const data = await response.json();

        if (data.guia_encontrada) {
          console.log('Guía encontrada:', data.dato_guia);
          setGuiaEncontrada(true);
          setDatosGuia(data.dato_guia);
        } else {
          console.log('No se encontró información asociada a la guía.');
          setGuiaEncontrada(false);
        }
      } catch (error) {
        console.error('Error al buscar la guía:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <header>
        <img
          src="https://static.wixstatic.com/media/3e3f07_9d3c6586d31c490c951abec8090b1088~mv2.jpg/v1/crop/x_0,y_4,w_587,h_128/fill/w_558,h_122,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LOGO%203.jpg"
          alt="Logo"
          style={{ width: '250px' }}
        />
      </header>
      <nav>
        <span>Buscar Guía:</span>
        <input
          type="text"
          id="guiaInput"
          maxLength={11}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Buscar</button>
      </nav>

      {guiaEncontrada === null }
      {guiaEncontrada === false && (
        <div className="guia-no-encontrada">
          <img src={oopsImage} alt="Guía no encontrada" className="centered-image" />
        </div>
      )}


      {guiaEncontrada && (
        <>
         <section className="customer-data">
      <div className="customer-header">
        <h3>Datos del cliente</h3>
      </div>
      <div className="customer-info">
        <div className="data-entry">
          <label>Nit:</label>
          <span>{datosGuia?.cliente?.nit || 'N/A'}</span>
        </div>
        <div className="data-entry">
          <label>Razon Social:</label>
          <span>{datosGuia?.cliente?.razon_social || 'N/A'}</span>
        </div>
      </div>
    </section>


      <div className="customer-datas-container">
      <section className="customer-datas">
        <div className="customer-header">
          <h3>Datos del Remitente</h3>
        </div>
        <div className="data-info-container">
          <div className="data-info">
            <div className="data-entry">
              <label>Nit:</label>
              <span>{datosGuia?.remitente?.nit}</span>
            </div>
            <div className="data-entry">
              <label>Nombre:</label>
              <span>{datosGuia?.remitente?.nombre}</span>
            </div>
            <div className="data-entry">
              <label>Teléfono:</label>
              <span>{datosGuia?.remitente?.telefono}</span>
            </div>
            <div className="data-entry">
              <label>Dirección:</label>
              <span>{datosGuia?.remitente?.direccion}</span>
            </div>
            <div className="data-entry">
              <label>Ciudad:</label>
              <span>{datosGuia?.remitente?.ciudad}</span>
            </div>
          </div>
          <div className="data-aside">
            <div className="info-box">
              <div className="info-content">
                <h4>Equipo de Recogida</h4>
                {datosGuia?.remitente?.equipo && <span>{datosGuia?.remitente?.equipo}</span>}
        
              </div>
            </div>
            <div className="map-box">
            <h4>Ubicar Dirección en el Mapa</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-datas">
        <div className="customer-header">
          <h3>Datos del Destinatario</h3>
        </div>
        <div className="data-info-container">
          <div className="data-info">
            <div className="data-entry">
              <label>Nombre:</label>
              <span>Destinatario Nombre</span>
              <span>{datosGuia?.destinatario?.nombre || 'N/A'}</span>
            </div>
            <div className="data-entry">
              <label>Teléfono:</label>
              <span>{datosGuia?.destinatario?.telefono || 'N/A'}</span>
            </div>  
            <div className="data-entry">
              <label>Dirección:</label>
              <span>{datosGuia?.destinatario?.direccion}</span>
            </div>
            <div className="data-entry">
              <label>Ciudad:</label>
              <span>{datosGuia?.destinatario?.ciudad}</span>
            </div>
          </div>
          <div className="data-aside">
            <div className="info-box">
              <div className="info-content">
                <h4>Equipo de Entrega</h4>
                {datosGuia?.destinatario?.equipo && <span>{datosGuia?.destinatario?.equipo}</span>}
              </div>
            </div>
            <div className="map-box">
              <h4>Ubicar Dirección en el Mapa</h4>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="app-container">
  
  <section className="nav-bar">
    <h3>Unidades en la Guía</h3>
  </section>
  <section className="menu-nav">
    <ul>
      <li>Unidad: {datosGuia?.unidad?.id}</li>
      <li>Etiqueta 1D: {datosGuia?.unidad?.etiqueta1d}</li>
      <li>Etiqueta 2D: {datosGuia?.unidad?.etiqueta2d}</li>
      <li>Referencia: {datosGuia?.unidad?.referencia_detalle}</li>
      <li>F. Recogida: {datosGuia?.unidad?.fecha_hora_recogida || 'null'}</li>
      <li>F. Entrega: {datosGuia?.unidad?.fecha_hora_entrega || 'null'}</li>
      <li>Estado Tracking: {datosGuia?.ultimo_estado_tracking?.codigo} - {datosGuia?.ultimo_estado_tracking?.nombre}</li>

    </ul>
  </section>
  <div className="blank-space"></div>
</section>
    </>
      )}
    </div>
  )
}

export default App
