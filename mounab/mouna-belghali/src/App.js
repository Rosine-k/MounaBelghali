import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Actualites from "./pages/Actualites/index";
import Contact from "./pages/Contact/index";
import Erreur from "./pages/Erreur/index";
import Parcours from "./pages/Parcours/index";
import Photos from "./pages/Photos/index";
import Videos from "./pages/Videos/index";
import ScrollToTop from "./components/ScrollToTop/index";

function App() {
  return (
    <BrowserRouter> 
      <ScrollToTop/>   
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="*" element={<Erreur />} />  
        <Route path="/parcours" element={<Parcours />} />   
        <Route path="/photos" element={<Photos />} />  
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
