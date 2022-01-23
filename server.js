const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());

const { db } = require("./db/db.json");


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get("/api/db", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

