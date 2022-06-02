import { throws } from "assert";
import { MyClassFactory,jsonConcat } from "../utils/Utils";
import {City} from "./City";
import {Party} from "./Party";

 class Coalition extends Party {

    parties:Array<{party:Party,percentage:number}>= []


    constructor() {
        super();
    }

    getPopularity(city:City){
        let pop:number = 0

      
        this.parties.map(p=>{
            pop += p.party.getPopularity(city)
        })

        return pop   
    }

    getTotalPercentage(){
        let pop:number = 0
        this.parties.map(p=>{
            pop += p.percentage
        })
        return pop  
    }

}



function createCoalitions(coalitions,parties:Array<Party>):Array<Coalition> {

    let newCoalitions:Array<Coalition>=[]

    coalitions.map(c=>{
        c.parties.map(party=>{
            let findParty = parties.find(p => p.slug=== party.party)
            party.party = findParty
        })
        let myInstance = MyClassFactory<Coalition>(Coalition.name);
        myInstance = jsonConcat(myInstance,c)
        //console.log(myInstance)
        newCoalitions.push(myInstance)

    })

    //return  JSON.parse(JSON.stringify(coalitions));

    return newCoalitions

}


export  {Coalition,createCoalitions}