/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let str = num.toString().split('');
    let i = 0;
    while(i < str.length){
        if(str[i] === '6'){
            str[i] = '9';
            break;
        }
        ++i;
    }
    return parseInt(str.join(''));
};