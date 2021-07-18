//API
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51JDYtfKqnMlZGNbTP1tPZpWZ1QBnINHilwI2j1lsKEdJyIAgUhHsj8pLJVMcioFdzQQyXTbnQwIK94vW16GJ2i6a00P7Ev8L8B')

//app config
const app = express();
//middlewares
app.use(cors({ origin: true}));
app.use(express.json());
//API routes
app.get("/", (request, response) => {
    response.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment request received for this ammount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    
});
//listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



//http://localhost:5001/homunculus-ad003/us-central1/api