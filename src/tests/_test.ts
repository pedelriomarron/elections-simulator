import { Person } from "../models/Person";
import dynasties  from "../data/dynasties";
import eyesColor  from "../data/eyesColor";
import races  from "../data/races";
import names  from "../data/names";
import Dynasty from "../models/Dynasty";
import Race from "../models/Race";
import { giveBirth } from "../models/BabyGenerator";


let person1 = new Person();
let dynasty1: Dynasty = JSON.parse(JSON.stringify(dynasties[1]));
let race1: Race = JSON.parse(JSON.stringify(races[1]));
let eyesColor1: string ="blue"
let genderMale:boolean= true
let nameRandom: string = names[1].name;

let person2 = new Person();
let dynasty2: Dynasty = JSON.parse(JSON.stringify(dynasties[2]));
let race2: Race = JSON.parse(JSON.stringify(races[2]));
let eyesColor2: string = "blue"
let genderFemale:boolean= false
let nameRandom2: string = names[3].name;



person1.name = nameRandom
person1.dinasty = dynasty1
person1.eyesColor =eyesColor1
person1.race = race1
person1.genderBinary=genderMale

//console.log(person1)

person2.name = nameRandom2
person2.dinasty = dynasty2
person2.eyesColor =eyesColor2
person2.race = race2
person2.genderBinary=genderFemale

//console.log(person2)

let baby1 = giveBirth(person2,person1)

console.log(baby1)

