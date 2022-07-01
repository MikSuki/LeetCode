/**
 * by sliding window
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0;
    let l = 0;
    for (let r = 0; r < s.length; ++r) {
        const val = map.get(s[r]);
        if (val !== undefined)
            l = Math.max(val + 1, l);
        map.set(s[r], r);
        max = Math.max(max, r - l + 1);
    }
    return max;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));