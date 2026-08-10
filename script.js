// =========================
// BESHA GROUP
// SCRIPT.JS
// =========================

// MOBILE MENU
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

// Menyu linkini bosganda mobil menyuni yopish
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});


// CONTACT MODAL
function openForm() {
    const modal = document.getElementById("contactModal");

    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeForm() {
    const modal = document.getElementById("contactModal");

    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// Modal tashqarisiga bosilganda yopish
document.getElementById("contactModal").addEventListener("click", function (e) {
    if (e.target === this) {
        closeForm();
    }
});


// ESC BOSILGANDA MODALNI YOPISH
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeForm();
    }
});


// TELEFON RAQAMINI FORMATLASH
const phoneInput = document.querySelector('input[name="phone"]');

if (phoneInput) {
    phoneInput.addEventListener("input", function () {

        let value = this.value.replace(/\D/g, "");

        if (value.startsWith("998")) {
            value = value.substring(3);
        }

        value = value.substring(0, 9);

        let result = "+998";

        if (value.length > 0) {
            result += " " + value.substring(0, 2);
        }

        if (value.length > 2) {
            result += " " + value.substring(2, 5);
        }

        if (value.length > 5) {
            result += " " + value.substring(5, 7);
        }

        if (value.length > 7) {
            result += " " + value.substring(7, 9);
        }

        this.value = result;
    });
}


// FORM SUBMIT
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('[name="name"]').value.trim();
        const phone = this.querySelector('[name="phone"]').value.trim();

        if (!name || !phone) {
            alert("Iltimos, ism va telefon raqamingizni kiriting.");
            return;
        }

        if (phone.replace(/\D/g, "").length < 12) {
            alert("Telefon raqamini to‘liq kiriting.");
            return;
        }

        /*
            Hozircha forma ma'lumotlari serverga yuborilmaydi.

            Keyingi bosqichda bu joyga:
            - Telegram Bot
            - Database
            - Email
            yoki
            - Backend API

            ulaymiz.
        */

        alert(
            "Rahmat, " + name + "!\n\n" +
            "Murojaatingiz qabul qilindi. " +
            "Tez orada siz bilan bog‘lanamiz."
        );

        this.reset();
        closeForm();
    });
}


// HEADER SCROLL EFFECT
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "none";
    }

});


// SCROLL ANIMATION
const animatedElements = document.querySelectorAll(
    ".service-card, .advantage, .person, .about-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


// Boshlang‘ich holat
animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
