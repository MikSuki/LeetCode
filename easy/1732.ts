/**
    問題: 給一串序列，找總和最高點

    時間: O(n)
 */
    function largestAltitude(gain: number[]): number {
        let max: number = 0
        let altitude: number = 0
        gain.forEach(e => {
            altitude += e
            max = Math.max(max, altitude)
        })
        return max
    };