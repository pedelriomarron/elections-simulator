import parties  from "../data/parties";
import {City} from "../models/City";
import {Party} from "../models/Party";
import VoteCount from "../models/VoteCount";
import VoteTable from "../models/VoteTable";

//Crear City
let city = new City()
city.name="City 1"
city.seats = 21
//console.log(city)

//Invocar Partidos
let partiesList:Array<Party>  = JSON.parse(JSON.stringify(parties));
partiesList.map(party=>{
    //console.log(party)
})

//Busqueda de partido
let partySearch:Party = partiesList.find(party => party.slug=== "partido-b");
//console.log("Partido encontrado:",partySearch)

//Invocar listas de voto
/*
let tableE=  new VoteTable(partiesList.find(party => party.slug=== "partido-e"),27000);
let tableC=  new VoteTable(partiesList.find(party => party.slug=== "partido-c"),184000);
let tableD=  new VoteTable(partiesList.find(party => party.slug=== "partido-d"),73000);
let tableA=  new VoteTable(partiesList.find(party => party.slug=== "partido-a"),391000);
let tableB=  new VoteTable(partiesList.find(party => party.slug=== "partido-b"),311000);
let tableF=  new VoteTable(partiesList.find(party => party.slug=== "partido-f"),12000);
let tableG=  new VoteTable(partiesList.find(party => party.slug=== "partido-g"),2000);

*//*
//let allTables:Array<VoteTable> = [tableF,tableG,tableA,tableB,tableC,tableD,tableE]
//Ordenar
allTables.sort((a,b) => b.votes - a.votes); 
//console.log(allTables)
//Generar cocientes
let vc= new VoteCount();
vc.city=city
vc.voteTables = allTables
vc.generateAllQuotients()
//vc.voteTables.map(vt=>console.log(vt))
console.log(vc)
*/








export = partiesList