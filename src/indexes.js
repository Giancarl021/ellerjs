function minimumAvailable(indexes, minimumValue) {
    const _indexes = [...indexes];
    _indexes.sort((a, b) => a - b);
    
    let index = _indexes.length + minimumValue;
    
    for (let i = 0; i < _indexes.length; i++) {
        const index = _indexes[i];
        const guess = i + minimumValue;

        if (index === guess) continue;

        return guess;
    }
    
    return index;
}

module.exports = {
    minimumAvailable
};
