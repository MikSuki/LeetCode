/**
 * 排序 char 出現頻率
 * 1. 用 map 記每個 char 出現的次數
 * 2. 再用大小為 s.length 的 array 記住各種長度的 char * frequency
 * 3. output 即可
 * 
 * time complexity: O(n)
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    const map = new Map();
    const arr = new Array(s.length + 1).fill(null).map(() => '')
    let output = '';
    for(let i = 0; i < s.length; ++i){
        const v = map.get(s[i])
        if(!v) map.set(s[i], 1)
        else map.set(s[i], v + 1)
    }
    map.forEach((v, k) => {
        for(let i = 0; i < v; ++i)
            arr[v] += k;
    })
    for(let i = s.length; i >= 0; --i)
        output += arr[i]
        
    return output
};
