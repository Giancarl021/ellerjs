function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBoolean() {
    return Math.floor() > 0.5;
}

module.exports = {
    int: randomInteger,
    bool: randomBoolean
};
