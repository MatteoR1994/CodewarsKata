/**** 1) Ricavare carattere di mezzo di una stringa: se dispari, carattere nel mezzo; se pari, carattere prima e dopo il mezzo ****/

function getMiddle(string) {
    let stringLength = string.length;
    if (stringLength % 2 === 0) {
        let firstCharIndex = (stringLength / 2) - 1;
        let secondCharIndex = stringLength / 2;
        return string[firstCharIndex] + string[secondCharIndex];
    } else {
        let charIndex = Math.floor(stringLength / 2);
        return string[charIndex];
    }
}

function getMiddle2(string) {
    return [...string].reduce((p, c, i, a) => a.length % 2 === 0 ? string.substring((i/2),((i/2)+2)) : a[Math.floor(i/2)]);
}


// console.log("Normale) Mi aspetto 'er' per <paperino>, ho ottenuto: ", getMiddle("paperino"));
// console.log("Normale) Mi aspetto 'p' per <pippo>, ho ottenuto: ", getMiddle("pippo"));
// console.log("Reduce) Mi aspetto 'b' per <libro>, ho ottenuto: ", getMiddle2("libro"));
// console.log("Reduce) Mi aspetto 'as' per <casa>, ho ottenuto: ", getMiddle2("casa"));

/* ---------------------------------------------------------------------------------------------- */

/**** 2) Se una stringa ha un numero alla fine, e solo alla fine, allora lo incrementa di uno e ritorna la stringa modificata. Se non c'è, mette 1 alla fine. ****/

function incrementString(string) {
    const regex = RegExp(/\d+$/); // Controllo la presenza di più cifre alla fine della stringa.
    let searchResult = regex.exec(string); // Ritorno il primo elemento dell'array, che conterrà il numero trovato (come stringa).
    if (searchResult === null) {
        return string + "1";
    } else {
        let numberFoundString = searchResult[0];
        const numberInt = parseInt(numberFoundString);
        return string.substring(0, string.length - numberFoundString.length) + (numberInt + 1);
    }
}

// console.log("Mi aspetto 'montagna89' con <montagna88>, ho ottenuto: ", incrementString("montagna88"));
// console.log("Mi aspetto 'montagna1' con <montagna>, ho ottenuto: ", incrementString("montagna"));
// console.log("Mi aspetto '55montagna1' con <55montagna>, ho ottenuto: ", incrementString("55montagna"));

/* ---------------------------------------------------------------------------------------------- */

/**** 3) Esercizio numeri primi Nicolò. ****/

function primeTo(number) {
    const primeNumbers = [2];
    for (let i = 3; i <= number; i++) {
        let numberToCheck = i;
        let isPrime = true;
        for (const prime of primeNumbers) {
            if (numberToCheck % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }
    }
    return primeNumbers;
}

// console.log(primeTo(20));

/* ---------------------------------------------------------------------------------------------- */

/**** 4) Vowel Count (https://www.codewars.com/kata/54ff3102c1bad923760001f3) ****/

const regex = RegExp(/[aeiou]/g);
const vowels = regex.exec("ciao coome va");

const string = "ciao coome vaei";
const vowels2 = string.match(regex);

console.log(vowels[0]);
console.log(vowels2);