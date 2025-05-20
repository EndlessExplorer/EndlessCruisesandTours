import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Corrigé précédemment
import Header from './Header'; // MODIFIÉ ICI (suppression de ./components/)
import Footer from './Footer'; // MODIFIÉ ICI (suppression de ./components/)
import Home from './Home';     // MODIFIÉ ICI (suppression de ./pages/)
import Circuits from './Circuits'; // MODIFIÉ ICI (suppression de ./pages/)
import Contact from './Contact';   // MODIFIÉ ICI (suppression de ./pages/)

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/circuits" element={<Circuits />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
