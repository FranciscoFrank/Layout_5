document.addEventListener('DOMContentLoaded', function() {

  var burgerButton = document.getElementById('burger-button');
  var overlay = document.getElementById('overlay');
  var burgerMenu = document.getElementById('burger-menu');
  var closeIcons = document.getElementById('close-icon');

  burgerButton.addEventListener('click', function(event) {
    overlay.style.display = 'block';
    overlay.style.position = 'fixed'; 
    burgerMenu.classList.add('active');
  });

  closeIcons.addEventListener('click', function(event) {
    overlay.style.display = 'none';
    overlay.style.position = 'absolute';
    burgerMenu.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && event.target !== burgerButton && !burgerButton.contains(event.target)) {
      overlay.style.display = 'none';
      overlay.style.position = 'absolute';
      burgerMenu.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('header-height');
  var header = document.getElementById('header');

  function updateHeight() {
      var elementHeight = header.offsetHeight;
      element.style.height = elementHeight + 'px';
  }

  window.onload = function() {
    updateHeight();
  }

  window.onresize = function() {
    updateHeight();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const photoElement = document.getElementById('s-photo');
  const detailsElement = document.getElementById('s-details');

  function updateDetailsWidth() {
    const photoWidth = photoElement.offsetWidth;
    const parentWidth = photoElement.parentElement.offsetWidth;
    detailsElement.style.width = `${100 - (photoWidth / parentWidth) * 100}%`;
  }

  updateDetailsWidth();

  window.addEventListener('resize', updateDetailsWidth);
});


document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('header');
  var nameNav = document.getElementById('name-nav');

  function setPaddingOnLoad() {
    var scrollPosition = window.scrollY;
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

  setPaddingOnLoad();

  document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 20) {
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '0';
      nameNav.style.paddingBottom = '0';
      header.classList.add('black-header');
    } else {
      header.classList.remove('black-header');
      nameNav.style.transition = 'padding 0.5s';
      nameNav.style.paddingTop = '20px';
    }
  });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    pauseOnHover: true,
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

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a[href^="#"]');

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
});



