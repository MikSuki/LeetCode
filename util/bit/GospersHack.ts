/**
 * Iterate all the n-bit state where there are k 1-bits.
 * @param k 
 * @param n 
 */
function GospersHack(k: number, n: number) {
    let state: number = (1 << k) - 1;
    while (state < (1 << n)) {
        // doSomething(state);

        const c: number = state & - state;
        const r: number = state + c;
        state = (((r ^ state) >> 2) / c) | r;
    }
}
