class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    majorityElement(nums) {
        const count = {}

        for (let num of nums) {
            if (count[num] === undefined) {
                count[num] = 1
            } else {
                count[num] += 1
            }
        }

        for (let num of nums) {
            if (count[num] > (nums.length) / 2) {
                return num;
            }
        }
    }
}
