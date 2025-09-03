import React from 'react';

function Appointments() {
  // Simula uno stato per l'appuntamento, per poterlo "cancellare"
  const [appointmentVisible, setAppointmentVisible] = React.useState(true);

  const handleCancel = () => {
    // Aggiungiamo una finta conferma per sicurezza
    if (window.confirm("Sei sicuro di voler annullare questa visita?")) {
      setAppointmentVisible(false);
    }
  };

  return (
    <div className="main-content">
      <h2>I Miei Appuntamenti</h2>
      <p>Qui vedrai l'elenco delle tue visite prenotate.</p>

      {appointmentVisible ? (
        <div className="appointment-card">
          <p><strong>Visita Cardiologica</strong></p>
          <p>Martedì 25 Novembre, ore 10:30</p>
          <p>Ospedale Bellaria, 2° piano</p>
          <button className="cancel-visit-button" onClick={handleCancel}>
            Annulla Visita
          </button>
        </div>
      ) : (
        <p>Nessun appuntamento in programma.</p>
      )}
    </div>
  );
}

export default Appointments;
