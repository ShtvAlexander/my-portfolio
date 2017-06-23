/*
 * CSS Affix Navigation 
 * Put me in a seperate file (affixNav.js)
 * so any changes can be easily implemented
 */

//When should I always affix?
var minWidth = 319;
//When did I become affixed? [dont edit]
var stoppedAt = 300;
//What is the name of the element to affix?
var navElement = document.getElementsByClassName("nav_affix")[0];
//What class should I give on affix?
var fixedClass = 'nav_affix-fixed'

var navTop = navElement.offsetTop;

//This function turns the element affix
function initAffix(element) {
   element.classList.add(fixedClass);
};

//This delegates the affix based on window width
//and page scroll position.
function delegateNav() {
  if(window.innerWidth > minWidth) {
    if(window.scrollY > window.innerHeight) {
      initAffix(navElement);
      stoppedAt = window.scrollY;
    } else {
      if(stoppedAt && window.scrollY < stoppedAt) {
        navElement.classList.remove(fixedClass);
      }
    }
  } else {
    initAffix(navElement);
  }
}

//Check Nav on Page Load
ready(function() {
  delegateNav();
});

//Check Nav on Scroll
window.onscroll = function() {
  delegateNav();
};

//Check Nav on Resize
window.onresize = function() {
  navElement.classList.remove(fixedClass);
  delegateNav();
};

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}