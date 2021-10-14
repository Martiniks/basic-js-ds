const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

    constructor() {
        this._list = {}
    }

    getUnderlyingList() {
        return this._list;

    }

    enqueue(value) {
        if (!this._list.hasOwnProperty('next')) {
            this._list.value = value;
            this._list.next = null;
            return
        }

        lastNext(this._list, value)

        function lastNext(list, m) {
            if (list.next == null) {
                list.next = {"value": m, "next": null}
                return
            }
            lastNext(list.next, m)

        }

    }

    dequeue() {
        let first = this._list.value;
        let next = this._list.next;
        this._list = next;
        return first
    }

}
