function formSubmit() {
    let invalidUserName = document.forms["loginForm"]["username"].value;
    let invalidPassword = document.forms["loginForm"]["password"].value;
    if (invalidUserName == "" || invalidPassword == "") {
        alert("Username or Password must not empty");
        return;
    }
    else if (invalidUserName.length < 3 || invalidUserName.length > 10 || invalidPassword.length < 3 ||
        invalidPassword.length > 10) {
        alert("Invalid Input");
        return;
    }
    else {
        var username = document.forms["loginForm"].elements["username"].value;
        var password = document.forms["loginForm"].elements["password"].value;
        localStorage.setItem("name", username);
        localStorage.setItem("pass", password);
        window.location.href = "./login.html";
    }
}