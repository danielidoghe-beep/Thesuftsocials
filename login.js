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

function validEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


// ===============================
// Sign In Button
// ===============================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click",()=>{

    const email=document.getElementById("email").value.trim();

    const password=passwordInput.value.trim();


    if(email===""){

        alert("Please enter your email.");

        return;

    }


    if(!validEmail(email)){

        alert("Please enter a valid email address.");

        return;

    }


    if(password===""){

        alert("Please enter your password.");

        return;

    }


    if(password.length<6){

        alert("Password must be at least 6 characters.");

        return;

    }


    loginBtn.innerHTML="Signing in...";

    loginBtn.disabled=true;


    // Redirect to dashboard
    // Replace this with Firebase login later

    setTimeout(()=>{

        window.location.href="dashboard.html";

    },1200);

});


// ===============================
// Google Sign In Placeholder
// ===============================

const googleBtn=document.querySelector(".google-btn");

googleBtn.addEventListener("click",()=>{

    alert("Firebase Google Sign-In will be connected here.");

});


// ===============================
// Press Enter To Login
// ===============================

document.addEventListener("keydown",(event)=>{

    if(event.key==="Enter"){

        loginBtn.click();

    }

});
