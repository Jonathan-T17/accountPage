const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission to validate inputs first

    // Get values from the inputs
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Basic validation for empty fields
    if (!email || !username || !password || !confirmPassword) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // Prepare data to submit
    const formData = {
        email: email,
        username: username,
        password: password
    };

    // Making an AJAX request
    fetch('/register', { // Change this to your API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(async response => {
            if (!response.ok) {
                // Attempt to extract error message from the response
                const err = await response.json();
                throw new Error(err.message || 'Registration failed!');
            }
            return response.json();
        })
        .then(data => {
            message.textContent = "Account created successfully!";
            message.style.color = "green";
            // Redirect to login page after successful registration
            setTimeout(() => {
                window.location.href = "../pages/login.html"; // Change to your login page URL
            }, 2000); // Redirect after 2 seconds
        })
        .catch(error => {
            message.textContent = error.message;
            message.style.color = "red";
        });
});
