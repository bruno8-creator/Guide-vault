---
name: publicar-web
description: Compila Guide Market, comprueba que todo funciona y, solo con aprobación explícita de Bruno, la publica en GitHub/Vercel. Úsala cuando haya cambios listos para salir.
---
# Publicar Guide Market

## 1. Compilar y comprobar
1. `node scripts/build.mjs` — debe terminar con "Built N articles…". Si falla, arregla el error antes de seguir.
2. Comprueba que no se publica nada a medias: ningún artículo con marcas `<!-- BRUNO:` sin completar (`grep -l "BRUNO:" content/*.md`). Si los hay, pregunta a Bruno o márcalos `draft: true`.
3. Previsualiza en local: `npx -y serve dist -l 4321` en segundo plano y abre `http://localhost:4321` (portada, una categoría y un artículo nuevo). Para el servidor al terminar.

## 2. Commit local
- `git status` para ver qué cambia.
- Commit con un mensaje claro en inglés que diga qué se añade o cambia.

## 3. Publicar (requiere permiso)
- **Pide aprobación a Bruno** indicando qué se va a publicar (lista de artículos/páginas). No hagas `git push` hasta que diga que sí en la conversación actual.
- Con su sí: `git push origin main`.

## 4. Verificar el despliegue
- Si tienes el conector de Vercel, consulta los últimos despliegues del proyecto `guide-vault-fresh` y confirma que el nuevo está en `READY`. Si está en `ERROR`, lee los eventos/logs del despliegue y explica el fallo.
- Si no, pide a Bruno que mire el panel de Vercel.
- Actualiza los estados a `publicado` en `content/PLAN.md` y haz commit de ese cambio.

## Recuperar la versión anterior de la web
La web antigua está en la rama `respaldo-web-anterior` y la etiqueta `respaldo-2026-11-08`. No la toques salvo que Bruno lo pida.
