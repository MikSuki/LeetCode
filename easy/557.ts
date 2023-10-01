/**
    557. Reverse Words in a String III
 */
function reverseWords(s: string): string {
    return s.split(' ').map(a => a.split('').reverse().join('')).join(' ')
};
