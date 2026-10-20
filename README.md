# FLAVD Company — La Todo Terreno

Anuncio estático e interactivo creado con HTML, CSS, JavaScript vanilla e ilustraciones SVG locales. No usa backend, API, compilación ni dependencias para producción. Las nueve piezas son ilustraciones independientes, no una fotografía.

## Ejecutar localmente

Abre `index.html` en un navegador moderno. También puedes iniciar un servidor estático desde la carpeta del proyecto, por ejemplo con Python: `python -m http.server 8000`, y visitar `http://localhost:8000`. Python solo se necesita para esa opción de servidor local; el sitio publicado no lo requiere.

## Interacciones

- Pulsa **Descubrir capas** o la hamburguesa para separar los ingredientes.
- Pulsa una capa para consultar su ficha; el teclado puede enfocarla y activarla con Enter o Espacio.
- Cierra la ficha con ×. Usa **Volver a ensamblar** o **Reiniciar** para regresar al inicio.
- Las fichas se mantienen en `js/data.js`; estilos en `css/styles.css`.

## Publicar en GitHub Pages

1. Crea un repositorio de GitHub y agrega estos archivos en la raíz de la rama que quieras publicar.
2. En el repositorio abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama (por ejemplo `main`) y la carpeta **/(root)**; pulsa **Save**.
5. Espera a que termine la publicación y abre la URL que GitHub Pages muestra. Todas las hojas de estilo, scripts y recursos usan rutas relativas, por lo que funcionan también bajo `USUARIO.github.io/REPOSITORIO/`.

No se publica ni se envía ningún cambio remoto desde este proyecto.

## Personalización gráfica

Las capas son SVG inline en `index.html`, dibujadas para este anuncio. Para cambiar su aspecto, edita el SVG del botón con el `data-ingredient` correspondiente; conserva la estructura de botones y sus identificadores. `assets/images/README.md` documenta cómo migrar las ilustraciones a archivos SVG locales.
