const cities = [

    {
        "name":"Madrid",
        "slug":"madrid",
        "seats":37,
        "voters": 4786447,
        "abstention": 30,
    },
    {
        "name":"Barcelona",
        "slug":"barcelona",
        "seats":32,
        "voters": 3996310,
        "abstention": 30
    },
    {
        "name":"Valencia",
        "slug":"valencia",
        "seats":15,
        "voters": 1912978,
        "abstention": 29
    },   
    {
        "name":"Alicante",
        "slug":"alicante",
        "seats":12,
        "voters": 1249146,
        "abstention": 32
    },
    {
        "name":"Sevilla",
        "slug":"sevilla",
        "seats":12,
        "voters": 1515908,
        "abstention": 30
    },
    {
        "name":"Málaga",
        "slug":"malaga",
        "seats":11,
        "voters": 1161954,
        "abstention": 36
    },
    {
        "name":"Murcia",
        "slug":"murcia",
        "seats":10,
        "voters": 1045701,
        "abstention": 32
    },
    {
        "name":"Cádiz",
        "slug":"cadiz",
        "seats":9,
        "voters": 979292,
        "abstention": 37
    },
    {
        "name":"Baleares",
        "slug":"baleares",
        "seats":8,
        "voters": 786029,
        "abstention": 43
    },
    {
        "name":"La Coruña",
        "slug":"la-coruna",
        "seats":8,
        "voters": 923345,
        "abstention": 43
    },
    {
        "name":"Las Palmas",
        "slug":"las-palmas",
        "seats":8,
        "voters": 834019,
        "abstention": 43
    },
    {
        "name":"Vizcaya",
        "slug":"vizcaya",
        "seats":8,
        "voters": 901093,
        "abstention": 33
    },
    {
        "name":"Asturias",
        "slug":"asturias",
        "seats":7,
        "voters":839429,
        "abstention": 42
    },
    {
        "name":"Granada",
        "slug":"granada",
        "seats":7,
        "voters": 705622,
        "abstention": 34
    },
    {
        "name":"Pontevedra",
        "slug":"pontevedra",
        "seats":7,
        "voters": 772362,
        "abstention": 41
    },
    {
        "name":"Santa Cruz de Tenerife",
        "slug":"santa-cruz-de-tenerife",
        "seats":7,
        "voters": 766388,
        "abstention": 45
    },
    {
        "name":"Zaragoza",
        "slug":"zaragoza",
        "seats":7,
        "voters": 710181,
        "abstention": 30
    },
    {
        "name":"Almería",
        "slug":"almeria",
        "seats":6,
        "voters": 466259,
        "abstention": 39
    },
    {
        "name":"Badajoz",
        "slug":"badajoz",
        "seats":6,
        "voters": 539579,
        "abstention": 32
    },
    {
        "name":"Córdoba",
        "slug":"cordoba",
        "seats":6,
        "abstention":30,
        "voters":624910
    },
    {
        "name":"Gerona",
        "slug":"gerona",
        "seats":6,
        "voters": 514822,
        "abstention": 32
    },
    {
        "name":"Guipúzcoa",
        "slug":"guipuzcoa",
        "seats":6,
        "voters": 554588,
        "abstention": 34
    },    {
        "name":"Tarragona",
        "slug":"tarragona",
        "seats":6,
        "voters": 567776,
        "abstention": 32
    },    {
        "name":"Toledo",
        "slug":"toledo",
        "seats":6,
        "voters": 521484,
        "abstention": 30
    },    
    {
        "name":"Cantabria",
        "slug":"cantabria",
        "seats":5,
        "voters": 465380,
        "abstention": 34
    },    
    {
        "name":"Castellón",
        "slug":"castellon",
        "seats":5,
        "voters": 415473,
        "abstention": 29
    },    
    {
        "name":"Ciudad Real",
        "slug":"ciudad-real",
        "seats":5,
        "voters": 384519,
        "abstention": 31
    },    
    {
        "name":"Huelva",
        "slug":"huelva",
        "seats":5,
        "voters": 392662,
        "abstention": 36
    },    
    {
        "name":"Jaén",
        "slug":"jaen",
        "seats":5,
        "voters": 507518,
        "abstention": 29
    },    
    {
        "name":"Navarra",
        "slug":"navarra",
        "seats":5,
        "voters": 486607,
        "abstention": 34
    },    
    {
        "name":"Valladolid",
        "slug":"valladolid",
        "seats":5,
        "voters": 415291,
        "abstention": 27
    },    
    {
        "name":"Álava",
        "slug":"alava",
        "seats":4,
        "voters": 251053,
        "abstention": 33
    },    
    {
        "name":"Albacete",
        "slug":"albacete",
        "seats":4,
        "voters": 299502,
        "abstention": 30
    },    
    {
        "name":"Burgos",
        "slug":"burgos",
        "seats":4,
        "voters": 277725,
        "abstention": 32
    },    
    {
        "name":"Cáceres",
        "slug":"caceres",
        "seats":4,
        "voters":323363,
        "abstention": 34
    },    
    {
        "name":"León",
        "slug":"leon",
        "seats":4,
        "voters": 376389,
        "abstention": 38
    },    
    {
        "name":"Lérida",
        "slug":"lerida",
        "seats":4,
        "voters": 297512,
        "abstention": 33
    },    
    {
        "name":"Lugo",
        "slug":"lugo",
        "seats":4,
        "voters": 271902,
        "abstention": 47
    },    
    {
        "name":"Orense",
        "slug":"orense",
        "seats":4,
        "voters": 255115,
        "abstention": 52
    },    
    {
        "name":"La Rioja",
        "slug":"la-rioja",
        "seats":4,
        "voters": 233232,
        "abstention": 33
    },    {
        "name":"Salamanca",
        "slug":"salamanca",
        "seats":4,
        "voters": 269496,
        "abstention": 35
    },    
    {
        "name":"Ávila",
        "slug":"avila",
        "seats":3,
        "voters": 128607,
        "abstention": 30
    },    
    {
        "name":"Cuenca",
        "slug":"cuenca",
        "seats":3,
        "voters": 149476,
        "abstention": 28
    },    
    {
        "name":"Guadalajara",
        "slug":"guadalajara",
        "seats":3,
        "voters": 188376,
        "abstention": 28
    },    
    {
        "name":"Huesca",
        "slug":"huesca",
        "seats":3,
        "voters":165599,
        "abstention": 33
    },    
    {
        "name":"Palencia",
        "slug":"palencia",
        "seats":3,
        "voters": 131148,
        "abstention": 31
    },    
    {
        "name":"Segovia",
        "slug":"segovia",
        "seats":3,
        "voters": 115766,
        "abstention": 27
    },    
    {
        "name":"Teruel",
        "slug":"teruel",
        "seats":3,
        "voters": 101538,
        "abstention": 30
    },    
    {
        "name":"Zamora",
        "slug":"zamora",
        "seats":3,
        "voters": 143959,
        "abstention": 40
    },    
    {
        "name":"Soria",
        "slug":"soria",
        "seats":2,
        "voters": 68835,
        "abstention": 38
    },    
    {
        "name":"Ceuta",
        "slug":"ceuta",
        "seats":1,
        "voters": 59691,
        "abstention": 46
    },    
    {
        "name":"Melilla",
        "slug":"melilla",
        "seats":1,
        "voters": 54721,
        "abstention": 47
    },
]

export = cities