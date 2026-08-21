/* =========================================================
   BESHA GROUP — SCRIPT
   ========================================================= */


/* =========================================================
   INTRO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    if (!intro) return;

    // Intro animatsiyasi tugagach saytni ochamiz
    setTimeout(() => {
        intro.classList.add("hide");

        // Intro DOM'da qoladi, lekin foydalanuvchiga xalaqit bermaydi
        setTimeout(() => {
            intro.style.display = "none";
        }, 900);

    }, 1800);

});


/* =========================================================
   HEADER — SCROLL
   ========================================================= */

const header = document.querySelector(".header");

function handleHeader() {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (!menu) return;

    menu.classList.toggle("active");

}


/*
   Mobil menyudagi link bosilganda menyuni yopamiz
*/

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("menu");

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


/*
   Menyudan tashqariga bosilganda yopish
*/

document.addEventListener("click", (event) => {

    const menu = document.getElementById("menu");
    const menuButton = document.querySelector(".menu-btn");

    if (!menu || !menuButton) return;

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Bir marta animatsiya bo'lgandan keyin
                // qayta kuzatish shart emas
                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   PERSON DATA
   ========================================================= */

const people = {

    director: {

        role: "DIREKTOR",

        name: "Ism Familiya",

        position: "Direktor",

        text:
            "Besha Group kompaniyasining strategik rivojlanishi, " +
            "hamkorlik yo‘nalishlari va umumiy faoliyatini boshqaradi."

    },


    manager: {

        role: "MENEJER",

        name: "Ism Familiya",

        position: "Menejer",

        text:
            "Hamkorlar va nomzodlar bilan ishlash, " +
            "muloqot va hamkorlik jarayonlarini muvofiqlashtirish " +
            "bilan shug‘ullanadi."

    }

};


/* =========================================================
   OPEN PERSON MODAL
   ========================================================= */

function openPerson(personId) {

    const modal = document.getElementById("personModal");

    const role = document.getElementById("personModalRole");
    const name = document.getElementById("personModalName");
    const text = document.getElementById("personModalText");
    const position = document.getElementById("personModalPosition");

    if (!modal) return;

    const person = people[personId];

    if (!person) return;


    role.textContent = person.role;

    name.textContent = person.name;

    text.textContent = person.text;

    position.textContent = person.position;


    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE PERSON MODAL
   ========================================================= */

function closePerson() {

    const modal = document.getElementById("personModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   CLOSE MODAL — BACKGROUND CLICK
   ========================================================= */

const personModal = document.getElementById("personModal");

if (personModal) {

    personModal.addEventListener("click", (event) => {

        if (event.target === personModal) {

            closePerson();

        }

    });

}


/* =========================================================
   CLOSE MODAL — ESC
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closePerson();

    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
            document.querySelector(".header")?.offsetHeight || 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            15;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   HERO PARALLAX
   ========================================================= */

const hero = document.querySelector(".hero");

const shapes = document.querySelectorAll(".hero-shape");

if (hero && shapes.length > 0) {

    window.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5);
        const y = (event.clientY / window.innerHeight - 0.5);

        shapes.forEach((shape, index) => {

            const speed = (index + 1) * 8;

            shape.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });

}


/* =========================================================
   SERVICE CARD STAGGER
   ========================================================= */

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 100}ms`;

});


/* =========================================================
   PROCESS ITEM STAGGER
   ========================================================= */

const processItems =
    document.querySelectorAll(".process-item");

processItems.forEach((item, index) => {

    item.style.transitionDelay = `${index * 80}ms`;

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} BESHA GROUP. Barcha huquqlar himoyalangan.`;

}


/* =========================================================
   TELEGRAM BUTTON
   ========================================================= */

/*
   Hozir HTML'da:

   https://t.me/USERNAME

   turibdi.

   Keyinchalik USERNAME ni o'zgartiramiz.

   Masalan:

   https://t.me/beshagroup
*/


/* =========================================================
   PAGE LOADED
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
