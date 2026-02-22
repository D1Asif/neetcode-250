class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map();
        const res = new Set();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
            if (map.get(num) > Math.floor(nums.length / 3)) {
                res.add(num);
            }
        }

        return Array.from(res);
    }
}
