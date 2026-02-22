// time complexity -> 2^n -> inefficient

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const rec = (i, bought) => {
            if (i === prices.length) return 0;

            let res = rec(i + 1, bought);

            if (bought) {
                res = Math.max(res, prices[i] + rec(i+1, false))
            } else {
                res = Math.max(res, - prices[i] + rec(i+1, true))
            }

            return res;
        }

        return rec(0, false);
    }
}
