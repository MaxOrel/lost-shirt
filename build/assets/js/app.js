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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/QvNC+0LTRg9C70Ywg0YHQu9Cw0LnQtNC10YDQsFxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faXRlbScpO1xyXG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBcInNsaWRlcl9faXRlbV92aXNpYmxlXCI7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcclxuICAgICAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIGluZGV4Kys7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbGlkZXJGYWRlZCgpIHtcclxuICAgICAgICB0aW1lciA9IHNldEludGVydmFsKHVwZGF0ZVNsaWRlciwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzbGlkZXJGYWRlZCgpO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICAgIHNsaWRlckZhZGVkKCk7XHJcblxyXG59KCkpO1xyXG5cclxuLy/QvNC+0LTRg9C70Ywg0LTQu9GPINCx0L7QutC+0LLQvtCz0L4g0LzQtdC90Y5cclxuKGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMub3Blbik7XHJcbiAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jbG9zZSk7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLm1lbnUpO1xyXG4gIFxyXG4gICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhcl9vcGVuZWRcIik7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhcl9vcGVuZWRcIik7XHJcbiAgICB9KTtcclxuICB9KSh7XHJcbiAgICAgIG1lbnU6IFwiLnNpZGViYXJcIixcclxuICAgICAgb3BlbjogXCIuc2lkZWJhcl9faGFtYnVyZ2VyXCIsXHJcbiAgICAgIGNsb3NlOiBcIi5zaWRlYmFyX19jbG9zZVwiXHJcbiAgfSk7XHJcbiAgXHJcbi8v0LzQvtC00YPQu9GMINC00LvRjyBtYXNvbm9yeSDRhNC40LvRjNGC0YDQsCwg0L/QvtC00LrQu9GO0YfQtdC90LjQtSDQv9C70LDQs9C40L3QsCBJc290b3BlXHJcblxyXG4gIChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzX19saXN0XCIpO1xyXG4gICAgY29uc3QgaXNvID0gbmV3IElzb3RvcGUoZWxlbSwge1xyXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIucHJvZHVjdHNfX2l0ZW1cIixcclxuICAgICAgICBmaWx0ZXI6ICcqJyAgICAgICAgXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRyb2xscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19idXR0b25cIik7XHJcbiAgICBjb25zdCBhY3RpdmVDbGFzcyA9IFwiZmlsdGVyX19pdGVtX2FjdGl2ZVwiO1xyXG4gICAgXHJcblxyXG4gICAgY29udHJvbGxzLmZvckVhY2goZnVuY3Rpb24oY29udHJvbCkge1xyXG4gICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlSXRlbUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19pdGVtLmZpbHRlcl9faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyTmFtZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWN0aXZlSXRlbUZpbHRlci5jbG9zZXN0KFwiLmZpbHRlcl9faXRlbVwiKS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdChcIi5maWx0ZXJfX2l0ZW1cIikuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XHJcbiAgXHJcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xyXG4gICAgICAgICAgZmlsdGVyOiBgJHtmaWx0ZXJOYW1lfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pKCk7Il19
