const modal = document.getElementById("bookingModal");
const btns = document.querySelectorAll(".book-btn");
const close = document.querySelector(".close");
const packageInput = document.getElementById("packageName");

btns.forEach(btn => {
  btn.onclick = function () {

    const packageName = this.getAttribute("data-package");

    packageInput.value = packageName;

    modal.style.display = "flex";
  };
});

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});





let swiper;

function initSwiper(){

  if(window.innerWidth <= 768){

    if(!swiper){
      swiper = new Swiper('.destinations-slider', {

        slidesPerView:1,
        spaceBetween:20,
        loop:true,

        autoplay:{
          delay:2000,
          disableOnInteraction:false
        }

      });
    }

  } else {

    if(swiper){
      swiper.destroy(true,true);
      swiper = undefined;
    }

  }

}


window.addEventListener("load", () => {
  setTimeout(() => {
    initSwiper();
    setTimeout(() => {
      if(swiper) {
        swiper.update();
        swiper.recalcSlides();
      }
    }, 100);
  }, 300);
});



window.addEventListener('resize', initSwiper);




const cards = document.querySelectorAll(".package-card, .destination-inner");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
},{
  threshold:0.15,
  rootMargin:"0px 0px -40px 0px"
});

cards.forEach(card=>{
  observer.observe(card);
});

