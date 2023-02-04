function gcdOfStrings(str1: string, str2: string): string {
    const swap = () => {
        const tmp = str1
        str1 = str2
        str2 = tmp
    }
    // s1.length > s2.length
    const gcd = (s1: string, s2: string) => {
        let start = 0
        const move = s2.length
        while(s1.length - start >= move){
            if(s1.substring(start, start + move) != str2)
                return ""
            start += move
        }
        if(s1.length - start == 0) return s2
        return s1.substring(start)
    }
        
    while(true){
        if(str1.length < str2.length) 
            swap()
        const res = gcd(str1, str2)
        if(res == str2) return str2
        if(res == "") return ""
        str1 = str2
        str2 = res
    }
};