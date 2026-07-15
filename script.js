function openMenu(title, image) {

    document.getElementById("menuTitle").innerText = title;

    document.getElementById("menuImage").src = image;

    document.getElementById("menuModal").style.display = "block";

    document.body.style.overflow = "hidden";
    
window.location.hash = "menu";
}

function closeMenu() {

    document.getElementById("menuModal").style.display = "none";

    document.body.style.overflow = "auto";
    if (window.location.hash === "#menu") {
    history.back();
    }

}

window.onclick = function(event) {

    const modal = document.getElementById("menuModal");

    if (event.target == modal) {

        closeMenu();

    }

}

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeMenu();

    }

});
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("touchstart", () => {
        card.style.transform = "scale(0.97)";
    });

    card.addEventListener("touchend", () => {
        card.style.transform = "";
    });

});
window.addEventListener("hashchange", function () {

    if (window.location.hash !== "#menu") {

        closeMenu();

    }

});
