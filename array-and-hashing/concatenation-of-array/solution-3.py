class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        n = len(nums)
        for i in range(n * 2):
            result.append(nums[i % n])
        return result