function openMenu(title, image) {

    document.getElementById("menuTitle").innerText = title;

    document.getElementById("menuImage").src = image;

    document.getElementById("menuModal").style.display = "block";

    document.body.style.overflow = "hidden";

    if (window.location.hash !== "#menu") {
        window.location.hash = "menu";
    }

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

    if (event.target === modal) {
        closeMenu();
    }

}

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){
        closeMenu();
    }

});



window.addEventListener("hashchange", function () {

    const modal = document.getElementById("menuModal");

    if (window.location.hash === "#menu") {

        modal.style.display = "block";
        document.body.style.overflow = "hidden";

    } else {

        modal.style.display = "none";
        document.body.style.overflow = "auto";

    }




});
