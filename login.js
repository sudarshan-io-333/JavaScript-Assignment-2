let user = localStorage.getItem("name");
let pass = localStorage.getItem("pass")
let userDom = document.querySelector(".username");

function loadData() {
    document.querySelector(".username").innerHTML = user;
    document.querySelector(".password").innerHTML = pass;
}