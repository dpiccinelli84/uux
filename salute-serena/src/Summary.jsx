function Summary({ onConfirm, onBack }) {
  return (
    <div className="main-content">
      <h2>Passo 4 di 4: Controlla e conferma</h2>

      <div className="summary-container">
        <div className="summary-block">
          <span className="summary-icon">🩺</span>
          <span>Visita Cardiologica</span>
        </div>
        <div className="summary-block">
          <span className="summary-icon">📅</span>
          <span>Martedì 25 Novembre</span>
        </div>
        <div className="summary-block">
          <span className="summary-icon">⏰</span>
          <span>Ore 10:30</span>
        </div>
        <div className="summary-block">
          <span className="summary-icon">📍</span>
          <span>Ospedale Bellaria, Edificio A, 2° piano</span>
        </div>
      </div>

      <button className="confirm-button" onClick={onConfirm}>
        CONFERMA LA PRENOTAZIONE
      </button>
      <button className="back-button" onClick={onBack}>
        Indietro, voglio modificare
      </button>
    </div>
  );
}

export default Summary;
