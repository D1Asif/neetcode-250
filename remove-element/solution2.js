class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let j = 0;
        for (let num of nums) {
            if (num !== val) {
                nums[j] = num;
                j++;
            }
        }
        
        return j;
    }
}
