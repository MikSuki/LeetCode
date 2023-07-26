/**
    題目:
        1870. Minimum Speed to Arrive on Time

    描述:
        給一個array表示所有車站距離，及hour
        求一個最小的時數，依序到達array中的每個車站
        若到達一個車站花費2.33小時，則須等待到3小時才有下班車(取上界整數)

    方法:
        Binary search
        時速: 1~10^7

    時間:   
        O(nlogk) = O(nlog(10^7))

 */

function minSpeedOnTime(dist: number[], hour: number): number {
    if (hour <= dist.length - 1) return -1

    let l: number = 1, r: number = 1e7
    const cal = (m: number) => {
        let sum: number = 0
        for (let i = 0; i < dist.length - 1; ++i)
            sum += Math.ceil(dist[i] / m)
        sum += dist[dist.length - 1] / m
        return sum
    }

    while (l < r) {
        const m: number = (l + r) >> 1
        let cost: number = cal(m);
        if (cost > hour) l = m + 1
        else r = m
    }
    return l
};