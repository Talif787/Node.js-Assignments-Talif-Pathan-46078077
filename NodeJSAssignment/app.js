// 1st Question
// var http = require('http');
//
// var server = http.createServer(function(req,res){
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Success, i am listening from port: 3000 ');
//   res.end();
// }).listen(3000,'127.0.0.1');












// 2nd Question
// var fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.readFile(myArgs[0], 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });












//
// var testFolder = './Nodejs';
// var fs = require('fs');
//
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });



// 3rd Question
// const directory = '../Nodejs';
// const path = require('path');
// const fs = require('fs');
//
// fs.readdir(directory, (err, files) => {
//   files.forEach(file => {
//     if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
//       console.log('Directory: ' + file);
//     } else {
//       console.log('File: ' + file);
//     }
//   });
// });
















// 4th QUESTION
// const fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.writeFile('writeMe.txt', myArgs.join(" "), err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   //file written successfully
//   console.log('The file was saved!;');
// })


















// 5th Question
// const fs = require('fs')
//
// const string = "John";
//
// fs.readFile('writeMe.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   var array = data.split(" ");
//   var count = 0;
//   for (let value of array){
//     if( value === string ){
//       count++;
//     }
//   }
//   console.log("The string "+string+" has "+count+" occurences.");
// })


//
// const fs = require('fs')
//
// const string = "Hey";
//
// fs.readFile('writeMe.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   var array = data.split(" ");
//   var count = 0;
//   for (let value of array){
//     if( value.includes(string) ){
//       count++;
//     }
//   }
//   console.log("The string "+string+" has "+count+" occurences.");
// })






// 6th Question Phase 1
// var calculator = require('./calculator.js');
//
// console.log(calculator.add(3,7));
// console.log(calculator.multiply(3,7));








// 6th Question Phase 2
// var index = require('./index.js');
// console.log(index.sum.sum(2,7));
// console.log(index.multiplication.multiplication(2,7));
// console.log(index.subtraction.subtraction(2,7));
// console.log(index.division.division(2,7));









// 6th Question Phase 3
// var moment = require('moment');
// var calculator = require('./calculator.js');
//
// console.log("Today is:",moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
// console.log(calculator.add(3,7));
// console.log(calculator.multiply(3,7));










// 7th Question
// var strftime = require('strftime'); // not required in browsers
// console.log(strftime('%H:%M:%S'));





















// 8th Question
// var fs = require('fs');
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.readFile(myArgs[0], 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   else{
//     var array = data.split(",");
//     var sum = 0;
//     array.forEach((item, i, array1) => { sum += parseInt(item.trim());
//     });
//     console.log("The sum of the numbers in the integers.txt file is: "+sum);
//   }
// });














// 9th Question
// var fs = require("fs");
// var array =  new Array();
//
// // Create a readable stream
// var readerStream = fs.createReadStream(__dirname + '/lorem.txt', {
//     flag: 'a+',
//     encoding: 'UTF-8',
//     start: 0,
//     highWaterMark: 300
// });
//
// // Set the encoding to be utf8.
// // readerStream.setEncoding('UTF8');
//
// console.log("Program Ended");
//
// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//   console.log("New Chunk received..");
//   console.log(chunk);
//   array.push(chunk);
// });
//
//
//
// readerStream.on('end',function() {
//    console.log(array);
// });
//
// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });
















// 10th Question-1
// var fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.writeFile('Question10-1.txt' , myArgs.join(" ") , function (err) {
//   if (err) throw err;
//   console.log('The file was Saved!');
// });








// 10th Question-2
// var fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.writeFile(myArgs[0] , myArgs.slice(1).join(" ") , function (err) {
//   if (err) throw err;
//   console.log('The file was Saved!');
// });










// 10th Question Part-3
// var fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
//
// fs.writeFile(myArgs[0] , myArgs[1].concat("\n") , function (err) {
//   if (err) throw err;
//   console.log('The file was Saved!');
//   fs.readFile(myArgs[0], 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
// });















// 11th Question
// var fs = require('fs')
// fs.readFile('../familyman2.txt', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });













// 12th Question
// var moment = require('moment');
// console.log(moment().format('L LTS'));















// 13th Question
// var fs = require('fs')
//
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);
// console.log("Hello, "+myArgs[0]+"!");
