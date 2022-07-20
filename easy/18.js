/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length;
    if(len % 2) return false;
    const arr = s.split(''),
        map = new Map();
    map.set('}', '{');
    map.set(')', '(');
    map.set(']', '[');

    for (let i = 0; i < arr.length; ++i) {
        const c = arr[i],
            v = map.get(c);
        if (v !== undefined) {
            if (arr[i - 1] === v){
                arr.splice(i - 1, 2);
                i -= 2;
            }
            else 
                break;
        }
    }

    return arr.length === 0;
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('({[]})'))

