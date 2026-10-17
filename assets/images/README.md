# Recursos visuales

La hamburguesa actual está dibujada con ocho SVG inline independientes en `index.html`, sin fotografías ni descargas. Para personalizarla, reemplaza el contenido SVG dentro del botón de la capa correspondiente (cada botón tiene `data-ingredient` y una clase BEM). Conserva un `viewBox` horizontal cercano a 420 px, el fondo transparente y el botón accesible; así cada ingrediente sigue seleccionándose de forma independiente.

Si prefieres archivos SVG separados, guárdalos en esta carpeta y enlázalos con rutas relativas como `assets/images/capa.svg` (sin `/` inicial).
