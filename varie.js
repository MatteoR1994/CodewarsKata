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


console.log("Normale) Mi aspetto 'er' per <paperino>, ho ottenuto: ", getMiddle("paperino"));
console.log("Normale) Mi aspetto 'p' per <pippo>, ho ottenuto: ", getMiddle("pippo"));
console.log("Reduce) Mi aspetto 'b' per <libro>, ho ottenuto: ", getMiddle2("libro"));
console.log("Reduce) Mi aspetto 'as' per <casa>, ho ottenuto: ", getMiddle2("casa"));