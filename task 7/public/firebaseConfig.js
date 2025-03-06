// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxlXp904HsSkpqunuvY5lhYcHIlkuZlcE",
    authDomain: "authx-72927.firebaseapp.com",
    projectId: "authx-72927",
    storageBucket: "authx-72927.appspot.com",
    messagingSenderId: "344433654763",
    appId: "1:344433654763:web:62615843c119e44842b7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export for use in other scripts
export { app, auth };

/*
// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxlXp904HsSkpqunuvY5lhYcHIlkuZlcE",
    authDomain: "authx-72927.firebaseapp.com",
    projectId: "authx-72927",
    storageBucket: "authx-72927.appspot.com",
    messagingSenderId: "344433654763",
    appId: "1:344433654763:web:62615843c119e44842b7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export correctly
export { app, auth };
*/


    