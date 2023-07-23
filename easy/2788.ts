/**
    題目:
        2788. Split Strings by Separator

    描述:
        給一字串陣列和一分割字元
        求用分割字元切出來的字串

    時間:
        O(kn)

 */
function splitWordsBySeparator(words: string[], separator: string): string[] {
    const res: string[] = []
    words.forEach(s => {
        const arr = s.split(separator)
        arr.forEach(s => {
            if (s.length)
                res.push(s)
        })
    })
    return res
};