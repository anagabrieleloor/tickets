import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById } from "../api/events";
import kuromi from '../assets/kuromi-pfp-3.jpg';
import StripeContainer from "./stripecontainer";
import eventpic from '../assets/vibeybg.webp'


export default function EventDetails() {
    const { event_id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getEventDetails() {
            try {
                const APIResponse = await fetchEventById(event_id);
                if (APIResponse) {
                    setEvent(APIResponse);
                    console.log("Event ID", event_id);
                    console.log("Event Details", APIResponse);
                } else {
                    setError("Failed to fetch event details");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching event details");
            }
        }
        getEventDetails();
    }, [event_id]);

    return (
        <section id="features" className="features section">

  {/* Section Title */}
  <div className="container section-title aos-init aos-animate" data-aos="fade-up">
    <h2>Event Details</h2>
    <p>Mark your calendar, you've got plans.</p>
  </div>
  {/* End Section Title */}

  <div className="container">

    
    {/* Features Item */}
    {error && <p>{error}</p>}
             {event && (
    <div className="row gy-4 align-items-stretch justify-content-between features-item">
      <div className="col-lg-6 d-flex align-items-center features-img-bg aos-init aos-animate" data-aos="zoom-out">
        <img src={eventpic} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 d-flex justify-content-center flex-column aos-init aos-animate" data-aos="fade-up">
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <ul>
          <li><i className="bi bi-check"></i> <span>{event.artist}.</span></li>
          <li><i className="bi bi-check"></i><span> {event.venue}</span></li>
          <li><i className="bi bi-check"></i> <span>{event.address}</span>.</li>
          <li><i className="bi bi-check"></i> <span>{event.datetime}</span></li>
          <li><i className="bi bi-check"></i> <span>${event.price}</span></li>
        </ul>
        <a href="#" className="btn btn-get-started align-self-start">Get Tickets</a>
      </div>
      
    </div>
   )}

  </div>

</section>

    );
}
