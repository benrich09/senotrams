import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sparkles from './components/Sparkles';
import './index.css';

function App() {
  return (
      <Router>
        <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900">
          <Sparkles />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;