const weatherKey = '8b50172bdea042eb761c9543ebc3baf1';

const nameCity = document.getElementById('nameCity');
const description = document.getElementById('description');
const countryCode = document.getElementById('country');
const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const daytime = document.getElementById('daytime');

const forecastDayone = document.getElementById('forecastDayone');
const forecastDaytwo = document.getElementById('forecastDaytwo');
const forecastDaythree = document.getElementById('forecastDaythree');
const forecastDayfour = document.getElementById('forecastDayfour');
const forecastDayfive = document.getElementById('forecastDayfive');

const iconFone = document.getElementById('iconFone');
const iconFtwo = document.getElementById('iconFtwo');
const iconFthree = document.getElementById('iconFthree');
const iconFfour = document.getElementById('iconFfour');
const iconFfive = document.getElementById('iconFfive');

const fOnemaxtemp = document.getElementById('fOnemaxtemp');
const fOnemintemp = document.getElementById('fOnemintemp');

const fTwomaxtemp = document.getElementById('fTwomaxtemp');
const fTwomintemp = document.getElementById('fTwomintemp');

const fThreemaxtemp = document.getElementById('fThreemaxtemp');
const fThreemintemp = document.getElementById('fThreemintemp');

const fFourmaxtemp = document.getElementById('fFourmaxtemp');
const fFourmintemp = document.getElementById('fFourmintemp');

const fFivemaxtemp = document.getElementById('fFivemaxtemp');
const fFivemintemp = document.getElementById('fFivemintemp');

const fOnedescription = document.getElementById('fOnedescription');
const fTwodescription = document.getElementById('fTwodescription');
const fThreedescription = document.getElementById('fThreedescription');
const fFourdescription = document.getElementById('fFourdescription');
const fFivedescription = document.getElementById('fFivedescription');

const searchForm = document.getElementById('search-form');
let finderInput = document.getElementById('finder-input');

const locationDate = document.getElementById('location-date');
const core = document.getElementById('core');
const label = document.getElementById('label');
const startImg = document.getElementById('starting-img');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function onSubmit(event){
    event.preventDefault();
    getWeather(finderInput.value);
    getForecast(finderInput.value);
}

searchForm.addEventListener('submit', onSubmit, true);


async function getWeather(cityname) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherKey}&units=metric`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        label.style.display = 'none';
        locationDate.style.display = 'flex';
        core.style.display = 'block';
        startImg.style.display = 'none';

        nameCity.innerHTML = data.name;

        description.innerHTML = capitalizeFirstLetter(data.weather[0].description);
    
        countryCode.innerHTML = data.sys.country;
    
        const iconWeather = data.weather[0].icon;
        //icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconWeather}@2x.png`);
        switch (iconWeather) {
            case '01d':
                icon.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                icon.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                icon.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                icon.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                icon.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                icon.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                icon.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                icon.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                icon.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                icon.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                icon.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                icon.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                icon.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                icon.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                icon.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                icon.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                icon.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                icon.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        temperature.innerText = Math.round(data.main.temp) + '°';
    
        feelsLike.innerText = Math.round(data.main.feels_like) + '°';
    
        humidity.innerText = data.main.humidity + '%';
    
        const date = new Date (data.dt * 1000);
    
        daytime.innerText = date.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short', year:'2-digit'});

    } catch(err) {
        console.log(err);
        alert('Error');
    }
};

async function getForecast (cityname) {
    try {
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${weatherKey}&units=metric`
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);

        const dateOne = new Date (data.list[6].dt * 1000);

        forecastDayone.innerText = dateOne.toLocaleDateString('en-GB', {weekday:'short', day:'numeric'});
    
        const dateTwo = new Date (data.list[14].dt * 1000);
    
        forecastDaytwo.innerText = dateTwo.toLocaleDateString('en-GB', {weekday:'short', day:'numeric'});
    
        const dateThree = new Date (data.list[22].dt * 1000);
    
        forecastDaythree.innerText = dateThree.toLocaleDateString('en-GB', {weekday:'short', day:'numeric'});
    
        const dateFour = new Date (data.list[30].dt * 1000);
    
        forecastDayfour.innerText = dateFour.toLocaleDateString('en-GB', {weekday:'short', day:'numeric'});
    
        const dateFive = new Date (data.list[38].dt * 1000);
    
        forecastDayfive.innerText = dateFive.toLocaleDateString('en-GB', {weekday:'short', day:'numeric'});
    
        const iconForecastOne = data.list[6].weather[0].icon;
        //iconFone.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastOne}.png`);
        switch (iconForecastOne) {
            case '01d':
                iconFone.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                iconFone.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                iconFone.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                iconFone.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                iconFone.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                iconFone.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                iconFone.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                iconFone.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                iconFone.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                iconFone.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                iconFone.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                iconFone.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                iconFone.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                iconFone.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                iconFone.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                iconFone.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                iconFone.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                iconForecastOne.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        const iconForecastTwo = data.list[14].weather[0].icon;
        //iconFtwo.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastTwo}.png`);
        switch (iconForecastTwo) {
            case '01d':
                iconFtwo.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                iconFtwo.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                iconFtwo.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                iconFtwo.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                iconFtwo.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                iconFtwo.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                iconFtwo.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                iconFtwo.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                iconFtwo.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                iconFtwo.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                iconFtwo.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                iconFtwo.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                iconFtwo.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                iconFtwo.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                iconFtwo.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                iconFtwo.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                iconFtwo.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                iconFtwo.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        const iconForecastThree = data.list[22].weather[0].icon;
        //iconFthree.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastThree}.png`);
        switch (iconForecastThree) {
            case '01d':
                iconFthree.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                iconFthree.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                iconFthree.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                iconFthree.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                iconFthree.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                iconFthree.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                iconFthree.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                iconFthree.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                iconFthree.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                iconFthree.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                iconFthree.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                iconFthree.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                iconFthree.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                iconFthree.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                iconFthree.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                iconFthree.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                iconFthree.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                iconFthree.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        const iconForecastFour = data.list[30].weather[0].icon;
        //iconFfour.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastFour}.png`);
        switch (iconForecastFour) {
            case '01d':
                iconFfour.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                iconFfour.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                iconFfour.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                iconFfour.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                iconFfour.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                iconFfour.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                iconFfour.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                iconFfour.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                iconFfour.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                iconFfour.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                iconFfour.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                iconFfour.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                iconFfour.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                iconFfour.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                iconFfour.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                iconFfour.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                iconFfour.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                iconFfour.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        const iconForecastFive = data.list[38].weather[0].icon;
        //iconFfive.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastFive}.png`);
        switch (iconForecastFive) {
            case '01d':
                iconFfive.src = './assets/animated/day-clear-sky.svg'
                break;
            case '01n':
                iconFfive.src = './assets/animated/night-clear-sky.svg'
                break;
            case '02d':
                iconFfive.src = './assets/animated/cloudy-day-1.svg'
                break;
            case '02n':
                iconFfive.src = './assets/animated/cloudy-night-1.svg'
                break;
            case '03d':
                iconFfive.src = './assets/animated/cloudy-day-3.svg'
                break;
            case '03n':
                iconFfive.src = './assets/animated/cloudy-night-3.svg'
                break;
            case '04d':
                iconFfive.src = './assets/animated/cloudy.svg'
                break;
            case '04n':
                iconFfive.src = './assets/animated/cloudy.svg'
                break;
            case '09d':
                iconFfive.src = './assets/animated/rainy-day-2.svg'
                break;
            case '09n':
                iconFfive.src = './assets/animated/rainy-night-1.svg'
                break;
            case '10d':
                iconFfive.src = './assets/animated/rainy-day-3.svg'
                break;
            case '10n':
                iconFfive.src = './assets/animated/rainy-night-2.svg'
                break;
            case '11d':
                iconFfive.src = './assets/animated/thunder.svg'
                break;
            case '11n':
                iconFfive.src = './assets/animated/thunder.svg'
                break;
            case '13d':
                iconFfive.src = './assets/animated/snowy-day-1.svg'
                break;
            case '13n':
                iconFfive.src = './assets/animated/snowy-night-2.svg'
                break;
            case '50d':
                iconFfive.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
            case '50n':
                iconFfive.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`
                break;
        };
    
        fOnemaxtemp.innerText = Math.round(Math.max(
            data.list[1].main.temp_max,
            data.list[2].main.temp_max,
            data.list[3].main.temp_max,
            data.list[4].main.temp_max,
            data.list[5].main.temp_max,
            data.list[6].main.temp_max,
            data.list[7].main.temp_max, 
            data.list[8].main.temp_max)) + '° /';
        fOnemintemp.innerText = Math.round(Math.min(
            data.list[1].main.temp_min,
            data.list[2].main.temp_min,
            data.list[3].main.temp_min,
            data.list[4].main.temp_min,
            data.list[5].main.temp_min,
            data.list[6].main.temp_min,
            data.list[7].main.temp_min, 
            data.list[8].main.temp_min)) + '°';
    
        fTwomaxtemp.innerText = Math.round(Math.max(
            data.list[9].main.temp_max,
            data.list[10].main.temp_max,
            data.list[11].main.temp_max,
            data.list[12].main.temp_max,
            data.list[13].main.temp_max,
            data.list[14].main.temp_max,
            data.list[15].main.temp_max, 
            data.list[16].main.temp_max)) + '° /';
        fTwomintemp.innerText = Math.round(Math.min(
            data.list[9].main.temp_min,
            data.list[10].main.temp_min,
            data.list[11].main.temp_min,
            data.list[12].main.temp_min,
            data.list[13].main.temp_min,
            data.list[14].main.temp_min,
            data.list[15].main.temp_min, 
            data.list[16].main.temp_min)) + '°';
    
        fThreemaxtemp.innerText = Math.round(Math.max(
            data.list[17].main.temp_max,
            data.list[18].main.temp_max,
            data.list[19].main.temp_max,
            data.list[20].main.temp_max,
            data.list[21].main.temp_max,
            data.list[22].main.temp_max,
            data.list[23].main.temp_max, 
            data.list[24].main.temp_max)) + '° /';
        fThreemintemp.innerText = Math.round(Math.min(
            data.list[17].main.temp_min,
            data.list[18].main.temp_min,
            data.list[19].main.temp_min,
            data.list[20].main.temp_min,
            data.list[21].main.temp_min,
            data.list[22].main.temp_min,
            data.list[23].main.temp_min, 
            data.list[24].main.temp_min)) + '°';
    
        fFourmaxtemp.innerText = Math.round(Math.max(
            data.list[25].main.temp_max,
            data.list[26].main.temp_max,
            data.list[27].main.temp_max,
            data.list[28].main.temp_max,
            data.list[29].main.temp_max,
            data.list[30].main.temp_max,
            data.list[31].main.temp_max, 
            data.list[32].main.temp_max)) + '° /';
        fFourmintemp.innerText = Math.round(Math.min(
            data.list[25].main.temp_min,
            data.list[26].main.temp_min,
            data.list[27].main.temp_min,
            data.list[28].main.temp_min,
            data.list[29].main.temp_min,
            data.list[30].main.temp_min,
            data.list[31].main.temp_min, 
            data.list[32].main.temp_min)) + '°';
    
        fFivemaxtemp.innerText = Math.round(Math.max(
            data.list[33].main.temp_max,
            data.list[34].main.temp_max,
            data.list[35].main.temp_max,
            data.list[36].main.temp_max,
            data.list[37].main.temp_max,
            data.list[38].main.temp_max,
            data.list[39].main.temp_max,)) + '° /';
        fFivemintemp.innerText = Math.round(Math.min(
            data.list[33].main.temp_min,
            data.list[34].main.temp_min,
            data.list[35].main.temp_min,
            data.list[36].main.temp_min,
            data.list[37].main.temp_min,
            data.list[38].main.temp_min,
            data.list[39].main.temp_min,)) + '°';
    
        fOnedescription.innerText = capitalizeFirstLetter(data.list[6].weather[0].description);
    
        fTwodescription.innerText = capitalizeFirstLetter(data.list[14].weather[0].description);
    
        fThreedescription.innerText = capitalizeFirstLetter(data.list[22].weather[0].description);
    
        fFourdescription.innerText = capitalizeFirstLetter(data.list[30].weather[0].description);
    
        fFivedescription.innerText = capitalizeFirstLetter(data.list[38].weather[0].description);

    } catch(err2) {
    console.log(err2);
    alert('Error');
}
};