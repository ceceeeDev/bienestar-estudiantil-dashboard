// =========================
// IMPORTACIONES
// =========================

// Datos
import { services } from "./data/seed.js";

// Servicios
import {
  getServiceById,
  filterServices,
  sortServices
} from "./services/module-service.js";

// Local Storage
import {
  getRequests,
  saveRequests
} from "./services/storage.js";

// Modelo de solicitud
import { createRequest } from "./models/request.js";

// Validadores (José)
import { validateRequestForm } from "./utils/validators.js";

// Renderizado (PABLO - Corregido para que coincida con ui/render.js)
import {
  renderServices,
  renderServiceOptions,
  renderSummary,
  renderRequests,
  renderServiceDetail,
  renderFormErrors,
  renderFormMessage
} from "./ui/render.js";

// =========================
// SELECTORES DEL DOM
// =========================

const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const priorityFilter = document.querySelector("#priorityFilter");
const sortSelect = document.querySelector("#sortSelect");
const servicesContainer = document.querySelector("#servicesContainer");
const requestForm = document.querySelector("#requestForm");
const serviceSelect = document.querySelector("#serviceSelect");
const dashboardContainer = document.querySelector("#dashboardContainer");
const requestsContainer = document.querySelector("#requestsContainer");

// =========================
// ESTADO INICIAL
// =========================

let currentServices = [...services];
let requests = getRequests();

// =========================
// INICIALIZAR APP
// =========================

function initializeApp() {
  // Llamamos a las funciones exactas que exportaste desde render.js
  renderServices(currentServices);
  renderServiceOptions(services);
  renderSummary(services); // Solo pasamos la lista "services"
  renderRequests(requests);
}

// ¡Llamamos a la función para que arranque todo mágicamente!
initializeApp();

// Exportar función
export { initializeApp };