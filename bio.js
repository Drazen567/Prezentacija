window.onload = function() {
    if (localStorage.getItem("auth") !== "true" || localStorage.getItem("IsAdmin") !== "true")
window.location.href = "pass.html" 
    }
    
    document.getElementById("dd1").addEventListener("click", function() {

        let link = document.createElement("a");
        link.href = "" ; 
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });