/**
 * 排程
 * 給定工作時間及收穫，找最好的選擇
 * 先根據 endTime 排序
 * dp找：加入第 i 個 or dp[i-1] 比較好
 * Time: O(n^2)
 * 可用 binary search
 * 時間能降到 O(nlogn)
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const job = [];
    const n = profit.length;
    for(let i = 0; i < n; ++i)
        job.push({s: startTime[i], e: endTime[i], p: profit[i]});
    job.sort((a, b) => a.e - b.e);
    const dp = new Array(n);
    dp[0] = job[0].p;
    for(let i = 1; i < n; ++i){
        let k = -1; // task
        let p = job[i].p;
        /** can be done by binary search */
        for(let j = i - 1; j >= 0; --j){
            if(job[i].s >= job[j].e){
                k = j;
                break;
            }
        }
        if(k !== -1) p += dp[k];
        dp[i] = Math.max(dp[i-1], p);
    }
    return dp[n-1];
};