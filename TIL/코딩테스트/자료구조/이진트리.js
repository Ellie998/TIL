class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    console.log(this);
  }
  insertNode(node, newNode) {
    // insert node into children when there is root
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // newNode.data > node.data
      if (newNode.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
    console.log(this);
  }

  /**
   *
   * @param {Node} node
   */
  preOrder(node) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  /**
   *
   * @param {Node} node
   */
  inOrder(node) {
    if (node) {
      console.log(node.data);
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }
  /**
   *
   * @param {Node} node
   */
  postOrder(node) {
    if (node) {
      console.log(node.data);
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(25);

console.log("preorder");
bst.preOrder(bst.root);
console.log("inorder");
bst.inOrder(bst.root);
console.log("postorder");
bst.preOrder(bst.root);
