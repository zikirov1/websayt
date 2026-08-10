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
/* PERSON CARD */

.person-card {
    cursor: pointer;
}

.person-info {
    padding: 20px 22px 22px;
}

.person-info h3 {
    padding: 0;
}

.person-info p {
    padding: 0;
    margin-top: 3px;
}

.person-more {
    display: inline-block;
    margin-top: 15px;
    color: var(--blue);
    font-size: 14px;
    font-weight: 700;
}


/* PERSON MODAL */

.person-modal {
    position: fixed;
    inset: 0;
    z-index: 2500;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(4, 12, 22, .8);
    backdrop-filter: blur(8px);
}

.person-modal.active {
    display: flex;
    animation: fadeIn .25s ease;
}

.person-modal-box {
    width: min(850px, 100%);
    max-height: 90vh;
    overflow: auto;
    background: white;
    border-radius: 18px;
    position: relative;
    animation: modalIn .3s ease;
}

.person-close {
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 5;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    background: rgba(255,255,255,.9);
    font-size: 25px;
    cursor: pointer;
}

.person-modal-content {
    display: grid;
    grid-template-columns: 320px 1fr;
}

.person-modal-image {
    min-height: 480px;
    background: #dce3eb;
}

.person-modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.person-modal-info {
    padding: 55px 45px;
}

.person-modal-info h2 {
    font-size: 36px;
    margin: 10px 0 20px;
}

.person-divider {
    width: 50px;
    height: 3px;
    background: var(--blue);
    margin-bottom: 22px;
}

.person-modal-info > p {
    color: var(--gray);
    line-height: 1.8;
}

.person-details {
    display: grid;
    gap: 18px;
    margin-top: 30px;
    padding-top: 25px;
    border-top: 1px solid var(--border);
}

.person-details div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.person-details span {
    color: var(--gray);
    font-size: 14px;
}

.person-details strong {
    text-align: right;
    font-size: 14px;
}


/* MOBILE */

@media (max-width: 700px) {

    .person-modal-content {
        grid-template-columns: 1fr;
    }

    .person-modal-image {
        min-height: 300px;
        max-height: 360px;
    }

    .person-modal-info {
        padding: 30px 25px;
    }

    .person-modal-info h2 {
        font-size: 28px;
    }

    .person-details div {
        flex-direction: column;
        gap: 3px;
    }

    .person-details strong {
        text-align: left;
    }

}
