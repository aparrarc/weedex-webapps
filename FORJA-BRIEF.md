# BRIEF para Forja: Weedex WebApps

## Objetivo
Crear el landing principal de weedex.es como WebApp, en un repo nuevo `weedex-webapps`.

## Repos relacionados
- **Barber** ( Weedex Solutions demo): `git@github.com:aparrarc/Barber.git`
  - Ya tiene los 4/5 demos funcionando en subdomains de weedex.es
  - Sistema de brands ya funcionando: `barber`, `beautyhair`, `besthair`, `estetica`, `restaurante`
  - Componentes y estilos compartidos que se pueden reutilizar
  - Docs: `/home/casa/.openclaw/workspace/crecimiento/proyectos/weedex-documento-tecnico.md`

## Lo que hay que hacer

### 1. Landing principal (weedex.es)
Página principal que:
- Muestre los demos disponibles en carrusel (screenshots de las webs reales)
- Cada demo = screenshot de barber.weedex.es, beautyhair.weedex.es, etc.
- Botones "Visitar demo" → van al subdomain correspondiente
- Hero con el mensaje de "Asistentes AI para tu negocio"
- CTAs: hablar con Antonio (WhatsApp/telegram)

### 2. Sistema de brands
Reutilizar/adaptar el de Barber si es posible:
- Paletas de colores por brand
- Logos, tipografías
- Config de cada subdomain

### 3. Tech stack
- React + Vite (mismo que Barber)
- TypeScript
- Tailwind CSS
- Deploy en Hostinger o VPS Dokploy

## Archivos de referencia
- Barber repo: `/home/casa/Barber/app/src/`
- Brand config: `/home/casa/Barber/app/src/config/brandConfig.ts`
- Logo Weedex: `/home/casa/.openclaw/agents/forja/workspace/proyectos/weedex/logo-weedex.jpg`
- Videos (no usar): `/home/casa/.openclaw/agents/forja/workspace/proyectos/weedex/videos-editados/`

## Empezar
1. Crear repo en GitHub: `weedex-webapps` (vacío, público)
2. Clonar repo localmente
3. Crear estructura React + Vite + TypeScript
4. Copiar/adapter el sistema de brands de Barber
5. Construir el landing con carruseles de screenshots reales
6. Deployar y configurar subdomain en Hostinger

## Screenshots de las webs reales
Los screenshots están en los medios de Telegram de Antonio (buscar "weedex" en conversación).
Screenshots大致 de:
- barber.weedex.es
- beautyhair.weedex.es  
- besthair.weedex.es
- estetica.weedex.es
- restaurante.weedex.es

## IMPORTANTE
- NO uses los videos editados (no sirven)
- SÍ usa screenshots/screenshots reales de las webs
- El producto estrella es el **asistente telefónico IA** que transcribe llamadas y agenda citas
- Los demos actuales (barber, beautyhair, etc.) son lo que se muestra como prueba
