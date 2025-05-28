function radixSort(arr) {
    const max = Math.max(...arr);
    let d = 1;
    while (Math.floor(max / d) > 0) {
        countSort(arr, d);
        d *= 10;
    }
}

function countSort(arr, d) {
    const digitCount = Array(10).fill(0);

    for (let elem of arr) {
        digitCount[Math.floor(elem / d) % 10] += 1;
    }

    for (let i = 1; i < 10; i++) {
        digitCount[i] += digitCount[i - 1];
    }

    const res = [];

    for (let i = arr.length; i >= 0; i--) {
        const elem = arr[i];
        res[digitCount[Math.floor(elem / d) % 10] - 1] = elem;
        digitCount[Math.floor(elem / d) % 10] -= 1;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = res[i];
    }
}

var sortArray = function (nums) {
    let negatives = nums.filter((num) => num < 0).map(num => -num);
    const positives = nums.filter(num => num >= 0);

    radixSort(negatives);
    negatives.reverse();
    negatives = negatives.map(num => -num)

    radixSort(positives);

    return [...negatives, ...positives];
};