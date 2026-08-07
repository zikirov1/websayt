// ===========================
// BESHA GROUP SCRIPT.JS
// ===========================

// Header Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "none";

    }

});


// Hero Animation

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    },300);

});


// Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// Gallery Hover

const gallery = document.querySelectorAll(".gallery-box");

gallery.forEach(box => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "scale(1.05)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "scale(1)";

    });

});


// Buttons Animation

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// Current Year

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
    `© ${year} Besha Group. Barcha huquqlar himoyalangan.`;

}


// Scroll Top Button (optional)

const topButton = document.createElement("button");

topButton.innerHTML = "^";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#003366";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// Console

console.log("Besha Group Website Loaded Successfully");