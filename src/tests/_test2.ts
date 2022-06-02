import cities from "../data/cities";
import coalitions from "../data/coalitions";
import parties  from "../data/parties";
import {City, createCities} from "../models/City";
import {Coalition, createCoalitions} from "../models/Coalition";
import Country from "../models/Country";
import {Party,createParties} from "../models/Party";
import VoteCount from "../models/VoteCount";
import VoteTable from "../models/VoteTable";
import { personalRounder } from "../utils/Utils";

//Country
let country = new Country()
country.name="Spain"
country.cities =  createCities(JSON.parse(JSON.stringify(cities)));
country.parties= createParties(JSON.parse(JSON.stringify(parties)));
country.coalitions=createCoalitions(coalitions,country.parties)

let partiesAndcoalitions:Array<Party|Coalition> = []
let partiesCount:Array<{party:Party|Coalition,seats:number}> = []

partiesAndcoalitions=partiesAndcoalitions.concat(country.parties,country.coalitions)
partiesAndcoalitions.map(p=>{
    partiesCount.push({party:p,seats:0})
})

country.cities.map(city=>{
    console.log("Votaciones de: **",city.name," **")
        let vc1= new VoteCount();
        vc1.city=city
        vc1.generateValidVoteTables(country.parties,country.coalitions)
        vc1.vote(true,3,0.5)
        vc1.generateAllQuotients()
        country.voteCounts.push(vc1)
})



country.voteCounts.map(vc=>{
    console.log("Ciudad: **",vc.city.name," **")
    vc.voteTables.map(vt=>{
        let tempParty = partiesCount.find(item=> item.party.slug === vt.party.slug)
        tempParty.seats = tempParty.seats+vt.seats
    })
})

partiesCount.sort((a,b) => b.seats - a.seats)


console.log(partiesCount)

//Dividir coaliciones











