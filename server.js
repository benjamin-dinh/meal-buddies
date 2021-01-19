var express = require('express');
var path = require('path');
var mysql = require('firebase');
var app = express();

const bodyParser = require("body-parser");
const sql = require("sqlite3").verbose();

app.set( 'port', ( process.env.PORT || 5000 ));

app.use(express.static(path.join(__dirname, '/public')));

app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/home.html')
});

// const recipesDB = new sql.Database("recipes.db");
//
// let cmd =
//   " SELECT name FROM sqlite_master WHERE type='table' AND name='RecipesTable' ";
//   recipesDB.get(cmd, function(err, val) {
//   console.log(err, val);
//   if (val == undefined) {
//     console.log("No database file - creating one");
//     createRecipesDB();
//   } else {
//     console.log("Database file found");
//   }
// });
//
// function createRecipesDB() {
//   const cmd =
//     "CREATE TABLE RecipesTable (rowId TEXT PRIMARY KEY, image TEXT, ingredientLines TEXT, label TEXT, totalTime TEXT, url TEXT, yield_ TEXT )";
//   recipesDB.run(cmd, function(err, val) {
//     if (err) {
//       console.log("Database creation failure", err.message);
//     } else {
//       console.log("Created database");
//     }
//   });
// }



// app.post("/addRecipe", function(req, res, next) {
//   console.log("Server recieved ", req.body);
//   let rowId = req.body.rowId
//   let image = req.body.image;
//   let ingredientLines = req.body.ingredientLines;
//   let label = req.body.label;
//   let totalTime = req.body.totalTime;
//   let url = req.body.url;
//   let yield_ = req.body.yield_;
//
//   console.log(rowId);
//   //put new item into database
//   cmd =
//     "INSERT INTO RecipesTable (rowId, image, ingredientLines, label, totalTime, url, yield_) VALUES(?,?,?,?,?,?,?) ";
//   recipesDB.run(cmd, rowId, image, ingredientLines, label, totalTime, url, yield_, function(err) {
//     if (err) {
//       console.log("DB insert error", err.message);
//       next();
//     } else {
//       // let newId = this.lastID;
//       console.log(rowId);
//       res.send(rowId);
//     }
//   });
// });
