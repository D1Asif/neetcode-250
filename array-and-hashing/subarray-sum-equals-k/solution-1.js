class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;

        for(let i = 0; i < nums.length; i++) {
            let sum = nums[i];
            if (sum === k) count++;

            let j = i + 1;

            while (j < nums.length) {
                sum += nums[j]
                if (sum === k) count++;
                j++;
            }
        }

        return count;
    }
}
