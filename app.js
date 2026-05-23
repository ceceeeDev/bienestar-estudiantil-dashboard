// ==============================
// Variables globales y selectores
// Proyecto: Bienestar Estudiantil
// ==============================

const servicesList = document.getElementById("servicesList");
const totalServices = document.getElementById("totalServices");
const availableServices = document.getElementById("availableServices");
const serviceSelect = document.getElementById("serviceSelect");

// ==============================
// Funciones auxiliares
// ==============================

const getPriorityClass = (priority) => {
  if (priority === "Alta") {
    return "badge-priority-high";
  }

  if (priority === "Media") {
    return "badge-priority-medium";
  }

  return "badge-priority-low";
};

// ==============================
// Renderizado de servicios
// ==============================

const renderServices = (services) => {
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

// ==============================
// Renderizado del selector del formulario
// ==============================

const renderServiceOptions = (services) => {
  const serviceOptions = services.map((service) => {
    return `
      <option value="${service.name}">
        ${service.name}
      </option>
    `;
  });

  serviceSelect.innerHTML = `
    <option value="">Seleccione un servicio</option>
    ${serviceOptions.join("")}
  `;
};

// ==============================
// Actualización de resumen
// ==============================

const updateSummary = (services) => {
  const total = services.length;

  const available = services.filter((service) => {
    return service.availability === "Disponible";
  }).length;

  totalServices.textContent = total;
  availableServices.textContent = available;
};

// ==============================
// Inicialización del proyecto
// ==============================

const initApp = () => {
  renderServices(studentWellnessServices);
  renderServiceOptions(studentWellnessServices);
  updateSummary(studentWellnessServices);
};

initApp();