// ==========================================
// CATEGORÍA 1: EXTINTORES
// ==========================================
const extintoresData = {
    extintores: {
        title: "EXTINTORES",
        description: "Extintores certificados para todo tipo de fuegos y aplicaciones.",
        icon: "fa-fire-extinguisher",
        iconColor: "icon-red",
        grid: "products-grid-3",
        productos: [
            // Subcategoría: Extintores PQS
            {
                nombre: "Extintores PQS",
                descripcion: "Polvo Químico Seco ABC para fuegos clase A, B y C.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "2kg",
                variantes: [
                    { id: "pqs-1kg", label: "PQS 1 KG", imagen: "img/productos/pqs-1kg.jpg", detalles: { caracteristicas: ["Capacidad: 1 kg PQS ABC", "Eficacia: 1A 5BC", "Presión: 195 PSI", "Uso: Vehículos y oficinas"], usos: "Vehículos, oficinas pequeñas, hogares.", garantia: "1 año de garantía.", certificacion: "INDECOPI y NTP." } },
                    { id: "pqs-2kg", label: "PQS 2 KG", imagen: "img/productos/pqs-2kg.jpg", detalles: { caracteristicas: ["Capacidad: 2 kg PQS ABC", "Eficacia: 2A 10BC", "Presión: 195 PSI", "Uso: Comercios pequeños"], usos: "Comercios pequeños, vehículos.", garantia: "1 año de garantía.", certificacion: "INDECOPI y NTP." } },
                    { id: "pqs-4kg", label: "PQS 4 KG", imagen: "img/productos/pqs-4kg.jpg", detalles: { caracteristicas: ["Capacidad: 4 kg PQS ABC", "Eficacia: 3A 15BC", "Presión: 195 PSI", "Uso: Comercios medianos"], usos: "Comercios medianos, talleres.", garantia: "1 año de garantía.", certificacion: "INDECOPI vigente." } },
                    { id: "pqs-6kg", label: "PQS 6 KG", imagen: "img/productos/pqs-6kg.jpg", detalles: { caracteristicas: ["Capacidad: 6 kg PQS ABC", "Eficacia: 4A 20BC", "Presión: 195 PSI", "Uso: Talleres y comercios"], usos: "Talleres, restaurantes, comercios.", garantia: "1 año de garantía.", certificacion: "INDECOPI vigente." } },
                    { id: "pqs-9kg", label: "PQS 9 KG", imagen: "img/productos/pqs-9kg.jpg", detalles: { caracteristicas: ["Capacidad: 9 kg PQS ABC", "Eficacia: 6A 40BC", "Presión: 195 PSI", "Uso: Industrias medianas"], usos: "Industrias medianas, almacenes.", garantia: "1 año de garantía.", certificacion: "INDECOPI vigente." } },
                    { id: "pqs-12kg", label: "PQS 12 KG", imagen: "img/productos/pqs-12kg.jpg", detalles: { caracteristicas: ["Capacidad: 12 kg PQS ABC", "Eficacia: 8A 60BC", "Presión: 195 PSI", "Máxima protección portátil"], usos: "Grandes almacenes, plantas pequeñas.", garantia: "1 año de garantía.", certificacion: "Certificado INDECOPI." } }
                ]
            },
            {
                nombre: "Extintores PQS Rodantes",
                descripcion: "Alta capacidad con ruedas para instalaciones industriales grandes.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "25kg",
                variantes: [
                    { id: "pqs-25kg", label: "PQS 25 KG (Rodante)", imagen: "img/productos/pqs-25kg.jpg", detalles: { caracteristicas: ["Capacidad: 25 kg PQS ABC", "Eficacia: 20A 120BC", "Con carro y ruedas", "Ideal para grandes áreas"], usos: "Plantas manufactureras, refinerías, grandes instalaciones.", garantia: "1 año de garantía.", certificacion: "INDECOPI y tarjeta de inspección." } },
                    { id: "pqs-50kg", label: "PQS 50 KG (Rodante)", imagen: "img/productos/pqs-50kg.jpg", detalles: { caracteristicas: ["Capacidad: 50 kg PQS ABC", "Eficacia: 40A 240BC", "Carro reforzado con ruedas", "Máxima protección industrial"], usos: "Grandes instalaciones, puertos, aeropuertos.", garantia: "1 año de garantía con soporte especializado.", certificacion: "INDECOPI y certificación internacional." } }
                ]
            },
            // Subcategoría: Extintores CO2
            {
                nombre: "Extintores CO₂ / Gas Carbónico",
                descripcion: "Dióxido de carbono, perfectos para equipos eléctricos. No dejan residuos.",
                icono: "fa-cloud",
                colorIcono: "icon-blue",
                defaultVariant: "5lb",
                variantes: [
                    { id: "co2-5lb", label: "CO₂ 5 LB", imagen: "img/productos/C02_5L.jpg", detalles: { caracteristicas: ["Capacidad: 5 libras CO₂", "Peso total: 7 kg", "Altura: 45 cm", "Presión: 850 PSI"], usos: "Centros de cómputo, salas de servidores, electrónicos.", garantia: "1 año de garantía. No deja residuos.", certificacion: "Para equipos eléctricos energizados." } },
                    { id: "co2-10lb", label: "CO₂ 10 LB", imagen: "img/productos/C02_10L.jpg", detalles: { caracteristicas: ["Capacidad: 10 libras CO₂", "Peso total: 14 kg", "Altura: 55 cm", "Presión: 850 PSI"], usos: "Data centers, cuartos eléctricos, laboratorios.", garantia: "1 año de garantía con recarga certificada.", certificacion: "Aprobado fuegos clase C." } },
                    { id: "co2-15lb", label: "CO₂ 15 LB", imagen: "img/productos/C02_15L.jpg", detalles: { caracteristicas: ["Capacidad: 15 libras CO₂", "Peso total: 19 kg", "Altura: 65 cm", "Presión: 850 PSI"], usos: "Grandes data centers, plantas con equipos sensibles.", garantia: "1 año de garantía. No daña equipos.", certificacion: "Certificado y tarjeta de inspección." } }
                ]
            },
            // Subcategoría: Extintores Tipo K
            {
                nombre: "Extintores Tipo K (Acetato de Potasio)",
                descripcion: "Especialmente para cocinas industriales. Fuegos clase K.",
                icono: "fa-utensils",
                colorIcono: "icon-purple",
                defaultVariant: "6l",
                variantes: [
                    { id: "k-6l", label: "6 L", imagen: "img/productos/acetato_6L.jpg", detalles: { caracteristicas: ["Capacidad: 6 litros acetato", "Peso total: 10 kg", "Altura: 50 cm", "Presión: 100 PSI"], usos: "Cocinas de restaurantes, comedores industriales.", garantia: "1 año de garantía. Agente limpio.", certificacion: "Fuegos clase K (aceites y grasas)." } },
                    { id: "k-9l", label: "9 L", imagen: "img/productos/acetato_9L.jpg", detalles: { caracteristicas: ["Capacidad: 9 litros acetato", "Peso total: 15 kg", "Altura: 60 cm", "Presión: 100 PSI"], usos: "Cocinas industriales, hoteles, casinos.", garantia: "1 año con asesoría en instalación.", certificacion: "Normas UL 300 para cocinas." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 2: EXTINTORES CON CERTIFICACIÓN UL
// ==========================================
const extintoresULData = {
    extintoresUL: {
        title: "EXTINTORES CON CERTIFICACIÓN UL",
        description: "Certificación UL internacional. Marcas Buckeye, Amerex, Ansul, Badger.",
        icon: "fa-certificate",
        iconColor: "icon-red",
        grid: "products-grid-2",
        productos: [
            {
                nombre: "Marcas UL - Buckeye",
                descripcion: "Certificación UL internacional. Marca Buckeye.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "10lb",
                variantes: [
                    { id: "buckeye-10lb", label: "PQS UL 10 LB", imagen: "img/productos/pqsul-buckeye-10lb.jpg", detalles: { caracteristicas: ["Capacidad: 10 libras PQS", "Marca: Buckeye UL", "Eficacia: 4A 60BC", "Altura: 48 cm"], usos: "Oficinas, comercios, restaurantes.", garantia: "1 año de garantía Buckeye.", certificacion: "UL internacional." } },
                    { id: "buckeye-20lb", label: "PQS UL 20 LB", imagen: "img/productos/pqsul-buckeye-20lb.jpg", detalles: { caracteristicas: ["Capacidad: 20 libras PQS", "Marca: Buckeye UL", "Eficacia: 10A 80BC", "Altura: 58 cm"], usos: "Talleres, almacenes, plantas.", garantia: "1 año de garantía Buckeye.", certificacion: "UL internacional." } },
                    { id: "buckeye-30lb", label: "PQS UL 30 LB", imagen: "img/productos/pqsul-buckeye-30lb.jpg", detalles: { caracteristicas: ["Capacidad: 30 libras PQS", "Marca: Buckeye UL", "Eficacia: 20A 120BC", "Altura: 68 cm"], usos: "Grandes instalaciones, manufactureras.", garantia: "1 año de garantía Buckeye.", certificacion: "UL internacional." } }
                ]
            },
            {
                nombre: "Marcas UL - Amerex",
                descripcion: "Certificación UL internacional. Marca Amerex.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "10lb",
                variantes: [
                    { id: "amerex-10lb", label: "PQS UL 10 LB", imagen: "img/productos/pqsul-amerex-10lb.jpg", detalles: { caracteristicas: ["Capacidad: 10 libras PQS", "Marca: Amerex UL", "Eficacia: 4A 60BC", "Altura: 48 cm"], usos: "Oficinas, comercios.", garantia: "1 año de garantía Amerex.", certificacion: "UL internacional." } },
                    { id: "amerex-20lb", label: "PQS UL 20 LB", imagen: "img/productos/pqsul-amerex-20lb.jpg", detalles: { caracteristicas: ["Capacidad: 20 libras PQS", "Marca: Amerex UL", "Eficacia: 10A 80BC", "Altura: 58 cm"], usos: "Talleres, almacenes.", garantia: "1 año de garantía Amerex.", certificacion: "UL internacional." } },
                    { id: "amerex-30lb", label: "PQS UL 30 LB", imagen: "img/productos/pqsul-amerex-30lb.jpg", detalles: { caracteristicas: ["Capacidad: 30 libras PQS", "Marca: Amerex UL", "Eficacia: 20A 120BC", "Altura: 68 cm"], usos: "Grandes instalaciones.", garantia: "1 año de garantía Amerex.", certificacion: "UL internacional." } }
                ]
            },
            {
                nombre: "Marcas UL - Ansul",
                descripcion: "Certificación UL internacional. Marca Ansul.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "10lb",
                variantes: [
                    { id: "ansul-10lb", label: "PQS UL 10 LB", imagen: "img/productos/pqsul-ansul-10lb.jpg", detalles: { caracteristicas: ["Capacidad: 10 libras PQS", "Marca: Ansul UL", "Eficacia: 4A 60BC", "Altura: 48 cm"], usos: "Oficinas, comercios.", garantia: "1 año de garantía Ansul.", certificacion: "UL internacional." } },
                    { id: "ansul-20lb", label: "PQS UL 20 LB", imagen: "img/productos/pqsul-ansul-20lb.jpg", detalles: { caracteristicas: ["Capacidad: 20 libras PQS", "Marca: Ansul UL", "Eficacia: 10A 80BC", "Altura: 58 cm"], usos: "Talleres, almacenes.", garantia: "1 año de garantía Ansul.", certificacion: "UL internacional." } },
                    { id: "ansul-30lb", label: "PQS UL 30 LB", imagen: "img/productos/pqsul-ansul-30lb.jpg", detalles: { caracteristicas: ["Capacidad: 30 libras PQS", "Marca: Ansul UL", "Eficacia: 20A 120BC", "Altura: 68 cm"], usos: "Grandes instalaciones.", garantia: "1 año de garantía Ansul.", certificacion: "UL internacional." } }
                ]
            },
            {
                nombre: "Marcas UL - Badger",
                descripcion: "Certificación UL internacional. Marca Badger.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                defaultVariant: "10lb",
                variantes: [
                    { id: "badger-10lb", label: "PQS UL 10 LB", imagen: "img/productos/pqsul-badger-10lb.jpg", detalles: { caracteristicas: ["Capacidad: 10 libras PQS", "Marca: Badger UL", "Eficacia: 4A 60BC", "Altura: 48 cm"], usos: "Oficinas, comercios.", garantia: "1 año de garantía Badger.", certificacion: "UL internacional." } },
                    { id: "badger-20lb", label: "PQS UL 20 LB", imagen: "img/productos/pqsul-badger-20lb.jpg", detalles: { caracteristicas: ["Capacidad: 20 libras PQS", "Marca: Badger UL", "Eficacia: 10A 80BC", "Altura: 58 cm"], usos: "Talleres, almacenes.", garantia: "1 año de garantía Badger.", certificacion: "UL internacional." } },
                    { id: "badger-30lb", label: "PQS UL 30 LB", imagen: "img/productos/pqsul-badger-30lb.jpg", detalles: { caracteristicas: ["Capacidad: 30 libras PQS", "Marca: Badger UL", "Eficacia: 20A 120BC", "Altura: 68 cm"], usos: "Grandes instalaciones.", garantia: "1 año de garantía Badger.", certificacion: "UL internacional." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 3: PORTA EXTINTORES
// ==========================================
const accesoriosData = {
    accesoriosExtintores: {
        title: "PORTA EXTINTORES",
        description: "Gabinetes, pedestales y canastillas para extintores.",
        icon: "fa-box",
        iconColor: "icon-gray",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Gabinetes",
                descripcion: "Gabinetes para protección de extintores.",
                icono: "fa-box",
        colorIcono: "icon-gray",
                defaultVariant: "metal",
                variantes: [
                    { id: "gabinete-metal", label: "METAL", imagen: "img/productos/gabinete.jpg", detalles: { caracteristicas: ["Material: Metal resistente", "Con cerradura", "Visor transparente", "Para extintores 6-12 kg"], usos: "Protección de extintores en interiores/exteriores.", garantia: "1 año de garantía.", certificacion: "Resistente a intemperie." } }
                ]
            },
            {
                nombre: "Pedestales",
                descripcion: "Pedestales para extintores rodantes.",
                icono: "fa-box",
        colorIcono: "icon-gray",
                defaultVariant: "standard",
                variantes: [
                    { id: "pedestal-std", label: "ESTÁNDAR", imagen: "img/productos/pedestal.jpg", detalles: { caracteristicas: ["Material: Metal reforzado", "Base estable", "Para extintores rodantes", "Altura: 90 cm"], usos: "Soporte para extintores 25-50 kg.", garantia: "1 año de garantía.", certificacion: "Estabilidad certificada." } }
                ]
            },
            {
                nombre: "Canastillas",
                descripcion: "Canastillas para transporte de extintores.",
                icono: "fa-box",
        colorIcono: "icon-gray",
                defaultVariant: "standard",
                variantes: [
                    { id: "canastilla-std", label: "ESTÁNDAR", imagen: "img/productos/canastilla.jpg", detalles: { caracteristicas: ["Material: Metal o plástico", "Con asas", "Resistente", "Capacidad: 6-12 kg"], usos: "Transporte de extintores.", garantia: "1 año de garantía.", certificacion: "Resistencia certificada." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 4: BOTIQUINES Y PRIMEROS AUXILIOS
// ==========================================
const botiquinesData = {
    botiquines: {
        title: "BOTIQUINES Y PRIMEROS AUXILIOS",
        description: "Botiquines de plástico, lona y madera para empresas y vehículos.",
        icon: "fa-briefcase-medical",
        iconColor: "icon-red",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Botiquines Plásticos",
                descripcion: "Botiquines de plástico resistente.",
                icono: "fa-briefcase-medical",
                colorIcono: "icon-red",
                defaultVariant: "chico",
                variantes: [
                    { id: "plastico-chico", label: "CHICO", imagen: "img/productos/botiquin-plastico-chico.jpg", detalles: { caracteristicas: ["Material: Plástico resistente", "Dimensiones: 25x20 cm", "Cierre con broche", "Ligero"], usos: "Vehículos, oficinas pequeñas.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } },
                    { id: "plastico-grande", label: "GRANDE", imagen: "img/productos/botiquin-plastico-grande.jpg", detalles: { caracteristicas: ["Material: Plástico industrial", "Dimensiones: 35x25 cm", "Cierre seguro", "Separadores internos"], usos: "Empresas, fábricas.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } }
                ]
            },
            {
                nombre: "Botiquines de Lona",
                descripcion: "Botiquines tipo lonchera, portátiles.",
                icono: "fa-briefcase-medical",
                colorIcono: "icon-red",
                defaultVariant: "standard",
                variantes: [
                    { id: "lona-20x16x6", label: "20X16X6 CM", imagen: "img/productos/botiquin-lona.jpg", detalles: { caracteristicas: ["Material: Lona resistente", "Dimensiones: 20x16x6 cm", "Tipo lonchera", "Cierre con cierre", "Ligera y portátil"], usos: "Vehículos, transporte.", garantia: "1 año de garantía.", certificacion: "Resistente al agua." } }
                ]
            },
            {
                nombre: "Botiquines de Madera",
                descripcion: "Botiquines tradicionales de madera.",
                icono: "fa-briefcase-medical",
                colorIcono: "icon-red",
                defaultVariant: "20x30",
                variantes: [
                    { id: "madera-20x30", label: "20 X 30 CM", imagen: "img/productos/botiquin-madera-20x30.jpg", detalles: { caracteristicas: ["Material: Madera tratada", "Dimensiones: 20 x 30 cm", "Cierre con llave", "Acabado natural"], usos: "Oficinas, consultorios.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } },
                    { id: "madera-24x34", label: "24 X 34 CM", imagen: "img/productos/botiquin-madera-24x34.jpg", detalles: { caracteristicas: ["Material: Madera tratada", "Dimensiones: 24 x 34 cm", "Cierre con llave", "Acabado natural"], usos: "Empresas pequeñas, locales.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } },
                    { id: "madera-30x40", label: "30 X 40 CM", imagen: "img/productos/botiquin-madera-30x40.jpg", detalles: { caracteristicas: ["Material: Madera tratada", "Dimensiones: 30 x 40 cm", "Cierre con llave", "Acabado lacado"], usos: "Empresas medianas.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } },
                    { id: "madera-40x50", label: "40 X 50 CM", imagen: "img/productos/botiquin-madera-40x50.jpg", detalles: { caracteristicas: ["Material: Madera dura", "Dimensiones: 40 x 50 cm", "Doble cerradura", "Acabado premium"], usos: "Grandes empresas, industrias.", garantia: "1 año de garantía.", certificacion: "Cumple normas salud ocupacional." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 5: EQUIPOS DE PROTECCIÓN PERSONAL (EPP)
// ==========================================
const eppData = {
    epp: {
        title: "EQUIPOS DE PROTECCIÓN PERSONAL (EPP)",
        description: "Cascos, guantes, lentes y equipos de protección laboral.",
        icon: "fa-hard-hat",
        iconColor: "icon-yellow",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Cascos de Seguridad",
                descripcion: "Cascos industriales con y sin suspensión.",
                icono: "fa-hard-hat",
        colorIcono: "icon-yellow",
                defaultVariant: "blanco",
                variantes: [
                    { id: "casco-blanco", label: "BLANCO", imagen: "img/productos/casco.jpg", detalles: { caracteristicas: ["Material: ABS o HDPE", "Con suspensión de 4 puntos", "Ajuste rápido", "Ligero"], usos: "Construcción, industria, minería.", garantia: "1 año de garantía.", certificacion: "Certificación NTP." } },
                    { id: "casco-amarillo", label: "AMARILLO", imagen: "img/productos/casco.jpg", detalles: { caracteristicas: ["Material: ABS o HDPE", "Color alta visibilidad", "Con suspensión", "Resistente a impactos"], usos: "Construcción, obra.", garantia: "1 año de garantía.", certificacion: "Certificación NTP." } },
                    { id: "casco-rojo", label: "ROJO", imagen: "img/productos/casco.jpg", detalles: { caracteristicas: ["Material: ABS industrial", "Color rojo seguridad", "Suspensión ajustable", "Alta resistencia"], usos: "Bomberos, seguridad, industria.", garantia: "1 año de garantía.", certificacion: "Certificación NTP." } }
                ]
            },
            {
                nombre: "Suspensiones para Casco",
                descripcion: "Suspensiones de repuesto para cascos.",
                icono: "fa-hard-hat",
        colorIcono: "icon-yellow",
                defaultVariant: "4puntos",
                variantes: [
                    { id: "susp-4p", label: "4 PUNTOS", imagen: "img/productos/suspension.jpg", detalles: { caracteristicas: ["Tipo: 4 puntos de anclaje", "Material: Nylon resistente", "Ajuste de matraca", "Universal"], usos: "Repuesto para cascos industriales.", garantia: "6 meses de garantía.", certificacion: "Compatible estándar." } },
                    { id: "susp-6p", label: "6 PUNTOS", imagen: "img/productos/suspension.jpg", detalles: { caracteristicas: ["Tipo: 6 puntos de anclaje", "Mayor confort", "Material reforzado", "Premium"], usos: "Máximo confort y seguridad.", garantia: "6 meses de garantía.", certificacion: "Compatible estándar." } }
                ]
            },
            {
                nombre: "Protección Auditiva",
                descripcion: "Tapones y orejeras para protección de oídos.",
                icono: "fa-headphones",
        colorIcono: "icon-orange",
                defaultVariant: "tapones",
                variantes: [
                    { id: "tapones-espuma", label: "TAPONES ESPUMA", imagen: "img/productos/tapones.jpg", detalles: { caracteristicas: ["Material: Espuma viscoelástica", "Reducción 29 dB", "Desechables", "Cómodos"], usos: "Áreas ruidosas, industria.", garantia: "Garantía de calidad.", certificacion: "NTP 399.158." } },
                    { id: "orejeras", label: "OREJERAS", imagen: "img/productos/orejeras.jpg", detalles: { caracteristicas: ["Tipo: Orejeras de copa", "Reducción 25 dB", "Ajustable", "Reutilizables"], usos: "Construcción, industria pesada.", garantia: "1 año de garantía.", certificacion: "NTP 399.158." } }
                ]
            },
            {
                nombre: "Guantes de Seguridad",
                descripcion: "Guantes para diferentes aplicaciones industriales.",
                icono: "fa-hand-paper",
        colorIcono: "icon-orange",
                defaultVariant: "cuero",
                variantes: [
                    { id: "guantes-cuero", label: "CUERO", imagen: "img/productos/guantes.jpg", detalles: { caracteristicas: ["Material: Cuero vacuno", "Refuerzo en palma", "Resistente a abrasión", "Talla: M-XL"], usos: "Construcción, soldadura, manejo.", garantia: "3 meses de garantía.", certificacion: "NTP 399.158." } },
                    { id: "guantes-nitrilo", label: "NITRILO", imagen: "img/productos/guantes-nitrilo.jpg", detalles: { caracteristicas: ["Material: Nitrilo resistente", "Resistente a químicos", "Antideslizantes", "Desechables o reutilizables"], usos: "Químicos, laboratorios, industria.", garantia: "Garantía de calidad.", certificacion: "NTP 399.158." } },
                    { id: "guantes-algodon", label: "ALGODÓN", imagen: "img/productos/guantes.jpg", detalles: { caracteristicas: ["Material: Algodón tejido", "Con puntos PVC", "Transpirables", "Talla: M-XL"], usos: "Trabajos ligeros, almacén.", garantia: "3 meses de garantía.", certificacion: "NTP 399.158." } }
                ]
            },
            {
                nombre: "Lentes de Seguridad",
                descripcion: "Protección ocular para trabajos industriales.",
                icono: "fa-glasses",
        colorIcono: "icon-blue",
                defaultVariant: "transparente",
                variantes: [
                    { id: "lentes-trans", label: "TRANSPARENTE", imagen: "img/productos/lentes.jpg", detalles: { caracteristicas: ["Lente: Policarbonato incoloro", "Antirrayas", "Antivaho", "Lateral de alambre o plástico"], usos: "Protección general, industria.", garantia: "6 meses de garantía.", certificacion: "ANSI Z87.1, NTP." } },
                    { id: "lentes-oscuro", label: "OSCURO", imagen: "img/productos/lentes.jpg", detalles: { caracteristicas: ["Lente: Policarbonato gris", "Protección UV", "Para soldadura o sol", "Antirrayas"], usos: "Soldadura, trabajo exterior.", garantia: "6 meses de garantía.", certificacion: "ANSI Z87.1, NTP." } },
                    { id: "lentes-amarillo", label: "AMARILLO", imagen: "img/productos/lentes.jpg", detalles: { caracteristicas: ["Lente: Amarillo alta definición", "Mejora contraste", "Para baja luminosidad", "Antirrayas"], usos: "Trabajos de precisión, interiores.", garantia: "6 meses de garantía.", certificacion: "ANSI Z87.1, NTP." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 6: SEGURIDAD VIAL
// ==========================================
const seguridadVialData = {
    seguridadVial: {
        title: "SEGURIDAD VIAL",
        description: "Señalización vial, conos, tacos, mallas y equipos de seguridad.",
        icon: "fa-road",
        iconColor: "icon-orange",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Triángulos de Seguridad",
                descripcion: "Triángulos reflectivos homologados para vehículos.",
                icono: "fa-exclamation-triangle",
        colorIcono: "icon-orange",
                defaultVariant: "standard",
                variantes: [
                    { id: "triangulo-std", label: "ESTÁNDAR", imagen: "img/productos/triangulo.jpg", detalles: { caracteristicas: ["Set de 3 triángulos", "Base plegable", "Reflectivo homologado", "Estuche incluido"], usos: "Vehículos, emergencias.", garantia: "1 año de garantía.", certificacion: "Homologado MTTC." } },
                    { id: "triangulo-premium", label: "PREMIUM", imagen: "img/productos/triangulo.jpg", detalles: { caracteristicas: ["Set de 3 triángulos", "Base metálica", "Reflectivo 3M", "Estuche rígido"], usos: "Vehículos pesados, profesional.", garantia: "2 años de garantía.", certificacion: "Homologado MTTC." } }
                ]
            },
            {
                nombre: "Conos PVC y Retráctiles",
                descripcion: "Conos de señalización para vías y obras.",
                icono: "fa-exclamation-triangle",
        colorIcono: "icon-orange",
                defaultVariant: "45cm",
                variantes: [
                    { id: "cono-pvc-30", label: "PVC 30 CM", imagen: "img/productos/cono-30cm.jpg", detalles: { caracteristicas: ["Altura: 30 cm", "Material: PVC flexible", "Banda reflectiva", "Base pesada"], usos: "Obras pequeñas, estacionamientos.", garantia: "2 años de garantía.", certificacion: "Resistente UV." } },
                    { id: "cono-pvc-45", label: "PVC 45 CM", imagen: "img/productos/cono-30cm.jpg", detalles: { caracteristicas: ["Altura: 45 cm", "PVC de alta densidad", "Doble banda reflectiva", "Base reforzada"], usos: "Carreteras, obras viales.", garantia: "2 años de garantía.", certificacion: "Resistente UV." } },
                    { id: "cono-pvc-70", label: "PVC 70 CM", imagen: "img/productos/cono-70cm.jpg", detalles: { caracteristicas: ["Altura: 70 cm", "PVC premium", "Triple banda reflectiva", "Base de anclaje"], usos: "Autopistas, obras mayores.", garantia: "3 años de garantía.", certificacion: "Resistente UV." } },
                    { id: "cono-retractil-45", label: "RETRÁCTIL 45 CM", imagen: "img/productos/cono-30cm.jpg", detalles: { caracteristicas: ["Altura: 45 cm desplegado", "Plegable tipo acordeón", "Nylon reflectivo", "Base plástica"], usos: "Vehículos de emergencia.", garantia: "1 año de garantía.", certificacion: "Reflectivo certificado." } }
                ]
            },
            {
                nombre: "Paletas y Cintas de Señalización",
                descripcion: "Paletas para tráfico y cintas de delimitación.",
                icono: "fa-hand-paper",
        colorIcono: "icon-orange",
                defaultVariant: "paletas",
                variantes: [
                    { id: "paleta-alto", label: "PALETA ALTO", imagen: "img/productos/paleta.jpg", detalles: { caracteristicas: ["Señal: ALTO/PARE", "Mango de madera", "Cara reflectiva", "Diámetro: 30 cm"], usos: "Control de tráfico, peajes.", garantia: "1 año de garantía.", certificacion: "Reflectivo homologado." } },
                    { id: "paleta-dir", label: "PALETA DIRECCIÓN", imagen: "img/productos/paleta.jpg", detalles: { caracteristicas: ["Señal: Flecha direccional", "Mango de madera", "Cara reflectiva", "Doble cara"], usos: "Control de tráfico, obras.", garantia: "1 año de garantía.", certificacion: "Reflectivo homologado." } },
                    { id: "cinta-100m", label: "CINTA 100M", imagen: "img/productos/cinta.jpg", detalles: { caracteristicas: ["Longitud: 100 metros", "Material: Polipropileno", "Colores: Rojo/Blanco o Amarillo/Negro", "Resistente"], usos: "Delimitación de zonas, obras.", garantia: "Garantía de calidad.", certificacion: "Resistente a intemperie." } }
                ]
            },
            {
                nombre: "Mallas de Seguridad",
                descripcion: "Mallas para delimitación y protección.",
                icono: "fa-border-all",
        colorIcono: "icon-orange",
                defaultVariant: "naranja",
                variantes: [
                    { id: "malla-naranja", label: "NARANJA", imagen: "img/productos/malla.jpg", detalles: { caracteristicas: ["Color: Naranja", "Material: Polietileno", "Rollo: 50m x 1m", "UV resistente"], usos: "Obras, delimitación, protección.", garantia: "1 año de garantía.", certificacion: "UV resistente." } },
                    { id: "malla-verde", label: "VERDE", imagen: "img/productos/malla.jpg", detalles: { caracteristicas: ["Color: Verde oscuro", "Material: Polietileno", "Rollo: 50m x 1m", "UV resistente"], usos: "Protección visual, obras.", garantia: "1 año de garantía.", certificacion: "UV resistente." } }
                ]
            },
            {
                nombre: "Tacos PVC y Madera",
                descripcion: "Tacos para delimitación de estacionamientos y carriles.",
                icono: "fa-road",
        colorIcono: "icon-yellow",
                defaultVariant: "pvc-naranja",
                variantes: [
                    { id: "taco-pvc-nj", label: "PVC NARANJA", imagen: "img/productos/taco_naranja.jpg", detalles: { caracteristicas: ["Altura: 50 cm", "Material: PVC flexible", "Color: Naranja", "Base negra"], usos: "Delimitación de carriles.", garantia: "Resistente a impactos.", certificacion: "Base antideslizante." } },
                    { id: "taco-pvc-am", label: "PVC AMARILLO", imagen: "img/productos/taco_amarillo.jpg", detalles: { caracteristicas: ["Altura: 50 cm", "Material: PVC flexible", "Color: Amarillo", "Base negra"], usos: "Zonas de precaución.", garantia: "Material UV resistente.", certificacion: "Alta visibilidad." } },
                    { id: "taco-madera", label: "MADERA", imagen: "img/productos/taco_madera.jpg", detalles: { caracteristicas: ["Material: Madera dura", "Dimensiones: 15x10 cm", "Banda reflectiva", "Tratada"], usos: "Construcción, uso pesado.", garantia: "Resistente.", certificacion: "Madera tratada." } }
                ]
            },
            {
                nombre: "Cinta Reflectiva 3M",
                descripcion: "Cinta reflectiva de alta calidad para señalización.",
                icono: "fa-tape",
        colorIcono: "icon-yellow",
                defaultVariant: "blanca",
                variantes: [
                    { id: "reflectiva-blanca", label: "BLANCA", imagen: "img/productos/cinta-3m.jpg", detalles: { caracteristicas: ["Marca: 3M o equivalente", "Color: Blanco", "Rollo: 45.7m", "Grado diamante o ingeniería"], usos: "Señalización de vehículos, postes.", garantia: "Garantía de autenticidad.", certificacion: "3M original o equivalente." } },
                    { id: "reflectiva-roja", label: "ROJA", imagen: "img/productos/cinta-3m.jpg", detalles: { caracteristicas: ["Marca: 3M o equivalente", "Color: Rojo", "Rollo: 45.7m", "Grado diamante o ingeniería"], usos: "Señalización de peligro.", garantia: "Garantía de autenticidad.", certificacion: "3M original o equivalente." } },
                    { id: "reflectiva-combinada", label: "ROJO/BLANCO", imagen: "img/productos/cinta-3m.jpg", detalles: { caracteristicas: ["Marca: 3M o equivalente", "Colores: Rojo/Blanco", "Rollo: 45.7m", "Patrón alternado"], usos: "Contenedores, vehículos largos.", garantia: "Garantía de autenticidad.", certificacion: "3M original o equivalente." } }
                ]
            },
            {
                nombre: "Kits Antiderrame",
                descripcion: "Kits para contención de derrames químicos o hidrocarburos.",
                icono: "fa-oil-can",
                colorIcono: "icon-gray",
                defaultVariant: "estandar",
                variantes: [
                    { id: "kit-estandar", label: "ESTÁNDAR", imagen: "img/productos/kit-antiderrame-estandar.jpg", detalles: { caracteristicas: ["Modelo estándar", "Kit completo de contención", "Absorbente para aceites/hidrocarburos", "Incluye guantes, bolsas, barreras"], usos: "Derrames de combustibles, aceites, químicos.", garantia: "Garantía de calidad.", certificacion: "Norma ambiental." } },
                    { id: "kit-camion", label: "PARA CAMIÓN", imagen: "img/productos/kit-antiderrame-camion.jpg", detalles: { caracteristicas: ["Modelo para camión", "Más completo con bandeja", "Dimensiones: 40x60x10 cm", "Ideal para vehículos pesados"], usos: "Transporte de carga, camiones, vehículos industriales.", garantia: "Garantía de calidad.", certificacion: "Norma ambiental." } }
                ]
            }
        ]
    }
};

// ==========================================
// CATEGORÍA 7: LUCES Y SEÑALIZACIÓN
// ==========================================
const lucesData = {
    lucesSenalizacion: {
        title: "LUCES Y SEÑALIZACIÓN",
        description: "Luces de emergencia y señaléticas para edificaciones.",
        icon: "fa-lightbulb",
        iconColor: "icon-blue",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Luces de Emergencia",
                descripcion: "Luces LED para cortes de energía.",
                icono: "fa-lightbulb",
        colorIcono: "icon-blue",
                defaultVariant: "opalux",
                variantes: [
                    { id: "luz-opalux", label: "OPALUX", imagen: "img/productos/luz-opalux.jpg", detalles: { caracteristicas: ["Marca: Opalux", "Autonomía: 2-4 horas", "Tecnología LED", "Batería recargable", "Indicador LED"], usos: "Edificios, oficinas, rutas evacuación.", garantia: "1 año de garantía.", certificacion: "Norma de emergencia." } },
                    { id: "luz-ricers", label: "RICERS", imagen: "img/productos/luz-ricers.jpg", detalles: { caracteristicas: ["Marca: Ricers", "Autonomía: 2-4 horas", "LED eficiente", "Diseño compacto"], usos: "Edificios comerciales, industria.", garantia: "1 año de garantía.", certificacion: "Norma de emergencia." } },
                    { id: "luz-sunlec", label: "SUN LEC", imagen: "img/productos/luz-sunlec.jpg", detalles: { caracteristicas: ["Marca: Sun Lec", "Autonomía: 2-4 horas", "LED de alta eficiencia", "Carga rápida"], usos: "Hospitales, centros comerciales, industria.", garantia: "1 año de garantía.", certificacion: "Norma de emergencia." } }
                ]
            },
            {
                nombre: "Señaléticas Vinil Adhesivo",
                descripcion: "Señales en vinil autoadhesivo.",
                icono: "fa-sign",
        colorIcono: "icon-green",
                defaultVariant: "extintor",
                variantes: [
                    { id: "vinil-extintor", label: "EXTINTOR", imagen: "img/productos/senaletica.jpg", detalles: { caracteristicas: ["Material: Vinil adhesivo", "Tamaño: 20x30 cm", "Colores vivos", "Fácil instalación"], usos: "Marcado de extintores.", garantia: "Duradero 3 años.", certificacion: "NTP 399.010." } },
                    { id: "vinil-salida", label: "SALIDA EMERGENCIA", imagen: "img/productos/senaletica.jpg", detalles: { caracteristicas: ["Material: Vinil adhesivo", "Tamaño: 20x30 cm", "Flecha direccional", "Resistente"], usos: "Señalización de rutas.", garantia: "Duradero 3 años.", certificacion: "NTP 399.010." } },
                    { id: "vinil-evacuacion", label: "EVACUACIÓN", imagen: "img/productos/senaletica.jpg", detalles: { caracteristicas: ["Material: Vinil adhesivo", "Símbolo evacuación", "Tamaño: 20x30 cm", "Resistente"], usos: "Señalización de evacuación.", garantia: "Duradero 3 años.", certificacion: "NTP 399.010." } }
                ]
            },
            {
                nombre: "Señaléticas Fotoluminiscentes",
                descripcion: "Señales que brillan en la oscuridad.",
                icono: "fa-sign",
        colorIcono: "icon-green",
                defaultVariant: "salida",
                variantes: [
                    { id: "foto-salida", label: "SALIDA", imagen: "img/productos/senaletica-foto.jpg", detalles: { caracteristicas: ["Material: PVC fotoluminiscente", "Brilla en oscuridad", "Carga con luz natural/artificial", "Duración: 6-8 horas"], usos: "Rutas de evacuación nocturna.", garantia: "Duradero 5 años.", certificacion: "NTP 399.010-1." } },
                    { id: "foto-extintor", label: "EXTINTOR", imagen: "img/productos/senaletica-foto.jpg", detalles: { caracteristicas: ["Material: Fotoluminiscente", "Símbolo extintor", "Brilla en oscuridad", "Autoadhesivo"], usos: "Ubicación extintores en oscuridad.", garantia: "Duradero 5 años.", certificacion: "NTP 399.010-1." } },
                    { id: "foto-escaleras", label: "ESCALERAS", imagen: "img/productos/senaletica-foto.jpg", detalles: { caracteristicas: ["Material: Fotoluminiscente", "Símbolo escalera", "Brilla en oscuridad", "Tamaño: 20x30 cm"], usos: "Señalización de escaleras.", garantia: "Duradero 5 años.", certificacion: "NTP 399.010-1." } }
                ]
            }
        ]
    }
};

// ==========================================
// CONSOLIDAR TODOS LOS PRODUCTOS
// ==========================================
const productosData = {
    ...extintoresData,
    ...extintoresULData,
    ...accesoriosData,
    ...botiquinesData,
    ...eppData,
    ...seguridadVialData,
    ...lucesData
};