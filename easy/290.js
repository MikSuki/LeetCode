/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    const map1 = new Map(), map2 = new Map();
    const arr = s.split(' ');
    const patt_arr = pattern.split('');
    if(arr.length !== patt_arr.length) return false;
    let f = true;
    patt_arr.every((c, i) => {
        const v1 = map1.get(c);
        const v2 = map2.get(arr[i]);
        if(v1 === undefined && v2 === undefined) {map1.set(c, arr[i]); map2.set(arr[i], c);}
        else if(v2 !== c || v1 !== arr[i]) {f = false; return false;}
        return true;
    });
    return f;
};