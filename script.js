"use strict";


/* =========================================================
   BESHA GROUP
   SCRIPT.JS
========================================================= */


/* =========================================================
   GOOGLE APPS SCRIPT API
========================================================= */

const FORM_API_URL =
    "https://script.google.com/macros/s/AKfycbwkihmY_IXjAAABBmK4nN-DKgH-JzQf4la7FWKc2sLF4xTSGFLGz62w0FtiTgQZ3GGG/exec";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const header =
    document.getElementById("header");

const menuBtn =
    document.getElementById("menuBtn");

const mainMenu =
    document.getElementById("mainMenu");

const pageLoader =
    document.getElementById("pageLoader");

const contactModal =
    document.getElementById("contactModal");

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const phoneInput =
    document.getElementById("phone");

const organizationInput =
    document.getElementById("organization");

const messageInput =
    document.getElementById("message");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (pageLoader) {
            document.body.classList.add("no-scroll");
        }


        if (mainMenu) {
            mainMenu.classList.remove("active");
        }


        if (menuBtn) {
            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";
        }


        if (contactModal) {
            contactModal.classList.remove(
                "active"
            );

            contactModal.setAttribute(
                "aria-hidden",
                "true"
            );
        }


        if (currentYear) {
            currentYear.textContent =
                new Date().getFullYear();
        }

    }
);


/* =========================================================
   PAGE LOADER
========================================================= */

function hidePageLoader() {

    if (!pageLoader) {
        document.body.classList.remove(
            "no-scroll"
        );

        return;
    }


    pageLoader.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "no-scroll"
    );


    setTimeout(
        function () {

            if (pageLoader) {
                pageLoader.style.display =
                    "none";
            }

        },
        500
    );

}


window.addEventListener(
    "load",
    function () {

        setTimeout(
            function () {
                hidePageLoader();
            },
            700
        );

    }
);


/* Loader xavfsizlik fallback */

setTimeout(
    function () {

        if (
            pageLoader &&
            !pageLoader.classList.contains(
                "hidden"
            )
        ) {
            hidePageLoader();
        }

    },
    4000
);


/* =========================================================
   MOBILE MENU
========================================================= */

function openMobileMenu() {

    if (
        !mainMenu ||
        !menuBtn
    ) {
        return;
    }


    mainMenu.classList.add(
        "active"
    );


    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );


    menuBtn.textContent = "×";

}


function closeMobileMenu() {

    if (
        !mainMenu ||
        !menuBtn
    ) {
        return;
    }


    mainMenu.classList.remove(
        "active"
    );


    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );


    menuBtn.textContent = "☰";

}


if (
    menuBtn &&
    mainMenu
) {

    menuBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            if (
                mainMenu.classList.contains(
                    "active"
                )
            ) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }

        }
    );


    mainMenu
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {
                        closeMobileMenu();
                    }
                );

            }
        );

}


/* Menyu tashqarisini bosganda yopish */

document.addEventListener(
    "click",
    function (event) {

        if (
            !mainMenu ||
            !menuBtn
        ) {
            return;
        }


        if (
            !mainMenu.classList.contains(
                "active"
            )
        ) {
            return;
        }


        const clickedMenu =
            mainMenu.contains(
                event.target
            );


        const clickedButton =
            menuBtn.contains(
                event.target
            );


        if (
            !clickedMenu &&
            !clickedButton
        ) {
            closeMobileMenu();
        }

    }
);


/* Katta ekranga o'tganda menyuni yopish */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 760
        ) {
            closeMobileMenu();
        }

    }
);


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }


    if (
        window.scrollY > 30
    ) {

        header.classList.add(
            "scrolled"
        );


        header.style.boxShadow =
            "0 10px 35px rgba(15, 23, 42, 0.07)";

    } else {

        header.classList.remove(
            "scrolled"
        );


        header.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================================
   CONTACT MODAL
========================================================= */

function openForm() {

    if (!contactModal) {
        return;
    }


    closeMobileMenu();


    contactModal.classList.add(
        "active"
    );


    contactModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );


    setTimeout(
        function () {

            if (nameInput) {
                nameInput.focus();
            }

        },
        200
    );

}


function closeForm() {

    if (!contactModal) {
        return;
    }


    contactModal.classList.remove(
        "active"
    );


    contactModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


/* HTML onclick uchun global */

window.openForm = openForm;
window.closeForm = closeForm;


/* Modal tashqarisini bosganda yopish */

if (contactModal) {

    contactModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                contactModal
            ) {
                closeForm();
            }

        }
    );

}


/* ESC orqali yopish */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            contactModal &&
            contactModal.classList.contains(
                "active"
            )
        ) {
            closeForm();
        }


        if (
            mainMenu &&
            mainMenu.classList.contains(
                "active"
            )
        ) {
            closeMobileMenu();
        }

    }
);


/* =========================================================
   PHONE FORMATTER
   +998 XX XXX XX XX
========================================================= */

function formatUzbekPhone(value) {

    let digits =
        String(value || "")
            .replace(/\D/g, "");


    if (
        digits.startsWith("998")
    ) {
        digits =
            digits.slice(3);
    }


    digits =
        digits.slice(0, 9);


    let formatted = "+998";


    if (
        digits.length > 0
    ) {
        formatted +=
            " " +
            digits.slice(0, 2);
    }


    if (
        digits.length > 2
    ) {
        formatted +=
            " " +
            digits.slice(2, 5);
    }


    if (
        digits.length > 5
    ) {
        formatted +=
            " " +
            digits.slice(5, 7);
    }


    if (
        digits.length > 7
    ) {
        formatted +=
            " " +
            digits.slice(7, 9);
    }


    return formatted;

}


if (phoneInput) {

    phoneInput.addEventListener(
        "focus",
        function () {

            if (
                !this.value.trim()
            ) {
                this.value = "+998";
            }

        }
    );


    phoneInput.addEventListener(
        "input",
        function () {

            this.value =
                formatUzbekPhone(
                    this.value
                );

        }
    );


    phoneInput.addEventListener(
        "blur",
        function () {

            const digits =
                this.value.replace(
                    /\D/g,
                    ""
                );


            if (
                digits.length <= 3
            ) {
                this.value = "";
            }

        }
    );

}


/* =========================================================
   FORM HELPERS
========================================================= */

function getPhoneDigits(phone) {

    return String(phone || "")
        .replace(/\D/g, "");

}


function isValidPhone(phone) {

    const digits =
        getPhoneDigits(phone);


    return (
        digits.length === 12 &&
        digits.startsWith("998")
    );

}


function setSubmitLoading(
    button,
    loading
) {

    if (!button) {
        return;
    }


    if (loading) {

        button.disabled = true;


        if (
            !button.dataset.originalHtml
        ) {
            button.dataset.originalHtml =
                button.innerHTML;
        }


        button.innerHTML =
            "Yuborilmoqda <span>...</span>";

        return;
    }


    button.disabled = false;


    button.innerHTML =
        button.dataset.originalHtml ||
        'Murojaat yuborish <span>→</span>';

}


/* =========================================================
   FORM MESSAGE
========================================================= */

function showMessage(message) {

    alert(message);

}


/* =========================================================
   CONTACT FORM
========================================================= */


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

    let formSubmitting = false;
    let responseTimer = null;
    let statusInterval = null;


    function createRequestId() {

        return (
            Date.now().toString(36) +
            Math.random()
                .toString(36)
                .slice(2, 10)
        );

    }


    function stopStatusCheck() {

        if (statusInterval) {
            clearInterval(statusInterval);
            statusInterval = null;
        }


        if (responseTimer) {
            clearTimeout(responseTimer);
            responseTimer = null;
        }

    }


    function checkFormStatus(
        requestId,
        submitButton
    ) {

        const callbackName =
            "beshaCallback_" +
            Date.now() +
            "_" +
            Math.random()
                .toString(36)
                .slice(2, 8);


        const script =
            document.createElement(
                "script"
            );


        window[callbackName] =
            function (data) {

                try {

                    if (
                        !data ||
                        data.ready !== true
                    ) {
                        return;
                    }


                    stopStatusCheck();

                    formSubmitting = false;

                    setSubmitLoading(
                        submitButton,
                        false
                    );


                    if (
                        data.success === true
                    ) {

                        alert(
                            "Murojaatingiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog‘lanamiz."
                        );

                        contactForm.reset();

                        closeForm();

                    } else {

                        alert(
                            data.message ||
                            "Murojaatni yuborishda xatolik yuz berdi."
                        );

                    }

                } finally {

                    delete window[
                        callbackName
                    ];

                    script.remove();

                }

            };


        script.onerror =
            function () {

                delete window[
                    callbackName
                ];

                script.remove();

            };


        script.src =
            FORM_API_URL +
            "?action=status" +
            "&requestId=" +
            encodeURIComponent(
                requestId
            ) +
            "&callback=" +
            encodeURIComponent(
                callbackName
            ) +
            "&_=" +
            Date.now();


        document.body.appendChild(
            script
        );

    }


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (formSubmitting) {
                return;
            }


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const nameValue =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const phoneValue =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";


            const organizationValue =
                organizationInput
                    ? organizationInput.value.trim()
                    : "";


            const messageValue =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            if (
                nameValue.length < 2
            ) {

                alert(
                    "Iltimos, ismingizni to‘g‘ri kiriting."
                );


                if (nameInput) {
                    nameInput.focus();
                }


                return;

            }


            if (
                !isValidPhone(
                    phoneValue
                )
            ) {

                alert(
                    "Telefon raqamini to‘liq kiriting.\nMasalan: +998 90 123 45 67"
                );


                if (phoneInput) {
                    phoneInput.focus();
                }


                return;

            }


            formSubmitting = true;


            setSubmitLoading(
                submitButton,
                true
            );


            const requestId =
                createRequestId();


            let iframe =
                document.getElementById(
                    "beshaFormFrame"
                );


            if (!iframe) {

                iframe =
                    document.createElement(
                        "iframe"
                    );


                iframe.id =
                    "beshaFormFrame";

                iframe.name =
                    "beshaFormFrame";

                iframe.style.display =
                    "none";


                document.body.appendChild(
                    iframe
                );

            }


            const form =
                document.createElement(
                    "form"
                );


            form.method = "POST";

            form.action =
                FORM_API_URL;

            form.target =
                "beshaFormFrame";

            form.style.display =
                "none";


            const fields = {

                requestId:
                    requestId,

                name:
                    nameValue,

                phone:
                    phoneValue,

                organization:
                    organizationValue,

                message:
                    messageValue

            };


            Object.keys(
                fields
            ).forEach(
                function (key) {

                    const input =
                        document.createElement(
                            "input"
                        );


                    input.type =
                        "hidden";

                    input.name =
                        key;

                    input.value =
                        fields[key];


                    form.appendChild(
                        input
                    );

                }
            );


            document.body.appendChild(
                form
            );


            form.submit();


            setTimeout(
                function () {

                    form.remove();

                },
                1000
            );


            setTimeout(
                function () {

                    checkFormStatus(
                        requestId,
                        submitButton
                    );

                },
                1200
            );


            statusInterval =
                setInterval(
                    function () {

                        checkFormStatus(
                            requestId,
                            submitButton
                        );

                    },
                    1500
                );


            responseTimer =
                setTimeout(
                    function () {

                        if (
                            !formSubmitting
                        ) {
                            return;
                        }


                        stopStatusCheck();

                        formSubmitting =
                            false;


                        setSubmitLoading(
                            submitButton,
                            false
                        );


                        alert(
                            "Server javobini olishda kechikish bo‘ldi. Iltimos, qayta urinib ko‘ring."
                        );

                    },
                    20000
                );

        }
    );

}
/* =========================================================
   SMOOTH SCROLL
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const href =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                let target;


                try {

                    target =
                        document.querySelector(
                            href
                        );

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
                    target
                        .getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight -
                    10;


                window.scrollTo({
                    top:
                        targetTop,

                    behavior:
                        "smooth"
                });

            }
        );

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        [
            ".hero-card",
            ".about-main",
            ".about-info",
            ".service-card",
            ".advantage",
            ".process-item",
            ".contact-content",
            ".contact-list"
        ].join(",")
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target
                            .classList
                            .add(
                                "show"
                            );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "show"
            );

        }
    );

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

const rippleButtons =
    document.querySelectorAll(
        [
            ".primary-btn",
            ".secondary-btn",
            ".nav-contact",
            ".contact-form-button",
            ".service-card button"
        ].join(",")
    );


rippleButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const rect =
                    this.getBoundingClientRect();


                if (
                    rect.width === 0 ||
                    rect.height === 0
                ) {
                    return;
                }


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "ripple-effect";


                let x =
                    event.clientX -
                    rect.left -
                    size / 2;


                let y =
                    event.clientY -
                    rect.top -
                    size / 2;


                if (
                    event.clientX === 0 &&
                    event.clientY === 0
                ) {

                    x =
                        rect.width / 2 -
                        size / 2;


                    y =
                        rect.height / 2 -
                        size / 2;

                }


                ripple.style.width =
                    size + "px";


                ripple.style.height =
                    size + "px";


                ripple.style.left =
                    x + "px";


                ripple.style.top =
                    y + "px";


                const oldRipple =
                    this.querySelector(
                        ".ripple-effect"
                    );


                if (oldRipple) {
                    oldRipple.remove();
                }


                this.appendChild(
                    ripple
                );


                setTimeout(
                    function () {

                        ripple.remove();

                    },
                    650
                );

            }
        );

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    mainMenu
        ? mainMenu.querySelectorAll(
            'a[href^="#"]'
        )
        : [];


function updateActiveNavigation() {

    if (
        !sections.length ||
        !navLinks.length
    ) {
        return;
    }


    const scrollPosition =
        window.scrollY +
        (
            header
                ? header.offsetHeight + 80
                : 100
        );


    let currentSectionId =
        "home";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop;


            if (
                scrollPosition >=
                sectionTop
            ) {

                currentSectionId =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                "#" + currentSectionId
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

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


updateActiveNavigation();


/* =========================================================
   END
========================================================= */
