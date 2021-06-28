// 1st Question
// class Main {
//   constructor() {
//     console.log("We are inside the Constructor!!!");
//   }
//   main() {
//     console.log("We are inside the main method!!!");
//     var express = require('express');
//     var app = express();
//     var PORT = 8081;
//     var fs = require('fs');
//     var jsondata = require('./Q1jsondata.json')
//     var jsondata1;
//
//
//     // Without middleware
//     app.get('/inventory', function(req, res){
//         res.json(jsondata);
//     });
//
//     app.get('/inventory/:names', function(req, res){
//      jsondata1 = jsondata.filter((value) => {
//        if ( value.name === req.params.names ){
//          return value;
//        }
//      });
//      if (jsondata1.length === 1){
//        res.json(jsondata1[0]);
//      }
//      else{
//        res.send("The key was not matched!!");
//      }
//     });
//     app.listen(PORT, function(err){
//         if (err) console.log(err);
//         console.log("Server listening on PORT", PORT);
//     });
//   }
// }
//
// let myMain = new Main();
// myMain.main();

















// Question 2
// var express = require('express');
// var app = express();
// var PORT = 3000;
// var jsondata = require('./Q1jsondata.json');
//
// app.put('/inventory', (req, res) => {
//   res.json(jsondata);
// })
//
// app.put('/inventory/:names', function(req, res){
//   jsondata1 = jsondata.filter((value) => {
//     if ( value.name === req.params.names ){
//       return value;
//     }
//   });
//   if (jsondata1.length === 1){
//     res.json(jsondata1[0]);
//   }
//   else{
//     res.send("The key was not matched!!");
//   }
// });
//
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });



// 2nd Question
// var express = require('express');
// var app = express();
// var PORT = 3000;
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({
// 	extended:true
// }));
// app.use(express.json());
// var jsondata = require('./Q1jsondata.json');
//
// app.put('/inventory', (req, res) => {
//   jsondata = req.body;
//   res.json(jsondata);
// })
//
// app.put('/inventory/:names', function(req, res){
//   console.log(jsondata);
// 	objIndex = jsondata.findIndex((obj => obj.name === req.params.names));
// 	console.log(req.body);
// 	jsondata[objIndex] = req.body
//   console.log(jsondata);
//   res.json(jsondata);
// });
//
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });



















// 3rd Question
// const express = require("express");
// // New app using express module
// const app = express();
// const bodyParser = require("body-parser");
// var PORT = 3000;
//
// var jsondata = require('./Q1jsondata.json');
// app.use(bodyParser.urlencoded({
// 	extended:true
// }));
// app.use(express.json());
// app.post("/inventory", function(req, res) {
//   console.log(req.body);
//   jsondata.push(req.body);
//   res.json(jsondata);
// });
//
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });



















// 4th Question
// const express = require("express");
// New app using express module
// const app = express();
// const bodyParser = require("body-parser");
// var PORT = 3000;
//
// var jsondata = require('./Q1jsondata.json');
// app.use(bodyParser.urlencoded({
// 	extended:true
// }));
// app.use(express.json());
// app.delete("/inventory", function(req, res){
//   jsondata = [];
//   console.log(req.body);
//   res.json(jsondata);
// });
// app.delete("/inventory/:itemname", function(req, res) {
// jsondata = jsondata.filter((value) => {
//        if ( value.name != req.params.itemname ){
//          return value;
//        }
//      });
//   console.log(req.body);
//   res.json(jsondata);
// });
// app.post("/inventory", function(req, res) {
//   console.log(req.body);
//   jsondata.push(req.body);
//   res.json(jsondata);
// });
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });
