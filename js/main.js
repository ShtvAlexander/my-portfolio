let navAffix = document.getElementsByClassName("header__nav_affix")[0];
console.log(navAffix.offsetTop);

var stickyTop = navAffix.offsetTop;

  document.addEventListener('scroll', function () {
    window.scrollY >= stickyTop ?
      navAffix.classList.add('header__nav_affix-fixed') :
      navAffix.classList.remove('header__nav_affix-fixed');
  });