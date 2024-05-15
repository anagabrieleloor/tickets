import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById } from "../api/events";
import kuromi from '../assets/kuromi-pfp-3.jpg';
import StripeContainer from "./stripecontainer";

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
        <div className="container">
            {error && <p>{error}</p>}
            {event && (
                <div className="card">
                    <img src={kuromi} alt={`${event.name}'s Details`} id="event-profile-image" />
                    <h2>{event.name}</h2>
                    <div className="grid-container">
                        <div className="grid-child-posts">
                            <p>artist: {event.artist}</p>
                            <p>description: {event.description}</p>
                            <p>venue: {event.venue}</p>
                            <p>address: {event.address}</p>
                            <p>date: {event.datetime}</p>
                            <p>price: {event.price}</p>
                        </div>
                        <div className="grid-child-followers">
                            <p>location: {event.location}</p><br />
                        </div>
                    </div>
                </div>
            )}
            <StripeContainer /> 
        </div>
    );
}
