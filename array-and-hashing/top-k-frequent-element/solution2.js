class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let num of nums) {
            if (count[num] === undefined) {
                count[num] = 0;
            }
            count[num] += 1;
        }

        const freq = [];
        
        for (let i = 0; i <= nums.length; i++) {
            freq[i] = [];
        }

        for (let [num, cnt] of Object.entries(count)) {
            freq[cnt].push(num)
        }

        const res = [];

        for (let i = nums.length; i > 0; i--) {
            console.log(freq[i]);
            for (let num of freq[i]) {
                res.push(Number(num));
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
