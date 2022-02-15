function findShort(s) {
    const arrayOfWords = s.replace("'", "").split(" ");
    return arrayOfWords.reduce((p, c) => c.length < p ? c.length : p, +Infinity);
}

console.log(findShort("ciaoapapsiemdidisjsjs comedjduchdnds"));