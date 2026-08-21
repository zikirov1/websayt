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
    initMobileMenu();
    initLanguageMenu();
    initRevealAnimations();
    initActiveNavigation();
    initPersonModal();
    initTelegramLinks();
    initExternalLinks();

});


/* ============================================================
   INTRO
============================================================ */

function initIntro() {

    const intro = document.getElementById("intro");

    if (!intro) return;

    /*
        Intro bir marta ko‘rsatiladi.
        Sahifa yuklangandan keyin avtomatik yopiladi.
    */

    const INTRO_DURATION = 1700;

    setTimeout(() => {

        intro.classList.add("intro-hidden");

        setTimeout(() => {

            intro.style.display = "none";

        }, 900);

    }, INTRO_DURATION);

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

function initMobileMenu() {

    const menu = document.getElementById("menu");

    const menuButton =
        document.querySelector(".menu-btn");

    if (!menu || !menuButton) return;


    function openMenu() {

        menu.classList.add("open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.innerHTML = "×";

    }


    function closeMenu() {

        menu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML = "☰";

    }


    function toggle() {

        if (menu.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    menuButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggle();

        }
    );


    /*
        Menu ichidagi link bosilganda yopiladi.
    */

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    /*
        Menu tashqarisiga bosilganda yopiladi.
    */

    document.addEventListener(
        "click",
        (event) => {

            if (!menu.classList.contains("open")) {
                return;
            }

            if (
                !menu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                closeMenu();

            }

        }
    );


    /*
        Ekran katta bo‘lsa mobil menu yopiladi.
    */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 850) {

                closeMenu();

            }

        }
    );

}


/* ============================================================
   LANGUAGE MENU
============================================================ */

/*
    HTMLda quyidagi struktura bo‘lishi mumkin:

    <div class="language-selector">

        <button class="language-current">
            ◉ UZ ▾
        </button>

        <div class="language-dropdown">

            <button data-lang="uz">
                O‘zbekcha UZ
            </button>

            <button data-lang="en">
                English EN
            </button>

            <button data-lang="ru">
                Русский RU
            </button>

        </div>

    </div>

*/


function initLanguageMenu() {

    const languageSelector =
        document.querySelector(".language-selector");

    if (!languageSelector) return;


    const languageButton =
        languageSelector.querySelector(
            ".language-current"
        );


    const dropdown =
        languageSelector.querySelector(
            ".language-dropdown"
        );


    if (!languageButton || !dropdown) return;


    /*
        Boshlanishida dropdown yopiq.
    */

    dropdown.classList.remove("open");


    languageButton.setAttribute(
        "aria-expanded",
        "false"
    );


    /*
        Til tugmasi bosilganda ochiladi.
    */

    languageButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                dropdown.classList.contains("open");


            /*
                Boshqa ochiq dropdown bo‘lsa yopamiz.
            */

            document
                .querySelectorAll(".language-dropdown.open")
                .forEach(item => {

                    item.classList.remove("open");

                });


            if (!isOpen) {

                dropdown.classList.add("open");

                languageButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /*
        Til tanlanganda.
    */

    const languageOptions =
        dropdown.querySelectorAll(
            "[data-lang]"
        );


    languageOptions.forEach(option => {

        option.addEventListener(
            "click",
            () => {

                const language =
                    option.dataset.lang;

                setLanguage(language);

                dropdown.classList.remove(
                    "open"
                );

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /*
        Tashqariga bosilganda yopiladi.
    */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !languageSelector.contains(
                    event.target
                )
            ) {

                dropdown.classList.remove(
                    "open"
                );

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* ============================================================
   LANGUAGE SELECTION
============================================================ */

function setLanguage(language) {

    /*
        Hozircha tilni localStorage'da saqlaymiz.

        Keyinchalik alohida:
        uz.html
        en.html
        ru.html

        qilib to‘liq professional 3 tilli versiyaga
        o'tkazish mumkin.
    */

    localStorage.setItem(
        "besha-language",
        language
    );


    /*
        Agar HTMLda data-lang-link bo‘lsa,
        shu sahifaga o'tadi.
    */

    const selectedLink =
        document.querySelector(
            `[data-lang-link="${language}"]`
        );


    if (selectedLink) {

        const url =
            selectedLink.getAttribute("href");

        if (url) {

            window.location.href = url;

            return;

        }

    }


    /*
        Hozircha til tanlanganda
        foydalanuvchiga tanlangan tilni ko‘rsatamiz.
    */

    const currentLanguage =
        document.querySelector(
            ".language-current"
        );


    if (!currentLanguage) return;


    const labels = {

        uz: "◉ UZ ▾",

        en: "◉ EN ▾",

        ru: "◉ RU ▾"

    };


    currentLanguage.textContent =
        labels[language] || labels.uz;

}


/* ============================================================
   LOAD SAVED LANGUAGE
============================================================ */

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "besha-language"
        );


    if (!savedLanguage) return;


    const currentLanguage =
        document.querySelector(
            ".language-current"
        );


    if (!currentLanguage) return;


    const labels = {

        uz: "◉ UZ ▾",

        en: "◉ EN ▾",

        ru: "◉ RU ▾"

    };


    currentLanguage.textContent =
        labels[savedLanguage] || labels.uz;

}


loadSavedLanguage();


/* ============================================================
   SCROLL REVEAL
============================================================ */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!elements.length) return;


    /*
        Browser IntersectionObserver
        qo‘llamasa ham sayt buzilmaydi.
    */

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add("visible");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        obs.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
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

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const links =
        document.querySelectorAll(
            ".menu a[href^='#']"
        );


    if (!sections.length || !links.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    links.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px",
                threshold: 0
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
    Rahbariyat ma'lumotlarini shu yerda o‘zgartirish mumkin.
*/


const people = {

    director: {

        role: "DIREKTOR",

        name: "Ism Familiya",

        position: "Direktor",

        text:
            "Besha Group faoliyatining strategik yo‘nalishlarini belgilaydi, kompaniyaning rivojlanishi va hamkorlar bilan munosabatlarini boshqaradi."

    },


    manager: {

        role: "MENEJER",

        name: "Ism Familiya",

        position: "Menejer",

        text:
            "Hamkorlar bilan kundalik muloqotni tashkil etish, murojaatlarni ko‘rib chiqish va ish jarayonlarini muvofiqlashtirish bilan shug‘ullanadi."

    }

};


function initPersonModal() {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) return;


    /*
        Modal tashqarisiga bosilganda yopiladi.
    */

    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closePerson();

            }

        }
    );

}


/* ============================================================
   OPEN PERSON
============================================================ */

function openPerson(personId) {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) return;


    const person =
        people[personId];


    if (!person) return;


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


    modal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* ============================================================
   CLOSE PERSON
============================================================ */

function closePerson() {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* ============================================================
   TELEGRAM
============================================================ */

/*
    TELEGRAM USERNAME'NI SHU YERDA YOZING.

    Masalan:

    const TELEGRAM_USERNAME = "besha_group";

    @ belgisi yozilmaydi.
*/


const TELEGRAM_USERNAME =
    "USERNAME";


/*
    Telegram uchun tayyor xabar.

    Foydalanuvchi Telegramga kirganda
    xabar yozish oynasida shu matn chiqadi.
*/


const TELEGRAM_MESSAGE =
    "Assalomu alaykum. Siz bilan ishlamoqchimiz. Bizga telefon qiling.";


/* ============================================================
   TELEGRAM LINK GENERATOR
============================================================ */

function createTelegramLink() {

    const username =
        TELEGRAM_USERNAME
            .replace("@", "")
            .trim();


    const message =
        encodeURIComponent(
            TELEGRAM_MESSAGE
        );


    /*
        Telegram username linki.
    */

    return `https://t.me/${username}?text=${message}`;

}


/* ============================================================
   TELEGRAM LINKS INITIALIZATION
============================================================ */

function initTelegramLinks() {

    const telegramLinks =
        document.querySelectorAll(
            ".telegram-btn, [data-telegram]"
        );


    if (!telegramLinks.length) {
        return;
    }


    telegramLinks.forEach(link => {

        /*
            Agar USERNAME hali o‘zgartirilmagan bo‘lsa,
            linkni buzmaslik uchun ishlamaydi.
        */

        if (
            TELEGRAM_USERNAME ===
            "USERNAME"
        ) {

            return;

        }


        link.setAttribute(
            "href",
            createTelegramLink()
        );


        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

}


/* ============================================================
   TELEGRAM CUSTOM MESSAGE
============================================================ */

/*
    Agar keyinchalik turli tugmalarga
    turli tayyor matn kerak bo‘lsa:

    <a
        data-telegram-message="Korxonamiz uchun ishchi kuchi bo‘yicha hamkorlik qilmoqchimiz."
    >

*/


function createTelegramMessageLink(message) {

    const username =
        TELEGRAM_USERNAME
            .replace("@", "")
            .trim();


    const encodedMessage =
        encodeURIComponent(
            message
        );


    return `https://t.me/${username}?text=${encodedMessage}`;

}


/* ============================================================
   PHONE LINKS
============================================================ */

/*
    HTML:

    <a href="tel:+998901234567">
        +998 90 123 45 67
    </a>

    bosilganda telefon qo‘ng‘irog‘i ochiladi.
*/


function initPhoneLinks() {

    const phoneLinks =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );


    phoneLinks.forEach(link => {

        link.setAttribute(
            "aria-label",
            "Telefon orqali bog‘lanish"
        );

    });

}


initPhoneLinks();


/* ============================================================
   INSTAGRAM
============================================================ */

/*
    HTML:

    <a
        href="https://instagram.com/BESHA_USERNAME"
        target="_blank"
        class="instagram-btn"
    >
        Instagram
    </a>

    Shu holatda avtomatik ishlaydi.
*/


function initInstagramLinks() {

    const links =
        document.querySelectorAll(
            ".instagram-btn, [data-instagram]"
        );


    links.forEach(link => {

        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

}


initInstagramLinks();


/* ============================================================
   EXTERNAL LINKS
============================================================ */

function initExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    links.forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

}


/* ============================================================
   ESC KEY
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        /*
            Modalni yopish
        */

        closePerson();


        /*
            Mobil menyuni yopish
        */

        const menu =
            document.getElementById(
                "menu"
            );


        const menuButton =
            document.querySelector(
                ".menu-btn"
            );


        if (menu) {

            menu.classList.remove(
                "open"
            );

        }


        if (menuButton) {

            menuButton.innerHTML =
                "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        /*
            Til menyusini yopish
        */

        document
            .querySelectorAll(
                ".language-dropdown.open"
            )
            .forEach(dropdown => {

                dropdown.classList.remove(
                    "open"
                );

            });

    }
);


/* ============================================================
   SMOOTH ANCHOR SCROLL
============================================================ */

document.addEventListener(
    "click",
    (event) => {

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
            document.querySelector(
                href
            );


        if (!target) return;


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
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            15;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    }
);


/* ============================================================
   BUTTON RIPPLE EFFECT
============================================================ */

function initButtonEffect() {

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .telegram-btn, .form-submit"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "clicked"
                );


                setTimeout(() => {

                    button.classList.remove(
                        "clicked"
                    );

                }, 250);

            }
        );

    });

}


initButtonEffect();


/* ============================================================
   PAGE VISIBILITY
============================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "visible"
        ) {

            document.body.classList.add(
                "page-visible"
            );

        }

    }
);


/* ============================================================
   CONSOLE
============================================================ */

console.log(
    "%cBESHA GROUP",
    "font-size:24px;font-weight:800;"
);

console.log(
    "%cInsonlar va imkoniyatlarni bog‘laymiz.",
    "font-size:14px;"
);
