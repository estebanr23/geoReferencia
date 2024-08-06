import { LatLngExpression } from "leaflet";

export const initialPosition: LatLngExpression = [-28.4696, -65.7856]; 

export const capas = [
    {
        id: 1,
        nombre: 'Division Politica',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capasbase/wms?',
        items: [
            {
                id: 1,
                title: 'Division Politica', 
                layers: 'DivisionPolitica',
                status: false
            },
        ]
        
    },
    {
        id: 2,
        nombre: 'Territorio',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_territorio/wms?',
        items: [
            {
                id: 2,
                title: 'Riesgo Inundación',
                layers: 'Riesgo-inundacion',
                status: false
            },
            {
                id: 3,
                title: 'Area Montaña',
                layers: 'area_montana_Cata',
                status: false
            },
        ] 
    },
    {
        id: 3,
        nombre: 'Planificación Estrategica',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_planificacionestrategica/wms?',
        items: [
            {
                id: 4,
                title: 'Uso Residencial',
                layers: 'Uso_residencial',
                status: false
            },
            {
                id: 5,
                title: 'Vacios Urbanos',
                layers: 'VACIOS_URBANOS_CATAMARCA_CIUDAD',
                status: false
            },
            {
                id: 6,
                title: 'Zona de Planificación Barrial',
                layers: 'ZoPlaBa',
                status: false
            },
        ] 
    },
    {
        id: 4,
        nombre: 'Infraestructura y Equipamiento',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_infraestructurayequipamiento/wms?',
        items: [
            {
                id: 7,
                title: 'ASFALTO',
                layers: 'ASFALTO',
                status: false
            },
            {
                id: 8,
                title: 'Asfalto 2020 - 2022',
                layers: 'Asfalto_2020_2022',
                status: false
            },
            {
                id: 9,
                title: 'Canchitas',
                layers: 'CANCHITAS_1',
                status: false
            },
            {
                id: 10,
                title: 'Centros Vecinales',
                layers: 'CENTROS_VECINALES',
                status: false
            },
            {
                id: 11,
                title: 'Clubes',
                layers: 'Deportes',
                status: false
            },
            {
                id: 12,
                title: 'LED',
                layers: 'LED',
                status: false
            },
            {
                id: 13,
                title: 'LED 2020 - 2022',
                layers: 'LED_2020_2022',
                status: false
            },
            {
                id: 14,
                title: 'SePaVe',
                layers: 'SePaVe',
                status: false
            },
            {
                id: 15,
                title: 'SIN ASFALTO',
                layers: 'SIN-ASFALTO',
                status: false
            },
            {
                id: 16,
                title: 'Veredas',
                layers: 'Veredas',
                status: false
            },
        ]  
    },
    {
        id: 5,
        nombre: 'Ambiente y Espacio Publico',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_ambienteyespaciopublico/wms?',
        items: [
            {
                id: 17,
                title: 'ARBOLADO URBANO',
                layers: 'ARBOLADO-URBANO',
                status: false
            },
            {
                id: 18,
                title: 'Contenedores',
                layers: 'Contenedores',
                status: false
            },
            {
                id: 19,
                title: 'Espacios Verdes',
                layers: 'Espacios-Verdes',
                status: false
            },
            {
                id: 20,
                title: 'Plazas 2020 - 2022',
                layers: 'Plazas-2020-2022',
                status: false
            },
        ] 
    },
    {
        id: 6,
        nombre: 'Patrimonio y Cultura',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_patrimonioycultura/wms?',
        items: [
            {
                id: 21,
                title: 'Patrimonio',
                layers: 'patrimonio',
                status: false
            },
        ] 
    },
    {
        id: 7,
        nombre: 'Seguridad',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_seguridad/wms?',
        items: [
            {
                id: 22,
                title: 'Seguridad',
                layers: 'SEGURIDAD',
                status: false
            },
        ] 
    },
    {
        id: 8,
        nombre: 'Movilidad y Transporte',
        url: 'https://nodoide.catamarca.gob.ar/geoserver/capital_movilidadytransporte/wms?',
        items: [
            {
                id: 23,
                title: 'Bicisendas',
                layers: 'BICISENDAS_METAS',
                status: false
            },
            {
                id: 24,
                title: 'Garitas',
                layers: 'GARITAS',
                status: false
            },
            {
                id: 25,
                title: 'Línea 25 de Agosto',
                layers: 'linea-25-agosto',
                status: false
            },
            {
                id: 26,
                title: 'Línea Coop. San Fernando',
                layers: 'coop-san-fernando',
                status: false
            },
            {
                id: 27,
                title: 'Línea El Nene',
                layers: 'line-elnene',
                status: false
            },
            {
                id: 28,
                title: 'Línea GM',
                layers: 'linea-gm',
                status: false
            },
            {
                id: 29,
                title: 'Línea Rubi',
                layers: 'TRANSPORTE-PUBLICO_RECORRIDO',
                status: false
            },
        ] 
    },
]