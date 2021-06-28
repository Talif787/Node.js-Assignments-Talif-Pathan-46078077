// console.log("Hello World!!!");
// console.log("Hii how are You!!!");




// 1st Assignment
// 1st Question
// const PI =  3.4;
// PI = 4.3;
// console.log(PI); 









// 2nd Question
// let i = 1;
// if ( i === 1 ){
//     let j = 2;
// }
// else{
//     let j = 3;
// }
// console.log(j);

















// 3rd Question
// let order:any = {
//     id: 1, 
//     title: "The power of Subconcious Mind", 
//     price: 30
// };

// console.log(order);



// console.log(order);

// order.printOrder = function(){
//     return this.id;
// }

// order.getPrice = function(){
//     return this.price;
// }

// console.log(order);
// console.log(order.printOrder());
// console.log(order.getPrice());

// let order = {
//     id: 1, 
//     title: "The power of Subconcious Mind", 
//     price: 30,
//     printOrder: function(){
//         return this.id;
//     },
//     getPrice: function(){
//         return this.price;
//     }
// };

// let new_Obj = Object.assign({},order);

// console.log(new_Obj);
























// 4th Question

// let arr = ['Talif', 'Amar', 'Akbar'];

// const mappedArr = arr.map(value => {
//     return {
//       name: value,
//       length: value.length
//     }
//   });
// console.log(mappedArr);













// 5th Question
// let add = (add1=1,add2=2) => add1 + add2;
// console.log(add());


















// 5th Question
// let userFriends = function(username, ...friends){
//     console.log(username);
//     for (let friend of friends){
//         console.log(friend);
//     }
// };


// let arr = ['Talif', 'Amar', 'Akbar'];
// userFriends('Jay',...arr);
























// 5th Question
// let printCapitalNames = function(...arr1){
//         for( let name of arr1 ){
//             let x = name.toLowerCase();
//             console.log(x.toUpperCase());
//         }
// };


// let arr = ['Talif', 'Amar', 'Akbar', 'Joy', 'Malkhan'];
// printCapitalNames(...arr);


















// 6th Question
// let laptopModel = "HP";
// let deskNo = 234567;
// let name1 = "Talif";
// console.log(` Laptop Model: ${laptopModel} Desk No: ${deskNo} Name: ${name1}`);

















// 7th Question
// let arr = ['Talif', 'Amar', 'Male',26];

// let [, lastName] = arr;
// console.log(lastName);











// 7th Question
// let organization = { 
//     name1: 'Talif Pathan',
//     address: {
//         city: 'Mumbai',
//         State: 'Maharashtra',
//         Street: 'Dalal Street',
//         Pincode: 400053
//       }
//   };


// let { name1 , address: {
//     city,
//     State,
//     Street,
//     Pincode
// }} = organization;

// console.log(Pincode);

















// 8th Question
// let sum1 = 0;
// class Account{
//     constructor(id, name1, balance) {
//       this.id = id;
//       this.name1 = name1;
//       this.balance = balance;
//       sum1 += this.balance;
//     }
   
//     getBalance(){
//         return sum1;
//     }
// }
 
//   class SavingsAccount extends Account{
//       constructor(id, name1, balance, interest){
//           super(id, name1, balance);
//           this.interest = interest;
//       }
//   }

//   class CurrentAccount extends Account{
//       constructor(id, name1, balance, cash_credit){
//         super(id, name1, balance);
//           this.cash_credit = cash_credit;
//       }
//       getBalance(){
//           return super.getBalance();
//       }
//   }

//   // Instantiate the class
//   let savacc1 = new SavingsAccount(1,'Talif',1000,55);
//   let savacc2 = new SavingsAccount(2,'Talif Pathan',2000,60);
//   let savacc3 = new SavingsAccount(6,'Harmeen Pathan',1500,60);
//   let curracc1 = new CurrentAccount(3,'Andalib Pathan',2000,62);
//   let curracc2 = new CurrentAccount(4,'Nawsheen Pathan',2000,65);


//   console.log(curracc1.getBalance());
  

















// 1st Question
// class Fibo{

// constructor(){

// }

// let previousNo;
// let currentNo;
// function makeRangeIterator(previousNo,currentNo) {
//     let iterationCount = 0;
//     return {
//        next: function() {
//            if (iterationCount === 0) {
//                 iterationCount++;
//                return { value: previousNo+currentNo, done: false }   
//            }
//            return { value: iterationCount, done: true }
//        }
//     }
// }

// let it = makeRangeIterator(2, 3);

// console.log(it.next());
// console.log(it.next());

// }






















// 2nd Question
// function getNextArmstrong(start = 0) {
//     const test = start;
//     let testNum = start+1;
//     let iterationCount = 0;
//     let numString;
    

//     const rangeIterator = {
//        next: function() {
//         let sum = 0;
//            numString = testNum.toString()
//            for (let number of numString){
//                sum += Math.pow(parseInt(number),3);
//            }
//            if ( sum === testNum && iterationCount === 0 ) {
//                result = { value: "The next armstrong number after "+test+" is "+testNum, done: false }
//                iterationCount++;
//                return result;
//            }
//            else if ( iterationCount === 0 ){
//             result = { value: "Not an armstrong no: "+testNum, done: false }
//             testNum++;
//             return result;
//            }
//            else{
//             return { value: iterationCount, done: true }
//            }    
//        }
//     };
//     return rangeIterator;

// }

// const it = getNextArmstrong(153);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value);
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value);
















// 3rd Question
// function *getNextArmstrong(no) {
//     let i = no;
//     while(true){
//         let x = i.toString();
//         let sum = 0;
//         for ( let num of x ){   
//             sum += Math.pow(parseInt(num),3);
//         }
//         if ( sum === i && i<=1000 ){
//             yield i;
//         }
//         else if ( i>=1000 ){
//             alert("No is greater than 1000 hence resetting!!!");
//             i = -1;
//             i++;
//         }
//         else{
//             i++;
//         }
//     }
// }
 
// let it = getNextArmstrong(372);
 
// console.log(it.next().value);   





















// let x = 0;
// let  y = 0;

// function add(x,y) {
//     return new Promise((resolve,reject) => {
//         if (x+y){
//             resolve(x+y)
//         }
//         else{
//             reject("Could not add two values!!!")
//         }
//     })
// }

// add(x,y).then( (message) => {console.log(message)}).catch( (message) => {console.log(message)})













// 3rd Assignment
// 1st Question
// let x = 2;
// let you = 10;
// const promiseone = new Promise((resolve, reject) => {
//     resolve(x)
// })
// const promisetwo = new Promise((resolve, reject) => {
//     resolve(you)
// })

// Promise.all([
//     promiseone,
//     promisetwo
// ]).then((k) => { 
//     console.log(k.reduce(function(accumulator,current){
//         return accumulator+current;
//     }));
// })


















// 2nd Question
// let sum1 = 0;
// class Account{
//     constructor(id, name1, balance) {
//       this.id = id;
//       this.name1 = name1;
//       this.balance = balance;
//       sum1 += this.balance;
//     }
   
//     getBalance(){
//         return sum1;
//     }
// }
 
//   class SavingsAccount extends Account{
//       constructor(id, name1, balance, interest){
//           super(id, name1, balance);
//           this.interest = interest;
//       }
//   }

//   class CurrentAccount extends Account{
//       constructor(id, name1, balance, cash_credit){
//         super(id, name1, balance);
//           this.cash_credit = cash_credit;
//       }
//       getBalance(){
//           return super.getBalance();
//       }
//   }

//   // Instantiate the class
//   let savacc1 = new SavingsAccount(1,'Talif',1000,55);
//   let savacc2 = new SavingsAccount(2,'Talif Pathan',2000,60);
//   let savacc3 = new SavingsAccount(6,'Harmeen Pathan',1500,60);
//   let curracc1 = new CurrentAccount(3,'Andalib Pathan',2000,62);
//   let curracc2 = new CurrentAccount(4,'Nawsheen Pathan',2000,65);


//   console.log(curracc1.getBalance());
  



















// 3rd Question
// interface Printable { 
//     firstName:string, 
//     lastName:string, 
//     print: ()=>string 
//  } 
 
//  var circle:Printable = { 
//     print: ():string =>{return "Hi, you are a circle!!!"} 
//  }
 
//  var employee:Printable = { 
//     firstName:"Jim",
//     lastName:"Blakes", 
//     print: ():string =>{return "Hello, you are an employee!!!"} 
//  } 

//  function printAll(employee: {firstName, lastName, print}, circle: {print}){
//     console.log(employee.print());
//     console.log(circle.print());
//  }

//  printAll({ 
//     firstName:"Jim",
//     lastName:"Blakes", 
//     print: ():string =>{return "Hello, you are an employee!!!"} 
//  } ,{ 
//     print: ():string =>{return "Hi, you are a circle!!!"} 
//  });
   














// 4th Question
// let chatroom1 = new Map(
// [
//     [ "Amit", [] ],
//     [ "Ajit", [] ],
//     [ "Talif", [] ]
// ]
// );

// let setamit = new Set(["Hello Talif", "Assignment kiya kya??"]);
// let setajit = new Set(["Hello Amit", "Meko Error aaraha hai assignment mein."]);
// let settalif = new Set(["Hello Amit", "Bhai kuch kuch questions hi hue hai.."]);


// for (let value of setamit) {
//     chatroom1.get("Amit").push(value);
// }
// for (let value of setajit) {
//     chatroom1.get("Ajit").push(value);
// }
// for (let value of settalif) {
//     chatroom1.get("Talif").push(value);
// }


// console.log("Chatroom 1: ",chatroom1);


// let chatroom2 = new Map(
//     [
//         [ "Junaid", [] ],
//         [ "Shavej", [] ],
//         [ "Aditya", [] ]
//     ]
//     );
    
// let setjunaid = new Set(["Shavej Bhai", "Mirzapur 2 dekha kya???"]);
// let setshavej = new Set(["Ha Bhai", "Munna Bhaiyya rockss!!!"]);
// let setaditya = new Set(["Hey Junaid", "The family man season 2 dekha??"]);
    
    
// for (let value of setjunaid) {
//         chatroom2.get("Junaid").push(value);
// }
// for (let value of setshavej) {
//         chatroom2.get("Shavej").push(value);
// }
// for (let value of setaditya) {
//         chatroom2.get("Aditya").push(value);
// }

// console.log("Chatroom 2: ",chatroom2);


// console.log("Now displaying the users of the first chatroom..")
// for (let user of chatroom1.keys()) {
//     console.log(user); 
//   }

// console.log("Now displaying the users of the second chatroom..")
// for (let user of chatroom2.keys()) {
//     console.log(user); 
//   }

// console.log("Now displaying the messages of each user in chatroom1..")
// for (let [key, value] of chatroom1.entries()) {
//     console.log(key, value);
//   }


// console.log("Now displaying the messages of each user in chatroom2..")
// for (let [key, value] of chatroom2.entries()) {
//       console.log(key, value);
// }





















// the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });


// chatroom1.get("Amit").push("Hello Talif"); // <-- now add to the array
// chatroom1.get("Amit").push("Assignment kiya kya??");
// chatroom1.get("Ajit").push("Hello Amit"); // <-- now add to the array
// chatroom1.get("Ajit").push("Meko Error aaraha hai assignment mein.");
// chatroom1.get("Talif").push("Hello Amit"); // <-- now add to the array
// chatroom1.get("Talif").push("Bhai kuch kuch questions hi hue hai..");




// class Main {
//       constructor() {
//         console.log("We are inside the Constructor!!!");
//       }
//       main() {
//         console.log("We are inside the main method!!!");
//         var express = require('express');
//         var app = express();
//         var PORT = 8081;
//         var fs = require('fs');
//         var jsondata = require('./Q1jsondata.json')
//         var jsondata1;

//         interface IDatabase {
//             getItem(name: string): object;
//             getInventory(): any;
//         }
//         class FakeDatabase implements IDatabase{
//             constructor() {
//                 console.log("We are inside the FakeDatabase Constructor!!!");
//               };
//             getItem(name1: string){
//                 jsondata1 = jsondata.filter((value) => {
//                     if ( value.name === name1 ){
//                       return value;
//                     }
//                   });
//                   if (jsondata1.length === 1){
//                     return jsondata1[0] ;
//                   }
//                   else{
//                     return ;
//                   }

//             }
//             getInventory(){
//                 return jsondata;
//             }
//         }
//         // Without middleware
//         app.get('/inventory', function(req, res){
//             let myFD = new FakeDatabase();
//             let objinventory = myFD.getInventory();
//             res.json(objinventory);
//         });
    
//         app.get('/inventory/:names', function(req, res){
//         let myFD1 = new FakeDatabase();
//         let objitem = myFD1.getItem(req.params.names);
//         res.json(objitem);
         
//         });
//         app.listen(PORT, function(err){
//             if (err) console.log(err);
//             console.log("Server listening on PORT", PORT);
//         });
//       }
//     }
    
//     let myMain = new Main();
//     myMain.main();
    
    




      var express = require('express');
      var app = express();
      var PORT = 8081;
      var fs = require('fs');
      var jsondata = require('./Q1jsondata.json')
      var jsondata1;

      interface IDatabase {
          getItem(name: string): object;
          getInventory(): object[];
      }
      class FakeDatabase implements IDatabase{
          constructor() {
              console.log("We are inside the FakeDatabase Constructor!!!");
            };
          getItem(name1: string){
              jsondata1 = jsondata.filter((value) => {
                  if ( value.name === name1 ){
                    return value;
                  }
                });
                if (jsondata1.length === 1){
                  return jsondata1[0] ;
                }
                else{
                  return  {Error: "Cannot find the item"};
                }

          }
          getInventory(){
              return jsondata;
          }
      }
      // Without middleware
      app.get('/inventory', function(req, res){
          let myFD = new FakeDatabase();
          let objinventory = myFD.getInventory();
          res.json(objinventory);
      });
  
      app.get('/inventory/:names', function(req, res){
      let myFD1 = new FakeDatabase();
      let objitem = myFD1.getItem(req.params.names);
      res.json(objitem);
       
      });
      app.listen(PORT, function(err){
          if (err) console.log(err);
          console.log("Server listening on PORT", PORT);
      });
    
  
  
 
  
  











