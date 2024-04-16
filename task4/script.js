const button = document.querySelector(".btn");
const coordinatesStatus = document.querySelector(".coordinatesStatus");

let latitude = "";
let longitude = "";

const succes = (position) => {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // coordinatesStatus.innerHTML = "Latitude is : " + latitude + " and  Longitude is : " + longitude;

    fetch("https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat="+ latitude + "&long=" + longitude)

    .then((response) => {

        let responseConverted = response.json();
        return responseConverted

    })

    .then((responseConverted) =>{
        console.log(responseConverted);
        coordinatesStatus.textContent = "Timezone : " + responseConverted.timezone + " and Date/Time in text : " + responseConverted.date_time_txt;

    })

    .catch((response)=>{

        console.log(response)

    })
}

const error = () => {
    coordinatesStatus.textContent = "Ошибка вычисления координат";
}

button.addEventListener('click', () => {

    coordinatesStatus.textContent = "Идёт поиск информации о местоположении, текущей даты и времени. Пожалуйста подождите ...";

    navigator.geolocation.getCurrentPosition(succes, error);


})