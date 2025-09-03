import { useState } from 'react';
import './App.css';
import Appointments from './Appointments';
import Help from './Help';
import BookingFlow from './BookingFlow';

function App() {
  const [activeTab, setActiveTab] = useState('prenota');
  // Lo stato del flusso di prenotazione ora vive qui!
  const [bookingScreen, setBookingScreen] = useState('welcome');

  const goToBookingHome = () => {
    setBookingScreen('welcome');
  };

  const handlePrenotaClick = () => {
    setActiveTab('prenota');
    // Se l'utente clicca su "Prenota" da un'altra tab, lo riportiamo all'inizio
    goToBookingHome();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'prenota':
        // Passiamo lo stato e la funzione per cambiarlo a BookingFlow
        return <BookingFlow screen={bookingScreen} setScreen={setBookingScreen} />;
      case 'appuntamenti':
        return <Appointments />;
      case 'aiuto':
        return <Help />;
      default:
        return <BookingFlow screen={bookingScreen} setScreen={setBookingScreen} />;
    }
  };

  // Determiniamo se siamo nella home del flusso di prenotazione
  const isBookingHome = activeTab === 'prenota' && bookingScreen === 'welcome';

  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="Logo Salute Serena" className="header-logo" />
      </header>

      {renderContent()}

      <footer className="footer-nav">
        {isBookingHome ? (
          <div className={`nav-item ${activeTab === 'prenota' ? 'active' : ''}`} onClick={handlePrenotaClick}>
            <span>+</span>
            <p>Prenota</p>
          </div>
        ) : (
          <div className="nav-item cancel-nav-item" onClick={goToBookingHome}>
            <span>×</span>
            <p>Annulla</p>
          </div>
        )}
        
        <div className={`nav-item ${activeTab === 'appuntamenti' ? 'active' : ''}`} onClick={() => setActiveTab('appuntamenti')}>
          <span>📅</span>
          <p>I Miei Appuntamenti</p>
        </div>
        <div className={`nav-item ${activeTab === 'aiuto' ? 'active' : ''}`} onClick={() => setActiveTab('aiuto')}>
          <span>?</span>
          <p>Aiuto</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

