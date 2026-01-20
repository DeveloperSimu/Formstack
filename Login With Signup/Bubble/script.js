// Open signup modal
function toggleSignUp() {
  document.getElementById("signup-modal").style.display = "flex";
}

// Close signup modal
function closeSignUp() {
  document.getElementById("signup-modal").style.display = "none";
}

// Handle Sign-Up
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Save to localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created successfully!");
  closeSignUp();
});

// Handle Sign-In
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const loginEmail = document.getElementById("login-email").value;
  const loginPass = document.getElementById("login-password").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPass = localStorage.getItem("userPassword");

  if (loginEmail === storedEmail && loginPass === storedPass) {
    alert("Login Successful!");
    // Redirect or show dashboard here
  } else {
    alert("Invalid email or password!");
  }
});

