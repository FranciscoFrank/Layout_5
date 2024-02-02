document.addEventListener('DOMContentLoaded', function() {
  var burgerButton = document.getElementById('burger-button');
  var overlay = document.getElementById('overlay');
  var burgerMenu = document.getElementById('burger-menu');
  var closeIcons = document.getElementById('close-icon');

  burgerButton.addEventListener('click', function(event) {
    overlay.style.display = 'block';
    burgerMenu.classList.add('active');
  });

  closeIcons.addEventListener('click', function(event) {
    overlay.style.display = 'none';
    burgerMenu.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && event.target !== burgerButton && !burgerButton.contains(event.target)) {
      overlay.style.display = 'none';
      burgerMenu.classList.remove('active');
    }
  });
});
