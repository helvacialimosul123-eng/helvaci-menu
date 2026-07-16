

function openMenu(title, image) { alert("openMenu works");
currentMenu = menus.findIndex(menu =>
    menu.title === title && menu.image === image
);
    
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
let startX = 0;



function showMenu(index){

    if(index < 0){
        index = menus.length - 1;
    }

    if(index >= menus.length){
        index = 0;
    }

    currentMenu = index;

    document.getElementById("menuTitle").innerText = menus[currentMenu].title;

    document.getElementById("menuImage").src = menus[currentMenu].image;

}

document.getElementById("nextMenu").addEventListener("click", function(){

    showMenu(currentMenu + 1);

});

