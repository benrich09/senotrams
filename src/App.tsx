import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import News from './pages/News';
import Leadership from './pages/Leadership';
import './index.css';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/leadership" element={<Leadership />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;