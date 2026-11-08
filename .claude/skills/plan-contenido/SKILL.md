---
name: plan-contenido
description: Planifica los próximos artículos de Guide Market y mantiene el plan editorial en content/PLAN.md. Úsala para decidir qué escribir, equilibrar categorías o buscar temas con demanda.
---
# Plan de contenido de Guide Market

## Pasos

1. **Inventario.** Lista `content/*.md` y anota, por categoría (ai, economy, money, tech), cuántos artículos hay y sus títulos. Lee `content/PLAN.md` si existe.
2. **Huecos.** Busca:
   - categorías con menos de 4 artículos (equilibrio para AdSense);
   - preguntas básicas que un lector nuevo haría y que aún no respondemos;
   - artículos que podrían enlazarse entre sí (temas "pilar" y temas satélite).
3. **Demanda.** Si tienes WebSearch, comprueba que la gente busca el tema (preguntas frecuentes, "People also ask", foros como Reddit). Prefiere preguntas concretas con intención clara ("how does X work", "is X worth it", "X vs Y") a temas genéricos.
4. **Ángulo propio.** Para cada idea, define en una frase qué aporta que no tengan los 5 primeros resultados de Google (ej.: un ejemplo práctico, un checklist, una comparación honesta, un error común que nadie explica). Si no hay ángulo propio, descarta la idea.
5. **Evita** temas que AdSense restringe o penaliza: contenido para adultos, apuestas, drogas, armas, "hazte rico rápido", criptomonedas especulativas, consejos médicos concretos, noticias de última hora que caducan en días.

## Formato de content/PLAN.md

```markdown
# Plan editorial — Guide Market
Actualizado: AAAA-MM-DD · Publicados: N · Meta AdSense: 20

## Próximos (por prioridad)
| # | Título provisional | Categoría | Pregunta que responde | Ángulo propio | Estado |
|---|---|---|---|---|---|
| 1 | ... | money | ... | ... | pendiente |

## Ideas para más adelante
- ...

## Publicados
- slug — categoría — fecha
```

Estados válidos: `pendiente`, `escribiendo`, `revisión`, `listo`, `publicado`.

Propón 5–10 ideas cada vez y mantén siempre la lista ordenada por prioridad.
