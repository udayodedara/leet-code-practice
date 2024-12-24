/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newL1 = reverseLinkedList(l1);
  //   let newL2 = reverseLinkedList(l2);
  newL1 = convertNumber(newL1);
  console.log("newL1", newL1);
  const res = reverseNumber(newL1);
};

function reverseNumber(number) {
  let string = number.toString();
  string = string.split("");
  string = string.reverse();
  console.log("string", string);

  let newNode = null;
  for (let i = 0; i < string.length; i++) {
    console.log("i", i);
    console.log("newNode", newNode);
    // newNode = new ListNode(string[i]);
    if (newNode === null) {
      newNode = new ListNode(string[i]);
    }
    if (newNode.next === null) {
      newNode = new ListNode(string[i + 1]);
    }
  }
  console.log("newNode", newNode);
}

function convertNumber(head) {
  let curr = head;
  let res = "";

  while (curr !== null) {
    res = `${res}${curr.val}`;
    curr = curr.next;
  }

  return Number(res);
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(2);
let second = new ListNode(4);
let third = new ListNode(3);

head.next = second;
second.next = third;

// console.log("head", head);
addTwoNumbers(head);
