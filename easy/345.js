/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const str = s.split(''), indexes = [],
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
        repalace = (arr, i, j) => {let tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;};
    str.forEach((v, i )=> {if(vowels.includes(v)) indexes.push(i)});
    for(let i = 0; i < indexes.length / 2; ++i)
        repalace(str, indexes[i], indexes[indexes.length - 1 - i]);
    
    return str.join('');
};

const str = 'hello';
// const str = 'aA';
console.log(reverseVowels(str));