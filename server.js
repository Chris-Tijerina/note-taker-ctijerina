const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const { notes } = require("./db/db");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/api/notes", (req, res) => {
    // Use fs.readFile() method to read the file
    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        // Display the file content
        console.log(data);
    });
});

app.post("/api/notes", (req, res) => {
    console.log(req.body);
})

    app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

