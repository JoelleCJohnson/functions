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

palindrome('.racecar.')