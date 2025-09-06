
const API_KEY = "9d0fe20df8e04b3eb05144846250409";

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&hours=24&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      return null;
    }
    return data;
  } catch (error) {
    alert(" Failed to fetch weather data!");
    console.error(error);
    return null;
  }
}


function displayWeather(data) {
  const container = document.getElementById("forecast");
  container.innerHTML = `<h2>${data.location.name}, ${data.location.country}</h2>`;

  data.forecast.forecastday[0].hour.slice(0, 12).forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const time = new Date(item.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    
    card.innerHTML = `
      <p><b>${time}</b></p>
      <img src="https:${item.condition.icon}" alt="${item.condition.text}">
      <p>${item.condition.text}</p>
      <p>Temperature ${item.temp_c}°C</p>
      <p>Humidity ${item.humidity}%</p>
    `;
    container.appendChild(card);
  });
}

async function searchCity() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const data = await getWeather(city);
  if (data) displayWeather(data);
}

