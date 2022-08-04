// Assume heap is represented as an array list: heap = [...]
// Assume min-heap

function siftDown(idx) {
    let leftChildIdx = (2 * idx) + 1;
    let rightChildIdx = (2 * idx) + 2;
    // base case
    // make sure the heap has children
    // it has to at least have a left child
    if(leftChildIdx >= heap.length) return;
    // start at the current node and find the new min-value among the three nodes (parent, left child, right child)
    // let node = heap[idx];
    let minValueIdx = idx;
    // check the left child
    if(heap[leftChildIdx] !== null && heap[minValueIdx] > heap[leftChildIdx]) {
      // node = heap[leftChildIdx];
      minValueIdx = leftChildIdx;
    }
    // now check the right child
    if(heap[rightChildIdx] !== null && heap[minValueIdx] > heap[rightChildIdx]) {
     // node = heap[rightChildIdx];
      minValueIdx = rightChildIdx;
    }
    // if the min-value is not the initial node, do the swap and then recursion
    if(minValueIdx !== idx) {
      // let temp = heap[idx];
      // heap[idx] = heap[minValueIdx];
      // heap[minValueIdx] = temp;
      [heap[idx],heap[minValueIdx]] = [heap[minValueIdx],heap[idx]]
      siftDown(minValueIdx);
    }
  }
