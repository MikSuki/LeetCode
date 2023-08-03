function letterCombinations(digits: string): string[] {
    if (digits.length == 0) return []

    const letters: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const res: string[] = []

    recursive('', 0)

    return res

    function recursive(str: string, i: number) {
        if (i >= digits.length) {
            res.push(str)
            return
        }

        const letter: string = letters[parseInt(digits[i]) - 2]

        for (let j = 0; j < letter.length; ++j)
            recursive(str + letter[j], i + 1)
    }
};