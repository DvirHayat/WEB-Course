// Function to display messages
function showMessage(message, type) {
    alert(`${type}: ${message}`);
}

// Function to create a new element with specified attributes and text content
function createElement(tagName, classNames = [], attributes = {}, textContent = '') {
    let element = document.createElement(tagName);
    if (classNames.length > 0) {
        element.classList.add(...classNames);
    }
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (textContent !== '') {
        element.textContent = textContent;
    }
    return element;
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Function to create the Sign In page layout
function createSignInPage() {
    // Create the outer div with class and id attributes
    let outerDiv = createElement('div', ['flex', 'flex-row', 'justify-center', 'items-center', 'gap-4'], { name: 'SignInPage', id: 'SignInPage' });

    // Create the form element with its classes
    let form = createElement('form', ['bg-white', 'shadow-md', 'rounded', 'px-8', 'pt-6', 'pb-8', 'mb-4']);

    // Create Username input field and label
    let usernameLabel = createElement('label', ['block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2'], { id: 'usernameLabel' }, 'Username');
    let usernameInput = createElement('input', ['shadow', 'appearance-none', 'border', 'rounded', 'w-full', 'py-2', 'px-3', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline'], { id: 'username', type: 'text', placeholder: 'Username' });

    // Append Username label and input to a div and then append the div to the form
    let usernameDiv = createElement('div', ['mb-4']);
    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);
    form.appendChild(usernameDiv);

    // Create Password input field and label
    let passwordLabel = createElement('label', ['block', 'text-gray-700', 'text-sm', 'font-bold', 'mb-2'], { id: 'passwordLabel' }, 'Password');
    let passwordInput = createElement('input', ['shadow', 'appearance-none', 'border', 'rounded', 'w-full', 'py-2', 'px-3', 'text-gray-700', 'mb-3', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline'], { id: 'password', type: 'password', placeholder: '******************' });

    // Append Password label and input to a div and then append the div to the form
    let passwordDiv = createElement('div', ['mb-6']);
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
    form.appendChild(passwordDiv);

    // Create Sign In button
    let signInButton = createElement('button', ['bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'focus:outline-none', 'focus:shadow-outline'], { type: 'button' }, 'Sign In');
    signInButton.addEventListener('click', SignInUser);

    // Create Forgot Password link
    let forgotPasswordLink = createElement('a', ['inline-block', 'align-baseline', 'font-bold', 'text-sm', 'text-blue-500', 'hover:text-blue-800'], { href: '#' }, 'Forgot Password?');

    // Create div for Sign In button and Forgot Password link
    let signInDiv = createElement('div', ['flex', 'items-center', 'justify-between']);
    signInDiv.appendChild(signInButton);
    signInDiv.appendChild(forgotPasswordLink);
    form.appendChild(signInDiv);

    // Create Not a member label and SignUp link
    let notAMemberLabel = createElement('label', ['block', 'text-gray-700', 'text-sm', 'font-bold'], {}, 'Not a member?');
    let signUpLink = createElement('a', ['inline-block', 'align-baseline', 'font-bold', 'text-sm', 'text-blue-500', 'hover:text-blue-800'], { href: '#' }, 'SignUp');
    signUpLink.addEventListener('click', SignUpClicked);

    // Create div for Not a member label and SignUp link
    let signUpDiv = createElement('div', ['flex', 'items-center', 'justify-between', 'p-4', 'bg-300', 'mt-2']);
    signUpDiv.appendChild(notAMemberLabel);
    signUpDiv.appendChild(signUpLink);
    form.appendChild(signUpDiv);

    // Append form to the outer div
    outerDiv.appendChild(form);

    return outerDiv;
}

// Function to display the sign-in page
function displaySignIn(show) {
        if (show) {
            const signInPage = createSignInPage();
            document.body.appendChild(signInPage);
        } else {
            // Remove login form if already displayed
            const signInPage = document.getElementById('SignInPage');
            if (signInPage) {
                signInPage.remove();
            }
        }
    }

// Function to display or remove the sign-in page based on type (true for sign-up, false for remove)
function displaySignUp(type) {
    if (!type) {
        const signInPage = document.getElementById('SignUpPage');
        if (signInPage) {
            signInPage.remove();
        }
    } else {
        let signUpForm = createSignUpForm(); //creates the form object
       
        document.body.appendChild(signUpForm);
    }
}

// Function to create the signup form dynamically
function createSignUpForm() {
// Create the outer div with class and id attributes
    let outerDiv = createElement('div', ['flex', 'flex-row', 'justify-center', 'items-center', 'gap-4'], { name: 'SignUpPage', id: 'SignUpPage' });
    // Create the form element
    const form = createElement('form',['bg-white', 'shadow-md', 'rounded', 'px-8', 'pt-6', 'pb-8', 'mb-4'], { id: 'SignUpPage' });

    // Create the first name input section
    const firstNameDiv = createElement('div', ['flex', 'flex-wrap', '-mx-3', 'mb-6']);
    firstNameDiv.innerHTML = `
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
    `;
    form.appendChild(firstNameDiv);

    // Create the last name input section
    const lastNameDiv = createElement('div', ['w-full', 'md:w-1/2', 'px-3']);
    lastNameDiv.innerHTML = `
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    `;
    form.appendChild(lastNameDiv);

    // Create the password input section
    const passwordDiv = createElement('div', ['flex', 'flex-wrap', '-mx-3', 'mb-6']);
    passwordDiv.innerHTML = `
        <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
    `;
    form.appendChild(passwordDiv);

    // Create the address section
    const addressDiv = createElement('div', ['flex', 'flex-wrap', '-mx-3', 'mb-6']);
    addressDiv.innerHTML = `
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
        </div>
    `;
    form.appendChild(addressDiv);
    outerDiv.appendChild(form)
   return outerDiv;
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

    console.log("User signed in succesfully")
    // Retrieve stored password for the given username
    //let storedPassword = localStorage.getItem(username);
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if ((password == "123456") && (username == "test")) { 
            showMessage('Login successful!', 'Success');
            displaySignIn(false)
            let loginDom = document.getElementById("")
            initializeGraph()
    }
    else{
        showMessage('Invalid username or password!', 'Error');    
    }
}

function SignUpClicked(){
    displaySignIn(false)
    displaySignUp(true)
}

document.addEventListener('DOMContentLoaded', function() {
    displaySignIn(true);
});

// Function to open and display the network graph
function openGraph() {
    // Create a container div if it doesn't exist
    let container = document.getElementById('network-graph');
    if (!container) {
        container = document.createElement('div');
        container.id = 'network-graph';
        container.className = 'w-full h-screen max-w-4xl p-4 bg-white shadow-lg rounded-lg mx-auto my-auto';
        document.body.className = 'bg-gray-100 flex items-center justify-center ';
        document.body.appendChild(container);
    }

    // Data for the network graph
    const nodes = new vis.DataSet([
        { id: 1, label: 'Person 1' },
        { id: 2, label: 'Person 2' },
        { id: 3, label: 'Person 3' },
        { id: 4, label: 'Person 4' },
        { id: 5, label: 'Person 5' }
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
    ]);

    // Create a network
    const data = { nodes: nodes, edges: edges };
    const options = {
        nodes: {
            shape: 'dot',
            size: 16,
            font: {
                size: 32,
                color: '#23574f'
            },
            borderWidth: 2
        },
        edges: {
            width: 2
        },
        physics: {
            enabled: true
        }
    };

    new vis.Network(container, data, options);
}
// Function to initialize the graph by loading vis.js and then setting up the graph
function initializeGraph() {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js', () => {
        // Now vis.js is loaded, and you can call openGraph from anywhere
        if (typeof graphInitialized === 'undefined') {
            window.graphInitialized = true;
            openGraph();
        }
        console.log("reached here - didnt open graph")
    });
}