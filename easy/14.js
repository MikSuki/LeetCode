/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const len = strs.length;
    if (len === 0) return '';
    if (len === 1) return strs[0];
    let i = -1,
        f = true;

    while (f) {
        ++i;
        const c = strs[0][i];
        for (let j = 1; j < len; ++j) {
            if (i >= strs[j].length || strs[j][i] !== c) {
                --i;
                f = false;
                break;
            }
        }
    }
    return strs[0].substring(0, i + 1);
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["ab", "a"]));
// console.log(longestCommonPrefix([""]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));