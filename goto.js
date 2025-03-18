if(localStorage.getItem("auth") !== "true" && localStorage.getItem("IsAdmin") !== "true"){
    window.location.href = "pass.html"

}

let ai = document.getElementById("AI").addEventListener("click",function(){
    window.location.href = "ai.html"
})

let lekcije = document.getElementById("LEKCIJE").addEventListener("click",function(){
    window.location.href = "new.html"
})

let chat = document.getElementById("CHAT").addEventListener("click",function(){
    window.location.href = "chat.html"
})