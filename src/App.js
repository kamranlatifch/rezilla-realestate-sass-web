import './stylesheet/import.css';
import InfoBar from './components/InfoBar';
import HeroHeader from './components/HeroHeader';
import TrustedClients from './components/TrustedClients';
import AboutUs from './components/AboutUs';
import PropertyListing from './components/PropertyListing';
import OurServices from './components/OurServices';
import Neighbourhood from './components/Neighbourhood';

function App() {
  return (
    <>
      <InfoBar />
      <HeroHeader />
      <TrustedClients />
      <AboutUs />
      <PropertyListing />
      <OurServices />
      <Neighbourhood />
    </>
  );
}

export default App;
