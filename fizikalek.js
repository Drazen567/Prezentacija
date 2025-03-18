window.onload = function() {
if (localStorage.getItem("auth") !== "true" && localStorage.getItem("IsAdmin") !== "true"){
window.location.href = "pass.html"
console.log(JSON.stringify(localStorage.getItem("auth")))
}}
    document.getElementById("dd1").addEventListener("click", function() {

        let link = document.createElement("a");
        link.href = "C:\Users\W10\Desktop\pudt"; 
        link.download = "prezentacija drazen";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });