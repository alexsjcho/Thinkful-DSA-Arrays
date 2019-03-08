/* 
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true

*/

/* 
Resources:
Cracking The Coding Interview: Q1.9 - String Rotation
https://www.youtube.com/watch?v=fKGBNCep3ZI&t=246s
*/

let str1 = "junk";
let str2 = "knuj";

function isSubstring(str1, str2){
    if (str2 in str1){
        return True
    } else{
        return False
    }
}

function rotateString (str1, str2){
    if(str1.length !=== str2.length){
        return false;
    } else {
        str1 += str1
        return isSubstring(str1, str2)
    }
}
