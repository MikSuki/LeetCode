/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    const cvt = (arr) => {
        return arr.reduce((o, c) => {
            o += c;
            return o;
        }, '');
    }
    return cvt(word1) === cvt(word2);
};