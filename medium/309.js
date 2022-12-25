/**
 * 可自由買賣股票，欲求最高獲利
 * 買了一定要賣，然後賣的隔天不能買
 * 所以可分四種情況：
 *     持有，賣
 *     持有，不做事
 *     沒有，買
 *     沒有，不做事
 * 把每天都當這四種情況，掃過一遍即可
 * 
 * Time Complexity:O(n)
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let has1_sell = 0,
        has1_donothing = -prices[0],
        has0_buy = -prices[0],
        has0_donothing = 0;
    for(let i = 0; i < prices.length; ++i){
        has1_donothing = Math.max(has1_donothing, has0_buy)
        has0_buy = has0_donothing - prices[i]
        has0_donothing = Math.max(has0_donothing, has1_sell)
        has1_sell = has1_donothing + prices[i]
    }
    return has1_sell > has0_donothing ? has1_sell : has0_donothing
};