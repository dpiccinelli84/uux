function Confirmation({ onFinish }) {
  return (
    <div className="main-content">
      <span style={{ fontSize: '5rem' }}>✔</span>
      <h2>Fatto! La tua visita è confermata.</h2>
      <p>Troverai un riepilogo nella sezione 'I Miei Appuntamenti'.</p>
      <button className="start-button" onClick={onFinish}>
        TORNA ALLA HOME
      </button>
    </div>
  );
}

export default Confirmation;
