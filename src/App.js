import './App.css';
import Navigation from './components/common/Navigation';
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <HeroSection id='home' />
      <Navigation />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
