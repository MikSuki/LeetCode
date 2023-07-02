/**
    問題:   
        有n棟大樓，有許多員工想更換到別間大樓居住
        申請的情況由一個requests陣列表示
        找出最多能同意幾個

        而每間大樓都是滿員的情況，也就是大樓1要讓2個人到大樓2住，那大樓2勢必也得空出2個位置才行

    方法:
        遍歷每種可能，然後檢查每種可能是否"移出 = 移入"

        1. 從頭開始檢查
            k = 1 ~ (1 >> |requests|), ++k

        2. 根據 bits數檢查，也就是 k = m ~ 1, --k
            這邊使用 Gopser's Hack(k, m)
                執行m-bit state有k 1-bits的各種可能

    時間:
        O(n * (2 ^ |requests|))

 */

function maximumRequests(n: number, requests: number[][]): number {
    const m: number = requests.length
    const mem: number[] = new Array(n)

    for (let k = m; k > 0; --k) {
        // Gosper's Hack
        let state: number = (1 << k) - 1;
        while (state < (1 << m)) {
            if (check(state))
                return k

            const c: number = state & - state;
            const r: number = state + c;
            state = (((r ^ state) >> 2) / c) | r;
        }
    }

    return 0

    function check(state: number): boolean {
        mem.fill(0)

        for (let i = 0; i < m; ++i) {
            if ((state >> i) & 1) {
                ++mem[requests[i][0]]
                --mem[requests[i][1]]
            }
        }

        return mem.every(e => e == 0)
    }
};