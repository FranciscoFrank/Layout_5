//Script for the burger menu
document.addEventListener('DOMContentLoaded', function() {

  //Receive item ID
  var burgerButton = document.getElementById('burger-button');
  var overlay = document.getElementById('overlay');
  var burgerMenu = document.getElementById('burger-menu');
  var closeIcons = document.getElementById('close-icon');

  //Tracking the click on the burger menu button
  burgerButton.addEventListener('click', function(event) {
    overlay.style.display = 'block';
    overlay.style.position = 'fixed'; 
    burgerMenu.classList.add('active');
  });

  //Tracking the click on the burger menu close button
  closeIcons.addEventListener('click', function(event) {
    overlay.style.display = 'none';
    overlay.style.position = 'absolute';
    burgerMenu.classList.remove('active');
  });

  //If the click is outside the burger menu
  document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && event.target !== burgerButton && !burgerButton.contains(event.target)) {
      overlay.style.display = 'none';
      overlay.style.position = 'absolute';
      burgerMenu.classList.remove('active');
    }
  });
});

//Tracking the height of the header
document.addEventListener('DOMContentLoaded', function() {

  //Receive item ID
  var element = document.getElementById('top');
  var header = document.getElementById('header');

  //Update the height for an element 
  function updateHeight() {
      var elementHeight = header.offsetHeight;
      element.style.height = elementHeight + 'px';
  }

  //Updating the height when the site is launched or reloaded
  window.onload = function() {
    updateHeight();
  }

  //Updating height when changing window width
  window.onresize = function() {
    updateHeight();
  }
});

//Script to set the width of a block of text
document.addEventListener('DOMContentLoaded', function() {
  
  //Receive item ID
  const photoElement = document.getElementById('s-photo');
  const detailsElement = document.getElementById('s-details');

  //Updating the block width
  function updateDetailsWidth() {
    const photoWidth = photoElement.offsetWidth;
    const parentWidth = photoElement.parentElement.offsetWidth;
    detailsElement.style.width = `${100 - (photoWidth / parentWidth) * 100}%`;
  }

  //Calling the function
  updateDetailsWidth();

  //Calling a funtion when changing the screen width
  window.addEventListener('resize', updateDetailsWidth);
});

//Large script for the header (click on the link, normal display and responsive)
document.addEventListener('DOMContentLoaded', function() {
  
  //Receive item ID
  var header = document.getElementById('header');
  var nameNav = document.getElementById('name-nav');
  var links = document.querySelectorAll('a[href^="#"]');
  var scrollPosition = window.scrollY;

  //Function when loading a page
  function setPaddingOnLoad() {
    if (scrollPosition > 20) {
      nameNav.style.paddingTop = '0';
      nameNav.style.paddingBottom = '0';
      header.classList.add('black-header');
    } else {
      header.classList.remove('black-header');
      nameNav.style.paddingTop = '20px';
      nameNav.style.paddingBottom = '20px';
    }
  }

  //Calling a function
  setPaddingOnLoad();

  //Functiont for tracking if a swipe has been made
  document.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    //If the scroll was
    if (scrollPosition > 20) {
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '0';
      nameNav.style.paddingBottom = '0';
      header.classList.add('black-header');

      //Function for normal link navigation
      links.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href').slice(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            var headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
              top: targetElement.offsetTop - headerHeight,
              behavior: 'smooth' 
            });
          }
        });
      });
    } 
    
    //If there was no scrolling through the site, or the beginning of the page
    else {
      header.classList.remove('black-header');
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '20px';

      //Function for normal link navigation in this case
      links.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href').slice(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
            var headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
              top: targetElement.offsetTop - headerHeight + 20,
              behavior: 'smooth' 
            });
          }
        });
      });
    }
  });
});

//Initialising the feedback slider.
$(document).ready(function(){

  //Slider settings
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    
    //Point to display a single slide
    responsive: [
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ]});
});

//Script for the form
document.addEventListener('DOMContentLoaded', function () {
  
  //Receive item ID
  var form = document.getElementById('MyForm');
  var submitButton = document.getElementById('button-sub-sub');
  var inputElements = document.querySelectorAll('.form-input');
  var successMessage = document.getElementById('mess');

  //Function to track button clicks
  submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      //Verify that the form is completed correctly
      var isValid = true;

      //Checking the validity of the form
      inputElements.forEach(function(inputElement) {
          if (inputElement.value === '') {
              isValid = false;
              inputElement.classList.add('failed');
          } else {
              inputElement.classList.remove('failed');
          }
      });

      //If the form is completed correctly, we display a notification about it
      if (isValid) {
        successMessage.style.display = 'block';
        setTimeout(function() {
          form.submit();
        }, 1000);
      }
  });
});