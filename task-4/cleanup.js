// Converts temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Converts temperature from Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

//etermines weather status based on Celsius temperature
function getWeatherStatus(tempCelsius) {
  if (tempCelsius < 0) {
    return "Freezing";
  } else if (tempCelsius >= 0 && tempCelsius < 10) {
    return "Cold";
  } else if (tempCelsius >= 10 && tempCelsius < 20) {
    return "Mild";
  } else if (tempCelsius >= 20 && tempCelsius < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

// Calculates wind chill based on Celsius temperature and wind speed in km/h
function calculateWindChill(tempCelsius, windSpeed) {
  const constant = 13.12;
  const tempCoeff1 = 0.6215;
  const windCoeff1 = 11.37;
  const windExponent = 0.16;
  const tempCoeff2 = 0.3965;
  
  return constant + 
         tempCoeff1 * tempCelsius - 
         windCoeff1 * Math.pow(windSpeed, windExponent) + 
         tempCoeff2 * tempCelsius * Math.pow(windSpeed, windExponent);
}

// Generates a weather report for a given city
function generateWeatherReport(cityName, tempCelsius, windSpeed) {
  const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
  const tempKelvin = celsiusToKelvin(tempCelsius);
  const weatherStatus = getWeatherStatus(tempCelsius);
  const windChill = calculateWindChill(tempCelsius, windSpeed);
  
  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + tempCelsius + "°C");
  console.log("Temperature: " + tempFahrenheit + "°F");
  console.log("Temperature: " + tempKelvin + "K");
  console.log("Status: " + weatherStatus);
  console.log("Wind chill: " + windChill.toFixed(2) + "°C");
  console.log("---");
}

// Example 
generateWeatherReport("Amsterdam", 22, 15);
generateWeatherReport("Berlin", 15, 20);
generateWeatherReport("Copenhagen", -5, 25);