function heapify(arr, length, i) {
    let larget = i;
    let left = i * 2 + 1;
    let right = left + 1;
    if (left < length && arr[left] > arr[larget]) {
        larget = left;
    }
    if (right < length && arr[right] > arr[larget]) {
        larget = right;
    }
    if (larget != i) {
        [arr[i], arr[larget]] = [arr[larget], arr[i]];
        heapify(arr, length, larget);
    }
    return arr;
}
function heapSort(arr) {
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let last = length - 1;
    /**
     * Build Max Heap
     */
    while (i >= 0) {
        heapify(arr, length, i);
        i--;
    }
    // console.log(arr);
    /**
     * Run HeapSort
     */
    while (last >= 0) {
        [arr[0], arr[last]] = [arr[last], arr[0]];
        heapify(arr, last, 0);
        last--;
    }
    return arr;


}

const arrayToSort = [2, 34, 12, 54, 1, 87, 23, 44, 90, 47];
heapSort(arrayToSort);