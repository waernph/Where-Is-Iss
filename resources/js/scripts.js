
async function issApi() {
        let response = await fetch("http://api.open-notify.org/iss-now.json");
        let result = await response.json();
        const latitude = result['iss_position']['latitude'];
        const longitude = result['iss_position']['longitude'];
        document.getElementById("lat").innerText = "Latitude: " + latitude;
        document.getElementById("long").innerText = "Longitude: " + longitude;
        console.log("Latitude: " + lat + " Longitude: " + long);
        return result;
}

setInterval(() => {
    issApi();
}, 1500);
