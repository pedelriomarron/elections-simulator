
const parties = [

    {
        "name":"Partido Socialista Obrero Español",
        "shortName":"PSOE",
        "slug":"psoe",
        "color":"#E4010B",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:28},
            //Cataluña
            {city:"barcelona",popularity:0},
            {city:"tarragona",popularity:0},
            {city:"gerona",popularity:0},
            {city:"lerida",popularity:0},
            //Pais Vasco
            {city:"alava",popularity:22},
            {city:"guipuzcoa",popularity:18},
            {city:"vizcaya",popularity:19.2},
            //Galicia
            {city:"la-coruna",popularity:30.3},
            {city:"lugo",popularity:32.3},
            {city:"pontevedra",popularity:32.1},
            {city:"orense",popularity:33.5},
            //teruel
            {city:"teruel",popularity:25.7},
            //Castilla y Leon
            {city:"avila",popularity:26.4},
            {city:"burgos",popularity:32.7},
            {city:"leon",popularity:33.8},
            {city:"palencia",popularity:33.6},
            {city:"salamanca",popularity:29.75},
            {city:"segovia",popularity:30},
            {city:"soria",popularity:35.1},
            {city:"valladolid",popularity:30.6},
            {city:"zamora",popularity:33.2},
            //Cantabria
            {city:"cantabria",popularity:23.3},
            //Melilla
            {city:"melilla",popularity:16.5},


        ],
        "ideology": {economy:30,social:60},

    },
    {
        "name":"Partido de los Socialistas de Cataluña",
        "shortName":"PSC-PSOE",
        "slug":"psc-psoe",
        "color":"#E4010B",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            //Cataluña
            {city:"barcelona",popularity:22},
            {city:"tarragona",popularity:19.2},
            {city:"gerona",popularity:14.9},
            {city:"lerida",popularity:14.6},
            //***PSC */

        ],
        "ideology": {economy:25,social:60},

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
            //Cataluña
            {city:"barcelona",popularity:7.7},
            {city:"tarragona",popularity:7.8},
            {city:"gerona",popularity:5},
            {city:"lerida",popularity:7.1},
            //Pais Vasco
            {city:"alava",popularity:15},
            {city:"guipuzcoa",popularity:6},
            {city:"vizcaya",popularity:8.8},
            //Galicia
            {city:"la-coruna",popularity:30.9},
            {city:"lugo",popularity:38.5},
            {city:"pontevedra",popularity:29.3},
            {city:"orense",popularity:39.8},
            //Castilla y Leon
            {city:"avila",popularity:35.1},
            {city:"burgos",popularity:31.2},
            {city:"leon",popularity:28.7},
            {city:"palencia",popularity:36},
            {city:"salamanca",popularity:35},
            {city:"segovia",popularity:33.4},
            {city:"soria",popularity:33.4},
            {city:"valladolid",popularity:29.8},
            {city:"zamora",popularity:34},
            //Cantabria
            {city:"cantabria",popularity:26},
            //Melilla
            {city:"melilla",popularity:29.7},

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
        "popularity":[
            {city:"global",popularity:15},
            //Cataluña
            {city:"barcelona",popularity:6.3},
            {city:"tarragona",popularity:8.1},
            {city:"gerona",popularity:5.2},
            {city:"lerida",popularity:4.5},
            //Pais Vasco
            {city:"alava",popularity:3.8},
            {city:"guipuzcoa",popularity:1.9},
            {city:"vizcaya",popularity:2.4},
            //Murcia
            {city:"murcia",popularity:28.1},
            //Navarra
            {city:"navarra",popularity:5.8},
            //Ceuta
            {city:"ceuta",popularity:35.5},


        ],
        "ideology": {economy:70,social:10},

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
            //Cataluña
            {city:"barcelona",popularity:4.6},
            {city:"tarragona",popularity:3.6},
            {city:"gerona",popularity:2.9},
            {city:"lerida",popularity:2.4},
            //Galicia
            {city:"la-coruna",popularity:5.1},
            {city:"lugo",popularity:3.7},
            {city:"pontevedra",popularity:6.3},
            {city:"orense",popularity:3.2},
            //Huesca
            {city:"huesca",popularity:6.25},

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
            {city:"huesca",popularity:3.25},

        ],
        "ideology": {economy:0,social:70},

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
        "ideology": {economy:10,social:60},

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
        "ideology": {economy:10,social:80},

    },
    {
        "name":"Ciudadanos - Partido de la Ciudadanía",
        "shortName":"Cs",
        "slug":"cs",
        "color":"#FF4E00",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:6},
            //Pais Vasco
            {city:"alava",popularity:1.5},
            {city:"guipuzcoa",popularity:1},
            {city:"vizcaya",popularity:1.1},
        ],
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
        "ideology": {economy:70,social:60},

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
        "ideology": {economy:0,social:90},

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
        "ideology": {economy:10,social:70},

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
        "ideology": {economy:10,social:70},

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
        "ideology": {economy:0,social:100},

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
        "ideology": {economy:10,social:60},

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
        "ideology": {economy:10,social:70},

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
        "ideology": {economy:70,social:70},

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
        "ideology": {economy:40,social:60},

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
        "ideology": {economy:0,social:70},

    },
    {
        "name":"Más País",
        "shortName":"Más País",
        "slug":"mas-pais",
        "color":"#14DCC5",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:2}],
        "ideology": {economy:25,social:80},

    },
    {
        "name":"Verdes Equo",
        "shortName":"Equo",
        "slug":"equo",
        "color":"#3E9B39",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:10,social:90},

    },
    {
        "name":"Partido Animalista Contra el Maltrato Animal",
        "shortName":"PACMA",
        "slug":"pacma",
        "color":"#ADBE18",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:1}],
        "ideology": {economy:10,social:100},

    },
    {
        "name":"Partido Comunista Obrero Español",
        "shortName":"PCOE",
        "slug":"pcoe",
        "color":"#F9373F",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:0,social:0},

    },
    {
        "name":"Andalucía por Sí",
        "shortName":"AxSÍ",
        "slug":"axsi",
        "color":"#74B100",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0}],
        "ideology": {economy:10,social:70},

    },
    {
        "name":"Escaños en Blanco",
        "shortName":"Escaños en Blanco",
        "slug":"eb",
        "color":"#020202",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.02}],
        "ideology": {economy:10,social:70},

    },
    {
        "name":"Unificación Comunista de España",
        "shortName":"UCE",
        "slug":"uce",
        "color":"#FF0000",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:0,social:0},

    },
    {
        "name":"Los Verdes - Grupo Verde",
        "shortName":"Los Verdes",
        "slug":"lv-gv",
        "color":"#018D32",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:15,social:80},

    },
    {
        "name":"Partido Castellano - Tierra Comunera",
        "shortName":"PCAS-TC",
        "slug":"pcas-tc",
        "color":"#813B94",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:10,social:50},

    },
    {
        "name":"Grupo Verde Europeo",
        "shortName":"Grupo Verde Europeo",
        "slug":"gve",
        "color":"#56B55F",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.04}],
        "ideology": {economy:15,social:80},

    },
    {
        "name":"Partido Comunista de los Pueblos de España",
        "shortName":"PCPE",
        "slug":"pcpe",
        "color":"#EF3025",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.06}],
        "ideology": {economy:0,social:0},

    },
    {
        "name":"Por un Mundo Más Justo",
        "shortName":"PUM+J",
        "slug":"pum-j",
        "color":"#4BBCED",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.11}],
        "ideology": {economy:50,social:80},

    },
    {
        "name":"Partido Comunista de los Trabajadores de España",
        "shortName":"PCTE",
        "slug":"pcte",
        "color":"#DC0619",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[{city:"global",popularity:0.05}],
        "ideology": {economy:0,social:0},

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
        "ideology": {economy:70,social:40},

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
        "ideology": {economy:0,social:75},

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
        "ideology": {economy:50,social:50},

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
        "ideology": {economy:50,social:50},

    },
    {
        "name":"Alto Aragón En Común",
        "shortName":"AAeC",
        "slug":"aaec",
        "color":"#B222EB",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"huesca",popularity:2.5},
        ],
        "ideology": {economy:10,social:60},

    },
    {
        "name":"Coalición por Melilla",
        "shortName":"CpM",
        "slug":"cpm",
        "color":"#488A43",
        "includedCities":[],
        "excludedCities":[],
        "popularity":[
            {city:"global",popularity:0},
            {city:"melilla",popularity:29.1},
        ],
        "ideology": {economy:30,social:60},

    },

]

export = parties