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
    age:number

    constructor() {
        this.id = Math.floor(new Date().valueOf() * Math.random())
        this.age = 0
    }

    getfertility():number{

        if(this.age < 15) return 0

        if(this.age > 50) return 0

        return 50-this.age

    }

    getGenderString(){
        return !this.genderBinary ? "Femenino" : "Masculino"
    }


}