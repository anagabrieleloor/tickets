import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleUser } from "../api/users";

export default function Dashboard({token, user_id}) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSingleUser() {
      try {
        const APIResponse = await fetchSingleUser(user_id, token);
        if (APIResponse) {
          console.log(APIResponse)
          setUser(APIResponse);
        } else {
          setError("Failed to fetch user profile");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching profile");
      }
    }
    getSingleUser();
  }, [user_id, token]);

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-xl-center gy-5">
          {user && (
            <div className="col-xl-5 content">
              <h3>Hello {user.first_name}</h3>
              <h2>Profile info:</h2>
              <p>{user.billing_address}</p>
              <a href="#" className="read-more"><span>Edit Profile</span><i className="bi bi-arrow-right"></i></a>
            </div>
          )}
          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Upcoming Events</h3>
                  <p>Your tickets to future events. </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-clipboard-pulse"></i>
                  <h3>Past events</h3>
                  <p>Past events you have attended.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-command"></i>
                  <h3>Interested in</h3>
                  <p>Saved events you are interested in.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h3>Resale</h3>
                  <p>Check status for tickets you have put for resale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
