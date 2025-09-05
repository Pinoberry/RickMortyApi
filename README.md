# Rick y Morty

## Descripción
Aplicación estática que consume la API pública de Rick and Morty para listar personajes, buscar por nombre y navegar con paginación. Usa un diseño claro y pastel con tipografía `Montserrat`, tarjetas limpias y sombras suaves.

## Uso
- Abrir `index.html` en el navegador.
- Escribir un nombre en el buscador y presionar "Buscar".
- Usar "Anterior" y "Siguiente" para moverse entre páginas.

## Características
- Búsqueda por nombre de personaje.
- Paginación con indicador de página y estados de botón.
- Tarjetas con imagen, nombre, especie, género y estado (vivo, muerto, desconocido).
- Capa de carga con animación mientras se obtienen los datos.
- Estilo pastel: paleta clara, sombras suaves y layout de 3 columnas en escritorio.
- Accesibilidad: estados de `focus-visible` en entradas y botones.
- Diseño responsive para móviles y pantallas medianas.

## Estructura
- `index.html`: estructura de la interfaz y fuentes.
- `styles.css`: estilos pastel y responsividad.
- `app.js`: lógica de consumo de API y renderizado.

## Fuente de datos
- API: https://rickandmortyapi.com/

## Notas
- Proyecto estático, sin dependencias adicionales.
