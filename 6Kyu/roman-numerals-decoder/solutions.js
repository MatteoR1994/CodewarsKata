function solution(roman) {
    const romanStringIntValue = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    let sum = 0;
    let stringDivided = roman.split("");
    for (let i = 0; i < stringDivided.length; i++) {
        const currentValue = romanStringIntValue[stringDivided[i]];
        const nextValue = romanStringIntValue[stringDivided[i + 1]];
        if (currentValue >= nextValue) {
            sum += currentValue;
        } else if (currentValue < nextValue) {
            sum -= currentValue;
        } else if (currentValue !== undefined && nextValue === undefined) {
            sum += currentValue;
        }
    }
    return sum;
}

console.log("MMXXII mi aspetto 2022: ", solution("MMXXII"));
console.log("MCMXC mi aspetto 1990: ",solution("MCMXC"));
console.log("XXII mi aspetto 22: ",solution("XXII"));
console.log("IV mi aspetto 4: ",solution("IV"));
console.log("MDCLXVI mi aspetto 1666: ",solution("MDCLXVI"));
console.log("II mi aspetto 2: ",solution("II"));
console.log("XIX mi aspetto 19: ",solution("XIX"));
console.log("MMM mi aspetto 3000: ",solution("MMM"));