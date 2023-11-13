/**
    # 2785. Sort Vowels in a String

    O(nlogn) sorting approach
 */

function sortVowels(s: string): string {
    const vowels: Set<string> = new Set("aeiouAEIOU".split(''));
    const pos: number[] = [];
    const char: string[] = [];
    const res: string[] = new Array(s.length).fill('');
    for(let i = 0; i < s.length; ++i){
        if(vowels.has(s[i])){
            pos.push(i);
            char.push(s[i]);
        }
        else 
            res[i] = s[i];
    }

    // sortin vowels
    char.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    for(let i = 0; i < pos.length; ++i){
        res[pos[i]] = char[i];
    }

    return res.join('');
};
