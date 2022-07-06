/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const len = s.length;
    let i = 0, sign = 1, res = 0;

    while(s[i] === ' '){
        ++i
    }
    // + / -
    if(s[i] === '-'){
        sign = -1;
        ++i;
    }
    else if(s[i] === '+'){
        ++i;
    }

    while(i < len){
        const code = s.charCodeAt(i) - 48;
        if(code < 0 || code > 9) break;
        res = res * 10 + code;
        ++i;
    }

    res *= sign;

    return Math.min(Math.max(-2147483648, res), 2147483647);
};


console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('+1'));
console.log(myAtoi("   +0 123"));
console.log(myAtoi("     +004500"));


