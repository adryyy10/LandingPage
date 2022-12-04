window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= 30 || window.pageYOffset >= 30) {
      document.getElementsByTagName("header")[0].classList.add("inverted");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("inverted");
    }
  };