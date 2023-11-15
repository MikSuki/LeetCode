/**
    # 1846. Maximum Element After Decreasing and Rearranging
 */

function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let floor = 1;
    for(let i = 0; i < arr.length; ++i)
        if(arr[i] >= floor) ++floor;

    return floor - 1;    
};
