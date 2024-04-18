import { useState, useEffect } from "react";
import { fetchAllEvents } from "../API"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from "react-router-dom";


export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  // const [searchParam, setSearchParam] = useState("");


  useEffect(() => {
    async function getAllEvents() {
      const response = await fetchAllEvents();
      console.log(response);

      setEvents(response);
      }
    getAllEvents();
  }, []);


return (
  <div className="container">
    {events.map((event) => ( 
      <div className="card" key={event.event_id}> 
      <Link to={`/events/${event.event_id}`}>
        <img src={event.photos} alt={`${event.first_name}'s Profile`} id="event-profile-image" />
        <p className="card__name">{event.name}</p>
        <div className="grid-container">
          <div className="grid-child-posts">
            <p>artist: {event.artist}</p>
            <p>description: {event.description}</p>
            <p>location: {event.location}</p>
            <p>address: {event.address}</p>
            <p>date: {event.datetime}</p>
          </div>
          <div className="grid-child-followers">
            <p>location: {event.location}</p><br />
          </div>
        
        </div>

        </Link>
      </div>
    ))}
  </div>
)};