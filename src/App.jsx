import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CertificateCard from './components/CertificateCard';
import AboutUsAndTopCourses from './components/AboutUsAndTopCourses';
import Footer from './components/Footer';
import CertificateCardCopy from './components/CertificateCardCopy';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUsAndTopCourses />} />
        <Route path="/Certificates/VerifyCertificate" element={<CertificateCard />} />
        <Route path="/Certificates/VerifyCertificate/:value" element={<CertificateCardCopy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
