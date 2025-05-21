class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        while True:
            randNum = random.choice(nums)

            if (nums.count(randNum) > len(nums) // 2):
                return randNum