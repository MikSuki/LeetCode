/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let cnt = 0
    const arr = word.split('').map(e => {
        const v = e >= 'A' && e <= 'Z'
        if (v) ++cnt
        return v
    })
    if (cnt === 0 || cnt === word.length || (cnt === 1 && arr[0] && !arr[1])) return true
    return false
};