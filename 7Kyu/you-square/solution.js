var isSquare = function (n) {
    return n >= 0 && Math.sqrt(n) % 1 === 0; // fix me
}

console.log(isSquare(25));