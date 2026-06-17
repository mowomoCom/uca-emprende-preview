# UCA Emprende · Brief de iteración de diseño

**Origen:** revisión con cliente (Raúl) el 16/06/2026. **Próxima revisión:** jueves 25/06, 11:00.
**Estado:** línea de diseño APROBADA. Luz verde para diseñar el resto de páginas. Textos actuales son *dummy* (no prestarles atención: foco en estética y composición).

## Dónde está todo
- **Repo:** `mowomoCom/uca-emprende-preview` · clon local en `~/Work/uca-emprende-preview`.
- **Preview pública (GitHub Pages):**
  - Home → https://mowomocom.github.io/uca-emprende-preview/
  - Actividades → https://mowomocom.github.io/uca-emprende-preview/actividades.html
- **Stack:** React 18 vía Babel standalone en el navegador (sin build). Cada sección es un componente en `src/*.jsx`; tokens en `colors_and_type.css`. Para ver cambios: abrir `index.html` / `actividades.html` en local o hacer push (Pages redepliega).
- **Doc de feedback original:** https://drive.google.com/file/d/1UvYkSCZ1Ao8Njix3We18cuyzOqasIwpu/view
- **Tarea ClickUp:** https://app.clickup.com/t/869dqc9j9 (in progress).

## Mapa componente → sección
| Componente | Sección |
|---|---|
| `Layout.jsx` | Barra superior (IntranetBar), cabecera/logo, footer |
| `HeroEditorial.jsx` + `HeroAnimationCompact.jsx` | Hero (incluye el gráfico animado a eliminar) |
| `FlagshipAndActivities.jsx` | Próximas actividades (TimelineRow) |
| `ServicesAndOlivillo.jsx` | "4 formas de acompañarte" + bloque Olivillo |
| `StoriesAndNewsletter.jsx` | "Emprendedores como tú" + newsletter |
| `NuevaHome.jsx` | Composición/orden de bloques de la home |
| `ActividadesPageNueva.jsx` | Página de actividades (filtros, buscador, calendario) |
| `Cards.jsx`, `Primitives.jsx` | Tarjetas y primitivos (Button, Logo) |

## Plan de iteración (feedback → código)

### Cambios directos (podemos ejecutar ya)
| # | Cambio | Archivo · referencia | Dificultad |
|---|---|---|---|
| 3 | Eliminar gráfico animado del hero; poner imagen/gráfico estático | `HeroEditorial.jsx` 89-95 + quitar `HeroAnimationCompact.jsx` | Media |
| 4 | Replantear botón "Conocer el Olivillo" (mantener doble botón) | `HeroEditorial.jsx` 79-86 | Baja |
| 1 | Imagen cuadrada junto a la fecha en tarjetas de actividad (home) | `FlagshipAndActivities.jsx` `TimelineRow` 191-267 | Media |
| 9 | Logo UCA Emprende más grande (mantener circular) | `Layout.jsx` 59-61 (`height={44}`→mayor) | Baja |
| 11 | Tarjetas de actividades con foto en proporción cuadrada fija | `ActividadesPageNueva.jsx` `ActTimelineRow` 252-290 | Media |
| 13 | Priorizar filtro FECHA sobre categoría | `ActividadesPageNueva.jsx` 113-162 | Media |
| 14 | Filtro de fecha con calendario desplegable (rango/mes) | `ActividadesPageNueva.jsx` 113-162 (componente nuevo) | Alta |
| 15 | Refinar la vista calendario (ya existe `CalendarView`) | `ActividadesPageNueva.jsx` 294-334 | Baja/Media |
| 12 | Conectar el buscador por nombre al filtrado real | `ActividadesPageNueva.jsx` 75-95 (state `search`) | Media |
| 7 | "Emprendedores como tú": mostrar 3 aleatorios por visita | `StoriesAndNewsletter.jsx` `SuccessStories` 3-62 (shuffle) | Media |
| 17 | Footer = newsletter + info institucional secundaria | `Layout.jsx` Footer 100-161 | Media |
| 18 | "Sobre UCA Emprende" al menú principal (no footer) | `Layout.jsx` Header `items` 30-37 | Baja |
| 8 | Home a 4 bloques (conservar referentes como 4º) | `NuevaHome.jsx` 3-15 | Rediseño |

### Bloqueados — necesitan input del cliente antes de tocar código
| # | Qué falta | Quién |
|---|---|---|
| 2 | Confirmar si actividades en inicio son 4 ó 6 (acordado: control para alternar) | Cliente |
| 5 | Define el bloque que sustituye a "Las 4 formas de acompañarte" + sus textos | Cliente |
| 6 | **Foto del INTERIOR del Olivillo** (las 2 que tenemos en repo son la misma fachada exterior; no hay interior) | mowomo/Cliente |
| 7 | Volumen de casos de éxito (~20) con indicadores fuertes; revisar/actualizar los existentes | Cliente |
| 10 | Los 1-2 enlaces externos que van en la barra superior (vicerrectorado, app servicio de apoyo…) | Cliente |
| 16 | URL real de la página de reserva de salas del Olivillo | Cliente |

## Notas de criterio
- **Logo:** mantener circular (es el formato compartido por las unidades de la UCA); solo ganar tamaño/presencia, sin diferenciarse de los logos institucionales.
- **Filtros de actividades:** fecha como filtro destacado; categoría en secundario (no responden a una tipología exacta).
- **Footer vs. menú:** institucional secundario (memorias, personal, cuentas) → footer; "quiénes somos" → menú superior.
- **Assets disponibles:** `assets/logo-uca-emprende.png`, `assets/logo-uca.svg`, `assets/olivillo.jpg` (exterior). `uploads/` tiene 3 `draw-*.png` (bocetos) y `OLIVILLO_01-...jpg` (= misma fachada exterior).

## Orden propuesto para la próxima entrega (25/06)
1. Quick wins visibles: logo (#9), hero sin animación (#3), botones (#4), barra superior (#10 con placeholder), footer/menú (#17, #18).
2. Tarjetas con imagen: home (#1) y actividades (#11).
3. Página de actividades: filtro fecha + calendario (#13, #14, #15) y buscador (#12).
4. Referentes aleatorios (#7, con los casos que haya) y reestructura de home a 4 bloques (#8).
5. Pendientes de cliente (#2, #5, #6, #16) se dejan preparados/parametrizados a la espera de su input.
