/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const sign = x < 0 ? -1 : 1;
    return outOfBound(
        sign * parseInt(x.toString().split('').reverse().join(''))
    );
};

const b1 = -0x80000000 ;
const b2 = 0x7fffffff;

function outOfBound(x){
    if(x < b1 || x > b2) return 0;
    return x;
}


console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(1563847412));