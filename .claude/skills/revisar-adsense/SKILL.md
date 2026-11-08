---
name: revisar-adsense
description: Audita Guide Market completa contra los requisitos habituales de Google AdSense y da una lista priorizada de lo que falta. Úsala antes de solicitar AdSense o tras un rechazo.
---
# Auditoría AdSense

Revisa cada bloque, marca ✅ / ⚠️ / ❌ y termina con una lista priorizada de acciones.

## Contenido
- Número de artículos publicados (sin `draft: true`). Objetivo orientativo: 15–25 artículos sustanciales (900+ palabras) antes de solicitar.
- Equilibrio: cada categoría con al menos 3–4 artículos; si una está vacía, recomienda ocultarla o llenarla.
- Cada artículo pasa la skill `revisar-articulo` (revisa al menos una muestra de 3).
- Sin contenido copiado, de relleno, duplicado o casi idéntico entre artículos.
- Sin temas restringidos (adultos, apuestas, drogas, armas, contenido engañoso o "hazte rico rápido").

## Páginas obligatorias / de confianza
- `pages/about.md`: quién está detrás y por qué; coherente con la realidad.
- `pages/contact.md`: un email de contacto **que funcione** (pregunta a Bruno si existe).
- `pages/privacy.md`: menciona Google AdSense, cookies de publicidad, enlace a Google Ads Settings y consentimiento en EEE/Reino Unido.
- `pages/terms.md` y `pages/editorial-policy.md` presentes y enlazados en el pie.

## Técnico (compila con `node scripts/build.mjs` y revisa `dist/`)
- `public/ads.txt` contiene `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` con el ID correcto, y el mismo `ca-pub-` aparece en `scripts/build.mjs` (`adsenseClient`).
- `dist/sitemap.xml` incluye todas las páginas y `public/robots.txt` apunta a él.
- No hay enlaces rotos internos (busca `href="/` en `dist/` y comprueba que existe cada archivo).
- Navegación clara: menú con categorías y pie con páginas legales.
- La web se ve bien en móvil (si hay navegador disponible, compruébalo a 375 px).

## Fuera del código (recuérdaselo a Bruno, no lo puedes comprobar tú)
- El dominio verificado en Google Search Console y el sitemap enviado.
- Consentimiento de cookies: en AdSense > Privacidad y mensajes, activar el mensaje de consentimiento (CMP certificado de Google) para EEE/Reino Unido.
- La web lleva tiempo online con contenido estable; evitar cambios masivos justo durante la revisión.

## Informe
Resumen en español: puntuación general (lista / casi / no lista), los 3 bloqueos principales y las acciones en orden.
