const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/homepage.html`);
});

//Task: Create a new endpoint called publicsquare that serves publicSquare.html
app.get("/publicsquare", (req, res) => {
    res.sendFile(`${__dirname}/publicSquare.html`);
});


app.listen(PORT, (error) => {
    if(error) {
        console.log("An error occurred!");
        return;
    } else {
        console.log("Server now listening on port", PORT);
    }
});