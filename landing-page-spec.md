# Especificación — Landing page de validación (a implementar en Astro)

> **Propósito de este archivo:** servir como brief de implementación para otra IA (o dev) que construya la landing con Astro sobre un template existente. Contexto completo en `respuestas-idea-smart-links.md`, `reporte-evaluacion-enlace-inteligente.md` y `proceso-validacion-landing.md`.

---

## 1. Qué es y qué NO es esta página

**Es** un instrumento de medición. Su única función es convertir visitantes en **emails capturados** y en **respuestas de una encuesta corta**. El entregable no es la página: son los registros y datos.

**NO es:** una web corporativa, un producto funcional, una página de precios final ni un brochure de marketing. No debe vender ni explicar todo — solo capturar interés.

**Métrica principal:** tasa de conversión visitas → email. Meta ≥10%, alerta <5%. Meta absoluta: ≥20 emails en 30 días.

## 2. Stack y límites

- **Framework:** Astro (usar el template que ya existe del usuario).
- **Idioma:** español (español latino). La versión en inglés queda fuera de este alcance.
- **Estilo:** limpio, una sola página, minimalista. Sin animaciones pesadas ni frameworks de UI que no vengan en el template.
- **Sin backend propio:** la captura de email y la encuesta usan servicios externos gratuitos (ver sección 7). No se construye API ni base de datos en esta fase.
- **Tiempo objetivo:** horas, no semanas.

## 3. Identidad y nombre (test pendiente)

El nombre definitivo NO está decidido. La página debe usar un nombre provisional pero dejar el cambio trivial (variable/config central, no hardcodeado en cada sección). Candidatos en orden:

1. **Enlace Inteligente** (alinea con el término de búsqueda más usado en español)
2. **UnSoloLink / UnLink**
3. **AbreMiApp**
4. **RedirApp**
5. **EnlaceApp / AppLink**

La landing debe poder cambiar de nombre y dominio con **1 solo cambio de configuración**. Implementar como variable global (ej. `siteName` en un archivo de config o `Site.astro`).

## 4. Propuesta de valor (copy base)

Diferencial (tomado de la investigación, sección 9):

> Opción simple y barata, self-serve, sin SDK, para **marketers** (no devs) que solo necesitan "un link que funcione en ambos sistemas". Posicionamiento LatAm: cobra en **pesos mexicanos**, sin tarjeta internacional, con **soporte en español** — nadie del mercado lo hace.

**Headline (titular) — opciones a testear (A/B manual):**

- A: "Un solo enlace para tu app en iOS y Android. Sin SDK, sin pagar $500/mes."
- B: "Abre tu app desde cualquier link, en cualquier dispositivo."

**Subheadline:** "Crea un enlace inteligente que detecta si tu visitante usa iPhone, Android o desktop y lo manda a la app correcta o a su tienda. Listo en minutos, en pesos mexicanos."

**3 bullets diferenciadores (frente a Branch/AppsFlyer):**

1. **Sin SDK** — sin integrar código en tu app ni depender de un desarrollador.
2. **Precio en MXN** — sin tarjeta internacional, sin tipo de cambio (Branch ≈ $9,000-10,000 MXN/mes).
3. **Hecho para marketers** — pensado para campañas de email, SMS, ads y bio de GoHighLevel, Klaviyo, Mailchimp.

**Anti-bullet (no prometer lo que no hay en el MVP):** no mencionar dominios personalizados ni deep linking avanzado (deferred deep linking) como funcionalidad. Si aparece "deep linking", debe quedar implícito como "abre la app".

## 5. Estructura de la página (secciones, en orden)

1. **Hero** — headline (variable de nombre) + subheadline + campo de email + CTA. Sin nav.
2. **Dolor / Problema** — "Tu campaña funciona, pero el link no abre la app": mención del problema real (email/SMS/ads que mandan al navegador en vez de a la app).
3. **Cómo funciona** — 3 pasos: (1) crea tu enlace, (2) pégalo en tu campaña, (3) detectamos el dispositivo y redirigimos a la tienda o app correcta.
4. **Diferenciadores** — los 3 bullets de la sección 4 (sin SDK / MXN / para marketers).
5. **Soporte del problema** — "¿Se apagó Firebase Dynamic Links en 2025?" / "¿Branch cuesta $500+/mes?" — apela directo a quien está buscando alternativa. (Con datos reales de la investigación.)
6. **FAQ breve** (3-4 preguntas): ¿Necesito SDK? ¿En qué se diferencia de Branch? ¿Precio? ¿Soporta mi herramienta de email/SMS? → respuestas cortas.
7. **CTA final** — repetir captura de email: "Notifícame cuando salga" + bullet de "sin spam, una notificación cuando esté listo".

**Sin sección de precios** en esta fase (el precio se testea en la encuesta, no en la página). **Sin footer grande** ni enlaces a redes: máximo un enlace legal/privacidad y contacto.

## 6. Flujo de captura y encuesta

### Formulario de email (Hero + CTA final)

- Campo único: **email** + botón CTA.
- Validación de formato de email en cliente.
- Estado de éxito: texto en la página ("¡Listo! Revisa tu correo") + **redirección automática a la encuesta** (sección 7) en pestaña/misma página.

### Encuesta post-registro (3 preguntas, obligatorias)

Después del registro, llevar al usuario a un form externo (Tally o Google Forms):

1. **¿Cómo te sentirías si ya no pudieras usar esto?**
   - Muy decepcionado / Algo decepcionado / No me importaría
2. **¿Con qué frecuencia necesitas esto?**
   - Diario / Semanal / Por campaña / Rara vez
3. **¿Cuánto pagarías hoy por una herramienta así?**
   - $0 / $5-9 / $10-19 / $20+ USD al mes

### Email de confirmación (automático, texto breve)

- Asunto: "[Nombre] — confirma tu interés"
- Cuerpo: confirmar registro + 2 preguntas abiertas opcionales (responden por escrito, sin llamada):
  - "¿Qué haces hoy para resolver esto?"
  - "¿Qué es lo que más te ha costado hasta ahora?"

## 7. Servicios externos e integraciones (todo gratis)

| Pieza                 | Herramienta sugerida                                                       | Config                                                                                |
| --------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Captura de email      | Buttermilk / Buttondown / ConvertKit free / Google Sheets + Apps Script    | Acción del `<form>` apunta al endpoint o usa POST + redirect a la encuesta            |
| Encuesta              | Tally o Google Forms                                                       | URL directa; recibir el registro con el email prellenado si la herramienta lo permite |
| Email de confirmación | Tool de captura con auto-responder, o automatización simple                | Contenido = sección 6                                                                 |
| Analytics             | Plausible o Vercel Analytics (free tier) o un `<script>` de eventos manual | Contar: visitas, envíos de formulario, clics en CTA                                   |

**Requisito técnico para el form:** el envío debe (a) guardar el email y (b) redirigir a la encuesta. Preferible que el tool de captura ya haga ambos (ej. redirección a URL custom después del submit).

## 8. SEO (términos reales en español)

Estos términos van en `title`, `meta description`, `h1/h2` y copy (NO keyword-stuffing — naturales):

- "enlace inteligente" (principal)
- "un solo link para iOS y Android"
- "abrir mi app desde un link"
- "redirigir según dispositivo"
- "deep link"

**Title sugerido:** "[Nombre] — Enlace inteligente para iOS y Android, sin SDK | Precio en MXN"

**Meta description:** "Crea un enlace que abre tu app en iPhone o Android según el dispositivo del visitante. Sin SDK, listo en minutos, precio en pesos mexicanos."

**Imágenes:** usar texto/SVG; no depende de imágenes de stock (evitar overhead de assets). Carga rápida (Core Web Vitals no es crítico pero no lastimar).

## 9. Analytics y medición (requisitos de decisión)

Implementar mínimo 3 eventos con nombres claros:

1. `page_view` (visita)
2. `cta_click` (clic en botón de captura)
3. `form_submit` (email enviado — el dato duro)

Con eso se calcula la **tasa de conversión** que alimenta el umbral del skill (<5% alerta, ≥10% bien).

## 10. Criterios de aceptación (para quien la implemente)

- [ ] Una sola página Astro, mobile-first, carga en <2s.
- [ ] El nombre del producto sale de 1 solo lugar de configuración.
- [ ] Formulario de email funcional de punta a punta: submit → confirmación visual → redirección a encuesta.
- [ ] Encuesta de 3 preguntas accesible desde el flujo post-registro.
- [ ] Auto-responder de email de confirmación con las 2 preguntas abiertas.
- [ ] Eventos `page_view`, `cta_click`, `form_submit` implementados y verificables.
- [ ] Texto SEO (title + meta) aplicado con los términos de la sección 8.
- [ ] Copy en español latino, sin prometer dominios personalizados ni deep linking avanzado.
- [ ] Se puede desplegar con 1 comando (`astro build` + deploy en Vercel/Cloudflare, gratis).

## 11. Fuera de alcance (explicitamente NO)

- Backend propio, base de datos, login.
- Página de precios, checkout o cobro.
- Dominios personalizados (fase avanzada).
- Deferred deep linking / fingerprinting.
- Inglés, i18n, dark mode, blog, docs.
- Marketing pesado: sin pop-ups, sin chatbots, sin animaciones de scroll.

---

_Brief generado a partir del reporte `reporte-evaluacion-enlace-inteligente.md` y `proceso-validacion-landing.md` — skill `evaluar-idea-saas`, etapa 0._
