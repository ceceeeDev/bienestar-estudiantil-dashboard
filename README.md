 # Bienestar Estudiantil - Dashboard Interactivo

Este proyecto corresponde al módulo de **Bienestar Estudiantil** del Grupo 5.  
Su objetivo es desarrollar un dashboard web interactivo que permita visualizar servicios de apoyo estudiantil y, posteriormente, registrar solicitudes de atención mediante un formulario.

El proyecto se está desarrollando con **HTML, CSS y JavaScript puro**, aplicando sintaxis moderna de **JavaScript ES6** y buenas prácticas básicas de organización de archivos.

---

## Tema asignado

**Grupo 5: Bienestar Estudiantil**

El módulo está enfocado en presentar servicios relacionados con el acompañamiento, apoyo y atención a estudiantes dentro de una institución educativa.

Los servicios iniciales definidos son:

1. Orientación psicológica
2. Apoyo académico
3. Asesoría vocacional
4. Atención médica básica
5. Actividades deportivas
6. Programas de inclusión
7. Becas y ayudas estudiantiles
8. Talleres de bienestar emocional

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6
- Git
- GitHub
- LocalStorage, para una etapa posterior del proyecto

---

## Estructura inicial del proyecto

Actualmente el proyecto cuenta con la siguiente estructura base:

```txt
bienestar-estudiantil-dashboard/
│
├── index.html
├── styles.css
├── data.js
├── app.js
└── README.md
Avances realizados hasta el momento
1. Creación del repositorio y estructura inicial

Se creó el repositorio en GitHub para permitir el trabajo colaborativo del grupo.
También se creó la estructura inicial del proyecto con los archivos principales:

index.html
styles.css
data.js
app.js
README.md

Este fue el primer avance del proyecto, dejando preparada la base para comenzar el desarrollo de forma organizada.

2. Creación de los datos iniciales en data.js

Se agregó un arreglo llamado studentWellnessServices, que contiene los servicios iniciales del módulo de Bienestar Estudiantil.

Cada servicio fue representado como un objeto con la siguiente información:

id
name
category
availability
priority
schedule
location
description
requirements

Ejemplo de estructura de un servicio:

{
  id: 1,
  name: "Orientación psicológica",
  category: "Salud mental",
  availability: "Disponible",
  priority: "Alta",
  schedule: "Lunes a viernes, 08:00 - 16:00",
  location: "Departamento de Bienestar Estudiantil",
  description: "Servicio de acompañamiento psicológico para estudiantes que presenten estrés, ansiedad, problemas personales, familiares o académicos.",
  requirements: "Presentar carnet estudiantil y solicitar una cita previa mediante el formulario de atención."
}

Con este avance se cumple una parte importante del requerimiento del proyecto: trabajar con arreglos y objetos en JavaScript.

3. Creación de la estructura base en index.html

Se desarrolló la estructura principal del dashboard en el archivo index.html.

Actualmente el HTML incluye:

Encabezado principal del proyecto.
Tarjetas de resumen.
Campo de búsqueda.
Filtros por categoría y prioridad.
Selector para ordenar servicios.
Sección para mostrar los servicios de bienestar.
Panel lateral para mostrar el detalle de cada servicio.
Formulario para registrar solicitudes de atención.
Sección para mostrar solicitudes registradas.
Conexión con los archivos data.js y app.js.

El archivo index.html quedó preparado para que JavaScript pueda manipular dinámicamente los elementos de la página.

4. Agregado de estilos base en styles.css

Se agregó el diseño visual inicial del dashboard utilizando CSS puro.

Los estilos actuales incluyen:

Diseño general del sitio.
Encabezado con fondo degradado.
Tarjetas de resumen.
Área de búsqueda y filtros.
Tarjetas para servicios.
Panel de detalle del servicio.
Formulario de solicitud.
Mensajes de validación.
Sección para solicitudes registradas.
Diseño responsive básico para pantallas medianas y pequeñas.

Esto permite que el proyecto ya tenga una presentación visual organizada y adaptable a diferentes tamaños de pantalla.

5. Renderizado dinámico de servicios en app.js

Se conectó el archivo app.js con los datos definidos en data.js.

Actualmente, JavaScript permite:

Mostrar dinámicamente los servicios en pantalla.
Cargar los servicios dentro del selector del formulario.
Actualizar el total de servicios.
Calcular cuántos servicios están disponibles.
Usar el método map() para generar las tarjetas de servicios.
Usar el método filter() para calcular los servicios disponibles.
Manipular elementos del DOM mediante document.getElementById().

Funciones principales agregadas:

renderServices()
renderServiceOptions()
updateSummary()
initApp()
6. Visualización del detalle de cada servicio

Se agregó la funcionalidad para mostrar el detalle de un servicio seleccionado.

Al hacer clic en el botón Ver detalle, el sistema muestra información completa del servicio en el panel lateral.

Esta funcionalidad utiliza:

addEventListener()
Eventos del DOM
dataset
Conversión de datos con Number()
Método find() para localizar el servicio seleccionado

Funciones principales agregadas:

renderServiceDetail()
handleServiceDetail()

Con este avance, el usuario ya puede consultar cada servicio y revisar datos como:

Categoría
Disponibilidad
Prioridad
Horario
Ubicación
Descripción
Requisitos
Requisitos del enunciado que ya se están cumpliendo

Hasta este punto, el proyecto ya cumple con varios requisitos solicitados:

Uso de HTML, CSS y JavaScript.
Uso de JavaScript ES6.
Uso de arreglos.
Uso de objetos.
Arreglo inicial con 8 registros.
Manipulación del DOM.
Uso de map().
Uso de filter().
Uso de find().
Eventos del DOM con addEventListener().
Estructura de archivos organizada.
Diseño visual inicial.
Proyecto versionado con Git y GitHub.
Funcionalidades pendientes

Aunque ya existe una base funcional, todavía faltan algunas partes importantes para completar el proyecto:

Implementar búsqueda de servicios por texto.
Implementar filtro por categoría.
Implementar filtro por prioridad.
Implementar ordenamiento por nombre o prioridad.
Validar el formulario de solicitud.
Registrar solicitudes de atención.
Guardar solicitudes en localStorage.
Mostrar solicitudes guardadas en pantalla.
Permitir limpiar o eliminar solicitudes, si se decide agregar esta opción.
Mejorar la documentación final del proyecto.
Agregar capturas de pantalla al README, si el docente lo solicita.
Estado actual del proyecto

El proyecto se encuentra en una fase inicial funcional.

Actualmente ya permite mostrar los servicios de bienestar estudiantil de forma dinámica y consultar el detalle de cada uno.
La siguiente etapa será agregar la búsqueda, filtros y ordenamiento para mejorar la interacción del usuario con el dashboard.

Registro sugerido de commits realizados

Los commits realizados hasta ahora pueden seguir una secuencia similar a esta:

Crear estructura inicial del proyecto
Agregar datos iniciales de bienestar estudiantil
Crear estructura base del dashboard
Agregar estilos base del dashboard
Mostrar servicios dinámicamente
Agregar detalle dinámico de servicios
Autoría

Proyecto académico desarrollado por el Grupo 5.

Tema: Bienestar Estudiantil.