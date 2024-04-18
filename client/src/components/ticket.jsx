import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTicketById } from "../api/tickets";
import { fetchEventById } from "../api/events"; 
import kuromi from '../assets/kuromi-pfp-3.jpg';

export default function TicketDetails() {
  const { ticket_id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTicketDetails() {
      try {
        // Fetch ticket details
        const ticketResponse = await fetchTicketById(ticket_id);
        if (ticketResponse) {
          setTicket(ticketResponse);

          // Fetch event details using event ID from ticket
          const eventResponse = await fetchEventById(ticketResponse.event);
          if (eventResponse) {
            setEvent(eventResponse);
          } else {
            setError("Failed to fetch event details");
          }
        } else {
          setError("Failed to fetch ticket details");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching details");
      }
    }
    getTicketDetails();
  }, [ticket_id]);

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {ticket && event && (
        <div className="card">
          <img src={kuromi} alt={`${ticket.name}'s Details`} id="ticket-profile-image" />
          <h2>{ticket.name}</h2>
          <div className="grid-container">
            <div className="grid-child-posts">
                <h1>{event.name}</h1>
              <p>Artist: {event.artist}</p>
              <p>Description: {event.description}</p>
              <p>Venue: {event.venue}</p>
              <p>Address: {event.address}</p>
              <p>Date: {event.datetime}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
