class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        result.extend(nums)
        result.extend(nums)
        return result