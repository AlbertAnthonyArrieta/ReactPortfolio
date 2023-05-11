import './App.css';
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import Navigation from './components/common/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navigation />
      <AboutSection />
    </div>
  );
}

export default App;
