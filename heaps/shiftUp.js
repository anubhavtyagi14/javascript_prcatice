// Suppose our heap is an array: heap = [...]
// assume min-heap
function siftUp(idx) {
    // can't sift up further than the root
    if(idx === 0) return heap[0];
    // odd idx means that the child node is the left child
    // even idx means that the child node is the right child
    let parentIdx = idx % 2 === 1 ? Math.floor(idx / 2) : Math.floor(idx / 2) - 1;
    // for a min-heap, we ask if the parent > child
    // for a max-heap, we would ask if the parent < child
    if(heap[parentIdx] > heap[idx]) {
      // swap the child with the parent
      let temp = heap[parentIdx];
      heap[parentIdx] = heap[idx];
      heap[idx] = temp;
    }
    // do siftUp on the new parent now to make sure that the heap is maintained above
    siftUp(parentIdx);
  }