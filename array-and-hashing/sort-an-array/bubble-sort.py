class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        for idx in range(len(nums)-1):
            for i in range(len(nums)-2, -1 + idx, -1):
                if (nums[i] > nums[i+1]):
                    temp = nums[i+1]
                    nums[i+1] = nums[i]
                    nums[i] = temp
        
        return nums