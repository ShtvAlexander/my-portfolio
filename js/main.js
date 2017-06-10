let navAffix = document.getElementsByClassName("header__nav_affix")[0];
console.log(navAffix);

if(navAffix.className.indexOf("header__nav_affix-fixed") === -1) {
  var stickyTop = navAffix.offsetTop;

  document.addEventListener('scroll', function () {
    console.log(navAffix.offsetTop);
    window.scrollY >= stickyTop ?
      navAffix.classList.add('header__nav_affix-fixed') :
      navAffix.classList.remove('header__nav_affix-fixed');
  });
}