import './stylesheet/import.css';
import InfoBar from './components/InfoBar';
import HeroHeader from './components/HeroHeader';
import TrustedClients from './components/TrustedClients';
import AboutUs from './components/AboutUs';
import PropertyListing from './components/PropertyListing';

function App() {
  return (
    <>
      <InfoBar />
      <HeroHeader />
      <TrustedClients />
      <AboutUs />
      <PropertyListing />
    </>
  );
}

export default App;
