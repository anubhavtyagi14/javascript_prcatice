class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insertNode(node, value) {
        if (node === null) { return }
        node.children.push(new Node(value));
    }
    findRightView() {
        if (this.root == null) { return; }
        let current = this.root;
        const result = [];
        const q = [];
        result.push(current.value);
        q.push(current);
        while (q.length) {
            const n = q.length;
            for (let index = 0; index < n; index++) {
                const first = q.shift();
                if (index === n - 1) {
                    result.push(first);
                }
                first.children.forEach(element => {
                    q.push(element);
                });
            }
        }
        return result;
    }
}