import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import AboutMe from '../../pages/AboutMe';
import Books from '../../pages/Books';
import ContactMe from '../../pages/ContactMe';

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/contactme" element={<ContactMe/>} />
    </Routes>
  );
};

export default MyRoutes;