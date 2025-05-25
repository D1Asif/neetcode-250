class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    function partition(l, r) {
        const mid = (l + r) >> 1;
        [nums[l+1], nums[mid]] = [nums[mid], nums[l+1]]

        if (nums[l+1] < nums[l]) {
            [nums[l], nums[l+1]] = [nums[l+1], nums[l]]
        }
        if (nums[r] < nums[l]) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
        }
        if (nums[r] < nums[l+1]) {
            [nums[l+1], nums[r]] = [nums[r], nums[l+1]]
        }

        let i = l + 1;
        let j = r;
        const pivot = nums[l+1];

        while (true) {
            while(nums[++i] < pivot);
            while(nums[--j] > pivot);
            if (i > j) {
                break;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        nums[l+1] = nums[j]
        nums[j] = pivot;
        return j;
    }

    function quickSort(left , right) {
        if (left + 1 >= right) {
            if (left + 1 === right && nums[left] > nums[right]) {
                [nums[left], nums[right]] = [nums[right], nums[left]]
            }
            return;
        }

        const pivot = partition(left, right);
        quickSort(left, pivot - 1);
        quickSort(pivot + 1, right);
    }

    quickSort(0, nums.length - 1);
    return nums;
  }
}
