// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//--what is temp amplitude difference between highest and lowest value
// --how to calculate highest and lowest values max and min temp
// --what a sensor error is and what to do

// how to ignore errors
// find max value
// find min value
// substract min from max and return it

const calcTempAmplitude = function (temps) {
  //generic function that takes any arrays/values
  let max = temps[0]; //we assume that the first element of the array is the biggest because we didn't loop over the array yet
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") {
      continue;
    }
    if (currentTemp > max) {
      //current position of the array
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
    //console.log(max, min); //we can see results of each iteration by putting console.log in loop
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitude(temperatures));
const ampl = calcTempAmplitude(temperatures);
console.log(ampl);

//TASK: function should now receive two arrays of temp
//--with two arrays should we implement functionality twice? no.Just merge arrays

//merge two arrays
const calcTempAmplitude1 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") {
      continue;
    }
    // debugger;  this is used to debbuger
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitude1([1, 2, 3, 4], [5, 6, 7, 8, 9]));

//Debugging (fixing errors)
//using console
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C) FIX (adding Number function)
    value: Number(prompt("Degrees celsius")), //prompt function always return string
  };
  //B) FIND
  console.log(measurement);
  //console.table(measurement);
  //console.log(typeof measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
//A) IDENTIFY

console.log("-----------------Coding challenge----------------------");

const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = "";
  const arrayToString = arr.toString();
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(str);
};
//UNDERSTANDING THE PROBLEM
//array trensformed to string separated by ...
//what is the X days? index = 1

//BREAKING UP INTO SUB-PROBLEMS
//transform array into string
//transforma each element to string with C
//string need to contain day (index + 1)
//add ... between elements start and end of string
const arrayToString = maxTemps1.toString();
console.log(arrayToString);
console.log(typeof arrayToString);
printForecast(maxTemps2);

const reversed = function (arr) {
  const r = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    r.push(element);
  }
  return r;
};
console.log(reversed([temperatures]));
