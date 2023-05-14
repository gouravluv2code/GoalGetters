import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { AllRoutes } from './allRoutes/Allroutes';

import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
       <Navbar />
       <AllRoutes/> 
       <Footer/> 
    </div>
  );
}

export default App;
