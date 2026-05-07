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
            </div>
            <div class="slide" style="background-image: url('img/hero-2.jpg'); background-size: cover; background-position: center;">
            </div>
            <div class="slide" style="background-image: url('img/hero-3.jpg'); background-size: cover; background-position: center;">
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
                <p><i class="fas fa-phone"></i> 924 570 575 / 979 771 512</p>
                <p><i class="fas fa-envelope"></i> seguridad.imeci@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Av. Federico Villarreal, Trujillo 13001<br>Au. Panamericana S/N, Moche 13014 - Perú</p>
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
            <button class="filter-btn" data-category="extintores">
                <i class="fas fa-fire-extinguisher"></i> Extintores
            </button>
            <button class="filter-btn" data-category="extintoresUL">
                <i class="fas fa-certificate"></i> Extintores UL
            </button>
            <button class="filter-btn" data-category="accesoriosExtintores">
                <i class="fas fa-box"></i> Accesorios
            </button>
            <button class="filter-btn" data-category="botiquines">
                <i class="fas fa-briefcase-medical"></i> Botiquines
            </button>
            <button class="filter-btn" data-category="epp">
                <i class="fas fa-hard-hat"></i> EPP
            </button>
            <button class="filter-btn" data-category="seguridadVial">
                <i class="fas fa-road"></i> Seguridad Vial
            </button>
            <button class="filter-btn" data-category="lucesSenalizacion">
                <i class="fas fa-lightbulb"></i> Luces y Señalización
            </button>
        </div>
        
        <div class="results-info" id="resultsInfo">
            <span id="resultsCount">Mostrando todos los productos</span>
        </div>
    </div>
`;

// ==========================================
// FUNCIÓN PARA CREAR TARJETA DE PRODUCTO CON VARIANTES
// ==========================================
function crearProductCard(producto, categoryKey) {
    const productId = producto.nombre.replace(/\s+/g, '-').toLowerCase();
    const variantes = producto.variantes || [];
    const defaultVariant = variantes.find(v => v.id === producto.defaultVariant) || variantes[0];
    
    // Generar botones de variante
    const botonesVariantes = variantes.map((variante, index) => `
        <button class="variant-btn ${variante.id === producto.defaultVariant ? 'active' : ''}" 
                onclick="cambiarVariante('${productId}', '${variante.id}', '${categoryKey}', '${producto.nombre}')"
                data-variant="${variante.id}">
            ${variante.label}
        </button>
    `).join('');
    
    return `
        <div class="product-card product-card-variants" data-category="${categoryKey}" data-name="${producto.nombre.toLowerCase()}" id="card-${productId}">
            <h4 class="product-name">${producto.nombre}</h4>
            <div class="product-image-container">
                <img id="img-${productId}" 
                     src="${defaultVariant?.imagen || ''}" 
                     alt="${producto.nombre}" 
                     class="product-image"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-icon-fallback ${producto.colorIcono}" style="display: none;">
                    <i class="fas ${producto.icono}"></i>
                </div>
            </div>
            <div class="product-variants">
                ${botonesVariantes}
            </div>
            <p class="product-desc">${producto.descripcion}</p>
            <button class="product-btn" onclick="mostrarDetallesVariante('${producto.nombre}', '${producto.defaultVariant}')">
                Info <i class="fas fa-info-circle"></i>
            </button>
        </div>
    `;
}

// ==========================================
// FUNCIÓN PARA CREAR SECCIÓN DE CATEGORÍA CON MARCO
// ==========================================
function crearCategoriaSeccion(key, categoria) {
    const productosHTML = categoria.productos.map(prod => crearProductCard(prod, key)).join('');
    
    return `
        <div class="category-wrapper mb-16" data-category="${key}">
            <div class="category-frame">
                <div class="category-frame-header">
                    <span class="category-frame-title">${categoria.title}</span>
                </div>
                <p class="category-frame-description">${categoria.description}</p>
                <div class="products-grid-4">
                    ${productosHTML}
                </div>
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
    const allSections = document.querySelectorAll('.category-wrapper');
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

// ==========================================
// FUNCIÓN PARA CAMBIAR ENTRE VARIANTES
// ==========================================
function cambiarVariante(productId, variantId, categoryKey, productName) {
    // Buscar el producto en los datos
    let productoEncontrado = null;
    for (let categoria in productosData) {
        const producto = productosData[categoria].productos.find(p => p.nombre === productName);
        if (producto) {
            productoEncontrado = producto;
            break;
        }
    }
    
    if (!productoEncontrado) return;
    
    const variante = productoEncontrado.variantes.find(v => v.id === variantId);
    if (!variante) return;
    
    // Actualizar imagen
    const imgElement = document.getElementById(`img-${productId}`);
    if (imgElement && variante.imagen) {
        imgElement.src = variante.imagen;
        imgElement.style.display = 'block';
        const fallback = imgElement.nextElementSibling;
        if (fallback) fallback.style.display = 'none';
    }
    
    // Actualizar botones activos
    const card = document.getElementById(`card-${productId}`);
    if (card) {
        const botones = card.querySelectorAll('.variant-btn');
        botones.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.variant === variantId) {
                btn.classList.add('active');
            }
        });
    }
    
    // Actualizar función del botón Ver Más
    const btnVerMas = card?.querySelector('.product-btn');
    if (btnVerMas) {
        btnVerMas.setAttribute('onclick', `mostrarDetallesVariante('${productName}', '${variantId}')`);
    }
}

// ==========================================
// FUNCIÓN PARA MOSTRAR DETALLES DE VARIANTE
// ==========================================
function mostrarDetallesVariante(nombreProducto, variantId) {
    // Buscar el producto en los datos
    let productoEncontrado = null;
    let categoriaEncontrada = null;
    
    for (let categoria in productosData) {
        const producto = productosData[categoria].productos.find(p => p.nombre === nombreProducto);
        if (producto) {
            productoEncontrado = producto;
            categoriaEncontrada = categoria;
            break;
        }
    }
    
    if (!productoEncontrado) {
        alert('Información no disponible. Contáctanos para más detalles.');
        return;
    }
    
    const variante = productoEncontrado.variantes.find(v => v.id === variantId);
    if (!variante || !variante.detalles) {
        alert('Primero debes seleccionar el tamaño o cantidad y despues presiona info');
        return;
    }
    
    const detalles = variante.detalles;
    const tieneImagen = variante.imagen && variante.imagen.trim() !== '';
    const varianteLabel = variante.label;
    
    // Crear el HTML del modal
    const modalHTML = `
        <div class="modal-overlay" id="modalOverlay" onclick="cerrarModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="cerrarModal()">
                    <i class="fas fa-times"></i>
                </button>

                <div class="modal-image-section">
                    ${tieneImagen
                        ? `<img src="${variante.imagen}" alt="${productoEncontrado.nombre} ${varianteLabel}" class="modal-product-image">`
                        : `<div class="modal-icon-large ${productoEncontrado.colorIcono}">
                             <i class="fas ${productoEncontrado.icono}"></i>
                           </div>`
                    }
                    <h3 class="modal-image-title">${productoEncontrado.nombre}</h3>
                    <span class="modal-variant-badge">${varianteLabel}</span>
                </div>

                <div class="modal-info-section">
                    <div class="modal-scrollable-content">
                        <div class="modal-header-compact">
                            <h2 class="modal-title-large">${productoEncontrado.nombre} - ${varianteLabel}</h2>
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
                        <a href="https://wa.me/51924570575?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(productoEncontrado.nombre + ' ' + varianteLabel)}"
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

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        document.getElementById('modalOverlay').classList.add('active');
    }, 10);
}

// ==========================================
// FUNCIÓN PARA CERRAR MODAL
// ==========================================
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

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarComponentes);