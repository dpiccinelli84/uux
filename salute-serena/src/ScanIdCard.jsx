function ScanIdCard({ onScanComplete }) {
  return (
    <div className="main-content">
      <h2>Passo 1 di 4: Riconoscimento</h2>
      <p>Per iniziare, inquadra il codice a barre sul retro della tua tessera sanitaria.</p>
      {/* Questo pulsante simula il completamento della scansione */}
      <button className="start-button" onClick={onScanComplete}>
        Simula Scansione Tessera
      </button>
    </div>
  );
}

export default ScanIdCard;
