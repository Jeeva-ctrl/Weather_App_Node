console.log("Loading script from client");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const message3 = document.querySelector("#message-3");
const message4 = document.querySelector("#message-4");
const message5 = document.querySelector("#message-5");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = search.value;
  if (!searchValue) {
    alert("You must provide address....");
    return;
  }
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch("/weather?address=" + searchValue)
    .then((response) => {
      response.json().then((data) => {
        const obj = JSON.parse(data.response);
        messageOne.textContent = "";
        messageTwo.textContent = "";
        message3.textContent = "";
        message4.textContent = "";
        message5.textContent = "";
        if (obj.error) {
          messageOne.textContent = "Invalid City....";
        } else {
          messageOne.textContent = "";
          messageTwo.textContent = "LOCATION = " + obj.location.name;
          message3.textContent = "HUMIDITY = " + obj.current.humidity;
          message4.textContent =
            "TEMPERATURE = " + obj.current.temperature + "-degree";
          message5.textContent =
            "DESCRIPTION = " + obj.current.weather_descriptions[0];
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
