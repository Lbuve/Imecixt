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
    
    // Auto-play cada 5 segundos
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
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
    console.log('📱 WhatsApp: +51 930 210 841');
    console.log('📧 Email: seguridad.imeci@gmail.com');
    
});

// ==========================================
// MODAL DE DETALLES DE PRODUCTO
// ==========================================
function mostrarDetalles(nombreProducto) {
    // Buscar el producto en los datos
    let productoEncontrado = null;

    for (let categoria in productosData) {
        const producto = productosData[categoria].productos.find(p => p.nombre === nombreProducto);
        if (producto) {
            productoEncontrado = producto;
            break;
        }
    }

    if (!productoEncontrado || !productoEncontrado.detalles) {
        alert('Información no disponible. Contáctanos para más detalles.');
        return;
    }

    const detalles = productoEncontrado.detalles;
    const tieneImagen = productoEncontrado.imagen && productoEncontrado.imagen.trim() !== '';

    // Crear el HTML del modal con layout de dos columnas
    const modalHTML = `
        <div class="modal-overlay" id="modalOverlay" onclick="cerrarModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="cerrarModal()">
                    <i class="fas fa-times"></i>
                </button>

                <!-- Columna Izquierda: Imagen -->
                <div class="modal-image-section">
                    ${tieneImagen
                        ? `<img src="${productoEncontrado.imagen}" alt="${productoEncontrado.nombre}" class="modal-product-image">`
                        : `<div class="modal-icon-large ${productoEncontrado.colorIcono}">
                             <i class="fas ${productoEncontrado.icono}"></i>
                           </div>`
                    }
                    <h3 class="modal-image-title">${productoEncontrado.nombre}</h3>
                </div>

                <!-- Columna Derecha: Información -->
                <div class="modal-info-section">
                    <div class="modal-scrollable-content">
                        <div class="modal-header-compact">
                            <h2 class="modal-title-large">${productoEncontrado.nombre}</h2>
                            <p class="modal-subtitle-large">${productoEncontrado.descripcion}</p>
                        </div>

                        <div class="modal-details-grid">
                            <div class="modal-detail-block">
                                <h3><i class="fas fa-check-circle"></i> Características Técnicas</h3>
                                <ul class="modal-features-list">
                                    ${detalles.caracteristicas.map(car => `<li>${car}</li>`).join('')}
                                </ul>
                            </div>

                            <div class="modal-detail-block">
                                <h3><i class="fas fa-briefcase"></i> Usos Recomendados</h3>
                                <p>${detalles.usos}</p>
                            </div>

                            <div class="modal-detail-block">
                                <h3><i class="fas fa-shield-alt"></i> Garantía</h3>
                                <p>${detalles.garantia}</p>
                            </div>

                            <div class="modal-detail-block">
                                <h3><i class="fas fa-certificate"></i> Certificación</h3>
                                <p>${detalles.certificacion}</p>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer-compact">
                        <a href="https://wa.me/51930210841?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(productoEncontrado.nombre)}"
                           target="_blank"
                           class="modal-btn-whatsapp">
                            <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
                        </a>
                        <button onclick="cerrarModal()" class="modal-btn-secondary">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Agregar el modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    // Animación de entrada
    setTimeout(() => {
        document.getElementById('modalOverlay').classList.add('active');
    }, 10);
}

function cerrarModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

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