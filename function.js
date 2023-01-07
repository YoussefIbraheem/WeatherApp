var searchinput = document.getElementById('srchinpt');
var srchbtn = document.getElementById('button-addon2');
var dateToday = document.querySelector('.date-today');
var city = document.querySelector('.location');
var details = "";
var todaydate = new Date();
var date = todaydate.getDate();
var day = todaydate.getDay();
var month = todaydate.getMonth();
var degreeNumber = document.querySelector('.degree-num');
var wthrstatus = document.querySelector(".status")
var todayweatherlogo = document.querySelector('.degree-logo')
var windStatus = document.querySelector(".wind-status")
var nextDay = document.querySelector(".nextday");
var degreeNextdayMax = document.querySelector(".degree-nextday-max")
var degreeNextdayMin = document.querySelector('.degree-nextday-min')
var nextdayStatus = document.querySelector(".nextday-status");
var nextdayLogo = document.querySelector(".nextday-logo")
var dayAfter = document.querySelector(".dayafter");
var dayafterLogo =document.querySelector(".dayafter-logo");
var degreeDayafterMax = document.querySelector(".degree-dayafter-max");
var degreeDayafterMin = document.querySelector(".degree-dayafter-min");
var dayafterStatus = document.querySelector(".dayafter-status")
var listofmonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(listofmonths[month])
console.log(daysInWeek[day])

var req1 = new XMLHttpRequest();


searchinput.addEventListener("keyup" , function(){
    

    searchEngine(searchinput.value)
})


srchbtn.addEventListener("keyup" , function(){
    

    searchEngine(searchinput.value)
})

if(searchinput.value == "")
{req1.open('GET' , `http://api.weatherapi.com/v1/forecast.json?key=ab584c620fdb47b2936155949222102&q=cairo&days=7&aqi=no&alerts=no`);

req1.send();

req1.addEventListener('readystatechange' , function(){
    if(req1.status == 200 && req1.readyState == 4)
    {
        
        details = req1.response;
        details = JSON.parse(details);
        console.log(details)
        
        
        
        dateToday.innerHTML = `<div class="date text-light">
        ${daysInWeek[day]}
    </div>
    <div class="today text-light">
        ${date} ${listofmonths[month]}
    </div> `;

    city.innerHTML = `${details.location.name}`;

    degreeNumber.innerHTML = `${details.current.temp_c}<sup>o</sup>C`

    wthrstatus.innerHTML = `${details.current.condition.text}`

    todayweatherlogo.innerHTML = `<img src= "https:${details.current.condition.icon}" class="w-75" alt="">`

    windStatus.innerHTML = `
    <span><img src="images/icon-umberella.png" alt="">${details.current.humidity}%</span>
    <span><img src="images/icon-wind.png" alt="">${details.current.wind_kph} km/h</span>
    <span><img src="images/icon-compass.png" alt="">${details.current.wind_dir}</span>`
    nextDay.innerHTML = `${daysInWeek[day + 1]}`;
    degreeNextdayMax.innerHTML = `${details.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>C`
    degreeNextdayMin.innerHTML = `${details.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C`
    nextdayStatus.innerHTML = `${details.forecast.forecastday[1].day.condition.text}`
    nextdayLogo.innerHTML = `<img src="https:${details.forecast.forecastday[1].day.condition.icon}" alt="">`
    dayAfter.innerHTML = `${daysInWeek[day + 2]}`
    degreeDayafterMax.innerHTML = `${details.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C`
    degreeDayafterMin.innerHTML = `${details.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C`
    dayafterStatus.innerHTML = `${details.forecast.forecastday[2].day.condition.text}`
    dayafterLogo.innerHTML = `<img src="https:${details.forecast.forecastday[2].day.condition.icon}" alt="">`
    
    }
})
}

    function searchEngine(name)

    {req1.open('GET' , `http://api.weatherapi.com/v1/forecast.json?key=ab584c620fdb47b2936155949222102&q=${name}&days=7&aqi=no&alerts=no`);
    
    req1.send();
    
    req1.addEventListener('readystatechange' , function(){
        if(req1.status == 200 && req1.readyState == 4)
        {
            
            details = req.response;
            details = JSON.parse(details);
            
            
            
            
            dateToday.innerHTML = `<div class="date text-light">
            ${daysInWeek[day]}
        </div>
        <div class="today text-light">
            ${date} ${listofmonths[month]}
        </div> `;
    
        city.innerHTML = `${details.location.name}`;
    
        degreeNumber.innerHTML = `${details.current.temp_c}<sup>o</sup>C`
    
        wthrstatus.innerHTML = `${details.current.condition.text}`
    
        todayweatherlogo.innerHTML = `<img src= "https:${details.current.condition.icon}" class="w-75" alt="">`
    
        windStatus.innerHTML = `
        <span><img src="images/icon-umberella.png" alt="">${details.current.humidity}%</span>
        <span><img src="images/icon-wind.png" alt="">${details.current.wind_kph} km/h</span>
        <span><img src="images/icon-compass.png" alt="">${details.current.wind_dir}</span>`;
 
        nextDay.innerHTML = `${daysInWeek[day + 1]}`
        degreeNextdayMax.innerHTML = `${details.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`
        degreeNextdayMin.innerHTML = `${details.forecast.forecastday[1].day.mintemp_c}`
    nextdayStatus.innerHTML = `${details.forecast.forecastday[1].day.condition.text}`
    nextdayLogo.innerHTML = `<img src="https:${details.forecast.forecastday[1].day.condition.icon}" alt="">`
    dayAfter.innerHTML = `${daysInWeek[day + 2]}`
    degreeDayafterMax.innerHTML = `${details.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C`
    degreeDayafterMin.innerHTML = `${details.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C`
    dayafterStatus.innerHTML = `${details.forecast.forecastday[2].day.condition.text}`
    dayafterLogo.innerHTML = `<img src="https:${details.forecast.forecastday[2].day.condition.icon}" alt="">`

        

            
        }
    })
    }


 




