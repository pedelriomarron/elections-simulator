import {Party} from "./Party";

 export default class VoteTable {
    party:Party;
    votes:number
    percentageVotes:number;
    seats:number= 0;
    finalPercentage:number=0




    constructor(party:Party){
        this.party=party
        //this.votes=votes
    }

    generateQuotients(seats){
        let array = []
        for(let i = 1;i<=seats;i++){
            array.push({party:this.party,votes:Math.round(this.votes/i)})
        }
        
        return array
    }
}


