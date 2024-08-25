function showLogin() {
  document.getElementById("login-modal").style.display = "block";
}

function showSignup() {
  document.getElementById("signup-modal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};


// Toggle menu on mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('nav ul').classList.toggle('active');
});
