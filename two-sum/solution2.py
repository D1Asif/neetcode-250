class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ara = []

        for i, n in enumerate(nums):
            ara.append([n, i])

        ara.sort()

        i, j = 0, len(nums) -  1

        while(i < j):
            sum = ara[i][0] + ara[j][0]

            if (sum == target):
                return [
                    min(ara[i][1], ara[j][1]),
                    max(ara[i][1], ara[j][1])
                ]
            elif (sum < target):
                i += 1
            else:
                j -= 1