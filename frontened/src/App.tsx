import React from "react";
import "./App.css";
import { Allroutes } from "./allRoutes/Allroutes";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Allroutes/> */}
      {/* <Footer/> */}
      <div className="bg-indigo-600 w-full h-screen">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
