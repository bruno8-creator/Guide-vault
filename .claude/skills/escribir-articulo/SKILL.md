---
name: escribir-articulo
description: Redacta un artículo nuevo para Guide Market en inglés, con el estilo de la casa y el formato correcto. Úsala cada vez que haya que escribir o reescribir un artículo.
---
# Escribir un artículo para Guide Market

## Formato del archivo

Crea `content/<slug>.md` (slug en inglés, minúsculas, guiones, sin fechas):

```markdown
---
title: Título claro, concreto, sin clickbait (máx. ~65 caracteres)
description: Una o dos frases que digan qué resuelve el artículo (120–160 caracteres).
category: ai | economy | money | tech
date: AAAA-MM-DD
author: Bruno
---
Primer párrafo...
```

Markdown admitido por el generador: párrafos, `## H2`, `### H3`, listas `- ` y `1. `, `> cita`, **negrita**, *cursiva*, `código`, [enlaces](url). Nada de HTML, tablas ni imágenes.

## Estructura

1. **Entrada (2–3 párrafos):** empieza por la situación concreta del lector o un problema reconocible, no por una definición ni por "In today's world". Di pronto qué va a sacar de leerlo.
2. **Cuerpo con H2 descriptivos** (que se entiendan solos en un índice). Alterna explicación con ejemplos concretos, números sencillos o pasos.
3. **Algo accionable:** un checklist, pasos numerados o una regla práctica.
4. **Cierre** con un H2 "The takeaway" (o similar) de 1–2 párrafos. Sin "In conclusion".
5. Si es de finanzas: termina con `*This article is general information, not personal financial advice.*`

Longitud: 900–1.500 palabras. Más largo solo si aporta.

## Voz de la casa

- Inglés claro, frases de longitud variada, voz activa, segunda persona ("you").
- Opiniones con criterio y matizadas ("In my experience…", "The honest answer is…"), no tibieza.
- Ejemplos concretos y cotidianos (un recibo, una conversación con el banco, una pantalla de ajustes) en lugar de abstracciones.
- Reconoce los límites y los contraargumentos.

## Evita (huellas típicas de texto genérico)

- Palabras y muletillas: *delve, tapestry, landscape, realm, navigate (en sentido figurado), unlock, leverage, robust, seamless, game-changer, it's important to note, in today's fast-paced world, whether you're X or Y, let's dive in, buckle up*.
- Tríadas en cada frase ("fast, simple and effective"), y párrafos que siempre tienen la misma longitud.
- Listas con viñetas para todo: usa prosa cuando las ideas están conectadas.
- Preguntas retóricas en cadena, exclamaciones, emojis.
- Resumir al final lo que ya se dijo punto por punto.

## Rigor

- No inventes estadísticas, estudios, citas, nombres ni enlaces. Usa WebSearch/WebFetch para verificar cualquier dato concreto y enlaza a la fuente primaria (organismo oficial, documentación, estudio).
- Si no puedes verificar una cifra, usa una formulación aproximada o elimínala.
- No inventes experiencias personales de Bruno. Si el artículo ganaría con una, deja `<!-- BRUNO: añade aquí ... -->` (el generador lo ignorará como texto: pon la marca en su propio párrafo).
- Enlaza 1–2 artículos propios relacionados con rutas `/articles/<slug>` cuando tenga sentido.

Al terminar, pasa el artículo por la skill `revisar-articulo` y actualiza su estado en `content/PLAN.md`.
