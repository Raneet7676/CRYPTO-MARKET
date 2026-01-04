import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import "./index.css"
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";

const App = () => {

  return(
    <>
      <div className="app">
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path="/coin/:coinId" element={<Coin/>} />

        </Routes>
      </div>
    </>
  )
}

export default App;