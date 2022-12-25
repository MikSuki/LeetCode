/**
 * 每個 room 可能有 key，判斷是否能打開所有 rooms
 * 用 set 記，一個一個看即可
 * Time Complexity: (O(M + N))
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length
    const unlock = new Array(n).fill(null).map(() => 0)
    const keys = new Set([0])
    let cnt = 0
    keys.forEach(k => {
        if (!unlock[k]) {
            unlock[k] = 1
                ++cnt
            rooms[k].forEach(e => keys.add(e))
        }
    })
    return cnt === n
};