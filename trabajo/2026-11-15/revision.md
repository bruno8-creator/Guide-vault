# Revisión final — is-it-safe-to-let-ai-shop-for-you — vuelta 2

Compilé con `draft: false` temporal y salió `Built 13 articles, 24 pages`. Luego volví a poner `draft: true` y recompilé (`Built 12 articles, 23 pages`). El informe de la vuelta 1 está guardado en `revision-1.md`.

Lo que he comprobado en el HTML:
- `<title>` de 63 caracteres, meta descripción de 150, `og:image` y JSON-LD `BlogPosting`.
- Índice de 11 entradas, 2 tablas en `.table-wrap`, 2 gráficos y 3 cajas `callout`.
- Una sola imagen: la portada. El cuerpo no tiene ninguna foto.
- La marca BRUNO no sale en el HTML.
- Los valores de los gráficos se ven bien: "8 products", "17 products" y "31%". En el resto del sitio también: "$1,350", "$5.7bn", "10 months", "1.05 USD", "186,663 reports".

Recuento de palabras visibles con un script sobre el HTML compilado, desde "It is the week before…" hasta el aviso final, separando por espacios:

| Qué cuento | Palabras |
|---|---|
| Todo | **4.000** |
| Sin tablas | 3.581 |
| Sin tablas ni gráficos | 3.481 |

Ningún párrafo pasa de 4 frases. El más largo tiene 87 palabras (CFPB).

| Bloque | Nota | Problemas |
|---|---|---|
| Diseño y lectura | 9 | "The real risks…" tiene 672 palabras bajo un solo `##`. Los cuatro `###` le dan respiro, pero pasa de 400 |
| Contenido | 8 | 0 imágenes en el cuerpo (la rúbrica pide portada y 2+). 4.000 palabras visibles: justo en el límite, sin margen |
| Naturalidad | 9 | Todavía hay tríadas en las respuestas del FAQ y en la entrada. "Fake shops, now with a faster victim" es un título forzado |
| SEO técnico | 10 | — (aviso de publicación sobre 2 enlaces entrantes, abajo) |
| Imágenes | 4 | **Bloqueante:** según imagenes.md, la portada está "NO VISTA". La comprobación de logos, marcas y personas y la de que el alt corresponde a lo que se ve están "SIN COMPROBAR". El alt describe un contenido que nadie ha visto |
| Cumplimiento | 10 | — (marca BRUNO mencionada abajo) |

Media: 8,3 · Mínimo: 4 (Imágenes)

## Detalle por bloque

### 1. Diseño y lectura: 9 (editor-visual)
- Todo lo de la vuelta 1 está arreglado:
  - Las unidades se ven bien en el HTML.
  - Ya no hay párrafos de 5–6 frases (máximo 4).
  - "Your card's dispute rights: credit vs debit" es un `##` y sale en el índice.
  - La tabla crédito/débito ya no tiene la fila sin fuente, y la nota de fuentes cubre solo lo que dicen FTC y CFPB.
  - "money leaves your account straight away" ya no aparece en el texto.
- La caja "In short" va tras la entrada y resume de verdad. Hay índice. Las tablas se leen en móvil. No hay nada roto.
- −1 Palabras bajo cada `##` (la rúbrica pide uno cada 250–400):

  | Sección | Palabras |
  |---|---|
  | The real risks | 672 |
  | Which AI tools | 511 (casi todo tabla) |
  | Your card's dispute rights | 484 |
  | How accurate | 444 |

  Solo "The real risks" se pasa claramente. Sus `###` ayudan, pero en el índice solo sale una entrada para cuatro temas distintos. Se arreglaría subiendo "Prompt injection" o "Your data" a `##`. No es urgente.
- Al revés, "How AI shopping fits into this holiday season" es un `##` de un solo párrafo (82 palabras). Se puede quedar, pero también podría ir como cierre de §Which AI tools.

### 2. Contenido: 8 (redactor; imágenes → curador-imagenes)
- Responde al brief mejor que lo que hay en Google y cumple el ángulo prometido: precisión según Which?, tabla de herramientas, quién responde, crédito vs débito, riesgos, rutina de 6 pasos y límites que poner.
- Es accionable (pasos, prompt de ejemplo, límites concretos) y reconoce sus límites: Which? es solo una muestra, Guardio es de 2025, la regla de los 100 millas encaja mal con compras online.
- verificacion.md dice OK y plagio.md dice REESCRITO.
- Universal Cart ya va en futuro ("Not yet… in the coming months"), como dice la fuente. Lo de la "two-minute routine" está resuelto.
- −2 **Imágenes:** la rúbrica pide portada y 2+ imágenes, y escribir-articulo pide al menos 2 en el cuerpo. Ahora hay 0, porque el curador quitó la de checkout. Es consecuencia directa del bloqueo del entorno (ver bloque 5), no de un fallo de redacción.
- Longitud: 4.000 palabras visibles, justo el máximo. No resto nada, pero cualquier frase o pie de foto que se añada tiene que compensarse recortando. Sin tablas ni gráficos son 3.481.
- Para el CEO, sin restar nota: el ChatGPT Wallet del 13-11 sigue sin confirmar en fuente primaria y no está en el texto. Si se confirma antes de publicar, la fila de ChatGPT ("Partly") y la caja In short se quedan anticuadas.

### 3. Naturalidad: 9 (editor-visual)
- La lista "Evita" no da ningún resultado (grep). No hay exclamaciones. No hay experiencias personales inventadas. "In my view…" es una opinión razonada, no una anécdota.
- La entrada parte de una situación del lector y ya tiene la pregunta de forma natural ("So is it safe to let AI shop for you?").
- Los tres "Say you…" se han cambiado por fórmulas distintas.
- El cierre dice qué hacer (diez minutos, quitar la débito del autofill, activar "ask me").
- Leídos en voz alta, la entrada, §Who pays y el cierre no suenan a folleto.
- −1 Todavía hay tríadas seguidas en algunos sitios:
  - FAQ "Is it safe…": "confirm before buying, set a spending cap and check each order afterwards".
  - FAQ "AI browsers": "Research in a logged-out mode, keep saved cards out…, and approve purchases yourself".
  - Entrada: "prices, retailers and a 'Buy' button".
  - Research: "suggestions, comparisons and links".
  - Consejos de OpenAI en §Prompt injection.

  Las respuestas del FAQ siguen todas la misma plantilla (frase de respuesta + lista de tres acciones).
- Menor: "Fake shops, now with a faster victim" es un título forzado. La "víctima" sería el agente, y no se entiende sin leer la sección. Algo como "Fake shops, and an agent that doesn't stop to check" sería más claro.

### 4. SEO técnico: 10 (tecnico)
- `title` de 63 caracteres con la palabra clave. `description` de 150, distinta del título. Slug correcto.
- La palabra clave está en la entrada (párrafo 3) y en el H2 de Guardrails, además del `###` del FAQ.
- 3 enlaces internos con texto descriptivo, y los 3 existen en `dist/`: datos con chatbots, phishing y prompts.
- Dos artículos antiguos enlazan al nuevo: phishing y datos con chatbots (`git diff`).
- Enlaces externos a fuentes primarias (OpenAI, Google, Walmart, Target, FTC, CFPB, Adobe, Which?). TechSpot es la única secundaria y está atribuida.
- Compila. El HTML tiene meta, `og:image` y `BlogPosting`.
- `fmt()` en `scripts/build.mjs`: el cambio es correcto. Pone el símbolo de moneda delante ("$1,350", "$5.7bn"), deja "%" pegado y pone espacio antes de las unidades que son palabras ("8 products", "1.05 USD"). Lo he comprobado en todos los gráficos de `dist/`.
- **Aviso de publicación (no resta):** con el artículo en draft, los enlaces nuevos de phishing y de datos con chatbots dan 404 en `dist/`. Hay que publicar los tres archivos juntos. Además, el `og:image` es la portada que nadie ha visto (bloque 5).

### 5. Imágenes: 4 (curador-imagenes, pero el desbloqueo depende del entorno o de Bruno)
Lo que se cumple:
- 1 imagen (la rúbrica pide entre 1 y 4), de Unsplash, con licencia gratuita (no Unsplash+), autor, crédito "rupixen / Unsplash" y enlace a la página de la foto.
- La portada está en el primer tercio y, por el título de su página, representa el momento de pagar del que habla el artículo.
- El alt no mete palabras clave a la fuerza.

**Bloqueante (deja el bloque en 4 como máximo).** La rúbrica exige que las imágenes estén "comprobadas en imagenes.md" y bloquea "si falta alguna comprobación". El propio imagenes.md dice de la portada:
- "NO VISTA";
- "Que no haya logos ni caras, y que el coverAlt corresponda a lo que se ve, son cosas SIN COMPROBAR";
- "Antes de publicar, alguien tiene que verla, o hay que quitarla".

imagenes-libres dice "si algo de esto falla o no puedes comprobarlo, descártala".

Con el criterio del título y las etiquetas de la página, en la vuelta 1 valoré esta foto como de riesgo bajo, y sigo pensándolo. Pero riesgo bajo no es comprobada, y ahora el expediente dice expresamente que no lo está. El alt ("A person holding a credit card in front of a laptop, about to pay for an online order") describe algo que nadie ha visto. Esta es además la imagen que irá a Google y a redes como `og:image`.

**Qué es del entorno y qué es editorial:**
- **Del entorno (no es culpa del curador):** el proxy bloquea images.unsplash.com e images.pexels.com desde el shell, y WebFetch devolvió PROVENANCE_REQUIRED porque nadie aprobó a tiempo la petición de permiso. Esa misma limitación explica que el cuerpo tenga 0 imágenes: el curador quitó la de checkout y no añadió otras, y eso es lo correcto según imagenes-libres. Mientras ningún agente pueda ver una foto, este bloque no puede pasar de 4 con ningún arreglo editorial.
- **Editorial:** imagenes.md está bien hecho y es honesto. Retira lo que afirmaba sin haberlo visto en la vuelta 1, documenta los descartes y explica por qué quitó la de checkout. No le resto nada al curador por esto.

**Para desbloquear** (lo decide el CEO antes de la vuelta 3, que es la última):
- Opción a): que alguien con acceso apruebe la petición de permiso de WebFetch para las URLs de imagen, para que el curador pueda ver las fotos.
- Opción b): que Bruno abra la portada y 2 candidatas para el cuerpo y confirme por escrito que no hay logos, marcas ni caras y que el alt corresponde con lo que se ve. Esa confirmación se anota en imagenes.md.

Sin una de las dos, la vuelta 3 dará el mismo resultado.

### 6. Cumplimiento y confianza: 10 (redactor)
- No hay nada de lo que restringe AdSense.
- El consejo de tarjeta ya es condicional en los cinco sitios:
  - In short;
  - paso 6;
  - Guardrails, que dice expresamente "don't open or lean on a credit card just for this";
  - FAQ;
  - cierre, que se queda en "if it is a debit card, remove it".
- Se mencionan los intereses si se arrastra saldo.
- Está el aviso de la casa: `*This article is general information, not personal financial advice.*`
- Marca `<!-- BRUNO: si alguna vez has tenido que devolver algo comprado con un asistente… -->` en §Your card's dispute rights, tras el ejemplo de $400. La menciono para Bruno y no bloquea. El generador la quita del HTML.

## Qué hay que arreglar
- [CEO / Bruno, por el entorno] Conseguir que alguien vea las fotos: aprobar el permiso de WebFetch para images.unsplash.com e images.pexels.com, o que Bruno las revise a mano. Sin esto, el bloque de imágenes no puede aprobar. Hay que resolverlo **antes** de lanzar la vuelta 3.
- [curador-imagenes] Cuando se puedan ver las fotos:
  - Confirmar la portada (sin logos, marcas ni caras) y ajustar el coverAlt a lo que se ve, o sustituirla.
  - Añadir 2 imágenes en el cuerpo que ayuden a entender una sección, por ejemplo una pantalla de confirmación de pedido en §A six-step check o una barra de direcciones en el paso 2, comprobando que no haya marca real.
  - Anotar la comprobación visual en imagenes.md.
- [redactor] Si entran pies de foto, recortar lo mismo en otro sitio para no pasar de 4.000 palabras visibles. Candidatos: fundir "How AI shopping fits into this holiday season" en el cierre de §Which AI tools, o recortar el FAQ.
- [editor-visual] Romper la plantilla de tres acciones en las respuestas del FAQ "Is it safe…" y "AI browsers". Cambiar el título "Fake shops, now with a faster victim".
- [editor-visual] (Opcional) Subir un `###` de "The real risks…" a `##` para que esa sección no tenga 672 palabras bajo un solo subtítulo.
- [tecnico] Publicar a la vez el artículo y los dos enlaces entrantes (phishing y datos con chatbots), porque hoy darían 404.
- [CEO / Bruno] Marca BRUNO en §Your card's dispute rights (anécdota, opcional). Decidir sobre el ChatGPT Wallet si se confirma en fuente primaria antes de publicar.

VEREDICTO: DEVOLVER
