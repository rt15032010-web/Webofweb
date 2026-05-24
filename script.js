const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

setInterval(() => {

slides[currentSlide].classList.remove("active");

currentSlide = (currentSlide + 1) % slides.length;

slides[currentSlide].classList.add("active");

},3000);

}

const userName = localStorage.getItem("wowUser");

const welcome = document.getElementById("welcome");

if(welcome){

welcome.innerHTML = `Hello, ${userName || "Creator"} 👋`;

}

function logout(){

localStorage.removeItem("wowUser");

window.location.href = "login.html";

}
