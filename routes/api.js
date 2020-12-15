const path = require("path");
const fs = require("fs");
const dbPath = path.join(__dirname, "../db/db.json");
let notes = [];
var { v4: uuidv4 } = require("uuid");

module.exports = function(app) {
    // GET request
    app.get("/api/notes", function(req, res) {
      fs.readFile(dbPath, "utf8", function(err, data) {
          if (err){
              console.log(err);
          } else {
              notes = JSON.parse(data);
              res.json(notes);
          }
      });
    });

    // POST request
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let id = uuidv4();
        newNote.id = id;        
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
                console.log(err)
            }else{
                notesArray = JSON.parse(data);
                notesArray.push(newNote);
                const newObj = JSON.stringify(notesArray);
                fs.writeFile(dbPath, newObj, err => err ? console.log(err) : console.log("Notes Saved"));
            }            
        })
        res.json(newNote);        
    });

    // DELETE request
    app.delete("/api/notes/:id", function(req, res) {
        const id = req.params.id;
        fs.readFile(dbPath, "utf8", function(error, data) {
            if (error) {
                console.log(error);
            }
            else {
                arrayNotes = JSON.parse(data);
                const updatedNotes = notesArray.filter(notes => notes.id !== id);
                const updatedNotesObj = JSON.stringify(updatedNotes);
                // Write db.json file with the stringify updateNotes.
                fs.writeFile(dbPath, updatedNotes, function() {
                  if (err) {
                    console.log(error)
                  } 
                  else {
                    console.log("Updated");
                  }
                  return res.json(true);
                }
              )}
          })
      });
}