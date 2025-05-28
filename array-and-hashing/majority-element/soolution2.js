class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort();

        return nums[Math.floor(nums.length / 2)]
    }
}