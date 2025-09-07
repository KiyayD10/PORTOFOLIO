import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import "./index.css";
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Gallery />
    </div>
  );
}

export default App;
