const menus = [

{
title:"حلوى السميد",
image:"helvaciali.mosul_20260713_170724_401.jpg"
},

{
title:"القهوة",
image:"helvaciali.mosul_20260713_170727_802.jpg"
},

{
title:"قهوة الحليب",
image:"helvaciali.mosul_20260713_170731_340.jpg"
},

{
title:"آيس لاتيه",
image:"helvaciali.mosul_20260713_170737_476.jpg"
},

{
title:"فرابي وموهيتو",
image:"helvaciali.mosul_20260713_170741_607.jpg"
},

{
title:"العصائر",
image:"helvaciali.mosul_20260713_170744_003.jpg"
},

{
title:"الشاي والسموذي",
image:"helvaciali.mosul_20260713_170746_034.jpg"
},

{
title:"التشيزكيك والحلويات",
image:"helvaciali.mosul_20260713_170747_675.jpg"
},

{
title:"الكوكيز والمعجنات",
image:"helvaciali.mosul_20260713_170753_150.jpg"
},

{
title:"البان كيك والكريب",
image:"helvaciali.mosul_20260713_170751_585.jpg"
},

{
title:"الميني بان كيك",
image:"helvaciali.mosul_20260713_170753_150.jpg"
}

];

let currentMenu = 0;

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

