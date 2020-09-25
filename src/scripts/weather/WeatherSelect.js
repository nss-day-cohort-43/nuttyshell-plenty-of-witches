import { getWeatherData } from './WeatherProvider.js';

const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

export const SelectedParkWeather = () => {
    getWeatherData()
        .then(weatherData => {
            let lat = weatherData.lat;
            let lon = weatherData.lon;
            let city = lat + lon;
            let dailyForecast = weatherData.daily;

            renderData(city, dailyForecast);
        });
}

const renderData = (location, forecast) => {
    const currentWeather = forecast[0].weather[0];
    const widgetHeader =
        `<h1>${currentWeather.description}</h1>`;

    CURRENT_TEMP.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${currentWeather.icon}.png">
    ${Math.round(forecast[0].temp.day)}&#730;
    <i class="wi wi-degrees"></i>
    `;

    CURRENT_LOCATION.innerHTML = widgetHeader;

    // render each daily forecast
    forecast.forEach(day => {
        let date = new Date(day.dt * 1000);
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let name = days[date.getDay()];
        let dayBlock = document.createElement("div");
        dayBlock.className = 'forecast__item';
        dayBlock.innerHTML = `
                <div class="forecast-item__heading">${name}</div>
                <div class="forecast-item__info">
                    <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                    <span class="degrees">${Math.round(day.temp.day)}&#730;
                        <i class="wi wi-degrees"></i>
                    </span>
                </div>`;
        FORECAST.appendChild(dayBlock);
    });
}