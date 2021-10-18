const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 module.exports =  class BinarySearchTree {

    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

    root() {
        if (this.data == null) {
            return null
        }
        return {data: this.data, left: this.left, right: this.right}
    }

    add(data) {
        if (!this.data) {
            this.data = data;
            return
        }
        if (this.data < data) {
            if (this.right == null) {
                this.right = new Node(data);
                return
            }
            nextNode(this.right)
        } else {
            if (this.left == null) {
                this.left = new Node(data);
                return
            }
            nextNode(this.left)
        }

        function nextNode(elem) {
            if (elem.data < data) {
                if (elem.right == null) {
                    elem.right = new Node(data);
                    return
                }
                nextNode(elem.right)
            } else {
                if (elem.left == null) {
                    elem.left = new Node(data);
                    return
                }
                nextNode(elem.left)
            }
        }
    }


    has(data) {
        if (!this) {
            return false
        }
        if (this.data == data) {
            return true
        }
        let newData = this.data < data ? this.right : this.left;

        while (newData !== null) {
            if (newData.data == data) {
                return true
            }
            newData = newData.data < data ? newData.right : newData.left;
        }
        return false

    }

    find(data) {
        if (!this || !this.data) {
            return null
        }
        if (this.data == data) {
            return this
        }
        let newData = this.data < data ? this.right : this.left;
        while (newData !== null) {
            if (newData.data == data) {
                return newData
            }
            newData = newData.data < data ? newData.right : newData.left;
        }
        return null
    }

    remove(data) {
        if (!this.has(data)) {
            return;
        }
        if (this.data==data) {
            if (this.left==null && this.right==null ) {
                this.data=null;
                return;
            }
            if (this.left==null)  {
                leftData(this, this.right)
                return;
            }
            leftData(this, this.left)
            return;
        }


        let parrent = this;
        let current = this;
        if (current.data < data) {
            current = parrent.right
        } else {
            current = parrent.left
        }

        while (current.data !== data) {
            parrent = current;
            if (current.data < data) {
                current = current.right
            } else {
                current = current.left
            }
        }

        if (parrent.data < data) {
            if (current.data == data) {
                if (current.left == null) {
                    parrent.right = current.right;
                    return;
                } else if (current.right == null) {
                    parrent.right = current.left;
                    return;
                }
                leftData(current, current.left)
                // тут когда есть обе ветки
            }
        } else {
            if (current.data == data) {
                if (current.left == null) {
                    parrent.left = current.right;
                    return;
                } else if (current.right == null) {
                    parrent.left = current.left;
                    return;
                }

                leftData(current, current.left)
                // тут когда есть обе ветки
            }

        }

        function leftData(curr, elem) {
            let parr = curr;
            let stick = 'left';
            while (elem.right !== null && elem.left !== null) {
                parr = elem;
                if (elem.right == null) {
                    elem = elem.left;
                } else {
                    elem = elem.right
                    stick = 'right';
                }
            }
            let leaf = elem.data;
            if (stick == 'left') {
                parr.left = null
            } else {
                parr.right = null
            }
            curr.data = leaf;
        }


    }

    min() {
        if (!this || !this.data) {
            return null
        }
        let minData = this.data;
        let newData = this.left;
        while (newData !== null) {
            if (newData.data < minData) {
                minData = newData.data;
            }
            newData = newData.left;
        }
        return minData
    }

    max() {
        if (!this || !this.data) {
            return null
        }
        let maxData = this.data;
        let newData = this.right;
        while (newData !== null) {
            if (newData.data > maxData) {
                maxData = newData.data;
            }
            newData = newData.right;
        }
        return maxData
    }

}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(9);
// console.log(tree)
// // // tree.remove(8);
// // // tree.remove(9);
