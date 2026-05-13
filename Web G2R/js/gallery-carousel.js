// CARRUSEL QUE FUNCIONA DE VERDAD - G2R Mining Solutions
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('galleryCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('carouselIndicators');
    
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.gallery_items');
    let currentSlide = 0;
    
    // Función para obtener cuántas imágenes mostrar según el tamaño de pantalla
    function getItemsPerView() {
        if (window.innerWidth <= 768) return 1; // Móvil
        if (window.innerWidth <= 1024) return 2; // Tablet
        return 4; // Desktop - 4 fotos
    }
    
    let itemsPerView = getItemsPerView();
    let totalSlides = Math.ceil(items.length / itemsPerView);
    
    // Crear indicadores
    function createIndicators() {
        if (!indicators) return;
        indicators.innerHTML = '';
        totalSlides = Math.ceil(items.length / itemsPerView);
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === currentSlide) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicators.appendChild(indicator);
        }
    }
    
    // Ir a un slide específico
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Actualizar el carrusel - FUNCIONA DE VERDAD
    function updateCarousel() {
        // Calcular el desplazamiento de manera CORRECTA
        let translateX = 0;
        
        if (itemsPerView === 1) {
            // Móvil: cada imagen es un slide completo
            translateX = -(currentSlide * 100);
        } else if (itemsPerView === 2) {
            // Tablet: cada slide muestra 2 imágenes
            translateX = -(currentSlide * 50);
        } else {
            // Desktop: cada slide muestra 4 imágenes NUEVAS sin superposición
            // Desplazamiento de 100% para mostrar las siguientes 4 imágenes
            translateX = -(currentSlide * 100); // 100% por slide para ver las siguientes 4 imágenes
        }
        
        // Aplicar la transformación
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar indicadores
        const indicatorElements = indicators?.querySelectorAll('.indicator');
        indicatorElements?.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        
        // Actualizar botones - carrusel infinito, no se deshabilitan
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = false;
    }
    
    // Siguiente slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            // Volver al inicio cuando llegue al final
            currentSlide = 0;
        }
        updateCarousel();
    }
    
    // Slide anterior
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            // Ir al final cuando esté en el inicio
            currentSlide = totalSlides - 1;
        }
        updateCarousel();
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Responsive
    window.addEventListener('resize', function() {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            totalSlides = Math.ceil(items.length / itemsPerView);
            currentSlide = Math.min(currentSlide, totalSlides - 1);
            createIndicators();
            updateCarousel();
        }
    });
    
    // Inicializar
    createIndicators();
    updateCarousel();
});