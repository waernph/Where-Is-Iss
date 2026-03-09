let zoomAmount = 3;

async function issApi() {
        let response = await fetch("http://api.open-notify.org/iss-now.json");
        let result = await response.json();
        const latitude = result['iss_position']['latitude'];
        const longitude = result['iss_position']['longitude'];
        document.getElementById("lat").innerText = "Latitude: " + latitude;
        document.getElementById("long").innerText = "Longitude: " + longitude;
        const map = document.querySelector("img");
        const background = document.querySelector(".map");
        map.style.width = (360 * zoomAmount) + "px";
        map.style.height = (180 * zoomAmount) + "px";
        background.style.width = (360 * zoomAmount) + "px";
        background.style.height = (180 * zoomAmount) + "px";
        const issDot = document.querySelector("#iss")
        issDot.style.left = (zoomAmount * (Number(longitude) + 180)) + "px";
        issDot.style.top = (zoomAmount * (90 - Number(latitude))) + "px";
}

setInterval(() => {
    issApi();
}, 2000);
