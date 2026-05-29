// ==============================
// Módulo de Almacenamiento Local
// Ruta: js/services/storage.js
// ==============================

// Función para obtener las solicitudes
export const getRequests = () => {
  const requests = localStorage.getItem("wellnessRequests");
  return requests ? JSON.parse(requests) : [];
};

// Función para guardar las solicitudes
export const saveRequests = (requestsArray) => {
  localStorage.setItem("wellnessRequests", JSON.stringify(requestsArray));
};