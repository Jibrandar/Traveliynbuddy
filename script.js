// Get all elements with class name "booknow"
var bookNowButtons = document.querySelectorAll(".booknow");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add click event listener to each "Book Now" button
bookNowButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the button
    openModal();
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}


document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.lists ul').classList.toggle('active');
});

// js for email
var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
if (form) {
  form.addEventListener("submit", handleSubmit);
}

// Slider functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4500);

const carSlider = document.querySelector(".car-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  carSlider.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carSlider.scrollBy({ left: -320, behavior: "smooth" });
});

