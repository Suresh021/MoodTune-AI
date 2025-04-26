const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Flag to track if the user has signed up
let isUserSignedUp = false;

// Function to show an alert box for empty fields
function showEmptyFieldAlert(fieldName) {
    alert(`The ${fieldName} field cannot be empty.`);
}

// Function to validate the email format for Gmail
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

// Function to switch between tabs
function switchTab(tab) {
    if (tab === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Form validation before submitting login form
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Check if user has signed up
    if (!isUserSignedUp) {
        alert('You need to sign up first before logging in!');
        return;
    }

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        if (email === '') showEmptyFieldAlert('email');
        if (password === '') showEmptyFieldAlert('password');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    alert('Login Successful!');
    window.location.href = 'home.html';

});

// Form validation before submitting signup form
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name === '' || email === '' || password === '') {
        if (name === '') showEmptyFieldAlert('name');
        if (email === '') showEmptyFieldAlert('email');
        if (password === '') showEmptyFieldAlert('password');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    // Set the flag to true after successful signup
    isUserSignedUp = true;
    alert('Signup Successful! Now you can log in.');

    switchTab('login');

});

loginTab.addEventListener('click', () => switchTab('login'));
signupTab.addEventListener('click', () => switchTab('signup'));
