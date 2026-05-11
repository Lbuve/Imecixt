// ==========================================
// SCRIPT PRINCIPAL
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SLIDER AUTOMÁTICO
    // ==========================================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let slideInterval;
    
    function showSlide(index) {
        // Asegurar que el índice esté en rango
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Remover clase active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Agregar clase active al actual
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Auto-play cada 6 segundos
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 6000);
    }
    
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Event listeners para controles
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlideShow();
            startSlideShow();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlideShow();
            startSlideShow();
        });
    }
    
    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideShow();
            startSlideShow();
        });
    });
    
    // Pausar en hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlideShow);
        heroSlider.addEventListener('mouseleave', startSlideShow);
    }
    
    // Iniciar slider
    if (slides.length > 0) {
        startSlideShow();
    }
    
    // ==========================================
    // MENÚ MÓVIL
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');
            
            // Cambiar icono
            const icon = this.querySelector('i');
            if (navMobile.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMobile.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ==========================================
    // SCROLL SUAVE
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ==========================================
    // ANIMACIÓN AL HACER SCROLL (REVEAL)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas de productos
    setTimeout(() => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.classList.add('scroll-reveal');
            card.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(card);
        });
    }, 100);
    
    // ==========================================
    // PREVENIR ZOOM EN DOBLE CLICK EN MÓVILES
    // ==========================================
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    // ==========================================
    // LAZY LOADING PARA IMÁGENES (si las añades)
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ==========================================
    // DETECTAR CLICK FUERA DEL MENÚ MÓVIL
    // ==========================================
    document.addEventListener('click', (e) => {
        if (navMobile && menuToggle) {
            if (!navMobile.contains(e.target) && 
                !menuToggle.contains(e.target) && 
                navMobile.classList.contains('active')) {
                navMobile.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // ==========================================
    // PERFORMANCE: DEBOUNCE PARA EVENTOS DE SCROLL
    // ==========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ==========================================
    // LOG DE INICIO
    // ==========================================
    console.log('✅ Catálogo de Seguridad 2025 - IMECIXT - Cargado correctamente');
    console.log('📱 WhatsApp: +51 997 437 390 / +51 979 771 512');
    console.log('📧 Email: seguridad.imeci@gmail.com');
    
    // ==========================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ==========================================
    function setActiveNavigation(navItem) {
        // Remove all active classes first
        document.querySelectorAll('[data-nav]').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to the appropriate nav item
        if (navItem) {
            document.querySelectorAll(`[data-nav="${navItem}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
    }
    
    function updateActiveNavFromHash() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const currentHash = window.location.hash;
        
        if (currentPage === 'productos.html') {
            setActiveNavigation('productos');
        } else if (currentPage === 'index.html' || currentPage === '') {
            if (currentHash === '#contacto') {
                setActiveNavigation('contacto');
            } else if (currentHash === '#sobre-nosotros') {
                setActiveNavigation('nosotros');
            } else {
                setActiveNavigation('inicio');
            }
        }
    }
    
    // Set active navigation on load
    updateActiveNavFromHash();
    
    // Update active navigation when hash changes
    window.addEventListener('hashchange', updateActiveNavFromHash);
    
    // ==========================================
    // SCROLL-BASED NAVIGATION DETECTION
    // ==========================================
    function initScrollSpy() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Only apply scroll spy on index.html
        if (currentPage !== 'index.html' && currentPage !== '') return;
        
        const sections = [
            { id: 'inicio', nav: 'inicio' },
            { id: 'sobre-nosotros', nav: 'nosotros' },
            { id: 'contacto', nav: 'contacto' }
        ];
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = sections.find(s => s.id === entry.target.id);
                    if (section) {
                        setActiveNavigation(section.nav);
                    }
                }
            });
        }, observerOptions);
        
        // Observe each section
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });
    }
    
    // Initialize scroll spy after a short delay to ensure DOM is ready
    setTimeout(initScrollSpy, 100);
    
});

// ==========================================
// MODAL DE DETALLES - MANTENER COMPATIBILIDAD
// ==========================================
// Las funciones de modal ahora están en components.js
// Función legacy para compatibilidad con código existente

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

// Función para scroll al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para obtener altura del viewport
function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

// Función para detectar si es dispositivo móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Exportar funciones si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scrollToTop, getViewportHeight, isMobile };
}