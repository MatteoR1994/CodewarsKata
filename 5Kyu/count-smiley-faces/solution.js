function countSmileys(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 2) {
            if ( (arr[i][0] === ":" || arr[i][0] === ";") &&
                 (arr[i][1] === ")" || arr[i][1] === "D")) {
                count++;
            }
        }
        if (arr[i].length === 3) {
            if ( (arr[i][0] === ":" || arr[i][0] === ";") &&
                 (arr[i][1] === "-" || arr[i][1] === "~") &&
                 (arr[i][2] === ")" || arr[i][2] === "D")) {
                count++;
            }
        }     
    }
    return count;
}

console.log("Mi aspetto 0, ho ottenuto: ", countSmileys([]));
console.log("Mi aspetto 4, ho ottenuto: ", countSmileys([':D',':~)',';~D',':)']));
console.log("Mi aspetto 2, ho ottenuto: ", countSmileys([':)',':(',':D',':O',':;']));
console.log("Mi aspetto 1, ho ottenuto: ", countSmileys([';]', ':[', ';*', ':$', ';-D']));