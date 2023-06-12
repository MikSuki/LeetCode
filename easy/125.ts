function isPalindrome(s: string): boolean {
    const regex = /[^a-z0-9]/g
    const ss = s.toLowerCase().replace(regex, '')
    let i = 0, j = ss.length - 1

    while(i < j){
        if(ss[i] != ss[j])
            return false
        ++i
        --j
    }
    return true
};