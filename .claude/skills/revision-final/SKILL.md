---
name: revision-final
description: Rúbrica de calidad con nota mínima que decide si un artículo de Guide Market se publica — diseño y lectura, contenido, naturalidad, SEO técnico, imágenes y cumplimiento. Úsala en la revisión final antes de publicar.
---
# Revisión final con nota mínima

Puntúa cada bloque de **0 a 10** con los criterios de abajo. Empieza en 10 y resta por cada fallo; un fallo marcado **(bloqueante)** deja ese bloque en 4 como máximo.

## Regla para publicar

- **APROBADO** si la media de los 6 bloques es **8 o más** y **ningún bloque baja de 7**.
- Si no, **DEVOLVER**, indicando para cada problema el agente que lo arregla.

## 1. Diseño y lectura → `editor-visual`

- Caja `>> **In short:**` tras la entrada, que resume de verdad.
- Subtítulo `##` cada 250–400 palabras; títulos descriptivos que funcionan como índice.
- Párrafos de 1–4 frases; ningún bloque de texto de más de ~120 palabras sin respiro.
- Al menos un elemento visual útil más allá de las imágenes (tabla, caja de consejo, pasos numerados). Si compara opciones o datos y no hay tabla, resta 2.
- Listas solo donde las ideas son paralelas; no todo el artículo en viñetas.
- En el HTML compilado: índice presente si hay 4+ secciones, tablas legibles, nada roto.

## 2. Contenido → `redactor`

- Responde la pregunta del brief mejor o de forma más práctica que lo típico de Google, con el ángulo propio prometido. **(bloqueante si no)**
- Entre 2.500 y 4.000 palabras, con portada, 2+ imágenes, 1+ gráfico con datos de fuente oficial y 1+ tabla; ningún párrafo de relleno: si se borra y no se pierde nada, resta.
- Algo accionable: pasos, checklist, regla práctica o ejemplo con números.
- Reconoce límites o contraargumentos donde los hay.
- `trabajo/<fecha>/verificacion.md` existe y dice OK; ningún dato sin fuente. **(bloqueante si falta)**
- `trabajo/<fecha>/plagio.md` existe y dice LIMPIO o REESCRITO. **(bloqueante si falta)**

## 3. Naturalidad → `editor-visual`

- Grep de la lista "Evita" de `escribir-articulo`: cada aparición resta 1.
- La entrada empieza por una situación del lector, no por una definición ni una frase de manual.
- Hay variedad: frases y párrafos de longitudes distintas, secciones que no siguen todas la misma plantilla, sin tríadas constantes, sin cadenas de preguntas retóricas.
- Hay concreción: ejemplos específicos, alguna opinión razonada, detalles que solo pondría alguien que entiende el tema.
- El cierre dice qué hacer, no resume punto por punto.
- Lee en voz alta la entrada, un párrafo del medio y el cierre: si suena a folleto o a plantilla, resta 3.
- Ninguna experiencia personal inventada. **(bloqueante si la hay)**

## 4. SEO técnico → `tecnico`

- `title` ≤ 65 caracteres con la palabra clave; `description` 120–160 caracteres, distinta del título.
- Slug corto, en inglés, con la palabra clave.
- La palabra clave aparece de forma natural en la entrada y en al menos un `##`.
- 2–4 enlaces internos a artículos que existen en `dist/`, con texto descriptivo; al menos un artículo antiguo enlaza al nuevo.
- Enlaces externos a fuentes primarias.
- `node scripts/build.mjs` compila; el HTML del artículo tiene meta descripción, `og:image` y JSON-LD `BlogPosting`. **(bloqueante si no compila)**

## 5. Imágenes → `curador-imagenes`

- Entre 1 y 4, todas de Pexels/Unsplash con crédito y enlace a la página de la foto, y comprobadas en `trabajo/<fecha>/imagenes.md`. **(bloqueante si falta alguna comprobación)**
- Cada una ayuda a entender su sección; resta 2 por cada foto genérica de relleno.
- Texto alternativo descriptivo, sin palabras clave metidas a la fuerza.
- La primera está en el primer tercio y representa el artículo.

## 6. Cumplimiento y confianza → `redactor`

- Nada que AdSense restrinja (adultos, apuestas, drogas, armas, engaños, "hazte rico rápido", cripto especulativa). **(bloqueante)**
- Nada que suene a consejo financiero, médico o legal personalizado; los de finanzas acaban con el aviso de la casa.
- Ninguna marca `<!-- BRUNO: … -->` sin mencionar en el informe (no bloquea: Bruno la verá antes de publicar).

## Formato del informe (`trabajo/<fecha>/revision.md`)

```
# Revisión final — <slug> — vuelta N

| Bloque | Nota | Problemas |
|---|---|---|
| Diseño y lectura | 8 | … |
| Contenido | 9 | … |
| Naturalidad | 6 | "delve" en §3; las 5 secciones empiezan igual |
| SEO técnico | 9 | … |
| Imágenes | 8 | … |
| Cumplimiento | 10 | — |

Media: 8,3 · Mínimo: 6 (Naturalidad)

## Qué hay que arreglar
- [editor-visual] … (concreto: dónde y qué)
- [redactor] …

VEREDICTO: DEVOLVER
```

Sé concreto: "la sección 3 tiene 3 párrafos seguidos de 6 frases" sirve; "mejorar el estilo" no.
