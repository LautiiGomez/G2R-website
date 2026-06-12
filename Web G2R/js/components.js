// JavaScript para incluir componentes reutilizables
// G2R Mining Solutions

function includeHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('Web G2R/components/header-component.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                initializeHeader();
                // Re-apply language after async header load
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

function includeFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('Web G2R/components/footer-component.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
                // Re-apply language after async footer load
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

function initializeHeaderScroll() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 0) {
                header.classList.add('white');
            } else {
                header.classList.remove('white');
            }
        }
    });
}

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