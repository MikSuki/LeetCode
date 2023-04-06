function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    function bs(nums: number[], target: number): number {
        let l = 0, r = nums.length -1, m;
        while(l <= r){
            m = ~~((l + r) / 2)
            if(nums[m] == target) {
                if(m - 1 < 0 || nums[m - 1] != target)
                    return m
                else
                    r = m - 1
            }
            else if(nums[m] > target) r = m - 1
            else l = m + 1
        }
        return nums[m] < target ? m + 1 : m
    };

    const res: number[] = new Array(spells.length).fill(0)
    const n = potions.length
    potions.sort((a, b) => a - b)
    spells.forEach((e, i) => {
        const target = Math.ceil(success / e)
        let idx = bs(potions, target)
        res[i] = n - idx
    })
    
    return res
};