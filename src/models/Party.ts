import { MyClassFactory, jsonConcat } from "../utils/Utils";
import {City} from "./City";
import Ideology from "./Ideology";

 
class Party {
    name: string;
    shortName:string
    slug: string;
    color: string;
    includedCities:Array<string>= []
    excludedCities:Array<string>= []
    popularity:Array<{city:string,popularity:number}> = []
    ideology:Ideology
    
    getIdeology():Ideology{
        return this.ideology
    }

    toString = () => JSON.stringify(this, null, '  ');


    getPopularity(city:City){
        let pop:number

        try {
            pop=this.popularity.find(p=>p.city==city.slug).popularity
        } catch (error) {
            pop=this.popularity.find(p=>p.city=="global").popularity
        }
        return pop   
    }

 
}


function createParties(parties:Array<Party>):Array<Party> {

    let newParties:Array<Party>=[]

    parties.map(c=>{
        let myInstance = MyClassFactory<Party>(Party.name);
        myInstance = jsonConcat(myInstance,c)
        myInstance.ideology= new Ideology(c.ideology.economy,c.ideology.social)
        //console.log(myInstance)
        newParties.push(myInstance)

    })

    //return  JSON.parse(JSON.stringify(coalitions));

    return newParties

}


export {createParties,Party}