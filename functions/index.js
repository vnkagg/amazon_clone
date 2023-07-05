/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51NQ7wKSIF32EltxbgsoMtl1w59g4I4RSD5nM7m7qn1bg7IADcNTl3JVx5kr1ZKWoEoo6l8KTw8mL9WHq3Pr1hJLZ00dIA66EsD");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => {
  // eslint-disable-next-line max-len
  return res.status(200).send("Hey vinayak, your API for amazon-clone is up and working");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("request for this amount received >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  res.status(201).send({clientSecret: paymentIntent.client_secret});
});

exports.api = functions.https.onRequest(app);


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
