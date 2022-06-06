const content = document.getElementById("content");
const secondNav = document.querySelector(".second-nav");
const subscribe = document.querySelector("#subscribe");
const overlay = document.querySelector("#overlay");
const exitSubscribe = document.querySelector("#exit-subscribe");

let slideIndex = 1;

// POP-UP SUBSCRIBE

setTimeout(() => {
  if(!localStorage.getItem("popupShown")){
    subscribe.classList.remove("hide");
    overlay.classList.add("overlay");
    localStorage.setItem("popupShown", "true");
  }
},5000)

exitSubscribe.addEventListener("click", function(){
  subscribe.classList.add("hide");
  overlay.classList.remove("overlay");
})

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);  
}

setInterval(() => {
    plusSlides(1);
}, 7000);


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let title = document.getElementsByClassName("text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(function(){
  title[slideIndex-1].classList.remove("hide")
  },2000)
  title[slideIndex-1].classList.add("hide")
}

// SECOND NAVBAR

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > content.offsetTop || document.documentElement.scrollTop > content.offsetTop) {

    secondNav.style.top = "0";
  } else {
    secondNav.style.top = "-120px";
  }
}


// COUNTDOWN TIMER

const countDownDate = new Date("June 5, 2022, 18:00:00").getTime();
const countDownTime = document.querySelector("#countdown-time")

let updateSeconds = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate -  now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownTime.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(updateSeconds);
    countDownTime.textContent ="EXPIRED"
  }


},1000)