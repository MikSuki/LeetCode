function removeStars(s: string): string {
    const stack: string[] = []
    for(let i = 0; i < s.length; ++i){
        if(s[i] != '*')
            stack.push(s[i])
        else
            stack.pop()
    }
    return stack.join('')
};