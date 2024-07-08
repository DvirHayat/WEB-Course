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
    let form = createElement('form', ['bg-white', 'shadow-md', 'rounded', 'px-8', 'pt-6', 'pb-8', 'mb-6','mt-6']);

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
        createSignUpForm(); //creates the form object
       
        //document.body.appendChild(signUpForm);
    }
}

// Function to create the signup form dynamically
function createSignUpForm() {
    const htmlContent = `  <div class="flex flex-row justify-center items-center gap-4 mt-4" >
    <form class="w-full max-w-lg p-7 bg-white shadow-md" name="SignUpPage" id="SignUpPage">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Jane">
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name" type="text" placeholder="Doe">
            </div>
            <div class="w-full px-3 mb-6">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-id">
                    ID
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-id" type="text" placeholder="ID">
            </div>
            <div class="w-full px-3 mb-6">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="password" placeholder="******************">
            </div>
            <div class="w-full px-3 mb-6">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-birthdate">
                    Birthday
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-birthdate" type="date">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    State
                </label>
                <div class="relative">
                    <select
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state">
                        <option>Israel</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="grid-city" type="text" placeholder="Karmiel">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-work">
                    Work
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="grid-work" type="text" placeholder="Rafael">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-gender">
                    Gender
                </label>
                <div class="relative">
                    <select
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-gender">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-between mt-4 px-3">
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick=RegisterUser()
                    type="button">
                    Register
                    
                </button>
            </div>
        </div>
    </form>
</div>
`
document.body.innerHTML = htmlContent;
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
            toggleMenu(true); // Show the menu when sign-in page is displayed
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
        container.className = 'w-screen h-96  bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center justify-center';
        document.body.appendChild(container);
    }

    // Data for the network graph
    const nodes = new vis.DataSet([
        { id: 1, label: 'Yael' },
        { id: 2, label: 'Shimon' },
        { id: 3, label: 'Lital' },
        { id: 4, label: 'Gershon' },
        { id: 5, label: 'Ravit' },
        { id: 6, label: 'Liora' },
        { id: 7, label: 'Orly' },
        { id: 8, label: 'Dor' },
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 4, to: 3 },
        { from: 2, to: 5 },
        { from: 6, to: 7 },
        { from: 7, to: 8 },
        { from: 8, to: 6 },

    ]);

    // Create a network
    const data = { nodes: nodes, edges: edges };
    const options = {
        nodes: {
            shape: 'dot',
            size: 32,
            font: {
                size: 32,
                color:'#314155'
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

// Function to toggle the menu
function toggleMenu(show) {
    if (show) {
        let header = document.getElementById('header')
        const menu = createMenu();
        header.appendChild(menu);
    } else {
        // Remove the menu if already displayed
        const menu = document.getElementById('menu');
        if (menu) {
            menu.remove();
        }
    }
}

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'flex flex-row items-center pb-8 pr-8 pl-8 rounded-lg place-content-center';

    // Menu items
    const menuItems = [
        { text: 'Home', href: '#', id: "HomeButton" },
        { text: 'About', href: '#', id: "AboutButton" },
        { text: 'Profile', href: '#', id: "ProfileButton" },
        { text: 'Contact', href: '#', id: "ContactButton" }
    ];

    // Add menu items to the menu div
    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = "menu-item bg-gray-200 p-2 rounded-lg shadow-lg mr-3 ml-3 bg-white text-slate-700 hover:ease-in text-blue-500 hover:ease-in duration-400";
        link.id = item.id;
        link.textContent = item.text;
        
        // Assign click event handlers
        if (link.id === "ProfileButton") {
            link.onclick = profileClicked;
        }
        
        menu.appendChild(link);
    });

    return menu;
}

function profileClicked(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Remove all child nodes from body except those with specific IDs
    const body = document.body;
    const menuItems = Array.from(body.childNodes); // Convert to array for forEach usage
    
    menuItems.forEach(item => {
        if (item.id === "header") {
            return; // Skip the node with id "header"
        } else {
            item.remove(); // Remove other nodes from body
        }
    });
    
    // Create and append new profile data
    const div = document.createElement('div');
    div.classList.add("personal-data");
    div.classList.add("flex");
    div.classList.add("flex-row");
    div.classList.add("justify-center");
    div.classList.add("items-center");
    div.classList.add("gap-4");
    div.classList.add("mt-4");
    div.innerHTML = `
        <div class="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 class="text-2xl font-bold mb-4">User Profile</h1>
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="fullName">Full Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="fullName" type="text" placeholder="Full Name">
        </div>
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="userID">ID</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="userID" type="text" placeholder="ID">
        </div>
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Connections</label>
            <ul id="connectionList" class="list-disc pl-5">
                <!-- Connection list items will be added here -->
            </ul>
        </div>
        <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="newConnection" type="text" placeholder="Add New Connection (Name, Type)">
        </div>
        <div class="flex space-x-2">
            <button onclick="addConnection()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Connection
            </button>
            <button onclick="removeConnection()"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Remove Connection
            </button>
        </div>
    </div>
    `;
    
    body.appendChild(div); // Append new data to body
}

// Function to add a new connection
function addConnection() {
    const connectionInput = document.getElementById('newConnection');
    const connectionList = document.getElementById('connectionList');

    if (connectionInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = connectionInput.value.trim();
        connectionList.appendChild(li);
        connectionInput.value = ''; // Clear the input field
    }
}

// Function to remove a connection
function removeConnection() {
    const connectionInput = document.getElementById('newConnection');
    const connectionList = document.getElementById('connectionList');
    const connections = connectionList.getElementsByTagName('li');
    
    for (let i = 0; i < connections.length; i++) {
        if (connections[i].textContent.trim() === connectionInput.value.trim()) {
            connectionList.removeChild(connections[i]);
            connectionInput.value = ''; // Clear the input field
            break;
        }
    }
}






