function arrayDiff(a, b) {
    if(b.length === 0) {
        return a;
    }
    if (b.length === 1) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[0]) {
                a.splice(i, 1);
            }
        }
    }
    for (const elementB of b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === elementB) {
                a.splice(i, 1);
            }
        }
    }
    return a;
    //return a.filter(e => !b.includes(e));
}

console.log("Mi aspetto [] con a:[] - b:[4, 5], ho ottenuto: ", arrayDiff([], [4, 5]));
console.log("Mi aspetto [4] con a:[3, 4] - b:[3], ho ottenuto: ", arrayDiff([3, 4], [3]));
console.log("Mi aspetto [1, 8, 2] con a:[1, 8, 2] - b:[], ho ottenuto: ", arrayDiff([1, 8, 2], []));
console.log("Mi aspetto [3] con a:[1, 2, 3] - b:[1, 2], ho ottenuto: ", arrayDiff([1, 2, 3], [1, 2]));
console.log("Mi aspetto [2] con a:[1, 2, 3] - b:[1, 3, 4, 5, 6], ho ottenuto: ", arrayDiff([1, 2, 3], [1, 3, 4, 5, 6]));
console.log("Mi aspetto [1] con a:[1, 2, 2] - b:[2], ho ottenuto: ", arrayDiff([1, 2, 2], [2]));
console.log("Mi aspetto [3] con a:[3, 4, 4] - b:[4], ho ottenuto: ", arrayDiff([3, 4, 4], [4]));