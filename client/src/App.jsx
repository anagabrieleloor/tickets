
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllEvents from "./components/allevents"
import EventDetails from "./components/event"
import Navbar from "./components/navbar";



function App() {
 

  return (
    <>

    <Navbar />
    <Routes>
      <Route>
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:event_id" element={<EventDetails />} />
      </Route>
    </Routes>
 
    </>
  );
}

export default App;