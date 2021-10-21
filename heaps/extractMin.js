// Assume the heap is represented as an array list: heap = [...]
// Assume we're dealing with a min-heap

function extractMin() {
    // swap the root with the last node
    let temp = heap[0];
    heap[0] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;
    
    // pull out the last node
    let minVal = heap.pop();
    
    // do siftDown on the new root;
    if(heap.length > 0) {
      siftDown(0);
    }
    
    // return the min value
    return minVal;
  }
  
  
  // alternative, no need to swap just save the root
  function extractMin() {
    // store the min value
    let minVal = heap[0];
    // copy the last node into the root
    heap[0] = heap[heap.length - 1];
    // remove the last node from the heap
    heap.pop();
    // do a siftDown on the new root
    if(heap.length > 0) {
      siftDown(0);
    }
    // return the min value
    return minVal;
  }