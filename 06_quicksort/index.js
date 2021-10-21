const arr = [9, 2, 5, 1, 8, 3, 6, 7];
function applyquickSort() {
    quickSort(arr, 0, arr.length - 1);
    console.log(arr);
}
function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = arr[pivotIndex];
    const index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }

    }
    return left;
}
function swap(arr, from, to) {
    const elToSwap = arr[from];
    arr[from] = arr[to];
    arr[to] = elToSwap;
}