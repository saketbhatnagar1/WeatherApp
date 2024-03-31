// async function fetchData() {
//   const url =
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "//Enter your API KEY",
//       "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);

//     const cloud_pct = result.cloud_pct;
//     const temp = result.temp;
//     // const feels_like = result.feels_like;
//     const humidity = result.humidity;
//     const min_temp = result.min_temp;
//     const max_temp = result.max_temp;
//     const wind_speed = result.wind_speed;
//     const wind_degrees = result.wind_degrees;
//     const sunrise = result.sunrise;
//     const sunset = result.sunset;

//     document.getElementById("cloud_pct").textContent = cloud_pct;
//     document.getElementById("temp").textContent = temp;
//     // document.getElementById("feels_like").textContent = feels_like;
//     document.getElementById("humidity").textContent = humidity;
//     document.getElementById("min_temp").textContent = min_temp;
//     document.getElementById("max_temp").textContent = max_temp;
//     document.getElementById("wind_speed").textContent = wind_speed;
//     document.getElementById("wind_degrees").textContent = wind_degrees;
//     document.getElementById("sunrise").textContent = sunrise;
//     document.getElementById("sunset").textContent = sunset;
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the async function
// fetchData();

//second
// async function fetchData(city) {
//   const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "Enter your api key",
//       "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);

//     const cloud_pct = result.cloud_pct;
//     const temp = result.temp;
//     const humidity = result.humidity;
//     const min_temp = result.min_temp;
//     const max_temp = result.max_temp;
//     const wind_speed = result.wind_speed;
//     const wind_degrees = result.wind_degrees;
//     const sunrise = result.sunrise;
//     const sunset = result.sunset;

//     document.getElementById("cloud_pct").textContent = cloud_pct;
//     document.getElementById("temp").textContent = temp;
//     document.getElementById("humidity").textContent = humidity;
//     document.getElementById("min_temp").textContent = min_temp;
//     document.getElementById("max_temp").textContent = max_temp;
//     document.getElementById("wind_speed").textContent = wind_speed;
//     document.getElementById("wind_degrees").textContent = wind_degrees;
//     document.getElementById("sunrise").textContent = sunrise;
//     document.getElementById("sunset").textContent = sunset;
//   } catch (error) {
//     console.error(error);
//   }
// }

// Call the fetchData function with a city parameter
// const search = document.getElementById("submit");
// search.addEventListener("click", (e) => {
//   e.preventDefault;
//   c = document.getElementById("cityname");
//   c.innerHTML = citysearch.value;
//   fetchData(citysearch.value);
// });

// Function to fetch weather data for a given city
async function fetchData(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": //enter your api key,
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // Update HTML with weather data
    document.getElementById("cloud_pct").textContent = result.cloud_pct;
    document.getElementById("temp").textContent = result.temp;
    document.getElementById("humidity").textContent = result.humidity;
    document.getElementById("min_temp").textContent = result.min_temp;
    document.getElementById("max_temp").textContent = result.max_temp;
    document.getElementById("wind_speed").textContent = result.wind_speed;
    document.getElementById("wind_degrees").textContent = result.wind_degrees;
    document.getElementById("sunrise").textContent = result.sunrise;
    document.getElementById("sunset").textContent = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function with the city parameter when the form is submitted
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const city = document.getElementById("citysearch").value;
  const cityNameElement = document.getElementById("cityname");
  cityNameElement.textContent = city; // Display city name

  fetchData(city); // Fetch data for the entered city
});

// Call the fetchData function with a default city when the page loads
window.addEventListener("load", function () {
  const defaultCity = "Indore"; // You can set any default city here
  fetchData(defaultCity); // Fetch data for the default city
  document.getElementById("cityname").textContent = defaultCity; // Display default city name
});
