/**
    題目:
        50. Pow(x, n)

    描述:
        自製次方函數

    方法:   
        tail recursion

        2^10
        = 4 ^ 5
        = 4 * (4 ^ 4)
        = 4 * (16 ^ 2)

        n is even -> pow(x * x, n / 2)
        n is odd -> pow(x, x +/- 1)

    時間:
        O(logn)

 */

function myPow(x: number, n: number): number {
    return recursive(x, n, 1)

    function recursive(x: number, n: number, acc: number): number {
        if (n == 0) return acc
        if (n % 2 == 0) return recursive(x * x, n / 2, acc)
        if (n > 0)  return recursive(x, n - 1, acc * x)
        return recursive(x, n + 1, acc / x)
    }
};
