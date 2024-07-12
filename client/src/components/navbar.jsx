import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({ token, setToken }) {

    return (
        <div id="navbar">
          <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1 class="sitename">Tixoxo</h1><span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li><a href="/events" class="">Events</a></li>
          <li><a href="/dashboard" class="">Dashboard</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#about">Get Started</a>

    </div>
  </header>

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