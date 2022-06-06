import {City} from "./City";
import { Coalition } from "./Coalition";
import { Party } from "./Party";
import Seat from "./Seat";
import VoteCount from "./VoteCount";

 
 export default class Country {
    name: string;
    slug: string;
    cities:Array<City> = []
    voteCounts:Array<VoteCount>=[]
    parties:Array<Party>=[]
    coalitions:Array<Coalition>=[]
    //Contador de elecciones
    //partiesCount:Array<{party:Party|Coalition,seats:number,seatObject:Seat}> = []
    //partiesAndcoalitions:Array<Party|Coalition> = []
    maxRandom:number=5
    minRandom:number=1.5
    random:boolean=true




    getMapColors():Array<{citySlug:string,color:string,seats:number}>{
        let arrayColors=[]
        this.voteCounts.map(vc=>{
            let temp = vc.getPartyCount()[0]
            //console.log(vc.getPartyCount()[0].seats,vc.getPartyCount()[0].party.name,vc.city.slug)
            arrayColors.push({seats:temp.seats,color:temp.party.color,citySlug:vc.city.slug})
        })
        return arrayColors
    }


    getSeats():number{
        let sum=0
        this.cities.map(c=>{
            sum+=c.seats
        })
        return sum
    }

    vote(){
        this.cities.map(city=>{
                //console.log("Votaciones de: **",city.name," **")
                let vc1= new VoteCount();
                vc1.city=city
                vc1.generateValidVoteTables(this.parties,this.coalitions)
                vc1.vote(this.random,this.maxRandom,this.minRandom)
                vc1.generateAllQuotients()
                this.voteCounts.push(vc1)
        })
        //this.generatePartiesCount()
        //Repartir escaños
        /*
        this.voteCounts.map(vc=>{
            //console.log("Ciudad: **",vc.city.name," **")
            vc.voteTables.map(vt=>{
                let tempParty = this.partiesCount.find(item=> item.party.slug === vt.party.slug)
                tempParty.seats = tempParty.seats+vt.seats
            })
        })



        this.partiesCount.sort((a,b) => b.seats - a.seats)

        */
        
    }

    getPartiesCount(){
        /*
        this.partiesAndcoalitions=this.partiesAndcoalitions.concat(this.parties,this.coalitions)
        this.partiesAndcoalitions.map(p=>{
            this.partiesCount.push({party:p,seats:0})
        })
*/
        let partiesCount:Array<{party:Party|Coalition,seats:number,seatObject:Seat}> = []


        this.voteCounts.map(vc=>{           
            vc.getPartyCount().map(item=>{
                let r= partiesCount.find(f=> f.party.slug == item.party.slug )
                if(r== undefined){
                    partiesCount.push({party:item.party,seats:item.seats,seatObject:item.seatObject})
                }else{
                    r.seats=r.seats+item.seats
                }
            })   
        })

        partiesCount.sort((a,b) => b.seats - a.seats)
        return partiesCount


    }

    getPartiesIndividualCount(){
        /*
        this.partiesAndcoalitions=this.partiesAndcoalitions.concat(this.parties,this.coalitions)
        this.partiesAndcoalitions.map(p=>{
            this.partiesCount.push({party:p,seats:0})
        })
*/
        let partiesCount:Array<{party:Party|Coalition,seats:number,seatObject:Seat}> = []


        this.voteCounts.map(vc=>{           
            vc.getPartyIndividualCount().map(item=>{
                let r= partiesCount.find(f=> f.party.slug == item.party.slug )
                if(r== undefined){
                    partiesCount.push({party:item.party,seats:item.seats,seatObject:item.seatObject})
                }else{
                    r.seats=r.seats+item.seats
                }
            })   
        })

        partiesCount.sort((a,b) => b.seats - a.seats)
        return partiesCount


    }
}


