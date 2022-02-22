const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KVdbnSJ9nQV1COOPzCscUmiN5y7vFBio6GPBnAbqNuGux51SoAJkJrMxkmd2lT6Afswj657tGizvkDijMxCXaZE00wA9p02J7');
const port = process.env.PORT || 8000;

// Api

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// Api routes
app.get('/', (req,res) => {
    res.status(200).send('hello Sahil')
});

app.post('/payments/create', async(req,res) => {
    const total = req.query.total;
    console.log('payments req recieved fro this >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });
     res.status(201).send({
        clientSecret: paymentIntent.client_secret,
     });
})


// listen command
// app.listen(port, (req,res) => {console.log(`succussfully conected to ${port}`)})

exports.api = functions.https.onRequest(app)







// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
