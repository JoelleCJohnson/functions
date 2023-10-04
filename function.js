function celsius_to_fahrenheit(degreesCelsius){
    const fahrenheit = (degreesCelsius * (9 / 5)) + 32;
    return fahrenheit;
}

console.log(celsius_to_fahrenheit(32) + "\u00B0F");