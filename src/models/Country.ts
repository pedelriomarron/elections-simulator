import {City} from "./City";
import { Coalition } from "./Coalition";
import { Party } from "./Party";
import VoteCount from "./VoteCount";

 
 export default class Country {
    name: string;
    slug: string;
    cities:Array<City> = []
    voteCounts:Array<VoteCount>=[]
    parties:Array<Party>=[]
    coalitions:Array<Coalition>=[]
    //Contador de elecciones
    partiesCount:Array<{party:Party|Coalition,seats:number}> = []
    partiesAndcoalitions:Array<Party|Coalition> = []



    getSeats():number{
        let sum=0
        this.cities.map(c=>{
            sum+=c.seats
        })
        return sum
    }

    vote(){
        this.cities.map(city=>{
            console.log("Votaciones de: **",city.name," **")
                let vc1= new VoteCount();
                vc1.city=city
                vc1.generateValidVoteTables(this.parties,this.coalitions)
                vc1.vote(true,3,0.5)
                vc1.generateAllQuotients()
                this.voteCounts.push(vc1)
        })

        //Repartir escaños
        this.voteCounts.map(vc=>{
            console.log("Ciudad: **",vc.city.name," **")
            vc.voteTables.map(vt=>{
                let tempParty = this.partiesCount.find(item=> item.party.slug === vt.party.slug)
                tempParty.seats = tempParty.seats+vt.seats
            })
        })

        //
        this.partiesAndcoalitions=this.partiesAndcoalitions.concat(this.parties,this.coalitions)
        this.partiesAndcoalitions.map(p=>{
            this.partiesCount.push({party:p,seats:0})
        })

        this.partiesCount.sort((a,b) => b.seats - a.seats)
        
    }
}


