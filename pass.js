document.addEventListener("DOMContentLoaded", function() {
    
   console.log("DOM fully loaded and parsed");
    const admin = {
    username: "admin",
    password: "dev"

    }

     let users = JSON.parse(localStorage.getItem("users")) || []

    window.onload = function() {
        if (localStorage.getItem("IsAdmin") == "true") {
            document.getElementById("ib").style.display = "flex";
            document.getElementById("adduser").style.display = "block";
            document.getElementById("ruser").style.display = "block";
            document.getElementById("cont").style.display = "block";
        }
    }
let adduser = document.getElementById("adduser").addEventListener("click", function() {
    document.getElementById("cuser").style.display = "flex";
    document.getElementById("cuseri").style.display = "block";
    document.getElementById("cpasswordi").style.display = "block";
    document.getElementById("create").style.display = "block";
    document.getElementById("close").style.display = "block";

})

let close = document.getElementById("close").addEventListener("click", function() {
    document.getElementById("cuser").style.display = "none";
    document.getElementById("cuseri").style.display = "none";
    document.getElementById("cpasswordi").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("close").style.display = "none";

})
    
    let sw = document.getElementById("sw");

 
    let lock = "lock.svg";
    let unlock = "unlock.svg";
   

    sw.addEventListener("click", function() {
        let currentSrc = sw.getAttribute("src").split('/').pop(); 
        let password = document.getElementById("password")
        
        if (currentSrc === "lock.svg") {
            sw.setAttribute("src", unlock);  
            console.log("unlock");
            password.type = "text"


        } else {
            sw.setAttribute("src", lock);  
            password.type = "password"


        }
    });

document.getElementById("cont").addEventListener("click",function(){
console.log("kliknuto")
    window.location = "goto.html"
    
})





let loginf = document.getElementById("lf").addEventListener("submit",function(event){
    event.preventDefault()
  console.log("kliknuto")
  
      let name = document.getElementById("email").value
      let pass = document.getElementById("password").value
  
      
  
     let userexist = users.find(user => user.username === name && user.password === pass)
  
  if(userexist){
  
  alert("user postoi")
  localStorage.setItem("auth",true)
  alert("logovanje uspjesno")
  window.location = "new.html"
  return
  }
  if(name === admin.username && pass === admin.password){
  
      localStorage.setItem("IsAdmin",true)
  
  alert("admin")

  return
  }
  else{
  
      alert("pogresan username\password")
  return
  }
  
     
  })
  
  let createform = document.getElementById("create").addEventListener("click",function(event){
  event.preventDefault()
  
  
  
  let cuser = document.getElementById("cuseri").value
  let cpass = document.getElementById("cpasswordi").value
  
  let userexist = users.find(user => user.username === cuser)
  
  if(userexist && cuser === admin.username){
  
  alert("user vec postoi")
  
  }
  else{
  users.push({"username":cuser,"password":cpass})
  localStorage.setItem("users",JSON.stringify(users))
  alert("user je kreiran")

  document.getElementById("cuser").style.display = "none";
  document.getElementById("cuseri").style.display = "none";
  document.getElementById("cpasswordi").style.display = "none";
  document.getElementById("create").style.display = "none";
  document.getElementById("close").style.display = "none";


}
  })
  
  
  
  


let fp  = document.getElementById("fp").addEventListener("click",function (event){

document.getElementById("fcont").style.display = "flex";
document.getElementById("form-fcont").style.display = "flex";
document.getElementById("fg").style.display = "flex";
document.getElementById("lemail-fcont").style.display = "block";
document.getElementById("email-fcont").style.display = "block";
document.getElementById("fg2").style.display = "flex";
document.getElementById("label1").style.display = "block";
document.getElementById("textarea").style.display = "block";
document.getElementById("fcont-but").style.display = "block";

})

let fcontclose  = document.getElementById("fcontclose").addEventListener("click",function (event){

    document.getElementById("fcont").style.display = "none";
    document.getElementById("form-fcont").style.display = "none";
    document.getElementById("fg").style.display = "none";
    document.getElementById("lemail-fcont").style.display = "none";
    document.getElementById("email-fcont").style.display = "none";
    document.getElementById("fg2").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("textarea").style.display = "none";
    document.getElementById("fcont-but").style.display = "none";
    
    })

    let fcontbut  = document.getElementById("fcont-but").addEventListener("click",function (event){
        event.preventDefault()
 const webhook = "https://discord.com/api/webhooks/1351188993773010974/w9WrBQ23obMD5kBL04NegIKy5sGk-K6eo-g7SVzjv9c0bWIQJjx-vYPR1ix-GZRSvgYo"
 
 let ime = document.getElementById("email-fcont").value;
 let deskripcija = document.getElementById("textarea").value;

let data = {
content: ` **user: ${ime} ** forgot his password, \ninfo: \n**${deskripcija}**`

}

fetch(webhook,{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

.then(response => {
if(response.ok){
alert("Uspjesno poslano")

}})
.catch(eror => {
alert(`Greska ${error}`)



})

document.getElementById("fcont").style.display = "none";
    document.getElementById("form-fcont").style.display = "none";
    document.getElementById("fg").style.display = "none";
    document.getElementById("lemail-fcont").style.display = "none";
    document.getElementById("email-fcont").style.display = "none";
    document.getElementById("fg2").style.display = "none";
    document.getElementById("label1").style.display = "none";
    document.getElementById("textarea").style.display = "none";
    document.getElementById("fcont-but").style.display = "none";
    

})

});