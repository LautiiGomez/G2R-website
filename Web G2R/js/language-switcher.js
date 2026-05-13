/* -------------------------------- 
G2R Mining Solutions - Language Switcher
Archivo: language-switcher.js
Descripción: Sistema inteligente de cambio de idioma
-------------------------------- */

// Contenido en diferentes idiomas
const content = {
    es: {
        // Títulos y metadatos
        pageTitle: "Inicio | G2R Mining Solutions",
        heroTitle: "G2R mining solutions",
        heroSubtitle: "Experiencia",
        heroDescription: "Eso es lo que nos caracteriza",
        heroText: "Durante más de 20 años hemos trabajado en diversos proyectos geológicos, desde exploración minera hasta estudios geológicos para clientes particulares.",
        heroButton: "Conoce más",
        
        // Navegación
        navHome: "Inicio",
        navAbout: "Sobre nosotros",
        navServices: "Qué hacemos",
        navSustainability: "Sostenibilidad",
        navCompanies: "Compañías asociadas",
        navNews: "Novedades",
        
        // Idioma
        currentLanguage: "ES | Español",
        
        // Sección About
        aboutTitle: "Un poco acerca de nosotros",
        aboutText: "G2R mining solutions es una empresa pensada para brindar soluciones a sus clientes dentro del ámbito minero, abarcando desde la constitución de empresas o filiales locales de empresas extranjeras hasta trabajos específicos de geología, hidrogeología, geoquímica, geofísica entre otros. <br>Nuestra idea es brindarle al cliente la mejor opción para lograr su objetivo, usando como herramienta la experiencia acumulada de años de trabajo en la industria por parte de sus socios fundadores, profesionales apasionados por la geología y la minería. <br>Contamos con una amplia red de contactos con empresas y profesionales asociados que nos permiten brindar la mejor opción, en forma rápida y precisa, para cualquier desafío que nuestro cliente se proponga dentro del amplio espectro de la industria minera. <br>G2R es una nueva empresa con muchos años de experiencia.",
        
        // Sección Services
        servicesTitle: "Nuestro equipo",
        memberRole: "Miembro Cofundador",
        viewProfile: "Ver perfil",
        
        // Sección Gallery
        galleryTitle: "Galería",
        
        // Sección Contact
        contactTitle: "Contacto",
        addressTitle: "Dirección",
        addressText: "Mendoza, Argentina",
        phoneTitle: "Teléfono",
        phoneText: "+54 9 261 688-8898",
        emailTitle: "Email",
        emailText: "info@g2rmining.com",
        
        // Enlaces
        aboutLink: "../html/aboutuses.html",
        gabrielLink: "../html/gabrielgomezes.html",
        carlosLink: "../html/carlosgiustozzies.html",
        joseLink: "../html/joseluisraccontoes.html"
    },
    
    en: {
        // Títulos y metadatos
        pageTitle: "Home | G2R Mining Solutions",
        heroTitle: "G2R mining solutions",
        heroSubtitle: "Experience",
        heroDescription: "That's what characterizes us",
        heroText: "For over 20 years, we have worked on various geological projects, from mineral exploration to geological studies for private clients.",
        heroButton: "Know more",
        
        // Navegación
        navHome: "Home",
        navAbout: "About us",
        navServices: "What we do",
        navSustainability: "Sustainability",
        navCompanies: "Associated companies",
        navNews: "News",
        
        // Idioma
        currentLanguage: "EN | English",
        
        // Sección About
        aboutTitle: "A little about us",
        aboutText: "G2R Mining Solutions is a company designed to provide solutions to its clients within the mining field, ranging from creating companies or local subsidiaries of foreign companies to specific work in geology, hydrogeology, geochemistry, and geophysics, among others. <br>Our idea is to provide the client with the best option to achieve their goal, using as a tool the accumulated experience of years of work in the industry by its founding partners, professionals passionate about geology and mining. <br>We have a wide network of contacts with associated companies and professionals that allow us to provide the best option, quickly and accurately, for any challenge that our client proposes within the broad spectrum of the mining industry. <br>G2R is a new company with many years of experience.",
        
        // Sección Services
        servicesTitle: "Our team",
        memberRole: "Founding Member",
        viewProfile: "View profile",
        
        // Sección Gallery
        galleryTitle: "Gallery",
        
        // Sección Contact
        contactTitle: "Contact",
        addressTitle: "Address",
        addressText: "Mendoza, Argentina",
        phoneTitle: "Phone",
        phoneText: "+54 9 261 688-8898",
        emailTitle: "Email",
        emailText: "info@g2rmining.com",
        
        // Enlaces
        aboutLink: "../html/aboutusen.html",
        gabrielLink: "../html/gabrielgomezen.html",
        carlosLink: "../html/carlosgiustozzien.html",
        joseLink: "../html/joseluisraccontoen.html"
    }

};

// Función para detectar el idioma preferido del usuario
function detectLanguage() {
    // 1. Verificar parámetro URL (ej: ?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && content[urlLang]) {
        return urlLang;
    }
    
    // 2. Verificar localStorage (preferencia guardada)
    const savedLang = localStorage.getItem('g2r-language');
    if (savedLang && content[savedLang]) {
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

// Función para cambiar el contenido según el idioma
function switchLanguage(lang) {
    if (!content[lang]) return;
    
    const data = content[lang];
    
    // Cambiar título de la página
    document.title = data.pageTitle;
    document.getElementById('page-title').textContent = data.pageTitle;
    
    // Cambiar contenido del hero
    document.getElementById('hero-title').textContent = data.heroTitle;
    document.getElementById('hero-subtitle').textContent = data.heroSubtitle;
    document.getElementById('hero-description').textContent = data.heroDescription;
    document.getElementById('hero-text').textContent = data.heroText;
    document.getElementById('hero-button').textContent = data.heroButton;
    document.getElementById('hero-button').href = data.aboutLink;
    
    // Cambiar contenido de About
    document.getElementById('about-title').textContent = data.aboutTitle;
    document.getElementById('about-text').innerHTML = data.aboutText;
    
    // Cambiar contenido de Services
    document.getElementById('services-title').textContent = data.servicesTitle;
    document.getElementById('member-role-1').textContent = data.memberRole;
    document.getElementById('member-role-2').textContent = data.memberRole;
    document.getElementById('member-role-3').textContent = data.memberRole;
    document.getElementById('view-profile-1').textContent = data.viewProfile;
    document.getElementById('view-profile-2').textContent = data.viewProfile;
    document.getElementById('view-profile-3').textContent = data.viewProfile;
    
    // Cambiar enlaces de perfiles
    document.querySelector('a[href*="gabrielgomezes"]').href = data.gabrielLink;
    document.querySelector('a[href*="carlosgiustozzies"]').href = data.carlosLink;
    document.querySelector('a[href*="joseluisraccontoes"]').href = data.joseLink;
    
    // Cambiar contenido de Gallery
    document.getElementById('gallery-title').textContent = data.galleryTitle;
    
    // Cambiar contenido de Contact
    document.getElementById('contact-title').textContent = data.contactTitle;
    document.getElementById('address-title').textContent = data.addressTitle;
    document.getElementById('address-text').textContent = data.addressText;
    document.getElementById('phone-title').textContent = data.phoneTitle;
    document.getElementById('phone-text').textContent = data.phoneText;
    document.getElementById('email-title').textContent = data.emailTitle;
    document.getElementById('email-text').textContent = data.emailText;
    
    // Cambiar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Cambiar navegación del header
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
    
    // Cambiar texto del botón de idioma
    const languageButton = document.getElementById('current-language');
    if (languageButton) {
        languageButton.textContent = data.currentLanguage;
    }
    
    // Guardar preferencia
    localStorage.setItem('g2r-language', lang);
}

// Función para crear botón de cambio de idioma
function createLanguageButton() {
    const currentLang = detectLanguage();
    const otherLang = currentLang === 'es' ? 'en' : 'es';
    const buttonText = otherLang === 'es' ? 'ES' : 'EN';
    
    // Crear botón flotante
    const button = document.createElement('button');
    button.id = 'language-switcher';
    button.textContent = buttonText;
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        switchLanguage(otherLang);
        button.textContent = otherLang === 'es' ? 'EN' : 'ES';
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(button);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    switchLanguage(lang);
    createLanguageButton();
});

// Exportar funciones para uso global
window.switchLanguage = switchLanguage;
window.detectLanguage = detectLanguage;
