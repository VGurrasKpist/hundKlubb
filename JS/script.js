
loggedIn();

function validatelogin() {
    const username = document.getElementById("username").value; 
    const password = document.getElementById("password").value; 

    if (username === "Bella" && password === "qwe123") { 
        localStorage.setItem("userName", "Bella");
        loggedIn();
    } else {
        wrongPassword();
    }
}


function hideSignInForm() {
    document.getElementById("form").style.display = 'none';
}


function loggedIn() {
    if (localStorage.getItem("userName") === "Bella") {
        const btnLogout = document.getElementById("btnLogout");

        hideSignInForm();
        const text = document.getElementById("signedInText");
        text.innerHTML = "Välkommen Bella";

        btnLogout.style.display = 'block';
    }
}

function wrongPassword() {
    hideSignInForm();
    document.getElementById("wrongPassText").innerHTML = "Fel användarnamn eller lösenord försök igen";
    document.getElementById("btnBack").style.display = 'block';
}

function logout() {
    localStorage.removeItem("userName");
    location.reload();
}   