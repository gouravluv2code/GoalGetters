import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
// import { AllRoutes } from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar />
       {/* <AllRoutes/>  */}
       {/* <Footer/>  */}
    </div>
  );
}

export default App;
