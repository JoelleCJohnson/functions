function celsius_to_fahrenheit(degreesCelsius){
    const fahrenheit = (degreesCelsius * (9 / 5)) + 32;
    return fahrenheit;
}

console.log(celsius_to_fahrenheit(32) + "\u00B0F");

// Function practice #2 below
function hoursToMinutes(hours){
    const minutes = hours * 60;
    return minutes;
}

console.log(hoursToMinutes(2));

// function practice 3
function areaOfATriangle(base, height){
    const area = (.5 * base * height);
    return area;
}
console.log(areaOfATriangle(3, 5));