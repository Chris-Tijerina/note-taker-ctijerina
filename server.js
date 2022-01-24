const express = require("express");
const { notes } = require("./db/db");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const fs = require('fs');
const shortid = require('shortid');
const id = shortid.generate()

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

app.get("/api/notes", (req, res) => {
    // Use fs.readFile() method to read the file
    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        // create variable to hold json data
        let currentNotes = JSON.parse(data);
        // return the notes
        res.json(currentNotes);
    });
});

app.post("/api/notes", (req, res) => {
    //add unique id to incoming notes
    req.body.id = id;
    //add existing notes array in db.json to new variable
    let savedNotes = notes;
    console.log(savedNotes);
    //create new variable for incoming note array
    let newNote = req.body;
    console.log(newNote);
    //push new note to the end of the previous notes array
    savedNotes.push(newNote);
    console.log(savedNotes);
    //take the new array and write it to the db.json file
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: savedNotes }, null, 2)
    );
});

app.delete("/api/notes/:id", (req, res) => {
    // Use fs.readFile() method to read the file
    console.log(req.params.id)

    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        // assign the data to a variable
        currentNotes = JSON.parse(data);
        // find the id of the clicked note to delete
        const targetNote = currentNotes.notes.findIndex(note => note.id == req.params.id);
        console.log(targetNote);
        // remove the selected object from the array
        currentNotes.notes.splice(targetNote, 1);
        console.log(currentNotes);
        fs.writeFileSync(
            path.join(__dirname, './db/db.json'),
            JSON.stringify({ notes: currentNotes.notes }, null, 2)
        );

    })
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
