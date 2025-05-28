class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        score = result = 0

        for num in nums:
            if score  == 0:
                result = num
            score += 1 if (num == result) else -1

        return result