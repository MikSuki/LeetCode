/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    //                0    1    2    3    4    5    6 
    const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'],
        values = [1000, 500, 100, 50, 10, 5, 1];

    let i = 0,
        j,
        output = '';

    while (num > 0) {
        if (num >= values[i]) {
            num -= values[i];
            output += symbols[i];
        } else if (i !== 6) {
            j = i % 2 === 0 ? 2 : 1;
            if (num >= values[i] - values[i + j]) {
                num -= values[i] - values[i + j];
                output += symbols[i + j] + symbols[i];
                f = false;
            } else
                ++i;
        }
    }
    return output;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));