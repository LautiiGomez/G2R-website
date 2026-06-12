// G2R Mining Solutions - Gallery Carousel
// Dots: all on desktop, 3 visible at a time on mobile

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('galleryCarousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.gallery_items');
    const totalItems = items.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.querySelector('.carousel_indicators');

    let currentIndex = 0;
    let itemsPerView = getItemsPerView();

    // ── Crear dots ────────────────────────────────────────────
    function createIndicators() {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerView);
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.classList.add('indicator');
            dot.setAttribute('aria-label', `Página ${i + 1}`);
            dot.addEventListener('click', () => goToPage(i));
            indicatorsContainer.appendChild(dot);
        }
        updateDots();
    }

    // ── Cuántos items se muestran según el ancho ──────────────
    function getItemsPerView() {
        const w = window.innerWidth;
        if (w <= 1024) return 1;
        return 4;
    }

    // ── Ir a una "página" (grupo de items) ────────────────────
    function goToPage(pageIndex) {
        const totalPages = Math.ceil(totalItems / itemsPerView);
        if (pageIndex < 0) pageIndex = 0;
        if (pageIndex >= totalPages) pageIndex = totalPages - 1;

        currentIndex = pageIndex * itemsPerView;
        const offset = (currentIndex / totalItems) * 100;
        carousel.style.transform = `translateX(-${offset}%)`;

        updateButtons();
        updateDots();
        updateMobileDots();
    }

    // ── Actualizar estado de botones ──────────────────────────
    function updateButtons() {
        const totalPages = Math.ceil(totalItems / itemsPerView);
        const currentPage = Math.floor(currentIndex / itemsPerView);
        if (prevBtn) prevBtn.disabled = currentPage === 0;
        if (nextBtn) nextBtn.disabled = currentPage >= totalPages - 1;
    }

    // ── Actualizar dot activo ─────────────────────────────────
    function updateDots() {
        if (!indicatorsContainer) return;
        const dots = indicatorsContainer.querySelectorAll('.indicator');
        const currentPage = Math.floor(currentIndex / itemsPerView);
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentPage);
        });
    }

    // ── En mobile: mostrar solo 3 dots centrados en el activo ──
    function updateMobileDots() {
        if (!indicatorsContainer) return;
        const isMobile = window.innerWidth <= 1024;
        const dots = Array.from(indicatorsContainer.querySelectorAll('.indicator'));
        const totalDots = dots.length;

        if (!isMobile || totalDots <= 3) {
            // En desktop o pocos dots: mostrar todos
            dots.forEach(d => d.classList.remove('hidden'));
            return;
        }

        const currentPage = Math.floor(currentIndex / itemsPerView);

        // Calcular ventana de 3 dots
        let start = currentPage - 1;
        if (start < 0) start = 0;
        if (start + 3 > totalDots) start = totalDots - 3;

        dots.forEach((dot, i) => {
            dot.classList.toggle('hidden', i < start || i >= start + 3);
        });
    }

    // ── Botones prev/next ─────────────────────────────────────
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const currentPage = Math.floor(currentIndex / itemsPerView);
            goToPage(currentPage - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentPage = Math.floor(currentIndex / itemsPerView);
            goToPage(currentPage + 1);
        });
    }

    // ── Swipe táctil ──────────────────────────────────────────
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            const currentPage = Math.floor(currentIndex / itemsPerView);
            if (diff > 0) {
                goToPage(currentPage + 1); // swipe izquierda → siguiente
            } else {
                goToPage(currentPage - 1); // swipe derecha → anterior
            }
        }
    }, { passive: true });

    // ── Recalcular en resize ──────────────────────────────────
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newItemsPerView = getItemsPerView();
            if (newItemsPerView !== itemsPerView) {
                itemsPerView = newItemsPerView;
                currentIndex = 0;
                carousel.style.transform = 'translateX(0)';
                createIndicators();
            } else {
                updateMobileDots();
            }
        }, 150);
    });

    // ── Inicializar ───────────────────────────────────────────
    function init() {
        itemsPerView = getItemsPerView();
        carousel.style.transform = 'translateX(0)';
        createIndicators();
        updateButtons();
    }

    init();
});