/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const output = [];
    let word = '';
    s.split('').forEach(e => {
        if(e !== ' ') word += e;
        else{
            if(word !== ('')) output.unshift(word);
            word = '';
        }
    })
    if(word !== '') output.unshift(word);
    return output.join(' ');
}