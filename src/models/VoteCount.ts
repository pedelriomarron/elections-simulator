import { personalRounder } from "../utils/Utils";
import {City} from "./City";
import { Coalition } from "./Coalition";
import {Party} from "./Party";
import Quotient from "./Quotient";
import Seat from "./Seat";
import VoteTable from "./VoteTable";

export default class VoteCount {
    voteTables:Array<VoteTable>= [];
    city:City
    //Todos los cocientes
    quotients:Quotient[]= []
    // Escaños que han sido ganadores
    seatsWinner:Seat[]= []
    totalVotes:number;
    abstentions:number
    invalidVotes:number
    blankVotes:number


    getPartyCount():Array<{party:Party|Coalition,seats:number,seatObject:Seat}>{
        let partiesCount:Array<{party:Party|Coalition,seats:number,seatObject:Seat}> = []

        this.seatsWinner.map(s=>{
            let r= partiesCount.find(f=> f.party.slug ==s.quotient.partyWinner.slug )
            if(r== undefined){
                partiesCount.push({party:s.quotient.partyWinner,seats:1,seatObject:s})
            }else{
                r.seats++
            }
        })
        partiesCount.sort((a,b) => b.seats - a.seats)

        return partiesCount
    }


    getPartyIndividualCount():Array<{party:Party|Coalition,seats:number,seatObject:Seat}>{
        let partiesCount:Array<{party:Party|Coalition,seats:number,seatObject:Seat}> = []

        this.seatsWinner.map(s=>{
            let r= partiesCount.find(f=> f.party.slug ==s.quotient.partyWinner.slug )
            if(r== undefined){
                partiesCount.push({party:s.quotient.politician.party,seats:1,seatObject:s})
            }else{
                r.seats++
            }
        })
        partiesCount.sort((a,b) => b.seats - a.seats)

        return partiesCount
    }


    getValidVotes(){
        return this.totalVotes+this.blankVotes
    }


    calculateTotalVotes(){
        let sum = 0;
        this.voteTables.map(vt=>{
            sum += vt.votes
        })
        this.totalVotes = sum
    }

    generateAllQuotients(){
        this.calculateTotalVotes()
        this.voteTables.sort((a,b) => b.votes - a.votes); 

        this.voteTables.map(vt=>{
            vt.percentageVotes = personalRounder( ((vt.votes*100)/this.getValidVotes()))
            if(vt.percentageVotes>=3){
                //this.quotients = this.quotients.concat(vt.generateQuotients(this.city.seats))
                this.quotients = this.quotients.concat(vt.generateQuotients(this.city))
            }
        })
        this.quotients.sort((a,b) => b.votes - a.votes); 
        this.countSeats()
    }

    countSeats(){
        for(let i = 0;i<this.city.seats;i++){
            let slug = this.quotients[i].partyWinner.slug
            this.voteTables.find(vt=> vt.party.slug === slug).seats++
            let s = new Seat()
            s.quotient=this.quotients[i]
            this.seatsWinner.push(s)
        }
    }

    allPopularity(){
        let sum:number=0;
        this.voteTables.map(v=>{
           // if(!random)
             //   sum+= v.party.getPopularity(this.city)
            //else
                sum+= v.finalPercentage

        })
        return sum
    }

    vote(random:boolean=false,max:number=0,min:number=0){
            this.defineVotes()
            this.voteTables.map(v=>{
                if(random){
                    v.finalPercentage = Math.round(personalRounder(v.party.getPopularity(this.city) + Math.random() * (max - (min)) + min))
                }
                else{
                    v.finalPercentage =v.party.getPopularity(this.city)
                }
           })
            this.voteTables.map(v=>{
                //console.log(v.party.name," Popularidad Real=>", v.party.getPopularity(this.city) , v.finalPercentage," ",this.allPopularity())
                //let n=(this.totalVotes* personalRounder((( v.party.getPopularity(this.city)*100 )/this.allPopularity()))) 
                let n=(this.totalVotes* personalRounder((( v.finalPercentage*100 )/this.allPopularity()))) 
                v.votes= Math.round(n/100)
            })

    }

    defineVotes(){
        this.city.voters
        let invalid = Math.random() * (2 - 0.5) + 0.5
        let blankVotes = Math.random() * (2 - 0.5) + 0.5

        let percentageOK = 100-(this.city.abstention+invalid+blankVotes)


        this.totalVotes = Math.round(((this.city.voters*percentageOK)/100))
        this.blankVotes = Math.round(((this.city.voters*blankVotes)/100))
        this.abstentions = Math.round(((this.city.voters*this.city.abstention)/100))
        this.invalidVotes = Math.round(((this.city.voters*invalid)/100))


    }

    generateValidVoteTables(partiesList:Array<Party>,coalitionsList:Array<Coalition>){

        let currentParties:Array<Party>= []
        let currentCoalitions:Array<Coalition>= []
        let partiesAndcoalitions:Array<Party|Coalition> = []
        let allTables:Array<VoteTable> = []

            //  currentParties = partiesList.filter((p)=> p.popularity.find((pop => pop.city == "global" && pop.popularity >0)) || p.popularity.find((pop => pop.city === this.city.slug && pop.popularity >0 )))
       currentParties = partiesList.filter((p)=> (p.popularity.find((pop => pop.city == "global" && pop.popularity >0)) && !p.popularity.find((pop => pop.city == this.city.slug && pop.popularity ==0))) || p.popularity.find((pop => pop.city === this.city.slug && pop.popularity >0 )))
       
        //Ordenar donde hay mas partidos para casoos como aragon
       coalitionsList.sort((a,b) => b.parties.length - a.parties.length)

        coalitionsList.map(c=>{
            let colectionsOK = true
            c.parties.map(ca=>{
                if(!colectionsOK) return false
               // if(currentParties.find(p=>p.slug==ca.party.slug) === undefined) {
                if(currentParties.find(p=>p.slug==ca.party.slug) === undefined) {
                    colectionsOK = false;
                    return false 
                }  
                //Exclusiones
            })

            if(colectionsOK){           
                currentCoalitions.push(c)
                c.parties.map(ca=>{
                    currentParties = currentParties.filter(p=> p.slug !=ca.party.slug )
                })
            }
        })
        
        partiesAndcoalitions = partiesAndcoalitions.concat(currentCoalitions,currentParties)
        
        partiesAndcoalitions.map(p=>{
            allTables.push(new VoteTable(p));
        })

        this.voteTables = allTables

    }



}


