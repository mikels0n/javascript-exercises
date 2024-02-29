const convertToCelsius = function(tempInFahr) {
  let tempInCel = (tempInFahr - 32) * (5/9)
  return(Math.round(tempInCel * 10) / 10)
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFahr = tempInCel * 9/5 + 32
  return(Math.round(tempInFahr * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
