function redirectToDashboard() {
    window.location.href = "welcome.html";
}

function validateLogin(event) {
    event.preventDefault();

    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    // var email = emailInput.value;
    var password = passwordInput.value;
    var email = emailInput.value;
    // var Email = decryptData(email);
    // var encryptedPassword = passwordInput.value;
    // var decryptedPassword = decryptData(encryptedPassword);

    var registrations = JSON.parse(localStorage.getItem('registrations'));
    var isLoggedIn = false;


    if (registrations) {
        for (let i = 0; i < registrations.length; i++) {
            var registration = registrations[i];
            if (registration.email === email && registration.password === password ) {
                isLoggedIn = true;
                break;
            }
        }
    }

    if (isLoggedIn) {
        alert('Login successful');
        // Perform further actions after successful login
        redirectToDashboard();
    } else {
        alert('Invalid email, password');
    }
}