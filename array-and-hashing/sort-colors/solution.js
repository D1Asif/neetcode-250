class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = Array(3).fill(0);

        for (let num in nums) {
            count[num] += 1
        }

        let numIndex = 0;
        let countIndex = 0;

        while(countIndex <= 2) {
            while (count[countIndex] > 0) {
                nums[numIndex] = countIndex
                numIndex++;
                count[countIndex] -= 1;
            }
            countIndex++;
        }

        return nums;
    }
}
