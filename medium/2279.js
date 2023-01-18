/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const diff = []
    for (let i = 0; i < rocks.length; ++i) {
        const d = capacity[i] - rocks[i]
        if (d !== 0) diff.push(d)
    }
    diff.sort((a, b) => a - b)
    let i = -1
    while ((additionalRocks -= diff[i + 1]) >= 0)
        ++i
    return rocks.length - diff.length + i + 1
};