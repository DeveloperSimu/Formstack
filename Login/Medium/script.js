// ================================
// Premium Login Script
// ================================

// DOM Elements
const loginForm = document.getElementById("loginForm");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const messageBox = document.getElementById("message");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form Submit
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    // Reset message
    messageBox.innerText = "";
    messageBox.style.color = "";

    // Validation
    if (!email || !password) {
        showMessage("⚠ Please fill in all fields", "orange");
        return;
    }

    if (!emailRegex.test(email)) {
        showMessage("⚠ Enter a valid email address", "orange");
        return;
    }

    if (password.length < 6) {
        showMessage("⚠ Password must be at least 6 characters", "orange");
        return;
    }

    // Demo Authentication (replace with backend later)
    if (email === "admin@gmail.com" && password === "admin123") {
        showMessage("✅ Login successful! Redirecting...", "lightgreen");

        // Fake redirect
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        showMessage("❌ Invalid email or password", "red");
    }
});

// Show message function
function showMessage(text, color) {
    messageBox.innerText = text;
    messageBox.style.color = color;
}

// Show / Hide Password
function togglePassword() {
    passwordField.type =
        passwordField.type === "password" ? "text" : "password";
}

// Enter key UX improvement
emailField.addEventListener("keydown", focusNext);
passwordField.addEventListener("keydown", focusNext);

function focusNext(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        loginForm.requestSubmit();
    }
}
