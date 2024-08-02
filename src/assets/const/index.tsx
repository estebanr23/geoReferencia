import { LatLngExpression } from "leaflet";

export const initialPosition: LatLngExpression = [-28.4696, -65.7856]; 

export const capas = [
    {
        id: 1,
        nombre: 'Division Politica',
        items: [
            {
                id: 1,
                title: 'Division Politica', 
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capasbase/wms?',
                layers: 'DivisionPolitica'
            },
        ]
        
    },
    {
        id: 2,
        nombre: 'Territorio',
        items: [
            {
                id: 2,
                title: 'Riesgo Inundación',
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_territorio/wms?',
                layers: 'Riesgo-inundacion'
            },
            {
                id: 3,
                title: 'Area Montaña',
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_territorio/wms?',
                layers: 'area_montana_Cata'
            },
        ] 
    },
    {
        id: 3,
        nombre: 'Planificación Estrategica',
        items: [
            {
                id: 4,
                title: 'Uso Residencial',
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_planificacionestrategica/wms?',
                layers: 'Uso_residencial'
            },
            {
                id: 5,
                title: 'Vacios Urbanos',
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_planificacionestrategica/wms?',
                layers: 'VACIOS_URBANOS_CATAMARCA_CIUDAD'
            },
            {
                id: 6,
                title: 'Zona de Planificación Barrial',
                url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_planificacionestrategica/wms?',
                layers: 'ZoPlaBa'
            },
        ] 
    },
    {
        id: 4,
        nombre: 'Infraestructura y Equipamiento',
        items: [
            {
                id: 7,
                title: 'ASFALTO',
                url: '',
                layers: ''
            },
            {
                id: 8,
                title: 'Asfalto 2020 - 2022',
                url: '',
                layers: ''
            },
            {
                id: 9,
                title: 'Canchitas',
                url: '',
                layers: ''
            },
            {
                id: 10,
                title: 'Centros Vecinales',
                url: '',
                layers: ''
            },
            {
                id: 11,
                title: 'Clubes',
                url: '',
                layers: ''
            },
            {
                id: 12,
                title: 'LED',
                url: '',
                layers: ''
            },
            {
                id: 13,
                title: 'LED 2020 - 2022',
                url: '',
                layers: ''
            },
            {
                id: 14,
                title: 'SePaVe',
                url: '',
                layers: ''
            },
            {
                id: 15,
                title: 'SIN ASFALTO',
                url: '',
                layers: ''
            },
            {
                id: 16,
                title: 'Veredas',
                url: '',
                layers: ''
            },
        ]  
    },
    {
        id: 5,
        nombre: 'Ambiente y Espacio Publico',
        items: [
            {
                id: 17,
                title: 'ARBOLADO URBANO',
                url: '',
                layers: 'U'
            },
            {
                id: 18,
                title: 'Contenedores',
                url: '',
                layers: ''
            },
            {
                id: 19,
                title: 'Espacios Verdes',
                url: '',
                layers: ''
            },
            {
                id: 20,
                title: 'Plazas 2020 - 2022',
                url: '',
                layers: ''
            },
        ] 
    },
    {
        id: 6,
        nombre: 'Patrimonio y Cultura',
        items: [
            {
                id: 21,
                title: 'Patrimonio',
                url: '',
                layers: ''
            },
        ] 
    },
    {
        id: 7,
        nombre: 'Seguridad',
        items: [
            {
                id: 22,
                title: 'Seguridad',
                url: '',
                layers: ''
            },
        ] 
    },
    {
        id: 8,
        nombre: 'Movilidad y Transporte',
        items: [
            {
                id: 23,
                title: 'Bicisendas',
                url: '',
                layers: ''
            },
            {
                id: 24,
                title: 'Garitas',
                url: '',
                layers: ''
            },
            {
                id: 25,
                title: 'Línea 25 de Agosto',
                url: '',
                layers: ''
            },
            {
                id: 26,
                title: 'Línea Coop. San Fernando',
                url: '',
                layers: ''
            },
            {
                id: 27,
                title: 'Línea El Nene',
                url: '',
                layers: ''
            },
            {
                id: 28,
                title: 'Línea GM',
                url: '',
                layers: ''
            },
            {
                id: 29,
                title: 'Línea Rubi',
                url: '',
                layers: ''
            },
        ] 
    },
]