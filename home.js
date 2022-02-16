function formSubmit() {
    let invalidUserName = document.forms["loginForm"]["username"].value;
    let invalidPassword = document.forms["loginForm"]["password"].value;
    if (invalidUserName == "" || invalidUserName.length < 3 || invalidUserName.length > 10 ||
        invalidPassword == "" || invalidPassword.length < 3 || invalidPassword.length > 10) {
        alert("Invalid input or Name must not empty");
        return false;
    }
    var username = document.forms["loginForm"].elements["username"].value;
    var password = document.forms["loginForm"].elements["password"].value;
    localStorage.setItem("name", username);
    localStorage.setItem("pass", password);
    window.location.href = "./login.html";
    }
