gsap.from("#city", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
})
gsap.from("#date", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 0.7,
    ease: "power3.out"
})
gsap.from("#temparature", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 0.9,
    ease: "power3.out"
})
gsap.from("#feelslike", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 1.1,
    ease: "power3.out"
})
gsap.from("#condition", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 1.3,
    ease: "power3.out"
})
gsap.from("#variations", {
    x: 300,
    duratuion: 1.5,
    opacity: 0,
    delay: 1.5,
    ease: "power3.out"
})
const geolocation = "https://ipgeolocation.abstractapi.com/v1/?api_key=4c3e2bcb76e6451d8b452eac5a70feb5";
const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "c0b33326f9b20082b3eb0746dc269d18"
};

async function findLocation (){
    const res = await fetch(`${geolocation}`);
    const result = await res.json();
    let city = result.city;
    let region = result.region_iso_code;
    showWeather(city, region);
}
findLocation ();
async function showWeather(data){
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
    const result = await res.json();
    displayData(result);
}

function displayData(result){
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    showDate();
    let temparature = document.querySelector('#temparature');
    temparature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelslike = document.querySelector('#feelslike');
    feelslike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

    let condition = document.querySelector('#condition');
    condition.textContent = `${result.weather[0].main}`;
    if(condition.textContent === 'Clouds'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/clouds.jpg?v=1667849886681)";
    }
    else if (condition.textContent === 'Thunderstorm'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/thunderstorm.jpg?v=1667849583222)";
    }
    else if (condition.textContent === 'Drizzle'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/drizzle.jpg?v=1667849569194)";
    }
    else if (condition.textContent === 'Rain'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/rain.jpg?v=1667849574012)";
    }
    else if (condition.textContent === 'Snow'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/snow.jpg?v=1667849579278)";
    }
    else if (condition.textContent === 'Clear'){
        document.body.style.backgroundImage = "url(https://cdn.glitch.global/1a54f592-5ff3-47de-b176-45dbce46a761/clear.jpg?v=1667849876955)";
    }
    else if (condition.textContent === 'Fog'){
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1560996025-95b43d543770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80)";
    }
    let variations = document.querySelector('#variations');
    variations.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>°; </span><span> Max: </span>${Math.round(result.main.temp_max)}<span>°</span>`;
    
}
function  showDate(){
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[today.getDay()];

    let todayDate = today.getDate();

    let month = months[today.getMonth()];

    let year = today.getFullYear();

    let date = document.querySelector('#date');
    date.textContent = `${day}, ${todayDate} ${month} ${year}`;
}

const searchCity = document.querySelector('#searchCity');
searchCity.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        showWeather(searchCity.value);
    }
});



























// const geolocation = "https://ipgeolocation.abstractapi.com/v1/?api_key=dfdc6ac07e304307a11761cc576f451e";
// const api = {
//     endpoint: "https://api.openweathermap.org/data/2.5/",
//     key: "c0b33326f9b20082b3eb0746dc269d18"
// };

// async function findLocation (){
//     const res = await fetch(`${geolocation}`);
//     const result = await res.json();
//     let city = result.city;
//     let region = result.region_iso_code;
//     showWeather(city, region);
// }
// findLocation ();
// async function showWeather(data){
//     const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
//     const result = await res.json();
//     displayData(result)
// }

// function displayData(result){
//     let city = document.querySelector('#city');
//     city.textContent = `${result.name}, ${result.sys.country}`;

//     showDate();
//     let temparature = document.querySelector('#temparature');
//     temparature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`

//     let feelslike = document.querySelector('#feelslike');
//     feelslike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

//     let condition = document.querySelector('#condition');
//     condition.textContent = `${result.weather[0].main}`
//     if(condition.textContent === 'Clouds'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)";
//     }
//     else if (condition.textContent === 'Thunderstorm'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
//     }
//     else if (condition.textContent === 'Drizzle'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)";
//     }
//     else if (condition.textContent === 'Rain'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
//     }
//     else if (condition.textContent === 'Snow'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=80)";
//     }
//     else if (condition.textContent === 'Clear'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)";
//     }
//     else if (condition.textContent === 'Fog'){
//         document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80)";
//     }
//     let variations = document.querySelector('#variations');
//     variations.innerHTML = `<span>Min: </span>${Math.round(result.main.temp_min)}<span>°; </span><span> Max: </span>${Math.round(result.main.temp_max)}<span>°</span>`;
    
// }
// function  showDate(){
//     const today = new Date();
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     let day = days[today.getDay()];

//     let todayDate = today.getDate();

//     let month = months[today.getMonth()];

//     let year = today.getFullYear();

//     let date = document.querySelector('#date');
//     date.textContent = `${day}, ${todayDate} ${month} ${year}`;
// }

// const searchCity = document.querySelector('#searchCity');
// searchCity.addEventListener('keypress', findAnotherCity);
// function findAnotherCity(e){
//     if(e.keyCode === 13){
//         showWeather(searchCity.value);
//     }

// }