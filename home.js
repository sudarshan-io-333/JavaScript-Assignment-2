function formSubmit() {
    let invalidUserName = document.forms["loginForm"]["username"].value;
    let invalidPassword = document.forms["loginForm"]["password"].value;
    var passw = /^[A-Z]+$/;
    document.write(passw);
    if (invalidUserName == "" || invalidUserName.length < 3 || invalidUserName.length > 11 ||
        invalidUserName == (invalidUserName.isUppercase) ||
        invalidPassword == "" || invalidPassword.length < 3 || invalidPassword.length > 11) {
        alert("Invalid input or Name must not empty");
        return false;
    }


    var username = document.forms["loginForm"].elements["username"].value;
    var password = document.forms["loginForm"].elements["password"].value;

    console.log(username);
    // if ((username.length > 3 && username.length < 11) && username.isUppercase()) {


    console.log(username);
    localStorage.setItem("name", username);
    localStorage.setItem("pass", password);
    window.location.href = "./login.html";
    // }
}
// }