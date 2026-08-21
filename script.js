document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       INTRO
    ===================================================== */

    const intro = document.getElementById("intro");

    if (intro) {
        setTimeout(() => {
            intro.classList.add("intro-hidden");

            setTimeout(() => {
                intro.style.display = "none";
            }, 900);
        }, 1800);
    }


    /* =====================================================
       LANGUAGE SWITCHER
    ===================================================== */

    const languageButton =
        document.getElementById("languageButton");

    const languageDropdown =
        document.getElementById("languageDropdown");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const languageOptions =
        document.querySelectorAll(".language-option");


    if (languageButton && languageDropdown) {

        languageButton.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                languageDropdown.classList.contains("open");

            /* Avval yopamiz */
            languageDropdown.classList.remove("open");
            languageButton.classList.remove("open");

            /* Agar yopiq bo'lgan bo'lsa ochamiz */
            if (!isOpen) {

                languageDropdown.classList.add("open");
                languageButton.classList.add("open");

            }

            languageButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );
        });


        /* Dropdown ichidagi click tashqariga chiqmasin */
        languageDropdown.addEventListener("click", (event) => {
            event.stopPropagation();
        });


        /* Sahifaning boshqa joyiga bosilsa yopiladi */
        document.addEventListener("click", () => {

            languageDropdown.classList.remove("open");
            languageButton.classList.remove("open");

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    }


    /* =====================================================
       LANGUAGE CHANGE
    ===================================================== */

    languageOptions.forEach((option) => {

        option.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const lang =
                option.dataset.lang;

            if (!lang) return;


            /* Active holat */
            languageOptions.forEach((item) => {
                item.classList.remove("active");
            });

            option.classList.add("active");


            /* Tugmadagi til */
            if (currentLanguage) {

                currentLanguage.textContent =
                    lang.toUpperCase();
            }


            /* Dropdownni yopish */
            if (languageDropdown) {
                languageDropdown.classList.remove("open");
            }

            if (languageButton) {

                languageButton.classList.remove("open");

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }


            /* HTML language */
            document.documentElement.lang = lang;


            /* Tarjima */
            changeLanguage(lang);
        });

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const menu =
        document.getElementById("menu");


    if (menuButton && menu) {

        menuButton.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                menu.classList.contains("open");

            menu.classList.toggle("open");
            menuButton.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );
        });


        const menuLinks =
            menu.querySelectorAll("a");


        menuLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menu.classList.remove("open");
                menuButton.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

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
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

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


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;


        closePerson();


        if (languageDropdown) {
            languageDropdown.classList.remove("open");
        }

        if (languageButton) {
            languageButton.classList.remove("open");

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }


        if (menu) {
            menu.classList.remove("open");
        }

        if (menuButton) {
            menuButton.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

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


/* =========================================================
   OPEN PERSON
========================================================= */

function openPerson(person) {

    const modal =
        document.getElementById("personModal");

    if (!modal) return;


    const data =
        people[person];

    if (!data) return;


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
        role.textContent = data.role;
    }

    if (name) {
        name.textContent = data.name;
    }

    if (text) {
        text.textContent = data.text;
    }

    if (position) {
        position.textContent =
            data.position;
    }


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================================
   CLOSE PERSON
========================================================= */

function closePerson() {

    const modal =
        document.getElementById(
            "personModal"
        );

    if (!modal) return;


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   CLOSE MODAL OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    const modal =
        document.getElementById(
            "personModal"
        );

    if (!modal) return;


    if (event.target === modal) {
        closePerson();
    }

});


/* =========================================================
   LANGUAGE
========================================================= */

function changeLanguage(lang) {

    document.documentElement.lang =
        lang;

}
