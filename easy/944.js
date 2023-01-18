/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let cnt = 0
    for (let i = 0; i < strs[0].length; ++i) {
        let j = strs.length - 1
        while (j > 0 && strs[j][i] >= strs[j - 1][i])
            --j
        if (j > 0) ++cnt
    }
    return cnt
};