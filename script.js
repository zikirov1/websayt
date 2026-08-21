/* ============================================================
   BESHA GROUP
   Main JavaScript
   Version: 1.0
============================================================ */


/* ============================================================
   GLOBAL SETTINGS
============================================================ */

// Telegram username'ni shu yerga yozamiz.
// Masalan:
// const TELEGRAM_USERNAME = "beshagroup";
//
// Hozircha bo'sh qoldirilgan.

const TELEGRAM_USERNAME = "USERNAME";


/* ============================================================
   TRANSLATIONS
============================================================ */

const translations = {

    uz: {

        /* -------------------------
           INTRO
        ------------------------- */

        intro_tagline:
            "INSONLAR VA IMKONIYATLARNI BOG‘LAYMIZ",


        /* -------------------------
           NAVIGATION
        ------------------------- */

        nav_about:
            "Biz haqimizda",

        nav_services:
            "Xizmatlar",

        nav_process:
            "Biz qanday ishlaymiz",

        nav_advantages:
            "Afzalliklarimiz",

        nav_contact:
            "Bog‘lanish",

        nav_button:
            "Hamkorlikni boshlash",


        /* -------------------------
           HERO
        ------------------------- */

        hero_tag:
            "BESHA GROUP",

        hero_title:
            "Korxonalar uchun ishchi kuchi yechimlari.",

        hero_text:
            "Korxonalarning ishchi kuchiga bo‘lgan ehtiyojini aniqlash, mos nomzodlarni izlash va saralash jarayonlarini tashkil etishga yordam beramiz.",

        hero_primary:
            "Hamkorlik bo‘yicha murojaat",

        hero_secondary:
            "BESHA GROUP haqida",

        hero_note:
            "Ish beruvchining talabi — jarayonning asosiy mezoni.",


        /* -------------------------
           ABOUT
        ------------------------- */

        about_label:
            "BIZ HAQIMIZDA",

        about_title:
            "Ish beruvchining ehtiyojidan kelib chiqadigan aniq yondashuv.",

        about_text_1:
            "BESHA GROUP korxonalar va tashkilotlarning ishchi kuchiga bo‘lgan ehtiyojini qondirish yo‘nalishida faoliyat yuritadi.",

        about_text_2:
            "Bizning faoliyatimiz ish beruvchining mavjud ehtiyojini o‘rganish, zarur talablarni aniqlash, mos nomzodlarni izlash va saralash hamda ularni ish beruvchiga taqdim etish jarayonlarini tashkil etishga qaratilgan.",

        about_text_3:
            "Har bir hamkorlikda lavozim, ishchi soni, malaka talablari, ish sharoitlari va boshqa kelishilgan mezonlar hisobga olinadi.",

        about_highlight_label:
            "ASOSIY TAMOYIL",

        about_highlight_title:
            "Avval ehtiyojni aniq tushunamiz. Keyin mos yechimni shakllantiramiz.",

        about_highlight_text:
            "Biz uchun har bir ish beruvchining talabi alohida ko‘rib chiqiladi.",


        /* -------------------------
           SERVICES
        ------------------------- */

        services_label:
            "XIZMATLAR",

        services_title:
            "Ishchi kuchi bilan bog‘liq asosiy jarayonlarda amaliy ko‘mak.",

        services_intro:
            "Xizmatlarimiz korxonaning real ehtiyoji va belgilangan talablar asosida shakllantiriladi.",


        service_1_title:
            "Ehtiyojni aniqlash",

        service_1_text:
            "Korxonaning mavjud ishchi kuchiga bo‘lgan ehtiyojini, lavozimlar, ishchi soni va asosiy talablarni aniqlaymiz.",


        service_2_title:
            "Nomzodlarni izlash",

        service_2_text:
            "Belgilangan talablar asosida mos kelishi mumkin bo‘lgan nomzodlarni izlash jarayonini tashkil etamiz.",


        service_3_title:
            "Saralash",

        service_3_text:
            "Nomzodlarning ish beruvchi tomonidan belgilangan mezonlarga muvofiqligini dastlabki bosqichda ko‘rib chiqamiz.",


        service_4_title:
            "Ish beruvchiga taqdim etish",

        service_4_text:
            "Belgilangan talablarga mos deb topilgan nomzodlar haqidagi ma’lumotlarni ish beruvchiga taqdim etamiz.",


        /* -------------------------
           PROCESS
        ------------------------- */

        process_label:
            "BIZ QANDAY ISHLAYMIZ?",

        process_title:
            "Jarayonni bosqichma-bosqich tashkil etamiz.",

        process_intro:
            "Hamkorlikning har bir bosqichi ish beruvchining talablariga asoslanadi.",


        process_1_title:
            "Ehtiyojni o‘rganamiz",

        process_1_text:
            "Korxona tomonidan taqdim etilgan ishchi kuchi ehtiyojini va asosiy talablarni aniqlashtiramiz.",


        process_2_title:
            "Talablarni shakllantiramiz",

        process_2_text:
            "Lavozim, ishchi soni, malaka, tajriba va boshqa kelishilgan mezonlarni belgilaymiz.",


        process_3_title:
            "Izlaymiz va saralaymiz",

        process_3_text:
            "Belgilangan mezonlar asosida nomzodlarni izlash va dastlabki saralashni tashkil qilamiz.",


        process_4_title:
            "Ish beruvchiga taqdim etamiz",

        process_4_text:
            "Saralashdan o‘tgan nomzodlar haqidagi ma’lumotlarni ish beruvchiga taqdim etamiz.",


        /* -------------------------
           ADVANTAGES
        ------------------------- */

        advantages_label:
            "BIZNING YONDASHUVIMIZ",

        advantages_title:
            "Hamkorlikda asosiy e’tiborimiz — aniqlik va mas’uliyat.",


        value_1_title:
            "Aniq talab",

        value_1_text:
            "Nomzodlarni izlashdan oldin ish beruvchining talablari aniq belgilanadi.",


        value_2_title:
            "Tizimli jarayon",

        value_2_text:
            "Ehtiyojni aniqlashdan nomzodni taqdim etishgacha bo‘lgan jarayon bosqichma-bosqich tashkil etiladi.",


        value_3_title:
            "Ochiq muloqot",

        value_3_text:
            "Hamkorlik shartlari va talablar tomonlar o‘rtasida aniq kelishilgan holda olib boriladi.",


        value_4_title:
            "Mas’uliyat",

        value_4_text:
            "Har bir buyurtma bo‘yicha belgilangan talab va kelishuvlarga rioya qilishga e’tibor qaratamiz.",


        /* -------------------------
           CTA
        ------------------------- */

        cta_label:
            "HAMKORLIK",

        cta_title:
            "Korxonangizga ishchi kuchi kerakmi? Talablaringizni bizga yuboring.",

        cta_text:
            "Korxonangizdagi mavjud ehtiyoj, zarur ishchi soni va asosiy talablarni bizga ma’lum qiling. Murojaatingizni ko‘rib chiqib, keyingi hamkorlik masalalarini muhokama qilamiz.",

        cta_button:
            "Hamkorlik bo‘yicha murojaat",


        /* -------------------------
           CONTACT
        ------------------------- */

        contact_label:
            "BOG‘LANISH",

        contact_title:
            "Hamkorlikni muhokama qilamiz.",

        contact_text:
            "Korxonangizning ishchi kuchiga bo‘lgan ehtiyoji haqida ma’lumot qoldiring. Murojaatingiz asosida keyingi qadamlarni muhokama qilamiz.",


        contact_detail_1_label:
            "Kompaniyalar uchun",

        contact_detail_1_text:
            "Ishchi kuchi bo‘yicha murojaatlar",


        contact_detail_2_label:
            "Muloqot",

        contact_detail_2_text:
            "Rasmiy aloqa kanallari orqali",


        /* -------------------------
           FORM
        ------------------------- */

        form_company:
            "Kompaniya nomi",

        form_company_placeholder:
            "Kompaniya nomini kiriting",

        form_name:
            "Mas’ul shaxs",

        form_name_placeholder:
            "Ism va familiya",

        form_phone:
            "Telefon",

        form_phone_placeholder:
            "+998 90 000 00 00",

        form_email:
            "E-mail",

        form_email_placeholder:
            "company@example.com",

        form_position:
            "Lavozim / mutaxassislik",

        form_position_placeholder:
            "Masalan: operator",

        form_workers:
            "Kerakli ishchilar soni",

        form_workers_placeholder:
            "Masalan: 20",

        form_message:
            "Talablar va qo‘shimcha ma’lumot",

        form_message_placeholder:
            "Ish sharoitlari, talablar va boshqa muhim ma’lumotlarni yozing...",

        form_submit:
            "Murojaat yuborish →",

        form_note:
            "Murojaat yuborish orqali taqdim etilgan ma’lumotlardan ushbu murojaat bo‘yicha aloqa qilish maqsadida foydalanilishiga rozilik bildirasiz.",


        /* -------------------------
           FOOTER
        ------------------------- */

        footer_tagline:
            "Insonlar va imkoniyatlarni bog‘laymiz.",

        footer_about:
            "Biz haqimizda",

        footer_services:
            "Xizmatlar",

        footer_contact:
            "Bog‘lanish",

        footer_top:
            "↑ Yuqoriga",

        footer_rights:
            "Barcha huquqlar himoyalangan.",


        /* -------------------------
           MODAL
        ------------------------- */

        modal_position_label:
            "Lavozimi",


        /* -------------------------
           SYSTEM MESSAGES
        ------------------------- */

        form_success:
            "Murojaatingiz tayyorlandi. Telegram orqali yuborilmoqda...",

        form_error:
            "Iltimos, majburiy maydonlarni to‘ldiring.",

        telegram_error:
            "Telegram manzili hali sozlanmagan.",

        language_saved:
            "Til tanlandi."


    },


    /* ========================================================
       ENGLISH
    ======================================================== */

    en: {

        intro_tagline:
            "CONNECTING PEOPLE AND OPPORTUNITIES",

        nav_about:
            "About Us",

        nav_services:
            "Services",

        nav_process:
            "How We Work",

        nav_advantages:
            "Our Approach",

        nav_contact:
            "Contact",

        nav_button:
            "Start a Partnership",


        hero_tag:
            "BESHA GROUP",

        hero_title:
            "Workforce solutions for businesses.",

        hero_text:
            "We help businesses identify their workforce needs and organize the search and initial screening of suitable candidates.",

        hero_primary:
            "Discuss a Partnership",

        hero_secondary:
            "About BESHA GROUP",

        hero_note:
            "The employer’s requirements are the foundation of the process.",


        about_label:
            "ABOUT US",

        about_title:
            "A clear approach built around the employer’s needs.",

        about_text_1:
            "BESHA GROUP operates in the field of workforce solutions for businesses and organizations.",

        about_text_2:
            "Our activities focus on understanding the employer’s workforce needs, identifying the required criteria, organizing the search and initial screening of suitable candidates, and presenting relevant candidate information to the employer.",

        about_text_3:
            "Each cooperation process takes into account the position, required workforce size, qualification requirements, working conditions and other agreed criteria.",

        about_highlight_label:
            "CORE PRINCIPLE",

        about_highlight_title:
            "We first understand the need clearly. Then we structure the appropriate solution.",

        about_highlight_text:
            "Every employer’s requirements are considered individually.",


        services_label:
            "SERVICES",

        services_title:
            "Practical support throughout key workforce processes.",

        services_intro:
            "Our services are structured around the company’s actual workforce needs and agreed requirements.",


        service_1_title:
            "Needs Assessment",

        service_1_text:
            "We identify the company’s workforce requirements, positions, required number of employees and key criteria.",


        service_2_title:
            "Candidate Search",

        service_2_text:
            "We organize the search for potential candidates based on the requirements provided by the employer.",


        service_3_title:
            "Initial Screening",

        service_3_text:
            "We review candidate information against the criteria defined by the employer during the initial screening stage.",


        service_4_title:
            "Candidate Presentation",

        service_4_text:
            "We present information about candidates who meet the agreed requirements to the employer.",


        process_label:
            "HOW WE WORK",

        process_title:
            "A structured process from requirement to candidate presentation.",

        process_intro:
            "Each stage of cooperation is based on the employer’s requirements.",


        process_1_title:
            "We Understand the Need",

        process_1_text:
            "We clarify the company’s workforce requirements and the main criteria provided by the employer.",


        process_2_title:
            "We Define the Requirements",

        process_2_text:
            "We establish the position, workforce size, qualifications, experience and other agreed criteria.",


        process_3_title:
            "We Search and Screen",

        process_3_text:
            "We organize candidate search and initial screening based on the defined criteria.",


        process_4_title:
            "We Present Candidates",

        process_4_text:
            "We present information about screened candidates to the employer for further consideration.",


        advantages_label:
            "OUR APPROACH",

        advantages_title:
            "Our focus in every cooperation: clarity and responsibility.",


        value_1_title:
            "Clear Requirements",

        value_1_text:
            "Employer requirements are clearly defined before the candidate search begins.",


        value_2_title:
            "Structured Process",

        value_2_text:
            "The process from needs assessment to candidate presentation is organized step by step.",


        value_3_title:
            "Open Communication",

        value_3_text:
            "Requirements and cooperation terms are discussed and agreed clearly between the parties.",


        value_4_title:
            "Responsibility",

        value_4_text:
            "We pay close attention to agreed requirements and cooperation terms throughout each assignment.",


        cta_label:
            "PARTNERSHIP",

        cta_title:
            "Looking for workforce support? Send us your requirements.",

        cta_text:
            "Share your company’s workforce needs, required number of employees and key requirements. We will review your request and discuss the next steps for cooperation.",

        cta_button:
            "Discuss a Partnership",


        contact_label:
            "CONTACT",

        contact_title:
            "Let’s discuss your workforce requirements.",

        contact_text:
            "Tell us about your company’s workforce needs. Based on your request, we will discuss the next steps.",


        contact_detail_1_label:
            "For Businesses",

        contact_detail_1_text:
            "Workforce-related enquiries",


        contact_detail_2_label:
            "Communication",

        contact_detail_2_text:
            "Through official communication channels",


        form_company:
            "Company Name",

        form_company_placeholder:
            "Enter company name",

        form_name:
            "Contact Person",

        form_name_placeholder:
            "Full name",

        form_phone:
            "Phone",

        form_phone_placeholder:
            "+998 90 000 00 00",

        form_email:
            "E-mail",

        form_email_placeholder:
            "company@example.com",

        form_position:
            "Position / Occupation",

        form_position_placeholder:
            "Example: Operator",

        form_workers:
            "Required Number of Workers",

        form_workers_placeholder:
            "Example: 20",

        form_message:
            "Requirements and Additional Information",

        form_message_placeholder:
            "Describe working conditions, requirements and other relevant information...",

        form_submit:
            "Send Enquiry →",

        form_note:
            "By submitting this enquiry, you agree that the information provided may be used to contact you regarding this enquiry.",


        footer_tagline:
            "Connecting people and opportunities.",

        footer_about:
            "About Us",

        footer_services:
            "Services",

        footer_contact:
            "Contact",

        footer_top:
            "↑ Back to top",

        footer_rights:
            "All rights reserved.",


        modal_position_label:
            "Position",


        form_success:
            "Your enquiry has been prepared. Redirecting to Telegram...",

        form_error:
            "Please complete all required fields.",

        telegram_error:
            "The Telegram contact has not been configured yet.",

        language_saved:
            "Language selected."

    },


    /* ========================================================
       RUSSIAN
    ======================================================== */

    ru: {

        intro_tagline:
            "СОЕДИНЯЕМ ЛЮДЕЙ И ВОЗМОЖНОСТИ",

        nav_about:
            "О компании",

        nav_services:
            "Услуги",

        nav_process:
            "Как мы работаем",

        nav_advantages:
            "Наш подход",

        nav_contact:
            "Контакты",

        nav_button:
            "Начать сотрудничество",


        hero_tag:
            "BESHA GROUP",

        hero_title:
            "Решения по обеспечению бизнеса рабочей силой.",

        hero_text:
            "Мы помогаем предприятиям определить потребность в рабочей силе и организуем поиск и первичный отбор подходящих кандидатов.",

        hero_primary:
            "Обсудить сотрудничество",

        hero_secondary:
            "О BESHA GROUP",

        hero_note:
            "Требования работодателя являются основой процесса.",


        about_label:
            "О КОМПАНИИ",

        about_title:
            "Чёткий подход, основанный на потребностях работодателя.",

        about_text_1:
            "BESHA GROUP осуществляет деятельность в сфере решений по обеспечению предприятий и организаций рабочей силой.",

        about_text_2:
            "Наша деятельность направлена на изучение потребностей работодателя в рабочей силе, определение необходимых требований, организацию поиска и первичного отбора подходящих кандидатов, а также предоставление информации о кандидатах работодателю.",

        about_text_3:
            "В каждом сотрудничестве учитываются должность, необходимое количество работников, квалификационные требования, условия работы и другие согласованные критерии.",

        about_highlight_label:
            "ОСНОВНОЙ ПРИНЦИП",

        about_highlight_title:
            "Сначала точно определяем потребность. Затем формируем соответствующее решение.",

        about_highlight_text:
            "Требования каждого работодателя рассматриваются индивидуально.",


        services_label:
            "УСЛУГИ",

        services_title:
            "Практическая поддержка на ключевых этапах работы с персоналом.",

        services_intro:
            "Наши услуги формируются с учётом реальной потребности предприятия и согласованных требований.",


        service_1_title:
            "Определение потребности",

        service_1_text:
            "Определяем потребность предприятия в рабочей силе, необходимые должности, количество работников и основные требования.",


        service_2_title:
            "Поиск кандидатов",

        service_2_text:
            "Организуем поиск потенциальных кандидатов в соответствии с требованиями работодателя.",


        service_3_title:
            "Первичный отбор",

        service_3_text:
            "На первоначальном этапе рассматриваем информацию о кандидатах на соответствие критериям, установленным работодателем.",


        service_4_title:
            "Представление кандидатов",

        service_4_text:
            "Предоставляем работодателю информацию о кандидатах, соответствующих согласованным требованиям.",


        process_label:
            "КАК МЫ РАБОТАЕМ",

        process_title:
            "Организуем процесс поэтапно — от определения потребности до представления кандидатов.",

        process_intro:
            "Каждый этап сотрудничества строится на требованиях работодателя.",


        process_1_title:
            "Изучаем потребность",

        process_1_text:
            "Уточняем потребность предприятия в рабочей силе и основные требования работодателя.",


        process_2_title:
            "Определяем требования",

        process_2_text:
            "Определяем должность, необходимое количество работников, квалификацию, опыт и другие согласованные критерии.",


        process_3_title:
            "Ищем и отбираем",

        process_3_text:
            "Организуем поиск и первичный отбор кандидатов на основе установленных критериев.",


        process_4_title:
            "Представляем работодателю",

        process_4_text:
            "Предоставляем работодателю информацию о кандидатах, прошедших первичный отбор.",


        advantages_label:
            "НАШ ПОДХОД",

        advantages_title:
            "В сотрудничестве мы уделяем основное внимание точности и ответственности.",


        value_1_title:
            "Чёткие требования",

        value_1_text:
            "Требования работодателя определяются до начала поиска кандидатов.",


        value_2_title:
            "Системный процесс",

        value_2_text:
            "Процесс от определения потребности до представления кандидатов организуется поэтапно.",


        value_3_title:
            "Открытая коммуникация",

        value_3_text:
            "Требования и условия сотрудничества чётко обсуждаются и согласовываются между сторонами.",


        value_4_title:
            "Ответственность",

        value_4_text:
            "Мы уделяем внимание соблюдению согласованных требований и условий сотрудничества.",


        cta_label:
            "СОТРУДНИЧЕСТВО",

        cta_title:
            "Вам необходима рабочая сила? Отправьте нам ваши требования.",

        cta_text:
            "Сообщите нам о потребности вашей компании, необходимом количестве работников и основных требованиях. Мы рассмотрим обращение и обсудим дальнейшие шаги сотрудничества.",

        cta_button:
            "Обсудить сотрудничество",


        contact_label:
            "КОНТАКТЫ",

        contact_title:
            "Обсудим потребности вашей компании.",

        contact_text:
            "Расскажите о потребности вашей компании в рабочей силе. На основании вашего обращения мы обсудим дальнейшие шаги.",


        contact_detail_1_label:
            "Для компаний",

        contact_detail_1_text:
            "Обращения по вопросам рабочей силы",


        contact_detail_2_label:
            "Связь",

        contact_detail_2_text:
            "Через официальные каналы связи",


        form_company:
            "Название компании",

        form_company_placeholder:
            "Введите название компании",

        form_name:
            "Ответственное лицо",

        form_name_placeholder:
            "Имя и фамилия",

        form_phone:
            "Телефон",

        form_phone_placeholder:
            "+998 90 000 00 00",

        form_email:
            "E-mail",

        form_email_placeholder:
            "company@example.com",

        form_position:
            "Должность / специальность",

        form_position_placeholder:
            "Например: оператор",

        form_workers:
            "Необходимое количество работников",

        form_workers_placeholder:
            "Например: 20",

        form_message:
            "Требования и дополнительная информация",

        form_message_placeholder:
            "Укажите условия работы, требования и другую важную информацию...",

        form_submit:
            "Отправить обращение →",

        form_note:
            "Отправляя обращение, вы соглашаетесь с использованием предоставленной информации для связи с вами по данному обращению.",


        footer_tagline:
            "Соединяем людей и возможности.",

        footer_about:
            "О компании",

        footer_services:
            "Услуги",

        footer_contact:
            "Контакты",

        footer_top:
            "↑ Наверх",

        footer_rights:
            "Все права защищены.",


        modal_position_label:
            "Должность",


        form_success:
            "Ваше обращение подготовлено. Выполняется переход в Telegram...",

        form_error:
            "Пожалуйста, заполните обязательные поля.",

        telegram_error:
            "Контакт Telegram пока не настроен.",

        language_saved:
            "Язык выбран."

    }

};



/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

let currentLanguage = "uz";


/**
 * Translate all elements with data-i18n
 */
function translatePage(language) {

    if (!translations[language]) {
        language = "uz";
    }

    currentLanguage = language;

    const dictionary = translations[language];


    /* ---------------------------------------------
       NORMAL TEXT
    --------------------------------------------- */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (dictionary[key] !== undefined) {

                element.textContent = dictionary[key];

            }

        });


    /* ---------------------------------------------
       PLACEHOLDERS
    --------------------------------------------- */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n-placeholder");

            if (dictionary[key] !== undefined) {

                element.placeholder = dictionary[key];

            }

        });


    /* ---------------------------------------------
       LANGUAGE BUTTON
    --------------------------------------------- */

    const currentLanguageElement =
        document.getElementById("currentLanguage");


    if (currentLanguageElement) {

        currentLanguageElement.textContent =
            language.toUpperCase();

    }


    /* ---------------------------------------------
       ACTIVE LANGUAGE
    --------------------------------------------- */

    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.lang === language
            );

        });


    /* ---------------------------------------------
       HTML LANGUAGE
    --------------------------------------------- */

    document.documentElement.lang = language;


    /* ---------------------------------------------
       SAVE LANGUAGE
    --------------------------------------------- */

    try {

        localStorage.setItem(
            "besha_language",
            language
        );

    } catch (error) {

        console.warn(
            "Language preference could not be saved."
        );

    }

}



/* ============================================================
   LOAD SAVED LANGUAGE
============================================================ */

function loadSavedLanguage() {

    let savedLanguage = null;


    try {

        savedLanguage =
            localStorage.getItem("besha_language");

    } catch (error) {

        savedLanguage = null;

    }


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        translatePage(savedLanguage);

    } else {

        translatePage("uz");

    }

}



/* ============================================================
   LANGUAGE DROPDOWN
============================================================ */

function setupLanguageSelector() {

    const button =
        document.getElementById("languageButton");

    const dropdown =
        document.getElementById("languageDropdown");


    if (!button || !dropdown) {
        return;
    }


    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen =
            dropdown.classList.toggle("open");

        button.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });



    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const language =
                        option.dataset.lang;

                    translatePage(language);

                    dropdown.classList.remove("open");

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });



    document.addEventListener(
        "click",
        function () {

            dropdown.classList.remove("open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

}



/* ============================================================
   INTRO ANIMATION
============================================================ */

function initIntro() {

    const intro =
        document.getElementById("intro");

    if (!intro) {
        document.body.classList.remove("intro-active");
        return;
    }


    const introDuration = 1800;


    setTimeout(function () {

        intro.classList.add("intro-hidden");

        document.body.classList.remove(
            "intro-active"
        );

    }, introDuration);


    setTimeout(function () {

        intro.remove();

    }, introDuration + 900);

}



/* ============================================================
   MOBILE MENU
============================================================ */

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    const button =
        document.querySelector(".menu-btn");


    if (!menu) {
        return;
    }


    const isOpen =
        menu.classList.toggle("open");


    if (button) {

        button.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }

}



/* ============================================================
   CLOSE MOBILE MENU
============================================================ */

function closeMenu() {

    const menu =
        document.getElementById("menu");

    const button =
        document.querySelector(".menu-btn");


    if (!menu) {
        return;
    }


    menu.classList.remove("open");


    if (button) {

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}



/* ============================================================
   CLOSE MENU AFTER NAVIGATION
============================================================ */

function setupMenuLinks() {

    const links =
        document.querySelectorAll(
            ".menu a"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });

}



/* ============================================================
   HEADER SCROLL EFFECT
============================================================ */

function setupHeaderScroll() {

    const header =
        document.getElementById("header");


    if (!header) {
        return;
    }


    function updateHeader() {

        if (window.scrollY > 40) {

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
        {
            passive: true
        }
    );

}



/* ============================================================
   REVEAL ANIMATIONS
============================================================ */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    /*
     * IntersectionObserver mavjud bo‘lmagan
     * brauzerlar uchun fallback.
     */

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
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
   SMOOTH SCROLL
============================================================ */

function setupSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.getElementById(
                        "header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });

}



/* ============================================================
   CONTACT FORM
============================================================ */

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );


    const status =
        document.getElementById(
            "formStatus"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /*
             * HTML5 validation
             */

            if (!form.checkValidity()) {

                form.reportValidity();

                showFormStatus(
                    getTranslation(
                        "form_error"
                    ),
                    "error"
                );

                return;

            }


            /*
             * Form values
             */

            const company =
                document
                    .getElementById(
                        "companyName"
                    )
                    ?.value
                    .trim() || "";


            const name =
                document
                    .getElementById(
                        "contactName"
                    )
                    ?.value
                    .trim() || "";


            const phone =
                document
                    .getElementById(
                        "phone"
                    )
                    ?.value
                    .trim() || "";


            const email =
                document
                    .getElementById(
                        "email"
                    )
                    ?.value
                    .trim() || "";


            const position =
                document
                    .getElementById(
                        "position"
                    )
                    ?.value
                    .trim() || "";


            const workers =
                document
                    .getElementById(
                        "workers"
                    )
                    ?.value
                    .trim() || "";


            const message =
                document
                    .getElementById(
                        "message"
                    )
                    ?.value
                    .trim() || "";



            /*
             * Validate required fields
             */

            if (
                !company ||
                !name ||
                !phone ||
                !position ||
                !workers
            ) {

                showFormStatus(
                    getTranslation(
                        "form_error"
                    ),
                    "error"
                );

                return;

            }



            /*
             * Telegram username configured?
             */

            if (
                !TELEGRAM_USERNAME ||
                TELEGRAM_USERNAME === "USERNAME"
            ) {

                showFormStatus(
                    getTranslation(
                        "telegram_error"
                    ),
                    "error"
                );

                return;

            }



            /*
             * Create Telegram message
             */

            const messageText =

                "🏢 BESHA GROUP — Yangi murojaat\n\n" +

                "Kompaniya: " +
                company +
                "\n" +

                "Mas’ul shaxs: " +
                name +
                "\n" +

                "Telefon: " +
                phone +
                "\n" +

                "E-mail: " +
                (email || "Ko‘rsatilmagan") +
                "\n\n" +

                "Lavozim / mutaxassislik: " +
                position +
                "\n" +

                "Kerakli ishchilar soni: " +
                workers +
                "\n\n" +

                "Talablar:\n" +
                (message || "Ko‘rsatilmagan");



            /*
             * Show status
             */

            showFormStatus(
                getTranslation(
                    "form_success"
                ),
                "success"
            );



            /*
             * Telegram URL
             */

            const telegramUrl =
                "https://t.me/" +
                TELEGRAM_USERNAME +
                "?text=" +
                encodeURIComponent(
                    messageText
                );


            /*
             * Small delay gives user
             * time to see success message.
             */

            setTimeout(function () {

                window.open(
                    telegramUrl,
                    "_blank",
                    "noopener,noreferrer"
                );

            }, 600);

        }
    );

}



/* ============================================================
   FORM STATUS
============================================================ */

function showFormStatus(
    message,
    type
) {

    const status =
        document.getElementById(
            "formStatus"
        );


    if (!status) {
        return;
    }


    status.textContent = message;


    status.className =
        "form-status " +
        type;


    setTimeout(function () {

        status.classList.remove(
            "success",
            "error"
        );

    }, 7000);

}



/* ============================================================
   GET CURRENT TRANSLATION
============================================================ */

function getTranslation(key) {

    if (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) {

        return translations[currentLanguage][key];

    }


    return (
        translations.uz[key] ||
        key
    );

}



/* ============================================================
   PERSON MODAL
============================================================ */

const people = {

    director: {

        role: "RAHBARIYAT",

        name: "Ma’lumot",

        position: "Direktor",

        text:
            "Rahbariyat haqida tasdiqlangan ma’lumotlar keyinchalik ushbu bo‘limga kiritiladi."

    },


    manager: {

        role: "RAHBARIYAT",

        name: "Ma’lumot",

        position: "Menejer",

        text:
            "Rahbariyat haqida tasdiqlangan ma’lumotlar keyinchalik ushbu bo‘limga kiritiladi."

    }

};



function openPerson(personKey) {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) {
        return;
    }


    const person =
        people[personKey];


    if (!person) {
        return;
    }


    const role =
        document.getElementById(
            "personModalRole"
        );


    const name =
        document.getElementById(
            "personModalName"
        );


    const position =
        document.getElementById(
            "personModalPosition"
        );


    const text =
        document.getElementById(
            "personModalText"
        );


    if (role) {
        role.textContent = person.role;
    }


    if (name) {
        name.textContent = person.name;
    }


    if (position) {
        position.textContent =
            person.position;
    }


    if (text) {
        text.textContent =
            person.text;
    }


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
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


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}



/* ============================================================
   MODAL BACKDROP
============================================================ */

function setupModal() {

    const modal =
        document.getElementById(
            "personModal"
        );


    if (!modal) {
        return;
    }


    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                closePerson();

            }

        }
    );

}



/* ============================================================
   ESCAPE KEY
============================================================ */

function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closePerson();

                closeMenu();

                const dropdown =
                    document.getElementById(
                        "languageDropdown"
                    );


                const button =
                    document.getElementById(
                        "languageButton"
                    );


                if (dropdown) {

                    dropdown.classList.remove(
                        "open"
                    );

                }


                if (button) {

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

}



/* ============================================================
   CURRENT YEAR
============================================================ */

function setCurrentYear() {

    const yearElement =
        document.getElementById(
            "currentYear"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}



/* ============================================================
   ACTIVE NAVIGATION
============================================================ */

function setupActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".menu a"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute(
                                    "href"
                                ) === "#" + id
                            );

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}



/* ============================================================
   DISABLE BROKEN TELEGRAM FORM UNTIL CONFIGURED
============================================================ */

function checkTelegramConfiguration() {

    if (
        TELEGRAM_USERNAME === "USERNAME" ||
        !TELEGRAM_USERNAME
    ) {

        console.info(
            "BESHA GROUP: Telegram username hali sozlanmagan."
        );

    }

}



/* ============================================================
   INITIALIZE WEBSITE
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSavedLanguage();

        setupLanguageSelector();

        initIntro();

        setupHeaderScroll();

        setupRevealAnimations();

        setupMenuLinks();

        setupSmoothScroll();

        setupContactForm();

        setupModal();

        setupEscapeKey();

        setupActiveNavigation();

        setCurrentYear();

        checkTelegramConfiguration();

    }
);



/* ============================================================
   GLOBAL FUNCTIONS
============================================================ */

window.toggleMenu =
    toggleMenu;

window.openPerson =
    openPerson;

window.closePerson =
    closePerson;
