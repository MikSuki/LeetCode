/**
 * @param {string} s
 * @return {string}
 */
// epand around center
var longestPalindrome = function(s) {
    const len = s.length;
    let lps = '';

    for (let i = len - 1; i >= 0; --i) {
        const s1 = expand(s, i, i);
        const s2 = expand(s, i, i + 1);
        if (lps.length <= s1.length) lps = s1;
        if (lps.length <= s2.length) lps = s2;
    }

    return lps;
};

function expand(s, left, right) {
    const len = s.length;
    while (left >= 0 && right < len && s[left] === s[right]) {
        --left;
        ++right;
    }
    return s.slice(left + 1, right);
}


// dp
// var longestPalindrome = function(s) {
//     const len = s.length,
//         dp = new Array(len).fill(null).map(() => new Array(len).fill(false));
//     let lps = '';
//     for (let i = 0; i < len; ++i) {
//         dp[i][i] = true;
//         lps = s.slice(i, i + 1);
//     }
//     for (let i = 0; i < len - 1; ++i) {
//         if (s[i] === s[i + 1]) {
//             dp[i][i + 1] = true;
//             if (lps.length < 2)
//                 lps = s.slice(i, i + 2);
//         }
//     }
//     for (let i = len; i >= 0; --i)
//         for (let j = i + 2; j < len; ++j) {
//             dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
//             if (dp[i][j] && lps.length <= j - i + 1)
//                 lps = s.slice(i, j + 1);
//         }
//     return lps;
// };


// const s1 = 'babad';
// console.log(longestPalindrome(s1));

const s1 = 'cbbd';
console.log(longestPalindrome(s1));