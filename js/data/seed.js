// ==============================
// Base de Datos Simulada (Seed)
// Ruta: js/data/seed.js
// ==============================

export const services = [
  {
    id: 1,
    name: "Asesoría Psicológica",
    description: "Espacio confidencial para el apoyo emocional y cuidado de la salud mental de los estudiantes.",
    category: "Salud mental",
    availability: "Disponible",
    priority: "Alta",
    schedule: "Lunes a Viernes, 08:00 AM - 16:00 PM",
    location: "Edificio Central de Bienestar, Consultorio 3",
    requirements: "Presentar carnet estudiantil vigente y agendar cita previa."
  },
  {
    id: 2,
    name: "Beca de Alimentación",
    description: "Subsidio completo para el uso del comedor universitario durante el semestre académico regular.",
    category: "Apoyo económico",
    availability: "Disponible",
    priority: "Media",
    schedule: "Lunes a Viernes, 12:00 PM - 14:30 PM",
    location: "Comedor Universitario Principal",
    requirements: "Aprobación de estudio socioeconómico anual."
  },
  {
    id: 3,
    name: "Orientación Vocacional",
    description: "Guía profesional para la correcta elección o cambio de carrera, y pruebas de aptitud.",
    category: "Orientación estudiantil",
    availability: "No Disponible",
    priority: "Baja",
    schedule: "Martes y Jueves, 09:00 AM - 12:00 PM",
    location: "Oficina de Admisiones y Nivelación",
    requirements: "Estar matriculado en el primer año de la carrera."
  },
  {
    id: 4,
    name: "Atención Médica Primaria",
    description: "Servicios de medicina general, primeros auxilios y chequeos preventivos de rutina.",
    category: "Salud física",
    availability: "Disponible",
    priority: "Alta",
    schedule: "Lunes a Sábado, 07:00 AM - 18:00 PM",
    location: "Dispensario Médico Universitario",
    requirements: "Ninguno, atención libre para comunidad universitaria."
  }
];