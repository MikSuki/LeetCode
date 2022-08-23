/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length < 1) return [];
    
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const output = [];
    const len = digits.length;
    const permute = (string, idx) => {
        if(idx === len)
            output.push(string);
        else {
            for(let c of map[digits[idx]]){
                permute(string + c, idx + 1);
            }
        }
    }

    permute('', 0)
    return output;
}; 

console.log(letterCombinations("234"));
console.log(letterCombinations(""));
console.log(letterCombinations("3"));