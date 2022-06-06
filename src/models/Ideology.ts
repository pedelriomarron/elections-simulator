import { personalRounder } from "../utils/Utils";

export default class Ideology {

    economy:number // 0 => Totalitarismo  //  10 => Liberalismo (x)
    social:number; // 0 => Conservador  //  10 => Progresista (y)


    constructor(economy:number,social:number){
        this.economy = economy;
        this.social=social
    }

    getDistanceSocial(ideology:Ideology){
        return Math.abs(this.social - ideology.social)
    }

    getDistanceEconomy(ideology:Ideology){
        return Math.abs(this.economy -ideology.economy )
    }

    getDistance(ideology:Ideology):number{
        return personalRounder(Math.sqrt((ideology.economy-this.economy)*(ideology.economy-this.economy)+(ideology.social-this.social)*(ideology.social-this.social)));
    }

    getName():string{
        let array:Array<{name:string,xmin:number,xmax:number,ymin:number,ymax:number}> = []

        array.push({name:"Centro",xmin:20,xmax:80,ymin:20,ymax:80})
        array.push({name:"Totalitario",xmin:0,xmax:40,ymin:0,ymax:40})
        array.push({name:"Conservador",xmin:60,xmax:100,ymin:0,ymax:40})
        array.push({name:"Progresista",xmin:0,xmax:40,ymin:60,ymax:100})
        array.push({name:"Liberal",xmin:60,xmax:100,ymin:60,ymax:100})


        let resfilter = array.filter(f=> this.economy >= f.xmin && this.economy <= f.xmax && this.social >= f.ymin && this.social <= f.ymax) 
        let res=""
        resfilter.map(a=>{
            res=res+a.name+"-"
        })
        return res.slice(0, -1)



    }

}


