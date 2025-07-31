function Summary({ onConfirm }) {
  return (
    <div className="main-content">
      <h2>Passo 4 di 4: Controlla e conferma</h2>
      <div style={{ textAlign: 'left', display: 'inline-block' }}>
        <p><strong>COSA:</strong> Visita Cardiologica</p>
        <p><strong>DOVE:</strong> Ospedale Bellaria, 2° piano</p>
        <p><strong>QUANDO:</strong> Martedì 25 Novembre, ore 10:30</p>
      </div>
      <button className="start-button" onClick={onConfirm} style={{backgroundColor: 'green', marginTop: '2rem'}}>
        CONFERMA LA PRENOTAZIONE
      </button>
    </div>
  );
}

export default Summary;
