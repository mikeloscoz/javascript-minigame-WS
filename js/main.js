import { Estralurtar } from "./estralurtar.js";
import { Gizaki } from "./gizaki.js";
import { Makina } from "./makina.js";

let zelaia=[]

//Gizakiak sartu
for(let i=1;i<51;i++){
    zelaia.push(new Gizaki("g"+i));
}
//Makinak sartu
for(let i=1;i<51;i++){
    zelaia.push(new Makina("m"+i));
}
//Estralurtarrak sartu
for(let i=1;i<51;i++){
    zelaia.push(new Estralurtar("e"+i));
}
//Zelaia 10 aldiz desordenatu
for(let i=0;i<10;i++){
    zelaia.sort((a, b) => 0.5 - Math.random());
}

let ronda =1;
//Jokua hasi
while(zelaia.length > 1){
   
    //Ronda bat
    if(zelaia.length%2 == 0){
        for(let i=0;i<zelaia.length;i=i+2){
            zelaia[i].borrokatu(zelaia[i+1]);
        }
    }else{
        let soberan = zelaia.pop();
        for(let i=0;i<zelaia.length;i=i+2){
            zelaia[i].borrokatu(zelaia[i+1]);
        }
        zelaia.push(soberan);
    }

    //Hildak eliminatu
    for(let i=0;i<zelaia.length;i++){
        if(zelaia[i].osasuna < 0 || zelaia[i].osasuna == 0){
            zelaia.splice(i,1);
        }
    }

    //Pantailaratu rondaren ondoren zelaiaren egoera
    console.log(ronda+ ". RONDAREN ONDOREN BIZIRIK DAUDEN JOKALARIAK ");
    console.log(zelaia);

    ronda++;
}

//Pantailaratu irabazlea
console.log("BUKATU DA, HAU DA IRABAZLEA: ")
zelaia.forEach(elem => console.log(elem.izena))


