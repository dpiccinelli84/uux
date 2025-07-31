function Appointments() {
  return (
    <div className="main-content">
      <h2>I Miei Appuntamenti</h2>
      <p>Qui vedrai l'elenco delle tue visite prenotate.</p>
      {/* Esempio di appuntamento futuro */}
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginTop: '1rem', textAlign: 'left' }}>
        <p><strong>Visita Cardiologica</strong></p>
        <p>Martedì 25 Novembre, ore 10:30</p>
        <p>Ospedale Bellaria, 2° piano</p>
      </div>
    </div>
  );
}

export default Appointments;
