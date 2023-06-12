function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const lb: number = candies.reduce((res: number, v: number) => res = Math.max(res, v), 0) - extraCandies
    return candies.map(e => e >= lb)
};