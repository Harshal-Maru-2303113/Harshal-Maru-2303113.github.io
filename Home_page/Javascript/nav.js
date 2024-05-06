function openNav() {
    document.getElementById("open_navigation").style.height = "320px";
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName("open_navigation_items")[index].style.animation = "fadein .75s ease-in-out";
        document.getElementsByClassName("open_navigation_items")[index].style.opacity = "1";
    }
}

function closeNav() {
    document.getElementById("open_navigation").style.height = "0px";
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName("open_navigation_items")[index].style.animation = "fadeout .75s ease-in-out";
        document.getElementsByClassName("open_navigation_items")[index].style.opacity = "0";
    }
}