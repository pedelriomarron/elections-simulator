import Dynasty from "./Dynasty";
import Race from "./Race";


export class Person {
    name: string;
    dinasty: Dynasty;
    eyesColor:string;
    race:Race
    genderBinary:boolean
    father:Person
    mother:Person
    id:number

    constructor() {
        this.id = Math.floor(new Date().valueOf() * Math.random())
    }

    getGenderString(){
        return !this.genderBinary ? "Femenino" : "Masculino"
    }


}