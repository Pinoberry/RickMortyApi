# Rick and Morty API

Aplicación web estática que permite explorar y buscar personajes de la serie Rick and Morty utilizando la API pública de Rick and Morty.

## Características Principales

- Búsqueda de personajes por nombre
- Visualización de personajes con sus imágenes y detalles
- Paginación de resultados con indicador de página actual
- Indicador de estado de los personajes (vivo, muerto o desconocido)
- Interfaz de carga durante las peticiones
- Diseño responsivo que se adapta a diferentes tamaños de pantalla
- Paleta de colores pastel y tipografía moderna con Montserrat
- Efectos visuales sutiles con sombras y transiciones
- Enfoque en accesibilidad con estados de foco visibles

## Estructura del Proyecto

```
RickMortyApi/
├── index.html     # Estructura principal de la aplicación
├── styles.css     # Estilos CSS con diseño responsivo
└── app.js         # Lógica de la aplicación y consumo de API
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (para consumir la API)

## Instalación

1. Clona el repositorio o descarga los archivos
2. Abre el archivo `index.html` en tu navegador web

## Uso

1. Ingresa el nombre de un personaje en el campo de búsqueda
2. Presiona Enter o haz clic en el botón de búsqueda
3. Navega entre las páginas de resultados usando los botones "Anterior" y "Siguiente"
4. Visualiza la información detallada de cada personaje en las tarjetas

## Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Variables CSS)
- JavaScript (ES6+)
- Fetch API para peticiones HTTP
- Rick and Morty API (https://rickandmortyapi.com/)

## Características Técnicas

- Arquitectura basada en componentes
- Manejo asíncrono de peticiones con async/await
- Manejo de errores para una mejor experiencia de usuario
- Optimización de rendimiento con renderizado eficiente
- Código modular y mantenible
- Sin dependencias externas (Vanilla JavaScript)

## Fuente de Datos

La aplicación consume datos de la API pública de Rick and Morty:
- [The Rick and Morty API](https://rickandmortyapi.com/)


