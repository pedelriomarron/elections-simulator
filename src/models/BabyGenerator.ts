import eyesColor from "../data/eyesColor"
import { Person } from "./Person"



function giveBirth(female:Person,male:Person):Person|boolean{


    if(female.genderBinary || !male.genderBinary) return false

    let baby =new Person()
    baby.mother = female
    baby.father= male
    baby.genderBinary=Math.random() < 0.5
    baby.eyesColor = getColorEyes(female,male)
    baby.dinasty = male.dinasty
    return baby;

}



function getColorEyes(female:Person,male:Person):string{

    let r = Math.floor(Math.random() * 100)+1;

    //Marron + Marron
    if(female.eyesColor =="brown" && male.eyesColor=="brown"){
        if(r<=75)
            return 'brown'
        else if(r<=93.8)
            return 'green' 
        else if(r<=100)
            return 'blue'
    }
    //Azul + Azul
    if(female.eyesColor =="blue" && male.eyesColor=="blue"){
        if(r<=99)
            return 'blue'
        else if(r<=100)
            return 'green' 
    }
    //Verde+verde
    if(female.eyesColor =="green" && male.eyesColor=="green"){
        if(r<=75)
            return 'green'
        else if(r<=100)
            return 'blue'
    }
    //Marron+azul
    if(female.eyesColor =="brown" ||female.eyesColor =="blue"  && male.eyesColor =="brown" ||male.eyesColor =="blue"){
        if(r<=50)
            return 'brown'
        else if(r<=100)
            return 'blue' 
    }
    //Marrones + verdes
    if(female.eyesColor =="brown" ||female.eyesColor =="green"  && male.eyesColor =="brown" ||male.eyesColor =="green"){
        if(r<=50)
            return 'brown'
        else if(r<=87.5)
            return 'green' 
        else if(r<=100)
            return 'blue'
    }
        //Marron+azul
    if(female.eyesColor =="green" ||female.eyesColor =="blue"  && male.eyesColor =="green" ||male.eyesColor =="blue"){
        if(r<=50)
            return 'blue'
        else if(r<=100)
            return 'green' 
    }
    

}



export  { giveBirth }