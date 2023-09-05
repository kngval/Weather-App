const apiKey = "be663a62422560e3861a34528c455dbd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');
const weatherImg = document.querySelector('.weather-img')
searchBtn.addEventListener('click', ()=>{
    checkWeather(search.value);
})

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humid').innerHTML = data.main.humidity + '%';
    document.querySelector('.w-speed').innerHTML = data.wind.speed + ' km/h'; 

    if(data.weather[0].main == 'Clouds'){
        weatherImg.src = 'cloudy.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherImg.src = 'clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weatherImg.src = 'rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherImg.src = 'drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weatherImg.src = 'mist.png'
    }
   
    document.querySelector('.weather-container').style.display ='flex';
}

