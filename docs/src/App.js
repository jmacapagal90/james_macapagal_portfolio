import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

    </div>
  );
}

export default App;
