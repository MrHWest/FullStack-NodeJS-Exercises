const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/homepage.html`);
});

app.listen(PORT, () => {console.log("server listening on port", PORT)});

module.exports = app;