// Import Express
const express = require("express");

const app = express();

const drinks = [
    { id: 1, name: "Mojito" },
    { id: 2, name: "Isbjørn" },
    { id: 3, name: "Old fashion" }
];

app.get("/drinks", (req, res) => {
    res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const drinkId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => {drink.id === drinkId});
    if(!foundDrink) {
        res.status(404).send({ data: "Drink not found" });
    } else {
        res.send({ data: foundDrink });
    }
});

app.listen(8080, (error) => {
    if(error) {
        console.log("Error starting the server!");
        return;
    }
    console.log("Server is listening on port", 8080);
});