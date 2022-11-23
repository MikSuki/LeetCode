/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const map = new Map();
    let len = 0,
        has_central = false;
    words.forEach(word => {
        let v = map.get(word);
        if (v === undefined) v = 0;
        map.set(word, v + 1);
    });

    map.forEach((v, k) => {
        if (k[0] === k[1]) {
            if (v % 2 === 1 && !has_central) {
                has_central = true;
                --v;
            }
            if (v >= 2) {
                len += v - v % 2;
            }
        } else {
            const k2 = k[1] + k[0];
            let v2 = map.get(k2);
            if (v2 !== undefined) {
                len += Math.min(v, v2) * 2;
                map.set(k2, 0);
            }
        }
    });

    len *= 2;
    return has_central ? len + 2 : len;
};

let arr = 
["ll","lb","bb","bx","xx","lx","xx","lx","ll","xb","bx","lb","bb","lb","bl","bb","bx","xl","lb","xx"];

console.log(longestPalindrome(arr));

