/*
 * note(stripe)-1
 * npm i stripe
 * */

import Stripe from "stripe";

/*
 * note(stripe)-2
 * pass in the stripe API (secret) key
 * */
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});
