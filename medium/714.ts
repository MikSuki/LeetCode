/**
    問題: 
        給一個股價序列和交易稅金，找到收益最好的金額

    方法: 
        兩個變數hold和sold分別記錄目前持有的金額和賣出的金額
        loop計算即可
    
    時間:
        O(n)

 */
function maxProfit(prices: number[], fee: number): number {
    let hold: number = -prices[0], sold: number = 0
    for (let i = 1; i < prices.length; ++i) {
        const hold_tmp = hold
        hold = Math.max(hold, sold - prices[i])
        sold = Math.max(sold, hold_tmp + prices[i] - fee)
    }

    return sold
};