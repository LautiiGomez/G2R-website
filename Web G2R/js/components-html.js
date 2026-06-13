// JavaScript para incluir componentes reutilizables
// G2R Mining Solutions - Versión para páginas en html/

// Función para incluir header
function includeHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('../components/header-component-html.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                initializeHeader();
                // Aplicar estado correcto del header apenas se inyecta
                updateHeaderState();
                // Re-aplicar idioma al header DESPUÉS de que cargó
                const lang = localStorage.getItem('g2r-language') || 'es';
                if (window.switchLanguage) {
                    window.switchLanguage(lang);
                }
            })
            .catch(error => {
                console.error('Error cargando header:', error);
                headerPlaceholder.innerHTML = '<p>Error cargando header</p>';
            });
    }
}

// Función para incluir footer
function includeFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('../components/footer-component-html.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
                // Re-aplicar idioma al footer DESPUÉS de que cargó
                const lang = localStorage.getItem('g2r-language') || 'es';
                if (window.switchLanguage) {
                    window.switchLanguage(lang);
                }
            })
            .catch(error => {
                console.error('Error cargando footer:', error);
                footerPlaceholder.innerHTML = '<p>Error cargando footer</p>';
            });
    }
}

// Función para inicializar funcionalidad del header
function initializeHeader() {
    const click = document.getElementById('click');
    const menuBtn = document.querySelector('.menu_btn');
    const closeBtn = document.querySelector('.close_btn');

    if (click && menuBtn && closeBtn) {
        click.addEventListener('change', function () {
            if (this.checked) {
                menuBtn.style.display = 'none';
                closeBtn.style.display = 'block';
            } else {
                menuBtn.style.display = 'block';
                closeBtn.style.display = 'none';
            }
        });
    }

    const languageLink = document.querySelector('.usa-language__link');
    const languageSubmenu = document.querySelector('.usa-language__submenu');

    if (languageLink && languageSubmenu) {
        function positionDropdown() {
            if (languageSubmenu.hasAttribute('hidden')) return;
            const rect = languageSubmenu.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            if (rect.right > viewportWidth) {
                languageSubmenu.style.right = 'auto';
                languageSubmenu.style.left = '0';
                languageSubmenu.style.transform = 'translateX(-100%)';
            } else {
                languageSubmenu.style.right = '0';
                languageSubmenu.style.left = 'auto';
                languageSubmenu.style.transform = 'translateX(0)';
            }
        }

        languageLink.addEventListener('click', function (e) {
            e.preventDefault();
            const isHidden = languageSubmenu.hasAttribute('hidden');
            if (isHidden) {
                languageSubmenu.removeAttribute('hidden');
                this.setAttribute('aria-expanded', 'true');
                setTimeout(positionDropdown, 0);
            } else {
                languageSubmenu.setAttribute('hidden', 'true');
                this.setAttribute('aria-expanded', 'false');
            }
        });

        window.addEventListener('resize', positionDropdown);

        document.addEventListener('click', function (e) {
            if (!languageLink.contains(e.target) && !languageSubmenu.contains(e.target)) {
                languageSubmenu.setAttribute('hidden', 'true');
                languageLink.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Páginas donde el header debe ser siempre sólido (blanco)
// sin importar la posición del scroll
const SOLID_HEADER_PAGES = ['novedades'];

// Detecta si la página actual requiere header siempre sólido
function isHeaderAlwaysSolid() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    return SOLID_HEADER_PAGES.includes(currentPage);
}

// Actualiza el estado visual del header según scroll y página
function updateHeaderState() {
    const header = document.querySelector('header');
    if (!header) return;

    if (isHeaderAlwaysSolid() || window.scrollY > 0) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
}

// Función para inicializar el scroll del header
function initializeHeaderScroll() {
    // Aplicar estado inicial
    updateHeaderState();
    // Actualizar en cada scroll
    window.addEventListener('scroll', updateHeaderState);
}

// Cargar componentes cuando la página esté lista
document.addEventListener('DOMContentLoaded', function () {
    includeHeader();
    includeFooter();
    initializeHeaderScroll();
});

window.G2RComponents = {
    includeHeader,
    includeFooter,
    initializeHeader,
    initializeHeaderScroll
};