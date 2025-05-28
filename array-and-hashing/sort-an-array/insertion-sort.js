class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    for (let i = 1; i < nums.length - 1; i++) {
        let j = i + 1;
        while (nums[j] < nums[j-1] && j >= 0) {
            [nums[j-1], nums[j]] = [nums[j-1], nums[j]];
            j--;
        }
    }

    return nums;
  }
}
