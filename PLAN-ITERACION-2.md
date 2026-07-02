# UCA Emprende · Plan de iteración 2 (post-feedback 16/06)

**Fecha de análisis:** 02/07/2026. Auditoría del preview renderizado (desktop 1440px + móvil 390px) contra los 18 puntos del feedback de Raúl (16/06), tarea ClickUp [869dqc9j9](https://app.clickup.com/t/869dqc9j9).

**Contexto:** la revisión del 25/06 no tiene feedback registrado ni en ClickUp ni por email; este plan asume vigente el feedback del 16/06. Confirmar con Paco/Raúl qué se habló el 25/06 antes de dar nada por cerrado.

## Auditoría: qué está realmente hecho

Verificado en navegador, no solo en código:

| Punto | Estado |
|---|---|
| #3 Hero sin animación | ✅ Gráfico estático (sin rAF/setInterval). ⚠️ Queda un `pulse-dot` (punto verde latiendo) en la píldora "próxima actividad" (`HeroEditorial.jsx:192`), incumple el "cero movimiento" |
| #4 Doble botón (Actividades primario + Olivillo secundario) | ✅ |
| #9 Logo con más presencia (circular) | ✅ |
| #10 Barra superior 1-2 enlaces externos | ✅ Con placeholders (faltan URLs reales del cliente) |
| #12 Buscador funcional | ✅ Filtra lista y calendario |
| #13 Filtro FECHA destacado sobre categoría | ✅ Posición y jerarquía correctas |
| #14 Calendario desplegable (rango/mes) | ⚠️ **Parcial**: el dropdown son pastillas de periodo (Mayo/Junio) + Aplicar, no un calendario con selección de rango/mes como pidió el cliente |
| #15 Vista calendario | ✅ Rejilla mensual con eventos |
| #1/#11 Imagen cuadrada en tarjetas | ⚠️ **Riesgo alto**: `ActivityThumb` soporta foto, pero ninguna actividad dummy trae `image` → se renderizan iconos sobre fondo tintado. El cliente verá de nuevo "fondo plano", que es justo lo que criticó |
| #5 Quitar "4 formas de acompañarte" | ✅ Eliminada (hueco a la espera del bloque del cliente) |
| #7 3 referentes aleatorios por visita | ✅ Verificado (cambian entre cargas) |
| #8 Home en 4 bloques | ✅ Hero+cifras / Actividades / Olivillo / Referentes |
| #17 Footer = newsletter + institucional secundaria | ✅ |
| #18 "Sobre UCA Emprende" al menú principal | ✅ |

## Gaps y bugs detectados en el análisis

1. **Tarjetas sin foto visible** (deriva de #1/#11): es el punto más visible del feedback y en la demo no se aprecia. Hay que poblar las ~9 actividades dummy con fotos locales (carteles/fotos de actividades reales de UCA Emprende o placeholders fotográficos) para que el cliente vea el diseño final, más 1-2 tarjetas sin foto para enseñar el fallback por categoría.
2. **Filtro de fecha sin calendario real** (#14): sustituir las pastillas por un mini-calendario desplegable con navegación de mes y selección de rango, manteniendo atajos rápidos (Este mes / Próximo mes / Todas).
3. **Bug UX**: el desplegable "Periodo" no se cierra al hacer click fuera ni al cambiar a la vista Calendario (queda superpuesto a la rejilla).
4. **Micro-animación residual** en hero (`pulse-dot`): quitarla; el cliente pidió cero movimiento.
5. **Sin versión móvil**: `<meta viewport width=1280>` fijo y 0 media queries en componentes → en móvil se ve el escritorio escalado con texto diminuto. El cliente probablemente lo abrirá en el móvil. Decidir: o responsive básico (header colapsado, bloques en columna, tarjetas apiladas) o avisar explícitamente de que la preview es solo desktop.
6. **Control 4/6 actividades** (#2): no existe. Ya hay infraestructura de tweaks (`TweaksPanel.jsx`); añadir un toggle 4/6 para poder enseñar ambas opciones en la próxima reunión y que Raúl decida en vivo.
7. **Inconsistencias menores de dummy**: © del footer distinto entre páginas (2026 en home, 2024 en actividades); días de semana de las fechas dummy no cuadran con el calendario real.

## Bloqueados por input del cliente (sin cambios desde el 17/06)

| Qué falta | Preparación posible mientras llega |
|---|---|
| Confirmar 4 ó 6 actividades en inicio | Toggle 4/6 en TweaksPanel (punto 6) |
| Bloque que sustituye a "4 formas" + textos | Maquetar un bloque genérico con contenido placeholder marcado "espacio reservado" |
| Foto interior del Olivillo | Mantener exterior; dejar el slot listo para swap |
| Enlaces reales de barra superior | Placeholders actuales valen |
| URL de reserva de salas | CTA "Reservar visita" apunta a `#`, parametrizar |
| ~20 referentes con indicadores fuertes | El shuffle ya escala solo al crecer el array |

## Orden de ejecución propuesto

1. **Fotos en tarjetas** (home + actividades): máximo impacto visual, ataca la crítica original.
2. **Calendario desplegable** del filtro de fecha + cierre por click fuera (arregla el bug 3 de paso).
3. **Quitar pulse-dot** del hero (5 min).
4. **Toggle 4/6** actividades en home vía tweaks.
5. **Bloque placeholder** que sustituye a "4 formas" (para que la home no dependa del cliente para verse completa).
6. **Responsive móvil básico** (si se decide incluirlo en esta iteración).
7. **Limpieza**: © uniforme, fechas dummy coherentes.
8. **Deploy a Pages + comentario en ClickUp** con changelog y recordatorio de los 6 inputs pendientes del cliente.

## Cómo trabajar

- Repo: `mowomoCom/uca-emprende-preview`, clon en `~/Work/uca-emprende-preview`.
- Sin build: abrir `index.html`/`actividades.html` servidos en local (`python3 -m http.server`) o push a `main` (Pages redepliega).
- Mapa componente → sección en `ITERACION-FEEDBACK.md`.
