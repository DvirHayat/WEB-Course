// Function to display messages
function showMessage(message, type) {
    alert(`${type}: ${message}`);
}

// Function to register a new user
function registerUser(username, password) {
    // Check if username already exists
    if (localStorage.getItem(username)) {
        showMessage('Username already exists!', 'Error');
        return false;
    }
    // Store user credentials
    localStorage.setItem(username, password);
    showMessage('User registered successfully!', 'Success');
    return true;
}

// Function to login
function SignInUser() {

    console.log("asdasdasd")
    // Retrieve stored password for the given username
    //const storedPassword = localStorage.getItem(username);
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (password == "123456"){
        if (username = "test")
            showMessage('Login successful!', 'Success');
    }
    showMessage('Invalid username or password!', 'Error');
}

