const apiKey = "b325a8f0636ffe74074f853834bed4af";

const cityInput = document.getElementById("cityInput");
cityInput.addEventListener("input", () => {

const city = cityInput.value.trim();

if(city.length > 2){
getWeather(city);
}

});

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
// Fetch weather data
async function getWeather(city){

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

updateUI(data);

}catch(error){
console.log("Error fetching weather:",error);
}

}

// Update UI using DOM manipulation

function updateUI(data){

cityName.textContent = data.name;

temperature.textContent = `Temperature: ${data.main.temp} °C`;

description.textContent = `Condition: ${data.weather[0].description}`;

humidity.textContent = `Humidity: ${data.main.humidity}%`;

wind.textContent = `Wind Speed: ${data.wind.speed} km/h`;

// Weather icon
const iconCode = data.weather[0].icon;
weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

// Change background based on weather
changeBackground(data.weather[0].main);

}

function changeBackground(weather){

if(weather === "Clear"){
document.body.style.background = "linear-gradient(135deg,#fceabb,#f8b500)";
}

else if(weather === "Clouds"){
document.body.style.background = "linear-gradient(135deg,#d7d2cc,#304352)";
}

else if(weather === "Rain"){
document.body.style.background = "linear-gradient(135deg,#4b79a1,#283e51)";
}

else if(weather === "Snow"){
document.body.style.background = "linear-gradient(135deg,#e6dada,#274046)";
}

else{
document.body.style.background = "linear-gradient(135deg,#74ebd5,#9face6)";
}

}

