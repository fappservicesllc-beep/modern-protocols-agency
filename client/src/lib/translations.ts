export type Lang = "en" | "es";

/**
 * Central EN/ES dictionary. Add new keys here — every component reads via t().
 * Keys are dot-namespaced by section for clarity.
 */
export const translations = {
  // ─── Nav ────────────────────────────────────────────────────────────
  "nav.method": { en: "Method", es: "Método" },
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.results": { en: "Results", es: "Resultados" },
  "nav.faq": { en: "FAQ", es: "Preguntas" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.weekly": { en: "The Weekly Protocol", es: "El Protocolo Semanal" },
  "nav.cta": { en: "Book Strategy Session", es: "Reservar Sesión" },
  "nav.langToggle.label": {
    en: "Switch to Spanish",
    es: "Cambiar a inglés",
  },

  // ─── Announcement Bar ───────────────────────────────────────────────
  "announce.label": { en: "New Release", es: "Nuevo Lanzamiento" },
  // Product name is rendered separately so the ™ can be superscripted.
  "announce.product": { en: "Agent OS", es: "Agent OS" },
  "announce.text": {
    en: "is now live.",
    es: "ya está disponible.",
  },
  "announce.cta": { en: "Get Instant Access", es: "Obtener Acceso" },

  // ─── Hero ───────────────────────────────────────────────────────────
  "hero.eyebrow": {
    en: "For Founders Scaling Past $50K/mo",
    es: "Para fundadores escalando más de $50K/mes",
  },
  "hero.headline.line1": { en: "The growth protocol", es: "El protocolo de crecimiento" },
  "hero.headline.emphasis": { en: "elite operators", es: "de operadores élite" },
  "hero.headline.line3": { en: "run on.", es: "" },
  "hero.sub.pre": {
    en: "We engineer the websites, brand systems, and AI-driven content engines that move category leaders from ",
    es: "Diseñamos los sitios web, sistemas de marca y motores de contenido con IA que llevan a los líderes de su categoría de ",
  },
  "hero.sub.emphasis": {
    en: "six to seven figures",
    es: "seis a siete cifras",
  },
  "hero.sub.post": {
    en: " — and past it. By invitation, for a select roster.",
    es: " — y más allá. Por invitación, para un roster selecto.",
  },
  "hero.cta.primary": {
    en: "Book 30-Min Strategy Session",
    es: "Reservar Sesión Estratégica de 30 min",
  },
  "hero.cta.secondary": {
    en: "Request Free Growth Audit",
    es: "Solicitar Auditoría Gratuita",
  },
  "hero.trust.quote": {
    en: '"They didn\'t sell us a website. They rebuilt how prospects perceive our brand. The inbound speaks for itself."',
    es: '"No nos vendieron un sitio web. Redefinieron cómo los prospectos perciben nuestra marca. Los mensajes entrantes hablan por sí solos."',
  },
  "hero.trust.author": { en: "— Erwin P., Founder", es: "— Erwin P., Fundador" },
  "hero.trust.tag1": { en: "No-commitment", es: "Sin compromiso" },
  "hero.trust.tag2": { en: "30 min", es: "30 min" },
  "hero.trust.tag3": { en: "NDA-friendly", es: "Con NDA disponible" },
  "hero.social.text": {
    en: "Join 1,000+ entrepreneurs getting weekly AI protocols.",
    es: "Únete a más de 1,000 emprendedores que reciben protocolos de IA cada semana.",
  },
  "hero.social.cta": { en: "Join for Free", es: "Únete Gratis" },

  // ─── Sticky Lead Magnet ─────────────────────────────────────────────
  "magnet.text": {
    en: "Get This Week's Protocol",
    es: "Obtén el Protocolo de Esta Semana",
  },
  "magnet.close": { en: "Dismiss", es: "Cerrar" },

  // ─── Who It's For ───────────────────────────────────────────────────
  "who.label": { en: "01 / Who It's For", es: "01 / Para Quién Es" },
  "who.headline.pre": { en: "We don't work with ", es: "No trabajamos con " },
  "who.headline.emphasis": { en: "everyone", es: "todos" },
  "who.headline.post": {
    en: ". And that's why our clients win.",
    es: ". Y por eso nuestros clientes ganan.",
  },
  "who.fit.label": { en: "You're a fit if", es: "Encajas si" },
  "who.notfit.label": { en: "Skip us if", es: "Sáltanos si" },
  "who.fit.1": {
    en: "Founders running $50K–$500K/month who've outgrown freelance help",
    es: "Fundadores facturando $50K–$500K/mes que ya superaron a los freelancers",
  },
  "who.fit.2": {
    en: "Personal brands & operators with audience but unmonetized attention",
    es: "Marcas personales y operadores con audiencia pero atención sin monetizar",
  },
  "who.fit.3": {
    en: "E-commerce & DTC scaling past their first plateau",
    es: "E-commerce y DTC que buscan superar su primer estancamiento",
  },
  "who.fit.4": {
    en: "Service businesses ready to productize and systemize",
    es: "Negocios de servicios listos para productizar y sistematizar",
  },
  "who.notfit.1": {
    en: "Pre-revenue, idea-stage projects",
    es: "Proyectos en etapa de idea sin facturación",
  },
  "who.notfit.2": {
    en: "Looking for cheapest quote — we are not it",
    es: "Buscas la cotización más barata — no somos eso",
  },
  "who.notfit.3": {
    en: "Want a logo and a one-page site, nothing else",
    es: "Solo quieres un logo y una landing, nada más",
  },
  "who.notfit.4": {
    en: "Unwilling to commit 4 hours/week for 90 days",
    es: "No estás dispuesto a comprometer 4 horas/semana durante 90 días",
  },

  // ─── Problem ────────────────────────────────────────────────────────
  "problem.label": { en: "02 / The Problem", es: "02 / El Problema" },
  "problem.headline.line1.pre": { en: "You don't need ", es: "No necesitas " },
  "problem.headline.emphasis": { en: "more", es: "más" },
  "problem.headline.line1.post": { en: ".", es: "." },
  "problem.headline.line2.pre": { en: "You need a ", es: "Necesitas un " },
  "problem.headline.line2.word": { en: "protocol", es: "protocolo" },
  "problem.headline.line2.post": { en: ".", es: "." },
  "problem.intro": {
    en: "Most growth pain isn't a marketing problem. It's a system problem dressed up as one. Here's what we see every week:",
    es: "La mayoría del dolor de crecimiento no es un problema de marketing. Es un problema de sistema disfrazado de uno. Esto es lo que vemos cada semana:",
  },
  "problem.1.title": { en: "Revenue plateau", es: "Estancamiento de ingresos" },
  "problem.1.body": {
    en: "You've hit a ceiling. The growth tactics that took you to $50K/mo are now the same tactics suffocating you at $80K.",
    es: "Llegaste a un techo. Las tácticas que te llevaron a $50K/mes son las mismas que te asfixian en $80K.",
  },
  "problem.2.title": { en: "Brand mismatch", es: "Desconexión de marca" },
  "problem.2.body": {
    en: "Your offer is premium. Your website looks freelance. Prospects judge you in 7 seconds — and they're judging the wrong thing.",
    es: "Tu oferta es premium. Tu sitio parece freelance. Los prospectos te juzgan en 7 segundos — y están juzgando lo equivocado.",
  },
  "problem.3.title": { en: "Operator bottleneck", es: "Cuello de botella del operador" },
  "problem.3.body": {
    en: "You're still the system. Every content piece, every funnel tweak, every launch waits on you. That's not a business — that's a job.",
    es: "Tú sigues siendo el sistema. Cada contenido, cada ajuste de funnel, cada lanzamiento depende de ti. Eso no es un negocio — es un empleo.",
  },
  "problem.4.title": { en: "Fragmented stack", es: "Stack fragmentado" },
  "problem.4.body": {
    en: "Five tools, three freelancers, two strategies, zero integration. Nothing compounds because nothing connects.",
    es: "Cinco herramientas, tres freelancers, dos estrategias, cero integración. Nada compone porque nada conecta.",
  },

  // ─── Methodology ────────────────────────────────────────────────────
  "method.label": { en: "03 / The Methodology", es: "03 / La Metodología" },
  "method.headline.pre": { en: "The ", es: "El " },
  "method.headline.emphasis": { en: "90-Day Protocol", es: "Protocolo de 90 Días" },
  "method.headline.post": {
    en: ". Three phases. One outcome.",
    es: ". Tres fases. Un resultado.",
  },
  "method.intro": {
    en: "Every engagement runs on the same disciplined framework. Same sequence, same rigor — bespoke execution. This is how we move you from plateau to compounding growth in a quarter.",
    es: "Cada colaboración funciona con el mismo marco disciplinado. Misma secuencia, mismo rigor — ejecución a medida. Así te llevamos del estancamiento al crecimiento compuesto en un trimestre.",
  },
  "method.deliverables": { en: "Deliverables", es: "Entregables" },
  "method.cta": {
    en: "Book 30-Min Strategy Session",
    es: "Reservar Sesión Estratégica de 30 min",
  },
  "method.1.days": { en: "Days 1–30", es: "Días 1–30" },
  "method.1.label": { en: "Diagnose", es: "Diagnosticar" },
  "method.1.title": {
    en: "The Audit & Architecture",
    es: "La Auditoría y Arquitectura",
  },
  "method.1.body": {
    en: "We embed with you, audit the entire stack — brand, site, funnels, content, data — and architect the 90-day protocol. You leave week one with a roadmap, not a guess.",
    es: "Nos integramos contigo, auditamos todo el stack — marca, sitio, funnels, contenido, datos — y diseñamos el protocolo de 90 días. Terminas la primera semana con una hoja de ruta, no con una suposición.",
  },
  "method.1.d1": {
    en: "Full growth audit (brand · funnel · ops)",
    es: "Auditoría completa (marca · funnel · operaciones)",
  },
  "method.1.d2": {
    en: "Competitive & positioning teardown",
    es: "Desglose competitivo y de posicionamiento",
  },
  "method.1.d3": {
    en: "90-day protocol roadmap & KPIs",
    es: "Hoja de ruta de 90 días y KPIs",
  },
  "method.2.days": { en: "Days 31–60", es: "Días 31–60" },
  "method.2.label": { en: "Build", es: "Construir" },
  "method.2.title": { en: "The Build & Launch", es: "La Construcción y Lanzamiento" },
  "method.2.body": {
    en: "We design and ship the assets — website, brand system, content engine, AI workflows. Built once, owned forever. Everything connects to one source of truth.",
    es: "Diseñamos y lanzamos los activos — sitio web, sistema de marca, motor de contenido, flujos de IA. Construido una vez, tuyo para siempre. Todo conecta a una sola fuente de verdad.",
  },
  "method.2.d1": {
    en: "Website + brand system shipped",
    es: "Sitio web + sistema de marca lanzados",
  },
  "method.2.d2": {
    en: "AI content engine deployed",
    es: "Motor de contenido con IA desplegado",
  },
  "method.2.d3": {
    en: "Funnel & analytics instrumented",
    es: "Funnel y analíticas instrumentados",
  },
  "method.3.days": { en: "Days 61–90", es: "Días 61–90" },
  "method.3.label": { en: "Compound", es: "Componer" },
  "method.3.title": { en: "The Scale & Handoff", es: "El Escalado y Traspaso" },
  "method.3.body": {
    en: "We turn the system on, optimize against live data, and hand you the operator playbook. The protocol keeps producing whether we're in the room or not.",
    es: "Encendemos el sistema, optimizamos con datos en vivo y te entregamos el playbook del operador. El protocolo sigue produciendo estemos o no en la sala.",
  },
  "method.3.d1": {
    en: "Weekly optimization sprints",
    es: "Sprints semanales de optimización",
  },
  "method.3.d2": {
    en: "Operator playbook & SOPs",
    es: "Playbook del operador y SOPs",
  },
  "method.3.d3": {
    en: "Compounding KPI dashboard",
    es: "Dashboard de KPIs con crecimiento compuesto",
  },

  // ─── Services ───────────────────────────────────────────────────────
  "services.label": { en: "05 / The Arsenal", es: "05 / El Arsenal" },
  "services.headline.line1": { en: "Eight protocols.", es: "Ocho protocolos." },
  "services.headline.line2": {
    en: "One unified system.",
    es: "Un sistema unificado.",
  },
  "services.intro": {
    en: "Inside the 90-Day Protocol, your engagement is composed from these eight disciplines — selected and sequenced around the specific outcome you're scaling toward.",
    es: "Dentro del Protocolo de 90 Días, tu colaboración se compone de estas ocho disciplinas — seleccionadas y secuenciadas en torno al resultado específico que buscas escalar.",
  },
  "services.custom.label": { en: "Custom Protocol", es: "Protocolo a Medida" },
  "services.custom.title": {
    en: "Need something specific?",
    es: "¿Necesitas algo específico?",
  },
  "services.custom.cta": {
    en: "Build a Custom Plan →",
    es: "Diseñar un Plan a Medida →",
  },
  "services.1.title": { en: "Website Creation", es: "Creación de Sitios Web" },
  "services.1.description": {
    en: "Custom-coded, conversion-engineered websites that reflect the caliber of your brand and load like a luxury suite.",
    es: "Sitios web hechos a medida, diseñados para convertir, que reflejan el calibre de tu marca y cargan como una suite de lujo.",
  },
  "services.1.d1": { en: "Bespoke design", es: "Diseño a medida" },
  "services.1.d2": { en: "Performance-tuned build", es: "Desarrollo optimizado" },
  "services.1.d3": {
    en: "Conversion architecture",
    es: "Arquitectura de conversión",
  },
  "services.2.title": { en: "Brand Elevation", es: "Elevación de Marca" },
  "services.2.description": {
    en: "We refine how your brand looks, sounds, and feels online — so every touchpoint reads like the category leader.",
    es: "Refinamos cómo tu marca se ve, suena y se siente online — para que cada punto de contacto se lea como el líder de tu categoría.",
  },
  "services.2.d1": { en: "Visual identity", es: "Identidad visual" },
  "services.2.d2": { en: "Voice & messaging", es: "Voz y mensajería" },
  "services.2.d3": {
    en: "Digital presence audit",
    es: "Auditoría de presencia digital",
  },
  "services.3.title": {
    en: "Sales & Traffic Growth",
    es: "Ventas y Crecimiento de Tráfico",
  },
  "services.3.description": {
    en: "Funnels, paid acquisition, and conversion systems that compound traffic into revenue, not just impressions.",
    es: "Funnels, adquisición pagada y sistemas de conversión que convierten tráfico en ingresos, no solo en impresiones.",
  },
  "services.3.d1": { en: "Paid media strategy", es: "Estrategia de medios pagados" },
  "services.3.d2": { en: "Funnel engineering", es: "Ingeniería de funnels" },
  "services.3.d3": {
    en: "Analytics & attribution",
    es: "Analíticas y atribución",
  },
  "services.4.title": {
    en: "AI Video Sales Letters",
    es: "Cartas de Venta con IA (VSL)",
  },
  "services.4.description": {
    en: "Long-form VSLs produced with AI workflows — scripted to convert, edited for retention, deployed at scale.",
    es: "VSLs de formato largo producidos con flujos de IA — escritos para convertir, editados para retención, desplegados a escala.",
  },
  "services.4.d1": {
    en: "AI-assisted scripting",
    es: "Guión asistido por IA",
  },
  "services.4.d2": {
    en: "Voice & avatar production",
    es: "Producción de voz y avatar",
  },
  "services.4.d3": {
    en: "Conversion-tested edits",
    es: "Edición testeada para conversión",
  },
  "services.5.title": { en: "UGC Production", es: "Producción UGC" },
  "services.5.description": {
    en: "A roster of creators producing native, scroll-stopping content built for ads, organic, and everything between.",
    es: "Un roster de creadores produciendo contenido nativo que detiene el scroll, creado para ads, orgánico y todo lo intermedio.",
  },
  "services.5.d1": { en: "Creator sourcing", es: "Selección de creadores" },
  "services.5.d2": {
    en: "Briefing & direction",
    es: "Briefing y dirección",
  },
  "services.5.d3": {
    en: "Ad-ready deliverables",
    es: "Entregables listos para ads",
  },
  "services.6.title": {
    en: "Community Management",
    es: "Gestión de Comunidad",
  },
  "services.6.description": {
    en: "We run the rooms where your audience lives — replies, retention, and rituals that build a real community.",
    es: "Manejamos los espacios donde vive tu audiencia — respuestas, retención y rituales que construyen una comunidad real.",
  },
  "services.6.d1": { en: "Daily moderation", es: "Moderación diaria" },
  "services.6.d2": {
    en: "Engagement frameworks",
    es: "Frameworks de engagement",
  },
  "services.6.d3": { en: "Loyalty programs", es: "Programas de fidelidad" },
  "services.7.title": { en: "Brand Exposure", es: "Exposición de Marca" },
  "services.7.description": {
    en: "Press, partnerships, podcasts, and placements that put your brand in the rooms it deserves to be in.",
    es: "Prensa, alianzas, podcasts y placements que ponen tu marca en los espacios donde merece estar.",
  },
  "services.7.d1": { en: "PR & placements", es: "Relaciones públicas y placements" },
  "services.7.d2": {
    en: "Strategic partnerships",
    es: "Alianzas estratégicas",
  },
  "services.7.d3": {
    en: "Influencer alignment",
    es: "Alineación con influencers",
  },
  "services.8.title": { en: "Digital Products", es: "Productos Digitales" },
  "services.8.description": {
    en: "We design and ship digital products — tools, templates, and systems — that simplify daily rituals and elevate the lifestyles of those who use them.",
    es: "Diseñamos y lanzamos productos digitales — herramientas, plantillas y sistemas — que simplifican rituales diarios y elevan los estilos de vida de quienes los usan.",
  },
  "services.8.d1": {
    en: "Product design & build",
    es: "Diseño y desarrollo de producto",
  },
  "services.8.d2": { en: "Lifestyle-led UX", es: "UX centrado en el estilo de vida" },
  "services.8.d3": {
    en: "Launch & distribution",
    es: "Lanzamiento y distribución",
  },

  // ─── Results ────────────────────────────────────────────────────────
  "results.label": { en: "04 / Results", es: "04 / Resultados" },
  "results.headline.pre": { en: "The math of a ", es: "Las matemáticas de un " },
  "results.headline.emphasis": {
    en: "working protocol",
    es: "protocolo que funciona",
  },
  "results.headline.post": { en: ".", es: "." },
  "results.intro": {
    en: "Three operators. Three categories. One framework. Real outcomes from inside the last twelve months of the studio.",
    es: "Tres operadores. Tres categorías. Un framework. Resultados reales de los últimos doce meses del estudio.",
  },
  "results.footnote": {
    en: "Metrics reflect average client trajectory — your results may vary.",
    es: "Las métricas reflejan la trayectoria promedio de nuestros clientes — tus resultados pueden variar.",
  },
  "results.case": { en: "Case", es: "Caso" },
  "results.1.category": {
    en: "Public Relations · Miami",
    es: "Relaciones Públicas · Miami",
  },
  "results.1.context": {
    en: "A top PR strategist with the relationships, but a digital presence that didn't reflect the caliber of his roster.",
    es: "Un estratega de PR de primer nivel con las relaciones, pero una presencia digital que no reflejaba el calibre de su roster.",
  },
  "results.1.metricLabel": {
    en: "Inbound media inquiries",
    es: "Consultas entrantes de medios",
  },
  "results.1.sub": {
    en: "First 60 days post-launch",
    es: "Primeros 60 días tras el lanzamiento",
  },
  "results.1.quote": {
    en: "They didn't sell us a website. They rebuilt how prospects perceive the brand. The inbound speaks for itself.",
    es: "No nos vendieron un sitio web. Redefinieron cómo los prospectos perciben la marca. Los mensajes entrantes hablan por sí solos.",
  },
  "results.1.role": { en: "Founder", es: "Fundador" },
  "results.2.category": {
    en: "Bridal Atelier · Couture",
    es: "Atelier Nupcial · Alta Costura",
  },
  "results.2.context": {
    en: "A bespoke bridal atelier with extraordinary craft, hidden behind a forgettable website. Brides found her by word-of-mouth — and only that.",
    es: "Un atelier nupcial a medida con un oficio extraordinario, oculto tras un sitio web olvidable. Las novias la encontraban solo por el boca a boca.",
  },
  "results.2.metricLabel": {
    en: "Qualified bridal bookings",
    es: "Reservas nupciales calificadas",
  },
  "results.2.sub": { en: "Quarter-over-quarter", es: "Trimestre a trimestre" },
  "results.2.quote": {
    en: "Brides arrive already in love with the work. The site does the selling now — I do the sewing.",
    es: "Las novias llegan ya enamoradas del trabajo. El sitio se encarga de vender — yo me encargo de coser.",
  },
  "results.2.role": {
    en: "Founder & Lead Couturier",
    es: "Fundadora y Diseñadora Principal",
  },
  "results.3.category": {
    en: "Lifestyle · Editorial",
    es: "Estilo de Vida · Editorial",
  },
  "results.3.context": {
    en: "An editorial lifestyle brand with a bold voice but inconsistent visual identity across Instagram and beyond.",
    es: "Una marca editorial de estilo de vida con una voz atrevida pero una identidad visual inconsistente en Instagram y más allá.",
  },
  "results.3.metricLabel": { en: "Engagement rate", es: "Tasa de engagement" },
  "results.3.sub": {
    en: "90-day content protocol",
    es: "Protocolo de contenido de 90 días",
  },
  "results.3.quote": {
    en: "Our feed finally feels like the brand we always knew we were. Everything compounds now.",
    es: "Nuestro feed por fin se siente como la marca que siempre supimos que éramos. Ahora todo compone.",
  },
  "results.3.role": { en: "Editorial Team", es: "Equipo Editorial" },

  // ─── Agent OS™ (product) ────────────────────────────────────────────
  "realestate.tag": { en: "New Release", es: "Nuevo Lanzamiento" },
  "realestate.headline.pre": {
    en: "Industry Specific Protocols: ",
    es: "Protocolos Específicos por Industria: ",
  },
  // Product name — intentionally identical in both languages.
  "realestate.product": { en: "Agent OS", es: "Agent OS" },
  "realestate.sub": {
    en: "Agent OS is the AI operating system we engineered for the modern Realtor. A complete vault of prompts, workflows, and content engines designed to scale real estate businesses to seven figures.",
    es: "Agent OS es el sistema operativo con IA que diseñamos para el agente inmobiliario moderno. Una bóveda completa de prompts, flujos de trabajo y motores de contenido creados para escalar negocios inmobiliarios a siete cifras.",
  },
  "realestate.check1": {
    en: "AI-Powered Lead Nurturing Workflows",
    es: "Flujos de Nutrición de Leads con IA",
  },
  "realestate.check2": {
    en: "100+ High-Conversion Property Prompts",
    es: "Más de 100 Prompts de Alta Conversión para Propiedades",
  },
  "realestate.check3": {
    en: "Automated Social Content Calendar",
    es: "Calendario de Contenido Social Automatizado",
  },
  "realestate.cta": {
    en: "Explore Agent OS",
    es: "Explora Agent OS",
  },
  "realestate.video.label": {
    en: "Agent OS · Product Walkthrough",
    es: "Agent OS · Recorrido del Producto",
  },

  // ─── Newsletter / Lead Capture ──────────────────────────────────────
  "newsletter.label": {
    en: "The Modern Protocols Weekly",
    es: "The Modern Protocols Semanal",
  },
  "newsletter.headline.pre": {
    en: "Build a Smarter Business with ",
    es: "Construye un Negocio Más Inteligente con ",
  },
  "newsletter.headline.emphasis": { en: "AI.", es: "IA." },
  "newsletter.sub": {
    en: "Join entrepreneurs receiving practical AI workflows, automations, and growth protocols every Tuesday.",
    es: "Únete a los emprendedores que reciben flujos de trabajo con IA, automatizaciones y protocolos de crecimiento prácticos cada martes.",
  },
  "newsletter.form.name": { en: "First Name", es: "Nombre" },
  "newsletter.form.name.placeholder": { en: "Your Name", es: "Tu nombre" },
  "newsletter.form.email": { en: "Email", es: "Correo" },
  "newsletter.form.email.placeholder": {
    en: "best-email@company.com",
    es: "mejor-correo@empresa.com",
  },
  "newsletter.form.business": { en: "Business Type", es: "Tipo de Negocio" },
  "newsletter.form.business.placeholder": {
    en: "Select your industry",
    es: "Selecciona tu industria",
  },
  "newsletter.business.1": { en: "Real Estate", es: "Bienes Raíces" },
  "newsletter.business.2": { en: "Healthcare", es: "Salud" },
  "newsletter.business.3": { en: "E-commerce", es: "Comercio Electrónico" },
  "newsletter.business.4": { en: "Marketing", es: "Marketing" },
  "newsletter.business.5": { en: "Other", es: "Otro" },
  "newsletter.form.submit": { en: "Get Free Access", es: "Obtener Acceso Gratis" },
  "newsletter.form.sending": { en: "Subscribing…", es: "Suscribiendo…" },
  "newsletter.note": {
    en: "Join 1,000+ elite operators. No spam, just protocols.",
    es: "Únete a más de 1,000 operadores de élite. Sin spam, solo protocolos.",
  },
  "newsletter.toast.success.title": { en: "You're in.", es: "Estás dentro." },
  "newsletter.toast.success.desc": {
    en: "Your first protocol drops this Tuesday. Check your inbox.",
    es: "Tu primer protocolo llega este martes. Revisa tu correo.",
  },
  "newsletter.toast.error.title": {
    en: "Subscription failed",
    es: "Falló la suscripción",
  },
  "newsletter.toast.error.desc": {
    en: "Something went wrong. Please try again in a moment.",
    es: "Algo salió mal. Inténtalo de nuevo en un momento.",
  },

  // ─── Newsletter popup (entry modal) ─────────────────────────────────
  "popup.tag": { en: "Free Weekly Protocol", es: "Protocolo Semanal Gratis" },
  "popup.headline.pre": {
    en: "Build a Smarter Business with ",
    es: "Construye un Negocio Más Inteligente con ",
  },
  "popup.headline.emphasis": { en: "AI.", es: "IA." },
  "popup.sub": {
    en: "Join entrepreneurs receiving practical AI workflows, automations, and business growth tips every Tuesday.",
    es: "Únete a los emprendedores que reciben flujos de trabajo con IA, automatizaciones y consejos de crecimiento cada martes.",
  },
  "popup.benefit1": {
    en: "One actionable AI workflow per week",
    es: "Un flujo de trabajo con IA accionable por semana",
  },
  "popup.benefit2": {
    en: "Growth protocols from live client work",
    es: "Protocolos de crecimiento de trabajo real con clientes",
  },
  "popup.benefit3": {
    en: "Automations you can deploy the same day",
    es: "Automatizaciones que puedes implementar el mismo día",
  },
  "popup.submit": { en: "Get Free Access", es: "Obtener Acceso Gratis" },
  "popup.sending": { en: "Subscribing…", es: "Suscribiendo…" },
  "popup.note": {
    en: "Join 1,000+ elite operators. No spam, just protocols.",
    es: "Únete a más de 1,000 operadores de élite. Sin spam, solo protocolos.",
  },
  "popup.dismiss": { en: "No thanks, I'll pass", es: "No gracias, paso" },
  "popup.close": { en: "Close", es: "Cerrar" },

  // ─── Work ───────────────────────────────────────────────────────────
  "work.label": { en: "Selected Roster", es: "Roster Seleccionado" },
  "work.headline.pre": { en: "Brands we've ", es: "Marcas que hemos " },
  "work.headline.emphasis": { en: "unlocked.", es: "desbloqueado." },
  "work.discuss": { en: "Discuss yours", es: "Hablemos de la tuya" },
  "work.outcome": { en: "Outcome", es: "Resultado" },
  "work.engagement": { en: "Engagement", es: "Colaboración" },
  "work.1.category": {
    en: "Public Relations · Miami",
    es: "Relaciones Públicas · Miami",
  },
  "work.1.headline": {
    en: "Positioned a top PR strategist and El Nuevo Herald journalist as the bridge between brands and Miami's leading media.",
    es: "Posicionamos a un estratega de PR y periodista de El Nuevo Herald como el puente entre las marcas y los principales medios de Miami.",
  },
  "work.1.metric": { en: "Miami → LATAM", es: "Miami → LATAM" },
  "work.1.duration": { en: "Ongoing", es: "En curso" },
  "work.2.category": {
    en: "Bridal Atelier · Couture",
    es: "Atelier Nupcial · Alta Costura",
  },
  "work.2.headline": {
    en: "Crafted a refined digital home for a bespoke bridal atelier — showcasing the artistry behind every custom gown and alteration.",
    es: "Creamos un hogar digital refinado para un atelier nupcial a medida — mostrando el arte detrás de cada vestido y ajuste personalizado.",
  },
  "work.2.metric": { en: "Bookings ↑", es: "Reservas ↑" },
  "work.2.duration": { en: "Ongoing", es: "En curso" },
  "work.3.category": {
    en: "Lifestyle · Editorial",
    es: "Estilo de Vida · Editorial",
  },
  "work.3.headline": {
    en: "Instagram image direction and social strategy shaping an intimate, modern voice that resonates.",
    es: "Dirección de imagen para Instagram y estrategia social que moldea una voz íntima y moderna que resuena.",
  },
  "work.3.metric": { en: "Engagement ↑", es: "Engagement ↑" },
  "work.3.duration": { en: "Ongoing", es: "En curso" },
  "work.placeholder.brand": { en: "YOUR BRAND HERE", es: "TU MARCA AQUÍ" },
  "work.placeholder.category": {
    en: "New Partnership",
    es: "Nueva Alianza",
  },
  "work.placeholder.headline": {
    en: "We're looking for the next game-changer. If you're ready to scale your digital presence and dominate your niche, this spot is reserved for you.",
    es: "Buscamos al próximo referente. Si estás listo para escalar tu presencia digital y dominar tu nicho, este espacio está reservado para ti.",
  },
  "work.placeholder.metric": { en: "1 Spot Left", es: "1 Lugar Disponible" },
  "work.placeholder.duration": { en: "Q3/Q4 Intake", es: "Ingreso Q3/Q4" },

  // ─── Testimonials ───────────────────────────────────────────────────
  "testimonials.label": { en: "In Their Words", es: "En Sus Palabras" },
  "testimonials.headline.pre": { en: "What founders ", es: "Lo que dicen " },
  "testimonials.headline.emphasis": { en: "say.", es: "los fundadores." },
  "testimonials.1.quote": {
    en: "They translated my work into a digital presence that finally matches the caliber of the brands and people I represent. The inquiries speak for themselves.",
    es: "Tradujeron mi trabajo en una presencia digital que por fin está a la altura del calibre de las marcas y personas que represento. Las consultas hablan por sí solas.",
  },
  "testimonials.1.author": { en: "Erwin Pérez", es: "Erwin Pérez" },
  "testimonials.1.role": {
    en: "Founder, Erwin Pérez Media",
    es: "Fundador, Erwin Pérez Media",
  },
  "testimonials.2.quote": {
    en: "My atelier finally has a home online as refined as the gowns inside it. Brides arrive already in love with the craft — bookings haven't slowed since.",
    es: "Mi atelier por fin tiene un hogar online tan refinado como los vestidos que hay dentro. Las novias llegan ya enamoradas del oficio — las reservas no han parado desde entonces.",
  },
  "testimonials.2.author": {
    en: "The Little Seamstress",
    es: "The Little Seamstress",
  },
  "testimonials.2.role": {
    en: "Bridal Atelier, Couture",
    es: "Atelier Nupcial, Alta Costura",
  },
  "testimonials.3.quote": {
    en: "They understood the tone we needed on Instagram before we could even articulate it. Every post feels intentional, intimate, and unmistakably ours.",
    es: "Entendieron el tono que necesitábamos en Instagram antes de que pudiéramos articularlo. Cada post se siente intencional, íntimo y inconfundiblemente nuestro.",
  },
  "testimonials.3.author": { en: "Sexo Sentido", es: "Sexo Sentido" },
  "testimonials.3.role": {
    en: "Lifestyle · Editorial",
    es: "Estilo de Vida · Editorial",
  },

  // ─── About ──────────────────────────────────────────────────────────
  "about.label": { en: "The Studio", es: "El Estudio" },
  "about.headline.line1": { en: "We're the key", es: "Somos la llave" },
  "about.headline.emphasis": {
    en: "to modern growth.",
    es: "al crecimiento moderno.",
  },
  "about.p1": {
    en: "The Modern Protocols is a private digital studio for brands that refuse to be average. We don't sell templates, we don't run playbooks — we build custom growth protocols for ambitious founders and operators.",
    es: "The Modern Protocols es un estudio digital privado para marcas que se niegan a ser promedio. No vendemos plantillas, no seguimos playbooks — construimos protocolos de crecimiento a medida para fundadores y operadores ambiciosos.",
  },
  "about.p2": {
    en: "From a luxury fashion launch to a SaaS scaling its first million, our work sits at the intersection of timeless craft and modern technology. AI is a tool. Design is a language. Community is the compound interest.",
    es: "Desde el lanzamiento de una marca de moda de lujo hasta un SaaS escalando su primer millón, nuestro trabajo se sitúa en la intersección entre oficio atemporal y tecnología moderna. La IA es una herramienta. El diseño es un lenguaje. La comunidad es el interés compuesto.",
  },
  "about.p3": {
    en: "We also build digital products — tools, templates, and systems designed to simplify daily rituals and elevate the lifestyles of the people who use them. Growth for our clients, utility for their customers.",
    es: "También construimos productos digitales — herramientas, plantillas y sistemas diseñados para simplificar rituales diarios y elevar los estilos de vida de quienes los usan. Crecimiento para nuestros clientes, utilidad para sus clientes.",
  },
  "about.quote": {
    en: '"The key unlocks. The protocols compound."',
    es: '"La llave abre. Los protocolos componen."',
  },
  "about.stat1.label": { en: "Founded", es: "Fundado" },
  "about.stat2.label": { en: "Team", es: "Equipo" },
  "about.stat3.label": { en: "Continents", es: "Continentes" },

  // ─── FAQ ────────────────────────────────────────────────────────────
  "faq.label": { en: "06 / Common Questions", es: "06 / Preguntas Frecuentes" },
  "faq.headline.pre": { en: "What founders ", es: "Lo que los fundadores " },
  "faq.headline.emphasis": {
    en: "actually ask",
    es: "realmente preguntan",
  },
  "faq.headline.post": {
    en: " before signing.",
    es: " antes de firmar.",
  },
  "faq.followup": {
    en: "Still have questions? The strategy call answers them all.",
    es: "¿Aún tienes preguntas? La llamada estratégica las responde todas.",
  },
  "faq.cta": {
    en: "Book 30-Min Strategy Session",
    es: "Reservar Sesión Estratégica de 30 min",
  },
  "faq.1.q": {
    en: "How is the investment structured — and how do I know it's worth it?",
    es: "¿Cómo se estructura la inversión — y cómo sé que vale la pena?",
  },
  "faq.1.a": {
    en: "Engagements start at $15K for the 90-day protocol and scale based on scope. The math is simple: if a single new high-ticket client covers half the investment, the protocol pays for itself in the first 60 days. We don't take on a brand unless we see a clear path to 3–5× return inside twelve months — and we tell you on the strategy call whether you're a fit.",
    es: "Las colaboraciones comienzan en $15K para el protocolo de 90 días y escalan según el alcance. La matemática es simple: si un solo cliente nuevo de alto ticket cubre la mitad de la inversión, el protocolo se paga solo en los primeros 60 días. No aceptamos una marca a menos que veamos un camino claro a un retorno de 3–5× en doce meses — y te decimos en la llamada estratégica si encajas.",
  },
  "faq.2.q": {
    en: "What time commitment do you need from me?",
    es: "¿Qué compromiso de tiempo necesitas de mí?",
  },
  "faq.2.a": {
    en: "Plan on four focused hours per week — one 60-minute strategy call, two async reviews, and ~90 minutes of feedback windows. We're built to extend your team, not consume your calendar. Founders who try to give us less get less; founders who lean in for ninety days get the compounding outcome.",
    es: "Cuenta con cuatro horas enfocadas por semana — una llamada estratégica de 60 minutos, dos revisiones asíncronas y ~90 minutos de ventanas de feedback. Estamos hechos para extender tu equipo, no para consumir tu calendario. Los fundadores que intentan darnos menos obtienen menos; los que se comprometen 90 días obtienen el resultado compuesto.",
  },
  "faq.3.q": {
    en: "Does this work for my niche / industry?",
    es: "¿Funciona esto para mi nicho / industria?",
  },
  "faq.3.a": {
    en: "The 90-Day Protocol is industry-agnostic by design — the framework is what compounds, the execution is bespoke. We've shipped it for PR, bridal couture, and editorial lifestyle brands in the last year alone. On the strategy call we'll be honest if your category isn't where we add the most leverage and refer you to someone who is.",
    es: "El Protocolo de 90 Días está diseñado para ser agnóstico a la industria — el framework es lo que compone, la ejecución es a medida. Lo hemos ejecutado para PR, alta costura nupcial y marcas editoriales de estilo de vida solo en el último año. En la llamada estratégica te diremos honestamente si tu categoría no es donde aportamos más valor y te referiremos a alguien que sí.",
  },
  "faq.4.q": {
    en: "What kind of ROI should I expect — and how fast?",
    es: "¿Qué ROI puedo esperar — y qué tan rápido?",
  },
  "faq.4.a": {
    en: "Most clients see measurable lift inside 30 days (better positioning → better leads), meaningful revenue movement by day 60, and compounding by day 90. Average trajectory across the roster: 2–4× pipeline within two quarters. We're a growth investment, not a deliverables vendor — if you treat us like the latter, you'll get the latter's ROI.",
    es: "La mayoría de clientes ven una mejora medible dentro de los primeros 30 días (mejor posicionamiento → mejores leads), un movimiento significativo de ingresos hacia el día 60, y crecimiento compuesto hacia el día 90. Trayectoria promedio del roster: 2–4× de pipeline en dos trimestres. Somos una inversión de crecimiento, no un proveedor de entregables — si nos tratas como lo segundo, obtendrás el ROI de lo segundo.",
  },

  // ─── Contact ────────────────────────────────────────────────────────
  "contact.label": { en: "Contact", es: "Contacto" },
  "contact.headline.pre": { en: "Book your ", es: "Reserva tu " },
  "contact.headline.emphasis": {
    en: "strategy session.",
    es: "sesión estratégica.",
  },
  "contact.intro": {
    en: "Tell us where you're at and what you're trying to unlock. If you're a fit, we'll send a calendar link within one business day. If you're not, we'll tell you that too — and point you somewhere better.",
    es: "Cuéntanos dónde estás y qué quieres desbloquear. Si encajas, te enviaremos un link de calendario dentro de un día hábil. Si no, también te lo diremos — y te apuntaremos a un lugar mejor.",
  },
  "contact.trust.accepting": { en: "Accepting Q3/Q4", es: "Aceptando Q3/Q4" },
  "contact.trust.tag1": { en: "No-commitment", es: "Sin compromiso" },
  "contact.trust.tag2": { en: "NDA-friendly", es: "Con NDA disponible" },
  "contact.info.email": { en: "How to Reach Us", es: "Cómo Contactarnos" },
  "contact.info.email.value": {
    en: "Every inquiry runs through the form",
    es: "Toda consulta pasa por el formulario",
  },
  "contact.info.email.note": {
    en: "It's the fastest route to a calendar link — and nothing gets lost in an inbox.",
    es: "Es la vía más rápida a un link de calendario — y nada se pierde en un buzón.",
  },
  "contact.info.locations": { en: "Locations", es: "Ubicaciones" },
  "contact.info.locations.value": {
    en: "Remote — Europe, USA, LATAM",
    es: "Remoto — Europa, USA, LATAM",
  },
  "contact.info.response": { en: "Response Time", es: "Tiempo de Respuesta" },
  "contact.info.response.value": {
    en: "Within 1 business day",
    es: "Dentro de 1 día hábil",
  },
  "contact.form.name": { en: "Your Name", es: "Tu Nombre" },
  "contact.form.name.placeholder": { en: "Jane Doe", es: "Juan Pérez" },
  "contact.form.email": { en: "Email", es: "Email" },
  "contact.form.email.placeholder": {
    en: "you@brand.com",
    es: "tu@marca.com",
  },
  "contact.form.brand": { en: "Brand / Company", es: "Marca / Empresa" },
  "contact.form.brand.placeholder": {
    en: "The name of your brand",
    es: "El nombre de tu marca",
  },
  "contact.form.service": { en: "Service Interest", es: "Servicio de Interés" },
  "contact.form.service.placeholder": {
    en: "Select a service…",
    es: "Selecciona un servicio…",
  },
  "contact.form.budget": { en: "Budget", es: "Presupuesto" },
  "contact.form.budget.placeholder": {
    en: "Select a range…",
    es: "Selecciona un rango…",
  },
  "contact.form.message": {
    en: "What would you like to unlock?",
    es: "¿Qué te gustaría desbloquear?",
  },
  "contact.form.message.placeholder": {
    en: "Tell us about your brand, goals, and timeline…",
    es: "Cuéntanos sobre tu marca, objetivos y cronograma…",
  },
  "contact.form.submit": { en: "Submit Inquiry", es: "Enviar Consulta" },
  "contact.form.sending": { en: "Sending…", es: "Enviando…" },
  "contact.toast.success.title": {
    en: "Inquiry received.",
    es: "Consulta recibida.",
  },
  "contact.toast.success.desc": {
    en: "We'll respond within one business day.",
    es: "Responderemos dentro de un día hábil.",
  },
  "contact.toast.error.title": {
    en: "Something went wrong.",
    es: "Algo salió mal.",
  },
  "contact.toast.error.desc": {
    en: "Please try again in a moment.",
    es: "Inténtalo de nuevo en un momento.",
  },
  "contact.service.1": { en: "Website Creation", es: "Creación de Sitios Web" },
  "contact.service.2": { en: "Brand Elevation", es: "Elevación de Marca" },
  "contact.service.3": {
    en: "Sales & Traffic Growth",
    es: "Ventas y Crecimiento de Tráfico",
  },
  "contact.service.4": {
    en: "AI Video Sales Letters",
    es: "Cartas de Venta con IA",
  },
  "contact.service.5": { en: "UGC Production", es: "Producción UGC" },
  "contact.service.6": {
    en: "Community Management",
    es: "Gestión de Comunidad",
  },
  "contact.service.7": { en: "Brand Exposure", es: "Exposición de Marca" },
  "contact.service.8": {
    en: "Full Protocol (multiple)",
    es: "Protocolo Completo (varios)",
  },
  "contact.budget.1": { en: "Under $5k", es: "Menos de $5k" },
  "contact.budget.2": { en: "$5k – $15k", es: "$5k – $15k" },
  "contact.budget.3": { en: "$15k – $30k", es: "$15k – $30k" },
  "contact.budget.4": { en: "$30k – $75k", es: "$30k – $75k" },
  "contact.budget.5": { en: "$75k+", es: "$75k+" },

  // ─── Footer ─────────────────────────────────────────────────────────
  "footer.tagline": {
    en: "A digital growth studio building the systems modern brands use to compound their advantage.",
    es: "Un estudio de crecimiento digital que construye los sistemas que las marcas modernas usan para componer su ventaja.",
  },
  "footer.navigate": { en: "Navigate", es: "Navegar" },
  "footer.services": { en: "Services", es: "Servicios" },
  "footer.nav.services": { en: "Services", es: "Servicios" },
  "footer.nav.method": { en: "Method", es: "Método" },
  "footer.nav.results": { en: "Results", es: "Resultados" },
  "footer.nav.faq": { en: "FAQ", es: "Preguntas" },
  "footer.nav.contact": { en: "Contact", es: "Contacto" },
  "footer.rights": {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  "footer.tagline.mono": {
    en: "Unlock · Build · Scale",
    es: "Abrir · Construir · Escalar",
  },
} as const;

export type TranslationKey = keyof typeof translations;
