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

//
document.addEventListener('DOMContentLoaded', function() {
  
  // Отримання посилань на елементи DOM
  var header = document.getElementById('header');
  var nameNav = document.getElementById('name-nav');
  var links = document.querySelectorAll('a[href^="#"]');
  
  // Оголошення змінної для поточного значення положення прокрутки
  var scrollPosition = window.scrollY;

  // Функція для встановлення відступів при завантаженні
  function setPaddingOnLoad() {
    // Перевірка положення прокрутки
    if (scrollPosition > 20) {
      nameNav.style.paddingTop = '0';
      nameNav.style.paddingBottom = '0';
      header.classList.add('black-header');
    } else {
      header.classList.remove('black-header');
      nameNav.style.paddingTop = '20px'; // Тут змінив висоту paddingTop на 20px
      nameNav.style.paddingBottom = '20px';
    }
  }

  // Виклик функції при завантаженні
  setPaddingOnLoad();

  // Обробник події прокрутки
  document.addEventListener('scroll', function() {
    // Оновлення значення положення прокрутки
    scrollPosition = window.scrollY;

    // Перевірка положення прокрутки та встановлення відповідних стилів
    if (scrollPosition > 20) {
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '0';
      nameNav.style.paddingBottom = '0';
      header.classList.add('black-header');

      // Додавання обробника подій на клік для кожного посилання
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
    } else {
      header.classList.remove('black-header');
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '20px'; // Тут змінив висоту paddingTop на 20px

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


document.addEventListener('DOMContentLoaded', function () {
  

  var form = document.getElementById('MyForm');
  var submitButton = document.getElementById('button-sub-sub');
  var inputElements = document.querySelectorAll('.form-input');
  var successMessage = document.getElementById('mess');


  submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      
      var isValid = true;
      inputElements.forEach(function(inputElement) {
          if (inputElement.value === '') {
              isValid = false;
              inputElement.classList.add('failed');
          } else {
              inputElement.classList.remove('failed');
          }
      });

      
      if (isValid) {
        successMessage.style.display = 'block';
        setTimeout(function() {
          form.submit();
        }, 1000);
      }
  });
});