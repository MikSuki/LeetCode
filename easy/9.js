 /**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     const str = x.toString();
//     let left = '', right = '';
//     let i = 0, j = str.length - 1;

//     while(i < j){
//         left += str[i++];
//         right += str[j--];
//     }
//     return left === right;
// };

var isPalindrome = function(x) {
    if (x < 0) return false;
    const str = x.toString();
    let i = 0, j = str.length - 1;
    while(i < j){
        if(str[i] !== str[j])
            break;
        ++i;
        --j;
    }
    return !(i < j);
};

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(23));
console.log(isPalindrome(3));
console.log(isPalindrome(1001));