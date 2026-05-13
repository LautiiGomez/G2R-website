/* -------------------------------- 
G2R Mining Solutions - Complete Language System
Archivo: complete-language-system.js
Descripción: Sistema completo de cambio de idioma para TODAS las páginas
-------------------------------- */

// Contenido completo en diferentes idiomas
const completeContent = {
    es: {
        // Navegación
        navHome: "Inicio",
        navAbout: "Sobre nosotros",
        navServices: "Qué hacemos",
        navSustainability: "Sostenibilidad",
        navCompanies: "Compañías asociadas",
        navNews: "Novedades",
        navGallery: "Galería",
        navContact: "Contacto",
        
        // Títulos de páginas
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
        
        // Contenido específico por página
        pages: {
            'index': {
                heroTitle: "G2R mining solutions",
                heroSubtitle: "Experiencia",
                heroDescription: "Eso es lo que nos caracteriza",
                heroText: "Durante más de 20 años hemos trabajado en diversos proyectos geológicos, desde exploración minera hasta estudios geológicos para clientes particulares.",
                heroButton: "Conoce más",
                aboutTitle: "Un poco acerca de nosotros",
                aboutText: "G2R mining solutions es una empresa pensada para brindar soluciones a sus clientes dentro del ámbito minero, abarcando desde la constitución de empresas o filiales locales de empresas extranjeras hasta trabajos específicos de geología, hidrogeología, geoquímica, geofísica entre otros. <br>Nuestra idea es brindarle al cliente la mejor opción para lograr su objetivo, usando como herramienta la experiencia acumulada de años de trabajo en la industria por parte de sus socios fundadores, profesionales apasionados por la geología y la minería. <br>Contamos con una amplia red de contactos con empresas y profesionales asociados que nos permiten brindar la mejor opción, en forma rápida y precisa, para cualquier desafío que nuestro cliente se proponga dentro del amplio espectro de la industria minera. <br>G2R es una nueva empresa con muchos años de experiencia.",
                teamTitle: "Nuestro equipo",
                memberRole: "Miembro Cofundador",
                viewProfile: "Ver perfil",
                galleryTitle: "Galería",
                contactTitle: "Contacto",
                addressTitle: "Dirección",
                addressText: "Mendoza, Argentina",
                phoneTitle: "Teléfono",
                phoneText: "+54 9 261 688-8898",
                emailTitle: "Email",
                emailText: "info@g2rmining.com"
            },
            'aboutus': {
                heroTitle: "Sobre nosotros",
                sectionTitle: "Nuestro equipo",
                memberRole: "Miembro Cofundador",
                viewProfile: "Ver perfil"
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
                sectionTitle: "Nuestro Compromiso con la Sostenibilidad Ambiental",
                commitmentList: [
                    "En G2R conocemos de la importancia y estamos convencidos de que toda industria debe poseer políticas concretas y claros enfoques de sostenibilidad como primer acto de la creacion de valor social.",
                    "Los años de experiencia de los socios fundadores en distintas compañías nacionales e internacionales avalan las políticas internas de nuestra compañía, totalmente encausadas en la sostenibilidad con el medio ambiente, las comunidades locales, el personal, su salud y seguridad, y la ética y conductas de negocios.",
                    "En G2R nuestro compromiso previo a cualquier trabajo que encaramos, es conocer y adaptarnos a las políticas y visión de nuestro cliente en temas de sostenibilidad, aportando en el caso de ser necesario, nuestra experiencias y puntos de vista en pos de la mejora continua.",
                    "Estamos convencidos de que la sostenibilidad es un pilar fundamental en nuestra industria."
                ],
                odsTitle: "G2R y su compromiso con los ODS",
                odsText: "En G2R nos enfocamos en colaborar con la causa de los Objetivos de Desarrollo Sostenible dentro de la industria geológica y minera. Buscamos implementar prácticas responsables que promuevan la gestión eficiente de los recursos naturales, la reducción del impacto ambiental y la mejora de las condiciones laborales en los proyectos mineros de las comunidades en las que operamos."
            },
            'companies': {
                heroTitle: "Compañías asociadas",
                sectionTitle: "Compañías asociadas",
                companyIntroText: "En G2R tenemos como objetivo ofrecer a nuestros clientes soluciones concretas, rápidas, eficientes y sostenibles al momento de encarar trabajos en el ámbito minero. Además, queremos que nuestros servicios sean integrales; es por esto, que hemos conformado alianzas estratégicas con profesionales y compañías afines para poder brindar soluciones en distintas labores o disciplinas relacionadas a la industria minera, en cualquiera de sus etapas y siempre orientados a la alta calidad. Contamos con profesionales asociados de alto nivel y reconocimiento en disciplinas como la hidrogeología, geofísica, asuntos legales y propiedad minera, ambientales, entre otros. También contamos con empresas asociadas de excelente nivel y trayectoria como estudios contables, empresas de logística, contratación de personal, transporte de personas, entre otras."
            },
            'novedades': {
                heroTitle: "Novedades",
                sectionTitle: "Próximamente publicaremos Novedades!",
                aboutText: "Estamos trabajando en traerte las últimas noticias, actualizaciones y novedades de G2R Mining Solutions. Muy pronto podrás encontrar aquí información sobre nuestros nuevos proyectos, avances tecnológicos, eventos importantes y todo lo relacionado con la industria minera."
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
                memberDescriptionP: "Carlos completó su formación académica con un Diplomado en Economía de Minerales en la Cámara Minera del Perú/Sociedad Geológica de Sudáfrica posterior a su egreso de la Universidad Nacional de San Juan. Además realizó distintos cursos de especialización, entre los que se destaca Ore Deposit Models & Exploration Strategies en el CODES, Universidad de Tasmania. Es especialista en Exploración, Evaluación y Gerenciamiento de Proyectos Mineros. Desde el año 1990 ha estado involucrado en la exploración minera con numerosas empresas Junior y Senior. Ha trabajado en distintos ambientes geológicos a lo largo de toda la Argentina, además de Chile y Perú. Yacimientos epitermales de baja y alta sulfuración, porphyry related deposits, orogenic gold deposits, sediment hosted deposits, son algunos de los modelos de depósitos minerales con los que hizo su experiencia, explorando por Au, Ag, Cu, U y polimetálicos. Formó parte del equipo de Minera Andes descubridor de la mina San José-Huevos Verdes, en la provincia de Santa Cruz."
            },
            'jose': {
                heroTitle: "José Luis Racconto",
                sectionTitle: "José Luis Racconto",
                memberName: "José Luis Racconto",
                memberRole: "Miembro Cofundador",
                memberHeadingP: "Técnico en el área de minería y construcción.",
                memberDescriptionP: "José Luis ha participado en distintas empresas desde la prospección hasta la producción minera. Ha realizado cursos de especialización enfocados en minería, seguridad, medio ambiente, y software aplicados, con más de 25 años de experiencia en el sector. A lo largo de su experiencia dentro de la actividad, ha realizado trabajos orientados en el área legal y técnica, dentro de los cuales destacan, solicitud y seguimiento de propiedades mineras en distintas provincias de Argentina; planificación y ejecución de campañas para prospección; proyecto, evaluación y construcción de campamentos temporales; diseño y supervisión en la ejecución de huellas mineras; prospección y exploración en distintos ambientes en Argentina y Chile; control de sondajes, muestreos geoquímicos y metalúrgicos, base de datos (ejecución y análisis); y supervisión Senior en el área Ore Control en distintos métodos de explotación subterráneo y a cielo abierto (UG sublevel caving, sublevel stoping) habiendo participado en esta etapa en Mina Gualcamayo."
            }
        },
        
        // Footer
        footer: {
            usefulLinksTitle: "Conoce nuestra web",
            contactTitle: "Contacto",
            socialTitle: "Nuestras Redes Sociales",
            address: "Mendoza, Argentina",
            phone1: "+54 9 261 467-9038",
            phone2: "+54 9 261 698-5411", 
            phone3: "+54 9 261 688-8898",
            email: "g2rminingsolutions@gmail.com",
            rights: "© 2024 G2R Mining Solutions. Todos los derechos reservados."
        },
        
        // Idioma actual
        currentLanguage: "ES | Español"
    },
    
    en: {
        // Navegación
        navHome: "Home",
        navAbout: "About us",
        navServices: "What we do",
        navSustainability: "Sustainability",
        navCompanies: "Associated companies",
        navNews: "News",
        navGallery: "Gallery",
        navContact: "Contact",
        
        // Títulos de páginas
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
        
        // Contenido específico por página
        pages: {
            'index': {
                heroTitle: "G2R mining solutions",
                heroSubtitle: "Experience",
                heroDescription: "That's what characterizes us",
                heroText: "For over 20 years, we have worked on various geological projects, from mineral exploration to geological studies for private clients.",
                heroButton: "Know more",
                aboutTitle: "A little about us",
                aboutText: "G2R Mining Solutions is a company designed to provide solutions to its clients within the mining field, ranging from creating companies or local subsidiaries of foreign companies to specific work in geology, hydrogeology, geochemistry, and geophysics, among others. <br>Our idea is to provide the client with the best option to achieve their goal, using as a tool the accumulated experience of years of work in the industry by its founding partners, professionals passionate about geology and mining. <br>We have a wide network of contacts with associated companies and professionals that allow us to provide the best option, quickly and accurately, for any challenge that our client proposes within the broad spectrum of the mining industry. <br>G2R is a new company with many years of experience.",
                teamTitle: "Our team",
                memberRole: "Founding Member",
                viewProfile: "View profile",
                galleryTitle: "Gallery",
                contactTitle: "Contact",
                addressTitle: "Address",
                addressText: "Mendoza, Argentina",
                phoneTitle: "Phone",
                phoneText: "+54 9 261 688-8898",
                emailTitle: "Email",
                emailText: "info@g2rmining.com"
            },
            'aboutus': {
                heroTitle: "About us",
                sectionTitle: "Our team", 
                memberRole: "Founding Member",
                viewProfile: "View profile"
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
                sectionTitle: "Our Commitment to Environmental Sustainability",
                commitmentList: [
                    "At G2R, we understand the importance and are convinced that every industry must have concrete policies and clear sustainability approaches as the first act of creating social value.",
                    "The years of experience of the founding partners in different national and international companies endorse our company's internal policies, fully aligned with environmental sustainability, local communities, personnel, their health and safety, and business ethics and conduct.",
                    "At G2R, our commitment prior to any work we undertake is to understand and adapt to our client's policies and vision on sustainability issues, contributing, if necessary, our experiences and points of view in pursuit of continuous improvement.",
                    "We are convinced that sustainability is a fundamental pillar in our industry."
                ],
                odsTitle: "G2R and its commitment to the SDGs",
                odsText: "At G2R, we focus on collaborating with the cause of the Sustainable Development Goals within the geological and mining industry. We seek to implement responsible practices that promote the efficient management of natural resources, the reduction of environmental impact, and the improvement of working conditions in mining projects in the communities where we operate."
            },
            'companies': {
                heroTitle: "Associated companies", 
                sectionTitle: "Associated companies",
                companyIntroText: "At G2R, our goal is to offer our clients concrete, fast, efficient, and sustainable solutions when undertaking work in the mining field. Furthermore, we want our services to be comprehensive; this is why we have formed strategic alliances with professionals and related companies to provide solutions in different tasks or disciplines related to the mining industry, at any of its stages and always oriented towards high quality. We have high-level and recognized associated professionals in disciplines such as hydrogeology, geophysics, legal matters and mining property, environmental issues, among others. We also have associated companies of excellent level and trajectory such as accounting firms, logistics companies, personnel recruitment, transportation of people, among others."
            },
            'novedades': {
                heroTitle: "News",
                sectionTitle: "We will publish News soon!",
                aboutText: "We are working to bring you the latest news, updates and news from G2R Mining Solutions. Soon you will be able to find here information about our new projects, technological advances, important events and everything related to the mining industry."
            },
            'gabriel': {
                heroTitle: "Gabriel Gomez",
                sectionTitle: "Gabriel Gomez",
                memberName: "Gabriel Alejandro Gomez",
                memberRole: "Founding Member",
                memberHeadingP: "Geological Sciences graduate from the National University of San Juan, Argentina.",
                memberDescriptionP: "Gabriel has over 20 years of experience in mineral prospecting and exploration, starting as a field assistant, then as a junior and project geologist, up to senior geologist. His professional career has been strongly oriented towards field geology, using geological mapping, geochemical sampling, geophysical campaign development, and planning of exploration drilling campaigns and resource definition as main tools. He has also been part of teams for the evaluation and estimation of mineral resources and reserves. He has worked in different geological environments in various regions of Argentina and Chile, prospecting and exploring for gold, silver, copper, and polymetallics, in epithermal systems (HS and LS), sediment-hosted and Carlin-type, skarn, and porphyry deposits; with special participation in the discovery and development of the Cerro Moro Project, currently a producing mine."
            },
            'carlos': {
                heroTitle: "Carlos Giustozzi",
                sectionTitle: "Carlos Giustozzi",
                memberName: "Carlos Daniel Giustozzi",
                memberRole: "Founding Member",
                memberHeadingP: "Geological Sciences graduate from the National University of San Juan.",
                memberDescriptionP: "Carlos completed his academic training with a Diploma in Mineral Economics at the Mining Chamber of Peru/Geological Society of South Africa after graduating from the National University of San Juan. He also completed various specialization courses, notably Ore Deposit Models & Exploration Strategies at CODES, University of Tasmania. He is a specialist in Exploration, Evaluation, and Management of Mining Projects. Since 1990, he has been involved in mineral exploration with numerous Junior and Senior companies. He has worked in different geological environments throughout Argentina, as well as Chile and Peru. Low and high sulfidation epithermal deposits, porphyry related deposits, orogenic gold deposits, sediment hosted deposits, are some of the mineral deposit models with which he gained experience, exploring for Au, Ag, Cu, U, and polymetallics. He was part of the Minera Andes team that discovered the San José-Huevos Verdes mine in Santa Cruz province."
            },
            'jose': {
                heroTitle: "José Luis Racconto",
                sectionTitle: "José Luis Racconto",
                memberName: "José Luis Racconto",
                memberRole: "Founding Member",
                memberHeadingP: "Technician in the mining and construction area.",
                memberDescriptionP: "José Luis has participated in various companies from prospecting to mining production. He has completed specialization courses focused on mining, safety, environment, and applied software, with more than 25 years of experience in the sector. Throughout his experience in the activity, he has carried out work oriented in the legal and technical area, among which stand out, application and monitoring of mining properties in different provinces of Argentina; planning and execution of prospecting campaigns; project, evaluation and construction of temporary camps; design and supervision in the execution of mining tracks; prospecting and exploration in different environments in Argentina and Chile; drill hole control, geochemical and metallurgical sampling, database (execution and analysis); and Senior supervision in the Ore Control area in different underground and open pit mining methods (UG sublevel caving, sublevel stoping) having participated in this stage in Gualcamayo Mine."
            }
        },
        
        // Footer
        footer: {
            usefulLinksTitle: "Know our website",
            contactTitle: "Contact",
            socialTitle: "Our Social Networks",
            address: "Mendoza, Argentina",
            phone1: "+54 9 261 467-9038",
            phone2: "+54 9 261 698-5411",
            phone3: "+54 9 261 688-8898", 
            email: "g2rminingsolutions@gmail.com",
            rights: "© 2024 G2R Mining Solutions. All rights reserved."
        },
        
        // Idioma actual
        currentLanguage: "EN | English"
    }
};

// Función para detectar el idioma preferido del usuario
function detectLanguage() {
    // 1. Verificar parámetro URL (ej: ?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && completeContent[urlLang]) {
        return urlLang;
    }
    
    // 2. Verificar localStorage (preferencia guardada)
    const savedLang = localStorage.getItem('g2r-language');
    if (savedLang && completeContent[savedLang]) {
        return savedLang;
    }
    
    // 3. Detectar idioma del navegador
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        return 'en';
    }
    
    // 4. Por defecto, español
    return 'es';
}

// Función para obtener el nombre de la página actual
function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    
    // Mapear nombres de archivos a identificadores
    const pageMap = {
        'index': 'index',
        'index-unified': 'index', 
        'aboutuses': 'aboutus',
        'serviceses': 'services',
        'sustaintabilityes': 'sustainability',
        'companieses': 'companies',
        'novedades': 'novedades',
        'gabrielgomezes': 'gabriel',
        'carlosgiustozzies': 'carlos',
        'joseluisraccontoes': 'jose'
    };
    
    return pageMap[filename] || 'index';
}

// Función completa para cambiar idioma en cualquier página
function switchLanguage(lang) {
    if (!completeContent[lang]) return;
    
    const data = completeContent[lang];
    const currentPage = getCurrentPageName();
    
    // Cambiar título de la página
    const pageTitle = data.pageTitles[currentPage] || data.pageTitles['index'];
    document.title = pageTitle;
    
    // Cambiar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Cambiar navegación del header (si existe)
    const navElements = {
        'nav-home': data.navHome,
        'nav-about': data.navAbout,
        'nav-services': data.navServices,
        'nav-sustainability': data.navSustainability,
        'nav-companies': data.navCompanies,
        'nav-news': data.navNews
    };
    
    Object.keys(navElements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = navElements[id];
        }
    });
    
    // Cambiar texto del botón de idioma (si existe)
    const languageButton = document.getElementById('current-language');
    if (languageButton) {
        languageButton.textContent = data.currentLanguage;
    }
    
    // Cambiar contenido específico de la página
    const pageContent = data.pages[currentPage];
    if (pageContent) {
        // Cambiar títulos de hero por ID
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle && pageContent.heroTitle) {
            heroTitle.textContent = pageContent.heroTitle;
        }
        
        // Cambiar subtítulos y descripciones
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle && pageContent.heroSubtitle) {
            heroSubtitle.textContent = pageContent.heroSubtitle;
        }
        
        const heroDescription = document.getElementById('hero-description');
        if (heroDescription && pageContent.heroDescription) {
            heroDescription.textContent = pageContent.heroDescription;
        }
        
        // Cambiar texto del hero
        const heroText = document.getElementById('hero-text');
        if (heroText && pageContent.heroText) {
            heroText.innerHTML = pageContent.heroText;
        }
        
        // Cambiar botón del hero (preservando la estructura HTML)
        const heroButton = document.getElementById('hero-button');
        if (heroButton && pageContent.heroButton) {
            // Preservar el swipecontainer y solo cambiar el texto
            const swipecontainer = heroButton.querySelector('.swipecontainer');
            if (swipecontainer) {
                heroButton.innerHTML = `${pageContent.heroButton} <span class="swipecontainer"><svg height="20" width="20" viewBox="0 0 20 20" class="swipe-icon" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" stroke="currentColor" stroke-width="0.8"></path></svg></span>`;
            } else {
                heroButton.textContent = pageContent.heroButton;
            }
        }
        
        // Cambiar títulos de sección por ID
        const sectionTitle = document.getElementById('section-title');
        if (sectionTitle && pageContent.sectionTitle) {
            sectionTitle.textContent = pageContent.sectionTitle;
        }
        
        // Cambiar otros títulos específicos
        const aboutTitle = document.getElementById('about-title');
        if (aboutTitle && pageContent.aboutTitle) {
            aboutTitle.textContent = pageContent.aboutTitle;
        }
        
        const aboutText = document.getElementById('about-text');
        if (aboutText && pageContent.aboutText) {
            aboutText.innerHTML = pageContent.aboutText;
        }
        
        const teamTitle = document.getElementById('team-title');
        if (teamTitle && pageContent.teamTitle) {
            teamTitle.textContent = pageContent.teamTitle;
        }
        
        const galleryTitle = document.getElementById('gallery-title');
        if (galleryTitle && pageContent.galleryTitle) {
            galleryTitle.textContent = pageContent.galleryTitle;
        }
        
        const contactTitle = document.getElementById('contact-title');
        if (contactTitle && pageContent.contactTitle) {
            contactTitle.textContent = pageContent.contactTitle;
        }
        
        // Cambiar roles de miembros
        const memberRoles = document.querySelectorAll('.services_text p');
        memberRoles.forEach(role => {
            if (pageContent.memberRole && (role.textContent.includes('Miembro') || role.textContent.includes('Founding'))) {
                role.textContent = pageContent.memberRole;
            }
        });
        
        // Cambiar enlaces de "Ver perfil"
        const viewProfileLinks = document.querySelectorAll('.link p');
        viewProfileLinks.forEach(link => {
            if (pageContent.viewProfile && (link.textContent.includes('Ver perfil') || link.textContent.includes('View profile'))) {
                link.textContent = pageContent.viewProfile;
            }
        });
        
        // Cambiar información de contacto
        const addressTitle = document.getElementById('address-title');
        if (addressTitle && pageContent.addressTitle) {
            addressTitle.textContent = pageContent.addressTitle;
        }
        
        const addressText = document.getElementById('address-text');
        if (addressText && pageContent.addressText) {
            addressText.textContent = pageContent.addressText;
        }
        
        const phoneTitle = document.getElementById('phone-title');
        if (phoneTitle && pageContent.phoneTitle) {
            phoneTitle.textContent = pageContent.phoneTitle;
        }
        
        const phoneText = document.getElementById('phone-text');
        if (phoneText && pageContent.phoneText) {
            phoneText.textContent = pageContent.phoneText;
        }
        
        const emailTitle = document.getElementById('email-title');
        if (emailTitle && pageContent.emailTitle) {
            emailTitle.textContent = pageContent.emailTitle;
        }
        
        const emailText = document.getElementById('email-text');
        if (emailText && pageContent.emailText) {
            emailText.textContent = pageContent.emailText;
        }
        
        // Cambiar contenido específico de servicios
        if (currentPage === 'services') {
            // Cambiar títulos de misión y experiencia usando IDs
            const missionTitle = document.getElementById('mission-title');
            if (missionTitle && pageContent.missionTitle) {
                missionTitle.textContent = pageContent.missionTitle;
            }
            
            const missionText = document.getElementById('mission-text');
            if (missionText && pageContent.missionText) {
                missionText.textContent = pageContent.missionText;
            }
            
            const experienceTitle = document.getElementById('experience-title');
            if (experienceTitle && pageContent.experienceTitle) {
                experienceTitle.textContent = pageContent.experienceTitle;
            }
            
            const experienceText = document.getElementById('experience-text');
            if (experienceText && pageContent.experienceText) {
                experienceText.textContent = pageContent.experienceText;
            }
            
            // Cambiar lista de servicios
            if (pageContent.servicesList) {
                const serviceItems = document.querySelectorAll('#services-list li');
                serviceItems.forEach((item, index) => {
                    if (pageContent.servicesList[index]) {
                        const text = pageContent.servicesList[index];
                        item.innerHTML = `<i class="fa-solid fa-check"></i>${text}`;
                    }
                });
            }
        }
        
        // Cambiar contenido específico de sostenibilidad
        if (currentPage === 'sustainability') {
            // Cambiar lista de compromisos
            if (pageContent.commitmentList) {
                const commitmentItems = document.querySelectorAll('.services ul li');
                commitmentItems.forEach((item, index) => {
                    if (pageContent.commitmentList[index]) {
                        const text = pageContent.commitmentList[index];
                        item.innerHTML = `<i class="fa-solid fa-check"></i>${text}`;
                    }
                });
            }
            
            // Cambiar título de ODS
            const odsTitle = document.querySelector('.section_title-2');
            if (odsTitle && pageContent.odsTitle) {
                odsTitle.textContent = pageContent.odsTitle;
            }
            
            // Cambiar texto de ODS
            const odsText = document.querySelector('.services_text p');
            if (odsText && pageContent.odsText) {
                odsText.textContent = pageContent.odsText;
            }
        }
        
        // Cambiar contenido específico de compañías
        if (currentPage === 'companies') {
            // Cambiar texto de introducción
            const companyText = document.querySelector('.about_container p');
            if (companyText && pageContent.companyIntroText) {
                companyText.innerHTML = pageContent.companyIntroText.replace(/<br>/g, '<br>');
            }
        }
        
        // Cambiar contenido específico de miembros del equipo
        if (['gabriel', 'carlos', 'jose'].includes(currentPage)) {
            // Cambiar nombre del miembro
            const memberName = document.querySelector('.services_text h3');
            if (memberName && pageContent.memberName) {
                memberName.textContent = pageContent.memberName;
            }
            
            // Cambiar rol del miembro
            const memberRole = document.querySelector('.services_text h4');
            if (memberRole && pageContent.memberRole) {
                memberRole.textContent = pageContent.memberRole;
            }
            
            // Cambiar párrafo de encabezado
            const memberHeadingP = document.querySelector('.services_text .headingp');
            if (memberHeadingP && pageContent.memberHeadingP) {
                memberHeadingP.textContent = pageContent.memberHeadingP;
            }
            
            // Cambiar descripción del miembro
            const memberDescriptionP = document.querySelector('.services_text p:last-of-type');
            if (memberDescriptionP && pageContent.memberDescriptionP) {
                memberDescriptionP.textContent = pageContent.memberDescriptionP;
            }
        }
        
        // Cambiar contenido del footer
        const footerData = data.footer;
        if (footerData) {
            // Cambiar títulos del footer
            const usefulLinksTitle = document.querySelector('.useful_links h3');
            if (usefulLinksTitle && footerData.usefulLinksTitle) {
                usefulLinksTitle.textContent = footerData.usefulLinksTitle;
            }
            
            const contactTitle = document.querySelector('.contact_us h3');
            if (contactTitle && footerData.contactTitle) {
                contactTitle.textContent = footerData.contactTitle;
            }
            
            const socialTitle = document.querySelector('.follow_us h3');
            if (socialTitle && footerData.socialTitle) {
                socialTitle.textContent = footerData.socialTitle;
            }
            
            // Cambiar enlaces del footer
            const footerLinks = {
                'footer-about': data.navAbout,
                'footer-services': data.navServices,
                'footer-sustainability': data.navSustainability,
                'footer-companies': data.navCompanies,
                'footer-news': data.navNews,
                'footer-gallery': data.navGallery,
                'footer-contact': data.navContact
            };
            
            Object.keys(footerLinks).forEach(id => {
                const element = document.getElementById(id);
                if (element && footerLinks[id]) {
                    element.textContent = footerLinks[id];
                }
            });
        }
    }
    
    // Guardar preferencia
    localStorage.setItem('g2r-language', lang);
}

// Función para inicializar el sistema en cualquier página
function initializeLanguageSystem() {
    const lang = detectLanguage();
    switchLanguage(lang);
    
    // Agregar event listeners a los enlaces de idioma
    document.addEventListener('click', function(e) {
        if (e.target.closest('[onclick*="switchLanguage"]')) {
            e.preventDefault();
            const lang = e.target.closest('[onclick*="switchLanguage"]').onclick.toString().match(/switchLanguage\('(\w+)'\)/)[1];
            switchLanguage(lang);
        }
    });
}

// Función para aplicar idioma inmediatamente (antes de que se cargue el DOM completo)
function applyLanguageImmediately() {
    const lang = detectLanguage();
    const data = completeContent[lang];
    
    if (data) {
        // Cambiar título de la página inmediatamente
        document.title = data.pageTitles[getCurrentPageName()] || data.pageTitles['index'];
        
        // Cambiar atributo lang del HTML
        document.documentElement.lang = lang;
        
        // Cambiar navegación del header si ya está cargado
        const navElements = {
            'nav-home': data.navHome,
            'nav-about': data.navAbout,
            'nav-services': data.navServices,
            'nav-sustainability': data.navSustainability,
            'nav-companies': data.navCompanies,
            'nav-news': data.navNews
        };
        
        Object.keys(navElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = navElements[id];
            }
        });
        
        // Cambiar texto del botón de idioma si ya está cargado
        const languageButton = document.getElementById('current-language');
        if (languageButton) {
            languageButton.textContent = data.currentLanguage;
        }
    }
}

// Aplicar idioma inmediatamente cuando el script se carga
applyLanguageImmediately();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeLanguageSystem);

// Exportar funciones para uso global
window.switchLanguage = switchLanguage;
window.detectLanguage = detectLanguage;
window.initializeLanguageSystem = initializeLanguageSystem;
window.applyLanguageImmediately = applyLanguageImmediately;
