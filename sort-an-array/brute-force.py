class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        for i in range(len(nums) - 1):
            for j in range(i+1, len(nums)):
                if (nums[i] > nums[j]):
                    temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
        return nums