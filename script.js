/* ============================================================
   BESHA GROUP
   Main JavaScript
   Version: 2.0
============================================================ */


/* ============================================================
   DOM READY
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initIntro();
    initHeader();
    initReveal();
    initMenu();
    initPersonModal();
    initLanguage();
    initTelegramLinks();
    initActiveNavigation();

});


/* ============================================================
   INTRO
============================================================ */

function initIntro() {

    const intro = document.getElementById("intro");

    if (!intro) return;

    /*
        Sayt ochilganda BESHA GROUP intro ko‘rinadi.
        Keyin avtomatik yo‘qoladi.
    */

    const hideIntro = () => {

        setTimeout(() => {

            intro.classList.add("intro-hidden");

        }, 1500);

    };


    /*
        Agar foydalanuvchi sahifani qayta yuklasa ham
        intro ishlaydi.
    */

    window.addEventListener("load", hideIntro);

}


/* ============================================================
   HEADER
============================================================ */

function initHeader() {

    const header = document.querySelector(".header");

    if (!header) return;


    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}


/* ============================================================
   MOBILE MENU
============================================================ */

function initMenu() {

    const menu = document.getElementById("menu");

    if (!menu) return;


    /*
        HTML ichidagi:

        onclick="toggleMenu()"

        shu funksiya bilan ishlaydi.
    */

    window.toggleMenu = function () {

        menu.classList.toggle("open");

    };


    /*
        Menyudagi link bosilganda menyuni yopish.
    */

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

        });

    });


    /*
        Menyudan tashqariga bosilganda yopish.
    */

    document.addEventListener("click", event => {

        const menuButton = document.querySelector(".menu-btn");

        if (!menuButton) return;


        if (
            menu.classList.contains("open") &&
            !menu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            menu.classList.remove("open");

        }

    });

}


/* ============================================================
   SCROLL REVEAL
============================================================ */

function initReveal() {

    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;


    /*
        Brauzer IntersectionObserver qo‘llamasa,
        elementlarni oddiy ko‘rsatamiz.
    */

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add("visible");

        });

        return;

    }


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* ============================================================
   ACTIVE NAVIGATION
============================================================ */

function initActiveNavigation() {

    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".menu a");

    if (!sections.length || !links.length) return;


    function setActive(id) {

        links.forEach(link => {

            const href = link.getAttribute("href");

            if (href === `#${id}`) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });

    }


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setActive(entry.target.id);

                }

            });

        },
        {
            threshold: 0.25,
            rootMargin: "-20% 0px -55% 0px"
        }
    );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ============================================================
   PERSON MODAL
============================================================ */


/*
    Rahbariyat ma’lumotlari.

    Keyinchalik haqiqiy ism-familiya va ma’lumotlarni
    shu yerdan o‘zgartirish mumkin.
*/

const people = {

    director: {

        role: "DIREKTOR",

        name: "Ism Familiya",

        position: "Direktor",

        text:
            "Besha Group faoliyatini strategik boshqarish, kompaniyaning rivojlanish yo‘nalishlarini belgilash va tashkilotlar bilan samarali hamkorlikni yo‘lga qo‘yish uchun mas’ul."

    },


    manager: {

        role: "MENEJER",

        name: "Ism Familiya",

        position: "Menejer",

        text:
            "Besha Group mijozlari bilan muloqot qilish, tashkilotlarning ehtiyojlarini o‘rganish va hamkorlik jarayonlarini muvofiqlashtirish bilan shug‘ullanadi."

    }

};


function initPersonModal() {

    const modal = document.getElementById("personModal");

    if (!modal) return;


    /*
        HTML ichidagi:

        onclick="openPerson('director')"

        shu funksiya orqali ishlaydi.
    */

    window.openPerson = function (personId) {

        const person = people[personId];

        if (!person) return;


        const role =
            document.getElementById("personModalRole");

        const name =
            document.getElementById("personModalName");

        const text =
            document.getElementById("personModalText");

        const position =
            document.getElementById("personModalPosition");


        if (role) {

            role.textContent = person.role;

        }


        if (name) {

            name.textContent = person.name;

        }


        if (text) {

            text.textContent = person.text;

        }


        if (position) {

            position.textContent = person.position;

        }


        modal.classList.add("open");

        document.body.classList.add("modal-open");

    };


    window.closePerson = function () {

        modal.classList.remove("open");

        document.body.classList.remove("modal-open");

    };


    /*
        Modal foniga bosilganda yopiladi.
    */

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            window.closePerson();

        }

    });


    /*
        ESC tugmasi bilan yopish.
    */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            window.closePerson();

        }

    });

}


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

function initLanguage() {

    /*
        Agar HTML ichida til tizimi hali bo‘lmasa,
        bu kod xatolik bermaydi.
    */

    const languageButton =
        document.querySelector(".language-btn");

    const languageDropdown =
        document.querySelector(".language-dropdown");

    if (!languageButton || !languageDropdown) return;


    /*
        UZ tugmasini bosganda:
        UZ
        EN
        RU

        variantlari chiqadi.
    */

    languageButton.addEventListener("click", event => {

        event.stopPropagation();

        languageDropdown.classList.toggle("open");

    });


    /*
        Tashqariga bosilganda yopiladi.
    */

    document.addEventListener("click", event => {

        if (
            !languageDropdown.contains(event.target) &&
            !languageButton.contains(event.target)
        ) {

            languageDropdown.classList.remove("open");

        }

    });


    /*
        Til tanlanganda dropdown yopiladi.
    */

    const languageOptions =
        languageDropdown.querySelectorAll("[data-language]");


    languageOptions.forEach(option => {

        option.addEventListener("click", () => {

            const language =
                option.dataset.language;

            if (!language) return;

            setLanguage(language);

            languageDropdown.classList.remove("open");

        });

    });

}


/*
    Hozircha bu funksiya tanlangan tilni saqlaydi.

    Keyinchalik barcha matnlarni real tarjima qilish
    tizimini shu funksiyaga ulaymiz.
*/

function setLanguage(language) {

    const supportedLanguages = [
        "uz",
        "en",
        "ru"
    ];


    if (!supportedLanguages.includes(language)) {

        return;

    }


    localStorage.setItem(
        "besha_language",
        language
    );


    /*
        Til tugmasida tanlangan til ko‘rsatiladi.
    */

    const currentLanguage =
        document.querySelector("[data-current-language]");


    if (currentLanguage) {

        currentLanguage.textContent =
            language.toUpperCase();

    }


    /*
        Agar sahifada data-lang elementlari bo‘lsa,
        tarjima tizimi shu yerda ishlaydi.
    */

    applyTranslations(language);

}


/* ============================================================
   TRANSLATIONS
============================================================ */

const translations = {

    uz: {

        "nav.about": "Biz haqimizda",

        "nav.services": "Faoliyatimiz",

        "nav.approach": "Yondashuv",

        "nav.team": "Rahbariyat",

        "nav.contact": "Bog‘lanish",

        "button.contact": "Bog‘lanish"

    },


    en: {

        "nav.about": "About us",

        "nav.services": "Our activities",

        "nav.approach": "Our approach",

        "nav.team": "Management",

        "nav.contact": "Contact",

        "button.contact": "Contact us"

    },


    ru: {

        "nav.about": "О нас",

        "nav.services": "Наша деятельность",

        "nav.approach": "Наш подход",

        "nav.team": "Руководство",

        "nav.contact": "Контакты",

        "button.contact": "Связаться"

    }

};


function applyTranslations(language) {

    const dictionary =
        translations[language];

    if (!dictionary) return;


    const elements =
        document.querySelectorAll("[data-lang]");


    elements.forEach(element => {

        const key =
            element.dataset.lang;

        if (
            dictionary[key] !== undefined
        ) {

            element.textContent =
                dictionary[key];

        }

    });

}


/* ============================================================
   LOAD SAVED LANGUAGE
============================================================ */

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem("besha_language");


    if (!savedLanguage) return;


    if (
        ["uz", "en", "ru"].includes(savedLanguage)
    ) {

        applyTranslations(savedLanguage);


        const currentLanguage =
            document.querySelector(
                "[data-current-language]"
            );


        if (currentLanguage) {

            currentLanguage.textContent =
                savedLanguage.toUpperCase();

        }

    }

}


document.addEventListener(
    "DOMContentLoaded",
    loadSavedLanguage
);


/* ============================================================
   TELEGRAM
============================================================ */


/*
    MUHIM:

    Quyidagi username'ni o‘zingizning Telegram
    username'ingizga almashtiring.

    Masalan:

    const telegramUsername = "besha_group";

    @ belgisi yozilmaydi.
*/

const telegramUsername =
    "USERNAME";


/*
    Ish beruvchi uchun tayyor murojaat.
*/

const telegramEmployerMessage =
    "Assalomu alaykum. Biz siz bilan ishlamoqchimiz. Kompaniyamiz uchun ishchi kuchi bo‘yicha hamkorlik masalasida bog‘lanmoqchiman. Iltimos, biz bilan telefon orqali bog‘lanishingizni so‘rayman.";


/*
    Telegram URL yaratish.
*/

function createTelegramUrl(message) {

    const encodedMessage =
        encodeURIComponent(message);

    return `https://t.me/${telegramUsername}?text=${encodedMessage}`;

}


/*
    HTML ichidagi .telegram-btn
    avtomatik Telegramga tayyor matn bilan olib boradi.
*/

function initTelegramLinks() {

    const telegramLinks =
        document.querySelectorAll(".telegram-btn");


    telegramLinks.forEach(link => {

        /*
            USERNAME hali almashtirilmagan bo‘lsa,
            hozirgi href ishlatiladi.
        */

        if (
            telegramUsername !== "USERNAME"
        ) {

            link.href =
                createTelegramUrl(
                    telegramEmployerMessage
                );

        }


        link.target = "_blank";

        link.rel =
            "noopener noreferrer";

    });

}


/* ============================================================
   PHONE LINKS
============================================================ */


/*
    Saytda:

    <a href="tel:+998901234567">

    ko‘rinishidagi link bo‘lsa,
    telefonda bosilganda qo‘ng‘iroq qilish ochiladi.
*/


document.addEventListener(
    "click",
    event => {

        const phoneLink =
            event.target.closest(
                'a[href^="tel:"]'
            );


        if (!phoneLink) return;


        /*
            Telefon linklari uchun
            brauzerning standart ishlashi saqlanadi.
        */

    }
);


/* ============================================================
   INSTAGRAM
============================================================ */


/*
    Instagram linki HTML'da:

    <a href="https://instagram.com/USERNAME">

    ko‘rinishida bo‘lishi mumkin.

    Target avtomatik yangi oynada ochiladi.
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const instagramLinks =
            document.querySelectorAll(
                'a[href*="instagram.com"]'
            );


        instagramLinks.forEach(link => {

            link.target = "_blank";

            link.rel =
                "noopener noreferrer";

        });

    }
);


/* ============================================================
   SMOOTH ANCHOR SCROLL
============================================================ */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) return;


        const href =
            link.getAttribute("href");


        if (
            !href ||
            href === "#"
        ) {

            return;

        }


        const target =
            document.querySelector(href);


        if (!target) return;


        event.preventDefault();


        const header =
            document.querySelector(".header");


        const headerHeight =
            header
                ? header.offsetHeight
                : 0;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            10;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    }
);


/* ============================================================
   FORM PROTECTION
============================================================ */


/*
    Agar kelajakda forma qo‘shilsa,
    Enter bosilganda tasodifiy reloadni oldini olish
    va status chiqarish uchun tayyor.
*/

document.addEventListener(
    "submit",
    event => {

        const form =
            event.target;


        if (
            !form.classList.contains(
                "contact-form"
            )
        ) {

            return;

        }


        /*
            Hozircha backend yo‘q.
            Formani Telegram bilan bog‘lash mumkin.
        */

    }
);


/* ============================================================
   PAGE VISIBILITY
============================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        /*
            Foydalanuvchi boshqa tabga o‘tganda
            yoki qaytganda sayt normal ishlaydi.
        */

        if (
            document.visibilityState === "visible"
        ) {

            document.documentElement.style
                .scrollBehavior = "smooth";

        }

    }
);


/* ============================================================
   CONSOLE BRAND MESSAGE
============================================================ */

console.log(
    "%cBESHA GROUP",
    "font-size: 24px; font-weight: 800; color: #0b63ce;"
);

console.log(
    "%cInsonlar va imkoniyatlarni bog‘laymiz.",
    "font-size: 13px; color: #475467;"
);
