class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            const diff = prices[i+1] - prices[i];
            if (diff > 0) res += diff;
        }

        return res;
    }
}
