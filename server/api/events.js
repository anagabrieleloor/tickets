const express = require('express');
const router = express.Router();

const { createEvent, getAllEvents, getEventById, updateEvent,
    deleteEvent, } = require('../db/helpers/events');


//Get Event by Event ID
router.get("/:event_id", async (req, res, next) => {
    try {
      const event = await getEventById(req.params.event_id);
      res.send(event);
    } catch (error) {
      next(error);
    }
  });
  
  //Create Event --POST
  router.post("/post_event", async (req, res, next) => {
    try {
      console.log("req", req.body);
      const event = await createEvent(req.body);
      res.send(event);
    } catch (err) {
      next(err);
    }
  });
  
  // Put Event ********************************************
  router.put("/edit_event/:event_id", async (req, res, next) => {
    try {
      const event = await updateEvent(req.params.event_id, req.body);
      res.send(event);
    } catch (error) {
      next(error);
    }
  });
  
  // Delete Event ********************************************
  router.delete("/delete/:event_id", async (req, res, next) => {
    try {
      const event = await deleteEvent(req.params.event_id);
      res.send(event);
    } catch (error) {
      next(error);
    }
  });

  //GET - /api/events - get all events
router.get('/', async (req, res, next) => {
    try{     
        const events = await getAllEvents();
        res.send(events);
    } catch (error) {
        next(error);
    }
});

  module.exports = router;