import { lastname, malename } from "../data/names-lastnames";
import { generatePolitic } from "../utils/Utils";
import { City } from "./City";
import {Party} from "./Party";
import Politician from "./Politician";
import Quotient from "./Quotient";

 export default class VoteTable {
    party:Party;
    votes:number
    percentageVotes:number;
    seats:number= 0;
    finalPercentage:number=0
    politicians:Array<Politician>=[]
    quotients:Array<Quotient>=[]




    constructor(party:Party){
        this.party=party
        //this.votes=votes
        //Test


    }


    generatePoliticians(city:City){
        for(let i=1;i<city.seats+1;i++){
            let p = generatePolitic(malename,lastname)
            p.party=this.party
            p.name = p.name +" ("+i+") del : "+this.party.shortName
            this.politicians.push(p)
            }
    }

    generateQuotients(city:City){

        this.generatePoliticians(city)

        let seats = city.seats

        let array = []
        for(let i = 1;i<=seats;i++){
            let q = new Quotient()
            q.votes = Math.round(this.votes/i)
            q.politician = this.politicians[i-1]
            q.city=city
            q.order=i
            this.quotients.push(q)
            array.push(q)
            //array.push({party:this.party,votes:})
        }
        
        return array
    }
}


