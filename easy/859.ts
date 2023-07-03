/**
    問題:
        給兩字串A, B，判斷能不能交換A任兩字元，使結果和B相同

    方法:
        算出每字元出現的次數以及A和B不同的字元次數
        2: 
            總出現次數要一樣，才能相等
        0: 
            A == B，要有某字元出現 >= 2次(才能交換)
        other: 
            都無法滿足交換後仍相等

    時間:
        O(n)
 */

function buddyStrings(s: string, goal: string): boolean {
    if (s.length != goal.length) return false

    const fA: number[] = new Array(26).fill(0)
    const fB = fA.slice()
    let diff: number = 0

    for (let i = 0; i < s.length; ++i) {
        fA[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        fB[goal[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        if (s[i] != goal[i]) ++diff
    }

    if (diff == 2) return fA.every((v, i) => v == fB[i])
    if (diff == 0) return fA.some(v => v >= 2)
    return false

};