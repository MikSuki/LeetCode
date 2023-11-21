/**
    1814. Count Nice Pairs in an Array
 */

function countNicePairs(nums: number[]): number {
    const map: Map<number, number> = new Map();
    const rev = (x: number) => parseInt(x.toString().split('').reverse().join(''));
    const comb2 = (n: number) => n * (n - 1) / 2;
    const MOD: number = 1e9 + 7;
    let res: number = 0;

    nums.forEach(num => {
        const diff = num - rev(num);
        if(!map.has(diff)) map.set(diff, 0);
        map.set(diff, map.get(diff) + 1);
    })

    for(const [k, v] of map)
        if(v >= 2) res = (res + comb2(v)) % MOD;

    return res;
};


// x + rev(y) = rev(x) + y
// x - rev(x) = y - rev(y)
