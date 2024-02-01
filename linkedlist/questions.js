

//1. https://leetcode.com/problems/palindrome-linked-list/solutions/3014249/palindrome-singly-linked-list/


function isPalindrome(head){
    let string1 = (string2= "");
    let current = head;
    while(current !== null){
        string1= `${string1}${current}`;
        string2 =`${current}${string2}`;
    }
    return string1 === string2;
}   //TLE in leetcode

function isPalindrome1(head){

      // Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;  // to preserve the  current next element        
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Compare the first half of the linked list to the reversed second half
  let p1 = head;
  let p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}