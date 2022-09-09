/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const getAlphabet = word => {
        const map = new Map();
        for(let i = 0; i < word.length; ++i){
            const c = word[i];
            if(map.has(c)) map.set(c, map.get(c) + 1);
            else map.set(c, 1);
        }
        return map;
    };
    const map = getAlphabet(magazine);
    let flag = true;
    for(let i = 0; i < ransomNote.length; ++i){
        const c = ransomNote[i],
            v = map.get(c);
        if(v === undefined || v <= 0){
            flag = false;
            break;
        }
        map.set(c, v - 1);
    }
    return flag
};

console.log(canConstruct('aa', 'ab'))