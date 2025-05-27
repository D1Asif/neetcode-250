class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    this.heapSort(nums);
    return nums;
  }

  heapify(arr, n , i) {
    const left = (i << 1) + 1;
    const right = (i << 1) + 2;
    let largest = i;

    if (left < n && arr[largest] < arr[left]) {
        largest = left;
    }

    if (right < n && arr[largest] < arr[right]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        this.heapify(arr, n, largest);
    }

  }

  heapSort(nums) {
    const n = nums.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(nums, n, i);
    }

    for(let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]
        this.heapify(nums, i, 0)
    }
  }
}
