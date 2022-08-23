/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // return factorial(m + n - 2, 1) / factorial(m - 1, 1) / factorial(n - 1, 1);

    // function factorial(n, v) {
    //     if (n <= 1) return v;
    //     return factorial(n - 1, v * n);
    // }

    let dp = new Array(m).fill(new Array(n).fill(1));
    for (let i = 1; i < m; ++i)
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    return dp[m - 1][n - 1];
};


// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {
//     return factorial(m + n - 2, 1) / factorial(m - 1, 1) / factorial(n - 1, 1);

//     function factorial(n, v) {
//         if (n <= 1) return v;
//         return factorial(n - 1, v * n);
//     }
// }

console.log(uniquePaths(7, 3))
console.log(uniquePaths(3, 2));