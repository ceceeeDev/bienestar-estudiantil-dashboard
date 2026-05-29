// ==============================
// Validadores del Formulario (José)
// Ruta: js/utils/validators.js
// ==============================

export const validateRequestForm = (name, email, service, reason) => {
  const errors = {};

  // Validar nombre
  if (!name || name.trim() === "") {
    errors.name = "El nombre es obligatorio.";
  }

  // Validar email
  if (!email || email.trim() === "") {
    errors.email = "El correo es obligatorio.";
  } else if (!email.includes("@")) {
    errors.email = "Ingrese un correo válido.";
  }

  // Validar servicio
  if (!service || service === "") {
    errors.service = "Debe seleccionar un servicio.";
  }

  // Validar motivo
  if (!reason || reason.trim() === "") {
    errors.reason = "Debe explicar el motivo de su solicitud.";
  }

  return errors;
};