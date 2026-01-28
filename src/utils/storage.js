/**
 * Syres Construcciones - Storage Utility
 * Uses localStorage to persist data.
 */

const STORAGE_KEYS = {
    PROJECTS: 'syres_projects',
    SERVICES: 'syres_services',
    PROSPECTS: 'syres_prospects', // Leads/Contact submissions
};

// Mock Data
const MOCK_PROJECTS = [
    {
        id: '1',
        title: 'Casa Residencial Los Alamos',
        category: 'Terminados', // 'En Proceso' | 'Terminados'
        location: 'Nordelta, Tigre',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-2495db98dada?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '2',
        title: 'Edificio corporativo TechHub',
        category: 'Terminados',
        location: 'Palermo, CABA',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '3',
        title: 'Complejo de Duplex "Vila"',
        category: 'Terminados',
        location: 'Pilar, Buenos Aires',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '4',
        title: 'Torre Vista Rio',
        category: 'En Proceso',
        location: 'Vicente López',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '5',
        title: 'Remodelación Oficinas Centro',
        category: 'En Proceso',
        location: 'Microcentro, CABA',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '6',
        title: 'Casa de Campo - La Estancia',
        category: 'En Proceso',
        location: 'Luján',
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    }
];

const MOCK_SERVICES = [
    {
        id: '1',
        title: 'Construcción de Casas',
        description: 'Diseño y ejecución de viviendas unifamiliares con estándares premium.',
        iconName: 'Home'
    },
    {
        id: '2',
        title: 'Construcción de Piletas',
        description: 'Piscinas de hormigón armado, bordes infinitos y solárium.',
        iconName: 'Droplets' // approximate
    },
    {
        id: '3',
        title: 'Construcción de Oficinas',
        description: 'Espacios de trabajo modernos optimizados para la productividad.',
        iconName: 'Building2'
    },
    {
        id: '4',
        title: 'PHs y Propiedad Horizontal',
        description: 'Desarrollos multifamiliares aprovechando al máximo el terreno.',
        iconName: 'LayoutGrid'
    }
];

const MOCK_PROSPECTS = [
    {
        id: '1',
        name: 'Juan Pérez',
        email: 'juan@example.com',
        phone: '11 5555-1234',
        message: 'Hola, quisiera cotizar una casa en Pilar.',
        date: new Date(Date.now() - 86400000).toISOString() // yesterday
    },
    {
        id: '2',
        name: 'María García',
        email: 'maria@example.com',
        phone: '11 4444-5678',
        message: 'Interesada en remodelación de oficinas.',
        date: new Date(Date.now() - 172800000).toISOString() // 2 days ago
    }
];

// Helper to init data
const initData = () => {
    if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(MOCK_PROJECTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SERVICES)) {
        localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(MOCK_SERVICES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PROSPECTS)) {
        localStorage.setItem(STORAGE_KEYS.PROSPECTS, JSON.stringify(MOCK_PROSPECTS));
    }
};

// Generic Helpers
const getItems = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

const saveItems = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
};

// --- API ---

// Initialize on import (optional, or call in App)
initData();

export const storage = {
    // Projects
    getProjects: () => getItems(STORAGE_KEYS.PROJECTS),
    addProject: (project) => {
        const items = getItems(STORAGE_KEYS.PROJECTS);
        const newProject = { ...project, id: Date.now().toString() };
        saveItems(STORAGE_KEYS.PROJECTS, [...items, newProject]);
        return newProject;
    },
    updateProject: (updatedProject) => {
        const items = getItems(STORAGE_KEYS.PROJECTS);
        const newItems = items.map(p => p.id === updatedProject.id ? updatedProject : p);
        saveItems(STORAGE_KEYS.PROJECTS, newItems);
    },
    deleteProject: (id) => {
        const items = getItems(STORAGE_KEYS.PROJECTS);
        saveItems(STORAGE_KEYS.PROJECTS, items.filter(p => p.id !== id));
    },

    // Services
    getServices: () => getItems(STORAGE_KEYS.SERVICES),
    updateService: (updatedService) => {
        const items = getItems(STORAGE_KEYS.SERVICES);
        const newItems = items.map(s => s.id === updatedService.id ? updatedService : s);
        saveItems(STORAGE_KEYS.SERVICES, newItems);
    },

    // Prospects
    getProspects: () => getItems(STORAGE_KEYS.PROSPECTS),
    addProspect: (prospect) => {
        const items = getItems(STORAGE_KEYS.PROSPECTS);
        const newProspect = {
            ...prospect,
            id: Date.now().toString(),
            date: new Date().toISOString()
        };
        saveItems(STORAGE_KEYS.PROSPECTS, [newProspect, ...items]); // Newest first
        return newProspect;
    },
    deleteProspect: (id) => {
        const items = getItems(STORAGE_KEYS.PROSPECTS);
        saveItems(STORAGE_KEYS.PROSPECTS, items.filter(p => p.id !== id));
    }
};
