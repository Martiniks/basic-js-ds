const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    if (this.data==null) {
      return null
    }
    return {data: this.data, left: this.left, right: this.right}
  }

  add( data ) {
    if (!this.data) {
      this.data = data;
      return
    }
    // let minData=this.data;

    if (this.data < data) {
      let minData = this.data;
      this.data = data;
      data = minData;
    }

    if (!this.left) {
      this.left = new Node(data);
      return;
    }

    if (!this.right) {
      this.right = new Node(data);
      return;
    }



  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}