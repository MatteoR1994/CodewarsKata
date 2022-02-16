function incrementString(string) {
    const regex = RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    if (searchResult === null) {
        return string + "1";
    } else {
        let numberFoundString = searchResult[0];
        const regex2 = RegExp(/^0+/);
        let searchResultZeros = regex2.exec(numberFoundString);
        if (searchResultZeros === null) {
            const numberInt = parseInt(numberFoundString);
            return string.substring(0, string.length - numberFoundString.length) + (numberInt + 1);
        } else {
            const numberInt = parseInt(numberFoundString);
            return string.substring(0, string.length - numberFoundString.length) + searchResultZeros[0] + (numberInt + 1);
        }
    }
}

console.log("Mi aspetto 'montagna89' con <montagna88>, ho ottenuto: ", incrementString("montagna88"));
console.log("Mi aspetto 'montagna1' con <montagna>, ho ottenuto: ", incrementString("montagna"));
console.log("Mi aspetto '55montagna1' con <55montagna>, ho ottenuto: ", incrementString("55montagna"));
console.log("Mi aspetto 'foobar002' con <foobar001>, ho ottenuto: ", incrementString("foobar001"));