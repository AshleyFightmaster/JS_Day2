//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const person_info = (object) => {
    console.log(object["pizza"], object['tacos'], object['burgers'], object['ice_cream'],
    object["shakes"][0])
}
person_info(person3)


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }

    happyBirthday = () => {
        this.age++
        console.log(`Happy Birthday, ${this.name}! You are now ${this.age}!!`)
    }
}

const person1 = new Person('Ashley', '27')
const person2 = new Person('Beth-Renee', '5')
person1.printInfo()
person2.printInfo()
person2.happyBirthday()
person2.happyBirthday()
person2.happyBirthday()
person2.printInfo()
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const len_word = (str) => {
    return new Promise((resolve, reject) => {
        const len = str.length
        setTimeout(() => {
            if(len > 10){
                resolve('Big word')
            } else {
                reject('Small Number')
            }
        }, 4000)
    })
}
const response = len_word('hello my name is')
setTimeout(() => {console.log(response)}, 5000)


//codewars ---------- #1
/* 
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
  let output = ''
  num = num.toString()
  for(let i of num){
    x = parseInt(i) ** 2
    output += (x)
  }
  return parseInt(output);
}

console.log(squareDigits(3456))

// --------------------- # 2
/* 
Given a month as an integer from 1 to 12, return to which quarter 
of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; 
month 6 (June), is part of the second quarter;
 and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
    // Your code here
    switch (month) {
        case 1 :
          return 1
          break;
        case 2 :
          return 1
          break;
        case 3 :
          return 1
          break;
        case 4:
          return 2
          break;
        case 5:
        return 2
        break;
        case 6:
        return 2
        break;
        case 7:
        return 3
        break;
        case 8:
        return 3
        break;
        case 9:
        return 3
        break;
        case 10:
        return 4
        break;
        case 11:
        return 4
        break;
        case 12:
        return 4
        break;
    }
  }

console.log(quarterOf(6))