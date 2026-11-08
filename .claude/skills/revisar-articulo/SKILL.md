---
name: revisar-articulo
description: Control de calidad editorial de un artículo de Guide Market (datos, voz, originalidad, formato, SEO). Úsala antes de dar por bueno cualquier artículo nuevo o editado.
---
# Revisión de un artículo

Lee el artículo completo y comprueba cada punto. Corrige directamente lo que puedas; anota lo que necesite a Bruno.

## 1. Datos y fuentes
- [ ] Cada cifra, fecha, nombre o afirmación concreta está verificada (WebSearch/WebFetch) o formulada como aproximación.
- [ ] Los enlaces externos existen y dicen lo que el artículo afirma.
- [ ] No hay estudios, citas ni experiencias inventadas.
- [ ] Nada es consejo financiero/médico/legal personalizado; los de finanzas llevan el aviso final.

## 2. Valor y originalidad
- [ ] Responde una pregunta concreta mejor o de forma más práctica que un resultado típico de Google.
- [ ] Tiene al menos un elemento accionable (pasos, checklist, regla práctica, ejemplo numérico).
- [ ] No hay párrafos de relleno: si se borra un párrafo y no se pierde nada, bórralo.

## 3. Voz
- [ ] Ninguna palabra o muletilla de la lista "Evita" de la skill `escribir-articulo`. Búscalas con Grep.
- [ ] La entrada no empieza con una definición ni con frases de manual.
- [ ] Frases y párrafos de longitud variada; listas solo donde ayudan.
- [ ] Lee el primer y el último párrafo en voz alta: ¿suena a una persona hablando?

## 4. Formato y SEO
- [ ] Frontmatter completo y válido; `category` es ai, economy, money o tech; fecha AAAA-MM-DD.
- [ ] `title` ≤ ~65 caracteres; `description` 120–160 caracteres y distinta del título.
- [ ] H2 descriptivos; no hay H1 en el cuerpo.
- [ ] 2.500–4.000 palabras (`wc -w`), sin relleno; portada, 2+ imágenes, 1+ gráfico con fuente, 1+ tabla.
- [ ] 1–2 enlaces internos a otros artículos si existen relacionados.
- [ ] `node scripts/build.mjs` compila sin errores.

## Resultado
Escribe un veredicto: **APROBADO** o **CAMBIOS** con la lista de lo que falta, y actualiza el estado en `content/PLAN.md` (`listo` si aprobado).
