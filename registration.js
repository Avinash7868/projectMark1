function redirectToDashboard() {
    // Replace 'dashboard.html' with the URL of your desired destination page
    window.location.href = "login.html";

}
function registerUser(event) {
   event.preventDefault();
   var existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

   var nameInput = document.getElementById('name');
   var emailInput = document.getElementById('email');
   var passwordInput = document.getElementById('password');
   var confirmPasswordInput = document.getElementById('confirmPassword');
   var mobileInput = document.getElementById('mobile');

   var name = nameInput.value;
   var email = emailInput.value;
   var password = passwordInput.value;
   var confirmPassword = confirmPasswordInput.value;
   var mobile = mobileInput.value;

   if (name == "" ) {
       showError("please enter the username")
       return;
   }
   const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
   if(specialCharRegex.test(name)){
       showError("Please do not enter the special chatacters in username column")
       return;
   }
    if (email == "") {
       showError("please enter the E-mail")
       return;
    }
    
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address');
        return;
    }

    if (password == "" | password.length < 8) {
        showError("Please enter the password OR make it greater than 8 character")
        return;
    }
    const capitalRegex = /[A-Z]/;
   

    if (!capitalRegex.test(password)) {
        showError('Password should contain at least one capital letter.');
        return;
    }

    if (!specialCharRegex.test(password)) {
        showError('Password should contain at least one special character.');
        return;
    }
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    if(mobile.length<10){
        showError("please enter a valid mobile number");
        return;
    }
    if(specialCharRegex.test(mobile)){
        showError("Please do not enter the special character in the mobile number");
        return;
    }
    if(capitalRegex.test(mobile)){
        showError("Please do not enter the characters in the mobile number");
        return;
    }

    // var encryptedPassword = encryptData(password, encryptionKey);
    var registrationData = {
        name: name,
        email: email,
        password: password,
        mobile: mobile
    };
    // var encryptedData = encryptData(registrationData);

    // existingRegistrations.push(encryptedData);
    existingRegistrations.push(registrationData);

    // Store the updated registrations array in local storage
    localStorage.setItem('registrations', JSON.stringify(existingRegistrations));
    redirectToDashboard()
    showSuccessMessage();
    document.getElementById('registrationForm').reset();
}

function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'block';

    setTimeout(function () {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}

function showError(message) {
    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';

    setTimeout(function () {
        errorMessageElement.style.display = 'none';
    }, 3000);
}
// function encryptData(data) {
//     // Perform your encryption algorithm here
//     // This is a simple example using a Caesar cipher with a shift of 1
//     var encrypted = '';

//     for (var i = 0; i < data.length; i++) {
//         var charCode = data.charCodeAt(i);
//         charCode += 1;  // Shift the character code by 1
//         encrypted += String.fromCharCode(charCode);
//     }

//     return encrypted;
// }
