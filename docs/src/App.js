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
      <div class="container-medium">
        <Navbar />
      </div>
        <div class="d-flex flex-column min-vh-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
