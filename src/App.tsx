import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import TagManager from 'react-gtm-module';

// Importa as páginas
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  useEffect(() => {
    const tagManagerArgs = { gtmId: 'GTM-N8X2MKP' };
    TagManager.initialize(tagManagerArgs);
  }, []);

  // Função para enviar eventos personalizados
  const sendEventToGTM = (
    eventName: string,
    eventCategory: string,
    eventLabel: string,
  ) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      category: eventCategory,
      label: eventLabel,
    });
  };

  return (
    <Router>
      {/* Menu de Navegação */}
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => sendEventToGTM('navigation', 'Menu Click', 'Home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() =>
                sendEventToGTM('navigation', 'Menu Click', 'About')
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() =>
                sendEventToGTM('navigation', 'Menu Click', 'Contact')
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() =>
                sendEventToGTM('navigation', 'Menu Click', 'Services')
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() =>
                sendEventToGTM('navigation', 'Menu Click', 'Portfolio')
              }
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => sendEventToGTM('navigation', 'Menu Click', 'Blog')}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              onClick={() => sendEventToGTM('navigation', 'Menu Click', 'FAQ')}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      {/* Configuração das Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
