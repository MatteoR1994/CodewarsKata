function narcissistic(value) {
    let numberToString = value.toString().split("");
    let pow = numberToString.length;
    let sum = 0;
    for (const char of numberToString) {
        sum += Math.pow(parseInt(char), pow);
    }
    return value === sum;
}

console.log("Mi aspetto 'true' con 153, ho ottenuto: ", narcissistic(153));
console.log("Mi aspetto 'false' con 196, ho ottenuto: ", narcissistic(196));