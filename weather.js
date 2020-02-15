const API_KEY = "92323150727077c1b657e697a0b8d525";
const API_VERSION = "2.5";
const cities = {
  Stockholm: 2673730,
  Panama: 3703443,
  Medellin: 3674962,
  SanAndres: 3670218,
  Cartagena: 3687238,
  PuertoRico: 3837213
};

let latestNotification;

function getWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/${API_VERSION}/weather?id=${city}&units=metric&APPID=${API_KEY}`
  ).then(response => response.json());
}

async function refresh() {
  let temp1, temp2;
  const updated = document.getElementById("updated-time");

  const stockholm = {
    name: document.getElementById("city1-name"),
    temp: document.getElementById("city1-temp"),
    sunrise: document.getElementById("city1-sunrise"),
    sunset: document.getElementById("city1-sunset")
  };

  const panama = {
    name: document.getElementById("city2-name"),
    temp: document.getElementById("city2-temp"),
    sunrise: document.getElementById("city2-sunrise"),
    sunset: document.getElementById("city2-sunset")
  };

  const medellin = {
    name: document.getElementById("city3-name"),
    temp: document.getElementById("city3-temp"),
    sunrise: document.getElementById("city3-sunrise"),
    sunset: document.getElementById("city3-sunset")
  };

  const sanAndres = {
    name: document.getElementById("city4-name"),
    temp: document.getElementById("city4-temp"),
    sunrise: document.getElementById("city4-sunrise"),
    sunset: document.getElementById("city4-sunset")
  };

  const cartagena = {
    name: document.getElementById("city5-name"),
    temp: document.getElementById("city5-temp"),
    sunrise: document.getElementById("city5-sunrise"),
    sunset: document.getElementById("city5-sunset")
  };

  const puertoRico = {
    name: document.getElementById("city6-name"),
    temp: document.getElementById("city6-temp"),
    sunrise: document.getElementById("city6-sunrise"),
    sunset: document.getElementById("city6-sunset")
  };

  const answer = document.getElementById("answer");

  await getWeather(cities.Stockholm).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "Europe/Stockholm"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "Europe/Stockholm"
      }
    );
    stockholm.name.innerText = data.name;
    stockholm.temp.innerText = "temp " + data.main.temp;
    stockholm.sunrise.innerText = "🌅 " + citySunrise;
    stockholm.sunset.innerText = "🌇  " + citySunset;

    temp1 = data.main.temp;
  });

  await getWeather(cities.Panama).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    panama.name.innerText = data.name;
    panama.temp.innerText = "temp " + data.main.temp;
    panama.sunrise.innerText = "🌅 " + citySunrise;
    panama.sunset.innerText = "🌇  " + citySunset;

    temp2 = data.main.temp;
  });

  await getWeather(cities.Medellin).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Bogota"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Bogota"
      }
    );
    medellin.name.innerText = data.name;
    medellin.temp.innerText = "temp " + data.main.temp;
    medellin.sunrise.innerText = "🌅 " + citySunrise;
    medellin.sunset.innerText = "🌇  " + citySunset;
    temp3 = data.main.temp;
  });

  await getWeather(cities.SanAndres).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    sanAndres.name.innerText = data.name;
    sanAndres.temp.innerText = "temp " + data.main.temp;
    sanAndres.sunrise.innerText = "🌅 " + citySunrise;
    sanAndres.sunset.innerText = "🌇  " + citySunset;
    temp4 = data.main.temp;
  });

  await getWeather(cities.Cartagena).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Panama"
      }
    );
    cartagena.name.innerText = data.name;
    cartagena.temp.innerText = "temp " + data.main.temp;
    cartagena.sunrise.innerText = "🌅 " + citySunrise;
    cartagena.sunset.innerText = "🌇  " + citySunset;
    temp5 = data.main.temp;
  });

  await getWeather(cities.PuertoRico).then(data => {
    var citySunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Puerto_Rico"
      }
    );
    var citySunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
      "en-US",
      {
        timeZone: "America/Puerto_Rico"
      }
    );
    puertoRico.name.innerText = data.name;
    puertoRico.temp.innerText = "temp " + data.main.temp;
    puertoRico.sunrise.innerText = "🌅 " + citySunrise;
    puertoRico.sunset.innerText = "🌇  " + citySunset;
    temp6 = data.main.temp;
  });

  const tempDiff = Math.abs(temp1 - temp2);

  const time = new Date();

  updated.innerText = time.toLocaleString();
  updated.setAttribute("datetime", time.toISOString());
}

function notify(message) {
  if (
    "Notification" in window &&
    Notification.permission === "granted" &&
    message !== latestNotification
  ) {
    // If it's okay let's create a notification
    new Notification(message);
    latestNotification = message;
  }
}

function askForPermission() {
  // Let's check if the browser supports notifications
  if ("Notification" in window) {
    Notification.requestPermission();
  }
}

window.onload = refresh;

askForPermission();
setInterval(refresh, 1000 * 60 * 10); //refresh every 10 minutes
