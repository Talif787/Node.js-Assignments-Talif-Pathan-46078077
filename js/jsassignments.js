// 1st Question
// function evenOrOdd(num1){
//     if( num1 % 2 === 0 ){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// var no = parseInt(prompt("Please enter a number!!!"), 10);

// console.log(evenOrOdd(no));








//2nd Question
// function max(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     if( a > b && a > c ){
//         console.log("The maximum number is " + a);
//     }
//     else if( b > a && b > c ){
//         console.log("The maximum number is " + b);
//     }
//     else{
//         console.log("The maximum number is " + c);
//     }
// }

// var a1 = parseInt(prompt("Please enter the first number!!!"), 10);
// var b1 = parseInt(prompt("Please enter the second number!!!"), 10);
// var c1 = parseInt(prompt("Please enter the third number!!!"), 10);

// max(a1,b1,c1);









// 3rd Question
// function numHeads(head,noOfFlips){

//     if ( head === 1 && noOfFlips % 2 != 0 ){
//         console.log("The number of heads is equal to " + ((noOfFlips-1) / 2) );
//     }
//     else if ( head === 0 && noOfFlips % 2 != 0 ) {
//         console.log("The number of heads is equal to " + ((noOfFlips+1) / 2) );
//     }
//     else{
//         console.log("The number of heads is equal to " + (noOfFlips / 2) );
//     }

// }

// var head1 = parseInt(prompt("Please enter 1 for initially the coin being in head state otherwise 0!!"), 10);

// var numOfFlips = parseInt(prompt("Please enter the number of flips!!!"), 10);

// numHeads(head1,numOfFlips);

// Using random function in JS..
// function numHeads(numberOfFlips){
//     var counth = 0;
//     for( i = 1; i <= numberOfFlips; i++){
//         var x = Math.floor(Math.random()* 2);
//         if ( x === 1){
//             console.log("Its a head!!");
//             counth++;
//         }
//         else{
//             console.log("Oops its a tail!!");
//         }
//     }
//     console.log("The number of heads is " + counth);
// }

// var numsOfFlips = parseInt(prompt("Please enter the number of flips!!!"),10);

// numHeads(numsOfFlips);










// 4th Question
// function headsFraction(numberOfFlips){
//     var counth = 0;
//     for( i = 1; i <= numberOfFlips; i++){
//         var x = Math.floor(Math.random()* 2);
//         if ( x === 1){
//             console.log("Its a head!!");
//             counth++;
//         }
//         else{
//             console.log("Oops its a tail!!");
//         }
//     }
//     console.log("The fraction of heads is equal to " + (counth / numberOfFlips));
// }

// var numsOfFlips = parseInt(prompt("Please enter the number of flips!!!"),10);

// headsFraction(numsOfFlips)









// 5th Question
// function padChars(num1,myStr){
//     var s1 = "";
//     for( i = 1; i <= num1; i++ ){
//         s1 = s1 + myStr;
//     }
//     console.log(s1);
// }

// var nums = parseInt(prompt("Please enter the number of times you want to pad the string!!"),10);
// var str = prompt("Please enter the string to be padded!!!");
// padChars(nums,str);











// 6th Question
// function numRollsToGetSix(){
//     var flag = 1;
//     var noOfRolls = 0;
//     while ( flag === 1 ){
//         var num = Math.floor(Math.random() * 6) + 1 ;
//         if ( num === 6 ){
//             console.log(num);
//             noOfRolls++;
//             break;
//         }
//         else{
//             console.log(num);
//             noOfRolls++;
//         }
//     }
//     console.log("We have to roll the dies " +noOfRolls+ " times.");
// }

// numRollsToGetSix();








// 7th Question
// function goodOrBad(){

//     var Texts = ['Have a GOOD day!', 'Have a BAD day!'];
//     var randomTexts = Math.floor(Math.random() * Texts.length);
//     document.getElementById("good-bad").innerHTML = Texts[randomTexts];

// }

// window.onload = function(){
//     goodOrBad();
// }













// Basic JS
//1st Question 
// var numbers = [1.334, 13, 56, 7.8];
// console.log(numbers);


// var n = parseInt(prompt("Please enter the size of the array!!!"),10);
// var myArray = new Array();
// for( i = 0; i<n; i++ ){
//     myArray[i]=Math.random();
// }
// console.log(myArray);

// var nums = [ Math.random(), Math.random(), Math.random(), Math.random() ];
// console.log(nums);









// 2nd Question
// var num100 = new Array();
// for ( i = 0; i < 99; i++ ){
//     num100[i] = Math.random();
// }
// console.log(num100);










// 3rd Question
// var strings = ["1.256", "2.3", "3.4"];
// var nums = [];
// for (i = 0; i < strings.length; i++ ){
//     nums[i] = parseFloat(strings[i],10);
// }
// console.log(nums);











// 4th Question
// function longestToken(str){

//     var myArray = []
//     var x;
//     var max = 0;
//     var finalString = "";
//     for ( i = 0; i < str.length; i++ ){
//         for ( j = i + 1; j <= str.length; j++ ){
//             myArray.push(str.slice(i,j));
//         }
//     }
//     console.log(myArray);
//     for ( i = 0; i < myArray.length; i++ ){
//         x = myArray[i];
//         var flag = 1;
//         for ( j = 0; j < x.length; j++ ){
//             if ( x[j] === 'a' || x[j] === 'b' ){
//                 flag = 0;
//                 break; 
//             }
//         }
//         if ( flag === 1 ){
//             if ( x.length > max )
//             {
//                 max = x.length
//                 finalString = x;
//             }
//         }
//         else{
//             continue;
//         }
//     }
//     if ( finalString === "" ){
//         console.log("Nothing!!");
//     }
//     else{
//         console.log(finalString);
//     }
    
// }

// var token = prompt("Please enter a string!!!");

// longestToken(token);









// 5th Question
// function myFunction(x){
//     if ( x.indexOf('q') === -1 ){
//         return x.length;
//     }
//     else{
//         return 0;
//     }
// }
// function myFunction1(accumulator,current){
//     return accumulator + current;
// }


// var test1 = [];
// var nums = parseInt(prompt("Please enter the no of words in the array!!!"), 10);
// for ( i = 0; i < nums; i++ ){
//     test1.push(prompt("Please enter a word!!!"));
// }
// console.log(test1);
// var test2 = test1.map(myFunction).reduce(myFunction1)
// console.log(test2);











// Basic JS 
// 7th Question
// function myCar(){
//     console.log("Hello");
// }

// function myBus(){
//     console.log("Driving a bus");
// }










// 8th Question
// function isEven(number){
//     return (number % 2 === 0) ? true : false;
// }







// 1st Question
// window.onload = function(){
//     document.getElementById('good-bad').innerHTML = "HELLO WORLD!!!";

// }


// document.write("HELLO WORLD!!");











// 2nd Question
// var name = prompt("Please enter your name!!!");
// document.getElementById('good-bad').innerHTML = "HELLO " + name.toUpperCase() + " !!!" ;










//3rd Question
// function checkName(name2){
//     if ( ( name2.toLowerCase() === "alice") || ( name2.toLowerCase() === "bob") )
//     {
//         document.getElementById('good-bad').innerHTML = "HELLO " + name2.toUpperCase() + " !!!" ;   
//     }
//     else{
//         document.getElementById('good-bad').innerHTML = "Cannot greet you!!!" ;
//     }
// }


// var name1 = prompt("Please enter your name!!!");
// checkName(name1);












// 4th Question
// function sum1(no){
//     var sum2 = 0;
//     for( i = 1; i <= no; i++ ){
//         sum2 += i;
//     }
//     document.getElementById('good-bad').innerHTML = "The sum of the numbers from 1 to " +no+ " is " +sum2+ "." ;
// }


// var no = parseInt(prompt("Please enter a number!!!"), 10);
// sum1(no);











// 5th Question
// function sum1(no){
//     var sum2 = 0;
//     for( i = 1; i <= no; i++ ){
//         if ( (i%3 === 0) || (i%5 === 0)){
//             console.log(i);
//             sum2 += i;
//         }
//     }
//     document.getElementById('good-bad').innerHTML = "The sum of the numbers from 1 to " +no+ " is " +sum2+ "." ;
// }

// var no = parseInt(prompt("Please enter a number!!!"), 10);
// sum1(no);











// 6th Question
// function sum1(no1, choice1){
//     if ( choice1 === 0 ){
//         var sum2 = 0;
//         for( i = 1; i <= no; i++ ){
//             sum2 += i;
//         }
//         document.getElementById('good-bad').innerHTML = "The sum of the numbers from 1 to " +no+ " is " +sum2+ "." ;
//     }
//     else{
//         var prod = 1;
//         for ( i = 1; i<=no1; i++ ){
//             prod *= i;
//         }
//         document.getElementById('good-bad').innerHTML = "The product of the numbers from 1 to " +no+ " is " +prod+ "." ;
//     }
// }


// var no = parseInt(prompt("Please enter a number!!!"), 10);
// var choice = parseInt(prompt("Please enter 0 to compute sum and any other number to compute!!!"),10);
// sum1(no, choice);












// 7th Question
// function table(no){
//     for ( i = 1; i <= 12; i++ ){
//         document.write(no+" x "+i+" = "+(no*i)+"<br>");
//     }
// }


// var number = parseInt(prompt("Please enter a number to compute the table till 12!!!"),10);
// table(number);











//8th Question
// function prime(largeNo){
//     for ( i = 2; i <= largeNo; i++){
//         var flag = 1;
//         for ( j = 2; j < i; j++ ){
//             if ( i%j === 0 ){
//                 flag=0;
//                 break;
//             }
//         }
//         if( flag === 1 ){
//             document.write(i+"<br>");
//         }
// }
// }

// var largeNo1 = parseInt(prompt("Please enter a large number!!!"),10);
// prime(largeNo1)









// 9th Question
// function guessGame(){
//     var x = 0;
//     var flag = 1;
//     var random1 = Math.floor( Math.random() * 10 ) + 1 ;
//     console.log(random1);
//     var count = 0;
//     while( flag === 1 ){
//         var number = parseInt(prompt("Please enter a number!!!"),10);
//         if ( number === random1 ){
//             console.log(number);
//             count++;
//             flag = 0;
//             break;
//         }
//         else{
//             if ( number!= x )
//             {
//                 console.log(number);
//                 x = number;
//                 count++;
//             }
//             else{
//                 console.log(number);
//             }
//         }
//     }
//     console.log("The number of tries is equal to "+count);
// }

// guessGame();











// 10th Question
// function checkLeapYear(year1){
//     var count = 0;
//     while( count <= 20 ){
//         if( ( year1 % 400 === 0 ) || ( ( year1 % 4 === 0 ) && ( year1 % 100 != 0 ) ) ){
//             count++;
//             document.write(year1+"<br>");
//         }
//         year1++;
//     }
// }

// var year = parseInt(prompt("Please enter a year in DDDD format!!!"),10);
// checkLeapYear(year);










// 11th Question
// function maxElem(accumulator, currentValue){
//     return Math.max(accumulator, currentValue);
// }

// var myArray = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//     myArray[i]=parseInt(prompt("Please enter an element.."),10);
// }
// console.log(myArray);
// var num1 = myArray.reduce(maxElem);
// console.log(num1);








// 12th Question
// function arrayReverse(original1, arr1){
// console.log(original1);
// console.log(arr1.reverse());
// }

// var arr = new Array();
// var original;
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i]=parseInt(prompt("Please enter an element.."),10);
//     }
// original = arr;

// arrayReverse(original, arr);











// 13th Question
// function elemOccur(arr1, num2){
//     if ( arr1.includes(num2) ){
//         document.write("The element "+num2+" is present in the list.");
//     }
//     else{
//         document.write("The element "+num2+" is not present in the list.")
//     }
// }


// var arr = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i]=parseInt(prompt("Please enter an element.."),10);
//     }
// var num1 = parseInt(prompt("Please enter the element to be searched!!!"),10);
// elemOccur(arr, num1);











// 14th Question
// function oddElem(arr1){
//     var arr2 = new Array();
//     var j = 0;
//     for( i = 1; i <= arr1.length; i++ ){
//         if ( i % 2 != 0 ){
//             arr2[j] = arr1[i-1];
//             j++;
//         }
//     }
//     document.write("The original array is "+arr1+"<br>");
//     console.log(arr2);
//     return arr2;
// }

// var arr = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i]=parseInt(prompt("Please enter an element.."),10);
//     }
// document.write("The array containing only odd elements is "+oddElem(arr));












// 15th Question
// function runningTotal(accumulator, currentValue){
//     return accumulator + currentValue;
// }


// var arr = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i]=parseInt(prompt("Please enter an element.."),10);
//     }
// document.write("The running total of the array is "+arr.reduce(runningTotal));











// 16th Question
// function reverseString(str1){
//     var arr1 = str1.split("");
//     arr1.reverse();
//     var x = arr1.join("")
//     console.log(arr1.join(""));
//     if ( str1 === x ){
//         document.write("The entered string "+str1+" is a palindrome.");
//     }
//     else{
//         document.write("The entered string "+str1+" is not a palindrome.");
//     }   
// }

// var str = prompt("Please enter a string to reverse!!!");
// reverseString(str);










// 17th Question
// function arraySum(arr1, num1)
// {
//     if ( num1 === 0 ) {
//         return 0;
//     }
//     else{
//         return arr1[num1-1] + arraySum(arr1, num1-1);
//     }
// }


// var arr = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i]=parseInt(prompt("Please enter an element.."),10);
//     }
// document.write("The sum of the array is "+arraySum(arr, num));














// 18th Question
// function perfectSquare(num){
//     return num**2;
// }


// var arr = new Array();
// var num = parseInt(prompt("Please enter the no of perfect squares you want!!!"),10);
// for ( i = 1; i <= num; i++ ){
//      arr[i-1] = i;
//     }
// console.log(arr);
// var arr2 = arr.map(perfectSquare);
// console.log(arr2);
// document.write("The array with perfect squares are as follows: "+arr2);

    











// 19th Question
// function concatenateList(arrOne, arrTwo){
//     console.log(arrOne);
//     console.log(arrTwo);
//     return (arrOne.concat(arrTwo));
// }

// var arr = new Array();
// var arr1 = new Array();
// var num = parseInt(prompt("Please enter the no of elements for the first array!!"));
// for ( i = 0; i < num; i++ ){
//      arr[i] = prompt("Please enter an element!!");
//     }
// var num1 = parseInt(prompt("Please enter the no of elements for the second array!!"));
// for ( i = 0; i < num1; i++ ){
//      arr1[i] = prompt("Please enter an element!!");
//     }

// // console.log(concatenateList(arr, arr1));
// document.write("The concatenated list is as follows ",concatenateList(arr, arr1));













// 20th Question
// function joinList(arrOne, arrTwo){
//     var joinedArr = new Array();
//     if ( (arrOne.length > 1) && (arrTwo.length > 1) ){
//         var one = 0;
//         var two = 0;
//     for( i = 0; i < (arrOne.length + arrTwo.length); i++){
//         if ( i % 2 === 0 ){
//             joinedArr[i] = arrOne[one];
//             one++;
//         }
//         else{
//             joinedArr[i] = arrTwo[two];
//             two++;
//         }
//     }
// }
// return joinedArr;
// }

// var arr = new Array();
// var arr1 = new Array();
// var num = parseInt(prompt("Please enter the no of elements for the first array!!"));
// for ( i = 0; i < num; i++ ){
//      arr[i] = prompt("Please enter an element!!");
//     }
// var num1 = parseInt(prompt("Please enter the no of elements for the second array!!"));
// for ( i = 0; i < num1; i++ ){
//      arr1[i] = prompt("Please enter an element!!");
//     }
// document.write("The concatenated list by taking elements alternatively is as follows ",joinList(arr, arr1));















// 21st Question
// function sortMergedList(arrOne, arrTwo){
//     console.log(arrOne);
//     console.log(arrTwo);
//     return ((arrOne.concat(arrTwo)).sort());
// }
    
// var arr = new Array();
// var arr1 = new Array();
// var num = parseInt(prompt("Please enter the no of elements for the first array!!"));
// for ( i = 0; i < num; i++ ){
//     arr[i] = parseInt(prompt("Please enter an element!!"),10);
// }
// var num1 = parseInt(prompt("Please enter the no of elements for the second array!!"));
// for ( i = 0; i < num1; i++ ){
//     arr1[i] = parseInt(prompt("Please enter an element!!"),10);
// }
    
// console.log(concatenateList(arr, arr1));
// document.write("The concatenated list is as follows ",sortMergedList(arr, arr1));
    

















// 22nd Question
// function rotate(arr1, rot1){
//     var x = 0;
//     var y = x + rot1;
//     var temp;
//         while( y <= arr1.length-1 ){
//             temp = arr1[x];
//             arr1[x] = arr1[y];
//             arr1[y] = temp;
//             x++;
//             y++;
//         }
//         return arr1;
// }
    
// var arr = new Array();
// var num = parseInt(prompt("Please enter the size of the array!!!"),10);
// for ( i = 0; i < num; i++ ){
//      arr[i] = parseInt(prompt("Please enter an element!!!"),10);
// }
// var rot = parseInt(prompt("Please enter the number by which you want to rotate the array!!!"),10);
// document.write("The array after rotating by " +rot+ " elements is ",rotate(arr, rot));

















// 23rd Question
// function fibo(no){
//     var arr = new Array();
//     var x = 0;
//     var y = 1;
//     arr[0] = x;
//     arr[1] = y;
//     for( i = 1; i <= no-2; i++){
//         arr[i+1] = x + y;
//         x = y;
//         y = arr[i+1];
// }
//     return arr;
// }

// var num = parseInt(prompt("Please enter the number till where you want the fibonnaci series!!!"),10);
// document.write("The fibonnaci series with the first "+num+" elements is as follows: ",fibo(num));
















// 24th Question
// function splitter(no){
//     var arr = no.split("");
//     console.log(arr);
//     for( i = 0; i < arr.length; i++ ){
//         arr[i] = parseInt(arr[i],10);
//     }
//     console.log(arr);
// }


// var num1 = prompt("Please enter a number!!!");
// splitter(num1);


















// 25th Question
// function addSubtractMultiply(num){
//         var arr = num.split("");
//         console.log(arr);
//         for( i = 0; i < arr.length; i++ ){
//             if( arr[i] === '-' ){
//                 arr[i] = '-';
//             }
//             else{
//             arr[i] = parseInt(arr[i],10);
//             }
//         }
//         return arr;
// }


// function add(accumulator, total){
//     return accumulator + total;
// }


// function subtract(accumulator, total){
//     return accumulator - total;
// }


// function multiply(accumulator, total){
//     return accumulator * total;
// }



// var num1 = prompt("Please enter a number!!!");
// var arr1 = addSubtractMultiply(num1);
// arr1.sort(function(a,b) {
//     return b-a;
// })
// var numadd = arr1.reduce(add); 
// console.log("Addition list: ",addSubtractMultiply(numadd.toString(10)));
// var numsub = arr1.reduce(subtract);
// console.log("Subway"+numsub);
// console.log("Subtraction list: ",addSubtractMultiply(numsub.toString(10)));
// var nummul = arr1.reduce(multiply);
// console.log("Multiply list: ",addSubtractMultiply(nummul.toString(10)));




















// 26th Question
// function stringConvert(arr1,base1,base2){
//     var str = arr1.join("");
//     console.log(str);
//     var dec = parseInt(str,base1);
//     console.log("Converted from initial base to decimal: "+dec);
//     var str1 = dec.toString(base2);
//     console.log(str1);
//     console.log("Converted from decimal to target base: ",parseInt(str1));
// }

// var arr = new Array();
// var num = parseInt(prompt("Please enter the number of elements in the list!!!!"));
// for ( i = 0; i < num; i++ ){
//     arr[i] = parseInt(prompt("Please enter an element!!!"));
// }
// var b1 = parseInt(prompt("Please enter initial base!!"));
// var b2 = parseInt(prompt("Please enter target base!!"));
// stringConvert(arr,b1,b2);

















// 29th Question
// function rectangularPattern(arr2, max1){
// for ( i = 1; i <= max1 + 4; i++ )
// {
//     document.write("*");
// }
// document.write("<br>");
// for ( i = 0; i < arr2.length ; i++ )
// {
//     var str = arr2[i];
//     var k = 0;
//     for( j = 0; j < max1 + 4; j++ ){
//         if ( ( j === 0 ) || ( j === max1 + 3 ) ){
//             document.write("*");
//         }
//         else if ( ( j >= 2 ) && (k < str.length) ){
//             document.write(str[k]);
//             k++;
//         }
//         else{
//             document.write("&nbsp");
//         }
//     }
//     document.write("<br>");
// }
// for ( i = 1; i <= max1 + 4; i++ )
// {
//     document.write("*");
// }
// }

// var no = parseInt(prompt("Please enter the number of elements in the list!!!"));
// var arr1 = new Array();
// var max = 0;
// for ( i = 0; i < no; i++ ){
//     arr1[i] = prompt("Please enter an element..");
//     if ( arr1[i].length > max ){
//         max = arr1[i].length;
//     }
// }
// rectangularPattern(arr1, max);














// 30th Question
// function translate(arr2){
//     var temp;
//     var str1;
//     var arr3 = new Array();
//     for( i = 0; i < arr2.length; i++ ){
//         var str = arr2[i].split("");
//         for ( j = 0; j < str.length; j++ ){
//             if ( j <= str.length - 2 ){
//                 temp = str[j];
//                 str[j] = str[j+1];
//                 str[j+1] = temp;
//             }
//         }
//         console.log(str);
//         str1 = str.join("");
//         for( k = 1; k <= 1; k++ ){
//             str1 += 'ay'
//         }
//         if ( i === 0 ){
//             var y = str1.charAt(0).toUpperCase();
//             var z = y + str1.slice(1);
//             arr3[i] = z;
//         }
//         else{
//         arr3[i] = str1;
//         }
//         }
// console.log(arr3.join(" "));
// console.log(arr2);
// console.log(arr3);    
// }

// var no = parseInt(prompt("Please enter the number of elements in the list!!!"));
// var arr1 = new Array();
// var max = 0;
// for ( i = 0; i < no; i++ ){
//     arr1[i] = prompt("Please enter an element..");
// }
// translate(arr1);


















// Assignment 2
// var count = 1;
// while( count <= 3){
//     var num = prompt("Please enter a number!!!");
//     if ( num == null ){
//         alert('Please enter something!!!');
//     }
//     else if ( (isNaN( num )) || num.length <= 0 || num.length >2 ){
//         alert('Please enter valid input!!!');
//     }
//     else{
//         var validInput = parseInt(num);
//         if ( validInput >= 1 && validInput <= 30 ){
//             for ( i = 1; i <= validInput; i++ ){
//                 document.write("*");
//             }
//             document.write("<br>");
//             count++;
//         }
//         else{
//             alert('The input should be between 1 and 30');
//         }
//     }
// }
















// Assignment 3
// var rows = parseInt(prompt("Please enter the number of rows!!!"));
// var columns = parseInt(prompt("Please enter the number of columns!!!"));
// var table = document.createElement("table");
// document.body.appendChild(table);
// var z = document.getElementsByTagName("table");
// z[0].setAttribute("border", "1");
// // var k = 0;
// for ( i = 0; i < rows; i++ ){
//     var tablerow = document.createElement("tr");
//     z[0].appendChild(tablerow);
//     for ( j = 0; j < columns; j++ ){
//         var tablecolumn = document.createElement("td");
//         document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//         // document.getElementsByTagName("td")[k].innerHTML = " Row no "+(i+1)+" Column no "+(j+1);
//         // k++;
//         document.getElementsByTagName("tr")[i].children[j].innerHTML = " Row no: "+(i+1)+", Column no: "+(j+1);
//     }
// }



















// function myFunction(){
//     var temperature = document.getElementById("temp").value;
//     console.log(temperature);
//     if ( temperature === null ){
//         alert('Please enter something!!!');
//     }
//     else if ( isNaN(temperature) || temperature.length < 0 ){
//         alert('Please enter valid temperature!!!');
//     }
//     else{
//         var tempFloat = parseFloat(temperature);
//         if( tempFloat > -459.67 && tempFloat <= 224 ){
//             var celcius = ( tempFloat -  32 ) / 1.8;
//             var celciusFinal = Math.round(celcius * 100) / 100;
//             document.getElementById("result").innerHTML = "Celcius Temperature: "+celciusFinal;
//             flag = false;
//         }
//         else{
//             alert('Out of range!!!');
//         }
//     }
// }




























/// **********                MAJOR CODE AHEAD **********************************************************


// var counthead = 0;

// var tablecount = 0;

// var ec = 0;
// var pp = 0;
// var olive = 0;
// var peppers = 0;
// var bacons = 0;
// var tomatoess = 0;
// var mushroomss = 0;
// var counttop = 1;
// var delsel;
// var baseprice = 10;
// var toppings = 1.5;
// var totals;
// var tipp;

// function myName(){
//     document.getElementById("dummy").innerHTML = 'Please enter your full name in this field..';
// }

// function myEmail(){
//     document.getElementById("dummy").innerHTML = 'Please enter your Email-Id in this field..';
// }

// function myAddress(){
//     document.getElementById("dummy").innerHTML = 'Please enter your complete address in this field..';
// }

// function mySubmit(){
//     document.getElementById("dummy").innerHTML = 'On pressing this button your form will be submitted...';
// }

// function myReset(){
//     document.getElementById("dummy").innerHTML = 'On pressing this button you have to fill the entire form again..';
// }

// function myDefault(){
//     document.getElementById("dummy").innerHTML = 'This is to provide context-sensitive help. Click on any input field or use the TAB key to get more information about the input field.';
// }


// function msg(){
//     if ( counthead < 1 )
//     {
//         var h1 = document.createElement("h1");
//         document.body.appendChild(h1);
//         document.getElementsByTagName('h1')[0].innerHTML = 'Pizza Order Summary';
//         counthead++;
//     }
//     if ( tablecount < 1 ){
//         var table = document.createElement("table");
//         document.body.appendChild(table);
//         document.getElementsByTagName("table")[0].setAttribute("border",1);
//         for ( i = 0; i < 3; i++ ){
//             var tablerow = document.createElement("tr");
//             document.getElementsByTagName("table")[0].appendChild(tablerow);
//             for ( j = 0; j < 2; j++ ){
//             var tablecolumn = document.createElement("td");
//             document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//             if ( j === 0 && i != 2){
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementsByTagName("label")[i].innerHTML;
//                 document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//                 document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black";
//                 document.getElementsByTagName("tr")[i].children[j].style.width = "200px";
//             }
//             else if ( j === 1 && i !=2 ) {
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementsByTagName("input")[i].value;
//                 document.getElementsByTagName("tr")[i].children[j].style.width = "600px";
//             }
//             else if ( i === 2 && j === 0){
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("add").innerHTML;
//                 document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//                 document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black";
//             }
//             else{
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("address").value;
//             }
//         }

//     }
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     console.log(checkboxes);
    

//     for ( i = 3 ; i <= checkboxes.length + 3; i++ ){
//         var tablerow = document.createElement("tr");
//         document.getElementsByTagName("table")[0].appendChild(tablerow);
//         for ( j = 0; j < 2; j++ ){
//             var tablecolumn = document.createElement("td");
//             if ( i === 3 && j === 0 ){
//                 console.log(document.getElementsByTagName("tr"));
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("toppings").innerHTML;
//                 document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//                 document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black";
//             }
//             else if ( i === 3 && j === 1 ){
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = "";
//             }
//             else if ( i > 3 && j === 0 ) {
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = "Topping " + counttop + " :";
//                 document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//                 document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black";
//                 counttop++;
//             }
//             else{
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 if (document.getElementById("echeese").checked && ec === 0 ){
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("echeese").value;
//                 ec++;
//                 }
//                 else if ( document.getElementById("pepperoni").checked && pp === 0 ){
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("pepperoni").value;
//                 pp++;
//                 }
//                 else if ( document.getElementById("olives").checked && olive === 0 ){
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("olives").value;
//                     olive++;

//                 }
//                 else if ( document.getElementById("pepper").checked && peppers === 0 ){
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("olives").value;
//                     peppers++;
//                 }
//                 else if ( document.getElementById("bacon").checked && bacons === 0 ){
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("bacon").value;
//                     bacons++;
//                 }
//                 else if ( document.getElementById("tomatoes").checked && tomatoess === 0 ){
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("tomatoes").value;
//                     tomatoess++;
//                 }
//                 else{
//                     document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("mushrooms").value;
//                     mushroomss++;
//                 }
//             }
//         }
        
        
//     }
//     for ( i = checkboxes.length + 4 ; i <= checkboxes.length + 5; i++ ){
//         var tablerow = document.createElement("tr");
//         document.getElementsByTagName("table")[0].appendChild(tablerow);
//         for ( j = 0; j < 2; j++ ){
//             var tablecolumn = document.createElement("td");
//             if ( i === checkboxes.length + 4 && j === 0 ){
//             document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//             document.getElementsByTagName("tr")[i].children[j].innerHTML = "Delivery?";
//             document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//             document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black";
//             }
//             else if ( i === checkboxes.length + 4 && j === 1 ){
//             document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//             if ( document.getElementById("delivery").checked ){
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = 'Yes';
//                 delsel = 5;
//             }
//             else{
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = 'No';
//                 delsel = 0;
//             }
//             }
//             else if ( i === checkboxes.length + 5 && j === 0 ) {
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = "Tip amount:"; 
//                 document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//                 document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black"; 
//             }
//             else{
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = document.getElementById("tip").value;
//             }
//         }
//     }
//     for ( i = checkboxes.length + 6; i <= checkboxes.length + 6; i++ ){
//         var tablerow = document.createElement("tr");
//         document.getElementsByTagName("table")[0].appendChild(tablerow);
//         for ( j = 0; j < 2; j++ ){
//             var tablecolumn = document.createElement("td");
//             if ( j === 0 ){
//             document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//             document.getElementsByTagName("tr")[i].children[j].innerHTML = "Total:";
//             document.getElementsByTagName("tr")[i].children[j].style.color = "white";
//             document.getElementsByTagName("tr")[i].children[j].style.backgroundColor = "black"; 
//             }
//             else{
//                 if ( document.getElementById("tip").value === "15%" ){
//                     tipp = 0.15;
//                 }
//                 else if ( document.getElementById("tip").value === "30%" ){
//                     tipp = 0.3;
//                 }
//                 else
//                 {
//                     tipp = 0.2;
//                 }
//                 total = (baseprice + 1.5 * checkboxes.length + delsel)* (1.0 + tipp);
//                 var total1 = Math.round((total + Number.EPSILON)*100)/100;
//                 document.getElementsByTagName("tr")[i].appendChild(tablecolumn);
//                 document.getElementsByTagName("tr")[i].children[j].innerHTML = "$"+total1;   
//             }
//         }

//     }
//     for ( i = 0; i < document.getElementsByTagName("tr").length; i++ ){
//         if ( i % 2 != 0 ){
//             document.getElementsByTagName("tr")[i].children[1].style.backgroundColor = "#eee";
//         }
//     }
//      tablecount++;   
// }
// }






// function myFunction(){
//     if ( document.getElementById("echeese").checked || document.getElementById("pepperoni").checked || document.getElementById("olives").checked || document.getElementById("pepper").checked || document.getElementById("bacon").checked || document.getElementById("tomatoes").checked || document.getElementById("mushrooms").checked)
// {   
//    document.getElementById("summary").disabled = false;
//    return false;
   
// }
// else{
//     alert('Please select atleast one topping!!');
//     return false;
// }
// }












