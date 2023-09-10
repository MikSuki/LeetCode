/**
    621. Task Scheduler
 */
function leastInterval(tasks: string[], n: number): number {
    if (n == 0) return tasks.length
    const cnt: number[] = new Array(26).fill(0)
    let max: number = 0
    tasks.forEach((char: string) => {
        const idx = char.charCodeAt(0) - 65
        if (++cnt[idx] > max)
            max = cnt[idx]
    })
    const m: number = cnt.filter(v => v == max).length
    // return max + Math.max((max - 1) * n, tasks.length - max * m) + (m - 1)
    return Math.max(max + (max - 1) * n + (m - 1), tasks.length)
};