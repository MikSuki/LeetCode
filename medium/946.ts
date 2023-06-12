function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = []
    const n = pushed.length
    let j = 0 // index of poped

    for(let i = 0; i < n; ++i){
        stack.push(pushed[i])
        while(stack.length && stack[stack.length - 1] == popped[j]){
            stack.pop()
            ++j
        }
    }

    return j == n
};