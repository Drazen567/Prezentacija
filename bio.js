window.onload = function() {
    if (localStorage.getItem("auth") == "true" || localStorage.getItem("IsAdmin") == "true"){
console.log("autorizovan")
    }
else {
window.location.href = "pass.html" }
}
    
    document.getElementById("dd1").addEventListener("click", function() {

       window.location.href = "bioindex.html"
    });
