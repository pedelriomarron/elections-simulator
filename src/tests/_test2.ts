import cities from "../data/cities";
import coalitions from "../data/coalitions";
import { lastname, malename } from "../data/names-lastnames";
import parties  from "../data/parties";
import {City, createCities} from "../models/City";
import {Coalition, createCoalitions} from "../models/Coalition";
import Country from "../models/Country";
import {Party,createParties} from "../models/Party";
import VoteCount from "../models/VoteCount";
import VoteTable from "../models/VoteTable";
import { generatePolitic, personalRounder } from "../utils/Utils";
const util = require('util')

//Country
let country = new Country()
country.name="Spain"
country.cities =  createCities(JSON.parse(JSON.stringify(cities)));
country.parties= createParties(JSON.parse(JSON.stringify(parties)));
country.coalitions=createCoalitions(coalitions,country.parties)
country.vote()
//console.log(country.partiesCount)

//Dividir coaliciones



let temp:Array<{party:Coalition,seats:number}> = country.partiesCount.filter(pc=> pc.party instanceof Coalition)as Array<{party:Coalition,seats:number}>

temp.map(pc=>{
    let auxSeats=  pc.seats 
    pc.party.parties.map(i=>{
        //console.log(i.percentage,i.party.name)
    })
    distribute(pc.party,auxSeats,country.partiesCount)
})

function distribute(coalition:Coalition,seats:number,partiesCount:Array<{party:Party,seats:number}>){
    let total:number = 0
    let quotients = []
    coalition.parties.sort((a,b) => b.percentage - a.percentage); 

    coalition.parties.map(vt=>{
        if(vt.percentage>=3){
            quotients = quotients.concat(generateQuotients(seats,vt))
        }
    })
    quotients.sort((a,b) => b.n - a.n); 

    for(let i = 0;i<seats;i++){
        let slug = quotients[i].party.slug
        partiesCount.find(vt=> vt.party.slug === slug).seats++
        total++
    }
}

function generateQuotients(seats,pp:{party:Party,percentage:number}){
    let array = []
    for(let i = 1;i<=seats;i++){
        array.push({party:pp.party,n:Math.round(pp.percentage/i)})
    }
    return array
}

country.partiesCount = country.partiesCount.filter(pc=> !(pc.party instanceof Coalition))as Array<{party:Party,seats:number}>


//console.log(country.voteCounts)

country.voteCounts.map(vc=>{
    if(vc.city.slug=="cordoba"){
        //console.log(vc.quotients)

        console.log(util.inspect( vc.seatsWinner, false,3,true))

    }
})








