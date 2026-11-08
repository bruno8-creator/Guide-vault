---
name: publicar-web
description: Compila Guide Market, comprueba que todo funciona, deja una vista previa en una rama para que Bruno la revise y, solo con su "ok" explícito, la publica en main/Vercel. Úsala cuando haya cambios listos para salir.
---
# Publicar Guide Market

## 1. Compilar y comprobar
1. `node scripts/build.mjs` — debe terminar con "Built N articles…". Si falla, arregla el error antes de seguir.
2. Comprueba que no se publica nada a medias: ningún artículo con marcas `<!-- BRUNO:` sin completar (`grep -l "BRUNO:" content/*.md`). Si los hay, pregunta a Bruno o márcalos `draft: true`.
3. Previsualiza en local: `npx -y serve dist -l 4321` en segundo plano y abre `http://localhost:4321` (portada, una categoría y un artículo nuevo). Para el servidor al terminar.

## 2. Commit local
- `git status` para ver qué cambia.
- Commit con un mensaje claro en inglés que diga qué se añade o cambia.

## 3. Vista previa para Bruno (sin permiso, nunca a `main`)
- Trabaja en una rama `articulo/<fecha>-<slug>` creada desde `main` actualizado (`git fetch origin main` antes).
- Commit y `git push origin articulo/<fecha>-<slug>`. Vercel crea una vista previa de la rama.
- Consulta los despliegues del proyecto **guide-vault** (el que sirve guide-market.com), busca el de esa rama y espera a `READY`. Pasa su URL a Bruno. Si acaba en `ERROR`, lee los logs, arregla y vuelve a empujar la rama.

## 4. Publicar (requiere el "ok" de Bruno)
- **No toques `main` hasta que Bruno diga "ok"** (o un sí claro) en la conversación actual, para esa rama concreta.
- Con su ok: `git fetch origin main`, `git checkout main`, `git merge --ff-only origin/main`, `git merge --no-ff articulo/<fecha>-<slug>`, compila otra vez y `git push origin main`.
- Si el merge da conflictos, no los resuelvas a ciegas: explícale a Bruno qué choca.

## 5. Verificar el despliegue
- Con el conector de Vercel, confirma que el despliegue de producción del proyecto **guide-vault** llega a `READY` y que `https://www.guide-market.com/articles/<slug>` responde. Si está en `ERROR`, lee los eventos/logs y explica el fallo.
- Si no tienes el conector, pide a Bruno que mire el panel de Vercel.
- Marca el artículo como `publicado` en `content/PLAN.md`, commit y push a `main` (ya cubierto por el ok).
- Borra la rama remota del artículo: `git push origin --delete articulo/<fecha>-<slug>`.

## Recuperar la versión anterior de la web
La web antigua está en la rama `respaldo-web-anterior` y la etiqueta `respaldo-2026-11-08`. No la toques salvo que Bruno lo pida.
