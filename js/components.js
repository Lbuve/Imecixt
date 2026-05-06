// ==========================================
// COMPONENTES HTML
// ==========================================

// Header Component
const headerHTML = `
    <header>
        <div class="header-container">
            <a href="index.html" class="logo">
                <div class="logo-icon">
                    <img src="img/logo.png" alt="IMECIXT Logo" style="width: 100%; height: 100%; object-fit: contain;">
                </div>
            </a>
            
            <nav class="nav-desktop">
                <a href="index.html">Inicio</a>
                <a href="index.html#sobre-nosotros">Nosotros</a>
                <a href="productos.html">Productos</a>
                <a href="index.html#contacto">Contacto</a>
            </nav>
            
            <div class="social-icons">
                <a href="https://www.facebook.com/share/1CnJvS297P/" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/imecixt?igsh=cjNvamJreGIwdW0x" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <nav class="nav-mobile" id="navMobile">
            <a href="index.html">Inicio</a>
            <a href="index.html#sobre-nosotros">Nosotros</a>
            <a href="productos.html">Productos</a>
            <a href="index.html#contacto">Contacto</a>
            <div class="mobile-social">
                <a href="https://www.facebook.com/share/1CnJvS297P/" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://www.instagram.com/imecixt?igsh=cjNvamJreGIwdW0x" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
            </div>
        </nav>
    </header>
`;

// Hero Component con Slider
const heroHTML = `
    <section id="inicio" class="hero-slider">
        <div class="slider-container">
            <div class="slide active" style="background-image: url('img/hero-1.jpg'); background-size: cover; background-position: center;">
                <div class="slide-content">
                    <h2 class="hero-title">Catálogo 2025</h2>
                    <p class="hero-subtitle">Equipos y Productos de Seguridad de Alta Calidad</p>
                    <a href="#productos" class="hero-btn">Ver Catálogo Completo</a>
                </div>
            </div>
            <div class="slide" style="background-image: url('img/hero-2.jpg'); background-size: cover; background-position: center;">
                <div class="slide-content">
                    <h2 class="hero-title">Más de 12 Años de Experiencia</h2>
                    <p class="hero-subtitle">Su seguridad es nuestra prioridad. Confíe en los expertos.</p>
                    <a href="#contacto" class="hero-btn">Contáctanos Ahora</a>
                </div>
            </div>
            <div class="slide" style="background-image: url('img/hero-3.jpg'); background-size: cover; background-position: center;">
                <div class="slide-content">
                    <h2 class="hero-title">Servicio de Recojo y Entrega</h2>
                    <p class="hero-subtitle">Comodidad y eficiencia para el mantenimiento de sus equipos.</p>
                    <a href="https://wa.me/51930210841" target="_blank" class="hero-btn">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Indicadores -->
        <div class="slider-dots">
            <span class="dot active" data-slide="0"></span>
            <span class="dot" data-slide="1"></span>
            <span class="dot" data-slide="2"></span>
        </div>
        
        <!-- Controles -->
        <button class="slider-arrow prev" aria-label="Anterior">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-arrow next" aria-label="Siguiente">
            <i class="fas fa-chevron-right"></i>
        </button>
    </section>
`;

// Footer Component
const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>IMECIXT</h3>
                <p>Seguridad Contra Incendios</p>
                <p class="footer-subtitle">Equipos y Productos de Seguridad Industrial</p>
            </div>
            
            <div class="footer-section">
                <h4>Contacto</h4>
                <p><i class="fas fa-phone"></i> 930210841</p>
                <p><i class="fas fa-envelope"></i> seguridad.imeci@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Av. Villareal N° 1388, Trujillo - Perú</p>
            </div>
            
            <div class="footer-section">
                <h4>Síguenos</h4>
                <div class="footer-social">
                    <a href="https://www.facebook.com/share/1CnJvS297P/" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/imecixt?igsh=cjNvamJreGIwdW0x" target="_blank" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 IMECIXT. Todos los derechos reservados.</p>
            <p class="footer-dev">Asesor: Roger Blas Reyes</p>
        </div>
    </footer>
`;

// ==========================================
// BUSCADOR Y FILTROS
// ==========================================
const searchAndFiltersHTML = `
    <div class="search-filter-container">
        <div class="search-box-wrapper">
            <div class="search-input-container">
                <i class="fas fa-search search-icon"></i>
                <input 
                    type="text" 
                    id="searchInput" 
                    class="search-input" 
                    placeholder="Buscar productos..."
                    autocomplete="off"
                >
                <button id="clearSearch" class="clear-search" style="display: none;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        
        <div class="filter-buttons-container">
            <button class="filter-btn active" data-category="all">
                <i class="fas fa-th"></i> Todos
            </button>
            <button class="filter-btn" data-category="extintoresPQS">
                <i class="fas fa-fire-extinguisher"></i> Extintores PQS
            </button>
            <button class="filter-btn" data-category="extintoresCO2">
                <i class="fas fa-cloud"></i> Extintores CO2
            </button>
            <button class="filter-btn" data-category="extintoresAcetato">
                <i class="fas fa-utensils"></i> Acetato de Potasio
            </button>
            <button class="filter-btn" data-category="conos">
                <i class="fas fa-triangle-exclamation"></i> Conos
            </button>
            <button class="filter-btn" data-category="tacosViales">
                <i class="fas fa-road"></i> Tacos Viales
            </button>
            <button class="filter-btn" data-category="equipamientoAdicional">
                <i class="fas fa-box"></i> Equipamiento
            </button>
        </div>
        
        <div class="results-info" id="resultsInfo">
            <span id="resultsCount">Mostrando todos los productos</span>
        </div>
    </div>
`;

// ==========================================
// FUNCIÓN PARA CREAR TARJETA DE PRODUCTO
// ==========================================
function crearProductCard(producto, categoryKey) {
    return `
        <div class="product-card" data-category="${categoryKey}" data-name="${producto.nombre.toLowerCase()}">
            <div class="product-icon ${producto.colorIcono}">
                ${producto.imagen ? 
                    `<img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` 
                    : 
                    `<i class="fas ${producto.icono}"></i>`
                }
            </div>
            <h4 class="product-name">${producto.nombre}</h4>
            <p class="product-desc">${producto.descripcion}</p>
            <button class="product-btn" onclick="mostrarDetalles('${producto.nombre}')">
                Ver Más <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
}

// ==========================================
// FUNCIÓN PARA CREAR SECCIÓN DE CATEGORÍA
// ==========================================
function crearCategoriaSeccion(key, categoria) {
    const productosHTML = categoria.productos.map(prod => crearProductCard(prod, key)).join('');
    
    return `
        <div class="category-section mb-16" data-category="${key}">
            <div class="category-header">
                <div class="category-badge">
                    <h3 class="category-title">${categoria.title}</h3>
                </div>
            </div>
            <p class="category-description">${categoria.description}</p>
            <div class="${categoria.grid}">
                ${productosHTML}
            </div>
        </div>
    `;
}

// ==========================================
// SISTEMA DE BÚSQUEDA Y FILTRADO
// ==========================================
let currentCategory = 'all';
let currentSearch = '';

function initSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Búsqueda en tiempo real
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            applyFilters();

            // Mostrar/ocultar botón de limpiar
            if (clearSearch) {
                clearSearch.style.display = currentSearch ? 'flex' : 'none';
            }
        });
    }

    // Limpiar búsqueda
    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            currentSearch = '';
            clearSearch.style.display = 'none';
            applyFilters();
            searchInput.focus();
        });
    }

    // Filtros por categoría
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            applyFilters();
        });
    });

}

function applyFilters() {
    const allCards = document.querySelectorAll('.product-card');
    const allSections = document.querySelectorAll('.category-section');
    let visibleCount = 0;
    
    // Filtrar tarjetas
    allCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardName = card.dataset.name;
        
        const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
        const matchesSearch = currentSearch === '' || cardName.includes(currentSearch);
        
        if (matchesCategory && matchesSearch) {
            card.style.display = '';
            card.style.opacity = '1';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
    
    // Mostrar/ocultar secciones completas
    allSections.forEach(section => {
        const sectionCategory = section.dataset.category;
        const cardsInSection = section.querySelectorAll('.product-card');
        const visibleCardsInSection = Array.from(cardsInSection).filter(card => 
            card.style.display !== 'none'
        ).length;
        
        if (currentCategory === 'all') {
            section.style.display = visibleCardsInSection > 0 ? 'block' : 'none';
        } else {
            section.style.display = sectionCategory === currentCategory && visibleCardsInSection > 0 ? 'block' : 'none';
        }
    });
    
    // Actualizar contador de resultados
    updateResultsInfo(visibleCount);
}

function updateResultsInfo(count) {
    const resultsInfo = document.getElementById('resultsCount');
    if (!resultsInfo) return;
    
    if (currentSearch && currentCategory === 'all') {
        resultsInfo.textContent = `${count} producto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''} para "${currentSearch}"`;
    } else if (currentSearch && currentCategory !== 'all') {
        const categoryName = document.querySelector(`.filter-btn[data-category="${currentCategory}"]`)?.textContent.trim() || '';
        resultsInfo.textContent = `${count} producto${count !== 1 ? 's' : ''} en ${categoryName} para "${currentSearch}"`;
    } else if (currentCategory !== 'all') {
        const categoryName = document.querySelector(`.filter-btn[data-category="${currentCategory}"]`)?.textContent.trim() || '';
        resultsInfo.textContent = `${count} producto${count !== 1 ? 's' : ''} en ${categoryName}`;
    } else {
        resultsInfo.textContent = `Mostrando todos los productos (${count})`;
    }
}

// ==========================================
// CARGAR TODOS LOS COMPONENTES
// ==========================================
function cargarComponentes() {
    // Cargar Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
    
    // Cargar Hero
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer) {
        heroContainer.innerHTML = heroHTML;
    }
    
    // Cargar Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
    
    // Cargar Buscador y Filtros + Productos
    const productosContainer = document.getElementById('productos-container');
    if (productosContainer && typeof productosData !== 'undefined') {
        // Agregar buscador y filtros
        productosContainer.innerHTML = searchAndFiltersHTML;
        
        // Agregar productos
        const categoriasHTML = Object.keys(productosData)
            .map(key => crearCategoriaSeccion(key, productosData[key]))
            .join('');
        productosContainer.innerHTML += categoriasHTML;
        
        // Inicializar búsqueda y filtros
        setTimeout(() => {
            initSearchAndFilters();
            updateResultsInfo(document.querySelectorAll('.product-card').length);
        }, 100);
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarComponentes);