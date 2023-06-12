function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, b) => a - b)
    const prog = arr[1] - arr[0]
    for(let i = 2; i < arr.length; ++i)
        if(arr[i] - arr[i - 1] != prog)
            return false
    return true
};