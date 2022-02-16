function solution(number) {
    // if (number < 0) {
    //     return 0;
    // }
    // let multiples = [];
    // for (let i = 0; i < number; i++) {
    //     if (i % 3 === 0 || i % 5 === 0) {
    //         multiples.push(i);
    //     }      
    // }
    // return multiples.reduce((p, c) => p + c, 0);

    return number < 0 ? 0 : ([...new Array(number).keys()].reduce((p, c) => c % 3 === 0 || c % 5 === 0 ? p + c : p, 0));
    // return [...new Array(number < 0 ? 0 : number).keys()].reduce((p, c) => c % 3 === 0 || c % 5 === 0 ? p + c : p, 0);
}

console.log("Con -3 mi aspetto 0: ", solution(-3));
console.log("Con 2 mi aspetto 0: ", solution(2));
console.log("Con 10 mi aspetto 23: ", solution(10));
console.log("Con 14 mi aspetto 45: ", solution(14));