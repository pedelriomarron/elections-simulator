/*
import { Person } from "../models/Person";
import dynasties  from "../data/dynasties";
import races  from "../data/races";
import names  from "../data/names";
import Dynasty from "../models/Dynasty";
import Race from "../models/Race";
import { giveBirth, tryBaby } from "../models/BabyGenerator";
import { createCSV } from "../utils/Utils";


let persons = []

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
person1.age=34


//console.log(person1)

person2.name = nameRandom2
person2.dinasty = dynasty2
person2.eyesColor =eyesColor2
person2.race = race2
person2.genderBinary=genderFemale
person2.age=23

//console.log(person2)

let baby1 = giveBirth(person2,person1)

console.log(baby1)


tryBaby(person2,person1)


persons.push(person1)
persons.push(person2)
persons.push(baby1)

createCSV(persons,"./build/data.csv")

*/