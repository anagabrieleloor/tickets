const client = require("../client");

//Create Event
const createEvent = async ({
    name,
    artist,
    description,
    venue,
    address,
    datetime,
    category,
    organizer,
    creator,
}) => {
    try {
        const {
            rows: [events],
        } = await client.query(
            `
                INSERT INTO events(
                    name,
                    artist,
                    description,
                    venue,
                    address,
                    datetime,
                    category,
                    organizer,
                    creator
                    )
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
                RETURNING *;
            `,
            [
                name,
                artist,
                description,
                venue,
                address,
                datetime,
                category,
                organizer,
                creator,
            ]
        );
        return events;
    } catch (error) {
        throw error;
    }
};

//Get all events
const getAllEvents = async () => {
    try {
        const { rows } = await client.query(`
            SELECT *
            FROM events;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
};


//Get event by ID
const getEventById = async (event_id) => {
    try {
        const {
            rows: [events],
        } = await client.query(
            `
              SELECT *
              FROM events
              WHERE event_id = $1
      `,
            [event_id]
        );
        return events;
    } catch (error) {
        throw error;
    }
};



const updateEvent = async (event_id, updatedEventData) => {
    try {
        const {
            rows: [event],
        } = await client.query(
            `
        UPDATE events
        SET
        name = $1,
        artist =$2,
        description = $3,
        venue = $4,
        address = $5,
        datetime = $6,
        category = $7,
        organizer = $8,
        creator = $9
        WHERE event_id = $10
        RETURNING *;
        `,
            [
                updatedEventData.name,
                updatedEventData.artist,
                updatedEventData.description,
                updatedEventData.location,
                updatedEventData.address,
                updatedEventData.datetime,
                updatedEventData.timezone,
                updatedEventData.virtual,
                updatedEventData.comments,
                updatedEventData.topic,
                updatedEventData.duration,
                updatedEventData.gender,
                updatedEventData.group,
                updatedEventData.meeting_link,
                updatedEventData.host_id,

                event_id,
            ]
        );
        return event;
    } catch (error) {
        throw error;
    }
};

const deleteEvent = async (event_id) => {
    try {
        client.query(
            `
      DELETE FROM rsvps
      WHERE event_id = $1
      RETURNING *;
      `,
            [event_id]
        );
        client.query(
            `
      DELETE FROM comments
      WHERE event_id = $1
      RETURNING *;
      `,
            [event_id]
        );
        const result = await client.query(
            `
        DELETE FROM events
        WHERE event_id = $1
        RETURNING *;
      `,
            [event_id]
        );
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};