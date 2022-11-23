/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
    const map = new Map();
    let island = 0;
    stones.forEach(e => union(e[0], ~e[1]));
    return stones.length - island;

    function find(k){
        if(map.get(k) === undefined){
            map.set(k, k);
            ++island;
        }
        const v = map.get(k); 
        if(k !== v) map.set(k, find(map.get(v)));
        return map.get(k);
    }

    function union(x, y){
        x = find(x);
        y = find(y);
        if(x !== y) {
            map.set(x, y);
            --island;
        }
    }
};