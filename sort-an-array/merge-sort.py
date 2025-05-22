class Solution:
    def mergeSort(self, arr: List[int], l: int, r: int):
        if l == r:
            return
        
        m = (l + r) // 2
        self.mergeSort(arr, l, m)
        self.mergeSort(arr, m+1, r)
        self.merge(arr, l, m, r)

    def merge(self, arr: List[int], L, M, R):
        Left, Right  = arr[L:M+1], arr[M+1:R+1]
        i, j, k = 0, 0, L

        while (i < len(Left) and j < len(Right)):
            if (Left[i] <= Right[j]):
                arr[k] = Left[i]
                i += 1
            else:
                arr[k] = Right[j]
                j += 1
            k += 1

        while (i < len(Left)):
            arr[k] = Left[i]
            i += 1
            k += 1

        while (j < len(Right)):
            arr[k] = Right[j]
            j += 1
            k += 1

    def sortArray(self, nums: List[int]) -> List[int]:
        self.mergeSort(nums, 0, len(nums) - 1)
        return nums