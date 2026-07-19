// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYrZwQ0yKy2DE0JvTQHZZdg1VJXS7ylUA",
    authDomain: "thesuftsocials.firebaseapp.com",
    projectId: "thesuftsocials",
    storageBucket: "thesuftsocials.firebasestorage.app",
    messagingSenderId: "393517316887",
    appId: "1:393517316887:web:925b62d90ac925425e1552",
    measurementId: "G-7JCJQGGVL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
