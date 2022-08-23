/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const stack = [];
    let remain = nums.length;

    nums.forEach(num => {
        while (stack.length > 0 && num < stack[stack.length - 1] && remain > k) {
            stack.pop();
            --remain;
        }

        stack.push(num);
    });

    return stack.slice(0, k);
};

console.log(mostCompetitive([3,5,2,6], 2))
console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4))
console.log(mostCompetitive([71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], 3))