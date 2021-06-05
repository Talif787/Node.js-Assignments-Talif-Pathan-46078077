
// // 1st Question
// var Rectangle = function (length1,breadth){
//     this.length1 = length1;
//     this.breadth = breadth;
//     this.area = this.length1 * this.breadth;
// }


// var rect = new Rectangle(20,30);
// console.log(rect.area);
// var rect = new Rectangle(40,40);
// console.log(rect.area);
// var rect1 = new Rectangle(25,30);
// var rect2 = new Rectangle(50,30);

// console.log(rect.area);

// console.log(rect1.length1);

// console.log(rect2.breadth);


// rect1.length1 = 40;
// rect2.breadth = 39;
// console.log(rect1.length1);
// console.log(rect2.breadth);






// // 2nd Question
// Rectangle.prototype.getPerimeter = function(length2,breadth2){
//         return 2 * (length2 + breadth2);
// };

// console.log(rect.getPerimeter(20,30));





// 4th and 5th Question

// var person = {firstName:"Talif", lastName:"Pathan"};

// console.log(person.firstName);
// console.log(person.lastName);

// person.lastName = "Doe";

// console.log(person.lastName);


// console.log(person.middlename);

// person.middleName = "Haji Ahmed";

// console.log("Final Name:");
// console.log(person.firstName);
// console.log(person.middleName);
// console.log(person.lastName);

// console.log(person);









// 6th Question
// var string = "{firstName: 'Talif', lastName: 'Pathan'}";
// eval('var obj='+string);
// console.log(obj.lastName);


// 7th Question
// var obj1 = JSON.parse('{ "firstName": "Talif", "lastName": "Doe" }');
// console.log(obj1);
// console.log(obj1.lastName)














class BankAccount{
    constructor(accNo,accHolderName,accBalance,salaryOrLimit){
        this.accNo = accNo;
        this.accHolderName = accHolderName;
        this.accBalance = accBalance;
        this.salaryOrLimit = salaryOrLimit;
    }

}
class Savings extends BankAccount{
    constructor(accNo,accHolderName,accBalance,salary){
        super(accNo,accHolderName,accBalance,salary);
        this.salary = salary;
    }
    withdraw(amount) {
        if ( amount <= this.salary && this.accBalance >= amount ){
            this.accBalance = this.accBalance - amount;
            console.log("Balance after withdrawal is "+this.accBalance);
        }
        else{
            alert("Not enough balance!!!");
        }
}
}

class Current extends BankAccount{
    constructor(accNo,accHolderName,accBalance,limit){
        super(accNo,accHolderName,accBalance,limit);
        this.limit = limit;
    }
    withdraw(amount) {
        if ( amount <= this.limit && this.accBalance >= amount ){
            this.accBalance = this.accBalance - amount;
            console.log("Balance after withdrawal from current account is "+this.accBalance);
        }
        else{
            alert("Not enough balance!!!");
        }

}
}
mysav = new Savings(1,"Talif Pathan",30000,12000);
mysav.withdraw(5000);
mycurr = new Current(2,"Andalib Pathan",40000,30000);
mycurr.withdraw(20000);






