// ==============================
// Modelo de Solicitud
// Ruta: js/models/request.js
// ==============================

export const createRequest = (studentName, studentEmail, serviceName, reasonText) => {
  return {
    id: Date.now().toString(), // Generamos un ID único con la fecha
    name: studentName,
    email: studentEmail,
    service: serviceName,
    reason: reasonText,
    date: new Date().toLocaleDateString()
  };
};