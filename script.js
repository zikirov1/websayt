/* ============================================================
   BESHA GROUP
   MAIN JAVASCRIPT
   VERSION 3.0
   UZ / EN / RU LANGUAGE SYSTEM
============================================================ */


/* ============================================================
   TRANSLATIONS
============================================================ */

const translations = {

    uz: {

        /* HEADER */
        nav_about: "Biz haqimizda",
        nav_services: "Faoliyatimiz",
        nav_approach: "Yondashuv",
        nav_values: "Qadriyatlar",
        nav_team: "Rahbariyat",
        nav_contact: "Bog‘lanish",
        contact_button: "Bog‘lanish",
        menu_label: "Menyu",

        /* HERO */
        hero_tag: "BESHA GROUP",
        hero_title: "Insonlar va imkoniyatlarni bog‘laymiz.",
        hero_text:
            "Korxonalar uchun ishchi kuchiga bo‘lgan ehtiyojni qondirish jarayonini samarali tashkil etishga ko‘maklashamiz.",
        hero_about: "Biz haqimizda",
        hero_contact: "Biz bilan bog‘laning",

        /* ABOUT */
        about_label: "BIZ KIMMIZ?",
        about_title: "Korxonalar uchun ishonchli yechim.",
        about_text_1:
            "Besha Group korxonalar va tashkilotlarning ishchi kuchiga bo‘lgan ehtiyojini qondirish jarayonini tashkil etishga ixtisoslashgan kompaniya sifatida faoliyat yuritadi.",
        about_text_2:
            "Biz ish beruvchilarning talablarini o‘rganish, zarur ishchi kuchini shakllantirish va ishga qabul qilish jarayonlarini samarali tashkil etishga ko‘maklashamiz.",
        about_goal: "ASOSIY MAQSADIMIZ",
        about_goal_title:
            "Korxonalar uchun kerakli ishchi kuchini samarali tashkil etishga ko‘maklashish.",

        /* PROBLEM */
        problem_label: "BIZGA NIMA UCHUN MUROJAAT QILISHADI?",
        problem_title:
            "Ishchi kuchi masalasida aniq va amaliy yondashuv.",
        problem_text:
            "Korxonalarda ishchi kuchiga bo‘lgan ehtiyoj turlicha bo‘lishi mumkin. Biz har bir murojaatni korxonaning real ehtiyojidan kelib chiqib ko‘rib chiqamiz.",

        problem_1_title: "Ishchi kuchiga ehtiyoj",
        problem_1_text:
            "Ishlab chiqarish yoki boshqa faoliyat yo‘nalishlarida qo‘shimcha ishchi kuchiga ehtiyoj sezayotgan korxonalar biz bilan bog‘lanishlari mumkin.",

        solution_title: "Bizning yondashuv",
        solution_text:
            "Avvalo korxonaning talablarini, ish sharoitlarini va zarur ishchi kuchi parametrlarini tushunamiz. Shundan so‘ng tegishli jarayonni tashkil etishga kirishamiz.",

        problem_2_title: "Jarayonni yengillashtirish",
        problem_2_text:
            "Maqsadimiz — korxona uchun ishchi kuchini izlash va ishga qabul qilish bilan bog‘liq jarayonlarni imkon qadar tartibli va samarali tashkil etishga ko‘maklashish.",

        /* SERVICES */
        services_label: "FAOLIYATIMIZ",
        services_title: "Korxonalar uchun nimalar qilamiz?",
        services_text:
            "Bizning faoliyatimiz ish beruvchining ehtiyojini tushunishdan boshlab, zarur ishchi kuchini tashkil etish jarayonigacha bo‘lgan bosqichlarni qamrab oladi.",

        service_1_title: "Ehtiyojni o‘rganish",
        service_1_text:
            "Korxonaning ishchi kuchiga bo‘lgan ehtiyoji, talab qilinadigan yo‘nalish, ish sharoitlari va boshqa muhim mezonlarini o‘rganamiz.",

        service_2_title: "Ishchi kuchini tashkil etish",
        service_2_text:
            "Belgilangan talablar asosida zarur ishchi kuchini shakllantirish va tegishli jarayonlarni tashkil etishga ko‘maklashamiz.",

        service_3_title: "Hamkorlikni muvofiqlashtirish",
        service_3_text:
            "Ish beruvchi bilan doimiy muloqot qilib, kelishilgan talablar va jarayonlarning bajarilishini muvofiqlashtirishga yordam beramiz.",

        /* AUDIENCE */
        audience_label: "KIMLAR BILAN ISHLAYMIZ?",
        audience_title: "Ish beruvchilar uchun amaliy yechimlar.",
        audience_text:
            "Bizning asosiy yo‘nalishimiz — ishchi kuchiga ehtiyoj sezayotgan korxonalar bilan ishlash.",

        audience_1_title: "Ishlab chiqarish korxonalari",
        audience_1_text:
            "Ishlab chiqarish jarayonlarida ishchi kuchiga ehtiyoj sezayotgan zavod va korxonalar.",

        audience_2_title: "Yirik tashkilotlar",
        audience_2_text:
            "Doimiy yoki ma'lum davr uchun qo‘shimcha ishchi kuchiga ehtiyoj sezayotgan tashkilotlar.",

        /* APPROACH */
        approach_label: "YONDASHUVIMIZ",
        approach_title:
            "Har bir korxona uchun alohida yondashuv.",

        process_1_title: "Ehtiyojni tushunamiz",
        process_1_text:
            "Korxona tomonidan qo‘yilgan talablar va ehtiyojlarni batafsil o‘rganamiz.",

        process_2_title: "Talablarni aniqlaymiz",
        process_2_text:
            "Lavozim, ish sharoiti, ish vaqti va boshqa muhim mezonlarni aniqlashtiramiz.",

        process_3_title: "Jarayonni tashkil qilamiz",
        process_3_text:
            "Kelishilgan talablar asosida zarur ishchi kuchini tashkil etish jarayonini amalga oshiramiz.",

        process_4_title: "Muloqotni davom ettiramiz",
        process_4_text:
            "Hamkorlik davomida ish beruvchi bilan muntazam aloqada bo‘lib, zarur masalalarni muvofiqlashtiramiz.",

        /* VALUES */
        values_label: "QADRIYATLARIMIZ",
        values_title: "Ishonch asosidagi hamkorlik.",

        value_1_title: "Ishonch",
        value_1_text:
            "Biznes hamkorlikda ishonch va o‘zaro hurmatni asosiy tamoyillardan biri deb bilamiz.",

        value_2_title: "Mas'uliyat",
        value_2_text:
            "Kelishilgan vazifalar va majburiyatlarga mas'uliyat bilan yondashamiz.",

        value_3_title: "Aniqlik",
        value_3_text:
            "Talablar, shartlar va jarayonlar bo‘yicha imkon qadar aniq va tushunarli muloqotni ta'minlaymiz.",

        value_4_title: "Rivojlanish",
        value_4_text:
            "Faoliyatimizni takomillashtirish va korxonalar uchun yanada samarali yechimlar yaratishga intilamiz.",

        /* TEAM */
        team_label: "RAHBARIYAT",
        team_title: "Besha Group rahbariyati.",
        team_text:
            "Rahbariyat haqida ma'lumot olish uchun tegishli kartani tanlang.",

        director_role: "DIREKTOR",
        director_name: "Ism Familiya",
        manager_role: "MENEJER",
        manager_name: "Ism Familiya",

        person_more: "Batafsil →",

        /* FUTURE */
        future_label: "KELAJAKKA QARASH",
        future_title_1: "Ishonchli hamkorlikdan",
        future_title_2: "barqaror natijalar sari.",
        future_text:
            "Besha Group korxonalar uchun ishchi kuchini tashkil etish jarayonlarini yanada samarali, tizimli va qulay qilish yo‘lida rivojlanib boradi.",

        /* CONTACT */
        contact_label: "BIZ BILAN BOG‘LANING",
        contact_title: "Korxonangiz uchun ishchi kuchi kerakmi?",
        contact_text:
            "Biz bilan telefon, Telegram yoki Instagram orqali bog‘lanishingiz mumkin. Murojaatingizni ko‘rib chiqamiz va keyingi hamkorlik masalalarini bevosita muhokama qilamiz.",

        telegram_button: "Telegram orqali yozish",
        instagram_button: "Instagram orqali yozish",
        phone_button: "Telefon orqali bog‘lanish",

        /* MODAL */
        modal_close: "Yopish",
        modal_position: "Lavozimi",

        director_position: "Direktor",
        director_modal_text:
            "Besha Group faoliyatining strategik yo‘nalishlarini belgilaydi, kompaniyaning rivojlanishi va hamkorlar bilan munosabatlarini boshqaradi.",

        manager_position: "Menejer",
        manager_modal_text:
            "Hamkorlar bilan kundalik muloqotni tashkil etish, murojaatlarni ko‘rib chiqish va ish jarayonlarini muvofiqlashtirish bilan shug‘ullanadi.",

        /* FOOTER */
        footer_text: "Insonlar va imkoniyatlarni bog‘laymiz.",
        footer_up: "↑ Yuqoriga",
        copyright: "© 2026 BESHA GROUP. Barcha huquqlar himoyalangan."

    },


    en: {

        /* HEADER */
        nav_about: "About us",
        nav_services: "Our activities",
        nav_approach: "Our approach",
        nav_values: "Our values",
        nav_team: "Management",
        nav_contact: "Contact",
        contact_button: "Contact",
        menu_label: "Menu",

        /* HERO */
        hero_tag: "BESHA GROUP",
        hero_title: "Connecting people and opportunities.",
        hero_text:
            "We help companies effectively organize the process of meeting their workforce needs.",
        hero_about: "About us",
        hero_contact: "Contact us",

        /* ABOUT */
        about_label: "WHO ARE WE?",
        about_title: "A reliable solution for companies.",
        about_text_1:
            "Besha Group specializes in helping companies and organizations organize the process of meeting their workforce needs.",
        about_text_2:
            "We study employers' requirements, help form the necessary workforce and organize recruitment processes effectively.",
        about_goal: "OUR MAIN GOAL",
        about_goal_title:
            "To help companies effectively organize the workforce they need.",

        /* PROBLEM */
        problem_label: "WHY DO COMPANIES CONTACT US?",
        problem_title:
            "A clear and practical approach to workforce needs.",
        problem_text:
            "Companies may have different workforce requirements. We consider each request based on the company's actual needs.",

        problem_1_title: "Workforce needs",
        problem_1_text:
            "Companies that need additional workforce for production or other activities can contact us.",

        solution_title: "Our approach",
        solution_text:
            "First, we understand the company's requirements, working conditions and necessary workforce parameters. Then we organize the relevant process.",

        problem_2_title: "Making the process easier",
        problem_2_text:
            "Our goal is to help companies organize workforce search and recruitment processes in an orderly and efficient way.",

        /* SERVICES */
        services_label: "OUR ACTIVITIES",
        services_title: "What do we do for companies?",
        services_text:
            "Our activities cover the stages from understanding the employer's needs to organizing the necessary workforce.",

        service_1_title: "Understanding the need",
        service_1_text:
            "We study the company's workforce needs, required field, working conditions and other important criteria.",

        service_2_title: "Organizing the workforce",
        service_2_text:
            "Based on defined requirements, we help form the necessary workforce and organize the relevant processes.",

        service_3_title: "Coordinating cooperation",
        service_3_text:
            "We maintain communication with the employer and help coordinate agreed requirements and processes.",

        /* AUDIENCE */
        audience_label: "WHO DO WE WORK WITH?",
        audience_title: "Practical solutions for employers.",
        audience_text:
            "Our main focus is working with companies that need additional workforce.",

        audience_1_title: "Manufacturing companies",
        audience_1_text:
            "Factories and companies that need workforce for their production processes.",

        audience_2_title: "Large organizations",
        audience_2_text:
            "Organizations that need additional workforce permanently or for a specific period.",

        /* APPROACH */
        approach_label: "OUR APPROACH",
        approach_title:
            "An individual approach for every company.",

        process_1_title: "We understand the need",
        process_1_text:
            "We carefully study the requirements and needs set by the company.",

        process_2_title: "We identify requirements",
        process_2_text:
            "We clarify the position, working conditions, working hours and other important criteria.",

        process_3_title: "We organize the process",
        process_3_text:
            "We organize the necessary workforce process based on the agreed requirements.",

        process_4_title: "We maintain communication",
        process_4_text:
            "Throughout the cooperation, we stay in regular contact with the employer and coordinate necessary matters.",

        /* VALUES */
        values_label: "OUR VALUES",
        values_title: "Partnership built on trust.",

        value_1_title: "Trust",
        value_1_text:
            "We consider trust and mutual respect to be fundamental principles of business cooperation.",

        value_2_title: "Responsibility",
        value_2_text:
            "We approach agreed tasks and responsibilities with accountability.",

        value_3_title: "Clarity",
        value_3_text:
            "We strive to ensure clear and understandable communication regarding requirements, conditions and processes.",

        value_4_title: "Development",
        value_4_text:
            "We continuously improve our activities and strive to create more effective solutions for companies.",

        /* TEAM */
        team_label: "MANAGEMENT",
        team_title: "Besha Group management.",
        team_text:
            "Select a card to learn more about the management.",

        director_role: "DIRECTOR",
        director_name: "Name Surname",
        manager_role: "MANAGER",
        manager_name: "Name Surname",

        person_more: "Details →",

        /* FUTURE */
        future_label: "LOOKING AHEAD",
        future_title_1: "From trusted partnerships",
        future_title_2: "to sustainable results.",
        future_text:
            "Besha Group continues to develop more efficient, systematic and convenient workforce organization processes for companies.",

        /* CONTACT */
        contact_label: "CONTACT US",
        contact_title: "Does your company need workforce?",
        contact_text:
            "You can contact us by phone, Telegram or Instagram. We will review your request and discuss further cooperation directly.",

        telegram_button: "Write via Telegram",
        instagram_button: "Write via Instagram",
        phone_button: "Contact by phone",

        /* MODAL */
        modal_close: "Close",
        modal_position: "Position",

        director_position: "Director",
        director_modal_text:
            "Defines the strategic direction of Besha Group, manages company development and relationships with partners.",

        manager_position: "Manager",
        manager_modal_text:
            "Handles daily communication with partners, reviews requests and coordinates work processes.",

        /* FOOTER */
        footer_text: "Connecting people and opportunities.",
        footer_up: "↑ Back to top",
        copyright: "© 2026 BESHA GROUP. All rights reserved."

    },


    ru: {

        /* HEADER */
        nav_about: "О нас",
        nav_services: "Деятельность",
        nav_approach: "Наш подход",
        nav_values: "Ценности",
        nav_team: "Руководство",
        nav_contact: "Контакты",
        contact_button: "Связаться",
        menu_label: "Меню",

        /* HERO */
        hero_tag: "BESHA GROUP",
        hero_title: "Соединяем людей и возможности.",
        hero_text:
            "Мы помогаем компаниям эффективно организовать процесс обеспечения необходимой рабочей силой.",
        hero_about: "О нас",
        hero_contact: "Связаться с нами",

        /* ABOUT */
        about_label: "КТО МЫ?",
        about_title: "Надёжное решение для компаний.",
        about_text_1:
            "Besha Group специализируется на организации процессов обеспечения предприятий и организаций необходимой рабочей силой.",
        about_text_2:
            "Мы изучаем требования работодателей, помогаем сформировать необходимую рабочую силу и эффективно организовать процессы найма.",
        about_goal: "НАША ГЛАВНАЯ ЦЕЛЬ",
        about_goal_title:
            "Помогать компаниям эффективно организовывать необходимую рабочую силу.",

        /* PROBLEM */
        problem_label: "ПОЧЕМУ К НАМ ОБРАЩАЮТСЯ?",
        problem_title:
            "Чёткий и практичный подход к вопросам рабочей силы.",
        problem_text:
            "Потребности компаний в рабочей силе могут различаться. Мы рассматриваем каждый запрос исходя из реальных потребностей компании.",

        problem_1_title: "Потребность в рабочей силе",
        problem_1_text:
            "Компании, которым необходимы дополнительные сотрудники для производства или других направлений деятельности, могут обратиться к нам.",

        solution_title: "Наш подход",
        solution_text:
            "Сначала мы изучаем требования компании, условия работы и необходимые параметры рабочей силы. После этого организуем соответствующий процесс.",

        problem_2_title: "Упрощение процесса",
        problem_2_text:
            "Наша цель — помочь компании организовать поиск и найм работников максимально системно и эффективно.",

        /* SERVICES */
        services_label: "НАША ДЕЯТЕЛЬНОСТЬ",
        services_title: "Что мы делаем для компаний?",
        services_text:
            "Наша деятельность охватывает этапы от понимания потребностей работодателя до организации необходимой рабочей силы.",

        service_1_title: "Изучение потребностей",
        service_1_text:
            "Мы изучаем потребность компании в рабочей силе, необходимое направление, условия работы и другие важные критерии.",

        service_2_title: "Организация рабочей силы",
        service_2_text:
            "На основе определённых требований мы помогаем сформировать необходимую рабочую силу и организовать соответствующие процессы.",

        service_3_title: "Координация сотрудничества",
        service_3_text:
            "Мы поддерживаем постоянную связь с работодателем и помогаем координировать согласованные требования и процессы.",

        /* AUDIENCE */
        audience_label: "С КЕМ МЫ РАБОТАЕМ?",
        audience_title: "Практические решения для работодателей.",
        audience_text:
            "Наше основное направление — работа с компаниями, испытывающими потребность в рабочей силе.",

        audience_1_title: "Производственные предприятия",
        audience_1_text:
            "Заводы и предприятия, которым необходима рабочая сила для производственных процессов.",

        audience_2_title: "Крупные организации",
        audience_2_text:
            "Организации, которым необходимы дополнительные сотрудники на постоянной основе или на определённый период.",

        /* APPROACH */
        approach_label: "НАШ ПОДХОД",
        approach_title:
            "Индивидуальный подход к каждой компании.",

        process_1_title: "Изучаем потребность",
        process_1_text:
            "Мы подробно изучаем требования и потребности, установленные компанией.",

        process_2_title: "Определяем требования",
        process_2_text:
            "Уточняем должность, условия труда, рабочее время и другие важные критерии.",

        process_3_title: "Организуем процесс",
        process_3_text:
            "На основе согласованных требований организуем процесс обеспечения необходимой рабочей силой.",

        process_4_title: "Поддерживаем связь",
        process_4_text:
            "В процессе сотрудничества мы поддерживаем постоянную связь с работодателем и координируем необходимые вопросы.",

        /* VALUES */
        values_label: "НАШИ ЦЕННОСТИ",
        values_title: "Сотрудничество, основанное на доверии.",

        value_1_title: "Доверие",
        value_1_text:
            "Мы считаем доверие и взаимное уважение основными принципами делового сотрудничества.",

        value_2_title: "Ответственность",
        value_2_text:
            "Мы ответственно относимся к согласованным задачам и обязательствам.",

        value_3_title: "Точность",
        value_3_text:
            "Мы стремимся обеспечить максимально точную и понятную коммуникацию по требованиям, условиям и процессам.",

        value_4_title: "Развитие",
        value_4_text:
            "Мы постоянно совершенствуем свою деятельность и стремимся создавать более эффективные решения для компаний.",

        /* TEAM */
        team_label: "РУКОВОДСТВО",
        team_title: "Руководство Besha Group.",
        team_text:
            "Выберите соответствующую карточку, чтобы узнать больше о руководстве.",

        director_role: "ДИРЕКТОР",
        director_name: "Имя Фамилия",
        manager_role: "МЕНЕДЖЕР",
        manager_name: "Имя Фамилия",

        person_more: "Подробнее →",

        /* FUTURE */
        future_label: "ВЗГЛЯД В БУДУЩЕЕ",
        future_title_1: "От надёжного сотрудничества",
        future_title_2: "к устойчивым результатам.",
        future_text:
            "Besha Group продолжает развивать более эффективные, системные и удобные процессы организации рабочей силы для компаний.",

        /* CONTACT */
        contact_label: "СВЯЖИТЕСЬ С НАМИ",
        contact_title: "Вашей компании нужна рабочая сила?",
        contact_text:
            "Вы можете связаться с нами по телефону, через Telegram или Instagram. Мы рассмотрим ваше обращение и напрямую обсудим дальнейшее сотрудничество.",

        telegram_button: "Написать в Telegram",
        instagram_button: "Написать в Instagram",
        phone_button: "Связаться по телефону",

        /* MODAL */
        modal_close: "Закрыть",
        modal_position: "Должность",

        director_position: "Директор",
        director_modal_text:
            "Определяет стратегические направления деятельности Besha Group, управляет развитием компании и отношениями с партнёрами.",

        manager_position: "Менеджер",
        manager_modal_text:
            "Организует ежедневное взаимодействие с партнёрами, рассматривает обращения и координирует рабочие процессы.",

        /* FOOTER */
        footer_text: "Соединяем людей и возможности.",
        footer_up: "↑ Наверх",
        copyright: "© 2026 BESHA GROUP. Все права защищены."

    }

};


/* ============================================================
   CURRENT LANGUAGE
============================================================ */

let currentLang =
    localStorage.getItem("besha-language") || "uz";


if (!translations[currentLang]) {

    currentLang = "uz";

}


/* ============================================================
   DOM READY
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initIntro();

    initHeader();

    initMobileMenu();

    initLanguageMenu();

    applyLanguage(currentLang);

    initRevealAnimations();

    initActiveNavigation();

    initPersonModal();

    initTelegramLinks();

    initInstagramLinks();

    initPhoneLinks();

    initExternalLinks();

    initButtonEffect();

});


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

function initLanguageMenu() {

    const languageSelector =
        document.querySelector(".language-selector");

    if (!languageSelector) return;

    const languageButton =
        languageSelector.querySelector(".language-current");

    const dropdown =
        languageSelector.querySelector(".language-dropdown");

    if (!languageButton || !dropdown) return;


    // Boshlanishida yopiq
    dropdown.classList.remove("open");
    languageButton.classList.remove("open");
    languageButton.setAttribute("aria-expanded", "false");


    // Til tugmasi
    languageButton.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen =
            dropdown.classList.contains("open");


        // Avval barcha til menyularini yopamiz
        document
            .querySelectorAll(".language-dropdown")
            .forEach(function (item) {
                item.classList.remove("open");
            });

        document
            .querySelectorAll(".language-current")
            .forEach(function (button) {
                button.classList.remove("open");
                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });


        // Agar yopiq bo'lsa ochamiz
        if (!isOpen) {

            dropdown.classList.add("open");

            languageButton.classList.add("open");

            languageButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });


    // Til tanlash
    const languageOptions =
        dropdown.querySelectorAll("[data-lang]");


    languageOptions.forEach(function (option) {

        option.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const language =
                option.getAttribute("data-lang");


            setLanguage(language);


            // ENG MUHIM QISM:
            // til tanlangandan keyin menyuni yopadi
            dropdown.classList.remove("open");

            languageButton.classList.remove("open");

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // Tashqariga bosilganda yopish
    document.addEventListener("click", function (event) {

        if (!languageSelector.contains(event.target)) {

            dropdown.classList.remove("open");

            languageButton.classList.remove("open");

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}
    languageButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                dropdown.classList.contains("open");


            closeAllLanguageDropdowns();


            if (!isOpen) {

                dropdown.classList.add("open");

                languageButton.classList.add("open");

                languageButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );


const options = dropdown.querySelectorAll("[data-lang]");

options.forEach(function (option) {

    option.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const language =
            option.getAttribute("data-lang");

        if (!language) return;

        // Tilni saqlash
        localStorage.setItem(
            "besha-language",
            language
        );

        // Tugmadagi tilni almashtirish
        updateLanguageButton(language);

        // Tanlangan tilni active qilish
        options.forEach(function (item) {
            item.classList.remove("active");
        });

        option.classList.add("active");

        // MENYUNI YOPISH
        dropdown.classList.remove("open");

        // TUGMANING OPEN HOLATINI HAM O'CHIRISH
        languageButton.classList.remove("open");

        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


    document.addEventListener(
        "click",
        (event) => {

            if (
                !languageSelector.contains(
                    event.target
                )
            ) {

                closeLanguageDropdown();

            }

        }
    );

}


function setLanguage(language) {

    const allowedLanguages = [
        "uz",
        "en",
        "ru"
    ];


    if (!allowedLanguages.includes(language)) {

        language = "uz";

    }


    // Tanlangan tilni saqlash
    localStorage.setItem(
        "besha-language",
        language
    );


    // Tugmadagi tilni o'zgartirish
    const currentLanguage =
        document.querySelector(".language-current");


    if (currentLanguage) {

        const labels = {

            uz: "UZ",

            en: "EN",

            ru: "RU"

        };


        currentLanguage.textContent =
            labels[language];


        currentLanguage.classList.remove("open");

        currentLanguage.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    // Dropdownni majburan yopish
    document
        .querySelectorAll(".language-dropdown")
        .forEach(function (dropdown) {

            dropdown.classList.remove("open");

        });


    // Barcha language buttonlarni yopish
    document
        .querySelectorAll(".language-current")
        .forEach(function (button) {

            button.classList.remove("open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        });


    // Active tilni belgilash
    document
        .querySelectorAll("[data-lang]")
        .forEach(function (option) {

            option.classList.remove("active");

            if (
                option.getAttribute("data-lang") ===
                language
            ) {

                option.classList.add("active");

            }

        });


    console.log(
        "BESHA GROUP: tanlangan til ->",
        language
    );

}

function applyLanguage(language) {

    const lang =
        translations[language] ||
        translations.uz;


    document.documentElement.lang =
        language;


    /* ========================================================
       ELEMENTS BY DATA-I18N
    ======================================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                Object.prototype.hasOwnProperty.call(
                    lang,
                    key
                )
            ) {

                element.textContent =
                    lang[key];

            }

        });


    updateLanguageButton(language);

    updateLanguageOptions(language);

    updatePageTitle(language);

    updateModalLanguage(language);

}


function updateLanguageButton(language) {

    const currentLanguage =
        document.getElementById(
            "currentLanguage"
        );


    if (!currentLanguage) return;


    const labels = {

        uz: "UZ",

        en: "EN",

        ru: "RU"

    };


    currentLanguage.textContent =
        labels[language] || "UZ";

}


function updateLanguageOptions(language) {

    document
        .querySelectorAll(
            ".language-option[data-lang]"
        )
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.lang === language
            );

        });

}


function updatePageTitle(language) {

    const titles = {

        uz:
            "Besha Group — Insonlar va imkoniyatlarni bog‘laymiz",

        en:
            "Besha Group — Connecting people and opportunities",

        ru:
            "Besha Group — Соединяем людей и возможности"

    };


    document.title =
        titles[language] || titles.uz;

}


function closeLanguageDropdown() {

    document
        .querySelectorAll(
            ".language-dropdown.open"
        )
        .forEach(dropdown => {

            dropdown.classList.remove(
                "open"
            );

        });


    const button =
        document.getElementById(
            "languageButton"
        );


    if (button) {

        button.classList.remove(
            "open"
        );

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


function closeAllLanguageDropdowns() {

    closeLanguageDropdown();

}


/* ============================================================
   APPLY TRANSLATIONS TO CURRENT HTML
============================================================ */

function prepareTranslations() {

    /*
        HEADER
    */

    const menuLinks =
        document.querySelectorAll(
            ".menu a"
        );


    if (menuLinks.length >= 6) {

        menuLinks[0].dataset.i18n =
            "nav_about";

        menuLinks[1].dataset.i18n =
            "nav_services";

        menuLinks[2].dataset.i18n =
            "nav_approach";

        menuLinks[3].dataset.i18n =
            "nav_values";

        menuLinks[4].dataset.i18n =
            "nav_team";

        menuLinks[5].dataset.i18n =
            "nav_contact";

    }


    const navButton =
        document.querySelector(
            ".nav-btn"
        );

    if (navButton) {

        navButton.dataset.i18n =
            "contact_button";

    }


    const menuButton =
        document.querySelector(
            ".menu-btn"
        );

    if (menuButton) {

        menuButton.setAttribute(
            "aria-label",
            translations[currentLang].menu_label
        );

    }


    /* ========================================================
       HERO
    ======================================================== */

    const heroTag =
        document.querySelector(
            ".hero-tag"
        );

    if (heroTag)
        heroTag.dataset.i18n =
            "hero_tag";


    const heroTitle =
        document.querySelector(
            ".hero h1"
        );

    if (heroTitle) {

        heroTitle.dataset.i18n =
            "hero_title";

    }


    const heroText =
        document.querySelector(
            ".hero p"
        );

    if (heroText)
        heroText.dataset.i18n =
            "hero_text";


    const heroButtons =
        document.querySelectorAll(
            ".hero-actions a"
        );


    if (heroButtons.length >= 2) {

        heroButtons[0].dataset.i18n =
            "hero_about";

        heroButtons[1].dataset.i18n =
            "hero_contact";

    }


    /* ========================================================
       ABOUT
    ======================================================== */

    const about =
        document.getElementById(
            "about"
        );


    if (about) {

        const label =
            about.querySelector(
                ".section-label"
            );

        const h2 =
            about.querySelector(
                ".reveal h2"
            );

        const paragraphs =
            about.querySelectorAll(
                ".reveal > p"
            );

        const goal =
            about.querySelector(
                ".about-highlight > span"
            );

        const goalTitle =
            about.querySelector(
                ".about-highlight h3"
            );


        if (label)
            label.dataset.i18n =
                "about_label";


        if (h2)
            h2.dataset.i18n =
                "about_title";


        if (paragraphs[0])
            paragraphs[0].dataset.i18n =
                "about_text_1";


        if (paragraphs[1])
            paragraphs[1].dataset.i18n =
                "about_text_2";


        if (goal)
            goal.dataset.i18n =
                "about_goal";


        if (goalTitle)
            goalTitle.dataset.i18n =
                "about_goal_title";

    }


    /* ========================================================
       PROBLEM
    ======================================================== */

    const problem =
        document.querySelector(
            ".problem-section"
        );


    if (problem) {

        const label =
            problem.querySelector(
                ".section-label"
            );

        const h2 =
            problem.querySelector(
                ".section-heading h2"
            );

        const intro =
            problem.querySelector(
                ".section-heading p"
            );


        if (label)
            label.dataset.i18n =
                "problem_label";


        if (h2)
            h2.dataset.i18n =
                "problem_title";


        if (intro)
            intro.dataset.i18n =
                "problem_text";


        const cards =
            problem.querySelectorAll(
                ".problem-card, .solution-card"
            );


        if (cards.length >= 3) {

            cards[0]
                .querySelector("h3")
                .dataset.i18n =
                "problem_1_title";

            cards[0]
                .querySelector("p")
                .dataset.i18n =
                "problem_1_text";


            cards[1]
                .querySelector("h3")
                .dataset.i18n =
                "solution_title";

            cards[1]
                .querySelector("p")
                .dataset.i18n =
                "solution_text";


            cards[2]
                .querySelector("h3")
                .dataset.i18n =
                "problem_2_title";

            cards[2]
                .querySelector("p")
                .dataset.i18n =
                "problem_2_text";

        }

    }


    /* ========================================================
       SERVICES
    ======================================================== */

    const services =
        document.getElementById(
            "services"
        );


    if (services) {

        const label =
            services.querySelector(
                ".section-label"
            );

        const h2 =
            services.querySelector(
                ".section-heading h2"
            );

        const intro =
            services.querySelector(
                ".section-heading p"
            );


        if (label)
            label.dataset.i18n =
                "services_label";


        if (h2)
            h2.dataset.i18n =
                "services_title";


        if (intro)
            intro.dataset.i18n =
                "services_text";


        const cards =
            services.querySelectorAll(
                ".service-card"
            );


        cards.forEach((card, index) => {

            const h3 =
                card.querySelector("h3");

            const p =
                card.querySelector("p");


            if (index === 0) {

                if (h3)
                    h3.dataset.i18n =
                        "service_1_title";

                if (p)
                    p.dataset.i18n =
                        "service_1_text";

            }


            if (index === 1) {

                if (h3)
                    h3.dataset.i18n =
                        "service_2_title";

                if (p)
                    p.dataset.i18n =
                        "service_2_text";

            }


            if (index === 2) {

                if (h3)
                    h3.dataset.i18n =
                        "service_3_title";

                if (p)
                    p.dataset.i18n =
                        "service_3_text";

            }

        });

    }


    /* ========================================================
       AUDIENCE
    ======================================================== */

    const audience =
        document.querySelector(
            ".audience"
        );


    if (audience) {

        const label =
            audience.querySelector(
                ".section-label"
            );

        const h2 =
            audience.querySelector(
                ".section-heading h2"
            );

        const intro =
            audience.querySelector(
                ".section-heading p"
            );


        if (label)
            label.dataset.i18n =
                "audience_label";


        if (h2)
            h2.dataset.i18n =
                "audience_title";


        if (intro)
            intro.dataset.i18n =
                "audience_text";


        const cards =
            audience.querySelectorAll(
                ".audience-card"
            );


        if (cards[0]) {

            cards[0]
                .querySelector("h3")
                .dataset.i18n =
                "audience_1_title";

            cards[0]
                .querySelector("p")
                .dataset.i18n =
                "audience_1_text";

        }


        if (cards[1]) {

            cards[1]
                .querySelector("h3")
                .dataset.i18n =
                "audience_2_title";

            cards[1]
                .querySelector("p")
                .dataset.i18n =
                "audience_2_text";

        }

    }


    /* ========================================================
       APPROACH
    ======================================================== */

    const approach =
        document.getElementById(
            "approach"
        );


    if (approach) {

        const label =
            approach.querySelector(
                ".section-label"
            );

        const h2 =
            approach.querySelector(
                ".section-heading h2"
            );


        if (label)
            label.dataset.i18n =
                "approach_label";


        if (h2)
            h2.dataset.i18n =
                "approach_title";


        const items =
            approach.querySelectorAll(
                ".process-item"
            );


        items.forEach((item, index) => {

            const h3 =
                item.querySelector("h3");

            const p =
                item.querySelector("p");


            if (index === 0) {

                h3.dataset.i18n =
                    "process_1_title";

                p.dataset.i18n =
                    "process_1_text";

            }

            if (index === 1) {

                h3.dataset.i18n =
                    "process_2_title";

                p.dataset.i18n =
                    "process_2_text";

            }

            if (index === 2) {

                h3.dataset.i18n =
                    "process_3_title";

                p.dataset.i18n =
                    "process_3_text";

            }

            if (index === 3) {

                h3.dataset.i18n =
                    "process_4_title";

                p.dataset.i18n =
                    "process_4_text";

            }

        });

    }


    /* ========================================================
       VALUES
    ======================================================== */

    const values =
        document.getElementById(
            "values"
        );


    if (values) {

        const label =
            values.querySelector(
                ".section-label"
            );

        const h2 =
            values.querySelector(
                ".section-heading h2"
            );


        if (label)
            label.dataset.i18n =
                "values_label";


        if (h2)
            h2.dataset.i18n =
                "values_title";


        const cards =
            values.querySelectorAll(
                ".value"
            );


        cards.forEach((card, index) => {

            const h3 =
                card.querySelector("h3");

            const p =
                card.querySelector("p");


            if (index === 0) {

                h3.dataset.i18n =
                    "value_1_title";

                p.dataset.i18n =
                    "value_1_text";

            }

            if (index === 1) {

                h3.dataset.i18n =
                    "value_2_title";

                p.dataset.i18n =
                    "value_2_text";

            }

            if (index === 2) {

                h3.dataset.i18n =
                    "value_3_title";

                p.dataset.i18n =
                    "value_3_text";

            }

            if (index === 3) {

                h3.dataset.i18n =
                    "value_4_title";

                p.dataset.i18n =
                    "value_4_text";

            }

        });

    }


    /* ========================================================
       TEAM
    ======================================================== */

    const team =
        document.getElementById(
            "team"
        );


    if (team) {

        const label =
            team.querySelector(
                ".section-label"
            );

        const h2 =
            team.querySelector(
                ".section-heading h2"
            );

        const intro =
            team.querySelector(
                ".section-heading p"
            );


        if (label)
            label.dataset.i18n =
                "team_label";


        if (h2)
            h2.dataset.i18n =
                "team_title";


        if (intro)
            intro.dataset.i18n =
                "team_text";


        const peopleCards =
            team.querySelectorAll(
                ".person-card"
            );


        if (peopleCards[0]) {

            peopleCards[0]
                .querySelector(".person-role")
                .dataset.i18n =
                "director_role";

            peopleCards[0]
                .querySelector("h3")
                .dataset.i18n =
                "director_name";

            peopleCards[0]
                .querySelector(".person-more")
                .dataset.i18n =
                "person_more";

        }


        if (peopleCards[1]) {

            peopleCards[1]
                .querySelector(".person-role")
                .dataset.i18n =
                "manager_role";

            peopleCards[1]
                .querySelector("h3")
                .dataset.i18n =
                "manager_name";

            peopleCards[1]
                .querySelector(".person-more")
                .dataset.i18n =
                "person_more";

        }

    }


    /* ========================================================
       FUTURE
    ======================================================== */

    const future =
        document.querySelector(
            ".future"
        );


    if (future) {

        const label =
            future.querySelector(
                ".future-content > span"
            );

        const title =
            future.querySelector(
                ".future h2"
            );

        const paragraph =
            future.querySelector(
                ".future p"
            );


        if (label)
            label.dataset.i18n =
                "future_label";


        if (title) {

            title.innerHTML = `
                <span data-i18n="future_title_1">
                    ${translations.uz.future_title_1}
                </span>
                <br>
                <strong data-i18n="future_title_2">
                    ${translations.uz.future_title_2}
                </strong>
            `;

        }


        if (paragraph)
            paragraph.dataset.i18n =
                "future_text";

    }


    /* ========================================================
       CONTACT
    ======================================================== */

    const contact =
        document.getElementById(
            "contact"
        );


    if (contact) {

        const label =
            contact.querySelector(
                ".section-label"
            );

        const h2 =
            contact.querySelector(
                ".contact-box h2"
            );

        const p =
            contact.querySelector(
                ".contact-box p"
            );


        if (label)
            label.dataset.i18n =
                "contact_label";


        if (h2)
            h2.dataset.i18n =
                "contact_title";


        if (p)
            p.dataset.i18n =
                "contact_text";


        const buttons =
            contact.querySelectorAll(
                ".contact-actions a"
            );


        if (buttons[0])
            buttons[0].dataset.i18n =
                "telegram_button";


        if (buttons[1])
            buttons[1].dataset.i18n =
                "instagram_button";


        if (buttons[2])
            buttons[2].dataset.i18n =
                "phone_button";

    }


    /* ========================================================
       FOOTER
    ======================================================== */

    const footer =
        document.querySelector(
            "footer"
        );


    if (footer) {

        const footerParagraph =
            footer.querySelector(
                ".footer p"
            );

        const footerLinks =
            footer.querySelectorAll(
                ".footer-links a"
            );

        const footerTop =
            footer.querySelector(
                ".footer > a"
            );

        const copyright =
            footer.querySelector(
                ".copyright"
            );


        if (footerParagraph)
            footerParagraph.dataset.i18n =
                "footer_text";


        if (footerLinks.length >= 3) {

            footerLinks[0].dataset.i18n =
                "nav_about";

            footerLinks[1].dataset.i18n =
                "nav_services";

            footerLinks[2].dataset.i18n =
                "nav_contact";

        }


        if (footerTop)
            footerTop.dataset.i18n =
                "footer_up";


        if (copyright)
            copyright.dataset.i18n =
                "copyright";

    }

}


/* ============================================================
   INTRO
============================================================ */

function initIntro() {

    const intro =
        document.getElementById("intro");


    if (!intro) return;


    const INTRO_DURATION = 1700;


    setTimeout(() => {

        intro.classList.add(
            "intro-hidden"
        );


        setTimeout(() => {

            intro.style.display =
                "none";

        }, 900);

    }, INTRO_DURATION);

}


/* ============================================================
   HEADER
============================================================ */

function initHeader() {

    const header =
        document.querySelector(
            ".header"
        );


    if (!header) return;


    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

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

    const menu =
        document.getElementById(
            "menu"
        );

    const menuButton =
        document.querySelector(
            ".menu-btn"
        );


    if (!menu || !menuButton) return;


    function openMenu() {

        menu.classList.add(
            "open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.innerHTML =
            "×";

    }


    function closeMenu() {

        menu.classList.remove(
            "open"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML =
            "☰";

    }


    menuButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            if (
                menu.classList.contains(
                    "open"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    document.addEventListener(
        "click",
        (event) => {

            if (
                !menu.classList.contains(
                    "open"
                )
            ) {

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


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {

                closeMenu();

            }

        }
    );

}


/* ============================================================
   REVEAL ANIMATION
============================================================ */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) return;


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(
                    entry => {

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

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

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


    if (
        !sections.length ||
        !links.length
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const id =
                            entry.target.id;


                        links.forEach(
                            link => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px",
                threshold: 0
            }
        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );

}


/* ============================================================
   PERSON DATA
============================================================ */

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


/* ============================================================
   PERSON MODAL
============================================================ */

function initPersonModal() {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) return;


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closePerson();

            }

        }
    );

}


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


    const lang =
        translations[currentLang];


    if (role) {

        role.textContent =
            lang[
                personId === "director"
                    ? "director_role"
                    : "manager_role"
            ];

    }


    if (name) {

        name.textContent =
            lang[
                personId === "director"
                    ? "director_name"
                    : "manager_name"
            ];

    }


    if (text) {

        text.textContent =
            lang[
                personId === "director"
                    ? "director_modal_text"
                    : "manager_modal_text"
            ];

    }


    if (position) {

        position.textContent =
            lang[
                personId === "director"
                    ? "director_position"
                    : "manager_position"
            ];

    }


    modal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );

}


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

const TELEGRAM_USERNAME =
    "USERNAME";


const TELEGRAM_MESSAGE =
    "Assalomu alaykum. Siz bilan ishlamoqchimiz. Bizga telefon qiling.";


function createTelegramLink() {

    const username =
        TELEGRAM_USERNAME
            .replace("@", "")
            .trim();


    const message =
        encodeURIComponent(
            TELEGRAM_MESSAGE
        );


    return `https://t.me/${username}?text=${message}`;

}


function initTelegramLinks() {

    const links =
        document.querySelectorAll(
            ".telegram-btn, [data-telegram]"
        );


    links.forEach(link => {

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
   INSTAGRAM
============================================================ */

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


/* ============================================================
   PHONE
============================================================ */

function initPhoneLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );


    links.forEach(link => {

        link.setAttribute(
            "aria-label",
            translations[currentLang]
                .phone_button
        );

    });

}


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
   BUTTON EFFECT
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


                setTimeout(
                    () => {

                        button.classList.remove(
                            "clicked"
                        );

                    },
                    250
                );

            }
        );

    });

}


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
            link.getAttribute(
                "href"
            );


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
            target.getBoundingClientRect()
                .top +
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
   ESC KEY
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        closePerson();

        closeLanguageDropdown();


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

    }
);


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
   PREPARE TRANSLATIONS
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        prepareTranslations();

        applyLanguage(currentLang);

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
    "%cLanguage system: UZ / EN / RU",
    "font-size:14px;"
);
