/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
    const map = new Map();
    arr.sort((a, b) => a - b);
    arr.forEach((e, idx) => {
        let count = 1;
        let i = 0, j = idx - 1;
        while (i <= j) {
            const product = arr[i] * arr[j];
            if (product < e) ++i;
            else if (product > e) --j;
            else {
                const m = arr[i] === arr[j] ? 1 : 2;
                count += m * map.get(arr[i]) * map.get(arr[j]);
                ++i;
                --j;
            }
        }
        map.set(e, count);
        if(i !== j){
            if(arr[i] * arr[i] === e) ++count;
            else if(arr[j] * arr[j] === e) ++count;
        }
    });

    let ans = 0;
    map.forEach(v => ans += v);
    return ans % (10 ** 9 + 7);
};

console.log(numFactoredBinaryTrees([2,4]));
console.log(numFactoredBinaryTrees([2,4,5,10]));
console.log(numFactoredBinaryTrees([2,4,5,10, 20]));