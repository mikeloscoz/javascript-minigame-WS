export {Jokalari}

class Jokalari {
    constructor(izen,indarra,osasuna) {
        this.izen = izen;
        this.indarra=indarra;
        this.osasuna=osasuna;
    }

    get izena(){
        return this.izen;
    }

    borrokatu(jokalari){

        if ( Math.random()* this.indarra > jokalari.indarra ){           
            jokalari.osasuna -= this.indarra;
        }else{
            this.osasuna -= jokalari.indarra;
        }

    }
}
