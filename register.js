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

    // Firebase registration will be added in Part 4

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1500);

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
