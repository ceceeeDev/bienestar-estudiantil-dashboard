// ==============================
// Variables globales y selectores
// Proyecto: Bienestar Estudiantil
// ==============================

const servicesList = document.getElementById("servicesList");
const totalServices = document.getElementById("totalServices");
const availableServices = document.getElementById("availableServices");
const serviceSelect = document.getElementById("serviceSelect");
const serviceDetail = document.getElementById("serviceDetail");
const searchInput = document.getElementById("searchInput");

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
// Detalle del servicio seleccionado
// ==============================

const renderServiceDetail = (service) => {
  serviceDetail.innerHTML = `
    <h3>${service.name}</h3>

    <p>
      <strong>Categoría:</strong> ${service.category}
    </p>

    <p>
      <strong>Disponibilidad:</strong> ${service.availability}
    </p>

    <p>
      <strong>Prioridad:</strong> ${service.priority}
    </p>

    <p>
      <strong>Horario:</strong> ${service.schedule}
    </p>

    <p>
      <strong>Ubicación:</strong> ${service.location}
    </p>

    <p>
      <strong>Descripción:</strong> ${service.description}
    </p>

    <p>
      <strong>Requisitos:</strong> ${service.requirements}
    </p>
  `;
};

const handleServiceDetail = (event) => {
  if (!event.target.classList.contains("card-button")) {
    return;
  }

  const serviceId = Number(event.target.dataset.id);

  const selectedService = studentWellnessServices.find((service) => {
    return service.id === serviceId;
  });

  if (!selectedService) {
    return;
  }

  renderServiceDetail(selectedService);
};

// ==============================
// Búsqueda de servicios
// ==============================

const searchServices = (searchText) => {
  const normalizedSearchText = searchText.toLowerCase().trim();

  const filteredServices = studentWellnessServices.filter((service) => {
    const serviceName = service.name.toLowerCase();
    const serviceCategory = service.category.toLowerCase();
    const serviceDescription = service.description.toLowerCase();

    return (
      serviceName.includes(normalizedSearchText) ||
      serviceCategory.includes(normalizedSearchText) ||
      serviceDescription.includes(normalizedSearchText)
    );
  });

  renderServices(filteredServices);
  updateSummary(filteredServices);
};

const handleSearchServices = (event) => {
  const searchText = event.target.value;

  searchServices(searchText);
};

// ==============================
// Eventos del DOM
// ==============================

servicesList.addEventListener("click", handleServiceDetail);
searchInput.addEventListener("input", handleSearchServices);

// ==============================
// Inicialización del proyecto
// ==============================

const initApp = () => {
  renderServices(studentWellnessServices);
  renderServiceOptions(studentWellnessServices);
  updateSummary(studentWellnessServices);
};

initApp();