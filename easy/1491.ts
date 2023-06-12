function average(salary: number[]): number {
    const min: number = salary.reduce((acc: number, v: number) => Math.min(acc, v), 1000000)
    const max: number = salary.reduce((acc: number, v: number) => Math.max(acc, v), 1000)
    const sum: number = salary.reduce((acc: number, v: number) => acc + v, 0)
    return (sum - min - max) / (salary.length - 2)
};