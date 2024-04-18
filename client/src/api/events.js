const BASE_URL = 'http://localhost:8088/api';

//Get all events
export async function fetchAllEvents() {
    try {
        const response = await fetch(`${BASE_URL}/events`);
        const result = await response.json();
        console.log("All events:", result);
        return result
    } catch (error) {
        console.error("Error fetching events", error);
        return error;
    }
}


//Create event
export async function createEvent(eventData) {
    try {
      const resp = await fetch(`${BASE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      const json = await resp.json();
      console.log("Event created", json)
      return json;
    } catch (error) {
      console.error("Error creating event", error);
      return error;
    }
  }


//Update event
export async function updateEvent(event_id, updatedEventData) {
    try {
      const response = await fetch(`${BASE_URL}/edit_event/${event_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEventData),
      });
      const result = await response.json();
      console.log("Event updated", result);
      return result;
    } catch (error) {
      console.error("Error updating event", error);
    }
  }

  //Get event by event_id
  export async function getEventById(event_id) {
    const resp = await fetch(`${BASE_URL}/events/${event_id}`);
    const json = await resp.json();
    console.log("Event:", json)
    return json;
  }

  //Delete event
  export async function deleteEvent(event_id) {
    try {
      const resp = await fetch(`${BASE_URL}/events/${event_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await resp.json();
      console.log("Event deleted", result);
      return result;
    } catch (error) {
      console.error("Error deleting event", error);
    }
  }