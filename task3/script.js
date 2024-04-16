const button = document.querySelector(".btn");
const screenSizeDiv = document.querySelector(".displayScreenSize");
const coordinatesDiv = document.querySelector(".displayCoordinates");


button.addEventListener('click', () =>{

    coordinatesDiv.textContent = "Идёт поиск информации о местоположении. Пожалуйста подождите ...";

    // 1. находим размеры экрана пользователя и выводим их в консоль

    const windowW = window.screen.width;
    const windowH = window.screen.height;
    screenSizeDiv.innerHTML = "Client screen size is " + windowW + " by " + windowH + " pixels";

    // 2. находим координаты пользователя и выводим их в консоль
    let latitude = "";
    let longitude = "";

    const succes = (position)=>{

        console.log('Current object : ', position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        coordinatesDiv.innerHTML = "Latitude is : " + latitude + " and  Longitude is : " + longitude;
    }

    const error = () =>{
        coordinatesDiv.textContent = "Информация о местоположении недоступна";
    };

    navigator.geolocation.getCurrentPosition( succes, error );
})