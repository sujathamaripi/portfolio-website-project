// Show/Hide Login Password
function toggleLoginPassword() {
    let password = document.getElementById("loginPassword");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Show/Hide Registration Password
function toggleRegisterPassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
}
// Login Form
const loginForm = document.querySelector("form");

if (loginForm && !document.getElementById("registerForm")) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Login Successful!");
    });
}

// Registration Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Registration Successful!");
        }
    });
}