/* =========================================================
   BESHA GROUP
   COMPLETE SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initIntro();
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initPersonModal();
    initParallax();

});


/* =========================================================
   2. INTRO / LOADING SCREEN
   ========================================================= */

function initIntro() {

    const intro = document.getElementById("intro");

    if (!intro) {
        return;
    }

    /*
     * Sayt yuklangandan keyin intro ekranni
     * biroz vaqt ko'rsatamiz.
     */

    const hideIntro = () => {

        setTimeout(() => {

            intro.classList.add("hide");

            document.body.classList.remove("intro-active");

        }, 1800);

    };


    /*
     * Agar sahifa to'liq yuklangan bo'lsa,
     * intro'ni yopamiz.
     */

    if (document.readyState === "complete") {

        hideIntro();

    } else {

        window.addEventListener(
            "load",
            hideIntro,
            {
                once: true
            }
        );

    }

}


/* =========================================================
   3. HEADER SCROLL
   ========================================================= */

function initHeader() {

    const header =
        document.querySelector(".header");

    if (!header) {
        return;
    }


    const updateHeader = () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   4. MOBILE MENU
   ========================================================= */

function initMobileMenu() {

    const menu =
        document.getElementById("menu");

    const menuButton =
        document.querySelector(".menu-btn");

    if (!menu || !menuButton) {
        return;
    }


    /*
     * Menu tugmasi HTML ichida
     * onclick="toggleMenu()" bilan chaqirilgan.
     * Shuning uchun global funksiyani ham yaratamiz.
     */

    window.toggleMenu = function () {

        menu.classList.toggle("active");

        const isOpen =
            menu.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    };


    /*
     * Menu ichidagi link bosilganda
     * menu avtomatik yopiladi.
     */

    const menuLinks =
        menu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /*
     * Tashqariga bosilganda menu yopiladi.
     */

    document.addEventListener(
        "click",
        event => {

            const clickedInsideMenu =
                menu.contains(event.target);

            const clickedButton =
                menuButton.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                menu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /*
     * ESC bosilganda menu yopiladi.
     */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                menu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================================
   5. SCROLL REVEAL
   ========================================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }


    /*
     * IntersectionObserver orqali
     * elementlar ekranga kirganda
     * animatsiya qilamiz.
     */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        /*
                         * Bir marta ochilgandan keyin
                         * yana kuzatish shart emas.
                         */

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   6. SMOOTH SCROLL
   ========================================================= */

function initSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");


                /*
                 * Faqat "#" bo'lsa hech narsa qilmaymiz.
                 */

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".header"
                    );

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    15;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });

}


/* =========================================================
   7. PERSON MODAL DATA
   ========================================================= */

const personData = {

    director: {

        role: "DIREKTOR",

        name: "Ism Familiya",

        position: "Direktor",

        text:
            "Besha Group kompaniyasining rivojlanish strategiyasi, hamkorlik yo‘nalishlari va kompaniyaning umumiy faoliyatini boshqaradi."

    },


    manager: {

        role: "MENEJER",

        name: "Ism Familiya",

        position: "Menejer",

        text:
            "Hamkorlar va nomzodlar bilan ishlash, ehtiyojlarni o‘rganish hamda hamkorlik jarayonlarini muvofiqlashtirish bilan shug‘ullanadi."

    }

};


/* =========================================================
   8. PERSON MODAL
   ========================================================= */

function initPersonModal() {

    const modal =
        document.getElementById(
            "personModal"
        );

    if (!modal) {
        return;
    }


    /*
     * HTML dagi
     * onclick="openPerson('director')"
     * funksiyasi uchun global funksiya.
     */

    window.openPerson = function (personKey) {

        const person =
            personData[personKey];


        if (!person) {
            return;
        }


        const role =
            document.getElementById(
                "personModalRole"
            );

        const name =
            document.getElementById(
                "personModalName"
            );

        const text =
            document.getElementById(
                "personModalText"
            );

        const position =
            document.getElementById(
                "personModalPosition"
            );


        if (role) {

            role.textContent =
                person.role;

        }


        if (name) {

            name.textContent =
                person.name;

        }


        if (text) {

            text.textContent =
                person.text;

        }


        if (position) {

            position.textContent =
                person.position;

        }


        modal.classList.add("active");

        document.body.classList.add(
            "modal-open"
        );


        /*
         * Accessibility
         */

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    };


    /*
     * Modalni yopish.
     */

    window.closePerson = function () {

        modal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "modal-open"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    };


    /*
     * Modalning qora foniga bosilganda yopish.
     */

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                window.closePerson();

            }

        }
    );


    /*
     * ESC tugmasi bilan yopish.
     */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                window.closePerson();

            }

        }
    );

}


/* =========================================================
   9. HERO PARALLAX
   ========================================================= */

function initParallax() {

    const hero =
        document.querySelector(".hero");

    if (!hero) {
        return;
    }


    const shapes =
        hero.querySelectorAll(
            ".hero-shape"
        );


    if (!shapes.length) {
        return;
    }


    /*
     * Telefonlarda parallaxni o'chiramiz.
     */

    if (
        window.matchMedia(
            "(max-width: 760px)"
        ).matches
    ) {

        return;

    }


    let ticking = false;


    const updateParallax = () => {

        const scrollY =
            window.scrollY;


        shapes.forEach(
            (shape, index) => {

                const speed =
                    0.04 +
                    index * 0.025;


                const rotation =
                    scrollY *
                    0.015;


                shape.style.transform =
                    `translate3d(0, ${scrollY * speed}px, 0) rotate(${rotation}deg)`;

            }
        );


        ticking = false;

    };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   10. RESIZE HANDLER
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        const menu =
            document.getElementById(
                "menu"
            );

        const menuButton =
            document.querySelector(
                ".menu-btn"
            );


        /*
         * Desktopga qaytganda
         * mobile menu ochiq qolmasin.
         */

        if (
            window.innerWidth > 760 &&
            menu
        ) {

            menu.classList.remove(
                "active"
            );

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   11. TELEGRAM LINK
   ========================================================= */

function setTelegramUsername(username) {

    const telegramButton =
        document.querySelector(
            ".telegram-btn"
        );


    if (!telegramButton) {
        return;
    }


    /*
     * Masalan:
     *
     * setTelegramUsername("besha_group");
     *
     * Natija:
     * https://t.me/besha_group
     */

    if (!username) {
        return;
    }


    const cleanUsername =
        username
            .replace("@", "")
            .trim();


    if (!cleanUsername) {
        return;
    }


    telegramButton.href =
        `https://t.me/${cleanUsername}`;

}


/*
 * =========================================================
 * MUHIM:
 *
 * Hozircha USERNAME joyida qoladi.
 *
 * Telegram username tayyor bo'lganda quyidagidek
 * yozish mumkin:
 *
 * setTelegramUsername("besha_group");
 *
 * =========================================================
 */


/* =========================================================
   12. PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        /*
         * Foydalanuvchi boshqa tabga o'tsa
         * parallaxni vaqtincha to'xtatish uchun.
         *
         * Bu yerda qo'shimcha amal talab qilinmaydi,
         * ammo kelajakdagi animatsiyalar uchun
         * hook sifatida qoldirilgan.
         */

        if (
            document.visibilityState === "hidden"
        ) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);


/* =========================================================
   13. INITIAL ACCESSIBILITY STATE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const modal =
            document.getElementById(
                "personModal"
            );

        if (modal) {

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        const menuButton =
            document.querySelector(
                ".menu-btn"
            );

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   14. CONSOLE BRAND MESSAGE
   ========================================================= */

console.log(
    "%cBESHA GROUP",
    "font-size: 24px; font-weight: 800; color: #1769e0;"
);

console.log(
    "%cInsonlar va imkoniyatlarni bog‘laymiz.",
    "font-size: 13px; color: #687582;"
);
