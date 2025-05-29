class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  sortColors(nums) {
    let j = -1;
    let k = nums.length;
    for (let i = 0; i < k; i++) {
      if (nums[i] === 0) {
		j++
		[nums[i], nums[j]] = [nums[j], nums[i]];
	  }
	  if (nums[i] === 2) {
		k--;
		[nums[i], nums[k]] = [nums[k], nums[i]];
		i--;
	  }
    }

    return nums;
  }
}
