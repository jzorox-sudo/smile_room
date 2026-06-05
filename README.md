# SMILE ROOM — Landing Page Clínica Dental

> Sitio web de odontología integral para el **Dr. Juan Atondo** en Los Mochis, Sinaloa.  
> Proyecto de portafolio freelance: diseño, maquetación, SEO local y optimización para IA.

---

## Demo en vivo

🔗 [smileroomdemo.com](https://tu-usuario.github.io/smile-room) *(actualizar con URL real)*

![Preview del sitio](assets/img/og-preview.png)

---

## Problema que resuelve

El Dr. Atondo solo contaba con una cuenta de Instagram (@smileroomx). Sin presencia web, 
la clínica no aparecía en búsquedas de Google ni en respuestas de IA cuando alguien en 
Los Mochis buscaba *"dentista"*, *"odontólogo"* o tratamientos específicos.

**Objetivo:** Crear una landing page que:
- Posicione a SMILE ROOM en búsquedas locales de Google (SEO on-page + Schema.org)
- Sea citada por IAs como ChatGPT y Perplexity ante consultas sobre dentistas en Los Mochis
- Convierta visitas en citas vía WhatsApp sin necesitar backend

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| **HTML5 semántico** | Estructura, accesibilidad, Schema.org JSON-LD |
| **Tailwind CSS (CDN)** | Sistema de diseño, layout, utilidades responsivas |
| **CSS custom** (`styles.css`) | Animaciones, slider antes/después, reveal, modal |
| **JavaScript vanilla** (`main.js`) | Typewriter, slider, FAQ, modal, WhatsApp, navbar |
| **Schema.org — Dentist** | Datos estructurados para Google AI y buscadores |
| **Google Fonts** | EB Garamond (display) + Inter (body) + DM Sans (UI) |
| **WhatsApp Business API** | CTA flotante + formulario con mensaje prellenado |

---

## Estructura del proyecto

```
smile-room/
│
├── index.html              # HTML semántico limpio (sin CSS/JS inline)
├── README.md               # Este archivo
│
├── assets/
│   ├── css/
│   │   └── styles.css      # Animaciones, slider, reveal, modal, WhatsApp pulse
│   ├── js/
│   │   └── main.js         # 8 módulos: typewriter, slider, FAQ, modal, wa, navbar…
│   └── img/
│       └── og-preview.png  # Imagen Open Graph para redes sociales
│
└── .github/
    └── CODEOWNERS          # Propietario del repo para revisiones de PR
```

---

## Características implementadas

### UX / Interactividad
- **Typewriter en hero** — cicla 3 frases con erase/type a 100 ms/char
- **Slider antes/después** — `clip-path` + `<input type="range">` sin librerías; 3 casos clínicos
- **Modal de cita** — abre desde navbar, hero y sección doctor; cierra con ESC o click fuera
- **WhatsApp prellenado** — el formulario genera un mensaje estructurado con nombre, servicio y fecha
- **FAQ accordion** — `max-height` transition, solo un panel abierto a la vez
- **Botón WhatsApp flotante** — `position:fixed`, siempre visible, con animación pulse CSS
- **Scroll reveal** — `IntersectionObserver` activa `.active` en cada sección al entrar en viewport
- **Navbar adaptativa** — transparente → blanca sólida al hacer scroll (clase `.scrolled`)

### SEO y AI-Readiness
- `<title>` y `<meta description>` con keywords: *dentista Los Mochis*, *odontólogo Sinaloa*
- Schema.org tipo **`Dentist`** con dirección, geo, teléfono y horarios
- Headings jerarquizados H1 → H2 → H3 con variaciones de keywords
- Atributos `alt` descriptivos en todas las imágenes con ubicación geográfica
- FAQ con preguntas reales que replican búsquedas en Google y ChatGPT

---

## Decisiones de diseño

**¿Por qué un solo HTML + Tailwind CDN sin build step?**  
El cliente necesita un directorio que pueda subir a cualquier hosting compartido sin 
CLI, Node.js ni proceso de compilación. Penalización de tamaño del CDN aceptable para 
una landing page con alto % de cache hit tras la primera carga.

**¿Por qué CSS custom separado de Tailwind?**  
Tailwind no puede expresar `clip-path`, animaciones `@keyframes`, ni el estado 
`.reveal.active`. Mantener esas reglas en `styles.css` permite que un diseñador 
ajuste animaciones sin tocar HTML ni lógica de negocio.

**¿Por qué JavaScript vanilla en módulos IIFE?**  
Los 8 módulos de interactividad son simples y bien delimitados. React o Vue agregarían 
~40 KB de bundle y un paso de build sin beneficio tangible. Los IIFEs evitan 
contaminación del scope global; las 4 funciones que HTML necesita (`openModal`, 
`closeModal`, `handleSlider`, `toggleFaq`) se exponen explícitamente en `window`.

**¿Por qué Schema.org tipo `Dentist` y no `LocalBusiness`?**  
`Dentist` es un subtipo médico reconocido por Google Knowledge Graph y los LLMs. 
Usarlo incrementa la probabilidad de ser citado cuando ChatGPT responde 
*"¿cuál es un buen dentista en Los Mochis?"*.

---

## Cómo correr el proyecto localmente

```bash
# Sin instalación — abrir directo:
open index.html

# Servidor local (recomendado para evitar CORS en Google Fonts):
npx serve .
# o
python3 -m http.server 3000
# → http://localhost:3000
```

---

## Personalización antes de lanzar

Busca los siguientes comentarios `TODO` en el código y reemplaza con datos reales:

| Archivo | Buscar | Reemplazar con |
|---|---|---|
| `index.html` | `12345678` | Cédula profesional real |
| `index.html` | `Av. Independencia #1234` | Dirección real de la clínica |
| `index.html` | `(668) 123 4567` | Teléfono real |
| `main.js` | `WHATSAPP_NUMBER = '526681234567'` | Número WhatsApp real |
| `index.html` | `https://smileroom.mx` | Dominio real en producción |
| `assets/img/` | `og-preview.png` | Screenshot real del sitio |
| `index.html` | Imágenes `lh3.googleusercontent.com` | Fotos reales del Dr. y clínica |

---

## Roadmap / Pendientes

- [ ] Sustituir imágenes de Google Stitch por fotos reales
- [ ] Actualizar número de WhatsApp, dirección y cédula profesional
- [ ] Agregar Google Maps embed real con pin de la clínica
- [ ] Conectar formulario a EmailJS para respaldo por correo
- [ ] Registrar la clínica en Google Business Profile
- [ ] Agregar Google Analytics 4 / Tag Manager
- [ ] Deploy en Netlify con dominio `smileroom.mx`

---

## Autor

**Jonathan Zenteno Ocampo** — Ingeniero de Software · Consultor Freelance  
[zenteno.ocampo@gmail.com](mailto:zenteno.ocampo@gmail.com) · 
[LinkedIn](#) · [Portafolio](#)

---

*Proyecto de portafolio freelance — Los Mochis, Sinaloa · 2026*
