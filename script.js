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

