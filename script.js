const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navHRLine = document.getElementsByClassName('hr-container')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navHRLine.classList.toggle('active');
});

const zoomInButton = document.getElementsByClassName('in')[0];
const resumeImage = document.getElementById('resume-img');

zoomInButton.addEventListener('click', () => {
  resumeImage.classList.toggle('active');
});

var numImages = document.getElementsByTagName("img")

for (var i = 0; i < numImages.length; i++ ) {
  numImages[i].setAttribute("draggable","false");
}