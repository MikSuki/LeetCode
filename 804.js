/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],
        map = new Map(),
        base = 'a'.charCodeAt();
    
    words.forEach(word => {
        let str = '';
        for(const c of word)
            str += code[c.charCodeAt() - base];
        map.set(str, 1);
    })
    return map.size;
};