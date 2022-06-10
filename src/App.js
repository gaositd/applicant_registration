import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { MainContent } from './components/mainContent/MainContent';
import { Footer } from './components/footer/Footer';

import { Login } from './components/admin/login/login';
import { LogOut } from './components/admin/login/logout';
import Profile from './components/admin/login/profile';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<LogOut />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
