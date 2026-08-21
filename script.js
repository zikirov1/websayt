document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       INTRO
    ================================= */

    const intro = document.getElementById("intro");

    if (intro) {
        setTimeout(() => {
            intro.classList.add("intro-hidden");

            setTimeout(() => {
                intro.style.display = "none";
            }, 900);

        }, 1800);
    }


    /* ================================
       LANGUAGE
    ================================= */

    const languageButton = document.getElementById("languageButton");
    const languageDropdown = document.getElementById("languageDropdown");
    const currentLanguage = document.getElementById("currentLanguage");
    const languageOptions = document.querySelectorAll(".language-option");

    if (languageButton && languageDropdown) {

        languageButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen =
                languageDropdown.classList.toggle("show");

            languageButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        languageDropdown.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        document.addEventListener("click", () => {
            languageDropdown.classList.remove("show");

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    }


    /* ================================
       LANGUAGE CHANGE
    ================================= */

    languageOptions.forEach(option => {

        option.addEventListener("click", () => {

            const lang = option.dataset.lang;

            if (!lang) return;

            languageOptions.forEach(item => {
                item.classList.remove("active");
            });

            option.classList.add("active");

            if (currentLanguage) {
                currentLanguage.textContent =
                    lang.toUpperCase();
            }

            if (languageDropdown) {
                languageDropdown.classList.remove("show");
            }

            if (languageButton) {
                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            changeLanguage(lang);
        });

    });


    /* ================================
       MOBILE MENU
    ================================= */

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {

        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            menu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });


        const menuLinks = menu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");
                menuButton.classList.remove("active");

            });

        });

    }


    /* ================================
       SCROLL REVEAL
    ================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            obs.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* ================================
       SMOOTH SCROLL
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ================================
       ESC KEY
    ================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closePerson();

            if (languageDropdown) {
                languageDropdown.classList.remove("show");
            }

            if (menu) {
                menu.classList.remove("active");
            }

            if (menuButton) {
                menuButton.classList.remove("active");
            }

        }

    });

});


/* =====================================
   PERSON MODAL
===================================== */

const people = {

    director: {

        role: "DIREKTOR",

        name: "Ism Familiya",

        position: "Direktor",

        text:
            "Besha Group kompaniyasining strategik rivojlanishi, hamkorlik yo‘nalishlari va kompaniya faoliyatini boshqarish uchun mas’ul."
    },


    manager: {

        role: "MENEJER",

        name: "Ism Familiya",

        position: "Menejer",

        text:
            "Korxonalar bilan muloqot qilish, ularning ehtiyojlarini o‘rganish va ishchi kuchini tashkil etish jarayonlarini muvofiqlashtirish bilan shug‘ullanadi."
    }

};


function openPerson(person) {

    const modal =
        document.getElementById("personModal");

    if (!modal) return;

    const data = people[person];

    if (!data) return;


    const role =
        document.getElementById("personModalRole");

    const name =
        document.getElementById("personModalName");

    const text =
        document.getElementById("personModalText");

    const position =
        document.getElementById("personModalPosition");


    if (role) {
        role.textContent = data.role;
    }

    if (name) {
        name.textContent = data.name;
    }

    if (text) {
        text.textContent = data.text;
    }

    if (position) {
        position.textContent = data.position;
    }


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");
}


function closePerson() {

    const modal =
        document.getElementById("personModal");

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");
}


/* =====================================
   CLOSE MODAL WHEN CLICK OUTSIDE
===================================== */

document.addEventListener("click", (event) => {

    const modal =
        document.getElementById("personModal");

    if (!modal) return;

    if (
        event.target === modal
    ) {
        closePerson();
    }

});


/* =====================================
   TRANSLATIONS
===================================== */

function changeLanguage(lang) {

    /*
       Hozircha UZ asosiy til sifatida qoladi.
       EN va RU tarjimalarini keyingi bosqichda
       barcha matnlar bo‘yicha qo‘shish mumkin.
    */

    document.documentElement.lang = lang;

}
