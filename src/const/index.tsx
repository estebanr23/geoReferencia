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
                layers: 'DivisionPolitica'
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
                layers: 'Riesgo-inundacion'
            },
            {
                id: 3,
                title: 'Area Montaña',
                layers: 'area_montana_Cata'
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
                layers: 'Uso_residencial'
            },
            {
                id: 5,
                title: 'Vacios Urbanos',
                layers: 'VACIOS_URBANOS_CATAMARCA_CIUDAD'
            },
            {
                id: 6,
                title: 'Zona de Planificación Barrial',
                layers: 'ZoPlaBa'
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
                layers: 'ASFALTO'
            },
            {
                id: 8,
                title: 'Asfalto 2020 - 2022',
                layers: 'Asfalto_2020_2022'
            },
            {
                id: 9,
                title: 'Canchitas',
                layers: 'CANCHITAS_1'
            },
            {
                id: 10,
                title: 'Centros Vecinales',
                layers: 'CENTROS_VECINALES'
            },
            {
                id: 11,
                title: 'Clubes',
                layers: 'Deportes'
            },
            {
                id: 12,
                title: 'LED',
                layers: 'LED'
            },
            {
                id: 13,
                title: 'LED 2020 - 2022',
                layers: 'LED_2020_2022'
            },
            {
                id: 14,
                title: 'SePaVe',
                layers: 'SePaVe'
            },
            {
                id: 15,
                title: 'SIN ASFALTO',
                layers: 'SIN-ASFALTO'
            },
            {
                id: 16,
                title: 'Veredas',
                layers: 'Veredas'
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
                layers: 'ARBOLADO-URBANO'
            },
            {
                id: 18,
                title: 'Contenedores',
                layers: 'Contenedores'
            },
            {
                id: 19,
                title: 'Espacios Verdes',
                layers: 'Espacios-Verdes'
            },
            {
                id: 20,
                title: 'Plazas 2020 - 2022',
                layers: 'Plazas-2020-2022'
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
                layers: 'patrimonio'
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
                layers: 'SEGURIDAD'
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
                layers: 'BICISENDAS_METAS'
            },
            {
                id: 24,
                title: 'Garitas',
                layers: 'GARITAS'
            },
            {
                id: 25,
                title: 'Línea 25 de Agosto',
                layers: 'linea-25-agosto'
            },
            {
                id: 26,
                title: 'Línea Coop. San Fernando',
                layers: 'coop-san-fernando'
            },
            {
                id: 27,
                title: 'Línea El Nene',
                layers: 'line-elnene'
            },
            {
                id: 28,
                title: 'Línea GM',
                layers: 'linea-gm'
            },
            {
                id: 29,
                title: 'Línea Rubi',
                layers: 'TRANSPORTE-PUBLICO_RECORRIDO'
            },
        ] 
    },
]