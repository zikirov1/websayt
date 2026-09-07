/* =========================================================
   BESHA GROUP
   SCRIPT.JS
   Clean • Responsive • Working
========================================================= */

"use strict";


/* =========================================================
   ELEMENTS
========================================================= */

const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mainMenu = document.getElementById("mainMenu");

const pageLoader = document.getElementById("pageLoader");

const contactModal = document.getElementById("contactModal");
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const organizationInput = document.getElementById("organization");
const messageInput = document.getElementById("message");

const currentYear = document.getElementById("currentYear");


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (pageLoader) {
        document.body.classList.add("no-scroll");
    }

    if (mainMenu) {
        mainMenu.classList.remove("active");
    }

    if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    }

    if (contactModal) {
        contactModal.classList.remove("active");
        contactModal.setAttribute("aria-hidden", "true");
    }

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    if (!pageLoader) {
        document.body.classList.remove("no-scroll");
        return;
    }

    setTimeout(function () {

        pageLoader.classList.add("hide");

        document.body.classList.remove("no-scroll");

    }, 1100);

});


/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {

    if (!mainMenu || !menuBtn) {
        return;
    }

    mainMenu.classList.remove("active");

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.textContent = "☰";
}


function openMobileMenu() {

    if (!mainMenu || !menuBtn) {
        return;
    }

    mainMenu.classList.add("active");

    menuBtn.setAttribute("aria-expanded", "true");

    menuBtn.textContent = "×";
}


if (menuBtn && mainMenu) {

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        const menuIsOpen =
            mainMenu.classList.contains("active");

        if (menuIsOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });


    const menuLinks =
        mainMenu.querySelectorAll("a");


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            closeMobileMenu();
        });

    });

}


/* =========================================================
   CLICK OUTSIDE MOBILE MENU
========================================================= */

document.addEventListener("click", function (event) {

    if (!mainMenu || !menuBtn) {
        return;
    }

    if (!mainMenu.classList.contains("active")) {
        return;
    }

    const clickedMenu =
        mainMenu.contains(event.target);

    const clickedButton =
        menuBtn.contains(event.target);


    if (!clickedMenu && !clickedButton) {
        closeMobileMenu();
    }

});


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {
        closeMobileMenu();
    }

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

        header.style.boxShadow =
            "0 10px 35px rgba(30, 65, 120, 0.10)";

    } else {

        header.classList.remove("scrolled");

        header.style.boxShadow = "none";
    }
}


window.addEventListener("scroll", updateHeader, {
    passive: true
});


updateHeader();


/* =========================================================
   CONTACT MODAL
========================================================= */

function openForm() {

    if (!contactModal) {
        return;
    }

    closeMobileMenu();

    contactModal.classList.add("active");

    contactModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");


    setTimeout(function () {

        if (nameInput) {
            nameInput.focus();
        }

    }, 200);
}


function closeForm() {

    if (!contactModal) {
        return;
    }

    contactModal.classList.remove("active");

    contactModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("no-scroll");
}


/*
   openForm va closeForm HTML ichidagi
   onclick atributlari uchun global bo‘lishi kerak.
*/

window.openForm = openForm;
window.closeForm = closeForm;


/* =========================================================
   CLOSE MODAL BY BACKDROP
========================================================= */

if (contactModal) {

    contactModal.addEventListener("click", function (event) {

        if (event.target === contactModal) {
            closeForm();
        }

    });

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }

    if (
        contactModal &&
        contactModal.classList.contains("active")
    ) {
        closeForm();
    }

    if (
        mainMenu &&
        mainMenu.classList.contains("active")
    ) {
        closeMobileMenu();
    }

});


/* =========================================================
   PHONE FORMAT
   +998 XX XXX XX XX
========================================================= */

function formatUzbekPhone(value) {

    let digits =
        String(value).replace(/\D/g, "");


    if (digits.startsWith("998")) {
        digits = digits.slice(3);
    }


    digits = digits.slice(0, 9);


    let formatted = "+998";


    if (digits.length > 0) {
        formatted += " " + digits.slice(0, 2);
    }

    if (digits.length > 2) {
        formatted += " " + digits.slice(2, 5);
    }

    if (digits.length > 5) {
        formatted += " " + digits.slice(5, 7);
    }

    if (digits.length > 7) {
        formatted += " " + digits.slice(7, 9);
    }


    return formatted;
}


if (phoneInput) {

    phoneInput.addEventListener("focus", function () {

        if (!this.value.trim()) {
            this.value = "+998 ";
        }

    });


    phoneInput.addEventListener("input", function () {

        this.value =
            formatUzbekPhone(this.value);

    });


    phoneInput.addEventListener("blur", function () {

        const digits =
            this.value.replace(/\D/g, "");


        if (
            digits.length <= 3
        ) {
            this.value = "";
        }

    });

}


/* =========================================================
   FORM VALIDATION HELPERS
========================================================= */

function getPhoneDigits(phone) {
    return String(phone).replace(/\D/g, "");
}


function isValidPhone(phone) {

    const digits =
        getPhoneDigits(phone);

    return (
        digits.length === 12 &&
        digits.startsWith("998")
    );
}


/* =========================================================
   CONTACT FORM SUBMISSION
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";

            const organization =
                organizationInput
                    ? organizationInput.value.trim()
                    : "";

            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            /* -----------------------------------------
               NAME VALIDATION
            ----------------------------------------- */

            if (name.length < 2) {

                alert(
                    "Iltimos, ism va familiyangizni to‘g‘ri kiriting."
                );

                if (nameInput) {
                    nameInput.focus();
                }

                return;
            }


            /* -----------------------------------------
               PHONE VALIDATION
            ----------------------------------------- */

            if (!isValidPhone(phone)) {

                alert(
                    "Iltimos, telefon raqamingizni to‘liq kiriting.\nMasalan: +998 90 123 45 67"
                );

                if (phoneInput) {
                    phoneInput.focus();
                }

                return;
            }


            /* -----------------------------------------
               SUBMIT BUTTON
            ----------------------------------------- */

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const originalButtonContent =
                submitButton
                    ? submitButton.innerHTML
                    : "";


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    "<span>Yuborilmoqda...</span>";
            }


            /* -----------------------------------------
               DATA OBJECT

               Keyinchalik Cloudflare Worker
               yoki boshqa backendga shu ma'lumot
               yuboriladi.
            ----------------------------------------- */

            const formData = {
                name: name,
                phone: phone,
                organization: organization,
                message: message
            };


            try {

                /*
                 =================================================
                 HOZIRCHA DEMO REJIM

                 Telegram backend ulangandan keyin
                 pastdagi demoTimeout o‘rniga fetch()
                 yoziladi.

                 Masalan:

                 const response = await fetch(
                     "YOUR_CLOUDFLARE_WORKER_URL",
                     {
                         method: "POST",
                         headers: {
                             "Content-Type": "application/json"
                         },
                         body: JSON.stringify(formData)
                     }
                 );

                 if (!response.ok) {
                     throw new Error(
                         "Server xatosi"
                     );
                 }

                 =================================================
                */


                console.log(
                    "BESHA GROUP murojaat:",
                    formData
                );


                await new Promise(function (resolve) {

                    setTimeout(resolve, 700);

                });


                alert(
                    "Rahmat, " +
                    name +
                    "!\n\n" +
                    "Murojaatingiz qabul qilindi."
                );


                contactForm.reset();

                closeForm();


            } catch (error) {

                console.error(
                    "Murojaat yuborishda xatolik:",
                    error
                );


                alert(
                    "Murojaat yuborishda xatolik yuz berdi. " +
                    "Iltimos, qaytadan urinib ko‘ring."
                );


            } finally {

                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        originalButtonContent;
                }

            }

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href =
            this.getAttribute("href");


        if (!href || href === "#") {
            return;
        }


        let target;


        try {
            target = document.querySelector(href);
        } catch (error) {
            return;
        }


        if (!target) {
            return;
        }


        event.preventDefault();


        closeMobileMenu();


        const headerHeight =
            header
                ? header.offsetHeight
                : 0;


        const targetTop =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;


        window.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".hero-card, " +
        ".about-main, " +
        ".about-info, " +
        ".service-card, " +
        ".advantage, " +
        ".process-item, " +
        ".contact-item, " +
        ".contact-form-button"
    );


if (
    "IntersectionObserver" in window &&
    revealElements.length > 0
) {

    revealElements.forEach(function (element) {
        element.classList.add("animate-on-scroll");
    });


    const observer =
        new IntersectionObserver(
            function (entries, currentObserver) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("show");

                    currentObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("show");
    });

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

const rippleButtons =
    document.querySelectorAll(
        ".primary-btn, " +
        ".secondary-btn, " +
        ".nav-contact, " +
        ".contact-form-button, " +
        ".service-card button"
    );


rippleButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const rect =
            button.getBoundingClientRect();


        const size =
            Math.max(
                rect.width,
                rect.height
            );


        const ripple =
            document.createElement("span");


        ripple.classList.add("ripple");


        ripple.style.width =
            size + "px";

        ripple.style.height =
            size + "px";


        /*
           Klaviatura orqali bosilganda
           clientX/clientY 0 bo‘lishi mumkin.
        */

        let x =
            event.clientX - rect.left;

        let y =
            event.clientY - rect.top;


        if (
            event.clientX === 0 &&
            event.clientY === 0
        ) {

            x = rect.width / 2;
            y = rect.height / 2;
        }


        ripple.style.left =
            x - size / 2 + "px";

        ripple.style.top =
            y - size / 2 + "px";


        const oldRipple =
            button.querySelector(".ripple");


        if (oldRipple) {
            oldRipple.remove();
        }


        button.appendChild(ripple);


        setTimeout(function () {

            if (ripple.parentNode) {
                ripple.remove();
            }

        }, 600);

    });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    mainMenu
        ? mainMenu.querySelectorAll("a[href^='#']")
        : [];


function updateActiveNavigation() {

    if (!sections.length || !navLinks.length) {
        return;
    }


    const scrollPosition =
        window.scrollY +
        (
            header
                ? header.offsetHeight + 60
                : 100
        );


    let currentSectionId = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSectionId =
                section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === "#" + currentSectionId
        ) {

            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


window.addEventListener(
    "load",
    updateActiveNavigation
);


/* =========================================================
   SAFETY FALLBACK
   Loader hech qachon ekranda qolib ketmasin.
========================================================= */

setTimeout(function () {

    if (
        pageLoader &&
        !pageLoader.classList.contains("hide")
    ) {

        pageLoader.classList.add("hide");

        document.body.classList.remove("no-scroll");
    }

}, 4000);
