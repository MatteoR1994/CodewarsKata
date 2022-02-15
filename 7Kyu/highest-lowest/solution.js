function highAndLow(numbers) {
    const arrayString = numbers.split(" ");
    if (arrayString.length < 1) {
        return "Stringa vuota.";
    }
    let numbersArray = arrayString.map(e => e = parseFloat(e));
    return Math.max(...numbersArray) + " " + Math.min(...numbersArray);
}

console.log(highAndLow("1 2 -3 4 5"));