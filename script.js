const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=77e8420e7fbc38edc9e3f62c89d23203";
const API_UNITS = "&units=metric";

const getWheather = () => {
  const city = input.value || "London";
  const url = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      const temp = res.data.main.temp;
      const hum = res.data.main.humidity;
      cityName.textContent = res.data.name;
      temperature.textContent = Math.floor(temp) + "°C";
      humidity.textContent = hum + "%";
      const status = res.data.weather[0].main;
      const status1 = res.data.weather[0].id;
      console.log(status1);
      weather.textContent = status;
      console.log(status);
      if (status1 >= 200 && status1 < 300) {
        photo.setAttribute("src", "./img/thunderstorm.png");
      } else if (status1 >= 300 && status1 < 400) {
        photo.setAttribute("src", "./img/drizzle.png");
      } else if (status1 >= 500 && status1 < 600) {
        photo.setAttribute("src", "./img/rain.png");
      } else if (status1 >= 600 && status1 < 700) {
        photo.setAttribute("src", "./img/ice.png");
      } else if (status1 >= 700 && status1 < 800) {
        photo.setAttribute("src", "./img/fog.png");
      } else if (status1 === 800) {
        photo.setAttribute("src", "./img/sun.png");
      } else if (status1 >= 800 && status1 < 900) {
        photo.setAttribute("src", "./img/cloud.png");
      } else {
        photo.setAttribute("src", "./img/unknown.png");
      }
    })
    .catch(() => (warning.textContent = "Write correct name!"));
};

button.addEventListener("click", getWheather);
getWheather();
