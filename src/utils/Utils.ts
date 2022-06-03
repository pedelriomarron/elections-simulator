import * as fs from 'fs';
import { City } from '../models/City';
import { Coalition } from '../models/Coalition';
import { Party } from '../models/Party';
import Politician from '../models/Politician';

/*
function createCSV(persons:Array<Person>,path:string){

     let myObj = {
        "rows": [
          [
            "ID",
            "NOMBRE",
            "DINASTIA",
            "COLOR DE OJOS",
            "EDAD"
          ]
        ]
      }

      persons.map(person=>{
        myObj.rows.push([
            person.id.toString(),
            person.name,
            person.dinasty.name,
            person.eyesColor,
            person.age.toString(),
        ])
      })

// choose another string to temporally replace commas if necessary
let stringToReplaceComas = '!!!!';

myObj.rows.map((singleRow) => {
  singleRow.map((value, index) => {
    singleRow[index] = value.replace(/,/g, stringToReplaceComas);
  })
})

let csv = `"${myObj.rows.join('"\n"').replace(/,/g, '","')}"`;
// // or like this
// let csv = `"${myObj.rows.join('"\n"').split(',').join('","')}"`;

csv = csv.replace(new RegExp(`${stringToReplaceComas}`, 'g'), ',');

// // 2. Another way - if you don't need the double quotes in the generated csv and you don't have comas in rows' values
// let csv = myObj.rows.join('\n')

fs.writeFile(path, csv, 'utf8', function(err) {
  if (err) {
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else {
    console.log('It\'s saved!');
  }
});
    
}
*/


function personalRounder(num:number):number{
  return Math.round((num + Number.EPSILON) * 100) / 100
}

type ExtendedProperties<T> = { [P in keyof T]: T[P] };
function MyClassFactory<T>(nameClass: string): Object & ExtendedProperties<T> {

    switch (nameClass) {
        case "Coalition":
            return new Coalition() as Coalition & ExtendedProperties<T>;
            break;
        case "Party":
            return new Party() as Party & ExtendedProperties<T>;
            break;
        case "City":
            return new City() as City & ExtendedProperties<T>;
            break;
        default:
            break;
    }
}

function jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
}

function generatePolitic(names,lastnames){

  let p = new Politician()
  p.name = names[Math.floor(Math.random()*names.length)];
  p.lastname = lastnames[Math.floor(Math.random()*lastnames.length)];
  return p
}

export {personalRounder,jsonConcat,MyClassFactory,generatePolitic}