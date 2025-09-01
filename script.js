const apikey = "e3899f5fdd4c5c2b1317fc0571652a9c"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= "
async function getWeather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
getWeather("");
document.getElementById("get-weather-btn").addEventListener("click",()=>{
    var city = document.getElementById("city-input").value;
    getWeather(city);
})
