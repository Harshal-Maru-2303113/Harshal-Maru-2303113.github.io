function openNav() {
    document.getElementById("side_nav").style.display = "block";
    document.getElementById("side_nav").style.width = "200px";
    document.getElementById("symbol_nav").style.display = "none";
}

function closeNav() {
    document.getElementById("side_nav").style.width = "0";
    setTimeout(delay,450);
    
}
function delay(){
    document.getElementById("symbol_nav").style.display = "block"
}