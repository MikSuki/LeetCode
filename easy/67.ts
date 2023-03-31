function addBinary(a: string, b: string): string {
    // swap
    if(b.length > a.length){
       const tmp = a
       a = b
       b = tmp 
    }
    const n = a.length
    let res: string = ""
    let sum: string
    let carry: string = "0"
    const add = () => {
        if(sum == '0') sum = '1'
        else{
            sum = '0'
            carry = '1'
        }
    }
    for(let i = 0; i < n; ++i){
        sum = a[n - i - 1]
        if(carry == '1') {
            carry = '0'
            add()
        }
        const bi = b.length - i - 1
        if(bi >= 0 && b[bi] == '1') add()
        res += sum
    }
    if(carry == '1') res += '1'
    return res.split('').reverse().join('')
};