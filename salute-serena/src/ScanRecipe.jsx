function ScanRecipe({ onScanComplete }) {
  return (
    <div className="main-content">
      <h2>Passo 2 di 4: La tua ricetta</h2>
      <p>Ciao Franco!</p>
      <p>Ora inquadra il codice a barre sulla ricetta del medico.</p>
      <button className="start-button" onClick={onScanComplete}>
        Simula Scansione Ricetta
      </button>
    </div>
  );
}

export default ScanRecipe;
