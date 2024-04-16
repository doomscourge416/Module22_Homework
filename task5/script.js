const requestAddress = "wss://echo-ws-service.herokuapp.com/";

const messageInput = document.querySelector(".messageInput");
const sendButton = document.querySelector(".send_button");
const geolocationButton = document.querySelector(".geolocation_button");

const clientMessage = document.querySelector(".client_message");
const serverMessage = document.querySelector(".server_message");
const geolocationMessage = document.querySelector(".geolocation_message");

const wsUrl = 'wss://echo.websocket.org/';   //  ws://echo-ws-service.herokuapp.com/

const createMessage = function(parent, message){

    let p = document.createElement("p");
    p.innerHTML = message;
    parent.appendChild(p);

};

sendButton.addEventListener('click', ()=>{

    let inputValue = messageInput.value;
    clientMessage.style.display = "flex";
    clientMessage.innerHTML = inputValue;
    serverMessage.style.display = "flex";

    webSocket = new WebSocket(wsUrl);
//TODO: Продолжить отсюда ( вроде всё работает и можно продолжать дальше )
    webSocket.onopen = function(evt){

        console.log(evt);
        let evtTranslated = evt.data;
        console.log(evtTranslated);
        // createMessage(clientMessage, evt.data);
    };

    webSocket.onclose = function(evt){
        createMessage(clientMessage, evt.data);
    };

    webSocket.onmessage = function(evt){

        console.log('ON MESSAGE INSTANCE');
        serverMessage.innerHTML = "";
        createMessage(serverMessage, inputValue);

    };

});

// Реализация получения геолокации

const success = (position) =>{

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    geolocationMessage.innerHTML = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}"> Ваша Гео-локация </a>`;

};

const error = () => {

    geolocationMessage.innerHTML = "Невозможно получить вашу геолокацию!";

};

geolocationButton.addEventListener('click', ()=>{

    geolocationMessage.style.display = "flex";

    if (!navigator.geolocation) {

        geolocationMessage.textContent = 'Geolocation не поддерживается вашим браузером';

      } else {

        geolocationMessage.innerHTML = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);

      }

});