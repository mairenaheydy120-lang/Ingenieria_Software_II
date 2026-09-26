# Ingeniería del Software II – Material interactivo

Sitio estático (HTML, CSS y JavaScript sin dependencias) para las semanas 2 y 3 del componente Ingeniería del Software II (UNAN-Managua, CUR Matagalpa).

## Contenido

| Archivo | Descripción |
|---|---|
| `index.html` | Portada del curso con acceso a cada semana |
| `semana2.html` | Encuentro 2: diagramas de colaboración, paquetes y componentes; OMT, RUP, Scrum, Kanban y XP |
| `semana3.html` | Encuentro 3: arquitectura de software, patrones de diseño, MDA, SOA, calendarización y plan integrador |
| `assets/js/app.js` | Motor de actividades (tarjetas, quiz, emparejar, clasificar, ordenar, escenarios, ahorcado, reto PERT) |
| `assets/js/semana2.js`, `assets/js/semana3.js` | Contenido de cada semana (textos, preguntas y juegos) |
| `assets/css/style.css` | Estilos con tema claro/oscuro y diseño adaptable al teléfono |
| `assets/img/` | Diagramas UML y figuras |

Cada semana incluye: **Resumen**, **Explicaciones** (con diagramas), **Tarjetas de repaso**, **Quiz** con retroalimentación, **Juegos** y **Asignaciones** con lista de control.

## Publicar en GitHub Pages

1. Cree un repositorio nuevo en GitHub (por ejemplo, `ingenieria-software-2`), público.
2. Suba **todo el contenido de esta carpeta** a la raíz del repositorio (incluido el archivo oculto `.nojekyll`):
   - Desde la web: *Add file → Upload files*, arrastre los archivos y carpetas, y confirme con *Commit changes*.
   - O desde la terminal:
     ```bash
     git init
     git add .
     git commit -m "Material interactivo semanas 2 y 3"
     git branch -M main
     git remote add origin https://github.com/USUARIO/ingenieria-software-2.git
     git push -u origin main
     ```
3. En el repositorio vaya a **Settings → Pages**.
4. En *Build and deployment*, elija **Source: Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarde.
5. Espere uno o dos minutos. El sitio quedará en `https://USUARIO.github.io/ingenieria-software-2/`.
6. Comparta ese enlace con los estudiantes por WhatsApp o Telegram.

## Probar en la computadora

Abra `index.html` con doble clic, o ejecute un servidor local:

```bash
python -m http.server 8000
# luego abra http://localhost:8000
```

## Editar el contenido

- Las preguntas del quiz están en el arreglo `quiz` de `assets/js/semanaN.js`. La opción correcta es el índice indicado en `a` (las opciones se mezclan automáticamente al mostrarlas).
- Los juegos se definen en el arreglo `juegos` con `tipo`: `match`, `clasificar`, `ordenar`, `escenario`, `ahorcado` o `pert`.
- Para agregar otra semana, copie `semana3.html` y `assets/js/semana3.js`, cambie el `id` y el contenido, y agregue la tarjeta en `index.html`.

El progreso de cada estudiante (mejor puntuación del quiz y lista de entregas) se guarda solo en su navegador; no se envían datos a ningún servidor.
