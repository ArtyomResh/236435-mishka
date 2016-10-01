var navToggle = document.querySelector(".header-main__nav-toggle");
var navItems = document.querySelectorAll(".header-main__nav-item:not(:nth-last-child(-n+2))");

function navSwitchLoad() {
  var i;

  // Меню должно работать только на мобильной версии
  if (window.innerWidth < 768) {

    // И загружаться закрытым
    navToggle.classList.remove("header-main__nav-toggle--nojs");
    navToggle.classList.remove("header-main__nav-toggle--close");
    navToggle.classList.add("header-main__nav-toggle--open");

    for (i = 0; i < navItems.length; i++) {
      navItems[i].classList.add("header-main__nav-item--hidden");
    }
  } else {
    navToggle.classList.add("header-main__nav-toggle--nojs");
    navToggle.classList.remove("header-main__nav-toggle--close");
    navToggle.classList.remove("header-main__nav-toggle--open");

    for (i = 0; i < navItems.length; i++) {
      if (navItems[i].classList.contains("header-main__nav-item--hidden")) {
        navItems[i].classList.remove("header-main__nav-item--hidden");
      }
    }
  }
}

function navSwitchResize() {
  var i;

  // Меню должно работать только на мобильной версии
  if (window.innerWidth < 768) {
    navToggle.classList.remove("header-main__nav-toggle--nojs");

    // Сделаем так, что бы при изменении ширины экрана меню оставалось
    // открытым/закрытым если его до этого открыл/закрыл пользователь
    if (navToggle.classList.contains("header-main__nav-toggle--close")) {
    } else {
      for (i = 0; i < navItems.length; i++) {
        navItems[i].classList.add("header-main__nav-item--hidden");

        navToggle.classList.remove("header-main__nav-toggle--close");
        navToggle.classList.add("header-main__nav-toggle--open");
      }
    }
  } else {
    navToggle.classList.add("header-main__nav-toggle--nojs");

    for (i = 0; i < navItems.length; i++) {
      if (navItems[i].classList.contains("header-main__nav-item--hidden")) {
        navItems[i].classList.remove("header-main__nav-item--hidden");
      }
    }
  }
}

document.documentElement.onload = navSwitchLoad();

window.onresize = navSwitchResize;

navToggle.addEventListener("click", function() {
  event.preventDefault();
  for (i = 0; i < navItems.length; i++) {
    if (navItems[i].classList.contains("header-main__nav-item--hidden")) {
      navItems[i].classList.remove("header-main__nav-item--hidden");

      navToggle.classList.remove("header-main__nav-toggle--open");
      navToggle.classList.add("header-main__nav-toggle--close");
    }
    else {
      navItems[i].classList.add("header-main__nav-item--hidden");

      navToggle.classList.add("header-main__nav-toggle--open");
      navToggle.classList.remove("header-main__nav-toggle--close");
    }
  }
});
