

// 1. Obtener servicio por ID
export const getServiceById = (services, id) => {
  return services.find(service => service.id == id);
};

// 2. Filtrar servicios (Buscador, Categoría, Prioridad)
export const filterServices = (services, searchTerm, category, priority) => {
  return services.filter(service => {
    // Filtro por texto
    const text = searchTerm.toLowerCase().trim();
    const matchesSearch = service.name.toLowerCase().includes(text) || 
                          service.description.toLowerCase().includes(text);
    
    // Filtro por categoría
    const matchesCategory = !category || category === "Todas las categorías" ? true : service.category === category;
    
    // Filtro por prioridad
    const matchesPriority = !priority || priority === "Todas las prioridades" ? true : service.priority === priority;

    return matchesSearch && matchesCategory && matchesPriority;
  });
};

// 3. Ordenar servicios
export const sortServices = (services, sortBy) => {
  const sorted = [...services]; // Hacemos una copia para no dañar el original
  
  if (sortBy === "Nombre del servicio") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Prioridad") {
    const priorityOrder = { "Alta": 3, "Media": 2, "Baja": 1 };
    sorted.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  }
  
  return sorted;
};