import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import { AllRoutes } from './allRoutes/Allroutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
