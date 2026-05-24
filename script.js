const slides = document.querySelectorAll(".slide");

let current = 0;

if(slides.length > 0){

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  },3000);

}

const welcome = document.getElementById("welcome");

if(welcome){

  const username = localStorage.getItem("username");

  welcome.innerHTML = `Hello, ${username} 👋`;

}

function logout(){

  localStorage.clear();

  window.location.href = "login.html";

}
