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

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", function(e){

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = card.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = (e.clientX - rect.left - size / 2) + "px";
        circle.style.top = (e.clientY - rect.top - size / 2) + "px";

        card.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });

});
const firstCard = document.querySelector(".card");

firstCard.addEventListener("click", function(e){

    e.preventDefault();

    const title = this.dataset.title;
    const image = this.dataset.image;

    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    ripple.style.left = (e.clientX - rect.left - size/2) + "px";
    ripple.style.top = (e.clientY - rect.top - size/2) + "px";

    this.appendChild(ripple);

    this.classList.add("card-touch");

    setTimeout(() => {

        ripple.remove();

        this.classList.remove("card-touch");

        openMenu(title, image);

    },120);

});
