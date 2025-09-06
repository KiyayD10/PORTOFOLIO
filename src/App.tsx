import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import "./index.css";
import About from './components/About';


function App() {
  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
