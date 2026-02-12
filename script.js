function togglePasswordVisibility() {
    const passwordField = document.getElementById('password-field');
    const eyeIcon = document.getElementById('eye-icon');

    // Toggle password field visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show password
        eyeIcon.src = 'eye-hide.png'; // Change to "hide" icon
    } else {
        passwordField.type = 'password'; // Hide password
        eyeIcon.src = 'eye.png'; // Change to "show" icon
    }
}
 