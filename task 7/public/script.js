import { auth } from "./firebaseConfig.js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            document.getElementById("welcomeMessage").innerText = `Welcome, ${result.user.displayName}`;
            document.getElementById("googleLogin").style.display = "none";
            document.getElementById("logout").style.display = "inline";
        })
        .catch((error) => {
            console.error("Login Failed:", error);
        });
});

document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        document.getElementById("welcomeMessage").innerText = "";
        document.getElementById("googleLogin").style.display = "inline";
        document.getElementById("logout").style.display = "none";
    }).catch((error) => console.error("Logout Failed:", error));
});

// Fetch Weather Data
document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    if (!city) return alert("Please enter a city!");

    fetch(`http://localhost:5000/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerText = "Error: " + data.error;
            } else {
                document.getElementById("weatherResult").innerText = `Temperature: ${data.temp}°C, Weather: ${data.description}`;
            }
        })
        .catch(error => console.error("Error fetching weather:", error));
});

