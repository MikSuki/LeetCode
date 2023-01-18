/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let idx = 0
    let sum = 0
    let sub_sum = 0
    gas.forEach((e, i) => {
        const v = e - cost[i]
        sum += v
        if (sub_sum < 0) {
            if (v > 0) {
                sub_sum = v
                idx = i
            }
        } else
            sub_sum += v
    })
    return sum < 0 ? -1 : idx
};