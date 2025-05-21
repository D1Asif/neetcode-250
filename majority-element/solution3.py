class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        bits = [0] * 32

        for num in nums:
            for i in range(32):
                bits[i] += (num >> i) &  1

        res = 0

        for i, bit in enumerate(bits):
            if i == 31 and (bit > (len(nums) // 2)):
                res -= 1 << i
            else:
                res |= (1 if (bit > (len(nums) // 2)) else 0) << i

        return res