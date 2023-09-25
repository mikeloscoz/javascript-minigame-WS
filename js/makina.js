import { Jokalari } from "./jokalari.js";


class Makina extends Jokalari{
    constructor(izen) {
        super(izen,Math.ceil(Math.random()*100),130)
    }

    
}

export {Makina}