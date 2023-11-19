/**
    1887. Reduction Operations to Make the Array Elements Equal
 */
function reductionOperations(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const n: number = nums.length;
    let res: number = 0;
    let diff: number = 0; 
    let i: number = 0;

    while(i < n){
        let j: number = i;
        while(j < n && nums[j + 1] == nums[j])
            ++j;
        
        res += diff * (j - i + 1);
        ++diff;
        i = j + 1;
    }


    return res;

};
