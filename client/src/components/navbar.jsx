import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ token, setToken }) {
    return (
        <div id="navbar">
          
            <div id="navbar-links">
                <Link to="/">♡ home</Link>
                
                {/* <Link to="/users/edit_profile">♡ edit profile</Link> */}

               
                    <>
                    <Link to="/events">♡ events</Link>
                <Link to="/tickets/:ticket_id">♡ ticket info</Link>
                <Link to="/dashboard">♡ user dashboard</Link>

                    </>
               
                    // <Link to="/users/login">log in</Link>
                    <Link to="/users/signup">register</Link>
                    <></>
                
            </div>
        </div>
    );
}