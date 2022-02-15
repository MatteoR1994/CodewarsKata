function solution(number) {
    if (number < 0) {
        return 0;
    }
    let multiples = [];
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
        }      
    }
    return multiples.reduce((p, c) => p + c, 0);

    // let range = [...new Array(number).keys()];
    // return number < 0 ? 0 : (range.reduce((p, c) => c % 3 === 0 || c % 5 === 0 ? p + c : p, 0));

    // return number < 0 ? 0 : ([...new Array(number).keys()].reduce((p, c) => c % 3 === 0 || c % 5 === 0 ? p + c : p, 0));
}

console.log(solution(10));