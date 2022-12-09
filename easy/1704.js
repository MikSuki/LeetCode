/**
 * 檢查切半的字串母音數是否相同==
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, };
    const cnt = str => {
        let c = 0;
        for(let i = 0; i < str.length; ++i)
            if(vowels[str[i]]) ++c;
        return c;
    };
    const a = s.slice(0, s.length / 2);
    const b = s.slice(s.length / 2);
    return cnt(a) === cnt(b);
};