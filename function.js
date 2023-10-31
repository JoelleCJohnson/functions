function celsius_to_fahrenheit(degreesCelsius){
    const fahrenheit = (degreesCelsius * (9 / 5)) + 32;
    return fahrenheit;
}

// console.log(celsius_to_fahrenheit(32) + "\u00B0F");

// Function practice #2 below
function hoursToMinutes(hours){
    const minutes = hours * 60;
    return minutes;
}

// console.log(hoursToMinutes(2));

// function practice 3
function areaOfATriangle(base, height){
    const area = (.5 * base * height);
    return area;
}
// console.log(areaOfATriangle(3, 5));


/**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz")
    }else if(num % 3 === 0 && num % 5 !== 0){
        console.log("Fizz")
    } else if (num % 5 === 0 && num % 3 !== 0) {
        console.log("Buzz")
    } else {
        console.log('No fizzbuzz')
    }
}

// fizzBuzz(3)

function ternaryFizzBuzz(num){
    num % 3 === 0 && num % 5 === 0 ?
    console.log("FizzBuzz")
    :
    num % 3 === 0 && num % 5 !== 0 ?
    console.log("Fizz")
    :
    num % 5 === 0 && num % 3 !== 0 ?
    console.log("Buzz")
    :
    console.log("no fizzbuzz for you")
}

// ternaryFizzBuzz(15)

function palindrome(str){
    const revStr = str.split("").reverse().join("")

    if(str === revStr){
        console.log(`The word ${str} is a palindrome`)
    }
    else {
        console.log(`The word ${str} is NOT a palindrome`)
    }
}

// palindrome('racecar')

/*5. Write a function that takes an array of numbers and moves all of the 0s in the array to the beginning of the array then returns the new array.
Example Input: [4, 0, 2, 0, 1, -3, 5, 0]
Should Return: [0, 0, 0, 4, 2, 1, -3, 5]*/ 

const array = [4, 0, 2, 0, 1, -3, 5, 0]

function zerosToBeginning(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i, 1)
            arr.unshift(0)
        }
    }
    return arr
}
console.log(zerosToBeginning(array))