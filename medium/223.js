/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const ovp_x = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    const ovp_y = Math.min(ay2, by2) - Math.max(ay1, by1);
    const ovp_area = ovp_x > 0 && ovp_y > 0 ? ovp_x * ovp_y : 0;
    return (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1) - ovp_area;
};