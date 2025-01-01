// Script to handle logout functionality
document.getElementById('logoutLink').addEventListener('click', function (event) {
    event.preventDefault();

    // Clear user-related data from localStorage or sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Optionally clear cookies
    document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0];
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    // Redirect to login or home page
    window.location.href = 'login.html'; // Change 'login.html' to your desired destination
});
