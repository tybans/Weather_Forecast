const inputBox = document.querySelector('.input');
const searchBtn = document.querySelector('.fa-magnifying-glass');
const weatherImg = document.querySelector('.clear-img');
const temperatue = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind');
const errorLocation = document.querySelector('.error');
const weatherData = document.querySelector('.weather-data');


async function getWeather(city){
    const apiKey = "d55847a9f6f75e6bf97e3d9830e8a1a8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    let response = await fetch(`${apiUrl}`);
    let data = await response.json();

    console.log(data);
    if(data.cod === `404`){
        errorLocation.style.display = "flex";
        weatherData.style.display = "none";
        console.log("data not found.");
        return;
    }

    errorLocation.style.display = "none";
    weatherData.style.display = "flex";

    temperatue.innerHTML = `${Math.round(data.main.temp-273.15)}°C`;

    description.innerHTML = `${data.weather[0].description}`;

    humidity.innerHTML = `${data.main.humidity}%`;

    windSpeed.innerHTML = `${data.wind.speed} km/h`;

    switch(data.weather[0].main){
        case 'Clear' :
            weatherImg.src = "/images/clear.png";
            break;
        case 'Clouds' :
            weatherImg.src = "/images/clouds.png";
            break;
        case 'Drizzle' :
            weatherImg.src = "/images/drizzle.png";
            break;
        case 'Humidity' :
            weatherImg.src = "/images/humidity.png";
            break;
        case 'Mist' :
            weatherImg.src = "/images/mist.png";
            break;
        case 'Rain' :
            weatherImg.src = "/images/rain.png";
            break;
        case 'Snow' :
            weatherImg.src = "/images/snow.png";
            break;
        
        
   }

    
}
searchBtn.addEventListener('click',()=>{
    getWeather(inputBox.value);
});