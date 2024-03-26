const express = require("express");
const router = express.Router();



//GET - /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

//ROUTER: /api/users
router.use('/users', require('./users'));

//ROUTER: /api/events
router.use('/events', require('./events'));

//ROUTER: /api/tickets
router.use('/tickets', require('./tickets'))



module.exports = router;
