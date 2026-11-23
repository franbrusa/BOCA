# BOCA
Boca juniors aguante siempre

## Tablero Boca

App de celu (una sola página) con todo lo de Boca: el próximo partido, el calendario, el plantel, un juego para aprenderse las caras y los títulos.

- **En vivo:** https://franbrusa.github.io/BOCA/ (se puede instalar en el celu como app).
- **Copia de respaldo:** un artifact privado en claude.ai con el mismo contenido.

### Qué hay en el repo

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página entera: textos, estilos y código. |
| `sw.js` | Modo sin internet: si no hay señal, muestra la última versión guardada. |
| `manifest.webmanifest` y los `.png` | Ícono y datos para instalarla como app. |

### Cómo se mantiene

- Todas las mañanas una tarea programada busca las novedades, con fuente para cada dato, actualiza `index.html` y lo sube a `main`. Eso publica la página.
- Cada partido del calendario lleva su hora en `data-utc` (hora UTC). Con eso la página arma sola la cuenta regresiva, el botón para agendar, la tarjeta "Hoy juega Boca" y el marcador en vivo, que se pide a ESPN cada minuto mientras se juega.
- Los colores siguen el modo claro u oscuro del celu.
