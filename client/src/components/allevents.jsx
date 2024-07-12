import { useState, useEffect } from "react";
import { fetchAllEvents } from "../api/events";
import { Link } from "react-router-dom";
import { BiCalendar } from "react-icons/bi";
import kuromi from '../assets/kuromi-pfp-3.jpg';
import EventForm from "./listevent";

export default function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getAllEvents() {
      try {
        const response = await fetchAllEvents();
        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvents();
  }, []);

  // Function to format date as "mm/dd/yy"
  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    return `${month}/${day}/${year}`;
  };

  return (
    <section id="services" className="services section">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Events</h2>
        <p>Find your next event.</p>
        <EventForm />
      </div>

      <div className="container">
        <div className="row gy-4">
          {events.map((event) => (
            <div key={event.event_id} className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <BiCalendar size={50} /> {/* Calendar icon */}
                  <span className="event-date" style={{ fontSize: '10px', marginLeft: '5px' }}>{formatDate(event.datetime)}</span> {/* Date */}
                </div>
                <div>
                  <h4 className="title"><Link to={`/events/${event.event_id}`} className="stretched-link"><strong>{event.name}</strong></Link></h4>
                  <p className="description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
