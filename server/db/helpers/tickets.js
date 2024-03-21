const client = require('../client')


//POST - /api/tickets
const createTicket = async ({ available, price, resale, user, event }) => {
    try {
        const {
            rows: [ticket],
            //INSERT SQL query
        } = await client.query(
            `
                INSERT INTO tickets(available, price, resale, "user", event)
                VALUES($1, $2, $3, $4, $5)
                RETURNING *;
            `,
            //Hook parameteres to variables
            [available, price, resale, user, event]
        )
        return ticket
    } catch (error) {
        throw error
    }
}

//GET - /api/ticket - get all ticket
const getAllTickets = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM ticket;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

//GET - /api/tickets/:event_id
const getTicketByEventId = async (event_id) => {
    try {
        const { rows: [ticket], }
            = await client.query(`
        SELECT * 
        FROM tickets
        WHERE event = ${event_id};
        `);
        return ticket;
    } catch (error) {
        throw error;
    }
}

//GET - /api/tickets/:user_id
const getTicketByUserId = async (user_id) => {
    try {
        const { rows: [ticket], }
            = await client.query(`
        SELECT * 
        FROM tickets
        WHERE user = ${user_id};
        `);
        return ticket;
    } catch (error) {
        throw error;
    }
}


// PUT - /api/users/:user_id - update a user
// const updateUser = async (user_id, updatedUserData) => {
//     try {
//         const { rows: [user], }
//             = await client.query(`
//         UPDATE users 
//         SET 
//         first_name = $1, 
//         last_name = $2, 
//         email = $3, 
//         password = $4, 
//         billing_address = $5, 
//         payment_token = $6, 
//         payment_verified = $7, 
//         WHERE user_id = $8
//         RETURNING *;
//         `,
//                 [
//                     updatedUserData.first_name,
//                     updatedUserData.last_name,
//                     updatedUserData.email,
//                     updatedUserData.password,
//                     updatedUserData.billing_address,
//                     updatedUserData.payment_token,
//                     updatedUserData.payment_verified,
//                     user_id
//                 ]
//             );
//         return user;
//     } catch (error) {
//         throw error;
//     }
// }







module.exports = { createTicket, getAllTickets, getTicketByEventId, getTicketByUserId }