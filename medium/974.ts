function subarraysDivByK(nums: number[], k: number): number {
    const mods: number[] = new Array(k).fill(0)
    mods[0] = 1
    let pref_mod: number = 0
    
    return nums.reduce((acc: number, num: number) => {
        pref_mod = (pref_mod + num % k + k) % k
        acc += mods[pref_mod]
        mods[pref_mod]++
        return acc
    }, 0)
};