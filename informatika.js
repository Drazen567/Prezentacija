
window.onload = function() {
    if ( localStorage.getItem("auth") !== "true" && localStorage.getItem("IsAdmin") !== "true") {

window.location.href = "pass.html"

    }}


const link = "https://chatgpt.com/canvas/shared/67d8b503c4d8819182d429a24b7383f5"

document.getElementById("dd1").addEventListener("click", function() {
    window.open(link);
});