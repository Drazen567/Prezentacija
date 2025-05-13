let meni = document.getElementById("meni");
let menu = document.getElementById("menu");

menu.addEventListener("click", function() {

  meni.classList.toggle("hidden");      // Sakrij box
  menu.classList.toggle("hidden"); // Dodaj klasu active na dugme
console.log("menu clicked"); // Log message for debugging

})
let t1 = document.getElementById("t1");
t1.addEventListener("click", function() {
window.location.href = "test.html";
})