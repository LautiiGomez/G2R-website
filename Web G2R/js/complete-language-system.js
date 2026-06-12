/* --------------------------------
G2R Mining Solutions - Complete Language System
Archivo: complete-language-system.js
Fixes:
  - Footer race condition (re-apply after async load)
  - Sustainability & Companies main titles not translating
  - Novedades paragraphs not translating
  - "View profile" hover text hardcoded in CSS
  - ODS image swaps to English version
-------------------------------- */

const completeContent = {
    es: {
        navHome: "Inicio",
        navAbout: "Sobre nosotros",
        navServices: "Qué hacemos",
        navSustainability: "Sostenibilidad",
        navCompanies: "Compañías asociadas",
        navNews: "Novedades",
        navGallery: "Galería",
        navContact: "Contacto",

        pageTitles: {
            'index': "Inicio | G2R Mining Solutions",
            'aboutus': "Sobre nosotros | G2R Mining Solutions",
            'services': "Qué hacemos | G2R Mining Solutions",
            'sustainability': "Sostenibilidad | G2R Mining Solutions",
            'companies': "Compañías asociadas | G2R Mining Solutions",
            'novedades': "Novedades | G2R Mining Solutions",
            'gabriel': "Gabriel Gómez | G2R Mining Solutions",
            'carlos': "Carlos Giustozzi | G2R Mining Solutions",
            'jose': "José Luis Racconto | G2R Mining Solutions"
        },

        pages: {
            'index': {
                heroTitle: "G2R mining solutions",
                heroSubtitle: "Experiencia",
                heroDescription: "Eso es lo que nos caracteriza",
                heroText: "Durante más de 20 años hemos trabajado en diversos proyectos geológicos, desde exploración minera hasta estudios geológicos para clientes particulares.",
                heroButton: "Conoce más",
                aboutTitle: "Un poco acerca de nosotros",
                // Contact form
                contactHeading: "Envianos tu consulta",
                contactLabelName: "Nombre completo",
                contactLabelPhone: "Teléfono",
                contactLabelEmail: "Email",
                contactLabelSubject: "Asunto",
                contactLabelMessage: "Mensaje",
                contactErrorName: "Ingresá tu nombre.",
                contactErrorEmail: "Ingresá un email válido.",
                contactErrorMessage: "Escribí tu mensaje.",
                contactErrorCaptcha: "Por favor completá el captcha.",
                contactRequiredNote: "Campos obligatorios",
                contactPlaceholderName: "Juan García",
                contactPlaceholderPhone: "+54 261 000-0000",
                contactPlaceholderEmail: "juan@ejemplo.com",
                contactPlaceholderSubject: "Consulta sobre servicios",
                contactPlaceholderMessage: "Escribí tu mensaje acá...",
                contactBtn: "ENVIAR",
                contactBtnSending: "ENVIANDO...",
                contactSuccessTitle: "¡Mensaje enviado exitosamente!",
                contactSuccessText: "Revisaremos nuestra bandeja de entrada en un momento.",
                contactErrorTitle: "Oops... Algo salió mal",
                contactErrorText: "Intentá enviar el mensaje nuevamente dentro de unos segundos.",
                contactClose: "Cerrar",
                aboutText: "G2R mining solutions es una empresa pensada para brindar soluciones a sus clientes dentro del ámbito minero, abarcando desde la constitución de empresas o filiales locales de empresas extranjeras hasta trabajos específicos de geología, hidrogeología, geoquímica, geofísica entre otros. <br>Nuestra idea es brindarle al cliente la mejor opción para lograr su objetivo, usando como herramienta la experiencia acumulada de años de trabajo en la industria por parte de sus socios fundadores, profesionales apasionados por la geología y la minería. <br>Contamos con una amplia red de contactos con empresas y profesionales asociados que nos permiten brindar la mejor opción, en forma rápida y precisa, para cualquier desafío que nuestro cliente se proponga dentro del amplio espectro de la industria minera. <br>G2R es una nueva empresa con muchos años de experiencia.",
                galleryTitle: "Galería"
            },
            'aboutus': {
                heroTitle: "Sobre nosotros",
                sectionTitle: "Nuestro equipo",
                memberRole: "Miembro Cofundador",
                viewProfile: "Ver perfil",
                profileHoverText: "Ver perfil"
            },
            'services': {
                heroTitle: "Qué hacemos",
                missionTitle: "Nuestra misión",
                missionText: "Nuestro objetivo principal es brindarle a nuestros clientes, soluciones concretas, rápidas, eficientes y sostenibles al momento de encarar trabajos en el ámbito minero.",
                experienceTitle: "Nuestra experiencia",
                experienceText: "La experiencia acumulada en G2R a través de sus fundadores y de la amplia red de contactos asociados nos permite brindar un servicio de alta calidad en prospección, exploración y desarrollo minero, incluyendo trabajos de:",
                servicesList: [
                    "Búsqueda de oportunidades y negocios mineros en todo el territorio nacional.",
                    "Evaluación geológico-economica de proyectos.",
                    "Gestion de propiedades mineras y permisos de entidades publicas en todo el territorio nacional.",
                    "Relaciones comunitarias.",
                    "Mapeos geológicos y muestreos geoquímicos ajustados a las distintas etapas y escalas de las zonas de interés.",
                    "Diseño y/o ejecución de programas de perforación.",
                    "Logueo geotécnico y geológicos de testigos y cutting de sondajes.",
                    "Muestreos de sondajes.",
                    "Diseño y ejecución de programas de QAQC.",
                    "Lecturas e interpretación de espectometría de reflectancia con Terraspec©.",
                    "Muestreos de monitoreos medioambientales.",
                    "Traslados de muestras a laboratorio.",
                    "Almacenamiento de rechazos de muestras de laboratorio y cajas de testigos.",
                    "Geofisica: a través de nuestras compañías asociadas, brindamos servicios de magnetometría terrestre y con dron, SEV, IP, Gradiente, PDP, perfilajes de pozos, susceptibilidad magnética, entre otros.",
                    "Detección in situ de U, K y Rd",
                    "Estudios hidrogeológicos y ambientales."
                ]
            },
            'sustainability': {
                heroTitle: "Sostenibilidad",
                // FIX: título principal con su ID correcto
                commitmentTitle: "Nuestro Compromiso con la Sostenibilidad Ambiental",
                commitmentList: [
                    "En G2R conocemos de la importancia y estamos convencidos de que toda industria debe poseer políticas concretas y claros enfoques de sostenibilidad como primer acto de la creacion de valor social.",
                    "Los años de experiencia de los socios fundadores en distintas compañías nacionales e internacionales avalan las políticas internas de nuestra compañía, totalmente encausadas en la sostenibilidad con el medio ambiente, las comunidades locales, el personal, su salud y seguridad, y la ética y conductas de negocios.",
                    "En G2R nuestro compromiso previo a cualquier trabajo que encaramos, es conocer y adaptarnos a las políticas y visión de nuestro cliente en temas de sostenibilidad, aportando en el caso de ser necesario, nuestra experiencias y puntos de vista en pos de la mejora continua.",
                    "Estamos convencidos de que la sostenibilidad es un pilar fundamental en nuestra industria."
                ],
                odsTitle: "G2R y su compromiso con los ODS",
                odsText: "En G2R nos enfocamos en colaborar con la causa de los Objetivos de Desarrollo Sostenible dentro de la industria geológica y minera. Buscamos implementar prácticas responsables que promuevan la gestión eficiente de los recursos naturales, la reducción del impacto ambiental y la mejora de las condiciones laborales en los proyectos mineros de las comunidades en las que operamos.",
                // FIX: imagen ODS en español
                odsImage: "../imagenes/ods.png"
            },
            'companies': {
                heroTitle: "Compañías asociadas",
                // FIX: título principal con su ID correcto
                companiesTitle: "Compañías asociadas",
                companyIntroText: "En G2R tenemos como objetivo ofrecer a nuestros clientes soluciones concretas, rápidas, eficientes y sostenibles al momento de encarar trabajos en el ámbito minero. <br>Además, queremos que nuestros servicios sean integrales; es por esto, que hemos conformado alianzas estratégicas con profesionales y compañías afines para poder brindar soluciones en distintas labores o disciplinas relacionadas a la industria minera, en cualquiera de sus etapas y siempre orientados a la alta calidad. <br>Contamos con profesionales asociados de alto nivel y reconocimiento en disciplinas como la hidrogeología, geofísica, asuntos legales y propiedad minera, ambientales, entre otros. <br>También contamos con empresas asociadas de excelente nivel y trayectoria como estudios contables, empresas de logística, contratación de personal, transporte de personas, entre otras."
            },
            'novedades': {
                heroTitle: "Novedades",
                sectionTitle: "¡Próximamente publicaremos Novedades!",
                // FIX: párrafos de novedades con IDs correctos
                noveltyPara1: "Estamos trabajando en traerte las últimas noticias, actualizaciones y novedades de G2R Mining Solutions. Muy pronto podrás encontrar aquí información sobre nuestros nuevos proyectos, avances tecnológicos, eventos importantes y todo lo relacionado con la industria minera.",
                noveltyPara2: "Mantente atento a nuestras redes sociales para estar al día con las últimas novedades mientras preparamos esta sección especial para ti."
            },
            'gabriel': {
                heroTitle: "Gabriel Gómez",
                sectionTitle: "Gabriel Gómez",
                memberName: "Gabriel Alejandro Gómez",
                memberRole: "Miembro Cofundador",
                memberHeadingP: "Licenciado en Ciencias Geológicas, egresado de la Universidad Nacional de San Juan, Argentina.",
                memberDescriptionP: "Gabriel posee más de 20 años de experiencia en prospección y exploración minera comenzando como asistente de campo, luego como geólogo junior y de proyecto hasta geólogo senior. Su carrera profesional ha estado fuertemente orientada a la geología de campo, utilizando como principales herramientas la cartografía geológica, el muestreo geoquímico, el desarrollo de campañas de geofísica y la planificación de campañas de perforación de exploración y definición de recursos. Así mismo, ha formado parte en equipos de evaluación y estimación de recursos y reservas minerales. Ha trabajado en distintos ambientes geológicos en variadas regiones de Argentina y Chile, prospectando y explorando por oro, plata, cobre y polimetálicos, en sistemas epitermales (HS y LS), sediment hosted y tipo Carlin, skarn y porfídicos; con especial participación en el descubrimiento y desarrollo del Proyecto Cerro Moro, actualmente una mina en producción."
            },
            'carlos': {
                heroTitle: "Carlos Giustozzi",
                sectionTitle: "Carlos Giustozzi",
                memberName: "Carlos Daniel Giustozzi",
                memberRole: "Miembro Cofundador",
                memberHeadingP: "Licenciado en Ciencias Geológicas, egresado de la Universidad Nacional de San Juan.",
                memberDescriptionP: "Carlos completó su formación académica con un Diplomado en Economía de Minerales en la Cámara Minera del Perú/Sociedad Geológica de Sudáfrica posterior a su egreso de la Universidad Nacional de San Juan. Además realizó distintos cursos de especialización, entre los que se destaca Ore Deposit Models & Exploration Strategies en el CODES, Universidad de Tasmania. Es especialista en Exploración, Evaluación y Gerenciamiento de Proyectos Mineros. Desde el año 1990 ha estado involucrado en la exploración minera con numerosas empresas Junior y Senior. Ha trabajado en distintos ambientes geológicos a lo largo de toda la Argentina, además de Chile y Perú. Formó parte del equipo de Minera Andes descubridor de la mina San José-Huevos Verdes, en la provincia de Santa Cruz."
            },
            'jose': {
                heroTitle: "José Luis Racconto",
                sectionTitle: "José Luis Racconto",
                memberName: "José Luis Racconto",
                memberRole: "Miembro Cofundador",
                memberHeadingP: "Técnico en el área de minería y construcción.",
                memberDescriptionP: "José Luis ha participado en distintas empresas desde la prospección hasta la producción minera. Ha realizado cursos de especialización enfocados en minería, seguridad, medio ambiente, y software aplicados, con más de 25 años de experiencia en el sector. A lo largo de su experiencia dentro de la actividad, ha realizado trabajos orientados en el área legal y técnica, dentro de los cuales destacan, solicitud y seguimiento de propiedades mineras en distintas provincias de Argentina; planificación y ejecución de campañas para prospección; proyecto, evaluación y construcción de campamentos temporales; diseño y supervisión en la ejecución de huellas mineras; prospección y exploración en distintos ambientes en Argentina y Chile; control de sondajes, muestreos geoquímicos y metalúrgicos, base de datos (ejecución y análisis); y supervisión Senior en el área Ore Control en distintos métodos de explotación subterráneo y a cielo abierto."
            }
        },

        footer: {
            usefulLinksTitle: "Conoce nuestra web",
            contactTitle: "Contacto",
            socialTitle: "Nuestras Redes Sociales"
        },

        currentLanguage: "ES | Español"
    },

    en: {
        navHome: "Home",
        navAbout: "About us",
        navServices: "What we do",
        navSustainability: "Sustainability",
        navCompanies: "Associated companies",
        navNews: "News",
        navGallery: "Gallery",
        navContact: "Contact",

        pageTitles: {
            'index': "Home | G2R Mining Solutions",
            'aboutus': "About us | G2R Mining Solutions",
            'services': "What we do | G2R Mining Solutions",
            'sustainability': "Sustainability | G2R Mining Solutions",
            'companies': "Associated companies | G2R Mining Solutions",
            'novedades': "News | G2R Mining Solutions",
            'gabriel': "Gabriel Gómez | G2R Mining Solutions",
            'carlos': "Carlos Giustozzi | G2R Mining Solutions",
            'jose': "José Luis Racconto | G2R Mining Solutions"
        },

        pages: {
            'index': {
                heroTitle: "G2R mining solutions",
                heroSubtitle: "Experience",
                heroDescription: "That's what characterizes us",
                heroText: "For over 20 years, we have worked on various geological projects, from mineral exploration to geological studies for private clients.",
                heroButton: "Know more",
                aboutTitle: "A little about us",
                // Contact form
                contactHeading: "Send us your inquiry",
                contactLabelName: "Full name",
                contactLabelPhone: "Phone",
                contactLabelEmail: "Email",
                contactLabelSubject: "Subject",
                contactLabelMessage: "Message",
                contactErrorName: "Please enter your name.",
                contactErrorEmail: "Please enter a valid email.",
                contactErrorMessage: "Please write your message.",
                contactErrorCaptcha: "Please complete the captcha.",
                contactRequiredNote: "Required fields",
                contactPlaceholderName: "John Smith",
                contactPlaceholderPhone: "+1 000 000 0000",
                contactPlaceholderEmail: "john@example.com",
                contactPlaceholderSubject: "Service inquiry",
                contactPlaceholderMessage: "Write your message here...",
                contactBtn: "SEND",
                contactBtnSending: "SENDING...",
                contactSuccessTitle: "Message sent successfully!",
                contactSuccessText: "We will check our inbox shortly.",
                contactErrorTitle: "Oops... Something went wrong",
                contactErrorText: "Please try sending the message again in a few seconds.",
                contactClose: "Close",
                aboutText: "G2R Mining Solutions is a company designed to provide solutions to its clients within the mining field, ranging from creating companies or local subsidiaries of foreign companies to specific work in geology, hydrogeology, geochemistry, and geophysics, among others. <br>Our idea is to provide the client with the best option to achieve their goal, using as a tool the accumulated experience of years of work in the industry by its founding partners, professionals passionate about geology and mining. <br>We have a wide network of contacts with associated companies and professionals that allow us to provide the best option, quickly and accurately, for any challenge that our client proposes within the broad spectrum of the mining industry. <br>G2R is a new company with many years of experience.",
                galleryTitle: "Gallery"
            },
            'aboutus': {
                heroTitle: "About us",
                sectionTitle: "Our team",
                memberRole: "Founding Member",
                viewProfile: "View profile",
                profileHoverText: "View profile"
            },
            'services': {
                heroTitle: "What we do",
                missionTitle: "Our mission",
                missionText: "Our main objective is to provide our clients with concrete, fast, efficient and sustainable solutions when facing work in the mining field.",
                experienceTitle: "Our experience",
                experienceText: "The experience accumulated in G2R through its founders and the wide network of associated contacts allows us to provide a high-quality service in prospecting, exploration and mining development, including work on:",
                servicesList: [
                    "Search for opportunities and mining businesses throughout the national territory.",
                    "Geological-economic evaluation of projects.",
                    "Management of mining properties and permits from public entities throughout the national territory.",
                    "Community relations.",
                    "Geological mapping and geochemical sampling adjusted to the different stages and scales of areas of interest.",
                    "Design and/or execution of drilling programs.",
                    "Geotechnical and geological logging of cores and drill cuttings.",
                    "Drill sampling.",
                    "Design and execution of QAQC programs.",
                    "Readings and interpretation of reflectance spectrometry with Terraspec©.",
                    "Environmental monitoring sampling.",
                    "Sample transfers to laboratory.",
                    "Storage of laboratory sample rejects and core boxes.",
                    "Geophysics: through our associated companies, we provide services of terrestrial and drone magnetometry, SEV, IP, Gradient, PDP, well logging, magnetic susceptibility, among others.",
                    "In situ detection of U, K and Rd",
                    "Hydrogeological and environmental studies."
                ]
            },
            'sustainability': {
                heroTitle: "Sustainability",
                // FIX: título principal correcto en inglés
                commitmentTitle: "Our Commitment to Environmental Sustainability",
                commitmentList: [
                    "At G2R, we understand the importance and are convinced that every industry must have concrete policies and clear sustainability approaches as the first act of creating social value.",
                    "The years of experience of the founding partners in different national and international companies endorse our company's internal policies, fully aligned with environmental sustainability, local communities, personnel, their health and safety, and business ethics and conduct.",
                    "At G2R, our commitment prior to any work we undertake is to understand and adapt to our client's policies and vision on sustainability issues, contributing, if necessary, our experiences and points of view in pursuit of continuous improvement.",
                    "We are convinced that sustainability is a fundamental pillar in our industry."
                ],
                odsTitle: "G2R and its commitment to the SDGs",
                odsText: "At G2R, we focus on collaborating with the cause of the Sustainable Development Goals within the geological and mining industry. We seek to implement responsible practices that promote the efficient management of natural resources, the reduction of environmental impact, and the improvement of working conditions in mining projects in the communities where we operate.",
                
                odsImage: "../imagenes/sdg.png"
            },
            'companies': {
                heroTitle: "Associated companies",
                // FIX: título principal correcto en inglés
                companiesTitle: "Associated companies",
                companyIntroText: "At G2R, our goal is to offer our clients concrete, fast, efficient, and sustainable solutions when undertaking work in the mining field. <br>Furthermore, we want our services to be comprehensive; this is why we have formed strategic alliances with professionals and related companies to provide solutions in different tasks or disciplines related to the mining industry, at any of its stages and always oriented towards high quality. <br>We have high-level and recognized associated professionals in disciplines such as hydrogeology, geophysics, legal matters and mining property, environmental issues, among others. <br>We also have associated companies of excellent level and trajectory such as accounting firms, logistics companies, personnel recruitment, transportation of people, among others."
            },
            'novedades': {
                heroTitle: "News",
                sectionTitle: "We will publish News soon!",
                // FIX: párrafos en inglés
                noveltyPara1: "We are working to bring you the latest news, updates and developments from G2R Mining Solutions. Very soon you will be able to find here information about our new projects, technological advances, important events and everything related to the mining industry.",
                noveltyPara2: "Stay tuned to our social media to keep up with the latest news while we prepare this special section for you."
            },
            'gabriel': {
                heroTitle: "Gabriel Gomez",
                sectionTitle: "Gabriel Gomez",
                memberName: "Gabriel Alejandro Gomez",
                memberRole: "Founding Member",
                memberHeadingP: "Geological Sciences graduate from the National University of San Juan, Argentina.",
                memberDescriptionP: "Gabriel has over 20 years of experience in mineral prospecting and exploration, starting as a field assistant, then as a junior and project geologist, up to senior geologist. His professional career has been strongly oriented towards field geology, using geological mapping, geochemical sampling, geophysical campaign development, and planning of exploration drilling campaigns and resource definition as main tools. He has also been part of teams for the evaluation and estimation of mineral resources and reserves. He has worked in different geological environments in various regions of Argentina and Chile, prospecting and exploring for gold, silver, copper, and polymetallics; with special participation in the discovery and development of the Cerro Moro Project, currently a producing mine."
            },
            'carlos': {
                heroTitle: "Carlos Giustozzi",
                sectionTitle: "Carlos Giustozzi",
                memberName: "Carlos Daniel Giustozzi",
                memberRole: "Founding Member",
                memberHeadingP: "Geological Sciences graduate from the National University of San Juan.",
                memberDescriptionP: "Carlos completed his academic training with a Diploma in Mineral Economics at the Mining Chamber of Peru/Geological Society of South Africa after graduating from the National University of San Juan. He also completed various specialization courses, notably Ore Deposit Models & Exploration Strategies at CODES, University of Tasmania. He is a specialist in Exploration, Evaluation, and Management of Mining Projects. Since 1990, he has been involved in mineral exploration with numerous Junior and Senior companies throughout Argentina, Chile and Peru. He was part of the Minera Andes team that discovered the San José-Huevos Verdes mine in Santa Cruz province."
            },
            'jose': {
                heroTitle: "José Luis Racconto",
                sectionTitle: "José Luis Racconto",
                memberName: "José Luis Racconto",
                memberRole: "Founding Member",
                memberHeadingP: "Technician in the mining and construction area.",
                memberDescriptionP: "José Luis has participated in various companies from prospecting to mining production. He has completed specialization courses focused on mining, safety, environment, and applied software, with more than 25 years of experience in the sector. Throughout his experience in the activity, he has carried out work in the legal and technical area, including application and monitoring of mining properties in different provinces of Argentina; planning and execution of prospecting campaigns; project, evaluation and construction of temporary camps; design and supervision in the execution of mining tracks; prospecting and exploration in Argentina and Chile; drill hole control, geochemical and metallurgical sampling, database management; and Senior supervision in the Ore Control area in underground and open pit mining methods, having participated in Gualcamayo Mine."
            }
        },

        footer: {
            usefulLinksTitle: "Know our website",
            contactTitle: "Contact",
            socialTitle: "Our Social Networks"
        },

        currentLanguage: "EN | English"
    }
};

// ─── Detectar idioma ───────────────────────────────────────
function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && completeContent[urlLang]) return urlLang;

    const savedLang = localStorage.getItem('g2r-language');
    if (savedLang && completeContent[savedLang]) return savedLang;

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) return 'en';

    return 'es';
}

// ─── Detectar página actual ────────────────────────────────
function getCurrentPageName() {
    const filename = window.location.pathname.split('/').pop().replace('.html', '');
    const pageMap = {
        'index': 'index',
        'aboutus': 'aboutus',
        'services': 'services',
        'sustaintability': 'sustainability',
        'sustainability': 'sustainability',
        'companies': 'companies',
        'novedades': 'novedades',
        'gabrielgomez': 'gabriel',
        'carlosgiustozzi': 'carlos',
        'joseluisracconto': 'jose'
    };
    return pageMap[filename] || 'index';
}

// ─── Helper: set text si el elemento existe ────────────────
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
}

function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.innerHTML = value;
}

// ─── Función principal ─────────────────────────────────────
function switchLanguage(lang) {
    if (!completeContent[lang]) return;

    const data = completeContent[lang];
    const currentPage = getCurrentPageName();

    // Título de la pestaña
    document.title = data.pageTitles[currentPage] || data.pageTitles['index'];
    document.documentElement.lang = lang;

    // ── Navegación ──
    setText('nav-home', data.navHome);
    setText('nav-about', data.navAbout);
    setText('nav-services', data.navServices);
    setText('nav-sustainability', data.navSustainability);
    setText('nav-companies', data.navCompanies);
    setText('nav-news', data.navNews);
    setText('current-language', data.currentLanguage);

    // Actualizar bandera del botón principal
    const langFlag = document.querySelector('.usa-language__link .lang-flag');
    if (langFlag) {
        langFlag.src = lang === 'es'
            ? 'https://flagcdn.com/w20/es.png'
            : 'https://flagcdn.com/w20/gb.png';
        langFlag.alt = lang === 'es' ? 'ES' : 'EN';
    }

    // ── Footer ── (FIX: siempre se aplica, aunque se llame varias veces)
    setText('footer-useful-title', data.footer.usefulLinksTitle);
    setText('footer-contact-title', data.footer.contactTitle);
    setText('footer-social-title', data.footer.socialTitle);
    setText('footer-about', data.navAbout);
    setText('footer-services', data.navServices);
    setText('footer-sustainability', data.navSustainability);
    setText('footer-companies', data.navCompanies);
    setText('footer-news', data.navNews);
    setText('footer-gallery', data.navGallery);
    setText('footer-contact', data.navContact);

    // ── Contenido de la página ──
    const pageContent = data.pages[currentPage];
    if (!pageContent) return;

    // Hero
    setText('hero-title', pageContent.heroTitle);
    setText('hero-subtitle', pageContent.heroSubtitle);
    setText('hero-description', pageContent.heroDescription);
    setHTML('hero-text', pageContent.heroText);
    setText('gallery-title', pageContent.galleryTitle);

    // Hero button (preserva el SVG)
    const heroButton = document.getElementById('hero-button');
    if (heroButton && pageContent.heroButton) {
        const svg = heroButton.querySelector('.swipecontainer');
        if (svg) {
            heroButton.childNodes[0].textContent = pageContent.heroButton + ' ';
        } else {
            heroButton.textContent = pageContent.heroButton;
        }
    }

    // About / index
    setText('about-title', pageContent.aboutTitle);
    setHTML('about-text', pageContent.aboutText);

    // Section title genérico
    setText('section-title', pageContent.sectionTitle);

    // ── About us — hover "View profile" fix ──
    if (currentPage === 'aboutus') {
        // FIX: inyectar CSS dinámico para el pseudo-elemento ::before (hover)
        let styleTag = document.getElementById('g2r-lang-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'g2r-lang-style';
            document.head.appendChild(styleTag);
        }
        const profileText = pageContent.profileHoverText || 'Ver perfil';
        styleTag.textContent = `.link p::before { content: "${profileText}" !important; }`;

        // FIX: texto visible del link "Ver perfil" / "View profile"
        document.querySelectorAll('.link p').forEach(el => {
            if (['Ver perfil', 'View profile'].includes(el.textContent.trim())) {
                el.textContent = pageContent.viewProfile;
            }
        });

        // Roles de miembros
        document.querySelectorAll('.services_text p').forEach(el => {
            if (['Miembro Cofundador', 'Founding Member'].includes(el.textContent.trim())) {
                el.textContent = pageContent.memberRole;
            }
        });
    }

    // ── Sustainability ──
    if (currentPage === 'sustainability') {
        // FIX: título principal por su ID específico
        setText('commitment-title', pageContent.commitmentTitle);
        setText('ods-title', pageContent.odsTitle);
        setText('ods-text', pageContent.odsText);

        // FIX: imagen ODS
        const odsImg = document.querySelector('.ods-colab');
        if (odsImg && pageContent.odsImage) {
            odsImg.src = pageContent.odsImage;
        }

        // Lista de compromisos
        if (pageContent.commitmentList) {
            const items = document.querySelectorAll('.services ul li');
            items.forEach((item, i) => {
                if (pageContent.commitmentList[i]) {
                    item.innerHTML = `<i class="fa-solid fa-check"></i>${pageContent.commitmentList[i]}`;
                }
            });
        }
    }

    // ── Companies ──
    if (currentPage === 'companies') {
        // FIX: título principal por su ID específico
        setText('companies-title', pageContent.companiesTitle);

        const introEl = document.querySelector('.about_container p');
        if (introEl && pageContent.companyIntroText) {
            introEl.innerHTML = pageContent.companyIntroText;
        }
    }

    // ── Contact form (index page) ──
    if (currentPage === 'index' && pageContent.contactHeading) {
        // Heading
        const contactHeading = document.querySelector('.g2r_contact__heading');
        if (contactHeading) contactHeading.textContent = pageContent.contactHeading;

        // Labels
        const labelName = document.querySelector('label[for="Name"]');
        if (labelName) {
            labelName.innerHTML = `${pageContent.contactLabelName} <span class="g2r_required">*</span>`;
        }
        const labelPhone = document.querySelector('label[for="number"]');
        if (labelPhone) labelPhone.textContent = pageContent.contactLabelPhone;

        const labelEmail = document.querySelector('label[for="email"]');
        if (labelEmail) {
            labelEmail.innerHTML = `${pageContent.contactLabelEmail} <span class="g2r_required">*</span>`;
        }
        const labelSubject = document.querySelector('label[for="asunto"]');
        if (labelSubject) labelSubject.textContent = pageContent.contactLabelSubject;

        const labelMessage = document.querySelector('label[for="textarea"]');
        if (labelMessage) {
            labelMessage.innerHTML = `${pageContent.contactLabelMessage} <span class="g2r_required">*</span>`;
        }

        // Placeholders
        const inputName = document.getElementById('Name');
        if (inputName) inputName.placeholder = pageContent.contactPlaceholderName;

        const inputPhone = document.getElementById('number');
        if (inputPhone) inputPhone.placeholder = pageContent.contactPlaceholderPhone;

        const inputEmail = document.getElementById('email');
        if (inputEmail) inputEmail.placeholder = pageContent.contactPlaceholderEmail;

        const inputSubject = document.getElementById('asunto');
        if (inputSubject) inputSubject.placeholder = pageContent.contactPlaceholderSubject;

        const inputMessage = document.getElementById('textarea');
        if (inputMessage) inputMessage.placeholder = pageContent.contactPlaceholderMessage;

        // Error messages
        const errors = document.querySelectorAll('#g2r-group-name .g2r_contact__error:not(.g2r_captcha_error)');
        if (errors[0]) errors[0].textContent = pageContent.contactErrorName;

        const emailErrors = document.querySelectorAll('#g2r-group-email .g2r_contact__error');
        if (emailErrors[0]) emailErrors[0].textContent = pageContent.contactErrorEmail;

        const messageErrors = document.querySelectorAll('#g2r-group-textarea .g2r_contact__error');
        if (messageErrors[0]) messageErrors[0].textContent = pageContent.contactErrorMessage;

        const captchaError = document.getElementById('g2r-captcha-error');
        if (captchaError) captchaError.textContent = pageContent.contactErrorCaptcha;

        // Required note
        const requiredNote = document.querySelector('.g2r_required_note');
        if (requiredNote) {
            requiredNote.innerHTML = `<span class="g2r_required">*</span> ${pageContent.contactRequiredNote}`;
        }

        // Button
        const btn = document.querySelector('.g2r_contact__btn');
        if (btn && !btn.disabled) btn.textContent = pageContent.contactBtn;

        // Store translations for use in g2rCheckAndSend
        window.g2rContactStrings = {
            btn: pageContent.contactBtn,
            btnSending: pageContent.contactBtnSending,
            successTitle: pageContent.contactSuccessTitle,
            successText: pageContent.contactSuccessText,
            errorTitle: pageContent.contactErrorTitle,
            errorText: pageContent.contactErrorText,
            close: pageContent.contactClose
        };
    }

    // ── Novedades ──
    if (currentPage === 'novedades') {
        // FIX: párrafos por clase ya que no tienen IDs
        const paras = document.querySelectorAll('.novedades_container .section_p');
        if (paras[0] && pageContent.noveltyPara1) paras[0].textContent = pageContent.noveltyPara1;
        if (paras[1] && pageContent.noveltyPara2) paras[1].textContent = pageContent.noveltyPara2;
    }

    // ── Services ──
    if (currentPage === 'services') {
        setText('mission-title', pageContent.missionTitle);
        setText('mission-text', pageContent.missionText);
        setText('experience-title', pageContent.experienceTitle);
        setText('experience-text', pageContent.experienceText);

        if (pageContent.servicesList) {
            const items = document.querySelectorAll('#services-list li');
            items.forEach((item, i) => {
                if (pageContent.servicesList[i]) {
                    item.innerHTML = `<i class="fa-solid fa-check"></i>${pageContent.servicesList[i]}`;
                }
            });
        }
    }

    // ── Member pages ──
    if (['gabriel', 'carlos', 'jose'].includes(currentPage)) {
        const nameEl = document.querySelector('.services_text h3');
        if (nameEl && pageContent.memberName) nameEl.textContent = pageContent.memberName;

        const roleEl = document.querySelector('.services_text h4');
        if (roleEl && pageContent.memberRole) roleEl.textContent = pageContent.memberRole;

        const headingP = document.querySelector('.services_text .headingp');
        if (headingP && pageContent.memberHeadingP) headingP.textContent = pageContent.memberHeadingP;

        // El último <p> es la descripción larga
        const allP = document.querySelectorAll('.services_text p');
        const descP = allP[allP.length - 1];
        if (descP && pageContent.memberDescriptionP) descP.textContent = pageContent.memberDescriptionP;
    }

    // Guardar preferencia
    localStorage.setItem('g2r-language', lang);
}

// ─── Inicialización ────────────────────────────────────────
function applyLanguageImmediately() {
    const lang = detectLanguage();
    document.title = (completeContent[lang].pageTitles[getCurrentPageName()] || completeContent[lang].pageTitles['index']);
    document.documentElement.lang = lang;
    switchLanguage(lang);
}

function initializeLanguageSystem() {
    switchLanguage(detectLanguage());
}

// With defer, scripts run after DOM is parsed — DOMContentLoaded is the right place
// applyLanguageImmediately is kept for header/footer re-calls from components loaders
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSystem();
});

// Exportar globalmente
window.switchLanguage = switchLanguage;
window.detectLanguage = detectLanguage;
window.initializeLanguageSystem = initializeLanguageSystem;
window.applyLanguageImmediately = applyLanguageImmediately;