function randomNumber(x) {
    let r1 = Math.floor((Math.random() * (x - 1)) + 1);
    let r2 = Math.floor((Math.random() * (x - 1)) + 1);
    let r3 = Math.floor((Math.random() * (x - 1)) + 1);

    return (r1+r2+r3) + 100000000;
}

export default randomNumber

// return Math.random() * (max - min) + min