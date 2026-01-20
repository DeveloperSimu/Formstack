document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email === "admin@gmail.com" && password === "123456") {
        message.style.color = "green";
        message.innerText = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Email or Password";
    }
});
