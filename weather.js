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

const messages = {
  yes: "Det är hett som i Trinidad!",
  no: "Det är inte längre hett som i Trinidad :("
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
    temp: document.getElementById("city1-temp")
  };

  const panama = {
    name: document.getElementById("city2-name"),
    temp: document.getElementById("city2-temp")
  };

  const medellin = {
    name: document.getElementById("city3-name"),
    temp: document.getElementById("city3-temp")
  };

  const sanAndres = {
    name: document.getElementById("city3-name"),
    temp: document.getElementById("city3-temp")
  };

  const cartagena = {
    name: document.getElementById("city4-name"),
    temp: document.getElementById("city4-temp")
  };

  const puertoRico = {
    name: document.getElementById("city5-name"),
    temp: document.getElementById("city5-temp")
  };

  const answer = document.getElementById("answer");

  await getWeather(cities.Stockholm).then(data => {
    console.log(data);
    stockholm.name.innerText = data.name;
    stockholm.temp.innerText = "temp " + data.main.temp;

    temp1 = data.main.temp;
  });

  await getWeather(cities.Panama).then(data => {
    panama.name.innerText = data.name;
    panama.temp.innerText = "temp " + data.main.temp;

    temp2 = data.main.temp;
  });

  await getWeather(cities.Medellin).then(data => {
    medellin.name.innerText = data.name;
    medellin.temp.innerText = "temp " + data.main.temp;

    temp3 = data.main.temp;
  });

  await getWeather(cities.SanAndres).then(data => {
    sanAndres.name.innerText = data.name;
    sanAndres.temp.innerText = "temp " + data.main.temp;

    temp4 = data.main.temp;
  });

  await getWeather(cities.Cartagena).then(data => {
    cartagena.name.innerText = data.name;
    cartagena.temp.innerText = "temp " + data.main.temp;

    temp5 = data.main.temp;
  });

  await getWeather(cities.PuertoRico).then(data => {
    puertoRico.name.innerText = data.name;
    puertoRico.temp.innerText = data.main.temp;

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
