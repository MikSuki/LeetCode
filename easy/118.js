/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    let last = [1, 1],
        i = 2;
    const output = [
        [1], last
    ];

    while (i++ < numRows) {
        const cur = [1];
        for (let j = 1; j < last.length; ++j)
            cur.push(last[j - 1] + last[j]);
        cur.push(1);
        last = cur;
        output.push(cur);
    }
    return output;
};

console.log(generate(1))
console.log(generate(2))
console.log(generate(5))
console.log(generate(10))