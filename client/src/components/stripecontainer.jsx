import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./paymentform"

const PUBLIC_KEY = "pk_test_51P2JygJuF8G9TTslE6sUnM3wGBY8M5YIJvO7T7D8uRcYRhVewpvgsrU1sBHUtQcBqbU56v6YojETAxNQ8YVe7Xys008KA9hmWK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}