// =========================
// BESHA GROUP
// SCRIPT.JS
// =========================


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const menu = document.querySelector(".menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// Menyu linkini bosganda menyuni yopish
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {

        const menu = document.querySelector(".menu");

        if (menu) {
            menu.classList.remove("active");
        }

    });
});


// =========================
// CONTACT MODAL
// =========================

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


// Kontakt modal tashqarisiga bosilganda yopish
const contactModal = document.getElementById("contactModal");

if (contactModal) {

    contactModal.addEventListener("click", function (e) {

        if (e.target === this) {
            closeForm();
        }

    });

}


// =========================
// ESC - MODALLARNI YOPISH
// =========================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeForm();
        closePerson();

    }

});


// =========================
// PHONE FORMAT
// =========================

const phoneInput = document.querySelector(
    'input[name="phone"]'
);

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


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                this.querySelector('[name="name"]')
                    ?.value.trim();

            const phone =
                this.querySelector('[name="phone"]')
                    ?.value.trim();


            if (!name || !phone) {

                alert(
                    "Iltimos, ism va telefon raqamingizni kiriting."
                );

                return;
            }


            if (phone.replace(/\D/g, "").length < 12) {

                alert(
                    "Telefon raqamini to‘liq kiriting."
                );

                return;
            }


            alert(
                "Rahmat, " + name + "!\n\n" +
                "Murojaatingiz qabul qilindi.\n" +
                "Tez orada siz bilan bog‘lanamiz."
            );


            this.reset();

            closeForm();

        }
    );

}


// =========================
// HEADER SCROLL EFFECT
// =========================

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "none";

        }

    }
);


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .advantage, .person, .about-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });

}


// =========================
// PERSON INFORMATION
// =========================


// Bu yerlarni keyinchalik o'zingiz
// haqiqiy ma'lumotlar bilan almashtirasiz.

const people = {

    director: {

        name: "Ism Familiya",

        role: "BOSH DIREKTOR",

        position: "Bosh direktor",

        image: "images/director.jpg",

        text: `
            Bu yerga direktor haqida batafsil
            ma'lumot yoziladi.

            Masalan, uning professional faoliyati,
            ish tajribasi, kompaniyadagi vazifalari
            va Besha Group rivojiga qo'shayotgan
            hissasi haqida ma'lumot berish mumkin.
        `

    },


    manager: {

        name: "Ism Familiya",

        role: "MENEJER",

        position: "Menejer",

        image: "images/manager.jpg",

        text: `
            Bu yerga menejer haqida batafsil
            ma'lumot yoziladi.

            Masalan, uning ish tajribasi,
            mijozlar bilan ishlashi, vazifalari
            va Besha Group kompaniyasidagi
            faoliyati haqida ma'lumot berish mumkin.
        `

    }

};


// =========================
// OPEN PERSON
// =========================

function openPerson(person) {

    const data = people[person];

    if (!data) return;


    const modal =
        document.getElementById("personModal");

    const name =
        document.getElementById("personModalName");

    const role =
        document.getElementById("personModalRole");

    const position =
        document.getElementById("personModalPosition");

    const text =
        document.getElementById("personModalText");

    const image =
        document.getElementById("personModalImage");


    if (!modal) return;


    if (name) {
        name.textContent = data.name;
    }


    if (role) {
        role.textContent = data.role;
    }


    if (position) {
        position.textContent = data.position;
    }


    if (text) {
        text.textContent = data.text.trim();
    }


    if (image) {
        image.src = data.image;
        image.alt = data.name;
    }


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


// =========================
// CLOSE PERSON
// =========================

function closePerson() {

    const modal =
        document.getElementById("personModal");


    if (!modal) return;


    modal.classList.remove("active");

    document.body.style.overflow = "";

}


// =========================
// PERSON MODAL OUTSIDE CLICK
// =========================

const personModal =
    document.getElementById("personModal");


if (personModal) {

    personModal.addEventListener(
        "click",
        function (e) {

            if (e.target === this) {
                closePerson();
            }

        }
    );

}
