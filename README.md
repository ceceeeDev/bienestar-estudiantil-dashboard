# Bienestar Estudiantil - Dashboard Interactivo

Este proyecto corresponde al módulo de **Bienestar Estudiantil** del Grupo 5.  
Su objetivo es desarrollar un dashboard web interactivo que permita visualizar servicios de apoyo estudiantil y registrar solicitudes de atención mediante un formulario.

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
```

---

## Avances realizados hasta el momento

### 1. Creación del repositorio y estructura inicial

Se creó el repositorio en GitHub para permitir el trabajo colaborativo del grupo.  
También se creó la estructura inicial del proyecto con los archivos principales:

- `index.html`
- `styles.css`
- `data.js`
- `app.js`
- `README.md`

Este fue el primer avance del proyecto, dejando preparada la base para comenzar el desarrollo de forma organizada.

---

### 2. Creación de los datos iniciales en `data.js`

Se agregó un arreglo llamado `studentWellnessServices`, que contiene los servicios iniciales del módulo de Bienestar Estudiantil.

Cada servicio fue representado como un objeto con la siguiente información:

- `id`
- `name`
- `category`
- `availability`
- `priority`
- `schedule`
- `location`
- `description`
- `requirements`

Ejemplo de estructura de un servicio:

```js
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
```

Con este avance se cumple una parte importante del requerimiento del proyecto: trabajar con **arreglos y objetos en JavaScript**.

---

### 3. Creación de la estructura base en `index.html`

Se desarrolló la estructura principal del dashboard en el archivo `index.html`.

Actualmente el HTML incluye:

- Encabezado principal del proyecto.
- Tarjetas de resumen.
- Campo de búsqueda.
- Filtros por categoría y prioridad.
- Selector para ordenar servicios.
- Sección para mostrar los servicios de bienestar.
- Panel lateral para mostrar el detalle de cada servicio.
- Formulario para registrar solicitudes de atención.
- Sección para mostrar solicitudes registradas.
- Conexión con los archivos `data.js` y `app.js`.

El archivo `index.html` quedó preparado para que JavaScript pueda manipular dinámicamente los elementos de la página.

---

### 4. Agregado de estilos base en `styles.css`

Se agregó el diseño visual inicial del dashboard utilizando CSS puro.

Los estilos actuales incluyen:

- Diseño general del sitio.
- Encabezado principal.
- Tarjetas de resumen.
- Área de búsqueda y filtros.
- Tarjetas para servicios.
- Panel de detalle del servicio.
- Formulario de solicitud.
- Mensajes de validación.
- Sección para solicitudes registradas.
- Diseño responsive para pantallas medianas y pequeñas.

Esto permite que el proyecto ya tenga una presentación visual organizada y adaptable a diferentes tamaños de pantalla.

---

### 5. Renderizado dinámico de servicios en `app.js`

Se conectó el archivo `app.js` con los datos definidos en `data.js`.

Actualmente, JavaScript permite:

- Mostrar dinámicamente los servicios en pantalla.
- Cargar los servicios dentro del selector del formulario.
- Actualizar el total de servicios.
- Calcular cuántos servicios están disponibles.
- Usar el método `map()` para generar las tarjetas de servicios.
- Usar el método `filter()` para calcular los servicios disponibles.
- Manipular elementos del DOM mediante `document.getElementById()`.

Funciones principales agregadas:

- `renderServices()`
- `renderServiceOptions()`
- `updateSummary()`
- `initApp()`

---

### 6. Visualización del detalle de cada servicio

Se agregó la funcionalidad para mostrar el detalle de un servicio seleccionado.

Al hacer clic en el botón **Ver detalle**, el sistema muestra información completa del servicio en el panel lateral.

Esta funcionalidad utiliza:

- `addEventListener()`
- Eventos del DOM
- `dataset`
- Conversión de datos con `Number()`
- Método `find()` para localizar el servicio seleccionado

Funciones principales agregadas:

- `renderServiceDetail()`
- `handleServiceDetail()`

Con este avance, el usuario ya puede consultar cada servicio y revisar datos como:

- Categoría
- Disponibilidad
- Prioridad
- Horario
- Ubicación
- Descripción
- Requisitos

---

### 7. Implementación de búsqueda de servicios

Se agregó la lógica para buscar servicios por texto desde el campo de búsqueda del dashboard.

La búsqueda permite encontrar servicios según:

- Nombre del servicio.
- Categoría.
- Descripción.

Para esta funcionalidad se utilizaron recursos de JavaScript como:

- `filter()`
- `includes()`
- `toLowerCase()`
- `trim()`
- Evento `input`

Esta mejora permite que el usuario pueda escribir una palabra clave, por ejemplo `salud`, `psicología` o `becas`, y el sistema muestre únicamente los servicios relacionados.

---

### 8. Implementación de filtros por categoría y prioridad

Se agregó la lógica para filtrar servicios mediante los selectores disponibles en la interfaz.

Actualmente se puede filtrar por:

- Categoría del servicio.
- Prioridad del servicio.

Los filtros trabajan junto con la búsqueda, lo que permite combinar criterios.  
Por ejemplo, el usuario puede buscar una palabra y al mismo tiempo seleccionar una categoría o una prioridad específica.

Para esta funcionalidad se utilizaron:

- `filter()`
- Condiciones lógicas
- Eventos `change`
- Manipulación dinámica del DOM

---

### 9. Implementación de ordenamiento de servicios

Se agregó la lógica para ordenar los servicios desde el selector de ordenamiento.

Actualmente el sistema permite ordenar por:

- Orden original.
- Nombre del servicio.
- Prioridad del servicio.

Para ordenar por nombre se utilizó:

```js
localeCompare()
```

Para ordenar por prioridad se definió un orden personalizado:

```js
const priorityOrder = {
  Alta: 1,
  Media: 2,
  Baja: 3,
};
```

También se utilizó el operador spread:

```js
const servicesCopy = [...services];
```

Esto permite ordenar una copia del arreglo filtrado sin modificar directamente el arreglo original `studentWellnessServices`.

Con este avance se incorporó el uso del método:

- `sort()`

---

### 10. Implementación de validaciones en el formulario (JOSE)

Se implementó la lógica para validar los datos ingresados en el formulario de solicitud de atención antes de permitir su registro.

Las validaciones aplicadas garantizan la integridad de los datos:
- **Nombre del estudiante:** Se valida que el campo no esté vacío.
- **Correo institucional:** Se exige un formato de correo válido mediante expresiones regulares y se verifica que contenga el dominio `.edu` propio de la institución.
- **Servicio solicitado:** Es obligatorio seleccionar una de las opciones de la consulta
- **Motivo de la solicitud:** Se exige un mínimo de 10 caracteres para tener siempre un buen contexto

Se aplicó manipulación del DOM para inyectar mensajes de alerta específicos debajo de cada `input` y un contenedor general de error, dejando el formulario listo para que se avance con la creación del objeto y guardado en `localStorage`.

---

### 11. Implementación de LocalStorage y listado de solicitudes (PABLO / ARIANNA)

Se implementó la captura de datos, la creación del objeto de solicitud y la persistencia de datos utilizando `localStorage`.

Las funcionalidades agregadas en esta fase incluyen:

- **Captura y estructuración de datos:** Se creó la función `saveRequest()` que recibe los datos validados del formulario y construye un objeto de solicitud, añadiendo automáticamente la fecha de registro actual.
- **Guardado en LocalStorage:** El nuevo objeto se inserta en un arreglo que se guarda en el navegador bajo la clave `wellnessRequests`.
- **Lectura y renderizado dinámico:** Se creó la función `renderRequests()` que recupera el arreglo del almacenamiento local y utiliza el método `map()` para inyectar dinámicamente las tarjetas de las solicitudes en el contenedor de la interfaz. Se aprovecharon las clases CSS existentes (`.request-card`) para mantener la coherencia visual del proyecto.
- **Actualización del DOM:** Se enlazó el guardado exitoso con la limpieza automática del formulario (`reset()`) y se implementó la actualización en tiempo real del contador global de solicitudes registradas basándose en la longitud del arreglo.
- **Manejo de estados vacíos:** Si el arreglo del `localStorage` está vacío, se muestra un mensaje indicando que aún no hay solicitudes.

Métodos y recursos utilizados en esta etapa:
- `localStorage.setItem()` y `localStorage.getItem()`
- `JSON.stringify()` y `JSON.parse()`
- `new Date().toLocaleDateString()`
- `push()`
- `map()`

---

## Lógica implementada en JavaScript

Hasta este momento, el archivo `app.js` contiene la lógica principal del dashboard.

Las funcionalidades implementadas son:

- Selección de elementos del DOM.
- Renderizado dinámico de servicios.
- Carga dinámica del selector de servicios del formulario.
- Actualización de tarjetas de resumen.
- Visualización del detalle de cada servicio.
- Búsqueda por texto.
- Filtro por categoría.
- Filtro por prioridad.
- Ordenamiento por nombre.
- Ordenamiento por prioridad.
- Eventos del DOM.

Métodos y recursos utilizados:

- `map()`
- `filter()`
- `find()`
- `sort()`
- `includes()`
- `toLowerCase()`
- `trim()`
- `localeCompare()`
- `addEventListener()`
- `dataset`
- Spread operator `[...]`
- Template strings

---

## Requisitos del enunciado que ya se están cumpliendo

Hasta este punto, el proyecto ya cumple con varios requisitos solicitados:

- Uso de HTML, CSS y JavaScript.
- Uso de JavaScript ES6.
- Uso de arreglos.
- Uso de objetos.
- Arreglo inicial con 8 registros.
- Manipulación del DOM.
- Uso de `map()`.
- Uso de `filter()`.
- Uso de `find()`.
- Uso de `sort()`.
- Eventos del DOM con `addEventListener()`.
- Búsqueda dinámica.
- Filtros interactivos.
- Ordenamiento de datos.
- Estructura de archivos organizada.
- Diseño visual inicial.
- Proyecto versionado con Git y GitHub.

---

## Funcionalidades pendientes

Aunque ya existe una base funcional sólida, todavía faltan algunas partes importantes para completar el proyecto al 100%.

Pendientes principales:

1. Validar el formulario de solicitud.
2. Mostrar mensajes de error debajo de cada campo.
3. Registrar solicitudes de atención.
4. Crear objetos de solicitud con los datos ingresados.
5. Guardar solicitudes en `localStorage`.
6. Recuperar solicitudes guardadas al recargar la página.
7. Mostrar solicitudes guardadas en pantalla.
8. Actualizar el contador de solicitudes registradas.
9. Incorporar el uso de `some()` y `every()` en la lógica de validaciones.
10. Agregar capturas de pantalla al README, si el docente lo solicita.
11. Revisar errores en consola.
12. Realizar pruebas finales del proyecto.

---

## Distribución sugerida del trabajo pendiente

Como el proyecto es grupal, las funcionalidades restantes pueden dividirse entre los integrantes del equipo.

### Integrante Jose: Validaciones del formulario

Debe encargarse de validar:

- Nombre del estudiante.
- Correo institucional.
- Servicio seleccionado.
- Motivo de la solicitud.

También debe mostrar errores visibles en los elementos correspondientes del formulario.

---

### Integrante Arianna: Registro de solicitudes

Debe encargarse de:

- Capturar los datos del formulario.
- Crear un objeto de solicitud.
- Agregar un identificador único.
- Agregar fecha de registro.
- Limpiar el formulario después de registrar.

---

### Integrante Pablo: LocalStorage y listado de solicitudes

Debe encargarse de:

- Guardar solicitudes en `localStorage`.
- Leer solicitudes desde `localStorage`.
- Mostrar solicitudes registradas en pantalla.
- Actualizar el contador de solicitudes registradas.

---

### Integrante Jorge: Documentación, pruebas y presentación

Debe encargarse de:

- Actualizar el README final.
- Agregar instrucciones de uso.
- Agregar capturas de pantalla, si son necesarias.
- Revisar que no existan errores en consola.
- Probar el diseño responsive.

---

## Estado actual del proyecto

El proyecto se encuentra en una fase funcional intermedia.

Actualmente permite:

- Mostrar servicios de bienestar estudiantil de forma dinámica.
- Consultar el detalle de cada servicio.
- Buscar servicios por texto.
- Filtrar servicios por categoría.
- Filtrar servicios por prioridad.
- Ordenar servicios por nombre o prioridad.

La siguiente etapa será completar el formulario de solicitudes y la persistencia de datos con `localStorage`.

---

## Registro sugerido de commits realizados

Los commits realizados hasta ahora pueden seguir una secuencia similar a esta:

```txt
Crear estructura inicial del proyecto
Agregar datos iniciales de bienestar estudiantil
Crear estructura base del dashboard
Agregar estilos base del dashboard
Mostrar servicios dinámicamente
Agregar detalle dinámico de servicios
Implementar búsqueda de servicios
Implementar filtros de servicios
Implementar ordenamiento de servicios
Actualizar documentación de avances del proyecto
Implementar validaciones del formulario
Implementar captura de datos y LocalStorage para solicitudes
Mostrar listado dinámico de solicitudes registradas
```

---

## Autoría

Proyecto académico desarrollado por el **Grupo 5**.

Tema: **Bienestar Estudiantil**.
