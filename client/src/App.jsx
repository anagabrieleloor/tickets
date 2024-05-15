
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllEvents from "./components/allevents"
import EventDetails from "./components/event"
import Navbar from "./components/navbar";
import TicketDetails from "./components/ticket";
import Login from "./components/login";
import Home from "./components/landing";
import SignUp from "./components/register";
import SuccessMessage from "./components/returnurl";



function App() {
  const [token, setToken] = useState(null);
  const [user_id, setUserId ] =useState(null);

  
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUserId(localStorage.getItem('user_id'));
    
  
}, [])

  return (
    <>
<Home />
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:event_id" element={<EventDetails />} />
        <Route path="/tickets/:ticket_id" element={<TicketDetails />} />
        <Route path="/users/login" element={<Login token={token} setToken={setToken} user_id={user_id} />} />
        <Route path="/users/signup" element={<SignUp setToken={setToken}/>} />

        <Route path="/tickets/success" element={<SuccessMessage />} />
      
      </Route>
    </Routes>
 
    </>
  );
}

export default App;