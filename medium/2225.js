/**
 * 找比賽中沒輸過和只輸一場的選手
 * map...
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
    const map = new Map();
    const player_list = [];
    const setValue = ((player, add) => {
        const val = map.get(player);
        map.set(player, val === undefined ? add : val + add);
    });
    matches.forEach(match => {
        player_list[match[0]] = 1;
        player_list[match[1]] = 1;
        setValue(match[0], 0);
        setValue(match[1], 1);
    });
    const output = [[], []];
    for(let i = 1; i <= player_list.length; ++i){
        if(player_list[i]){
            const v = map.get(i);
            if(v < 2) output[v].push(i);
        }
    }
    return output;
};