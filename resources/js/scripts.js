let zoomAmount = 3;

async function issApi() {
    const map = document.querySelector("img");
    const background = document.querySelector(".map");
    map.style.width = (360 * zoomAmount) + "px";
    map.style.height = (180 * zoomAmount) + "px";
    background.style.width = (360 * zoomAmount) + "px";
    background.style.height = (180 * zoomAmount) + "px";
    let response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let result = await response.json();
    const latitude = result.latitude;
    const longitude = result.longitude;
    document.getElementById("lat").innerText = "Latitude: " + latitude;
    document.getElementById("long").innerText = "Longitude: " + longitude;
    const issDot = document.querySelector("#iss")
    issDot.style.left = (zoomAmount * (Number(longitude) + 180)) + "px";
    issDot.style.top = (zoomAmount * (90 - Number(latitude))) + "px";
}
issApi();

setInterval(() => {
    issApi();
}, 1000);
