const convertToCelsius = function(Fahrenheit) {
  let Celsius = (Fahrenheit - 32)/1.8;
  return +Celsius.toFixed(1);


};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = (Celsius * 1.8) + 32;
  return +Fahrenheit.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


//Celsius to fahrenheit
// F = (C * 9/5) + 32
// F - 32 = (C * 1.8)
//(F - 32)/1.8 = C


// ex: 100 = (c * 1.8) + 32
// 68 = c * 1.8
// c = 37.77778

//Fahrenheit to Celsius
// F = (C * 9/5) + 32
//