import { useState } from 'react';
import './App.css';
import Appointments from './Appointments';
import Help from './Help';
import BookingFlow from './BookingFlow'; // Creeremo questo componente per il flusso di prenotazione

function App() {
  const [activeTab, setActiveTab] = useState('prenota');

  const renderContent = () => {
    switch (activeTab) {
      case 'prenota':
        return <BookingFlow />;
      case 'appuntamenti':
        return <Appointments />;
      case 'aiuto':
        return <Help />;
      default:
        return <BookingFlow />;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="Logo Salute Serena" className="header-logo" />
      </header>

      {renderContent()}

      <footer className="footer-nav">
        <div className={`nav-item ${activeTab === 'prenota' ? 'active' : ''}`} onClick={() => setActiveTab('prenota')}>
          <span>+</span>
          <p>Prenota</p>
        </div>
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

