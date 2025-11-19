let somma = 0;
let count = 0;
let min = parseInt(prompt(`inserisci il numero di partenza`));
let max = parseInt(prompt(`inserisci il numero di arrivo`));

for(let i=min; i<=max; i++){
    if(i % 2 == 0){
        console.log(i);
    } else{
        somma = somma + i;
        count++;
    }
}

console.log(`la somma del valore dei numeri dispari da ${min} a ${max} è pari a ${somma} e la loro media è ${somma / count}`);
