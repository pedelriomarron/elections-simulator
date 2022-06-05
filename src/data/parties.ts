
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
            {city:"asturias",popularity:11.5},
            {city:"navarra",popularity:0},
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
        "popularity":[
            {city:"global",popularity:9},
            {city:"barcelona",popularity:4.6},
            {city:"tarragona",popularity:3.6},
            {city:"gerona",popularity:2.9},
            {city:"lerida",popularity:2.4},
            {city:"la-coruna",popularity:5.1},
            {city:"lugo",popularity:3.7},
            {city:"pontevedra",popularity:6.3},
            {city:"orense",popularity:3.2},
    ],
        "ideology": {economy:10,social:60},

    },
    {
        "name":"Izquierda Unida",
        "shortName":"IU",
        "slug":"iu",
        "color":"#DF0022",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:4},
            {city:"barcelona",popularity:0},
            {city:"tarragona",popularity:0},
            {city:"gerona",popularity:0},
            {city:"lerida",popularity:0},
            {city:"la-coruna",popularity:0},
            {city:"lugo",popularity:0},
            {city:"pontevedra",popularity:0},
            {city:"orense",popularity:0},
        ],
        "ideology": {economy:1,social:8},

    },
    {
        "name":"Esquerra Republicana de Catalunya",
        "shortName":"Esquerra Republicana",
        "slug":"erc",
        "color":"#FFB232",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:20},
            {city:"tarragona",popularity:25},
            {city:"gerona",popularity:25},
            {city:"lerida",popularity:30},
        ],
        "ideology": {economy:3,social:9},

    },
    {
        "name":"Sobiranistes",
        "shortName":"Sobiranistes",
        "slug":"sobiranistes",
        "color":"#FF0151",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:1},
            {city:"tarragona",popularity:1},
            {city:"gerona",popularity:1},
            {city:"lerida",popularity:1},
        ],
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
        "color":"#005CA9",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:6},
            {city:"tarragona",popularity:6.5},
            {city:"gerona",popularity:12.5},
            {city:"lerida",popularity:11.2},
        ],        
        "ideology": {economy:80,social:50},

    },
    {
        "name":"Junts per Catalunya",
        "shortName":"JxCat",
        "slug":"jxcat",
        "color":"#20C0B2",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:6},
            {city:"tarragona",popularity:6.5},
            {city:"gerona",popularity:12.5},
            {city:"lerida",popularity:11.2},
        ],
        "ideology": {economy:80,social:50},

    },
    {
        "name":"Partido Nacionalista Vasco",
        "shortName":"PNV",
        "slug":"pnv",
        "color":"#008000",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"alava",popularity:23.7},
            {city:"guipuzcoa",popularity:30.6},
            {city:"vizcaya",popularity:35.4},
        ],
        "ideology": {economy:0,social:8},

    },
    {
        "name":"Euskal Herria Bildu",
        "shortName":"EH Bildu",
        "slug":"eh-bildu",
        "color":"#96C219",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"alava",popularity:16},
            {city:"guipuzcoa",popularity:26},
            {city:"vizcaya",popularity:15},
            {city:"navarra",popularity:17},

        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Alternativa Nacionalista Canaria",
        "shortName":"Alternativa Canaria",
        "slug":"anc",
        "color":"#C4261D",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"las-palmas",popularity:0.1},
            {city:"santa-cruz-de-tenerife",popularity:0.1},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unidad del Pueblo",
        "shortName":"Unidad del Pueblo",
        "slug":"up",
        "color":"#D10400",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"las-palmas",popularity:0.1},
            {city:"santa-cruz-de-tenerife",popularity:0.1},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Candidatura d'Unitat Popular",
        "shortName":"CUP",
        "slug":"cup",
        "color":"#FFF200",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:5},
            {city:"tarragona",popularity:5},
            {city:"gerona",popularity:8},
            {city:"lerida",popularity:6},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Capgirem",
        "shortName":"Capgirem",
        "slug":"capgirem",
        "color":"#F7D600",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:1},
            {city:"tarragona",popularity:1},
            {city:"gerona",popularity:1},
            {city:"lerida",popularity:1},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Catalunya en Comú",
        "shortName":"CatComú",
        "slug":"catcomu",
        "color":"#E84F36",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"barcelona",popularity:10.9},
            {city:"tarragona",popularity:8.4},
            {city:"gerona",popularity:6.6},
            {city:"lerida",popularity:5.6},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Coalición Canaria",
        "shortName":"CCa",
        "slug":"cca",
        "color":"#FFD700",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"las-palmas",popularity:5},
            {city:"santa-cruz-de-tenerife",popularity:8.5},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Nueva Canarias",
        "shortName":"NC",
        "slug":"nc",
        "color":"#81C03B",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"las-palmas",popularity:5},
            {city:"santa-cruz-de-tenerife",popularity:8.5},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Esquerda Unida Galega",
        "shortName":"EU",
        "slug":"eu",
        "color":"#E0001C",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"la-coruna",popularity:7.62},
            {city:"lugo",popularity:5.5},
            {city:"pontevedra",popularity:9.3},
            {city:"orense",popularity:4.8},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Más País",
        "shortName":"Más País",
        "slug":"mas-pais",
        "color":"#14DCC5",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:2}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Verdes Equo",
        "shortName":"Equo",
        "slug":"equo",
        "color":"#3E9B39",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Animalista Contra el Maltrato Animal",
        "shortName":"PACMA",
        "slug":"pacma",
        "color":"#ADBE18",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:1}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista Obrero Español",
        "shortName":"PCOE",
        "slug":"pcoe",
        "color":"#F9373F",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Andalucía por Sí",
        "shortName":"AxSÍ",
        "slug":"axsi",
        "color":"#74B100",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Escaños en Blanco",
        "shortName":"Escaños en Blanco",
        "slug":"eb",
        "color":"#020202",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.02}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unificación Comunista de España",
        "shortName":"UCE",
        "slug":"uce",
        "color":"#FF0000",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Los Verdes - Grupo Verde",
        "shortName":"Los Verdes",
        "slug":"lv-gv",
        "color":"#018D32",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Castellano - Tierra Comunera",
        "shortName":"PCAS-TC",
        "slug":"pcas-tc",
        "color":"#813B94",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Grupo Verde Europeo",
        "shortName":"Grupo Verde Europeo",
        "slug":"gve",
        "color":"#56B55F",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista de los Pueblos de España",
        "shortName":"PCPE",
        "slug":"pcpe",
        "color":"#EF3025",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.06}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Por un Mundo Más Justo",
        "shortName":"PUM+J",
        "slug":"pum-j",
        "color":"#4BBCED",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.11}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Comunista de los Trabajadores de España",
        "shortName":"PCTE",
        "slug":"pcte",
        "color":"#DC0619",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.05}],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Foro Asturias",
        "shortName":"Foro",
        "slug":"fac",
        "color":"#0082C7",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"asturias",popularity:11.5}
    ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Unión del Pueblo Navarro",
        "shortName":"UPN",
        "slug":"upn",
        "color":"#2A52BE",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"navarra",popularity:24},
        ],
        "ideology": {economy:75,social:35},

    },
    {
        "name":"Bloque Nacionalista Galego",
        "shortName":"BNG",
        "slug":"bng",
        "color":"#77B4DE",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"la-coruna",popularity:9.6},
            {city:"lugo",popularity:7.27},
            {city:"pontevedra",popularity:7.5},
            {city:"orense",popularity:6},
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Partido Regionalista de Cantabria",
        "shortName":"PRC",
        "slug":"prc",
        "color":"#C2CE0C",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"cantabria",popularity:21.15}
        ],
        "ideology": {economy:5,social:8},

    },
    {
        "name":"Teruel Existe",
        "shortName":"¡TE!",
        "slug":"te",
        "color":"#007D54",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"teruel",popularity:26.8},
        ],
        "ideology": {economy:5,social:8},

    },

]

export = parties