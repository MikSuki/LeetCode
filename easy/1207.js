/*
 * 給一個 array，檢查每個值出現的次數是否都不同
 * 用 map 記次數，再用 set 看看是否重複
 * Time: O(n)
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const map = new Map() // value: number of occurrences
    const set = new Set() // keep number of occurrences
    arr.forEach(e => {
        const v = map.get(e)
        if(!v) map.set(e, 1)
        else map.set(e, v + 1)
    })
    for(let number of map.values()){
        if(set.has(number)) return false;
        set.add(number)
    }
    return true;
};
