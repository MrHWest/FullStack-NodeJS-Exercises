// Import Express
const express = require("express");

const app = express();
app.use(express.json());

const drinks = [
    { id: 1, name: "Mojito" },
    { id: 2, name: "Isbjørn" },
    { id: 3, name: "Old fashion" }
];

let nextId = 4;

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

app.post("/drinks", (req, res) => {
    try {
        const drink = {
            id: nextId++,
            name: req.body.name
        }

        if(!drink.name) { 
            return res.status(400).send({ data: "Invalid name" });
        }

        drinks.push(drink);

        if(drinks.includes(drink)) {
            return res.status(200).send({ data: "Object added successfully" })
        } else {
            throw new Error("Drink not added");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ data: "An error occurred. Object not added."})
    }
});

app.put("/drinks/:id", (req, res) => {
    try {
        const drink = {
            id: Number(req.body.id),
            name: req.body.name
        }

        // Validate ID
        if(isNaN(drink.id)) {
            return res.status(400).send({ data: "Invalid ID" });
        }
        
        // Validate name
        if(!drink.name) {
            return res.status(400).send({ data: "Invalid name" });
        }

        // Find index in array of element with the given ID.
        const index = drinks.findIndex((element) => element.id === drink.id);

        // Check if drink exists
        if(index === -1) {
            return res.status(404).send({ data: "Drink not found" });
        }

        // Update drink
        drinks[index].name = drink.name;

        // Check if update happened successfully.
        if(drinks[index].name === drink.name) {
            return res.status(200).send({ data: "Object updated successfully." });
        } else {
            throw new Error("Drink not added");
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ data: "An error occurred. Object not updated."})
    }
});

app.delete("/drinks/:id", (req, res) => {
    try {

        const drinkId = Number(req.params.id);

        // Validate ID
        if(isNaN(drinkId)) {
            return res.status(400).send({ data: "Invalid ID" });
        }

        // Find index in array of element with the given ID.
        const index = drinks.findIndex((element) => element.id === drinkId);

        // Check if drink exists
        if(index === -1) {
            return res.status(404).send({ data: "Drink not found" });
        }

        // Delete drink
        drinks.splice(index, 1);

        // Check if deletion happened successfully.
        if(drinks.findIndex((element) => element.id === drinkId) === -1) {
            return res.status(200).send({ data: "Object deleted successfully." });
        } else {
            throw new Error("Drink not deleted");
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ data: "An error occurred. Object not updated."})
    }
});

app.listen(8080, (error) => {
    if(error) {
        console.log("Error starting the server!");
        return;
    }
    console.log("Server is listening on port", 8080);
});