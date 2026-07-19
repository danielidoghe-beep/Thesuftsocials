// ===============================
// Show / Hide Password
// ===============================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.innerHTML =
        '<i class="fa-regular fa-eye-slash"></i>';

    } else {

        passwordInput.type = "password";

        togglePassword.innerHTML =
        '<i class="fa-regular fa-eye"></i>';

    }

});

// ===============================
// Email Validation
// ===============================

function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// ===============================
// Register Button
// ===============================

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!validEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    registerBtn.innerHTML = "Creating account...";
    registerBtn.disabled = true;

    try {

    // Create the account
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    const user = userCredential.user;

    // Save the user's profile
    await setDoc(doc(db, "users", user.uid), {

        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        email: email,

        wallet: 0,

        createdAt: serverTimestamp()

    });

    // Create the welcome notification
    await addDoc(
        collection(db, "users", user.uid, "notifications"),
        {

            title: "Welcome to TheSuftSocials",

            message:
            "Your account has been created successfully. Start exploring our services.",

            read: false,

            createdAt: serverTimestamp()

        }
    );

    // Go to dashboard
    window.location.href = "dashboard.html";

} catch (error) {

    registerBtn.disabled = false;

    registerBtn.innerHTML = "Create account";

    switch (error.code) {

        case "auth/email-already-in-use":
            alert("An account already exists with this email.");
            break;

        case "auth/invalid-email":
            alert("Invalid email address.");
            break;

        case "auth/weak-password":
            alert("Password should be at least 6 characters.");
            break;

        default:
            alert(error.message);

    }

}

});

// ===============================
// Google Button
// ===============================

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {

    alert("Google Sign Up will be connected with Firebase.");

});

// ===============================
// Enter Key
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        registerBtn.click();

    }

});
import { auth, db } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
