"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("Hello World!!!");
console.log("Hii how are You!!!");
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
function getNextArmstrong(no) {
    var i, x, sum, _i, x_1, num;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = no;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 5];
                x = i.toString();
                sum = 0;
                for (_i = 0, x_1 = x; _i < x_1.length; _i++) {
                    num = x_1[_i];
                    sum += Math.pow(parseInt(num), 3);
                }
                if (!(sum === i && i <= 1000)) return [3 /*break*/, 3];
                return [4 /*yield*/, i];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                if (i >= 1000) {
                    alert("No is greater than 1000 hence resetting!!!");
                    i = -1;
                    i++;
                }
                else {
                    i++;
                }
                _a.label = 4;
            case 4: return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}
var it = getNextArmstrong(372);
console.log(it.next().value);
//# sourceMappingURL=Sample.js.map