/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    const sub = 32;
    let len = s.length;
    for(let i = 1; i < len; i++){
        let c = 0;
        while(i-1-c >= 0 && i + c < len && Math.abs(s[i-1-c].charCodeAt() - s[i+c].charCodeAt()) === sub){
            ++c;
            console.log(i-1-c, i+c, s);
        }
        if(c !== 0){
            s = s.substring(0, i - c) + s.substring(i + c);
            len -= 2 * c;
            i -= 1 + c;
        }
    }
    return s;
};