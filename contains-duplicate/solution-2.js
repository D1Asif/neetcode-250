class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set(nums)
        if (nums.length > numSet.size) {
            return true;
        }
        return false;
    }
}
