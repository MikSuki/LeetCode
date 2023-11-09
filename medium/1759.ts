/**
    # 1759. Count Number of Homogenous Substrings
 */
function countHomogenous(s: string): number {
    let ch: string = s[0];
    let len: number = 1;
    let res: number = 1;
    let i: number = 1;
    const MOD: number = 1e9 + 7;

    while (i < s.length) {
        if (s[i] == ch) {
            len = (len + 1) % MOD;
        }
        else {
            len = 1;
            ch = s[i];
        }

        res = (res + len) % MOD;
        ++i;
    }

    return res;
};
