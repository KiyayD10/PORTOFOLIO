import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import "./index.css";
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
