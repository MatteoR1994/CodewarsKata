function incrementString(string) {
    const regex = RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    if (searchResult === null) {
        return string + "1";
    } else {
        let numberFoundString = searchResult[0];
        let numberLength = numberFoundString.length;
        String(42).padStart(numberLength, '0');
        const numberInt = parseInt(numberFoundString);
        const numberWithZeros = String(numberInt + 1).padStart(numberLength, '0');
        return string.substring(0, string.length - numberFoundString.length) + (numberWithZeros);
    }
}

console.log("Mi aspetto 'montagna89' con <montagna88>, ho ottenuto: ", incrementString("montagna88"));
console.log("Mi aspetto 'montagna1' con <montagna>, ho ottenuto: ", incrementString("montagna"));
console.log("Mi aspetto '55montagna1' con <55montagna>, ho ottenuto: ", incrementString("55montagna"));
console.log("Mi aspetto 'foobar002' con <foobar001>, ho ottenuto: ", incrementString("foobar001"));
console.log("Mi aspetto 'foobar001' con <foobar000>, ho ottenuto: ", incrementString("foobar000"));
console.log("Mi aspetto 'foobar100' con <foobar099>, ho ottenuto: ", incrementString("foobar099"));