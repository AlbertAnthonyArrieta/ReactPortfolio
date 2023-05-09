import logo from './logo.svg';
import './App.css';
import HeroSection from "./components/HeroSection";
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navigation />
      <PageContent />
    </div>
  );
}

export default App;
