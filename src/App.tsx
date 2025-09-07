import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import "./index.css";
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
