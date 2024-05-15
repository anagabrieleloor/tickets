const client = require('../client');

// POST - /api/tickets
const createTicket = async ({ available, resale, user, event }) => {
    try {
        // Decrement available_tickets count
        await client.query(
            `
            UPDATE events
            SET available_tickets = available_tickets - 1
            WHERE event_id = $1;
            `,
            [event]
        );

        const {
            rows: [ticket],
        } = await client.query(
            `
                INSERT INTO tickets(available, resale, "user", event)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            [available, resale, user, event]
        );
        return ticket;
    } catch (error) {
        throw error;
    }
};

// GET - /api/tickets - get all tickets
const getAllTickets = async () => {
    try {
        const { rows } = await client.query(`
            SELECT *
            FROM tickets;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
};

// GET - /api/tickets/:event_id
const getTicketByEventId = async (event_id) => {
    try {
        const { rows: [ticket] } = await client.query(`
            SELECT * 
            FROM tickets
            WHERE event = $1;
        `, [event_id]);
        return ticket;
    } catch (error) {
        throw error;
    }
};

// GET - /api/tickets/:user_id
const getTicketByUserId = async (user_id) => {
    try {
        const { rows: [ticket] } = await client.query(`
            SELECT * 
            FROM tickets
            WHERE "user" = $1;
        `, [user_id]);
        return ticket;
    } catch (error) {
        throw error;
    }
};

// GET - /api/tickets/:ticket_id
const getTicketByTicketId = async (ticket_id) => {
    try {
        const { rows: [ticket] } = await client.query(`
            SELECT t.*, e.price AS event_price
            FROM tickets t
            JOIN events e ON t.event = e.event_id
            WHERE t.ticket_id = $1;
        `, [ticket_id]);
        return ticket;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    createTicket,
    getAllTickets,
    getTicketByEventId,
    getTicketByTicketId,
    getTicketByUserId
};
