function generateHashtag(str) {
    if (str === "") {
        return false;
    }
    let hasAllSpaces = true;
    for (const char of str) {
        if (char !== " ") {
            hasAllSpaces = false;
        }
    }
    if (hasAllSpaces) {
        return false;
    }
    let resultString = "#";
    const trimmedString = str.trim();
    const stringArray = trimmedString.split(" ");
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== "") {
            const upperCaseString = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
            resultString += upperCaseString;
        }
    }
    if (resultString.length > 140 || resultString.length === 0) {
        return false;
    }
    return resultString;
}


console.log("Con '' mi aspetto <false> (stringa vuota), ho ottenuto: ", generateHashtag(""));
console.log("Con ' '.repeat(200)' mi aspetto <false> (sempre stringa vuota), ho ottenuto: ", generateHashtag(" ".repeat(200)));
console.log("Con 'Do We have A Hashtag' mi aspetto <#DoWeHaveAHashtag>, ho ottenuto: ", generateHashtag("Do We have A Hashtag"));
console.log("Con 'Codewars' mi aspetto <#Codewars>, ho ottenuto: ", generateHashtag("Codewars"));
console.log("Con 'Codewars Is Nice' mi aspetto <#CodewarsIsNice>, ho ottenuto: ", generateHashtag("Codewars Is Nice"));
console.log("Con 'Codewars is nice' mi aspetto <#CodewarsIsNice>, ho ottenuto: ", generateHashtag("Codewars is nice"));
 console.log("Con 'code + ' '.repeat(140)' mi aspetto <#CodeWars>, ho ottenuto: ", generateHashtag("code" + " ".repeat(140) + "wars"));
console.log("Con 'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat' mi aspetto <false> (più lunga di 140), ho ottenuto: ", generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log("Con 'a.repeat(139)' mi aspetto <#A + a.repeat(138)>, ho ottenuto: ", generateHashtag("a".repeat(139)));
console.log("Con 'a.repeat(140)' mi aspetto <false> (più lunga di 140), ho ottenuto: ", generateHashtag("a".repeat(140)));