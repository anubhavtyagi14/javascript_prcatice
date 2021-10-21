// Assume the heap is represented as an array list: heap = [...]
// Assume we're dealing with a min-heap

function insertNode(node) {
    // add the new node to the end of the list
    heap.push(node);
    // get the index of the new node
    let lastIdx = heap.length - 1;
    // find the parent of the new node
    let parentIdx = lastIdx % 2 === 0 ? Math.floor(lastIdx / 2) - 1 : Math.floor(lastIdx / 2);
    // this is for a min-heap: determine if the parent is larger than the child
    if(heap[parentIdx] > heap[lastIdx]) {
      // swap the parent with the child
      let temp = heap[parentIdx];
      heap[parentIdx] = heap[lastIdx];
      heap[lastIdx] = temp;
    }
    // apply siftUp on the node
    siftUp(parentIdx);
  }