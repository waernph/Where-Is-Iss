
async function issApi() {
        let response = await fetch("http://api.open-notify.org/iss-now.json");
        let result = await response.json();
        const map = document.querySelector("iframe");
        const key = "359cb23abf673e47ca98b9a1c89ab8c7";
        let endpointMap = "http://api.positionstack.com/v1/";
        const latitude = result['iss_position']['latitude'];
        const longitude = result['iss_position']['longitude'];
        document.getElementById("lat").innerText = "Latitude: " + latitude;
        document.getElementById("long").innerText = "Longitude: " + longitude;
        const issDot = document.querySelector("#iss")
        issDot.style.left = (Number(longitude) + 180) + "px";
        issDot.style.top = (90 - Number(latitude)) + "px";
        console.log(typeof(latitude));
        
        return result;
}

setInterval(() => {
    issApi();
}, 1500);
