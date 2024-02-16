const express = require("express");
const app = express();

app.use(express.json());

// Route
// Two args: endpoint, inline callback function
// req: request, res: response
app.get("/", (req, res) => {
    res.send({greeting: "hello"});
});

// Route
// res.send() will convert this Javascript object (note the lack of quotation marks around "greeting") to a JSON object which is sent to the client
app.get("/secondRoute", (req, res) => {
    res.send(
        {
            greeting: "hi"
        }
    );
});

app.get("/page", (req, res) => {
    res.send("<h1>I am a header</h1>");
});


// Assignment: Create a third route with the endpoint thirdRoute

// This will log a parameter (localhost:8080/thirdRoute/test) will log "someValue: test". 
app.get("/thirdRoute/:someValue", (req, res) => {
    res.send("I am a third route");
    console.log(req.params);
});

// Using multiple parameters
app.get("/moreParams/:someValue/:someOtherValue", (req, res) => {
    const someValue = req.params.someValue;
    const someOtherValue = req.params.someOtherValue;
    res.send("Hello!");
    console.log(someValue);
    console.log(someOtherValue);
});

let balance = 100;
app.get("/wallet/:paymentOut", (req, res) => {
    // Assignment: Start with the balance of 100 in the wallet. Everytime a client calls this route, the value of paymentOut should be subtracted from the balance.
    // If the paymentOut creates a balance below 0, then the client "Sorry, not enough funds"
    const paymentOut = parseFloat(req.params.paymentOut);

    if(Number.isNaN(paymentOut)) {
        res.send("Not a number!");
    } else {
        if(paymentOut > balance) {
            res.send("Sorry, not enough funds.");
        } else {
            balance -= paymentOut;
            res.send(`New balance: ${balance}`);
        }
    }
});

app.get("/somethingNice", (req, res) => {
    const greeting = req.query;
    console.log(greeting);
    res.send({ data: greeting });
});

app.post("/postman", (req, res) => {
    res.send({ data: req.body });
});


app.listen(8080, (error) => {
    if(error) {
        console.log("Could not start server!");
        return;
    } else {
        console.log("Server now listening on port", 8080);
    }
});