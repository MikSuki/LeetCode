/**
    問題:
        給一個 T/F 矩陣和 k
        求最長subarray之長度，裡面包含相同的T或F
        而這subarray最多可以把k個元素換成另一種(T->F / F->T)

    方法:
        sliding window
        分成目標為T或F處理
        由l和r標記window大小，r不斷右滑動，並記錄有幾種非目標的字元
        當window內有超過k個另一種字元時，移動l直到剩k種非目標字元

    時間:
        O(n)

 */

function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let res = 0

    slidingWindow('T')
    slidingWindow('F')

    return res

    function slidingWindow(target: string) {
        let [l, r, chg] = [0, 0, 0]

        while (r < answerKey.length) {
            if (answerKey[r] != target)
                ++chg
            while (chg > k && l <= r) {
                if (answerKey[l] != target)
                    --chg
                ++l
            }
            res = Math.max(res, r - l + 1)
            ++r
        }
    }
};