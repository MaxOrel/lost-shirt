//модуль слайдера
(function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__item');
    const activeClass = "slider__item_visible";
    let interval;
    let index = 0;

    function updateSlider() {
        slides[index].classList.remove(activeClass);
        index++;

        if (index > slides.length - 1) {
            index = 0;
        }

        slides[index].classList.add(activeClass);
    }
    function sliderFaded() {
        timer = setInterval(updateSlider, 3000);
    }


    slider.addEventListener('mouseenter', function () {
        clearInterval(timer);
    });
    slider.addEventListener('mouseleave', function () {
        sliderFaded();
    }
    );
    sliderFaded();

}());

//модуль для бокового меню
(function(options) {
    const btnOpen = document.querySelector(options.open);
    const btnClose = document.querySelector(options.close);
    const sidebar = document.querySelector(options.menu);
  
    btnOpen.addEventListener("click", function(e) {
        e.preventDefault();
      sidebar.classList.toggle("sidebar_opened");
    });
  
    btnClose.addEventListener("click", function(e) {
      e.preventDefault();
      sidebar.classList.toggle("sidebar_opened");
    });
  })({
      menu: ".sidebar",
      open: ".sidebar__hamburger",
      close: ".sidebar__close"
  });
  
//модуль для masonory фильтра, подключение плагина Isotope

  (function() {
    const elem = document.querySelector(".products__list");
    const iso = new Isotope(elem, {
        itemSelector: ".products__item",
        filter: '*'        
    });
  
    const controlls = document.querySelectorAll(".filter__button");
    const activeClass = "filter__item_active";
    

    controlls.forEach(function(control) {
      control.addEventListener("click", function(e) {
        e.preventDefault();

        let activeItemFilter = document.querySelector(".filter__item.filter__item_active");
        const filterName = control.getAttribute("data-filter");
        
        activeItemFilter.closest(".filter__item").classList.remove(activeClass);
        e.currentTarget.closest(".filter__item").classList.add(activeClass);
  
        iso.arrange({
          filter: `${filterName}`
        })
      });
    });
  })();