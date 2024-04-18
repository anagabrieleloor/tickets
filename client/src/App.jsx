
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllEvents from "./components/allevents"
import Navbar from "./components/navbar";



function App() {
 

  return (
    <>

    <Navbar />
    <Routes>
      <Route>
        <Route path="/events" element={<AllEvents />} />
      </Route>
    </Routes>
 
    </>
  );
}

export default App;