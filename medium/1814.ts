/**
    1814. Count Nice Pairs in an Array
 */

function countNicePairs(nums: number[]): number {
    const map: Map<number, number> = new Map();
    const rev = (x: number) => parseInt(x.toString().split('').reverse().join('')); // reverse integer
    const MOD: number = 1e9 + 7;
    let res: number = 0;

    // count each diff
    nums.forEach(num => {
        const diff = num - rev(num);
        const t: number = map.get(diff) || 0;
        res = (res + t) % MOD;
        map.set(diff, t + 1);
    })

    return res;
};


// x + rev(y) = rev(x) + y
// x - rev(x) = y - rev(y)
