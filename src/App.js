import React, { Fragment } from "react";
import {
  Routes,
  Route
} from 'react-router-dom';

import { Header } from './header/Header';
import { MainContent } from './mainContent/MainContent';
import { Footer } from './footer/Footer';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
