function SelectDateTime({ onSelectionComplete }) {
  return (
    <div className="main-content">
      <h2>Passo 3 di 4: Scegli quando</h2>
      <p>Stai prenotando: <strong>Visita Cardiologica</strong></p>
      {/* Qui andrebbe un calendario interattivo */}
      <p>[Calendario... per ora simuliamo la scelta]</p>
      <button className="start-button" onClick={onSelectionComplete}>
        Simula Scelta Data
      </button>
    </div>
  );
}

export default SelectDateTime;
