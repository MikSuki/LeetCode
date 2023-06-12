function minFlips(a: number, b: number, c: number): number {
    let flip = 0

    while(a || b || c){
        if(c & 1)
            flip += ((a& 1 ) | (b& 1)) == 0 ? 1 : 0
        else
            flip += (a & 1) + (b & 1)
        a = a >> 1
        b = b >> 1
        c = c >> 1
    }

    return flip
};

//  10
// 110
// 101