function countVowelPermutation(n: number): number {
    let map = { 
        a: 1, e: 1, i: 1, o: 1, u: 1 
    };
    let sum: number = 0;
    const MOD: number = 1e9 + 7;

    while(--n > 0){
        const tmp = {
            a: 1, e: 1, i: 1, o: 1, u: 1 
        };

        tmp['a'] = (map['e'] + map['i'] + map['u']) % MOD; 
        tmp['e'] = (map['a'] + map['i']) % MOD; 
        tmp['i'] = (map['e'] + map['o']) % MOD; 
        tmp['o'] = map['i']; 
        tmp['u'] = (map['i'] + map['o']) % MOD; 

        map = tmp;
    }

    for(const k in map)
        sum = (sum + map[k]) % MOD;

    return sum;
};

//    1 2 3  4
// a  1 3 6 11
// e  1 2 5  9
// i  1 2 3  7
// o  1 1 2  3
// u  1 2 3  5

// a: e, i, u
// e: a, i
// i: e, o
// o: i
// u: i, o
