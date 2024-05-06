
var web_content = document.getElementById("web_content");
var short_web_fade = document.getElementById("short_web_fade");

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = .38 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function scrollHandler() {

    fadeOutOnScroll(web_content);
    fadeOutOnScroll(short_web_fade);
}

window.addEventListener('scroll', scrollHandler);