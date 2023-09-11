/**
    739. Daily Temperatures
 */
function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[][] = []
    const last = arr => arr[arr.length - 1]
    const n: number = temperatures.length
    const res: number[] = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        const cur: number[] = [temperatures[i], i]
        while (stack.length && cur[0] > last(stack)[0]) {
            const t: number[] = stack.pop()
            res[t[1]] = i - t[1]
        }
        stack.push(cur)
    }
    return res
};