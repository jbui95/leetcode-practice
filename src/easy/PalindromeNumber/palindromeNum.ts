/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/
function isPalindrome(x: number): boolean {
    let output = x.toString().split('').reverse().join('')
    return output === x.toString();
};