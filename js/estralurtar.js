import { Jokalari } from "./jokalari.js";


class Estralurtar extends Jokalari{
    constructor(izen) {
        super(izen,Math.ceil(Math.random()*85),150)
    }

    get izena(){
        let arrayIzen=this.izen.split('');
        let alderantziz = arrayIzen.reverse();
        return (alderantziz.join(""));
    }
    
}

export {Estralurtar}