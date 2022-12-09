/**
 * 檢查兩字串是否類似
 * 可以做兩種 operations: 交換 and 互換字元
 * 
 * 所以看 出現的字母 是否都一樣 然後 各種出現次數 都相同即可
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    // map value + 1
    const addOne = (map, key) => {
        const exist = map.get(key);
        if(exist === undefined) map.set(key, 1);
        else map.set(key, exist + 1);
    }
    // count each characters
    const countChar = str => {
        const map = new Map();
        for(let i = 0; i < str.length; ++i)
            addOne(map, str[i]);
        return map;
    }; 
    // convert occurence to key, value: total of this occurence
    const countOcc = map => {
        const new_map = new Map();
        for(const cnt of map.values())
            addOne(new_map, cnt);
        return new_map;
    };

    const hasSameKey = (m1, m2) => {
        for(const k of m1.keys())
            if(!m2.has(k)) return false;
        return true;
    };

    const cmpMap = (m1, m2) => {
        for(const [k, v] of m1)
            if(v !== m2.get(k)) return false;
        return true;
    }
    const m1 = countChar(word1);
    const m2 = countChar(word2);

    return hasSameKey(m1, m2) && cmpMap(countOcc(m1), countOcc(m2));
};