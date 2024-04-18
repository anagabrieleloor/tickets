const express = require('express');
const router = express.Router();

const { createTicket, getAllTickets, getTicketByTicketId, getTicketByEventId, getTicketByUserId } = require('../db/helpers/tickets');


//GET - api/tickets - get all tickets
router.get('/', async (req, res, next) => {
    try{  
        const tickets = await getAllTickets();
        res.send(tickets);
    } catch (error) {
        next(error);
    }
});

// GET - /api/tickets/:ticket_id - get ticket by ticket id
router.get('/:ticket_id', async (req, res, next) => {
    try{   
        const ticket = await getTicketByTicketId(req.params.ticket_id);
        res.send(ticket);
    } catch (error) {
        next(error);
    }
});

// GET - /api/tickets/:event_id - get ticket by event id
router.get('/:event_id', async (req, res, next) => {
    try{   
        const ticket = await getTicketByEventId(req.params.event_id);
        res.send(ticket);
    } catch (error) {
        next(error);
    }
});

// GET - /api/tickets/:ticket_id - get ticket by user id
router.get('/:user_id', async (req, res, next) => {
    try{   
        const ticket = await getTicketByUserId(req.params.user_id);
        res.send(ticket);
    } catch (error) {
        next(error);
    }
});


//POST - /api/tickets - create new ticket
router.post('/tickets', async (req, res, next) => {
    try{
        const ticket = await createTicket(req.body);
        res.send(ticket);
    } catch (error) {
        next(error);
    }
});

module.exports = router;