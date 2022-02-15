function isIsogram(str) {
    if (str === "") {
        return true;
    }
    str = str.toLowerCase();
    let oldCharToSearch = str[0];
    for (let i = 1; i < str.length; i++) {
        const remainingString = str.substring(i);
        if (remainingString.includes(oldCharToSearch)) {
            return false;
        }
        oldCharToSearch = str[i];
    }
    return true;
}

console.log(isIsogram("isogram"));