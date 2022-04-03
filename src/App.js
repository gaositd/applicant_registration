import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { MainContent } from './components/mainContent/MainContent';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
