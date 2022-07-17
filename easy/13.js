/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //                0    1    2    3    4    5    6 
    const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'],
        values = [1000, 500, 100, 50, 10, 5, 1];
    const len = s.length;
    let s_i = 0,
        symb_i = 0,
        output = 0;
    while (s_i < len) {
        if (s[s_i] === symbols[symb_i]) {
            ++s_i;
            output += values[symb_i];
        } else {
            const j = symb_i % 2 === 0 ? 2 : 1;
            if (s[s_i] === symbols[symb_i + j] && s[s_i + 1] === symbols[symb_i]) {
                output += values[symb_i] - values[symb_i + j];
                s_i += 2;
            } else {
                ++symb_i;
            }
        }
    }
    return output;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));