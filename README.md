# Weedex WebApps

Landing principal de [weedex.es](https://weedex.es) — Asistentes AI para tu negocio.

## Tech Stack

- **Frontend:** React 18 + Vite 6 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## Desarrollo

```bash
npm install
npm run dev      # Dev server en localhost:5173
npm run build    # Build de producción → dist/
npm run preview  # Preview del build
```

## Estructura

```
src/
├── App.tsx          # Componente principal (Landing completo)
├── main.tsx         # Entry point
└── styles/
    └── index.css    # Tailwind + theme tokens

public/
└── favicon.svg
```

## Secciones del Landing

1. **Navbar** — Logo Weedex + links + CTA WhatsApp de Antonio
2. **Hero** — "Asistentes AI para tu negocio" con CTAs
3. **Demos Carousel** — 5 demos en carrusel (barber, beautyhair, besthair, estetica, restaurante)
4. **Características** — 6 features del asistente IA
5. **Chat Mockup** — Simulación de conversación IA en tiempo real
6. **Precios** — Teaser de pricing (desde 149€/mes)
7. **CTA** — Contactar con Antonio por WhatsApp
8. **Footer**

## Deploy en Dokploy

1. Subir repo a GitHub (ya hecho)
2. En Dokploy UI: New Project → Import from GitHub
3. Seleccionar repo `aparrarc/weedex-webapps`
4. Dokploy detecta el `dokploy.yaml` automáticamente
5. Desplegar — el Dockerfile construye y sirve con Nginx

```bash
# Build local (opcional)
docker build -t weedex-landing .
docker run -p 8080:80 weedex-landing
```

## Deploy en Hostinger (alternativo)

1. Hacer `npm run build`
2. Subir contenido de `dist/` a `/public_html` via Hostinger File Manager
3. weedex.es apunta a Hostinger automáticamente

## Demos en producción

| Demo | URL | Industry |
|------|-----|----------|
| Barber | barber.weedex.es | Barbería |
| Beauty Hair | beautyhair.weedex.es | Peluquería |
| Best Hair | besthair.weedex.es | Peluquería Premium |
| Centro Estética | estetica.weedex.es | Estética |
| Restaurante | restaurante.weedex.es | Hostelería |

## Contacto

**Antonio Parra** — Weedex Solutions
- WhatsApp: +34 637 07 09 94
- Email: forja@weedex.es
