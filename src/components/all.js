import React from 'react';
import {Works} from './works';
import {About} from './about';
import {Contact} from './contact';
import  NavBar  from './NavBar';
import { Routes, Route } from 'react-router-dom';

export const All = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Works" element={<Works />} />
            <Route exact path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
};