/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const arr = new Array(numRows).fill(null).map(() => '');
    const len = s.length;
    const m = 2 * numRows - 2;

    for (let i = 0; i < numRows; ++i) {
        let j = i;
        let k = numRows - 1;
        const diff = numRows - 1 - i;
        if (i === 0 || i === numRows - 1) {
            while (j < len) {
                arr[i] += s[j];
                j += m;
            }
        } else {
            while (j < len) {
                arr[i] += s[j];
                if (s[k + diff] !== undefined)
                    arr[i] += s[k + diff];
                j += m;
                k += m;
            }
        }
    }
    return arr.reduce((total, str) => total + str, '');
}





// console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));