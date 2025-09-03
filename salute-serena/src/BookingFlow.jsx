import ScanIdCard from './ScanIdCard';
import ScanRecipe from './ScanRecipe';
import SelectDateTime from './SelectDateTime';
import Summary from './Summary';
import Confirmation from './Confirmation';

function WelcomeScreen({ onStart }) {
  return (
    <div className="main-content">
      <h2>Benvenuto</h2>
      <p>Prenota le tue visite in modo semplice e sicuro.</p>
      <button className="start-button" onClick={onStart}>INIZIA</button>
    </div>
  );
}

// Ora questo componente è "controllato" dal suo genitore (App.jsx)
function BookingFlow({ screen, setScreen }) {
  const goToHome = () => setScreen('welcome');

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onStart={() => setScreen('scan_id')} />;
      case 'scan_id':
        return <ScanIdCard onScanComplete={() => setScreen('scan_recipe')} />;
      case 'scan_recipe':
        return <ScanRecipe onScanComplete={() => setScreen('select_time')} />;
      case 'select_time':
        return <SelectDateTime onSelectionComplete={() => setScreen('summary')} />;
      case 'summary':
        return <Summary onConfirm={() => setScreen('confirmation')} />;
      case 'confirmation':
        return <Confirmation onFinish={goToHome} />;
      default:
        return <WelcomeScreen onStart={() => setScreen('scan_id')} />;
    }
  };

  return renderScreen();
}

export default BookingFlow;
