import Ideology from "../models/Ideology"

const parties = [

    {
        "name":"Partido Socialista Obrero Español",
        "shortName":"PSOE",
        "slug":"psoe",
        "color":"#E4010B",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:28}],
        "ideology": {economy:30,social:60},

    },
    {
        "name":"Partido Popular",
        "shortName":"PP",
        "slug":"pp",
        "color":"#0055A4",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:21},

        ],
        "ideology": {economy:70,social:40},

    },
    {
        "name":"Vox",
        "shortName":"Vox",
        "slug":"vox",
        "color":"#7CBD2A",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:15}],
        "ideology": {economy:70,social:20},

    },    
    {
        "name":"Podemos",
        "shortName":"Podemos",
        "slug":"podemos",
        "color":"#683278",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:9}],
        "ideology": {economy:10,social:60},

    },
    {
        "name":"Izquierda Unida",
        "shortName":"IU",
        "slug":"iu",
        "color":"#683278",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:4},
        ],
        "ideology": {economy:1,social:8},

    },
    {
        "name":"Esquerra Republicana de Catalunya",
        "shortName":"Esquerra Republicana",
        "slug":"erc",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:3,social:9},

    },
    {
        "name":"Sobiranistes",
        "shortName":"Sobiranistes",
        "slug":"sobiranistes",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:3,social:8},

    },
    {
        "name":"Ciudadanos - Partido de la Ciudadanía",
        "shortName":"Cs",
        "slug":"cs",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:6}],
        "ideology": {economy:70,social:65},

    },
    {
        "name":"Partit Demòcrata Europeu Català",
        "shortName":"PDeCAT ",
        "slug":"pdecat",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:0,social:0},

    },
    {
        "name":"Junts per Catalunya",
        "shortName":"JxCat",
        "slug":"jxcat",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:8,social:8},

    },
    {
        "name":"Partido Nacionalista Vasco",
        "shortName":"PNV",
        "slug":"pnv",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:0,social:8},

    },
    {
        "name":"Euskal Herria Bildu",
        "shortName":"EH Bildu",
        "slug":"eh-bildu",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Alternativa Nacionalista Canaria",
        "shortName":"Alternativa Canaria",
        "slug":"anc",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unidad del Pueblo",
        "shortName":"Unidad del Pueblo",
        "slug":"up",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Candidatura d'Unitat Popular",
        "shortName":"CUP",
        "slug":"cup",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Capgirem",
        "shortName":"Capgirem",
        "slug":"capgirem",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Coalición Canaria",
        "shortName":"CCa",
        "slug":"cca",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Nueva Canarias",
        "shortName":"NC",
        "slug":"nc",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Esquerda Unida Galega",
        "shortName":"EU",
        "slug":"eu",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Más País",
        "shortName":"Más País",
        "slug":"mas-pais",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:2}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Equo",
        "shortName":"Equo",
        "slug":"equo",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Animalista Contra el Maltrato Animal",
        "shortName":"PACMA",
        "slug":"pacma",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:1}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista Obrero Español",
        "shortName":"PCOE",
        "slug":"pcoe",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Andalucía por Sí",
        "shortName":"AxSÍ",
        "slug":"axsi",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Escaños en Blanco",
        "shortName":"Escaños en Blanco",
        "slug":"eb",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.02}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unificación Comunista de España",
        "shortName":"UCE",
        "slug":"uce",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Los Verdes - Grupo Verde",
        "shortName":"Los Verdes",
        "slug":"lv-gv",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Castellano - Tierra Comunera",
        "shortName":"PCAS-TC",
        "slug":"pcas-tc",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Grupo Verde Europeo",
        "shortName":"Grupo Verde Europeo",
        "slug":"gve",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista de los Pueblos de España",
        "shortName":"PCPE",
        "slug":"pcpe",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.06}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Por un Mundo Más Justo",
        "shortName":"PUM+J",
        "slug":"pum-j",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.11}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista de los Trabajadores de España",
        "shortName":"PCTE",
        "slug":"pcte",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.05}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Foro de Ciudadanos",
        "shortName":"Foro",
        "slug":"fac",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unión del Pueblo Navarro",
        "shortName":"UPN",
        "slug":"upn",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:75,social:35},

    },
    {
        "name":"Bloque Nacionalista Galego",
        "shortName":"BNG",
        "slug":"bng",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Regionalista de Cantabria",
        "shortName":"PRC",
        "slug":"prc",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Teruel Existe",
        "shortName":"¡TE!",
        "slug":"te",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },

]

export = parties