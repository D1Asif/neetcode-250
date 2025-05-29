class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        const res = [];

        for (let num of nums) {
            countMap.set(num, countMap.get(num) ? countMap.get(num) + 1 : 1)
        }

        const sorted = [...countMap.entries()].sort((a, b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            res.push(sorted[i][0])
        }

        return res;
    }
}
