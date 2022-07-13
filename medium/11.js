/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length <= 1) return 0;

    const getArea = (i, j) => Math.min(height[i], height[j]) * (j - i);
    let left = 0,
        right = height.length - 1,
        max = getArea(left, right);

    while (left < right) {
        if (height[left] > height[right])
            --right;
        else
            ++left;

        max = Math.max(max, getArea(left, right));
    }
    return max;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));