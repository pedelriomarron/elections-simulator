import { Party } from "./Party";

export default class Politician {
    name:string;
    lastname:string
    party:Party
    leadership:number=0
    charisma:number=0
    popularity:number=0



    getValue(){
        return (this.charisma+this.leadership+this.popularity)/3
    }
}


