import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Intro from "./components/Intro";
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
window.history.scrollRestoration = "manual";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Intro />
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
)
