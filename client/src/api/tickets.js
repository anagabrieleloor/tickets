const BASE_URL = 'http://localhost:8088/api';

//Get all tickets
export async function getAllTickets() {
    try {
        const response = await fetch(`${BASE_URL}/tickets`);
        const result = await response.json();
        console.log("All tickets:", result);
        return result
    } catch (error) {
        console.error("Error fetching tickets", error);
        return error;
    }
}


//Create ticket
export async function createTicket(available, price, resale, user, event) {
    try {
      const resp = await fetch(`${BASE_URL}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(available, price, resale, user, event),
      });
      const json = await resp.json();
      console.log("Ticket created", json)
      return json;
    } catch (error) {
      console.error("Error creating ticket", error);
      return error;
    }
  }




  //Get ticket by ticket_id
  export async function getTicketById(ticket_id) {
    const resp = await fetch(`${BASE_URL}/tickets/${ticket_id}`);
    const json = await resp.json();
    console.log("Ticket:", json)
    return json;
  }

   //Get ticket by event_id
   export async function getTicketByEventId(event_id) {
    const resp = await fetch(`${BASE_URL}/tickets/${event_id}`);
    const json = await resp.json();
    console.log("Ticket:", json)
    return json;
  }

     //Get ticket by user_id
     export async function getTicketByEventId(user_id) {
        const resp = await fetch(`${BASE_URL}/tickets/${user_id}`);
        const json = await resp.json();
        console.log("Ticket:", json)
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