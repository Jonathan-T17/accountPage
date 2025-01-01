document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission to validate inputs first

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Basic validation for empty fields
    if (!email || !username || !password || !phoneNumber) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Normally here, you would submit the data to the backend for verification (via AJAX or a form submission)
    // Simulate successful login
    if (email === "email" && username === "username" && password === "password" && phoneNumber==='phoneNumber') {
        window.location.href = "/pages/home.html"; // Redirect to home page
    } else {
        message.textContent = "Invalid email/username or password.";
        message.style.color = "red";
    }
});
