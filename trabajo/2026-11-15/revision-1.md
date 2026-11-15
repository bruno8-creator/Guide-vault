# Revisión final — is-it-safe-to-let-ai-shop-for-you — vuelta 1

Compilado con `draft: false` temporal: `Built 13 articles, 24 pages`. Después se volvió a poner `draft: true` y se recompiló (12 artículos). El HTML tiene `<title>`, meta descripción, `og:image`, JSON-LD `BlogPosting`, índice de 10 entradas, 2 tablas en `.table-wrap`, 2 gráficos, 3 cajas `callout` y portada + 1 foto en el cuerpo. La marca BRUNO no aparece en el HTML.

| Bloque | Nota | Problemas |
|---|---|---|
| Diseño y lectura | 7 | El gráfico de Which? sale como "8products" / "17products" en el HTML. 9 párrafos de 5–6 frases. "Who pays…" tiene 936 palabras bajo un solo `##`, así que la comparación crédito/débito no sale en el índice |
| Contenido | 7 | Unas 4.390 palabras visibles (4.030 sin tablas), por encima del máximo de 4.000. Solo 1 imagen en el cuerpo además de la portada. La fila "When the money leaves" de la tabla crédito/débito no viene de las fuentes FTC/CFPB a las que se atribuye. Universal Cart aparece como si ya comprara aunque la fuente dice "in the coming months" |
| Naturalidad | 8 | Tres ejemplos empiezan con la misma fórmula, "Say you…" (§How accurate, §Who pays ×2). Bastantes tríadas en la entrada y en §Who pays. La lista "Evita" no da ningún resultado. La entrada parte de una situación real y el cierre dice qué hacer |
| SEO técnico | 8 | La palabra clave "is it safe to let AI shop for you" (o "safe" + "AI shop…") no aparece ni en la entrada ni en ningún `##`. Solo está en un `###` del FAQ |
| Imágenes | 7 | Nadie ha visto las dos fotos. La de checkout (Ze Vieira, sep. 2025) es una pantalla de interfaz, justo donde suele haber logo o marca de tienda, y su alt describe un contenido que no se ha comprobado. imagenes.md dice "solo se ven manos y tarjeta" de la portada sin haberla visto |
| Cumplimiento | 7 | El consejo de usar tarjeta de crédito es tajante en 4 sitios. Falta el aviso de la casa aunque hay una sección entera sobre disputas con tarjeta. Hay una marca BRUNO (§Who pays, tras el ejemplo de $400) |

Media: 7,3 · Mínimo: 7 (Diseño, Contenido, Imágenes, Cumplimiento)

## Detalle por bloque

### 1. Diseño y lectura — 7 (editor-visual / tecnico)
- La caja "In short" va después de la entrada y resume de verdad (5 viñetas). Hay índice. Las tablas usan `overflow-x: auto`, así que se leen en móvil.
- −1 **Defecto visible en el HTML:** `chart-val` muestra "8products" y "17products" sin espacio, porque `fmt()` en `scripts/build.mjs` pega la unidad al número. Pasa lo mismo en artículos ya publicados ("complaints", "reports", "months", "$" detrás de la cifra).
- −1 **Párrafos largos:** 9 párrafos de 5–6 frases. Por ejemplo "Say you gave an agent a $400 limit…" (6), "What changes with an agent…" (6, 108 palabras), "None of this means you are stuck…" (5, 98), "Prompt injection means…" (5, 92) y "The first is **research**…" (5, 87).
- −1 **Secciones:** "Who pays when an AI agent gets it wrong" tiene 936 palabras y "The real risks…" 776, cada una bajo un solo `##`. Los `###` dan respiro, pero "Your card's dispute rights" responde a una de las preguntas del brief y no sale en el índice.

### 2. Contenido — 7 (redactor; imagen → curador-imagenes)
- Responde a la pregunta del brief mejor que lo que se encuentra en Google y cumple el ángulo prometido: precisión con Which?, quién responde, tabla de herramientas, rutina de 6 pasos y límites. Es accionable y reconoce límites (Which? solo es una muestra, Guardio es de 2025). verificacion.md dice OK y plagio.md dice REESCRITO.
- −1 **Longitud:** unas 4.390 palabras visibles (4.030 sin contar tablas), por encima del máximo de 4.000. Hay sitios donde recortar sin perder nada: la frase del enlace a credit scores en el ejemplo de $400, que es tangencial ("If you want a refresher on how card debt…"), la sección "How AI shopping fits into this holiday season" (se puede fundir en 2 frases) y repeticiones entre el FAQ y el cuerpo (precio de Which?, devoluciones de Target/Walmart).
- −1 **Imágenes:** la rúbrica pide portada y 2+ imágenes, y escribir-articulo pide al menos 2 en el cuerpo. Hay 1 en el cuerpo, porque se borraron los huecos 1 y 2.
- −1 **Datos sin fuente o mal atribuidos:**
  - Tabla crédito vs débito, fila "When the money leaves" ("When you pay your bill" / "Straight away, from your account"): ninguna de las dos páginas de la FTC ni la de la CFPB lo dice (lo he comprobado). La nota "*Summary of the FTC and CFPB guidance linked above*" la atribuye mal. La frase en prosa "With a debit card, money leaves your account straight away" tampoco tiene fuente. Las otras tres filas sí se sostienen: FCBA y 60 días, $50 en cargos no autorizados, "credit card protections are stronger" y "some banks voluntarily offer more", y retener el pago solo con tarjeta de crédito según la CFPB.
  - Fila Google Universal Cart: "an agent can buy within … a spending limit you set" lo presenta como algo que ya funciona. Según verificacion.md, la compra por agente (AP2) se anunció "in the coming months". Hay que decir si ya está disponible o ponerlo en futuro.
- Para el CEO, sin restar nota: el ChatGPT Wallet del 13-11 sigue sin confirmar en fuente primaria y no se ha añadido, como pedía el brief. Si se confirma antes de publicar, la fila de ChatGPT y la caja In short se quedan anticuadas.
- Detalle menor: la entrada promete una "two-minute routine" y la sección dice "two or three minutes per item".

### 3. Naturalidad — 8 (editor-visual)
- La lista "Evita" no da ningún resultado. No hay exclamaciones. La entrada empieza por una situación real (la lista de Black Friday). Hay opinión razonada ("In my view… an afternoon") y detalles concretos (Surface Pro £919,08, límites de Walmart de $50/$100/$200, prompt de ejemplo). El cierre dice qué hacer. No hay experiencias personales inventadas.
- −1 Tres ejemplos empiezan con la misma fórmula: "Say you had budgeted…", "Say you asked an agent…" y "Say you gave an agent a $400 limit…".
- −1 Muchas tríadas seguidas: "the price is wrong, the store is fake or the agent orders the wrong thing", "a retailer, a payment provider or both", "never arrived, was not as described or was billed incorrectly", la enumeración de la entrada ("where… which… what… and…") y las cuatro de §Guardrails.

### 4. SEO técnico — 8 (tecnico)
- El `title` tiene 63 caracteres y la `description` 150, distinta del título. El slug es correcto. Hay 4 enlaces internos y los 4 existen en `dist/`. Dos artículos antiguos enlazan al nuevo (phishing y datos con chatbots). Los enlaces externos van a fuentes primarias: TechSpot es la única secundaria y está bien atribuida. Compila y tiene meta, `og:image` y `BlogPosting`.
- −2 La palabra clave no aparece de forma natural en la entrada (los tres primeros párrafos no dicen "safe") ni en ningún `##`. Solo está en el `### Is it safe to let an AI agent pay for me?` del FAQ. Se puede arreglar, por ejemplo, poniendo en un H2 "Is it safe to let an AI agent pay for you? Guardrails to set first" y metiendo "safe" en el párrafo 2 o 3 de la entrada. El cambio de texto lo hace el redactor.
- `git diff` de `scripts/build.mjs`: el cambio es correcto. Con portada, las fotos del cuerpo pasan a `loading="lazy"` y la portada se queda con `fetchpriority="high"`. Los artículos sin portada no cambian.
- Aviso de publicación: con el artículo en draft, los dos enlaces nuevos de phishing y de datos con chatbots apuntan a `/articles/is-it-safe-to-let-ai-shop-for-you`, que no existe en `dist/` (404). Hay que publicarlos a la vez que el artículo, nunca antes.

### 5. Imágenes — 7 (curador-imagenes)
- Portada y foto del cuerpo de Unsplash, con licencia gratuita (las dos páginas dicen "Free to use under the Unsplash License", no son Unsplash+), autor, crédito y enlace a la página. La portada va en el primer tercio y representa el artículo. Los alt son descriptivos y sin palabras clave metidas.
- **Riesgo según las páginas** (el proxy bloquea images.unsplash.com y no he podido ver ninguna):
  - Portada (rupixen, 2019, "Person using laptop computer holding card", etiquetas genéricas de pago): riesgo bajo. Es una foto de stock muy usada, sin marca en título ni etiquetas.
  - Checkout de Ze Vieira (sep. 2025, "Online checkout screen with payment details and shopping cart", sin etiquetas ni descripción): **riesgo medio**. Es una captura de interfaz, que es donde suele aparecer el logo o nombre de una tienda real (imagenes-libres: "no hay logos o marcas protagonistas… si no puedes comprobarlo, descártala"). El título es el automático de Unsplash. El alt ("listing the items in the cart and the payment details") describe un contenido que nadie ha visto.
- −2 El chequeo de logo o marca no se ha hecho de verdad en la foto de checkout.
- −1 imagenes.md afirma cosas visuales que no se han comprobado ("Según la página solo se ven manos y tarjeta, sin marcas en el texto"). Hay que dejar escrito que la comprobación visual está pendiente.

### 6. Cumplimiento y confianza — 7 (redactor)
- Nada de lo que restringe AdSense.
- −2 **El consejo de tarjeta de crédito suena tajante.** El único matiz ("If you already use a credit card and pay it off in full") está en §Guardrails. Aparece sin matiz en:
  - In short: "Pay with a credit card rather than a debit card."
  - Paso 6: "Pay with a credit card… Use a credit card for the dispute rights explained above"
  - FAQ "Is it safe to let an AI agent pay for me?": "pay with a credit card"
  - The takeaway: "if it is a debit card, **swap it for a credit card** or delete it". Esta es la más delicada: a quien no tiene tarjeta de crédito o arrastra saldo le suena a "sácate una tarjeta de crédito".
  Hay que reformular para que sea condicional ("if you have a credit card you pay off in full, it gives you stronger dispute rights") y, en el cierre, convertirlo en "remove a saved debit card from autofill" sin empujar a cambiar de producto. Falta también mencionar el coste de intereses si se arrastra saldo.
- −1 **Falta el aviso de la casa.** La categoría es `ai`, pero una sección entera habla de derechos con tarjeta, FCBA y chargebacks. El pie genérico de la web no basta. Hay que añadir al final `*This article is general information, not personal financial advice.*`
- Marca `<!-- BRUNO: si alguna vez has tenido que devolver algo comprado con un asistente… -->` en §Who pays, después del ejemplo de $400. Se menciona aquí para Bruno y no bloquea. El generador la quita del HTML.

## Qué hay que arreglar
- [redactor] Recortar por debajo de 4.000 palabras visibles: quitar la frase del enlace a credit scores en el ejemplo de $400, condensar "How AI shopping fits into this holiday season" y quitar las repeticiones del FAQ.
- [redactor] Hacer condicional el consejo de tarjeta de crédito en In short, paso 6, FAQ y The takeaway ("swap it for a credit card" → quitar la débito del autofill). Mencionar los intereses si se arrastra saldo. Añadir el aviso `*This article is general information, not personal financial advice.*` al final.
- [redactor] Universal Cart: aclarar si la compra por agente ya está disponible o es "coming months".
- [redactor] Poner la palabra clave en la entrada (párrafo 2 o 3) y en un `##`, por ejemplo el H2 de Guardrails.
- [redactor] Cambiar la fórmula "Say you…" en al menos dos de los tres ejemplos y reducir las tríadas en §Who pays y §Guardrails.
- [editor-visual] Tabla crédito vs débito: quitar la fila "When the money leaves" o añadir una fuente que la respalde (y la frase en prosa "money leaves your account straight away"). Corregir la nota "Summary of the FTC and CFPB guidance" para que solo cubra lo que dicen esas fuentes.
- [editor-visual] Partir los 9 párrafos de 5–6 frases. Subir "Your card's dispute rights" a `##` o dividir "Who pays…" para que la comparación crédito/débito salga en el índice.
- [editor-visual] Gráfico de Which?: `unit: products` sale como "8products". Mientras el técnico no lo arregle, quitar la unidad o ponerla en el título.
- [tecnico] `fmt()` en `scripts/build.mjs` pega la unidad sin espacio. Hay que añadir un espacio cuando la unidad es una palabra (no "%"). Afecta también a phishing, recession y los demás artículos con unidades de texto.
- [tecnico] Publicar los enlaces nuevos de phishing y datos con chatbots a la vez que el artículo, porque hoy darían 404.
- [curador-imagenes] Comprobar a la vista la foto de checkout de Ze Vieira (logo o marca de tienda en pantalla) y que el alt corresponde con lo que se ve. Si no se puede ver, sustituirla por una foto comprobable. Añadir una segunda imagen en el cuerpo que ayude a entender una sección (p. ej. §How accurate o §A six-step check) o justificar el hueco. Corregir imagenes.md para no dar por vistas cosas no comprobadas.
- [CEO/Bruno] Marca BRUNO en §Who pays (anécdota de devolución), opcional. Decidir sobre el ChatGPT Wallet si se confirma en fuente primaria antes de publicar.

VEREDICTO: DEVOLVER
