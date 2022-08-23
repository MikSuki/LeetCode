/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.blockSize = Math.ceil(Math.sqrt(nums.length));
    this.blockSum = [];
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if ((i+1) % this.blockSize === 0) {
            this.blockSum.push(sum);
            sum = 0;
        }
    }
    this.blockSum.push(sum);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const b = ~~(index / this.blockSize);
    this.blockSum[b] = this.blockSum[b] - this.nums[index] + val;
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const b_l = ~~(left / this.blockSize),
        b_r = ~~(right / this.blockSize),
        end_l = this.blockSize * (b_l + 1),
        start_r = this.blockSize * b_r;
    let sum = 0;

    for (let i = b_l + 1; i <= b_r - 1; ++i)
        sum += this.blockSum[i];
    if (b_l !== b_r) {
        for (let i = left; i < end_l; ++i)
            sum += this.nums[i];
        for (let i = start_r; i <= right; ++i)
            sum += this.nums[i];
    } else
        for (let i = left; i <= right; ++i)
            sum += this.nums[i];

    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

// const rsq = new NumArray([1, 3, 5]);
// console.log(rsq.sumRange(0, 2))
// rsq.update(1, 2);
// console.log(rsq.sumRange(0, 2))


// const rsq = new NumArray([-1, 2]);
// console.log(rsq.sumRange(0, 1))

// const rsq = new NumArray([-1]);
// console.log(rsq.sumRange(0, 0))
// rsq.update(0, 1);
// console.log(rsq.sumRange(0, 0))



test(
    ["NumArray", "sumRange", "update", "sumRange", "sumRange", "update", "update", "sumRange", "sumRange"], 
    [
        [
            [-28, -39, 53, 65, 11, -56, -65, -39, -43, 97]
        ],
        [5, 6],
        [9, 27],
        [2, 3],
        [6, 7],
        [1, -82],
        [3, -72],
        [3, 7],
        [1, 8],
    ]
)

function test(a1, a2) {
    let rsq;
    for (let i = 0; i < a1.length; ++i) {
        switch (a1[i]) {
            case 'NumArray':
                rsq = new NumArray(a2[i][0]);
                break;
            case 'sumRange':
                console.log(rsq.sumRange(a2[i][0], a2[i][1]));
                break;
            default:
                rsq.update(a2[i][0], a2[i][1]);
                // console.log(null)
        }
    }
}