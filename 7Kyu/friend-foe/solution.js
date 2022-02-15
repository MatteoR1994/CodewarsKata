function friend(friends) {
    return friends.filter(e => e.length === 4);
}

const names = ["Ryan", "Kieran", "Jason", "Yous"];

console.log(friend(names));