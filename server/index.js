const express = require('express');
const app = express();
// const cookieParser = require('cookie-parser');
// const { COOKIE_SECRET } = require('./secrets');
require("dotenv").config()
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_TEST);
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const { authRequired } = require('./api/utils');
const jwt = require('jsonwebtoken');
const PORT = 8088;

const client =require('./db/client');
//connect to client
// client.connect();

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// init cookie parser
const { COOKIE_SECRET } = require("./secrets");
const cookieParser = require("cookie-parser");
app.use(cookieParser(COOKIE_SECRET));

app.get('/test', authRequired, (req, res, next) => {
    res.send('You are authorized')
});

// init cors
const cors = require('cors');
app.use(cors());

// const cors = require("cors");
// app.use(
//   cors({
//     origin: process.env.CORS_ALLOW || "http://localhost:5173",
//     credentials: true, // Allow cookies to be sent
//   })
// );

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Event Ticket",
			payment_method: id,
			confirm: true,
            return_url: "http://localhost:8080/api/tickets/success"
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});