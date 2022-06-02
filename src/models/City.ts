import { MyClassFactory, jsonConcat } from "../utils/Utils";
import { Party, createParties } from "./Party";

 
 class City {
    name: string;
    slug: string;
    seats: number=0
    voters: number=0
    abstention:number=0
}


function createCities(cities:Array<City>):Array<City> {
    let newCities:Array<City>=[]
    cities.map(c=>{
        let myInstance = MyClassFactory<City>(City.name);
        myInstance = jsonConcat(myInstance,c)
        //console.log(myInstance)
        newCities.push(myInstance)

    })
    return newCities

}


export {createCities,City}

