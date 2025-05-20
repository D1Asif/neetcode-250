class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const ara = [];

        for (let num of nums) {
            if (num !== val) {
                ara.push(num)
            }
        }

        for (let i = 0; i < ara.length; i++) {
            nums[i] = ara[i]
        }

        return ara.length;
    }
}
