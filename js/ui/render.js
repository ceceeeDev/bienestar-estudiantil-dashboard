// ==============================
// Módulo de Renderizado (PABLO)
// Ruta: js/ui/render.js
// ==============================

// Selectores del DOM (Solo atrapamos los contenedores que vamos a pintar)
const servicesList = document.getElementById("servicesList");
const serviceSelect = document.getElementById("serviceSelect");
const totalServices = document.getElementById("totalServices");
const availableServices = document.getElementById("availableServices");
const serviceDetail = document.getElementById("serviceDetail");
const requestsList = document.getElementById("requestsList");
const totalRequests = document.getElementById("totalRequests");
const formMessage = document.getElementById("formMessage");

// Función auxiliar (privada a este módulo)
const getPriorityClass = (priority) => {
  if (priority === "Alta") return "badge-priority-high";
  if (priority === "Media") return "badge-priority-medium";
  return "badge-priority-low";
};

// 1. Renderizar tarjetas de servicios
export const renderServices = (services) => {
  servicesList.innerHTML = "";

  const serviceCards = services.map((service) => {
    return `
      <article class="service-card">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="service-meta">
          <span class="badge">${service.category}</span>
          <span class="badge">${service.availability}</span>
          <span class="badge ${getPriorityClass(service.priority)}">
            Prioridad ${service.priority}
          </span>
        </div>
        <button class="card-button" data-id="${service.id}">
          Ver detalle
        </button>
      </article>
    `;
  });

  servicesList.innerHTML = serviceCards.join("");
};

// 2. Renderizar opciones del select del formulario
export const renderServiceOptions = (services) => {
  const serviceOptions = services.map((service) => {
    return `<option value="${service.name}">${service.name}</option>`;
  });

  serviceSelect.innerHTML = `
    <option value="">Seleccione un servicio</option>
    ${serviceOptions.join("")}
  `;
};

// 3. Renderizar el resumen del dashboard
export const renderSummary = (services) => {
  const total = services.length;
  const available = services.filter((service) => service.availability === "Disponible").length;

  totalServices.textContent = total;
  availableServices.textContent = available;
};

// 4. Renderizar el detalle de un servicio
export const renderServiceDetail = (service) => {
  serviceDetail.innerHTML = `
    <h3>${service.name}</h3>
    <p><strong>Categoría:</strong> ${service.category}</p>
    <p><strong>Disponibilidad:</strong> ${service.availability}</p>
    <p><strong>Prioridad:</strong> ${service.priority}</p>
    <p><strong>Horario:</strong> ${service.schedule}</p>
    <p><strong>Ubicación:</strong> ${service.location}</p>
    <p><strong>Descripción:</strong> ${service.description}</p>
    <p><strong>Requisitos:</strong> ${service.requirements}</p>
  `;
};

// 5. Renderizar las solicitudes registradas
export const renderRequests = (requests) => {
  totalRequests.textContent = requests.length;

  if (requests.length === 0) {
    requestsList.innerHTML = `<p class="empty-message">No hay solicitudes registradas aún.</p>`;
    return;
  }

  const requestCards = requests.map((req, index) => {
    return `
      <article class="request-card">
        <h3>Solicitud #${index + 1} - ${req.service}</h3>
        <p><strong>ID:</strong> ${req.id || "Sin ID"}</p>
        <p><strong>Estudiante:</strong> ${req.name} (${req.email})</p>
        <p><strong>Motivo:</strong> ${req.reason}</p>
        <div class="service-meta">
          <span class="badge">${req.date}</span>
        </div>
      </article>
    `;
  });

  requestsList.innerHTML = requestCards.join("");
};

// 6. Mostrar errores del formulario (NUEVO)
export const renderFormErrors = (errors) => {
  // Primero limpiamos todos los mensajes anteriores
  document.getElementById("studentNameError").textContent = "";
  document.getElementById("studentEmailError").textContent = "";
  document.getElementById("serviceSelectError").textContent = "";
  document.getElementById("requestReasonError").textContent = "";

  // Pintamos los nuevos errores si es que existen
  if (errors.name) document.getElementById("studentNameError").textContent = errors.name;
  if (errors.email) document.getElementById("studentEmailError").textContent = errors.email;
  if (errors.service) document.getElementById("serviceSelectError").textContent = errors.service;
  if (errors.reason) document.getElementById("requestReasonError").textContent = errors.reason;
};

// 7. Mostrar mensajes de éxito o error globales (NUEVO)
export const renderFormMessage = (message, isSuccess) => {
  formMessage.textContent = message;
  formMessage.className = "form-message"; // Limpiamos clases previas
  
  if (message) {
    formMessage.classList.add(isSuccess ? "success" : "error");
  }
};