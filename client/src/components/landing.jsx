import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from '../assets/bgmono.webp'


export default function Home() {
  const [token, setToken] = useState(null);
  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUserId(localStorage.getItem('user_id'));
  }, []);

  return (
    <section id="hero" className="hero section">
      <img src={bg} alt="" data-aos="fade-in" className="aos-init aos-animate" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">Welcome to Tixoxo</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Discover Your Next Event</p>
          </div>
          <div className="col-lg-5">
            <form action="#" className="sign-up-form d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <input type="text" className="form-control" placeholder="Search events by artist, genre, or venue" />
              <input type="submit" className="btn btn-primary" value="Enter" />
            </form>
          </div>
        </div>
      </div>

      <div>
        <Link
          to={`/users/login`}
          className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          LOG IN
        </Link>
        <Link
          to={`/users/signup`}
          className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          REGISTER
        </Link>
      </div>
    </section>
  );
}
