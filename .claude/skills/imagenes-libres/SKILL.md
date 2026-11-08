---
name: imagenes-libres
description: Cómo encontrar, comprobar e insertar en Guide Market imágenes de uso libre de Pexels o Unsplash, con crédito y texto alternativo. Úsala siempre que un artículo necesite una imagen.
---
# Imágenes libres para Guide Market

Solo usamos fotos de **Pexels** o **Unsplash**. Sus licencias permiten usarlas gratis en una web con publicidad, sin pedir permiso. Aun así damos crédito siempre: es lo correcto y lo agradecen. El generador rechaza cualquier imagen de otro sitio.

## 1. Buscar

- WebSearch con `site:pexels.com/photo <qué debe mostrar>` o `site:unsplash.com/photos <qué debe mostrar>`, en inglés y concreto ("person checking bank statement on laptop", no "finance").
- Busca una foto que **explique** algo de la sección. Si solo decora, sigue buscando o no pongas imagen.

## 2. Comprobar (en la página de la foto, con WebFetch)

- [ ] La página es `pexels.com/photo/…` o `unsplash.com/photos/…` (no un banco de pago enlazado desde ahí).
- [ ] En Unsplash, **no** es Unsplash+ (de pago) ni un anuncio de iStock/Getty. Si la página habla de "Unsplash+", "Premium" o "iStock", descártala.
- [ ] Sabes el nombre del autor.
- [ ] No hay logos o marcas protagonistas, ni personas reconocibles en una situación delicada (deudas, salud, conflicto) que pueda sugerir algo sobre ellas.
- [ ] No la estás usando para insinuar que una persona o marca respalda algo.

Si algo de esto falla o no puedes comprobarlo, **descártala**.

## 3. Sacar la URL de la imagen

Usa la URL de la imagen que da la propia página (la de `og:image`): empieza por `https://images.pexels.com/photos/…` o `https://images.unsplash.com/photo-…`. No hace falta ajustar el tamaño: el generador pide al CDN una versión comprimida de 640 y 1.200 px.

No descargues imágenes al repo: se sirven desde el CDN, que es más rápido.

## 4. Insertar

En su propio párrafo, con línea en blanco antes y después:

```markdown
![Texto alternativo que describe lo que se ve y por qué importa aquí](https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg)
*Photo: Nombre Apellido / [Pexels](https://www.pexels.com/photo/slug-1234567/)*
```

- **Texto alternativo**: en inglés, 8–20 palabras, describe la escena ("A phone showing a bank app's spending chart next to a stack of receipts"). Nada de "image of" ni palabras clave metidas a la fuerza.
- **Pie**: puede llevar delante una frase corta de contexto; siempre termina con el crédito y el enlace a la página de la foto.
- La primera imagen del artículo se usa también en Google y redes: que sea la más representativa y vaya en el primer tercio.
- Entre 1 y 4 imágenes por artículo, repartidas; nunca dos seguidas.
