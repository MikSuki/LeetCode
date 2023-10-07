type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise(function(res, rej){
        const n = functions.length;
        let cnt = 0;
        let ret = new Array(n);

        for(let i = 0; i < functions.length; ++i){
            functions[i]()
                .then(function(v){
                    ++cnt;
                    ret[i] = v;
                    if(cnt == n)
                        res(ret);
                })
                .catch(function(err){
                    rej(err);
                })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
