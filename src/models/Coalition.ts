import { throws } from "assert";
import { MyClassFactory,jsonConcat } from "../utils/Utils";
import {City} from "./City";
import Ideology from "./Ideology";
import {Party} from "./Party";

 class Coalition extends Party {

    parties:Array<{party:Party,percentage:number}>= []


    constructor() {
        super();
    }


    getIdeology(): Ideology {
        let economy = 0;
        let social= 0;

        this.parties.map(p=>{
            economy+=p.party.getIdeology().economy
            social+=p.party.getIdeology().social
        })
        economy=economy/this.parties.length
        social=social/this.parties.length


        return new Ideology(economy,social)
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