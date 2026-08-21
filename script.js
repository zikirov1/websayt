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
       LANGUAGE ELEMENTS
    ===================================================== */

    const languageButton =
        document.getElementById("languageButton");

    const languageDropdown =
        document.getElementById("languageDropdown");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const languageOptions =
        document.querySelectorAll(".language-option");


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    if (languageButton && languageDropdown) {

        languageButton.addEventListener("click", (event) => {

            event.preventDefault();
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

    }


    /* =====================================================
       CLOSE LANGUAGE DROPDOWN
    ===================================================== */

    document.addEventListener("click", () => {

        if (languageDropdown) {

            languageDropdown.classList.remove("show");

        }

        if (languageButton) {

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================================
       LANGUAGE OPTIONS
    ===================================================== */

    languageOptions.forEach(option => {

        option.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const lang =
                option.getAttribute("data-lang");

            if (!lang) return;

            setLanguage(lang);

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

            menu.classList.toggle("active");

            menuButton.classList.toggle("active");

        });


        const menuLinks =
            menu.querySelectorAll("a");


        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

                menuButton.classList.remove("active");

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


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

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
       ESC KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closePerson();

            if (languageDropdown) {

                languageDropdown.classList.remove("show");

            }

            if (languageButton) {

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (menu) {

                menu.classList.remove("active");

            }

            if (menuButton) {

                menuButton.classList.remove("active");

            }

        }

    });


    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem("beshaLanguage");


    if (
        savedLanguage === "uz" ||
        savedLanguage === "en" ||
        savedLanguage === "ru"
    ) {

        setLanguage(savedLanguage);

    } else {

        setLanguage("uz");

    }

});



/* =========================================================
   TRANSLATION DATA
========================================================= */

const translations = {

    uz: {

        /* HEADER */

        nav_about: "Biz haqimizda",
        nav_services: "Faoliyatimiz",
        nav_approach: "Yondashuv",
        nav_values: "Qadriyatlar",
        nav_team: "Rahbariyat",
        nav_contact: "Bog‘lanish",

        /* HERO */

        hero_tag: "BESHA GROUP",

        hero_title:
            "Insonlar va <span>imkoniyatlarni</span> bog‘laymiz.",

        hero_text:
            "Korxonalar uchun ishchi kuchiga bo‘lgan ehtiyojni qondirish jarayonini samarali tashkil etishga ko‘maklashamiz.",

        hero_about:
            "Biz haqimizda",

        hero_contact:
            "Biz bilan bog‘laning",


        /* ABOUT */

        about_label:
            "BIZ KIMMIZ?",

        about_title:
            "Korxonalar uchun <span>ishonchli yechim.</span>",

        about_text1:
            "Besha Group korxonalar va tashkilotlarning ishchi kuchiga bo‘lgan ehtiyojini qondirish jarayonini tashkil etishga ixtisoslashgan kompaniya sifatida faoliyat yuritadi.",

        about_text2:
            "Biz ish beruvchilarning talablarini o‘rganish, zarur ishchi kuchini shakllantirish va ishga qabul qilish jarayonlarini samarali tashkil etishga ko‘maklashamiz.",

        about_highlight_label:
            "ASOSIY MAQSADIMIZ",

        about_highlight:
            "Korxonalar uchun kerakli ishchi kuchini samarali tashkil etishga ko‘maklashish.",


        /* WHY */

        why_label:
            "BIZGA NIMA UCHUN MUROJAAT QILISHADI?",

        why_title:
            "Ishchi kuchi masalasida <span>aniq va amaliy yondashuv.</span>",

        why_text:
            "Korxonalarda ishchi kuchiga bo‘lgan ehtiyoj turlicha bo‘lishi mumkin. Biz har bir murojaatni korxonaning real ehtiyojidan kelib chiqib ko‘rib chiqamiz.",

        why_card1_title:
            "Ishchi kuchiga ehtiyoj",

        why_card1_text:
            "Ishlab chiqarish yoki boshqa faoliyat yo‘nalishlarida qo‘shimcha ishchi kuchiga ehtiyoj sezayotgan korxonalar biz bilan bog‘lanishlari mumkin.",

        why_solution_title:
            "Bizning yondashuv",

        why_solution_text:
            "Avvalo korxonaning talablarini, ish sharoitlarini va zarur ishchi kuchi parametrlarini tushunamiz. Shundan so‘ng tegishli jarayonni tashkil etishga kirishamiz.",

        why_card2_title:
            "Jarayonni yengillashtirish",

        why_card2_text:
            "Maqsadimiz — korxona uchun ishchi kuchini izlash va ishga qabul qilish bilan bog‘liq jarayonlarni imkon qadar tartibli va samarali tashkil etishga ko‘maklashish.",


        /* SERVICES */

        services_label:
            "FAOLIYATIMIZ",

        services_title:
            "Korxonalar uchun <span>nimalar qilamiz?</span>",

        services_text:
            "Bizning faoliyatimiz ish beruvchining ehtiyojini tushunishdan boshlab, zarur ishchi kuchini tashkil etish jarayonigacha bo‘lgan bosqichlarni qamrab oladi.",

        service1_title:
            "Ehtiyojni o‘rganish",

        service1_text:
            "Korxonaning ishchi kuchiga bo‘lgan ehtiyoji, talab qilinadigan yo‘nalish, ish sharoitlari va boshqa muhim mezonlarini o‘rganamiz.",

        service2_title:
            "Ishchi kuchini tashkil etish",

        service2_text:
            "Belgilangan talablar asosida zarur ishchi kuchini shakllantirish va tegishli jarayonlarni tashkil etishga ko‘maklashamiz.",

        service3_title:
            "Hamkorlikni muvofiqlashtirish",

        service3_text:
            "Ish beruvchi bilan doimiy muloqot qilib, kelishilgan talablar va jarayonlarning bajarilishini muvofiqlashtirishga yordam beramiz.",


        /* AUDIENCE */

        audience_label:
            "KIMLAR BILAN ISHLAYMIZ?",

        audience_title:
            "Ish beruvchilar uchun amaliy yechimlar.",

        audience_text:
            "Bizning asosiy yo‘nalishimiz — ishchi kuchiga ehtiyoj sezayotgan korxonalar bilan ishlash.",

        audience1_title:
            "Ishlab chiqarish korxonalari",

        audience1_text:
            "Ishlab chiqarish jarayonlarida ishchi kuchiga ehtiyoj sezayotgan zavod va korxonalar.",

        audience2_title:
            "Yirik tashkilotlar",

        audience2_text:
            "Doimiy yoki ma'lum davr uchun qo‘shimcha ishchi kuchiga ehtiyoj sezayotgan tashkilotlar.",


        /* APPROACH */

        approach_label:
            "YONDASHUVIMIZ",

        approach_title:
            "Har bir korxona uchun <span>alohida yondashuv.</span>",

        process1_title:
            "Ehtiyojni tushunamiz",

        process1_text:
            "Korxona tomonidan qo‘yilgan talablar va ehtiyojlarni batafsil o‘rganamiz.",

        process2_title:
            "Talablarni aniqlaymiz",

        process2_text:
            "Lavozim, ish sharoiti, ish vaqti va boshqa muhim mezonlarni aniqlashtiramiz.",

        process3_title:
            "Jarayonni tashkil qilamiz",

        process3_text:
            "Kelishilgan talablar asosida zarur ishchi kuchini tashkil etish jarayonini amalga oshiramiz.",

        process4_title:
            "Muloqotni davom ettiramiz",

        process4_text:
            "Hamkorlik davomida ish beruvchi bilan muntazam aloqada bo‘lib, zarur masalalarni muvofiqlashtiramiz.",


        /* VALUES */

        values_label:
            "QADRIYATLARIMIZ",

        values_title:
            "Ishonch asosidagi hamkorlik.",

        value1_title:
            "Ishonch",

        value1_text:
            "Biznes hamkorlikda ishonch va o‘zaro hurmatni asosiy tamoyillardan biri deb bilamiz.",

        value2_title:
            "Mas'uliyat",

        value2_text:
            "Kelishilgan vazifalar va majburiyatlarga mas'uliyat bilan yondashamiz.",

        value3_title:
            "Aniqlik",

        value3_text:
            "Talablar, shartlar va jarayonlar bo‘yicha imkon qadar aniq va tushunarli muloqotni ta'minlaymiz.",

        value4_title:
            "Rivojlanish",

        value4_text:
            "Faoliyatimizni takomillashtirish va korxonalar uchun yanada samarali yechimlar yaratishga intilamiz.",


        /* TEAM */

        team_label:
            "RAHBARIYAT",

        team_title:
            "Besha Group rahbariyati.",

        team_text:
            "Rahbariyat haqida ma'lumot olish uchun tegishli kartani tanlang.",

        director_role:
            "DIREKTOR",

        manager_role:
            "MENEJER",

        person_name:
            "Ism Familiya",

        person_more:
            "Batafsil →",


        /* FUTURE */

        future_label:
            "KELAJAKKA QARASH",

        future_title:
            "Ishonchli hamkorlikdan<br><strong>barqaror natijalar sari.</strong>",

        future_text:
            "Besha Group korxonalar uchun ishchi kuchini tashkil etish jarayonlarini yanada samarali, tizimli va qulay qilish yo‘lida rivojlanib boradi.",


        /* CONTACT */

        contact_label:
            "BIZ BILAN BOG‘LANING",

        contact_title:
            "Korxonangiz uchun ishchi kuchi kerakmi?",

        contact_text:
            "Biz bilan telefon, Telegram yoki Instagram orqali bog‘lanishingiz mumkin. Murojaatingizni ko‘rib chiqamiz va keyingi hamkorlik masalalarini bevosita muhokama qilamiz.",

        telegram:
            "Telegram orqali yozish",

        instagram:
            "Instagram orqali yozish",

        phone:
            "Telefon orqali bog‘lanish",


        /* FOOTER */

        footer_text:
            "Insonlar va imkoniyatlarni bog‘laymiz.",

        footer_about:
            "Biz haqimizda",

        footer_services:
            "Faoliyatimiz",

        footer_contact:
            "Bog‘lanish",

        footer_top:
            "↑ Yuqoriga",

        copyright:
            "© 2026 BESHA GROUP. Barcha huquqlar himoyalangan."

    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        nav_about:
            "About us",

        nav_services:
            "What we do",

        nav_approach:
            "Our approach",

        nav_values:
            "Our values",

        nav_team:
            "Management",

        nav_contact:
            "Contact",

        hero_tag:
            "BESHA GROUP",

        hero_title:
            "Connecting <span>people</span> and opportunities.",

        hero_text:
            "We help companies efficiently organize the process of meeting their workforce needs.",

        hero_about:
            "About us",

        hero_contact:
            "Contact us",


        about_label:
            "WHO ARE WE?",

        about_title:
            "A <span>reliable solution</span> for businesses.",

        about_text1:
            "Besha Group operates as a company specializing in organizing solutions for the workforce needs of enterprises and organizations.",

        about_text2:
            "We study employers' requirements, help form the necessary workforce and organize recruitment processes efficiently.",

        about_highlight_label:
            "OUR MAIN GOAL",

        about_highlight:
            "To help companies efficiently organize the workforce they need.",


        why_label:
            "WHY DO COMPANIES CONTACT US?",

        why_title:
            "A <span>clear and practical approach</span> to workforce needs.",

        why_text:
            "Workforce needs can vary from company to company. We consider every request based on the company's actual requirements.",

        why_card1_title:
            "Workforce needs",

        why_card1_text:
            "Companies that need additional workers for production or other activities can contact us.",

        why_solution_title:
            "Our approach",

        why_solution_text:
            "First, we understand the company's requirements, working conditions and workforce parameters. Then we organize the relevant process.",

        why_card2_title:
            "Simplifying the process",

        why_card2_text:
            "Our goal is to help companies organize workforce search and recruitment processes in an orderly and efficient way.",


        services_label:
            "WHAT WE DO",

        services_title:
            "What do we do <span>for companies?</span>",

        services_text:
            "Our activities cover the stages from understanding the employer's needs to organizing the required workforce.",

        service1_title:
            "Understanding the need",

        service1_text:
            "We study the company's workforce needs, required positions, working conditions and other important criteria.",

        service2_title:
            "Workforce organization",

        service2_text:
            "Based on the defined requirements, we help form the necessary workforce and organize the relevant processes.",

        service3_title:
            "Coordinating cooperation",

        service3_text:
            "We maintain communication with the employer and help coordinate agreed requirements and processes.",


        audience_label:
            "WHO DO WE WORK WITH?",

        audience_title:
            "Practical solutions for employers.",

        audience_text:
            "Our main focus is working with companies that need additional workforce.",

        audience1_title:
            "Manufacturing companies",

        audience1_text:
            "Factories and enterprises that need workforce for their production processes.",

        audience2_title:
            "Large organizations",

        audience2_text:
            "Organizations that need additional workforce on a permanent or temporary basis.",


        approach_label:
            "OUR APPROACH",

        approach_title:
            "An <span>individual approach</span> for every company.",

        process1_title:
            "We understand the need",

        process1_text:
            "We carefully study the requirements and needs set by the company.",

        process2_title:
            "We define requirements",

        process2_text:
            "We clarify the position, working conditions, working hours and other important criteria.",

        process3_title:
            "We organize the process",

        process3_text:
            "We organize the required workforce process based on the agreed requirements.",

        process4_title:
            "We maintain communication",

        process4_text:
            "Throughout the cooperation, we stay in regular contact with the employer and coordinate important matters.",


        values_label:
            "OUR VALUES",

        values_title:
            "Cooperation based on trust.",

        value1_title:
            "Trust",

        value1_text:
            "We consider trust and mutual respect among the key principles of business cooperation.",

        value2_title:
            "Responsibility",

        value2_text:
            "We approach agreed tasks and responsibilities with commitment.",

        value3_title:
            "Clarity",

        value3_text:
            "We strive to ensure clear and understandable communication regarding requirements, terms and processes.",

        value4_title:
            "Development",

        value4_text:
            "We strive to improve our activities and create more effective solutions for companies.",


        team_label:
            "MANAGEMENT",

        team_title:
            "Besha Group management.",

        team_text:
            "Select the relevant card to learn more about our management.",

        director_role:
            "DIRECTOR",

        manager_role:
            "MANAGER",

        person_name:
            "Name Surname",

        person_more:
            "Details →",


        future_label:
            "LOOKING AHEAD",

        future_title:
            "From reliable cooperation<br><strong>to sustainable results.</strong>",

        future_text:
            "Besha Group continues to develop in order to make workforce organization processes more efficient, systematic and convenient for companies.",


        contact_label:
            "CONTACT US",

        contact_title:
            "Do you need workforce for your company?",

        contact_text:
            "You can contact us by phone, Telegram or Instagram. We will review your request and discuss further cooperation directly.",

        telegram:
            "Write via Telegram",

        instagram:
            "Write via Instagram",

        phone:
            "Contact by phone",


        footer_text:
            "Connecting people and opportunities.",

        footer_about:
            "About us",

        footer_services:
            "What we do",

        footer_contact:
            "Contact",

        footer_top:
            "↑ Back to top",

        copyright:
            "© 2026 BESHA GROUP. All rights reserved."

    },


    /* =====================================================
       RUSSIAN
    ===================================================== */

    ru: {

        nav_about:
            "О нас",

        nav_services:
            "Наша деятельность",

        nav_approach:
            "Наш подход",

        nav_values:
            "Ценности",

        nav_team:
            "Руководство",

        nav_contact:
            "Контакты",

        hero_tag:
            "BESHA GROUP",

        hero_title:
            "Соединяем <span>людей</span> и возможности.",

        hero_text:
            "Мы помогаем предприятиям эффективно организовать процесс обеспечения необходимыми трудовыми ресурсами.",

        hero_about:
            "О нас",

        hero_contact:
            "Связаться с нами",


        about_label:
            "КТО МЫ?",

        about_title:
            "<span>Надёжное решение</span> для предприятий.",

        about_text1:
            "Besha Group специализируется на организации процессов, связанных с обеспечением предприятий и организаций необходимыми трудовыми ресурсами.",

        about_text2:
            "Мы изучаем требования работодателей, помогаем формировать необходимый персонал и эффективно организовывать процессы найма.",

        about_highlight_label:
            "НАША ГЛАВНАЯ ЦЕЛЬ",

        about_highlight:
            "Помогать предприятиям эффективно организовывать необходимую рабочую силу.",


        why_label:
            "ПОЧЕМУ К НАМ ОБРАЩАЮТСЯ?",

        why_title:
            "<span>Чёткий и практический подход</span> к вопросам рабочей силы.",

        why_text:
            "Потребности предприятий в рабочей силе могут различаться. Мы рассматриваем каждое обращение исходя из реальных потребностей предприятия.",

        why_card1_title:
            "Потребность в рабочей силе",

        why_card1_text:
            "Предприятия, которым необходимы дополнительные сотрудники для производства или других направлений деятельности, могут обратиться к нам.",

        why_solution_title:
            "Наш подход",

        why_solution_text:
            "В первую очередь мы изучаем требования предприятия, условия работы и необходимые параметры персонала. После этого организуем соответствующий процесс.",

        why_card2_title:
            "Упрощение процесса",

        why_card2_text:
            "Наша цель — помочь предприятиям организовать поиск и найм работников максимально системно и эффективно.",


        services_label:
            "НАША ДЕЯТЕЛЬНОСТЬ",

        services_title:
            "Что мы делаем <span>для предприятий?</span>",

        services_text:
            "Наша деятельность охватывает этапы от понимания потребностей работодателя до организации необходимой рабочей силы.",

        service1_title:
            "Изучение потребностей",

        service1_text:
            "Мы изучаем потребность предприятия в рабочей силе, необходимые направления, условия работы и другие важные критерии.",

        service2_title:
            "Организация рабочей силы",

        service2_text:
            "На основе установленных требований мы помогаем сформировать необходимый персонал и организовать соответствующие процессы.",

        service3_title:
            "Координация сотрудничества",

        service3_text:
            "Мы поддерживаем постоянную связь с работодателем и помогаем координировать согласованные требования и процессы.",


        audience_label:
            "С КЕМ МЫ РАБОТАЕМ?",

        audience_title:
            "Практические решения для работодателей.",

        audience_text:
            "Основное направление нашей деятельности — работа с предприятиями, испытывающими потребность в рабочей силе.",

        audience1_title:
            "Производственные предприятия",

        audience1_text:
            "Заводы и предприятия, испытывающие потребность в сотрудниках для производственных процессов.",

        audience2_title:
            "Крупные организации",

        audience2_text:
            "Организации, которым необходим дополнительный персонал на постоянной или временной основе.",


        approach_label:
            "НАШ ПОДХОД",

        approach_title:
            "<span>Индивидуальный подход</span> к каждому предприятию.",

        process1_title:
            "Понимаем потребность",

        process1_text:
            "Мы подробно изучаем требования и потребности, установленные предприятием.",

        process2_title:
            "Определяем требования",

        process2_text:
            "Уточняем должность, условия работы, рабочее время и другие важные критерии.",

        process3_title:
            "Организуем процесс",

        process3_text:
            "На основе согласованных требований организуем процесс формирования необходимой рабочей силы.",

        process4_title:
            "Продолжаем коммуникацию",

        process4_text:
            "В процессе сотрудничества поддерживаем постоянную связь с работодателем и координируем необходимые вопросы.",


        values_label:
            "НАШИ ЦЕННОСТИ",

        values_title:
            "Сотрудничество, основанное на доверии.",

        value1_title:
            "Доверие",

        value1_text:
            "Мы считаем доверие и взаимное уважение одними из главных принципов делового сотрудничества.",

        value2_title:
            "Ответственность",

        value2_text:
            "Мы ответственно относимся к согласованным задачам и обязательствам.",

        value3_title:
            "Точность",

        value3_text:
            "Мы стремимся обеспечить максимально точную и понятную коммуникацию по требованиям, условиям и процессам.",

        value4_title:
            "Развитие",

        value4_text:
            "Мы стремимся совершенствовать свою деятельность и создавать более эффективные решения для предприятий.",


        team_label:
            "РУКОВОДСТВО",

        team_title:
            "Руководство Besha Group.",

        team_text:
            "Выберите соответствующую карточку, чтобы узнать больше о руководстве.",

        director_role:
            "ДИРЕКТОР",

        manager_role:
            "МЕНЕДЖЕР",

        person_name:
            "Имя Фамилия",

        person_more:
            "Подробнее →",


        future_label:
            "ВЗГЛЯД В БУДУЩЕЕ",

        future_title:
            "От надёжного сотрудничества<br><strong>к стабильным результатам.</strong>",

        future_text:
            "Besha Group продолжает развиваться, чтобы сделать процессы организации рабочей силы для предприятий более эффективными, системными и удобными.",


        contact_label:
            "СВЯЖИТЕСЬ С НАМИ",

        contact_title:
            "Вам необходимы сотрудники для вашего предприятия?",

        contact_text:
            "Вы можете связаться с нами по телефону, через Telegram или Instagram. Мы рассмотрим ваше обращение и напрямую обсудим дальнейшее сотрудничество.",

        telegram:
            "Написать через Telegram",

        instagram:
            "Написать через Instagram",

        phone:
            "Связаться по телефону",


        footer_text:
            "Соединяем людей и возможности.",

        footer_about:
            "О нас",

        footer_services:
            "Наша деятельность",

        footer_contact:
            "Контакты",

        footer_top:
            "↑ Наверх",

        copyright:
            "© 2026 BESHA GROUP. Все права защищены."

    }

};



/* =========================================================
   LANGUAGE CHANGE FUNCTION
========================================================= */

function setLanguage(lang) {

    if (!translations[lang]) {
        lang = "uz";
    }


    const t =
        translations[lang];


    /* =====================================================
       HTML LANGUAGE
    ===================================================== */

    document.documentElement.lang = lang;


    /* =====================================================
       SAVE LANGUAGE
    ===================================================== */

    localStorage.setItem(
        "beshaLanguage",
        lang
    );


    /* =====================================================
       CURRENT LANGUAGE BUTTON
    ===================================================== */

    const currentLanguage =
        document.getElementById("currentLanguage");


    if (currentLanguage) {

        currentLanguage.textContent =
            lang.toUpperCase();

    }


    /* =====================================================
       ACTIVE LANGUAGE
    ===================================================== */

    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.lang === lang
            );

        });


    /* =====================================================
       NAVIGATION
    ===================================================== */

    setText(
        document.querySelectorAll(".menu a"),
        [
            t.nav_about,
            t.nav_services,
            t.nav_approach,
            t.nav_values,
            t.nav_team,
            t.nav_contact
        ]
    );


    /* HEADER BUTTON */

    const navBtn =
        document.querySelector(".nav-btn");

    if (navBtn) {
        navBtn.textContent = t.nav_contact;
    }


    /* =====================================================
       HERO
    ===================================================== */

    setText(
        document.querySelector(".hero-tag"),
        t.hero_tag
    );

    setHTML(
        document.querySelector(".hero h1"),
        t.hero_title
    );

    setText(
        document.querySelector(".hero-content > p"),
        t.hero_text
    );

    setText(
        document.querySelector(".primary-btn"),
        t.hero_about
    );

    setText(
        document.querySelector(".secondary-btn"),
        t.hero_contact
    );


    /* =====================================================
       ABOUT
    ===================================================== */

    const about =
        document.querySelector("#about");

    if (about) {

        setText(
            about.querySelector(".section-label"),
            t.about_label
        );

        setHTML(
            about.querySelector("h2"),
            t.about_title
        );

        const paragraphs =
            about.querySelectorAll(".reveal > p");

        setText(
            paragraphs,
            [
                t.about_text1,
                t.about_text2
            ]
        );

        setText(
            about.querySelector(
                ".about-highlight span"
            ),
            t.about_highlight_label
        );

        setText(
            about.querySelector(
                ".about-highlight h3"
            ),
            t.about_highlight
        );

    }


    /* =====================================================
       WHY BESHA
    ===================================================== */

    const problem =
        document.querySelector(".problem-section");

    if (problem) {

        setText(
            problem.querySelector(".section-label"),
            t.why_label
        );

        setHTML(
            problem.querySelector("h2"),
            t.why_title
        );

        setText(
            problem.querySelector(".section-heading p"),
            t.why_text
        );


        const cards =
            problem.querySelectorAll(
                ".problem-card, .solution-card"
            );


        if (cards[0]) {

            setText(
                cards[0].querySelector("h3"),
                t.why_card1_title
            );

            setText(
                cards[0].querySelector("p"),
                t.why_card1_text
            );

        }


        if (cards[1]) {

            setText(
                cards[1].querySelector("h3"),
                t.why_solution_title
            );

            setText(
                cards[1].querySelector("p"),
                t.why_solution_text
            );

        }


        if (cards[2]) {

            setText(
                cards[2].querySelector("h3"),
                t.why_card2_title
            );

            setText(
                cards[2].querySelector("p"),
                t.why_card2_text
            );

        }

    }


    /* =====================================================
       SERVICES
    ===================================================== */

    const services =
        document.querySelector("#services");

    if (services) {

        setText(
            services.querySelector(".section-label"),
            t.services_label
        );

        setHTML(
            services.querySelector("h2"),
            t.services_title
        );

        setText(
            services.querySelector(".section-heading p"),
            t.services_text
        );


        const serviceCards =
            services.querySelectorAll(
                ".service-card"
            );


        if (serviceCards[0]) {

            setText(
                serviceCards[0].querySelector("h3"),
                t.service1_title
            );

            setText(
                serviceCards[0].querySelector("p"),
                t.service1_text
            );

        }


        if (serviceCards[1]) {

            setText(
                serviceCards[1].querySelector("h3"),
                t.service2_title
            );

            setText(
                serviceCards[1].querySelector("p"),
                t.service2_text
            );

        }


        if (serviceCards[2]) {

            setText(
                serviceCards[2].querySelector("h3"),
                t.service3_title
            );

            setText(
                serviceCards[2].querySelector("p"),
                t.service3_text
            );

        }

    }


    /* =====================================================
       AUDIENCE
    ===================================================== */

    const audience =
        document.querySelector(".audience");

    if (audience) {

        setText(
            audience.querySelector(".section-label"),
            t.audience_label
        );

        setText(
            audience.querySelector("h2"),
            t.audience_title
        );

        setText(
            audience.querySelector(
                ".section-heading p"
            ),
            t.audience_text
        );


        const cards =
            audience.querySelectorAll(
                ".audience-card"
            );


        if (cards[0]) {

            setText(
                cards[0].querySelector("h3"),
                t.audience1_title
            );

            setText(
                cards[0].querySelector("p"),
                t.audience1_text
            );

        }


        if (cards[1]) {

            setText(
                cards[1].querySelector("h3"),
                t.audience2_title
            );

            setText(
                cards[1].querySelector("p"),
                t.audience2_text
            );

        }

    }


    /* =====================================================
       APPROACH
    ===================================================== */

    const approach =
        document.querySelector("#approach");

    if (approach) {

        setText(
            approach.querySelector(".section-label"),
            t.approach_label
        );

        setHTML(
            approach.querySelector("h2"),
            t.approach_title
        );


        const processes =
            approach.querySelectorAll(
                ".process-item"
            );


        if (processes[0]) {

            setText(
                processes[0].querySelector("h3"),
                t.process1_title
            );

            setText(
                processes[0].querySelector("p"),
                t.process1_text
            );

        }


        if (processes[1]) {

            setText(
                processes[1].querySelector("h3"),
                t.process2_title
            );

            setText(
                processes[1].querySelector("p"),
                t.process2_text
            );

        }


        if (processes[2]) {

            setText(
                processes[2].querySelector("h3"),
                t.process3_title
            );

            setText(
                processes[2].querySelector("p"),
                t.process3_text
            );

        }


        if (processes[3]) {

            setText(
                processes[3].querySelector("h3"),
                t.process4_title
            );

            setText(
                processes[3].querySelector("p"),
                t.process4_text
            );

        }

    }


    /* =====================================================
       VALUES
    ===================================================== */

    const values =
        document.querySelector("#values");

    if (values) {

        setText(
            values.querySelector(".section-label"),
            t.values_label
        );

        setText(
            values.querySelector("h2"),
            t.values_title
        );


        const valueCards =
            values.querySelectorAll(
                ".value"
            );


        if (valueCards[0]) {

            setText(
                valueCards[0].querySelector("h3"),
                t.value1_title
            );

            setText(
                valueCards[0].querySelector("p"),
                t.value1_text
            );

        }


        if (valueCards[1]) {

            setText(
                valueCards[1].querySelector("h3"),
                t.value2_title
            );

            setText(
                valueCards[1].querySelector("p"),
                t.value2_text
            );

        }


        if (valueCards[2]) {

            setText(
                valueCards[2].querySelector("h3"),
                t.value3_title
            );

            setText(
                valueCards[2].querySelector("p"),
                t.value3_text
            );

        }


        if (valueCards[3]) {

            setText(
                valueCards[3].querySelector("h3"),
                t.value4_title
            );

            setText(
                valueCards[3].querySelector("p"),
                t.value4_text
            );

        }

    }


    /* =====================================================
       TEAM
    ===================================================== */

    const team =
        document.querySelector("#team");

    if (team) {

        setText(
            team.querySelector(".section-label"),
            t.team_label
        );

        setText(
            team.querySelector("h2"),
            t.team_title
        );

        setText(
            team.querySelector(".section-heading p"),
            t.team_text
        );


        const personCards =
            team.querySelectorAll(
                ".person-card"
            );


        if (personCards[0]) {

            setText(
                personCards[0].querySelector(".person-role"),
                t.director_role
            );

            setText(
                personCards[0].querySelector("h3"),
                t.person_name
            );

            setText(
                personCards[0].querySelector(".person-more"),
                t.person_more
            );

        }


        if (personCards[1]) {

            setText(
                personCards[1].querySelector(".person-role"),
                t.manager_role
            );

            setText(
                personCards[1].querySelector("h3"),
                t.person_name
            );

            setText(
                personCards[1].querySelector(".person-more"),
                t.person_more
            );

        }

    }


    /* =====================================================
       FUTURE
    ===================================================== */

    const future =
        document.querySelector(".future");

    if (future) {

        setText(
            future.querySelector("span"),
            t.future_label
        );

        setHTML(
            future.querySelector("h2"),
            t.future_title
        );

        setText(
            future.querySelector("p"),
            t.future_text
        );

    }


    /* =====================================================
       CONTACT
    ===================================================== */

    const contact =
        document.querySelector("#contact");

    if (contact) {

        setText(
            contact.querySelector(".section-label"),
            t.contact_label
        );

        setText(
            contact.querySelector("h2"),
            t.contact_title
        );

        setText(
            contact.querySelector("p"),
            t.contact_text
        );


        const buttons =
            contact.querySelectorAll(
                ".contact-actions a"
            );


        if (buttons[0]) {

            setText(
                buttons[0].querySelector("span"),
                t.telegram
            );

        }


        if (buttons[1]) {

            setText(
                buttons[1].querySelector("span"),
                t.instagram
            );

        }


        if (buttons[2]) {

            setText(
                buttons[2].querySelector("span"),
                t.phone
            );

        }

    }


    /* =====================================================
       FOOTER
    ===================================================== */

    const footer =
        document.querySelector("footer");

    if (footer) {

        const footerMain =
            footer.querySelector(".footer");


        if (footerMain) {

            const firstBlock =
                footerMain.children[0];

            if (firstBlock) {

                setText(
                    firstBlock.querySelector("p"),
                    t.footer_text
                );

            }


            const links =
                footerMain.querySelectorAll(
                    ".footer-links a"
                );


            if (links[0]) {
                setText(
                    links[0],
                    t.footer_about
                );
            }


            if (links[1]) {
                setText(
                    links[1],
                    t.footer_services
                );
            }


            if (links[2]) {
                setText(
                    links[2],
                    t.footer_contact
                );
            }


            const topLink =
                footerMain.querySelector(
                    ':scope > a:last-child'
                );


            if (topLink) {
                setText(
                    topLink,
                    t.footer_top
                );
            }

        }


        setText(
            footer.querySelector(".copyright"),
            t.copyright
        );

    }


    /* =====================================================
       CLOSE DROPDOWN
    ===================================================== */

    const languageDropdown =
        document.getElementById(
            "languageDropdown"
        );

    const languageButton =
        document.getElementById(
            "languageButton"
        );


    if (languageDropdown) {

        languageDropdown.classList.remove("show");

    }


    if (languageButton) {

        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}



/* =========================================================
   HELPER — TEXT
========================================================= */

function setText(elements, value) {

    if (!elements) return;


    if (
        NodeList.prototype.isPrototypeOf(elements) ||
        HTMLCollection.prototype.isPrototypeOf(elements)
    ) {

        const values =
            Array.isArray(value)
                ? value
                : [value];


        elements.forEach((element, index) => {

            if (!element) return;

            if (values[index] !== undefined) {

                element.textContent =
                    values[index];

            }

        });

    } else {

        elements.textContent =
            value;

    }

}



/* =========================================================
   HELPER — HTML
========================================================= */

function setHTML(element, value) {

    if (!element) return;

    element.innerHTML = value;

}



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
        document.getElementById(
            "personModal"
        );

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


    modal.classList.add("active");

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


    modal.classList.remove("active");

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
