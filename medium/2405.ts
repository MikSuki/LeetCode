function partitionString(s: string): number {
    const alphabet: number[] = new Array(26).fill(0)
    const clear = () => alphabet.fill(0)
    let partions = 1

    for(let i = 0; i < s.length; ++i){
        const k = s.charCodeAt(i) - 97
        if(alphabet[k] != 0){
            clear()
            ++partions
        }
        alphabet[k] = 1
    }

    return partions
};