class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    mergeSort(arr, l, r) {
        if (l === r) {
            return;
        }

        const m = Math.floor((l + r) / 2);
        this.mergeSort(arr, l, m)
        this.mergeSort(arr, m + 1, r)
        this.merge(arr, l, m, r)
    }

    merge(arr, L, M, R) {
        const temp = []
        let i = L;
        let j = M + 1;
        let k = 0;

        while(i <= M && j <= R) {
            if (arr[i] <= arr[j]) {
                temp[k] = arr[i++]
            } else {
                temp[k] = arr[j++]
            }
            k++;
        } 

        while(i <= M) {
            temp.push(arr[i++])
        }
        while (j <= R) {
            temp.push(arr[j++])
        }

        for (let i = L; i <= R; i++) {
            arr[i] = temp[i-L]
        }
    }

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }
}