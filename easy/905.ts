/**
  905. Sort Array By Parity
 */
function sortArrayByParity(nums: number[]): number[] {
  const q: number[] = []
  let k: number = 0
  for(let i = 0; i < nums.length; ++i){
    if(nums[i] % 2 == 0){
      nums[k] = nums[i]
      ++k
    }
    else
      q.push(nums[i])
  }

  for(let i = 0; i < q.length; ++i){
    nums[k] = q[i]
    ++k
  }

  return nums
};
