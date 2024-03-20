function openNav() {
    document.getElementById("side_nav").style.display = "block";
    document.getElementById("side_nav").style.width = "200px";
    document.getElementById("symbol_nav").style.display = "none";
    document.getElementById("short_title").style.opacity = "0.2";
    document.getElementById("sh_bg").style.opacity = "0.2";
}

function closeNav() {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("sh_bg").style.opacity = "1";
    document.getElementById("short_title").style.opacity = "1";
    setTimeout(delay, 450);

}
function delay() {
    document.getElementById("symbol_nav").style.display = "block"
}