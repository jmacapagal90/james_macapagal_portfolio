import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <br></br>
      <footer>
        <Footer />
        </footer>
    </div>
  );
}

export default App;
