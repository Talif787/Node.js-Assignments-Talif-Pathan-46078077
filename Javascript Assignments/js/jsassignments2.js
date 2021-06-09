

// 1st Question

// function composedValue(){
//     return square(double(num));

// }


// function double(db){
//     return db * 2;
// }


// function square(sq){
//     return Math.pow(sq,2);
// }

// var num = parseInt(prompt("Please enter a number!!!"));
// document.write("The square after doubling the number is: ",composedValue(num));

















// 2nd Question
// function compose(no,ch){
//     if ( ch === 1 ){
//         return square(double(no));
//     }
//     else{
//         return double(square(no));
//     }
// }



// function double(db){
//         return db * 2;
//     }
    
    
// function square(sq){
//         return Math.pow(sq,2);
// }

// var num = parseInt(prompt("Please enter a number!!!"));
// var choice = parseInt(prompt("Please enter 1 to double the number first and then calculate its square!!!"));
// document.write("The result of your selected option is: ",compose(num,choice));












// 3rd Question
// function find(arr,isEvens){
//     var final;
//     for ( j = 0; j < arr.length; j++ ){
//         final=isEvens(arr[j]);
//         if ( final === true ){
//             return arr[j];
//         }
//     }
//     return -1;

// }


// function isEven(no){
//    return ( no % 2 === 0 );
// }

// var num = parseInt(prompt("Please enter the number of elements in the array!!!"));
// var arr1 = new Array();
// for ( i = 0; i < num; i++ ){
//     arr1[i]=parseInt(prompt("Please enter an element"));
// }
// console.log("Hi");
// document.write("The composed find function is as follows: ",find(arr1,isEven));





















// 4th Question
// function maps(arr,squares){
//         var arr2 = new Array();
//         for ( j = 0; j < arr.length; j++ ){
//             arr2.push(squares(arr[j]));
//         }
//         return arr2;
// }



// function square(no){
//     return Math.pow(no,2);
// }

// function squareRoot(no){
//     return Math.sqrt(no);
// }
    
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"));
// var arr1 = new Array();
// for ( i = 0; i < num; i++ ){
//     arr1[i]=parseInt(prompt("Please enter an element"));
// }
// var choice = parseInt(prompt("Please enter 1 for square and any other number for square root!!!"));

// if ( choice === 1 ){
//     document.write("The array with squares of all the elements is: ",maps(arr1,square));
// }
// else{
//     document.write("The array with square roots of all the elements is: ",maps(arr1,squareRoot));
// }


























// function find(arr,isEvens){
//     return arr.map(isEvens)
// }
       
    
// function isEven(no){
//     return ( no % 2 === 0 );
// }
    
// var num = parseInt(prompt("Please enter the number of elements in the array!!!"));
// var arr1 = new Array();
// for ( i = 0; i < num; i++ ){
//     arr1[i]=parseInt(prompt("Please enter an element"));
// }
// console.log("Hi");
// document.write("The composed find function is as follows: ",find(arr1,isEven));
    























// 7th Question
// function square(no){
//     return square;
// }
// console.log(square(5));
























// 6th function
// function maps(arr,squares){
//             var arr1 = new Array();
//             arr1.push(squares(arr[0]));

//             if ( arr.length === 1 ){
//                 return arr1;
//             }
//             else{
//                 return arr1.concat(maps(arr.slice(1),squares));
//             }
//     }

    
    
    
//     function square(no){
//         return Math.pow(no,2);
//     }
    
//     function squareRoot(no){
//         return Math.sqrt(no);
//     }
        
//     var num = parseInt(prompt("Please enter the number of elements in the array!!!"));
//     var arr1 = new Array();
//     for ( i = 0; i < num; i++ ){
//         arr1[i]=parseInt(prompt("Please enter an element"));
//     }
//     var choice = parseInt(prompt("Please enter 1 for square and any other number for square root!!!"));
    
//     if ( choice === 1 ){
//         document.write("The array with squares of all the elements is: ",maps(arr1,square));
//     }
//     else{
//         document.write("The array with square roots of all the elements is: ",maps(arr1,squareRoot));
//     }





















// 5th Question

// function find(arr,isEvens){
//        if ( (arr.length >= 1) && (isEvens(arr[0]))){
//            return arr[0];
//        }
//        else{
//            return find(arr.slice(1),isEvens);
//        }
//     }
    
    
//     function isEven(no){
//        return ( no % 2 === 0 );
//     }
    
//     var num = parseInt(prompt("Please enter the number of elements in the array!!!"));
//     var arr1 = new Array();
//     for ( i = 0; i < num; i++ ){
//         arr1[i]=parseInt(prompt("Please enter an element"));
//     }
//     console.log("Hi");
//     document.write("The composed find function is as follows: ",find(arr1,isEven));