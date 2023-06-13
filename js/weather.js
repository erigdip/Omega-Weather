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
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconWeather}@2x.png`);
    
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
        iconFone.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastOne}.png`);
    
        const iconForecastTwo = data.list[14].weather[0].icon;
        iconFtwo.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastTwo}.png`);
    
        const iconForecastThree = data.list[22].weather[0].icon;
        iconFthree.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastThree}.png`);
    
        const iconForecastFour = data.list[30].weather[0].icon;
        iconFfour.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastFour}.png`);
    
        const iconForecastFive = data.list[38].weather[0].icon;
        iconFfive.setAttribute('src', `https://openweathermap.org/img/wn/${iconForecastFive}.png`);
    
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