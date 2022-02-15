function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) {
        return -1;
    }
    while (true) {
        sq++;
        if (Number.isInteger(Math.sqrt(sq))) {
            return sq;
        }
    }
}

console.log(findNextSquare(121));