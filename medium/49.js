/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Map(),
        output = [];
    strs.forEach(e => {
        const key = e.split('').sort().join(''),
            arr = map.get(key);
        if(arr !== undefined) arr.push(e);
        else map.set(key, [e]);
    })
    map.forEach(v => output.push(v));
    return output;
};