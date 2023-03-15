import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
